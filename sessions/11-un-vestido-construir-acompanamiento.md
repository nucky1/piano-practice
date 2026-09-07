---
title: Construir el acompañamiento
week: 2026-W35 · 24–30 ago
song: Un vestido y un amor
session: 2
duration: 30 min
focus: Arpegio del inicio y bajos de paso
---

## Objetivo

Transformar los acordes reales del inicio en un acompañamiento de piano. Reutilizar el patrón de arpegio conocido, respetando los bajos de paso y el color de los acordes de séptima.

Los registros de los previews son posiciones propuestas para estudiar. Tu cifrado aporta el orden de los acordes, pero no especifica las duraciones exactas, el ritmo de piano ni una melodía. Por eso, los ejemplos usan **un compás de cuatro pulsos por acorde**: es una decisión didáctica y no una transcripción rítmica de la grabación.

Los acordes con barra conservan su bajo real. Por ejemplo, Bm/A significa Si menor con La en el bajo; no es un acorde de La. El renderer actual no convierte automáticamente los cifrados con barra en un modal, por lo que también encontrarás el acorde base y la nota del bajo como términos clicables.

## 1. Repaso armónico — 5 min

Tocá una vuelta lenta del comienzo:

```text
Bm | Bm/A | E/G# | G
D/F# | Em7 | A/C# | D
```

Primero derecha sola y después ambas manos. Empezá a **45 BPM** y subí a 50 cuando los cambios estén preparados.

Recordá que Bm/A es `Bm` sobre `La`, E/G# es `E` sobre `Sol#`, D/F# es `D` sobre `Fa#` y A/C# es `A` sobre `Do#`. No sustituyas estos acordes por los nombres de sus bajos.

## 2. Mano derecha — 8 min

Utilizá el patrón:

**grave → medio → agudo → medio**

Dentro de las posiciones propuestas, practicá:

- Bm: `Si` → `Re` → `Fa#` → `Re`.
- Bm/A: `Si` → `Re` → `Fa#` → `Re`.
- E/G#: `Si` → `Mi` → `Sol#` → `Mi`.
- G: `Si` → `Re` → `Sol` → `Re`.
- D/F#: `La` → `Re` → `Fa#` → `Re`.
- Em7: `Mi` → `Sol` → `Re` → `Sol`.
- A/C#: `La` → `Do#` → `Mi` → `Do#`.
- D: `La` → `Re` → `Fa#` → `Re`.

En Em7, la izquierda aporta el bajo Mi y la quinta Si. La derecha utiliza Mi–Sol–Re–Sol para conservar el color de séptima. No hace falta tocar todas las notas del acorde en cada arpegio cuando están repartidas entre las manos.

### Preview: primer grupo de arpegios

Escuchá el primer grupo con una nota por pulso. La posición de la derecha se mantiene mientras el bajo de Bm cambia de Si a La en el siguiente acorde.

```music-exercise
{
  "id": "uv11-arpegio",
  "title": "Arpegio del primer grupo",
  "description": "Bm – Bm/A – E/G# – G. Una nota por pulso; posiciones propuestas para la derecha.",
  "tempo": 50,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 1, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 2, "notes": ["F#4"], "duration": 1, "hand": "right"},
    {"beat": 3, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 4, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 5, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 6, "notes": ["F#4"], "duration": 1, "hand": "right"},
    {"beat": 7, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 8, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 9, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 10, "notes": ["G#4"], "duration": 1, "hand": "right"},
    {"beat": 11, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 12, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 13, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 14, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 15, "notes": ["D4"], "duration": 1, "hand": "right"}
  ]
}
```

## 3. Mano izquierda — 7 min

Repasá la línea de bajo de la sesión anterior. No conviertas Bm/A, E/G#, D/F# ni A/C# en acordes nuevos: son inversiones o acordes con bajo específico.

En los acordes sin barra, tocá fundamental en **1** y quinta en **3**. En los acordes con barra, sostené el bajo indicado durante el compás.

### Preview: izquierda del inicio

Observá el descenso de los bajos y escuchá cómo se combina con la alternancia de las quintas. La velocidad inicial es de 50 BPM.

```music-exercise
{
  "id": "uv11-izquierda",
  "title": "Izquierda del inicio",
  "description": "Fundamental y quinta cuando corresponde; bajos de paso sostenidos en los acordes con barra.",
  "tempo": 50,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 2, "notes": ["F#3"], "duration": 2, "hand": "left"},
    {"beat": 4, "notes": ["A2"], "duration": 4, "hand": "left"},
    {"beat": 8, "notes": ["G#2"], "duration": 4, "hand": "left"},
    {"beat": 12, "notes": ["G2"], "duration": 2, "hand": "left"},
    {"beat": 14, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 16, "notes": ["F#2"], "duration": 4, "hand": "left"},
    {"beat": 20, "notes": ["E2"], "duration": 2, "hand": "left"},
    {"beat": 22, "notes": ["B2"], "duration": 2, "hand": "left"},
    {"beat": 24, "notes": ["C#3"], "duration": 4, "hand": "left"},
    {"beat": 28, "notes": ["D3"], "duration": 2, "hand": "left"},
    {"beat": 30, "notes": ["A3"], "duration": 2, "hand": "left"}
  ]
}
```

## 4. Manos juntas — 10 min

Combiná la izquierda con el arpegio de cuatro pulsos. Primero practicá dos acordes consecutivos; después cuatro; finalmente uní los ocho del inicio.

```text
Pulso:       1       2       3       4
Derecha:     grave   medio   agudo   medio
Izquierda:   bajo    —       quinta  —
```

La quinta se utiliza solamente cuando el acorde no tiene un bajo de paso que debamos conservar. En los acordes con barra, el bajo se sostiene durante el compás.

Arrancá a **45 BPM**. Si conseguís dos vueltas sin detenerte, subí a **50 BPM**.

### Aplicación musical: inicio arpegiado

Ahora escucharás el mismo comienzo de la canción, pero con el acompañamiento que estás aprendiendo. La armonía y los bajos provienen de tu cifrado; el arpegio uniforme es una adaptación pedagógica. Este preview todavía no incluye la melodía ni el ritmo exacto de la grabación.

```music-exercise
{
  "id": "uv11-inicio-arpegiado",
  "title": "Inicio arpegiado · Un vestido y un amor",
  "description": "Ocho acordes del inicio con arpegio de cuatro pulsos y bajo correspondiente. Arreglo didáctico a 50 BPM.",
  "tempo": 50,
  "beatsPerBar": 4,
  "events": [
    {"beat": 0, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 1, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 2, "notes": ["F#4"], "duration": 1, "hand": "right"},
    {"beat": 3, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 4, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 5, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 6, "notes": ["F#4"], "duration": 1, "hand": "right"},
    {"beat": 7, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 8, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 9, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 10, "notes": ["G#4"], "duration": 1, "hand": "right"},
    {"beat": 11, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 12, "notes": ["B3"], "duration": 1, "hand": "right"},
    {"beat": 13, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 14, "notes": ["G4"], "duration": 1, "hand": "right"},
    {"beat": 15, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 16, "notes": ["A3"], "duration": 1, "hand": "right"},
    {"beat": 17, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 18, "notes": ["F#4"], "duration": 1, "hand": "right"},
    {"beat": 19, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 20, "notes": ["E3"], "duration": 1, "hand": "right"},
    {"beat": 21, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 22, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 23, "notes": ["G3"], "duration": 1, "hand": "right"},
    {"beat": 24, "notes": ["A3"], "duration": 1, "hand": "right"},
    {"beat": 25, "notes": ["C#4"], "duration": 1, "hand": "right"},
    {"beat": 26, "notes": ["E4"], "duration": 1, "hand": "right"},
    {"beat": 27, "notes": ["C#4"], "duration": 1, "hand": "right"},
    {"beat": 28, "notes": ["A3"], "duration": 1, "hand": "right"},
    {"beat": 29, "notes": ["D4"], "duration": 1, "hand": "right"},
    {"beat": 30, "notes": ["F#4"], "duration": 1, "hand": "right"},
    {"beat": 31, "notes": ["D4"], "duration": 1, "hand": "right"}
  ]
}
```

## Checkpoint

Podés encadenar al menos cuatro acordes con ambas manos a **50 BPM**, conservando los bajos de paso. El objetivo ideal es completar el inicio entero sin detener el pulso.
