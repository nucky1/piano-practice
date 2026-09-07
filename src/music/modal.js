import { resolveMusicTerm, noteLabel } from './theory.js';
import { musicEngine } from './engine.js';
import { PianoKeyboard } from './keyboard.js';

let modalRoot = null;
let keyboard = null;
let previousFocus = null;

function ensureModal() {
  if (modalRoot) return;

  modalRoot = document.createElement('div');
  modalRoot.className = 'music-modal-backdrop';
  modalRoot.hidden = true;

  modalRoot.innerHTML = `
    <section class="music-modal" role="dialog" aria-modal="true" aria-labelledby="music-modal-title">
      <div class="music-modal__header">
        <div>
          <p class="eyebrow">Explorador musical</p>
          <h2 id="music-modal-title"></h2>
        </div>
        <button type="button" class="music-icon-button" data-music-close aria-label="Cerrar">✕</button>
      </div>
      <p class="music-modal__notes"></p>
      <div class="music-modal__keyboard"></div>
      <div class="music-modal__actions">
        <button type="button" class="music-button music-button--primary" data-music-play>▶ Escuchar</button>
        <button type="button" class="music-button" data-music-arpeggio>♫ Arpegiar</button>
      </div>
      <p class="music-help">También podés tocar las teclas del piano.</p>
    </section>
  `;

  document.body.append(modalRoot);

  modalRoot.addEventListener('click', (event) => {
    if (event.target === modalRoot || event.target.closest('[data-music-close]')) {
      closeMusicModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modalRoot.hidden) {
      closeMusicModal();
    }
  });
}

export function openMusicModal(options) {
  ensureModal();
  musicEngine.stop();

  let term;

  try {
    term = resolveMusicTerm(
      options.type || 'note',
      options.value,
      Number(options.octave ?? 4)
    );
  } catch (error) {
    window.alert(error.message);
    return;
  }

  previousFocus = document.activeElement;
  modalRoot.hidden = false;
  document.body.classList.add('music-modal-open');

  modalRoot.querySelector('#music-modal-title').textContent = term.title;
  modalRoot.querySelector('.music-modal__notes').textContent =
    term.notes.map(noteLabel).join(' · ');

  const midi = term.notes.map((note) => {
    const { noteToMidi } = options;
    return noteToMidi ? noteToMidi(note) : null;
  });

  // El rango se ajusta al acorde para no mostrar un teclado innecesariamente grande.
  const notesMidi = term.notes.map((note) => {
    const match = note.match(/(\d+)$/);
    const octave = Number(match?.[1] ?? 4);
    const letter = note.match(/^[A-G]/)?.[0] || 'C';
    const base = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[letter];
    const accidental = note.includes('#') ? 1 : note.includes('b') ? -1 : 0;
    return (octave + 1) * 12 + base + accidental;
  });

  const min = Math.floor(Math.min(...notesMidi) / 12) * 12;
  const max = Math.ceil((Math.max(...notesMidi) + 1) / 12) * 12;

  keyboard?.destroy();
  keyboard = new PianoKeyboard(
    modalRoot.querySelector('.music-modal__keyboard'),
    {
      minMidi: Math.max(21, min),
      maxMidi: Math.min(108, max),
      onNote: (note) => musicEngine.playNotes([note], 0.7),
    }
  );

  keyboard.setActive(term.notes);

  modalRoot.querySelector('[data-music-play]').onclick = () => {
    musicEngine.playNotes(term.notes, 1.5);
  };

  modalRoot.querySelector('[data-music-arpeggio]').onclick = () => {
    musicEngine.playArpeggio(term.notes, 80);
  };

  modalRoot.querySelector('[data-music-close]').focus();
}

export function closeMusicModal() {
  if (!modalRoot || modalRoot.hidden) return;

  musicEngine.stop();
  keyboard?.destroy();
  keyboard = null;

  modalRoot.hidden = true;
  document.body.classList.remove('music-modal-open');
  previousFocus?.focus?.();
}