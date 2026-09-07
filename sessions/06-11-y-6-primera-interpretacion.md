---
title: Primera interpretación
week: 2026-W33 · 10–16 ago
song: 11 y 6
session: 3
duration: 30 min
focus: Continuidad del arreglo y primera grabación
---

## Objetivo

Realizar una primera interpretación continua del arreglo de acompañamiento construido hasta ahora. Vas a recorrer la introducción, la primera parte, los estribillos, la segunda parte y el cierre del cifrado, priorizando la continuidad por encima de la velocidad.

Los acordes y su orden provienen del cifrado que compartiste, en **Sol mayor**. Las posiciones y duraciones de los previews son propuestas pedagógicas. Las capturas no incluyen una partitura rítmica ni la melodía: se mantiene el mapa de estudio de las sesiones anteriores, con acordes de cuatro y dos pulsos, y algunos cambios de un pulso. **No son las duraciones exactas ni el arreglo de piano de la grabación.**

Los cifrados con barra conservan su bajo. Para consultar acordes en el modal, utilizá `Cmaj7` por C7M, `Fmaj7` por F7M, `F#m7b5` por F#m7(5−), `C#m7b5` por C#m7(5−), `Dsus4` por D4 y `Gsus4` por G4. El renderer actual puede no reconocer los acordes con barra o algunas extensiones: consultá el acorde base y el bajo por separado. Los bloques JSON incluyen todas las notas necesarias.

Los previews son acompañamientos instrumentales de estudio. No contienen la melodía original ni simulan una grabación de Fito Páez. Se utilizará una misma referencia armónica para que las nueve sesiones construyan un arreglo coherente.

## 1. Preparación — 5 min

Tocá una frase conocida con la derecha y otra con la izquierda. Después repasá el movimiento del comienzo `G` → `F#m7b5` → `B7` → `Em9` a 55 BPM.

Elegí un tempo en el que puedas anticipar los acordes sin tensión. No es necesario tocar el arreglo entero durante el calentamiento.

## 2. Reparación dirigida — 5 min

Elegí dos cambios que hayan resultado difíciles durante las sesiones anteriores. Algunas opciones son:

`F#m7b5` → `B7` → `Em7`

`Cmaj7` → `Bm7`

`B7` → `Em7`

`D` → `Dm`

`Dsus4` → `C#m7b5`

Hacé diez repeticiones lentas de cada cambio. Si el problema es la izquierda, practicá los bajos solos antes de agregar la derecha.

### Preview: cambio D → Dm

Este cambio aparece al final de la segunda parte. La derecha conserva Re y La y cambia Fa# por Fa natural. El preview mantiene Re en el bajo para que puedas escuchar claramente la diferencia.

```music-exercise
{
  "id": "s6-cambio-d-dm",
  "title": "D → Dm",
  "description": "Comparación del acorde de Re mayor y Re menor, con la misma fundamental en la izquierda. Cuatro pulsos por acorde.",
  "tempo": 55,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["D3"], "duration": 4, "hand": "left"},
    {"beat": 0, "notes": ["A3", "D4", "F#4"], "duration": 4, "hand": "right"},
    {"beat": 4, "notes": ["D3"], "duration": 4, "hand": "left"},
    {"beat": 4, "notes": ["A3", "D4", "F4"], "duration": 4, "hand": "right"}
  ]
}
```

## 3. Interpretación — 15 min

### Estructura del arreglo

El siguiente orden proviene de las capturas que compartiste:

1. Introducción.
2. Primera parte.
3. Primer estribillo.
4. Segunda parte.
5. Estribillo final.
6. Cierre.

El cierre visible retoma la armonía del comienzo y termina con Gmaj7. No se agregan secciones ni una melodía inventada.

### Armonía del cierre

```text
G | F#m7b5 | B7 | Em9
Dsus4 | C#m7b5 | Cm | G/B
Am7 | Dsus4 | Gmaj7
```

El último acorde es Gmaj7: `Sol` – `Si` – `Re` – `Fa#`. Es diferente de G7, que tendría Fa natural. El acorde de cierre aparece en la tercera captura.

### Tres formas de tocar

**Toma 1 — 50 BPM.** Utilizá el acompañamiento simple: acordes completos en las partes cantadas y arpegios en la introducción. Priorizá no detenerte.

**Toma 2 — 55 BPM.** Agregá el arpegio del estribillo, conservando los bajos y la duración de los cambios. Si aparece un error pequeño, seguí.

**Toma 3 — elección libre.** Tocá sin metrónomo un fragmento largo o el arreglo completo si ya podés sostenerlo. Conservá un pulso interno parecido y no cambies los acordes para resolver dificultades.

El arreglo completo es más largo que los ejercicios anteriores. Una toma puede ocupar varios minutos, por lo que dentro de los quince minutos conviene realizar una toma completa y utilizar el tiempo restante para repetir los fragmentos más difíciles. Las tres formas son metas de práctica, no la obligación de completar tres reproducciones completas en una única sesión.

### Aplicación musical: arreglo completo de acompañamiento

El preview reúne todas las secciones visibles del cifrado. En la introducción se utiliza el arpegio, en las partes cantadas acordes completos con ritmo sencillo, en el primer estribillo acordes sostenidos y en el estribillo final el arpegio aprendido. La izquierda conserva las fundamentales, quintas y bajos con barra.

Este es el primer arreglo completo del ciclo, pero **no es una transcripción exacta de la canción original**: el ritmo armónico fue propuesto para estudiar y no se dispone de las notas de la melodía. La sesión 9 permitirá consolidar la interpretación; las sesiones 7 y 8 trabajarán fluidez, dinámica y recuperación de errores.

```music-exercise
{
  "id": "s6-arreglo-completo",
  "title": "11 y 6 · Arreglo completo de acompañamiento",
  "description": "Introducción, primera parte, dos estribillos, segunda parte y cierre Gmaj7. Arreglo pedagógico con acordes reales y duraciones propuestas; sin melodía original.",
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
    {"beat": 44, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 46.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 46, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 48, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 48, "notes": ["A3", "C4", "E4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 50, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 50, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 52, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 52, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 54.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 54, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 56, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 56, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 58, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 58, "notes": ["G3", "B3", "C#4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 60, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 60, "notes": ["G3", "C4", "Eb4"], "duration": 2, "hand": "right"},
    {"beat": 62, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 62, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 64, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 64, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 66, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 66, "notes": ["G3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 68, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 68, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 70.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 70, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 72, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 72, "notes": ["A3", "C4", "E4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 74, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 74, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 76, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 76, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 78.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 78, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 80, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 80, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 82, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 82, "notes": ["G3", "B3", "C#4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 84, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 84, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 86.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 86, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 88, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 88, "notes": ["G3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 90, "notes": ["E3"], "duration": 2, "hand": "left"},
    {"beat": 90, "notes": ["G3", "Bb3", "E4"], "duration": 2, "hand": "right"},
    {"beat": 92, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 92, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 94, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 94, "notes": ["A3", "B3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 96, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 96, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 98, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 98, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 100, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 100, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 102, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 102, "notes": ["A3", "B3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 104, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 104, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 106, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 106, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 108, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 108, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 110, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 110, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 112, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 112, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 114, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 114, "notes": ["G3", "A3", "C#4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 116, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 116, "notes": ["G3", "A3", "C4", "E4"], "duration": 4, "hand": "right"},
    {"beat": 118.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 120, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 120, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 122, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 122, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 124, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 124, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 126, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 126, "notes": ["A3", "B3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 128, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 128, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 130, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 130, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 132, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 132, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 134, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 134, "notes": ["A3", "B3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 136, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 136, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 138, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 138, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 140, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 140, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 142, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 142, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 144, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 144, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 146, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 146, "notes": ["G3", "A3", "C#4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 148, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 148, "notes": ["G3", "A3", "C4", "E4"], "duration": 4, "hand": "right"},
    {"beat": 150.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 152, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 152, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 154, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 154, "notes": ["A3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 156, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 156, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 158.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 158, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 160, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 160, "notes": ["A3", "C4", "E4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 162, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 162, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 164, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 164, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 166.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 166, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 168, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 168, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 170, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 170, "notes": ["G3", "B3", "C#4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 172, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 172, "notes": ["G3", "C4", "Eb4"], "duration": 2, "hand": "right"},
    {"beat": 174, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 174, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 176, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 176, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 178, "notes": ["D3"], "duration": 1, "hand": "left"},
    {"beat": 178, "notes": ["A3", "D4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 179, "notes": ["D3"], "duration": 1, "hand": "left"},
    {"beat": 179, "notes": ["A3", "D4", "F#4"], "duration": 1, "hand": "right"},
    {"beat": 180, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 180, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 182.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 182, "notes": ["G3", "B3", "D4"], "duration": 2, "hand": "right"},
    {"beat": 184, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 184, "notes": ["A3", "C4", "E4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 186, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 186, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 188, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 188, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 190.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 190, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 192, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 192, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 194, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 194, "notes": ["G3", "B3", "C#4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 196, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 196, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 198.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 198, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 200, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 200, "notes": ["A3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 202, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 202, "notes": ["A3", "D4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 204, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 204, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 205, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 206, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 206, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 207, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 208, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 208, "notes": ["E3", "G3"], "duration": 1, "hand": "right"},
    {"beat": 209, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 210, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 210, "notes": ["F3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 211, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 212, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 212, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 213, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 214, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 214, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 215, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 216, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 216, "notes": ["E3", "G3"], "duration": 1, "hand": "right"},
    {"beat": 217, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 218, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 218, "notes": ["F3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 219, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 220, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 220, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 221, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 222, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 222, "notes": ["B3", "D#4"], "duration": 1, "hand": "right"},
    {"beat": 223, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 224, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 224, "notes": ["E3", "G3"], "duration": 1, "hand": "right"},
    {"beat": 225, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 226, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 226, "notes": ["A3", "C#4"], "duration": 1, "hand": "right"},
    {"beat": 227, "notes": ["E4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 228, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 228, "notes": ["A3"], "duration": 1, "hand": "right"},
    {"beat": 229, "notes": ["C4"], "duration": 1, "hand": "right"},
    {"beat": 230.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 230, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 231, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 232, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 232, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 233, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 234, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 234, "notes": ["F3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 235, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 236, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 236, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 237, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 238, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 238, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 239, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 240, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 240, "notes": ["E3", "G3"], "duration": 1, "hand": "right"},
    {"beat": 241, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 242, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 242, "notes": ["F3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 243, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 244, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 244, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 245, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 246, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 246, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 247, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 248, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 248, "notes": ["E3", "G3"], "duration": 1, "hand": "right"},
    {"beat": 249, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 250, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 250, "notes": ["F3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 251, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 252, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 252, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 253, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 254, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 254, "notes": ["B3", "D#4"], "duration": 1, "hand": "right"},
    {"beat": 255, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 256, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 256, "notes": ["E3", "G3"], "duration": 1, "hand": "right"},
    {"beat": 257, "notes": ["B3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 258, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 258, "notes": ["A3", "C#4"], "duration": 1, "hand": "right"},
    {"beat": 259, "notes": ["E4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 260, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 260, "notes": ["A3"], "duration": 1, "hand": "right"},
    {"beat": 261, "notes": ["C4"], "duration": 1, "hand": "right"},
    {"beat": 262.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 262, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 263, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 264, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 264, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 265, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 266, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 266, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 267, "notes": ["F#4", "D4"], "duration": 1, "hand": "right"},
    {"beat": 268, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 268, "notes": ["G3", "B3", "D4"], "duration": 4, "hand": "right"},
    {"beat": 270.0, "notes": ["D3"], "duration": 2.0, "hand": "left"},
    {"beat": 272, "notes": ["F#2"], "duration": 2, "hand": "left"},
    {"beat": 272, "notes": ["A3", "C4", "E4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 274, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 274, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 276, "notes": ["E2"], "duration": 2.0, "hand": "left"},
    {"beat": 276, "notes": ["G3", "B3", "D4", "F#4"], "duration": 4, "hand": "right"},
    {"beat": 278.0, "notes": ["B2"], "duration": 2.0, "hand": "left"},
    {"beat": 280, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 280, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 282, "notes": ["C#3"], "duration": 2, "hand": "left"},
    {"beat": 282, "notes": ["G3", "B3", "C#4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 284, "notes": ["C3"], "duration": 2.0, "hand": "left"},
    {"beat": 284, "notes": ["G3", "C4", "Eb4"], "duration": 4, "hand": "right"},
    {"beat": 286.0, "notes": ["G3"], "duration": 2.0, "hand": "left"},
    {"beat": 288, "notes": ["B2"], "duration": 4, "hand": "left"},
    {"beat": 288, "notes": ["G3", "B3", "D4"], "duration": 4, "hand": "right"},
    {"beat": 292, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 292, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 294, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 294, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 296, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 296, "notes": ["F#3", "G3", "B3", "D4"], "duration": 4, "hand": "right"},
    {"beat": 298.0, "notes": ["D3"], "duration": 2.0, "hand": "left"}
  ]
}
```

Escuchá primero el mapa de secciones y practicá por bloques. Podés detener el reproductor y volver a iniciar una sección por separado utilizando los previews de las sesiones anteriores. No dependas del loop para realizar las tomas.

## 4. Grabación — 5 min

Grabá una única toma sin reiniciar por errores pequeños. Si todavía no podés recorrer todo el arreglo, grabá la segunda parte y el estribillo final.

Al escucharla, evaluá si reconocés las secciones, mantenés el pulso, conservás los bajos con barra y podés continuar cuando alguna nota de la derecha no sale.

## Checkpoint

- **Mínimo:** recorrer todas las secciones a **50–55 BPM**, con ambas manos y sin perder el orden armónico, aunque necesites pausas entre bloques largos.
- **Ideal:** una toma continua del arreglo completo a **55 BPM**, alternando acordes y arpegios, con recuperación rápida de errores.

La meta de esta semana es conocer y conectar el arreglo. Las siguientes tres sesiones consolidarán la técnica y buscarán una interpretación más musical, sin volver a la progresión incorrecta del plan anterior.
