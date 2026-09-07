---
title: Crear acompañamiento
week: 2026-W32 · 4–9 ago
song: 11 y 6
session: 2
duration: 30 min
focus: Arpegio, bajos de paso e introducción completa
---

## Objetivo

Transformar los acordes del comienzo en un acompañamiento sencillo y aprender el resto de la introducción del cifrado. La meta es escuchar y tocar el movimiento armónico real, incluyendo los acordes suspendidos y los bajos con barra.

Los acordes y su orden provienen del cifrado que compartiste, en **Sol mayor**. Las octavas, digitaciones y duraciones de los ejemplos son propuestas para piano. Las capturas no contienen una partitura rítmica ni la melodía, así que los previews utilizan un mapa de pulsos didáctico: los acordes principales duran cuatro pulsos y varios acordes de paso duran dos. **No es una transcripción exacta del ritmo de la grabación.**

En la app actual, los acordes con barra y algunas extensiones no se convierten automáticamente en un único modal. Por eso, podés consultar el acorde base y el bajo por separado; los eventos JSON sí contienen las notas correctas. Usamos `Em9` como nombre consultable para Em7(9), `Dsus4` para D4 y `Gsus4` para G4. El símbolo E° del cifrado corresponde a Mi disminuido, no a Mi mayor.

## 1. Calentamiento y repaso — 5 min

Repetí los cuatro acordes de la sesión anterior: `G`, `F#m7b5`, `B7` y `Em9`. Primero tocá la derecha sola y después agregá los bajos.

Concentráte especialmente en la resolución de `B7` hacia `Em9`. Mantené el pulso a **50–55 BPM** y evitá levantar los dedos más de lo necesario.

## 2. Mano derecha — 8 min

Utilizá el patrón conocido **grave → medio → agudo → medio**. En los acordes de cuatro pulsos tocarás una nota por pulso. Para los acordes de paso de dos pulsos, el ejemplo utiliza dos pequeños grupos de notas, de manera que no hace falta acelerar a corcheas.

- G: `Sol` → `Si` → `Re` → `Si`.
- F#m7b5: `Fa# + La` → `Do + Mi`.
- B7: `Si + Re#` → `Fa# + La`.
- Em9: `Mi` → `Sol` → `Re` → `Fa#`.

En Em9, la izquierda aporta Si como quinta, completando las cinco notas del acorde. Los grupos de dos notas son una simplificación de acompañamiento para los cambios rápidos.

### Preview: primer arpegio del tema

Escuchá cómo los acordes de paso ocupan dos pulsos y cómo el acorde de llegada tiene más espacio. Practicá primero cada posición por separado.

```music-exercise
{
  "id": "s2-arpegio-apertura",
  "title": "Arpegio de la primera frase",
  "description": "G – F#m7b5 – B7 – Em9. Cuatro ataques en acordes largos y dos ataques en acordes de paso.",
  "tempo": 50,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 1, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 2, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 3, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 4, "notes": ["F#3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 5, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 6, "notes": ["B3", "D#4"], "duration": 1, "hand": "right"},
    {"beat": 7, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 8, "notes": ["E3"], "duration": 1, "hand": "right"},
    {"beat": 9, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 10, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 11, "notes": ["F#4"], "duration": 1, "hand": "right"}
  ]
}
```

## 3. Mano izquierda e introducción — 7 min

El resto del comienzo del cifrado incorpora:

`Dsus4` → `C#m7b5` → `Cm` → G/B → `Am7` → `Dsus4`

Después aparece el movimiento `G` → `Gsus4`, repetido varias veces.

### Acordes nuevos

| Cifrado | Notas | Bajo |
|---|---|---|
| D4 / Dsus4 | `Re` – `Sol` – `La` | Re |
| C#m7(5−) | `Do#` – `Mi` – `Sol` – `Si` | Do# |
| Cm | `Do` – `Mib` – `Sol` | Do |
| G/B | `Sol` – `Si` – `Re` | Si |
| Am7 | `La` – `Do` – `Mi` – `Sol` | La |
| G4 / Gsus4 | `Sol` – `Do` – `Re` | Sol |

En G/B se mantiene el acorde de Sol, pero la izquierda toca Si. Dsus4 y Gsus4 contienen una suspensión: la tercera se reemplaza por la cuarta. No son acordes mayores comunes.

### Bajos de la introducción

El movimiento principal es:

`Sol` → `Fa#` → `Si` → `Mi` → `Re` → `Do#` → `Do` → `Si` → `La` → `Re`

En los acordes largos sin barra, podés alternar fundamental en 1 y quinta en 3. En los acordes de paso y los que tienen barra, mantené el bajo indicado. La quinta de un acorde semidisminuido es disminuida: por ejemplo, la de F#m7b5 es Do natural y no Do#.

### Mapa de pulsos para la introducción

Este mapa fija la duración de cada armonía solamente para los previews de estudio. Los cuatro cambios G–Gsus4 se repiten dos veces.

```text
G          4 pulsos
F#m7b5     2 pulsos
B7         2 pulsos
Em9        4 pulsos
Dsus4      2 pulsos
C#m7b5     2 pulsos
Cm         4 pulsos
G/B        4 pulsos
Am7        2 pulsos
Dsus4      2 pulsos
```

El cierre de la introducción utiliza G (2 pulsos) → Gsus4 (2 pulsos) → G (2 pulsos) → Gsus4 (2 pulsos), y se repite una segunda vez.

### Preview: bajos del inicio completo

```music-exercise
{
  "id": "s2-bajos-intro",
  "title": "Bajos de la introducción",
  "description": "Introducción del cifrado, incluidos bajos de paso y alternancia G – Gsus4. Fundamental y quinta solo cuando corresponde.",
  "tempo": 50,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 2.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 4, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 6, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 8, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 10.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 12, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 14, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 16, "notes": ["C3"], "duration": 2.0, "hand": "left"},
    {"beat": 18.0, "notes": ["G3"], "duration": 2.0, "hand": "left"},
    {"beat": 20, "notes": ["B2"], "duration": 4, "hand": "left"},
    {"beat": 24, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 26, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 28, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 30, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 32, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 34, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 36, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 38, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 40, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 42, "notes": ["G2"], "duration": 2, "hand": "left"}
  ]
}
```

## 4. Manos juntas — 10 min

Trabajá la introducción en tres fragmentos:

**Fragmento A:** `G` → `F#m7b5` → `B7` → `Em9`

**Fragmento B:** `Dsus4` → `C#m7b5` → `Cm` → G/B → `Am7` → `Dsus4`

**Fragmento C:** `G` → `Gsus4`, repetido cuatro veces en el cifrado.

Para el fragmento B utilizá las posiciones propuestas:

- Dsus4: `La` → `Re` → `Sol`.
- C#m7b5: `Do#` – `Mi` – `Sol` – `Si`.
- Cm: `Sol` – `Do` – `Mib`.
- G/B: `Sol` – `Si` – `Re`, con Si en la izquierda.
- Am7: `La` – `Do` – `Mi` – `Sol`.

Empezá a **45 BPM** y subí a 50 cuando puedas encadenar cada fragmento. No es necesario tocar todas las notas de un acorde extendido con la derecha si la izquierda ya aporta una de ellas.

### Preview: suspensión G – Gsus4

Escuchá cómo Si se reemplaza por Do y vuelve a Si. Este movimiento prepara el acompañamiento de la introducción.

```music-exercise
{
  "id": "s2-suspensiones",
  "title": "G – Gsus4 · Movimiento suspendido",
  "description": "Dos repeticiones de G – Gsus4. Acordes completos con bajo de Sol sostenido durante cada cambio.",
  "tempo": 50,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 0, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 2, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 2, "notes": ["G3", "C4", "D4"], "duration": 2, "hand": "right"},
    {"beat": 4, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 4, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 6, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 6, "notes": ["G3", "C4", "D4"], "duration": 2, "hand": "right"}
  ]
}
```

### Aplicación musical: introducción completa

El siguiente ejemplo une todos los acordes de la introducción tal como aparecen en tu cifrado. Utiliza arpegios en la derecha y bajos con movimiento propio en la izquierda. El patrón uniforme y las duraciones son un arreglo de estudio, no la interpretación exacta de la grabación.

```music-exercise
{
  "id": "s2-introduccion-completa",
  "title": "11 y 6 · Introducción completa",
  "description": "Introducción del cifrado: G – F#m7b5 – B7 – Em9 – Dsus4 – C#m7b5 – Cm – G/B – Am7 – Dsus4, seguida de G – Gsus4 cuatro veces.",
  "tempo": 50,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 0, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 1, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 2.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 2, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 3, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 4, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 4, "notes": ["F#3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 5, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 6, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 6, "notes": ["B3", "D#4"], "duration": 1, "hand": "right"},
    {"beat": 7, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 8, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 8, "notes": ["E3"], "duration": 1, "hand": "right"},
    {"beat": 9, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 10.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 10, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 11, "notes": ["F#4"], "duration": 1, "hand": "right"},
    {"beat": 12, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 12, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 13, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 14, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 14, "notes": ["C#4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 15, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 16, "notes": ["C3"], "duration": 2.0, "hand": "left"},
    {"beat": 16, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 17, "notes": ["C4"], "duration": 1, "hand": "right"},
    {"beat": 18.0, "notes": ["G3"], "duration": 2.0, "hand": "left"},
    {"beat": 18, "notes": ["Eb4"], "duration": 1, "hand": "right"},
    {"beat": 19, "notes": ["C4"], "duration": 1, "hand": "right"},
    {"beat": 20, "notes": ["B2"], "duration": 4, "hand": "left"},
    {"beat": 20, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 21, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 22, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 23, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 24, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 24, "notes": ["A3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 25, "notes": ["E4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 26, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 26, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 27, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 28, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 28, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 29, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 30, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 30, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 31, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 32, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 32, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 33, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 34, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 34, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 35, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 36, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 36, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 37, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 38, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 38, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 39, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 40, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 40, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 41, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 42, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 42, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 43, "notes": ["D4"], "duration": 1, "hand": "right"}
  ]
}
```

## Checkpoint

Podés tocar los tres fragmentos de la introducción sin perder el orden y completar una vuelta a **50 BPM**. Reconocés el bajo de G/B y distinguís los acordes suspendidos de sus versiones mayores. La próxima sesión incorporará la primera parte cantada del tema.
