---
title: Empezar a sonar musical
week: 2026-W33 · 10–16 ago
song: 11 y 6
session: 2
duration: 30 min
focus: Arpegios, bajos y segunda parte
---

## Objetivo

Automatizar el arpegio sobre el estribillo y comenzar la segunda parte del tema. El foco está en mantener el pulso y comprender cómo los acordes nuevos se conectan con los que ya conocés.

Los acordes y su orden provienen del cifrado que compartiste, en **Sol mayor**. Las posiciones y duraciones de los previews son propuestas pedagógicas. Las capturas no incluyen una partitura rítmica ni la melodía: se mantiene el mapa de estudio de las sesiones anteriores, con acordes de cuatro y dos pulsos, y algunos cambios de un pulso. **No son las duraciones exactas ni el arreglo de piano de la grabación.**

Los cifrados con barra conservan su bajo. Para consultar acordes en el modal, utilizá `Cmaj7` por C7M, `Fmaj7` por F7M, `F#m7b5` por F#m7(5−), `C#m7b5` por C#m7(5−), `Dsus4` por D4 y `Gsus4` por G4. El renderer actual puede no reconocer los acordes con barra o algunas extensiones: consultá el acorde base y el bajo por separado. Los bloques JSON incluyen todas las notas necesarias.

Los previews son acompañamientos instrumentales de estudio. No contienen la melodía original ni simulan una grabación de Fito Páez. Se utilizará una misma referencia armónica para que las nueve sesiones construyan un arreglo coherente.

## 1. Cambios rápidos — 5 min

Repasá el comienzo del estribillo con ambas manos:

`Cmaj7` → `Bm7` → `Em7` → Fmaj7/G

Tocá cada acorde durante dos pulsos a **55 BPM** y realizá dos vueltas sin detenerte. Después practicá `B7` → `Em7` y `Am7` → `Dsus4` → `D`.

## 2. Derecha arpegiada — 8 min

Mantené el patrón **grave → medio → agudo → medio** en los acordes largos. Para los cambios de dos pulsos, el preview utiliza dos grupos de notas, uno por pulso, evitando tener que tocar el arpegio a doble velocidad.

- Cmaj7: `Do + Mi` → `Sol + Si`.
- Bm7: `Si + Re` → `Fa# + La`.
- Em7: `Mi + Sol` → `Si + Re`.
- Fmaj7/G: `Fa + La` → `Do + Mi`.
- B7: `Si + Re#` → `Fa# + La`.
- A7: `La + Do#` → `Mi + Sol`.

Si una pareja de notas es difícil, tocá únicamente la primera nota de cada grupo y agregá la segunda cuando tengas seguridad. No cambies el bajo del acorde con barra.

### Preview: arpegio de las dos frases

```music-exercise
{
  "id": "s5-arpegio-estribillo",
  "title": "Arpegio de las frases principales",
  "description": "Cmaj7 – Bm7 – Em7 – Fmaj7/G y Cmaj7 – B7 – Em7 – A7. Dos ataques por acorde de dos pulsos.",
  "tempo": 50,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 1, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 2, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 3, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 4, "notes": ["E3", "G3"], "duration": 1, "hand": "right"},
    {"beat": 5, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 6, "notes": ["F3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 7, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 8, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 9, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 10, "notes": ["B3", "D#4"], "duration": 1, "hand": "right"},
    {"beat": 11, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 12, "notes": ["E3", "G3"], "duration": 1, "hand": "right"},
    {"beat": 13, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 14, "notes": ["A3", "C#4"], "duration": 1, "hand": "right"},
    {"beat": 15, "notes": ["E4", "G4"], "duration": 1, "hand": "right"}
  ]
}
```

## 3. Izquierda automática — 7 min

### Segunda parte del cifrado

La segunda parte vuelve al movimiento del comienzo, pero presenta dos cambios importantes. En la primera frase aparece `Cm` → `G` en lugar de Cm → G/B, y en la segunda el cierre es `Am7` → `D` → `Dm`.

### Primera frase

```text
G | F#m7b5 | B7 | Em7
Dsus4 | C#m7b5 | Cm | G
Am7 | Dsus4 | D
```

### Segunda frase

```text
G | F#m7b5 | B7 | Em7
Dsus4 | C#m7b5 | Am7 | D
Dm
```

Dm es Re menor: `Re` – `Fa` – `La`. Su Fa natural lo diferencia del Fa# del acorde D mayor. No lo sustituyas por Dsus4.

Practicá los bajos a **50 BPM**. En los acordes largos sin barra, utilizá fundamental en 1 y quinta en 3. En F#m7b5 y C#m7b5, la quinta es disminuida; en los acordes de paso de dos pulsos, sostené el bajo. El enlace D → Dm conserva Re como fundamental y cambia la tercera.

### Preview: bajos de la segunda parte

```music-exercise
{
  "id": "s5-bajos-segunda-parte",
  "title": "Bajos de la segunda parte",
  "description": "Dos frases de la segunda parte del cifrado, incluido el cierre D – Dm. Duraciones de estudio con bajos de paso correctos.",
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
    {"beat": 16, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 18, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 20, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 22, "notes": ["D3"], "duration": 1, "hand": "left"},
    {"beat": 23, "notes": ["D3"], "duration": 1, "hand": "left"},
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
    {"beat": 46, "notes": ["D3"], "duration": 2, "hand": "left"}
  ]
}
```

## 4. Combinación — 10 min

Primero uní las dos frases del estribillo con el arpegio. Después trabajá la segunda parte por bloques de cuatro a seis acordes. Utilizá el patrón de la derecha que ya aprendiste y mantené la izquierda estable.

Para la segunda parte, podés usar arpegios en los acordes de cuatro pulsos y los dos grupos de notas en los cambios de dos pulsos. En el enlace de un pulso Dsus4 → D, tocá los acordes completos; no intentes comprimir cuatro notas dentro de un pulso.

### Aplicación musical: segunda parte y regreso al estribillo

El preview contiene las dos frases de la segunda parte, seguido de la primera frase del estribillo. De esta manera podés escuchar cómo el cambio D → Dm conduce al regreso armónico. La unión es parte del arreglo didáctico; las capturas no especifican el tiempo exacto del enlace.

```music-exercise
{
  "id": "s5-segunda-parte-y-regreso",
  "title": "11 y 6 · Segunda parte y regreso",
  "description": "Segunda parte completa del cifrado, seguida de la primera frase del estribillo. Arpegios y bajos correctos, con Dm en el cierre.",
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
    {"beat": 11, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 12, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 12, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 13, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 14, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 14, "notes": ["C#4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 15, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 16, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 16, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 17, "notes": ["Eb4"], "duration": 1, "hand": "right"},
    {"beat": 18, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 18, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 19, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 20, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 20, "notes": ["A3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 21, "notes": ["E4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 22, "notes": ["D3"], "duration": 1, "hand": "left"},
    {"beat": 22, "notes": ["A3", "D4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 23, "notes": ["D3"], "duration": 1, "hand": "left"},
    {"beat": 23, "notes": ["A3", "D4", "F#4"], "duration": 1, "hand": "right"},
    {"beat": 24, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 24, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 25, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 26.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 26, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 27, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 28, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 28, "notes": ["F#3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 29, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 30, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 30, "notes": ["B3", "D#4"], "duration": 1, "hand": "right"},
    {"beat": 31, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 32, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 32, "notes": ["E3"], "duration": 1, "hand": "right"},
    {"beat": 33, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 34.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 34, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 35, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 36, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 36, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 37, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 38, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 38, "notes": ["C#4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 39, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 40, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 40, "notes": ["A3"], "duration": 1, "hand": "right"},
    {"beat": 41, "notes": ["C4"], "duration": 1, "hand": "right"},
    {"beat": 42.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 42, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 43, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 44, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 44, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 45, "notes": ["F#4", "D4"], "duration": 1, "hand": "right"},
    {"beat": 46, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 46, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 47, "notes": ["F4", "D4"], "duration": 1, "hand": "right"},
    {"beat": 48, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 48, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 49, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 50, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 50, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 51, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 52, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 52, "notes": ["E3", "G3"], "duration": 1, "hand": "right"},
    {"beat": 53, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 54, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 54, "notes": ["F3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 55, "notes": ["C4", "E4"], "duration": 1, "hand": "right"}
  ]
}
```

Empezá a **50 BPM**. Cuando una frase salga completa, subí a 55 BPM. No importa llegar rápido a 60: importa conservar el pulso y reconocer los cambios sin pensar cada nota individual.

## Checkpoint

Podés tocar las dos frases de la segunda parte a **50–55 BPM**, distinguir D de Dm y mantener la izquierda mientras la derecha arpegia. El objetivo ideal es enlazar la segunda parte con el comienzo del estribillo sin detenerte.
