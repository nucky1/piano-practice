import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sessionsDir = path.join(root, 'sessions');
const distDir = path.join(root, 'dist');

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function escapeJsonForHtml(value) {
  return JSON.stringify(value)
    .replaceAll('<', '\\u003c')
    .replaceAll('>', '\\u003e')
    .replaceAll('&', '\\u0026');
}

function cleanValue(value) {
  return value.trim().replace(/^['"]|['"]$/g, '');
}

function parseFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) return { meta: {}, body: normalized };
  const end = normalized.indexOf('\n---\n', 4);
  if (end === -1) return { meta: {}, body: normalized };

  const header = normalized.slice(4, end);
  const body = normalized.slice(end + 5);
  const meta = {};

  for (const line of header.split('\n')) {
    const separator = line.indexOf(':');
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    meta[key] = cleanValue(line.slice(separator + 1));
  }

  return { meta, body };
}

function inlineMarkdown(text) {
  let value = escapeHtml(text);
  value = value.replace(/`([^`]+)`/g, '<code>$1</code>');
  value = value.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  value = value.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return value;
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let paragraph = [];
  let listType = null;
  let listItems = [];
  let codeLines = null;
  let blockquote = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    out.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listType || !listItems.length) return;
    const tag = listType === 'ol' ? 'ol' : 'ul';
    out.push(`<${tag}>${listItems.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</${tag}>`);
    listType = null;
    listItems = [];
  };

  const flushBlockquote = () => {
    if (!blockquote.length) return;
    out.push(`<blockquote>${blockquote.map((line) => `<p>${inlineMarkdown(line)}</p>`).join('')}</blockquote>`);
    blockquote = [];
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
    flushBlockquote();
  };

  for (const line of lines) {
    if (codeLines !== null) {
      if (line.trim().startsWith('```')) {
        out.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        codeLines = null;
      } else {
        codeLines.push(line);
      }
      continue;
    }

    if (line.trim().startsWith('```')) {
      flushAll();
      codeLines = [];
      continue;
    }

    if (!line.trim()) {
      flushAll();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushAll();
      const level = heading[1].length;
      out.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      flushAll();
      out.push('<hr>');
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      flushList();
      blockquote.push(quote[1]);
      continue;
    }

    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph();
      flushBlockquote();
      if (listType && listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(unordered[1]);
      continue;
    }

    const ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      flushBlockquote();
      if (listType && listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(ordered[1]);
      continue;
    }

    flushList();
    flushBlockquote();
    paragraph.push(line.trim());
  }

  if (codeLines !== null) out.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
  flushAll();
  return out.join('\n');
}

function fallbackTitle(filename) {
  return filename
    .replace(/\.md$/i, '')
    .replace(/^\d+[-_]?/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

async function build() {
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });

  const filenames = (await fs.readdir(sessionsDir))
    .filter((name) => name.toLowerCase().endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));

  const sessions = [];

  for (const filename of filenames) {
    const raw = await fs.readFile(path.join(sessionsDir, filename), 'utf8');
    const { meta, body } = parseFrontmatter(raw);
    const id = filename.replace(/\.md$/i, '');
    const title = meta.title || fallbackTitle(filename);
    const week = meta.week || 'Sin semana';
    const song = meta.song || 'Sin canción';
    const session = Number(meta.session) || 0;
    const duration = meta.duration || '30 min';
    const focus = meta.focus || '';

    sessions.push({
      id,
      filename,
      title,
      week,
      song,
      session,
      duration,
      focus,
      html: markdownToHtml(body),
      searchText: `${title} ${week} ${song} ${focus} ${body}`.toLocaleLowerCase('es'),
    });
  }

  const template = await fs.readFile(path.join(root, 'index.html'), 'utf8');
  const html = template.replace('__SESSIONS_JSON__', escapeJsonForHtml(sessions));

  await Promise.all([
    fs.writeFile(path.join(distDir, 'index.html'), html),
    fs.copyFile(path.join(root, 'src', 'style.css'), path.join(distDir, 'style.css')),
    fs.copyFile(path.join(root, 'src', 'app.js'), path.join(distDir, 'app.js')),
  ]);

  console.log(`Built ${sessions.length} piano sessions into ${path.relative(root, distDir)}/`);
}

await build();
