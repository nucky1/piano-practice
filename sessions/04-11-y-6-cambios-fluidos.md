---
title: Cambios fluidos
week: 2026-W33 · 10–16 ago
song: 11 y 6
session: 1
duration: 30 min
focus: Anticipar acordes e incorporar el estribillo
---

## Objetivo

Mejorar la anticipación de los cambios e incorporar los acordes del estribillo real de **11 y 6**. Al terminar, podrás reconocer sus frases y tocar un acompañamiento sencillo con la derecha en los pulsos 1 y 3 y la izquierda manteniendo los bajos.

Los acordes y su orden provienen del cifrado que compartiste, en **Sol mayor**. Las posiciones y duraciones de los previews son propuestas pedagógicas. Las capturas no incluyen una partitura rítmica ni la melodía: se mantiene el mapa de estudio de las sesiones anteriores, con acordes de cuatro y dos pulsos, y algunos cambios de un pulso. **No son las duraciones exactas ni el arreglo de piano de la grabación.**

Los cifrados con barra conservan su bajo. Para consultar acordes en el modal, utilizá `Cmaj7` por C7M, `Fmaj7` por F7M, `F#m7b5` por F#m7(5−), `C#m7b5` por C#m7(5−), `Dsus4` por D4 y `Gsus4` por G4. El renderer actual puede no reconocer los acordes con barra o algunas extensiones: consultá el acorde base y el bajo por separado. Los bloques JSON incluyen todas las notas necesarias.

Los previews son acompañamientos instrumentales de estudio. No contienen la melodía original ni simulan una grabación de Fito Páez. Se utilizará una misma referencia armónica para que las nueve sesiones construyan un arreglo coherente.

## 1. Calentamiento — 5 min

Tocá con cada mano la secuencia:

`Sol` → `La` → `Si` → `Do` → `Re` → `Do` → `Si` → `La` → `Sol`

Una nota por pulso a 55 BPM, con volumen parejo. Después repasá lentamente `G` → `F#m7b5` → `B7` → `Em9`, preparando la posición siguiente antes del cambio.

## 2. Mano derecha — 8 min

### Acordes del estribillo

El cifrado utiliza esta frase, que aparece varias veces:

`Cmaj7` → `Bm7` → `Em7` → Fmaj7/G

El último acorde es Fa mayor séptima sobre Sol en el bajo. No se debe reemplazar por un acorde simple de Sol ni por F7 dominante.

| Cifrado | Notas | Posición sugerida de la derecha |
|---|---|---|
| C7M / Cmaj7 | `Do` – `Mi` – `Sol` – `Si` | C4 – E4 – G4 – B4 |
| Bm7 | `Si` – `Re` – `Fa#` – `La` | A3 – B3 – D4 – F#4 |
| Em7 | `Mi` – `Sol` – `Si` – `Re` | G3 – B3 – D4 – E4 |
| F7M/G | `Fa` – `La` – `Do` – `Mi`, bajo `Sol` | A3 – C4 – E4 – F4 |

Estudiá también la segunda frase:

`Cmaj7` → `B7` → `Em7` → `A7`

A7 contiene `La` – `Do#` – `Mi` – `Sol`. Su Do# es diferente del Do natural de Am7 y ayuda a reconocer el cambio de color.

### Preview: dos frases del estribillo

El ejemplo toca una armonía cada dos pulsos, con la derecha sola. Escuchá la diferencia entre Bm7 y B7, y prepará los dedos mientras termina el acorde anterior. Estas duraciones son de estudio.

```music-exercise
{
  "id": "s4-frases-estribillo",
  "title": "Dos frases del estribillo",
  "description": "Cmaj7 – Bm7 – Em7 – Fmaj7/G, seguido de Cmaj7 – B7 – Em7 – A7. Dos pulsos por acorde.",
  "tempo": 55,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 2, "notes": ["A3", "B3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 4, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 6, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 8, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 10, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 12, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 14, "notes": ["G3", "A3", "C#4", "E4"], "duration": 2, "hand": "right"}
  ]
}
```

### Cambios difíciles

Repetí ocho veces, lentamente, `Cmaj7` → `Bm7` y `B7` → `Em7`. Buscá conservar las notas comunes y mover los dedos lo mínimo posible. En el último pulso empezá a pensar la posición siguiente.

## 3. Mano izquierda — 7 min

Practicá los bajos de las dos frases:

```text
Cmaj7  Bm7  Em7  Fmaj7/G
Do     Si   Mi   Sol

Cmaj7  B7   Em7  A7
Do     Si   Mi   La
```

En los cambios de dos pulsos mantené una sola nota grave. En los acordes de cuatro pulsos, como Am7, podés tocar fundamental en 1 y quinta en 3. En Fmaj7/G se conserva Sol como bajo: no lo sustituyas por Fa.

### Preview: bajo del estribillo

```music-exercise
{
  "id": "s4-bajos-estribillo",
  "title": "Bajos del estribillo",
  "description": "Bajos de las dos frases y del enlace Am7 – Dsus4 – Fmaj7/G. Los acordes con barra conservan su bajo.",
  "tempo": 55,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 2, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 4, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 6, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 8, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 10, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 12, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 14, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 16, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 18.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 20, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 22, "notes": ["G2"], "duration": 2, "hand": "left"}
  ]
}
```

## 4. Manos juntas — 10 min

Utilizá una versión sencilla del acompañamiento:

- En acordes de cuatro pulsos, la izquierda toca la fundamental en 1 y la quinta en 3 cuando corresponde; la derecha toca el acorde completo en 1 y 3.
- En acordes de dos pulsos, la izquierda sostiene el bajo y la derecha toca el acorde una vez.
- En Fmaj7/G, la izquierda mantiene Sol; en acordes con barra no cambies el bajo por la fundamental del acorde.

### Mapa del estribillo

Cada fila representa una frase de ocho pulsos en el mapa pedagógico.

```text
Cmaj7 | Bm7 | Em7 | Fmaj7/G
Cmaj7 | Bm7 | Em7 | Fmaj7/G
Cmaj7 | B7 | Em7 | A7
Am7 | Dsus4 | Fmaj7/G | Cmaj7
Bm7 | Em7 | Fmaj7/G | Cmaj7
Bm7 | Em7 | Fmaj7/G | Cmaj7
B7 | Em7 | A7 | Am7
Dsus4 | D
```

El cifrado repite la frase de Cmaj7–Bm7–Em7–Fmaj7/G, intercala la frase Cmaj7–B7–Em7–A7 y termina con Am7–Dsus4–D. En el primer enlace aparece Fmaj7/G en lugar del D final.

### Aplicación musical: estribillo completo

El preview reproduce el estribillo entero del cifrado, con las repeticiones y los cambios armónicos correspondientes. La derecha usa acordes completos y la izquierda los bajos. No es una transcripción rítmica exacta, sino el arreglo simplificado que practicarás esta semana.

```music-exercise
{
  "id": "s4-estribillo-completo",
  "title": "11 y 6 · Estribillo completo",
  "description": "Estribillo del cifrado con sus repeticiones, enlaces Fmaj7/G y cierre Am7 – Dsus4 – D. Acordes en 1 y 3 cuando corresponda, con bajos correctos.",
  "tempo": 55,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 0, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 2, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 2, "notes": ["A3", "B3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 4, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 4, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 6, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 6, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 8, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 8, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 10, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 10, "notes": ["A3", "B3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 12, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 12, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 14, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 14, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 16, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 16, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 18, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 18, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 20, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 20, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 22, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 22, "notes": ["G3", "A3", "C#4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 24, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 24, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 26.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 26, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 28, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 28, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 30, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 30, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 32, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 32, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 34, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 34, "notes": ["A3", "B3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 36, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 36, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 38, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 38, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 40, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 40, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 42, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 42, "notes": ["A3", "B3", "D4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 44, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 44, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 46, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 46, "notes": ["A3", "C4", "E4", "F4"], "duration": 2, "hand": "right"},
    {"beat": 48, "notes": ["C3"], "duration": 2, "hand": "left"},
    {"beat": 48, "notes": ["B3", "C4", "E4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 50, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 50, "notes": ["A3", "B3", "D#4", "F#4"], "duration": 2, "hand": "right"},
    {"beat": 52, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 52, "notes": ["G3", "B3", "D4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 54, "notes": ["A2"], "duration": 2, "hand": "left"},
    {"beat": 54, "notes": ["G3", "A3", "C#4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 56, "notes": ["A2"], "duration": 2.0, "hand": "left"},
    {"beat": 56, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 58.0, "notes": ["E3"], "duration": 2.0, "hand": "left"},
    {"beat": 58, "notes": ["G3", "A3", "C4", "E4"], "duration": 2, "hand": "right"},
    {"beat": 60, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 60, "notes": ["A3", "D4", "G4"], "duration": 2, "hand": "right"},
    {"beat": 62, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 62, "notes": ["A3", "D4", "F#4"], "duration": 2, "hand": "right"}
  ]
}
```

Comenzá a **50 BPM** por frases. Cuando logres dos frases sin detenerte, subí a **55 BPM**. Si el estribillo entero todavía resulta largo, practicá la primera mitad y luego la segunda; el preview queda disponible para escuchar la estructura completa.

## Checkpoint

Podés reconocer el orden del estribillo, tocar las dos frases principales con ambas manos a **55 BPM** y resolver B7 → Em7 sin un silencio evidente. El objetivo ideal es una vuelta del estribillo completo sin perder la estructura.
