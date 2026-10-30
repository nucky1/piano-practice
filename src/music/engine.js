import * as Tone from 'tone';
import { normalizeNote, normalizeExercise } from './theory.js';

class MusicEngine {
  constructor() {
    this.instrument = null;
    this.leadInstrument = null;
    this.ready = false;
    this.part = null;
    this.exercise = null;
    this.listeners = new Set();
    this.running = false;
    this.activeNotes = [];
    this.position = 0;
    this.loop = false;
    this.animationFrame = null;
    this.startedAt = 0;
    this.startBeat = 0;
    this.tempo = 60;
    this.scheduledEnd = null;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.getState());
    return () => this.listeners.delete(listener);
  }

  getState() {
    return {
      running: this.running,
      activeNotes: this.activeNotes,
      position: this.position,
      tempo: this.tempo,
      exercise: this.exercise,
      loop: this.loop,
    };
  }

  notify() {
    const state = this.getState();
    for (const listener of this.listeners) listener(state);
  }

  async init() {
    await Tone.start();

    if (this.ready) return;

    this.instrument = new Tone.Sampler({
      urls: {
        C4: 'C4.mp3',
        'D#4': 'Ds4.mp3',
        'F#4': 'Fs4.mp3',
        A4: 'A4.mp3',
      },
      baseUrl: 'https://tonejs.github.io/audio/salamander/',
      release: 1.1,
    }).toDestination();

    this.instrument.volume.value = -7;
    this.leadInstrument = new Tone.Sampler({
      urls: {
        C4: 'C4.mp3',
        'D#4': 'Ds4.mp3',
        'F#4': 'Fs4.mp3',
        A4: 'A4.mp3',
      },
      baseUrl: 'https://tonejs.github.io/audio/salamander/',
      release: 0.7,
    }).toDestination();
    this.leadInstrument.volume.value = -10;
    await Tone.loaded();
    this.ready = true;
  }

  async playNotes(notes, duration = 1.5) {
    await this.init();
    this.stop();

    const normalized = notes.map((note) => normalizeNote(note));
    const seconds = Number(duration);

    this.activeNotes = normalized;
    this.notify();

    this.instrument.triggerAttackRelease(normalized, seconds);

    const clearAt = Tone.now() + seconds;
    Tone.getContext().draw.schedule(() => {
      if (this.activeNotes.join(',') === normalized.join(',')) {
        this.activeNotes = [];
        this.notify();
      }
    }, clearAt);
  }

  async playArpeggio(notes, tempo = 60) {
    await this.init();
    this.stop();

    const normalized = notes.map((note) => normalizeNote(note));
    const secondsPerBeat = 60 / tempo;
    const now = Tone.now() + 0.05;

    normalized.forEach((note, index) => {
      const time = now + index * secondsPerBeat;
      this.instrument.triggerAttackRelease(note, secondsPerBeat * 0.85, time);
      Tone.getContext().draw.schedule(() => {
        this.activeNotes = [note];
        this.notify();
      }, time);
    });

    Tone.getContext().draw.schedule(() => {
      this.activeNotes = [];
      this.notify();
    }, now + normalized.length * secondsPerBeat);
  }

  setExercise(raw) {
    this.stop();
    this.exercise = normalizeExercise(raw);
    this.tempo = this.exercise.tempo;
    this.position = 0;
    this.notify();
  }

  setTempo(tempo) {
    const value = Number(tempo);
    if (!Number.isFinite(value)) return;

    this.tempo = Math.max(20, Math.min(240, value));
    Tone.getTransport().bpm.value = this.tempo;
    this.notify();
  }

  setLoop(value) {
    this.loop = Boolean(value);
    this.notify();
  }

  clearSchedule() {
    if (this.part) {
      this.part.stop();
      this.part.dispose();
      this.part = null;
    }

    if (this.scheduledEnd !== null) {
      Tone.getTransport().clear(this.scheduledEnd);
      this.scheduledEnd = null;
    }

    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  getActiveAtBeat(beat) {
    if (!this.exercise) return [];

    return this.exercise.events
      .filter((event) => beat >= event.beat && beat < event.beat + event.duration)
      .flatMap((event) => event.notes);
  }

  updateFrame = () => {
    if (!this.running || !this.exercise) return;

    const elapsed = Math.max(0, Tone.now() - this.startedAt);
    const beat = this.startBeat + elapsed * this.tempo / 60;

    this.position = Math.min(beat, this.exercise.totalBeats);
    this.activeNotes = this.getActiveAtBeat(this.position);
    this.notify();

    if (this.position >= this.exercise.totalBeats && !this.loop) {
      this.stop();
      return;
    }

    this.animationFrame = requestAnimationFrame(this.updateFrame);
  };

  async play() {
    if (!this.exercise) return;
    if (this.running) return;

    await this.init();

    const transport = Tone.getTransport();
    transport.stop();
    transport.cancel();
    this.clearSchedule();

    transport.bpm.value = this.tempo;
    this.startBeat = this.position;
    this.startedAt = Tone.now() + 0.08;

    const events = this.exercise.events
      .filter((event) => event.beat >= this.startBeat)
      .map((event) => ({
        time: (event.beat - this.startBeat) * 60 / this.tempo,
        notes: event.notes,
        duration: event.duration * 60 / this.tempo,
        voice: event.voice,
      }));

    this.part = new Tone.Part((time, event) => {
      const instrument = event.voice === 'lead' ? this.leadInstrument : this.instrument;
      instrument.triggerAttackRelease(
        event.notes,
        event.duration * 0.92,
        time
      );
    }, events);

    this.part.start(0);
    transport.start(`+0.08`);

    this.running = true;
    this.notify();
    this.animationFrame = requestAnimationFrame(this.updateFrame);
  }

  pause() {
    if (!this.running) return;

    this.running = false;
    this.clearSchedule();
    Tone.getTransport().stop();
    this.instrument?.releaseAll();
    this.leadInstrument?.triggerRelease();

    this.activeNotes = [];
    this.notify();
  }

  stop() {
    this.running = false;
    this.clearSchedule();
    Tone.getTransport().stop();
    Tone.getTransport().cancel();
    this.instrument?.releaseAll();
    this.leadInstrument?.triggerRelease();

    this.activeNotes = [];
    this.position = 0;
    this.notify();
  }

  dispose() {
    this.stop();
    this.instrument?.dispose();
    this.leadInstrument?.dispose();
    this.instrument = null;
    this.leadInstrument = null;
    this.ready = false;
    this.listeners.clear();
  }
}

export const musicEngine = new MusicEngine();
