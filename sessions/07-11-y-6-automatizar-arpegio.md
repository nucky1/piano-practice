---
title: Automatizar el arpegio
week: 2026-W34 · 17–23 ago
song: 11 y 6
session: 1
duration: 30 min
focus: Patrón estable con ambas manos
---

## Objetivo

Automatizar el arpegio sobre las armonías reales de **11 y 6**, sin perder los bajos de paso ni las notas que caracterizan los acordes de séptima. Al finalizar, podrás tocar la introducción y la primera parte con un patrón continuo y reconocer cómo se conecta con el resto del arreglo.

Los acordes y el orden de las secciones provienen del cifrado que compartiste, en **Sol mayor**. Las posiciones, octavas y duraciones de los previews son decisiones pedagógicas. Como las capturas no incluyen una partitura rítmica ni la melodía, conservamos el mismo mapa de estudio de las sesiones 1–6, con cambios de cuatro, dos y, en algunos enlaces, un pulso. **No es una transcripción exacta del ritmo ni del piano de la grabación.**

El reproductor utiliza el esquema actual de `music-exercise`: `beat`, `notes`, `duration` y `hand`. Los acordes con barra conservan el bajo indicado. Para consultar los cifrados, utilizá `Cmaj7` por C7M, `Fmaj7` por F7M, `F#m7b5` por F#m7(5−), `C#m7b5` por C#m7(5−), `Em9` por Em7(9), `Dsus4` por D4 y `Gsus4` por G4. Si el modal no reconoce un acorde con barra, consultá el acorde base y su bajo por separado; los eventos de audio sí contienen las notas correspondientes.

Los previews son acompañamientos instrumentales de estudio. No contienen la melodía original ni simulan una grabación de Fito Páez. La versión completa será la misma referencia de la sesión 6, para que el cierre del ciclo no cambie de armonía.

## 1. Calentamiento — 5 min

Tocá la escala de Sol mayor en una octava, primero con la derecha y después con la izquierda:

`Sol` → `La` → `Si` → `Do` → `Re` → `Mi` → `Fa#` → `Sol`

Regresá por las mismas notas. Hacé dos vueltas lentas y dos a **60 BPM**, una nota por pulso. Mantené la mano relajada y no aumentes la velocidad si perdés uniformidad.

### Preview: calentamiento en Sol mayor

```music-exercise
{
  "id": "s7-calentamiento",
  "title": "Escala de Sol mayor",
  "description": "Una octava ascendente y descendente. Mano derecha, una nota por pulso a 60 BPM.",
  "tempo": 60,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 1, "notes": ["A4"], "duration": 1, "hand": "right"},
    {"beat": 2, "notes": ["B4"], "duration": 1, "hand": "right"},
    {"beat": 3, "notes": ["C5"], "duration": 1, "hand": "right"},
    {"beat": 4, "notes": ["D5"], "duration": 1, "hand": "right"},
    {"beat": 5, "notes": ["E5"], "duration": 1, "hand": "right"},
    {"beat": 6, "notes": ["F#5"], "duration": 1, "hand": "right"},
    {"beat": 7, "notes": ["G5"], "duration": 1, "hand": "right"},
    {"beat": 8, "notes": ["F#5"], "duration": 1, "hand": "right"},
    {"beat": 9, "notes": ["E5"], "duration": 1, "hand": "right"},
    {"beat": 10, "notes": ["D5"], "duration": 1, "hand": "right"},
    {"beat": 11, "notes": ["C5"], "duration": 1, "hand": "right"},
    {"beat": 12, "notes": ["B4"], "duration": 1, "hand": "right"},
    {"beat": 13, "notes": ["A4"], "duration": 1, "hand": "right"},
    {"beat": 14, "notes": ["G4"], "duration": 1, "hand": "right"}
  ]
}
```

## 2. Mano derecha — 10 min

### El patrón aplicado al tema

En los acordes de cuatro pulsos, utilizá una nota por pulso. Cuando el acorde dura dos pulsos, usá los dos grupos de notas aprendidos en la sesión 2. No hace falta acelerar el arpegio para que entren todas las notas.

- G: `Sol` → `Si` → `Re` → `Si`.
- F#m7b5: `Fa# + La` → `Do + Mi`.
- B7: `Si + Re#` → `Fa# + La`.
- Em9: `Mi` → `Sol` → `Re` → `Fa#`.
- Dsus4: `La + Re` → `Sol`.
- C#m7b5: `Do# + Mi` → `Sol + Si`.
- Cm: `Sol` → `Do` → `Mib` → `Do`.
- G/B: `Sol` → `Si` → `Re` → `Si`, con Si en el bajo.
- Am7: `La + Do` → `Mi + Sol`.

En Em9, la izquierda aporta Si y la derecha conserva la novena Fa#. En los semidisminuidos, no reemplaces la quinta disminuida por una quinta justa.

Primero trabajá el comienzo `G` → `F#m7b5` → `B7` → `Em9`. Después agregá el resto de la introducción, incluyendo el movimiento G → Gsus4. Realizá dos vueltas a **55 BPM** de cada fragmento, sin detenerte dentro de él.

### Preview: introducción arpegiada

Escuchá el comienzo completo con la derecha sola. Las teclas muestran los grupos simultáneos en los cambios de dos pulsos.

```music-exercise
{
  "id": "s7-derecha-introduccion",
  "title": "Introducción · Mano derecha",
  "description": "Arpegio de la introducción completa, con acordes de paso y suspensiones. Posiciones del arreglo de estudio.",
  "tempo": 55,
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
    {"beat": 11, "notes": ["F#4"], "duration": 1, "hand": "right"},
    {"beat": 12, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 13, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 14, "notes": ["C#4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 15, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 16, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 17, "notes": ["C4"], "duration": 1, "hand": "right"},
    {"beat": 18, "notes": ["Eb4"], "duration": 1, "hand": "right"},
    {"beat": 19, "notes": ["C4"], "duration": 1, "hand": "right"},
    {"beat": 20, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 21, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 22, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 23, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 24, "notes": ["A3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 25, "notes": ["E4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 26, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 27, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 28, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 29, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 30, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 31, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 32, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 33, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 34, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 35, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 36, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 37, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 38, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 39, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 40, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 41, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 42, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 43, "notes": ["D4"], "duration": 1, "hand": "right"}
  ]
}
```

## 3. Mano izquierda — 5 min

Tocá los bajos de la primera parte sin mirar constantemente la mano izquierda. En los acordes de cuatro pulsos sin barra, alterná fundamental en **1** y quinta en **3**. En los cambios de dos pulsos y los acordes con barra, mantené el bajo escrito.

Prestá atención a estos movimientos:

`Fa#` → `Si` → `Mi`

`Do#` → `Do` → `Si`

`La` → `Re` → `Mi`

El último Mi corresponde al E° del cierre de la primera parte. No lo confundas con E7: el acorde disminuido contiene Si bemol.

### Preview: bajos de la primera parte

```music-exercise
{
  "id": "s7-izquierda-primera-parte",
  "title": "Primera parte · Mano izquierda",
  "description": "Bajos de las dos frases de la primera parte, con quintas cuando corresponda y bajos de paso correctos.",
  "tempo": 55,
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
    {"beat": 16, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 18, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 20, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 22, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 24, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 26.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 28, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 30, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 32, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 34.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 36, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 38, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 40, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 42.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 44, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 46, "notes": ["E3"], "duration": 2, "hand": "left"}
  ]
}
```

## 4. Manos juntas — 10 min

### Unir el patrón sin perder la armonía

Utilizá el mismo arpegio de la derecha y la línea de bajo que ya conocés. En los acordes largos, la izquierda puede alternar fundamental y quinta; en los acordes de paso, sostené el bajo. Cuando ambas manos atacan en el mismo pulso, intentá que el sonido sea conjunto y no dos movimientos separados.

Trabajá primero las dos frases de la primera parte por separado. Después uní la introducción y la primera parte. Comenzá a **50 BPM** y subí a 55 cuando puedas mantener una vuelta continua.

### Aplicación musical: introducción y primera parte arpegiadas

Este preview muestra el mismo fragmento de la sesión 3, pero ahora la derecha utiliza arpegios en toda la sección en lugar de acordes sostenidos. Es una variante de acompañamiento del mismo mapa armónico, no una melodía nueva.

```music-exercise
{
  "id": "s7-intro-primera-parte",
  "title": "11 y 6 · Introducción y primera parte arpegiadas",
  "description": "Arreglo continuo del inicio y la primera parte, con arpegio en la derecha y bajos correctos. Misma armonía y duraciones pedagógicas de las sesiones anteriores.",
  "tempo": 55,
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
    {"beat": 43, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 44, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 44, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 45, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 46.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 46, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 47, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 48, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 48, "notes": ["F#3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 49, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 50, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 50, "notes": ["B3", "D#4"], "duration": 1, "hand": "right"},
    {"beat": 51, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 52, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 52, "notes": ["E3"], "duration": 1, "hand": "right"},
    {"beat": 53, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 54.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 54, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 55, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 56, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 56, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 57, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 58, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 58, "notes": ["C#4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 59, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 60, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 60, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 61, "notes": ["Eb4"], "duration": 1, "hand": "right"},
    {"beat": 62, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 62, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 63, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 64, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 64, "notes": ["A3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 65, "notes": ["E4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 66, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 66, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 67, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 68, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 68, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 69, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 70.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 70, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 71, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 72, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 72, "notes": ["F#3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 73, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 74, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 74, "notes": ["B3", "D#4"], "duration": 1, "hand": "right"},
    {"beat": 75, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 76, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 76, "notes": ["E3"], "duration": 1, "hand": "right"},
    {"beat": 77, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 78.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 78, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 79, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 80, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 80, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 81, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 82, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 82, "notes": ["C#4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 83, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 84, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 84, "notes": ["A3"], "duration": 1, "hand": "right"},
    {"beat": 85, "notes": ["C4"], "duration": 1, "hand": "right"},
    {"beat": 86.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 86, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 87, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 88, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 88, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 89, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 90, "notes": ["E3"], "duration": 2, "hand": "left"},
    {"beat": 90, "notes": ["E4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 91, "notes": ["Bb4"], "duration": 1, "hand": "right"}
  ]
}
```

Escuchá primero la sección completa y después practicá sus dos frases más difíciles. Si un cambio falla, reparalo aisladamente y volvé a incorporarlo al siguiente compás.

## Checkpoint

Podés completar dos vueltas de un fragmento largo a **55 BPM** sin perder el patrón y sin detener la izquierda. El objetivo ideal es tocar la introducción y la primera parte de manera continua, anticipando los acordes en lugar de pensar cada nota individual.
