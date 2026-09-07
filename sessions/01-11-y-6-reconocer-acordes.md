---
title: Reconocer acordes
week: 2026-W32 · 4–9 ago
song: 11 y 6
session: 1
duration: 30 min
focus: Armonía real del inicio y ubicación de manos
---

## Objetivo

Comenzar una versión simplificada de **11 y 6** de Fito Páez reconociendo los cuatro primeros acordes del cifrado: `G`, `F#m7b5`, `B7` y `Em9`. Aprender a escuchar el movimiento armónico y preparar las manos para el inicio del tema.

Los acordes y su orden provienen del cifrado que compartiste, en **Sol mayor**. Las octavas, digitaciones y duraciones de los ejemplos son propuestas para piano. Las capturas no contienen una partitura rítmica ni la melodía, así que los previews utilizan un mapa de pulsos didáctico: los acordes principales duran cuatro pulsos y varios acordes de paso duran dos. **No es una transcripción exacta del ritmo de la grabación.**

En la app actual, los acordes con barra y algunas extensiones no se convierten automáticamente en un único modal. Por eso, podés consultar el acorde base y el bajo por separado; los eventos JSON sí contienen las notas correctas. Usamos `Em9` como nombre consultable para Em7(9), `Dsus4` para D4 y `Gsus4` para G4. El símbolo E° del cifrado corresponde a Mi disminuido, no a Mi mayor.

## 1. Entrada en calor — 5 min

Ubicá las cinco primeras notas de Sol mayor:

`Sol` → `La` → `Si` → `Do` → `Re` → `Do` → `Si` → `La` → `Sol`

Primero con la derecha desde Sol4 y después con la izquierda desde Sol3. Digitación sugerida para la derecha: 1–2–3–4–5–4–3–2–1. Para la izquierda, usá 5–4–3–2–1–2–3–4–5.

Tocá una nota por pulso a **55 BPM**, sin forzar la mano y con un volumen parejo.

### Preview: calentamiento en Sol mayor

```music-exercise
{
  "id": "s1-calentamiento-sol",
  "title": "Entrada en calor · Sol mayor",
  "description": "Sol – La – Si – Do – Re y regreso. Mano derecha, una nota por pulso.",
  "tempo": 55,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 1, "notes": ["A4"], "duration": 1, "hand": "right"},
    {"beat": 2, "notes": ["B4"], "duration": 1, "hand": "right"},
    {"beat": 3, "notes": ["C5"], "duration": 1, "hand": "right"},
    {"beat": 4, "notes": ["D5"], "duration": 1, "hand": "right"},
    {"beat": 5, "notes": ["C5"], "duration": 1, "hand": "right"},
    {"beat": 6, "notes": ["B4"], "duration": 1, "hand": "right"},
    {"beat": 7, "notes": ["A4"], "duration": 1, "hand": "right"},
    {"beat": 8, "notes": ["G4"], "duration": 1, "hand": "right"}
  ]
}
```

## 2. Acordes del comienzo — 10 min

El cifrado abre con:

`G` → `F#m7b5` → `B7` → `Em9`

Estos acordes son diferentes de la antigua progresión en La menor. El segundo es semidisminuido y el tercero es un dominante que conduce a Mi menor.

### Posiciones sugeridas para la derecha

| Cifrado | Notas del acorde | Posición del preview |
|---|---|---|
| G | `Sol` – `Si` – `Re` | G3 – B3 – D4 |
| F#m7(5−) | `Fa#` – `La` – `Do` – `Mi` | A3 – C4 – E4 – F#4 |
| B7 | `Si` – `Re#` – `Fa#` – `La` | A3 – B3 – D#4 – F#4 |
| Em7(9) | `Mi` – `Sol` – `Si` – `Re` – `Fa#` | G3 – B3 – D4 – F#4, con Mi en el bajo |

La posición de Em9 omite Mi en la derecha porque la izquierda toca esa fundamental. Las demás notas conservan el color de séptima y novena.

Escuchá el cambio de `F#m7b5` a `B7` y luego a `Em9`. El Re# del B7 se dirige hacia Mi, mientras que el acorde de Mi menor aporta una sensación de llegada.

### Preview: los cuatro acordes

Este primer ejercicio toca acordes completos, sin arpegio. Las duraciones propuestas son cuatro pulsos para G y Em9, y dos para los acordes de paso.

```music-exercise
{
  "id": "s1-acordes-inicio",
  "title": "Cuatro acordes del inicio",
  "description": "G – F#m7b5 – B7 – Em9. Acordes completos de la mano derecha; duraciones didácticas.",
  "tempo": 55,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["G3", "B3", "D4"], "duration": 4, "hand": "right"},
    {"beat": 4, "notes": ["A3", "C4", "E4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 6, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 8, "notes": ["G3", "B3", "D4", "F#4"], "duration": 4, "hand": "right"}
  ]
}
```

## 3. Mano izquierda — 7 min

Tocá solamente los bajos indicados por la armonía:

`Sol` → `Fa#` → `Si` → `Mi`

Usá las octavas sugeridas G2, F#2, B2 y E2. Mantené cada bajo durante la duración de su acorde. En esta primera sesión no hace falta alternar todavía fundamental y quinta.

### Preview: bajos del comienzo

Escuchá cómo el bajo desciende de Sol a Fa#, se desplaza a Si y llega a Mi. Primero tocá una vuelta sin metrónomo y después repetila a 55 BPM.

```music-exercise
{
  "id": "s1-bajos-inicio",
  "title": "Bajos del comienzo",
  "description": "Sol – Fa# – Si – Mi. Una nota por armonía, sostenida durante su duración de estudio.",
  "tempo": 55,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["G2"], "duration": 4, "hand": "left"},
    {"beat": 4, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 6, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 8, "notes": ["E2"], "duration": 4, "hand": "left"}
  ]
}
```

## 4. Unión — 8 min

La izquierda toca el bajo y la derecha el acorde completo. Empezá con `G` → `F#m7b5`, después practicá `B7` → `Em9` y finalmente uní los cuatro.

No intentes tocar rápido. Prepará la posición de la derecha antes del siguiente cambio y mantené el pulso aunque alguna nota del acorde no salga.

### Aplicación musical: comienzo de 11 y 6

Este preview ya utiliza el inicio de tu cifrado, con sus acordes reales y el movimiento del bajo. Es un acompañamiento armónico simplificado; todavía no incluye la melodía ni el resto de la introducción.

```music-exercise
{
  "id": "s1-aplicacion-inicio",
  "title": "11 y 6 · Primeros acordes",
  "description": "Aplicación del comienzo: G – F#m7b5 – B7 – Em9. Bajo en la izquierda y acorde completo en la derecha.",
  "tempo": 55,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["G2"], "duration": 4, "hand": "left"},
    {"beat": 0, "notes": ["G3", "B3", "D4"], "duration": 4, "hand": "right"},
    {"beat": 4, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 4, "notes": ["A3", "C4", "E4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 6, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 6, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 8, "notes": ["E2"], "duration": 4, "hand": "left"},
    {"beat": 8, "notes": ["G3", "B3", "D4", "F#4"], "duration": 4, "hand": "right"}
  ]
}
```

## Checkpoint

Podés reconocer los cuatro acordes, distinguir F#m7b5 de B7 y tocar el comienzo con ambas manos a **55 BPM** sin perder el orden. No es necesario dominar todavía todos los acordes de la canción.
