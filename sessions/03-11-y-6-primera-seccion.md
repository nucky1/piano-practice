---
title: Primera sección continua
week: 2026-W32 · 4–9 ago
song: 11 y 6
session: 3
duration: 30 min
focus: Introducción y primera parte del tema
---

## Objetivo

Unir la introducción aprendida con la primera parte cantada del cifrado y realizar una toma continua. El objetivo es dejar de pensar solamente en ejercicios aislados y empezar a recorrer una sección real de **11 y 6**.

Los acordes y su orden provienen del cifrado que compartiste, en **Sol mayor**. Las octavas, digitaciones y duraciones de los ejemplos son propuestas para piano. Las capturas no contienen una partitura rítmica ni la melodía, así que los previews utilizan un mapa de pulsos didáctico: los acordes principales duran cuatro pulsos y varios acordes de paso duran dos. **No es una transcripción exacta del ritmo de la grabación.**

En la app actual, los acordes con barra y algunas extensiones no se convierten automáticamente en un único modal. Por eso, podés consultar el acorde base y el bajo por separado; los eventos JSON sí contienen las notas correctas. Usamos `Em9` como nombre consultable para Em7(9), `Dsus4` para D4 y `Gsus4` para G4. El símbolo E° del cifrado corresponde a Mi disminuido, no a Mi mayor.

## 1. Repaso técnico — 5 min

Repasá los cambios que aparecen en la primera parte:

`F#m7b5` → `B7` → `Em7`

`Cm` → G/B

`C/D` → E°

Hacé cinco repeticiones lentas de cada pareja o grupo. En C/D, la derecha toca un acorde de Do sobre Re en el bajo. E° es Mi disminuido: `Mi` – `Sol` – `Sib`.

### Preview: cierre de la primera parte

El cifrado termina la primera parte con Am7 → C/D → E°. El preview agrega el G del comienzo de la sección siguiente para que escuches una resolución didáctica. No afirma que esa sea la duración exacta del enlace en la grabación.

```music-exercise
{
  "id": "s3-transicion-cierre",
  "title": "Am7 – C/D – E° – G",
  "description": "Cierre armónico de la primera parte y llegada propuesta a Sol. Acordes completos y bajos correctos.",
  "tempo": 55,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 0, "notes": ["G3", "A3", "C4", "E4"], "duration": 4, "hand": "right"},
    {"beat": 2.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 4, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 4, "notes": ["G3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 6, "notes": ["E3"], "duration": 2, "hand": "left"},
    {"beat": 6, "notes": ["G3", "Bb3", "E4"], "duration": 2, "hand": "right"},
    {"beat": 8, "notes": ["G2"], "duration": 2.0, "hand": "left"},
    {"beat": 8, "notes": ["G3", "B3", "D4"], "duration": 4, "hand": "right"},
    {"beat": 10.0, "notes": ["D3"], "duration": 2.0, "hand": "left"}
  ]
}
```

## 2. Manos separadas — 5 min

La primera parte del cifrado contiene dos grandes frases. La primera introduce el movimiento hacia Do menor y G/B; la segunda vuelve al comienzo y termina en E°.

### Primera frase

```text
G | F#m7b5 | B7 | Em7
Dsus4 | C#m7b5 | Cm | G/B
Am7 | C/D
```

### Segunda frase

```text
G | F#m7b5 | B7 | Em7
Dsus4 | C#m7b5 | Am7 | C/D
Edim
```

### Duraciones propuestas para el estudio

Primera frase:

```text
G          4 pulsos
F#m7b5     2 pulsos
B7         2 pulsos
Em7        4 pulsos
Dsus4      2 pulsos
C#m7b5     2 pulsos
Cm         2 pulsos
G/B        2 pulsos
Am7        2 pulsos
C/D        2 pulsos
```

Segunda frase:

```text
G          4 pulsos
F#m7b5     2 pulsos
B7         2 pulsos
Em7        4 pulsos
Dsus4      2 pulsos
C#m7b5     2 pulsos
Am7        4 pulsos
C/D        2 pulsos
Edim       2 pulsos
```

No todos los acordes duran lo mismo en el mapa de estudio. Los cambios de dos pulsos están pensados para que puedas practicar las armonías de paso sin convertir cada símbolo en un compás completo.

### Preview: mano izquierda

Escuchá el bajo de la primera parte. En los acordes con barra se sostiene el bajo escrito; en los acordes largos sin barra se alterna fundamental y quinta. Prestá atención al movimiento de C#m7b5 hacia Cm y de Cm hacia G/B.

```music-exercise
{
  "id": "s3-izquierda-primera-parte",
  "title": "Primera parte · Mano izquierda",
  "description": "Bajos de las dos frases de la primera parte. Duraciones de estudio, con fundamentales y quintas cuando corresponde.",
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

### Preview: mano derecha

La derecha utiliza arpegios en los acordes largos y dos ataques en los cambios de dos pulsos. En los acordes de séptima se conservan las notas que definen su color armónico.

```music-exercise
{
  "id": "s3-derecha-primera-parte",
  "title": "Primera parte · Mano derecha",
  "description": "Arpegios de las dos frases de la primera parte, con cambios de dos y cuatro pulsos.",
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
    {"beat": 11, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 12, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 13, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 14, "notes": ["C#4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 15, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 16, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 17, "notes": ["Eb4"], "duration": 1, "hand": "right"},
    {"beat": 18, "notes": ["G3", "B3"], "duration": 1, "hand": "right"},
    {"beat": 19, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 20, "notes": ["A3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 21, "notes": ["E4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 22, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 23, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 24, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 25, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 26, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 27, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 28, "notes": ["F#3", "A3"], "duration": 1, "hand": "right"},
    {"beat": 29, "notes": ["C4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 30, "notes": ["B3", "D#4"], "duration": 1, "hand": "right"},
    {"beat": 31, "notes": ["F#4", "A4"], "duration": 1, "hand": "right"},
    {"beat": 32, "notes": ["E3"], "duration": 1, "hand": "right"},
    {"beat": 33, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 34, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 35, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 36, "notes": ["A3", "D4"], "duration": 1, "hand": "right"},
    {"beat": 37, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 38, "notes": ["C#4", "E4"], "duration": 1, "hand": "right"},
    {"beat": 39, "notes": ["G4", "B4"], "duration": 1, "hand": "right"},
    {"beat": 40, "notes": ["A3"], "duration": 1, "hand": "right"},
    {"beat": 41, "notes": ["C4"], "duration": 1, "hand": "right"},
    {"beat": 42, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 43, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 44, "notes": ["G3", "C4"], "duration": 1, "hand": "right"},
    {"beat": 45, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 46, "notes": ["E4", "G4"], "duration": 1, "hand": "right"},
    {"beat": 47, "notes": ["Bb4"], "duration": 1, "hand": "right"}
  ]
}
```

## 3. Manos juntas — 15 min

### Acordes que aparecen por primera vez

| Cifrado | Notas del acorde | Función de estudio |
|---|---|---|
| Em7 | `Mi` – `Sol` – `Si` – `Re` | Acorde menor con séptima |
| C/D | `Do` – `Mi` – `Sol`, bajo Re | Acorde de Do con bajo específico |
| E° | `Mi` – `Sol` – `Sib` | Disminuido de paso |

En la segunda frase, el cifrado escribe Am7 → C/D → E°. No sustituyas E° por E7 ni por Em: el Si bemol es parte de su sonido característico.

Trabajá primero la primera frase, después la segunda y finalmente unilas. Para las estrofas usaremos una versión sencilla: la derecha toca el acorde completo en los pulsos 1 y 3 cuando la armonía dura cuatro pulsos; los acordes de paso de dos pulsos se tocan una sola vez. La izquierda mantiene la fundamental o el bajo indicado y, cuando corresponde, agrega la quinta.

### Aplicación musical: introducción y primera parte

Este es el preview continuo de la primera semana. Contiene la introducción completa y las dos frases de la primera parte del cifrado. La introducción utiliza el arpegio de la sesión 2 y la parte cantada utiliza acordes sostenidos o repetidos suavemente.

El ejemplo conserva el orden y las notas de los acordes que compartiste. Su ritmo es una adaptación pedagógica: no incluye la melodía original ni pretende ser una transcripción del piano de la grabación.

```music-exercise
{
  "id": "s3-intro-y-primera-parte",
  "title": "11 y 6 · Introducción y primera parte",
  "description": "Arreglo continuo del inicio y la primera parte: introducción arpegiada, seguida de acordes de acompañamiento con ambas manos. Duraciones didácticas.",
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
    {"beat": 90, "notes": ["G3", "Bb3", "E4"], "duration": 2, "hand": "right"}
  ]
}
```

Primero escuchá el ejemplo completo. Después practicá cada frase por separado y realizá una toma de la sección unida a **50–55 BPM**. Si te equivocás, intentá recuperar el pulso en el siguiente acorde en lugar de reiniciar.

## 4. Grabación — 5 min

Grabá una toma de la introducción y la primera parte con el celular. No reinicies por errores pequeños. Al escucharla, evaluá solamente si mantenés el pulso, si reconocés los cambios y si la izquierda continúa cuando la derecha se equivoca.

## Checkpoint

- **Mínimo:** una toma continua del inicio y la primera parte a **50–55 BPM**, aunque necesites simplificar algunos acordes.
- **Ideal:** dos tomas estables a **55 BPM**, con los bajos de paso correctos y sin detenerte por una nota equivocada.

Las sesiones 4–6 continuarán con el estribillo y la segunda parte, y las sesiones 7–9 deberán integrar el arreglo completo del ciclo. El tema entero no se considera aprendido solamente por repetir esta primera sección.
