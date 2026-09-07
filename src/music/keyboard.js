import { midiToNote, noteToMidi } from './theory.js';

const WHITE_CLASSES = new Set([0, 2, 4, 5, 7, 9, 11]);

const NOTE_NAMES = [
  'Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa',
  'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si',
];

function isWhite(midi) {
  return WHITE_CLASSES.has(((midi % 12) + 12) % 12);
}

function toMidi(note) {
  return typeof note === 'number' ? note : noteToMidi(note);
}

export class PianoKeyboard {
  constructor(container, options = {}) {
    this.container = container;
    this.minMidi = options.minMidi ?? 48;
    this.maxMidi = options.maxMidi ?? 84;
    this.onNote = options.onNote ?? null;

    this.active = new Set();
    this.handNotes = {
      left: new Set(),
      right: new Set(),
    };

    this.render();
  }

  render() {
    const whites = [];
    const blacks = [];

    for (let midi = this.minMidi; midi <= this.maxMidi; midi++) {
      if (isWhite(midi)) whites.push(midi);
      else blacks.push(midi);
    }

    const whiteWidth = 40;
    const width = whites.length * whiteWidth;
    const height = 156;

    const whiteKeys = whites.map((midi, index) => {
      const label = NOTE_NAMES[midi % 12];
      const octave = Math.floor(midi / 12) - 1;

      return `
        <g class="piano-key piano-key--white" data-midi="${midi}">
          <rect
            x="${index * whiteWidth + 1}"
            y="1"
            width="38"
            height="128"
            rx="3"
          />
          <text
            x="${index * whiteWidth + 20}"
            y="146"
            text-anchor="middle"
          >${label}${octave}</text>
        </g>
      `;
    }).join('');

    const blackKeys = blacks.map((midi) => {
      const previousWhites = whites.filter((note) => note < midi).length;
      const x = previousWhites * whiteWidth - 12;

      return `
        <g class="piano-key piano-key--black" data-midi="${midi}">
          <rect x="${x}" y="1" width="24" height="82" rx="2" />
        </g>
      `;
    }).join('');

    this.container.innerHTML = `
      <div
        class="piano-keyboard"
        role="group"
        aria-label="Teclado de piano"
        style="width:100%;max-width:100%;min-width:0;overflow:hidden"
      >
        <svg
          viewBox="0 0 ${width} ${height}"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style="display:block;width:100%;max-width:100%;min-width:0;height:auto;max-height:none"
        >
          ${whiteKeys}
          ${blackKeys}
        </svg>
      </div>
    `;

    this.container.querySelectorAll('[data-midi]').forEach((key) => {
      key.addEventListener('click', () => {
        const midi = Number(key.dataset.midi);
        this.onNote?.(midiToNote(midi), midi);
      });
    });

    this.update();
  }

  setActive(notes = [], handNotes = null) {
    this.active = new Set(notes.map(toMidi));

    if (handNotes) {
      this.handNotes = {
        left: new Set((handNotes.left || []).map(toMidi)),
        right: new Set((handNotes.right || []).map(toMidi)),
      };
    } else {
      this.handNotes = {
        left: new Set(),
        right: new Set(),
      };
    }

    this.update();
  }

  update() {
    this.container.querySelectorAll('[data-midi]').forEach((key) => {
      const midi = Number(key.dataset.midi);
      const left = this.handNotes.left.has(midi);
      const right = this.handNotes.right.has(midi);

      key.classList.toggle('is-active', this.active.has(midi));
      key.classList.toggle('is-left', left);
      key.classList.toggle('is-right', right);
    });
  }

  destroy() {
    this.container.innerHTML = '';
  }
}