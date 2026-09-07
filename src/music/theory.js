import { Chord, Note } from 'tonal';

const SPANISH_NOTES = {
  do: 'C',
  re: 'D',
  mi: 'E',
  fa: 'F',
  sol: 'G',
  la: 'A',
  si: 'B',
};

const ENGLISH_TO_SPANISH = {
  C: 'Do',
  D: 'Re',
  E: 'Mi',
  F: 'Fa',
  G: 'Sol',
  A: 'La',
  B: 'Si',
};

function normalizeAccidentals(value) {
  return String(value)
    .replaceAll('♯', '#')
    .replaceAll('♭', 'b')
    .replaceAll('♮', '');
}

export function normalizeNote(value, defaultOctave = 4) {
  const input = normalizeAccidentals(value).trim();

  const spanish = input.match(
    /^(do|re|mi|fa|sol|la|si)(#{1,2}|b{1,2})?(-?\d+)?$/i
  );

  if (spanish) {
    const letter = SPANISH_NOTES[spanish[1].toLowerCase()];
    const accidental = spanish[2] || '';
    const octave = spanish[3] ?? defaultOctave;
    return `${letter}${accidental}${octave}`;
  }

  const english = input.match(/^([A-Ga-g])(#{1,2}|b{1,2})?(-?\d+)?$/);

  if (english) {
    const letter = english[1].toUpperCase();
    const accidental = english[2] || '';
    const octave = english[3] ?? defaultOctave;
    return `${letter}${accidental}${octave}`;
  }

  throw new Error(`Nota no reconocida: ${value}`);
}

export function noteToMidi(value, defaultOctave = 4) {
  const normalized = normalizeNote(value, defaultOctave);
  const midi = Note.midi(normalized);

  if (midi === null) {
    throw new Error(`No se pudo convertir la nota: ${value}`);
  }

  return midi;
}

export function midiToNote(midi) {
  return Note.fromMidi(midi);
}

export function noteLabel(value) {
  const normalized = normalizeNote(value);
  const parsed = Note.get(normalized);
  const letter = parsed.letter;
  const accidental = parsed.alt > 0
    ? '#'.repeat(parsed.alt)
    : 'b'.repeat(Math.abs(parsed.alt));

  return `${ENGLISH_TO_SPANISH[letter]}${accidental}${parsed.oct}`;
}

export function getChordNotes(symbol, octave = 4) {
  const chord = Chord.get(symbol);

  if (chord.empty || !chord.notes.length) {
    throw new Error(`Acorde no reconocido: ${symbol}`);
  }

  return chord.notes.map((note) => normalizeNote(note, octave));
}

export function resolveMusicTerm(type, value, octave = 4) {
  if (type === 'note') {
    return {
      type,
      title: noteLabel(normalizeNote(value, octave)),
      notes: [normalizeNote(value, octave)],
    };
  }

  if (type === 'chord') {
    return {
      type,
      title: value,
      notes: getChordNotes(value, octave),
    };
  }

  throw new Error(`Tipo musical no soportado: ${type}`);
}

export function normalizeExercise(raw) {
  if (!raw || typeof raw !== 'object') {
    throw new Error('El ejercicio debe ser un objeto JSON.');
  }

  const tempo = Number(raw.tempo ?? 60);
  const beatsPerBar = Number(raw.beatsPerBar ?? 4);

  if (!Number.isFinite(tempo) || tempo < 20 || tempo > 240) {
    throw new Error('El tempo debe estar entre 20 y 240 BPM.');
  }

  if (!Number.isInteger(beatsPerBar) || beatsPerBar < 1 || beatsPerBar > 16) {
    throw new Error('beatsPerBar debe ser un entero entre 1 y 16.');
  }

  if (!Array.isArray(raw.events) || raw.events.length === 0) {
    throw new Error('El ejercicio necesita al menos un evento.');
  }

  const events = raw.events.map((event, index) => {
    const beat = Number(event.beat);
    const duration = Number(event.duration ?? 1);

    if (!Number.isFinite(beat) || beat < 0) {
      throw new Error(`Beat inválido en el evento ${index + 1}.`);
    }

    if (!Number.isFinite(duration) || duration <= 0) {
      throw new Error(`Duración inválida en el evento ${index + 1}.`);
    }

    if (!Array.isArray(event.notes) || !event.notes.length) {
      throw new Error(`El evento ${index + 1} necesita notas.`);
    }

    const notes = event.notes.map((note) => normalizeNote(note));
    const hand = event.hand === 'left' ? 'left' : 'right';

    return {
      beat,
      duration,
      notes,
      midi: notes.map((note) => noteToMidi(note)),
      hand,
    };
  });

  events.sort((a, b) => a.beat - b.beat);

  const totalBeats = Math.max(
    ...events.map((event) => event.beat + event.duration),
    Number(raw.totalBeats || 0)
  );

  return {
    id: String(raw.id || 'exercise'),
    title: String(raw.title || 'Ejercicio musical'),
    description: String(raw.description || ''),
    tempo,
    beatsPerBar,
    countIn: Number(raw.countIn ?? 0),
    events,
    totalBeats,
  };
}