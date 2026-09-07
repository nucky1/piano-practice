import { normalizeExercise, noteLabel } from './theory.js';
import { musicEngine } from './engine.js';
import { PianoKeyboard } from './keyboard.js';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${minutes}:${String(remaining).padStart(2, '0')}`;
}

export class MusicExercisePlayer {
  constructor(container, rawExercise) {
    this.container = container;
    this.exercise = normalizeExercise(rawExercise);
    this.keyboard = null;
    this.unsubscribe = null;
    this.tempo = this.exercise.tempo;
    this.loop = false;

    this.render();
  }

  render() {
    const exercise = this.exercise;
    const allMidi = exercise.events.flatMap((event) => event.midi);
    const minMidi = Math.max(21, Math.floor((Math.min(...allMidi) - 2) / 12) * 12);
    const maxMidi = Math.min(108, Math.ceil((Math.max(...allMidi) + 2) / 12) * 12);

    const steps = exercise.events.map((event, index) => `
      <div class="music-step" data-step="${index}">
        <span class="music-step__beat">${event.beat + 1}</span>
        <strong>${event.notes.map(noteLabel).join(' + ')}</strong>
        <span class="music-step__hand">${event.hand === 'left' ? 'Izquierda' : 'Derecha'}</span>
      </div>
    `).join('');

    this.container.innerHTML = `
      <section class="music-player" aria-label="${escapeHtml(exercise.title)}">
        <div class="music-player__header">
          <div>
            <p class="eyebrow">Ejemplo del ejercicio</p>
            <h3>${escapeHtml(exercise.title)}</h3>
            ${exercise.description ? `<p>${escapeHtml(exercise.description)}</p>` : ''}
          </div>
          <span class="music-player__tempo">${this.tempo} BPM</span>
        </div>

        <div class="music-player__keyboard"></div>

        <div class="music-player__timeline">
          <div class="music-player__timeline-heading">
            <span>Secuencia</span>
            <span class="music-player__beat">Pulso 1</span>
          </div>
          <div class="music-player__steps">${steps}</div>
        </div>

        <div class="music-player__controls">
          <button type="button" class="music-button music-button--primary" data-play>▶ Escuchar</button>
          <button type="button" class="music-button" data-stop>■ Detener</button>

          <label class="music-tempo-control">
            <span>Tempo <strong data-tempo-value>${this.tempo}</strong> BPM</span>
            <input type="range" min="30" max="160" step="1" value="${this.tempo}" data-tempo />
          </label>

          <label class="music-loop-control">
            <input type="checkbox" data-loop />
            Repetir
          </label>
        </div>

        <div class="music-player__progress">
          <span data-current-time>0:00</span>
          <div class="music-progress-track"><span data-progress></span></div>
          <span data-total-time>${formatTime(exercise.totalBeats * 60 / this.tempo)}</span>
        </div>

        <p class="music-player__status" aria-live="polite">Listo para escuchar.</p>
      </section>
    `;

    this.keyboard = new PianoKeyboard(
      this.container.querySelector('.music-player__keyboard'),
      {
        minMidi,
        maxMidi,
        onNote: (note) => musicEngine.playNotes([note], 0.6),
      }
    );

    this.bindEvents();
  }

  bindEvents() {
    const playButton = this.container.querySelector('[data-play]');
    const stopButton = this.container.querySelector('[data-stop]');
    const tempoInput = this.container.querySelector('[data-tempo]');
    const loopInput = this.container.querySelector('[data-loop]');

    playButton.addEventListener('click', async () => {
      if (musicEngine.running && musicEngine.exercise?.id === this.exercise.id) {
        musicEngine.pause();
        return;
      }

      if (musicEngine.exercise?.id !== this.exercise.id) {
        musicEngine.setExercise(this.exercise);
      }

      musicEngine.setTempo(this.tempo);
      musicEngine.setLoop(this.loop);

      try {
        await musicEngine.play();
      } catch (error) {
        this.setStatus(`No se pudo iniciar el audio: ${error.message}`);
      }
    });

    stopButton.addEventListener('click', () => musicEngine.stop());

    tempoInput.addEventListener('input', () => {
      this.tempo = Number(tempoInput.value);
      this.container.querySelector('[data-tempo-value]').textContent = this.tempo;
      this.container.querySelector('.music-player__tempo').textContent = `${this.tempo} BPM`;
      this.container.querySelector('[data-total-time]').textContent =
        formatTime(this.exercise.totalBeats * 60 / this.tempo);

      if (musicEngine.exercise?.id === this.exercise.id) {
        musicEngine.setTempo(this.tempo);
      }
    });

    loopInput.addEventListener('change', () => {
      this.loop = loopInput.checked;
      musicEngine.setLoop(this.loop);
    });

    this.unsubscribe = musicEngine.subscribe((state) => this.update(state));
  }

  update(state) {
    if (state.exercise?.id !== this.exercise.id) {
      this.keyboard.setActive([]);
      return;
    }

    const beat = state.position;
    const activeEvents = this.exercise.events.filter(
      (event) => beat >= event.beat && beat < event.beat + event.duration
    );

    const hands = {
      left: activeEvents.filter((event) => event.hand === 'left').flatMap((event) => event.notes),
      right: activeEvents.filter((event) => event.hand === 'right').flatMap((event) => event.notes),
    };

    this.keyboard.setActive(state.activeNotes, hands);

    this.container.querySelectorAll('[data-step]').forEach((element) => {
      const index = Number(element.dataset.step);
      element.classList.toggle('is-active', activeEvents.includes(this.exercise.events[index]));
    });

    const currentBeat = Math.floor(beat) + 1;
    this.container.querySelector('.music-player__beat').textContent =
      `Pulso ${Math.min(currentBeat, Math.ceil(this.exercise.totalBeats))}`;

    const progress = this.exercise.totalBeats
      ? Math.min(100, beat / this.exercise.totalBeats * 100)
      : 0;

    this.container.querySelector('[data-progress]').style.width = `${progress}%`;
    this.container.querySelector('[data-current-time]').textContent =
      formatTime(beat * 60 / state.tempo);

    this.container.querySelector('[data-play]').textContent =
      state.running ? 'Ⅱ Pausar' : '▶ Escuchar';

    this.setStatus(state.running ? 'Reproduciendo el ejercicio…' : 'Listo para escuchar.');
  }

  setStatus(message) {
    const status = this.container.querySelector('.music-player__status');
    if (status) status.textContent = message;
  }

  destroy() {
    this.unsubscribe?.();
    this.keyboard?.destroy();
    this.container.innerHTML = '';
  }
}