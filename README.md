# Piano Practice

Web estática para organizar sesiones de práctica de piano escritas en Markdown.

## Qué hace

- Cada clase vive como un `.md` dentro de `/sessions`.
- El build detecta automáticamente todos los Markdown: no existe un índice manual.
- Búsqueda por canción, acorde, ejercicio, foco o texto de la clase.
- Filtros de pendientes y realizadas.
- El estado de cada sesión se guarda en `localStorage`.
- Cero dependencias externas: solo Node.js para generar `/dist`.
- Deploy automático a GitHub Pages al hacer push a `main`.

## Sobre "memoria local"

GitHub Pages es hosting estático, así que no existe memoria de servidor persistente. La versión incluida usa **`localStorage` del navegador**.

Esto hace que el estado de “realizada”:

- sobreviva al cerrar y abrir el navegador;
- no se sincronice entre PC y celular;
- se pierda si borrás los datos del sitio.

Si más adelante querés sincronización entre dispositivos, ahí sí habría que agregar persistencia remota.

## Desarrollo local

Requiere Node 20+.

```bash
npm run dev
```

Abre:

```text
http://localhost:4173
```

## Generar el sitio

```bash
npm run build
```

El sitio listo para publicar queda en `/dist`.

## Agregar una sesión nueva

1. Copiá `SESSION_TEMPLATE.md` dentro de `/sessions`.
2. Renombralo, por ejemplo `16-un-vestido-estructura.md`.
3. Completá el frontmatter y la clase.
4. Commit + push.

Nada más. El workflow vuelve a generar la web incluyendo el nuevo archivo.

## Formato de una sesión

```md
---
title: Estructura de la canción
week: 2026-W37 · 7–13 sep
song: Un vestido y un amor
session: 1
duration: 30 min
focus: Conectar secciones
---

## Objetivo

...
```

La UI utiliza estos campos:

- `title`
- `week`
- `song`
- `session`
- `duration`
- `focus`

## Deploy en GitHub Pages

1. Creá el repositorio y subí estos archivos.
2. Usá `main` como rama principal.
3. En GitHub abrí **Settings → Pages**.
4. En **Source**, seleccioná **GitHub Actions**.
5. Hacé push a `main`.

El workflow `.github/workflows/deploy-pages.yml` construye y publica `/dist` automáticamente.

## Archivos históricos incluidos

El proyecto ya trae 15 sesiones reconstruidas a partir del plan trabajado hasta ahora, desde el inicio de `11 y 6` hasta la práctica de continuidad de `Un vestido y un amor`.
