const sessions = JSON.parse(document.querySelector('#sessions-data')?.textContent || '[]')
  .sort((a, b) => {
    const byWeek = b.week.localeCompare(a.week, 'es', { numeric: true });
    if (byWeek !== 0) return byWeek;
    return a.session - b.session;
  });

const STORAGE_KEY = 'piano-practice:completed:v1';
let completed = loadCompleted();
let filter = 'all';
let query = '';
let currentSessionId = null;

const app = document.querySelector('#app');

function loadCompleted() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveCompleted() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
}

function toggleCompleted(id) {
  if (completed.has(id)) completed.delete(id);
  else completed.add(id);
  saveCompleted();
  render();
}

function getFilteredSessions() {
  const normalized = query.trim().toLocaleLowerCase('es');
  return sessions.filter((session) => {
    const matchesQuery = !normalized || session.searchText.includes(normalized);
    const isDone = completed.has(session.id);
    const matchesFilter =
      filter === 'all' || (filter === 'done' && isDone) || (filter === 'pending' && !isDone);
    return matchesQuery && matchesFilter;
  });
}

function groupByWeek(items) {
  const groups = new Map();
  for (const session of items) {
    const group = groups.get(session.week) ?? [];
    group.push(session);
    groups.set(session.week, group);
  }
  return groups;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderList() {
  const filtered = getFilteredSessions();
  const doneCount = sessions.filter((session) => completed.has(session.id)).length;
  const total = sessions.length;
  const progress = total === 0 ? 0 : Math.round((doneCount / total) * 100);
  const groups = groupByWeek(filtered);

  const groupHtml = [...groups.entries()]
    .map(([week, weekSessions]) => {
      const weekDone = weekSessions.filter((session) => completed.has(session.id)).length;
      const cards = weekSessions
        .map((session) => {
          const isDone = completed.has(session.id);
          return `
            <article class="session-card ${isDone ? 'is-done' : ''}">
              <div class="session-card__top">
                <div>
                  <p class="eyebrow">Sesión ${session.session || '—'} · ${escapeHtml(session.duration)}</p>
                  <button class="session-title" data-open="${escapeHtml(session.id)}" type="button">
                    ${escapeHtml(session.title)}
                  </button>
                </div>
                <label class="check-wrap" title="Marcar como realizada">
                  <input type="checkbox" data-toggle="${escapeHtml(session.id)}" ${isDone ? 'checked' : ''} />
                  <span>${isDone ? 'Realizada' : 'Pendiente'}</span>
                </label>
              </div>
              <div class="session-meta">
                <span class="chip">${escapeHtml(session.song)}</span>
                ${session.focus ? `<span class="muted">${escapeHtml(session.focus)}</span>` : ''}
              </div>
              <button class="open-button" data-open="${escapeHtml(session.id)}" type="button">Abrir clase →</button>
            </article>
          `;
        })
        .join('');

      return `
        <section class="week-group">
          <div class="week-heading">
            <div>
              <p class="eyebrow">Semana</p>
              <h2>${escapeHtml(week)}</h2>
            </div>
            <span class="week-progress">${weekDone}/${weekSessions.length} realizadas</span>
          </div>
          <div class="session-grid">${cards}</div>
        </section>
      `;
    })
    .join('');

  app.innerHTML = `
    <main class="shell">
      <header class="hero">
        <div>
          <p class="eyebrow">Piano practice</p>
          <h1>Mis sesiones</h1>
          <p class="hero-copy">Clases en Markdown, progreso guardado en este navegador.</p>
        </div>
        <div class="progress-card" aria-label="Progreso total">
          <div class="progress-card__value">${progress}%</div>
          <div class="progress-card__label">${doneCount} de ${total} realizadas</div>
          <div class="progress-track"><span style="width:${progress}%"></span></div>
        </div>
      </header>

      <section class="toolbar" aria-label="Buscar y filtrar sesiones">
        <label class="search-box">
          <span aria-hidden="true">⌕</span>
          <input id="search" type="search" placeholder="Buscar acorde, canción, ejercicio…" value="${escapeHtml(query)}" />
        </label>
        <div class="filters" role="group" aria-label="Filtrar por estado">
          <button type="button" data-filter="all" class="filter-button ${filter === 'all' ? 'active' : ''}">Todas</button>
          <button type="button" data-filter="pending" class="filter-button ${filter === 'pending' ? 'active' : ''}">Pendientes</button>
          <button type="button" data-filter="done" class="filter-button ${filter === 'done' ? 'active' : ''}">Realizadas</button>
        </div>
      </section>

      ${filtered.length ? groupHtml : `
        <section class="empty-state">
          <h2>No encontré sesiones</h2>
          <p>Probá con otra palabra o cambiá el filtro.</p>
        </section>
      `}
    </main>
  `;

  document.querySelector('#search')?.addEventListener('input', (event) => {
    query = event.target.value;
    renderList();
    const input = document.querySelector('#search');
    input?.focus();
    input?.setSelectionRange(query.length, query.length);
  });

  document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      filter = button.dataset.filter;
      renderList();
    });
  });

  document.querySelectorAll('[data-toggle]').forEach((input) => {
    input.addEventListener('change', () => toggleCompleted(input.dataset.toggle));
  });

  document.querySelectorAll('[data-open]').forEach((button) => {
    button.addEventListener('click', () => {
      currentSessionId = button.dataset.open;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      render();
    });
  });
}

function renderDetail(session) {
  const isDone = completed.has(session.id);
  app.innerHTML = `
    <main class="reader-shell">
      <nav class="reader-nav">
        <button id="back" class="back-button" type="button">← Todas las sesiones</button>
        <label class="check-wrap check-wrap--reader">
          <input id="detail-complete" type="checkbox" ${isDone ? 'checked' : ''} />
          <span>${isDone ? 'Realizada' : 'Marcar realizada'}</span>
        </label>
      </nav>

      <header class="reader-header">
        <p class="eyebrow">${escapeHtml(session.week)} · Sesión ${session.session || '—'} · ${escapeHtml(session.duration)}</p>
        <h1>${escapeHtml(session.title)}</h1>
        <div class="session-meta reader-meta">
          <span class="chip">${escapeHtml(session.song)}</span>
          ${session.focus ? `<span class="muted">${escapeHtml(session.focus)}</span>` : ''}
        </div>
      </header>

      <article class="markdown-body">${session.html}</article>

      <footer class="reader-footer">
        <button id="footer-complete" class="primary-button" type="button">
          ${isDone ? '✓ Sesión realizada' : 'Marcar sesión como realizada'}
        </button>
        <p>Archivo: <code>${escapeHtml(session.filename)}</code></p>
      </footer>
    </main>
  `;

  document.querySelector('#back')?.addEventListener('click', () => {
    currentSessionId = null;
    render();
  });

  document.querySelector('#detail-complete')?.addEventListener('change', () => {
    toggleCompleted(session.id);
  });

  document.querySelector('#footer-complete')?.addEventListener('click', () => {
    toggleCompleted(session.id);
  });
}

function render() {
  if (currentSessionId) {
    const session = sessions.find((item) => item.id === currentSessionId);
    if (session) {
      renderDetail(session);
      return;
    }
  }
  renderList();
}

render();
