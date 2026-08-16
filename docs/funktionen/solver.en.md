# Automatic Solvers

Before an AI is ever consulted, GCMystSolver tries to crack your puzzle with a chain of built-in,
classic solvers. That's faster, free, and works even with no AI connected at all.

You reach the *Solve* tab either directly via the bottom navigation (a solving run over a whole
list) or via the explicit Solve button on a single cache's detail page (solves only that one
cache, regardless of the chosen solve mode).

<figure class="gcms-shot" markdown>
![Solve tab with all solver chips](../assets/screenshots/solve-chips.png)
<figcaption>Solve mode, preset, and individually toggleable solver chips</figcaption>
</figure>

## What gets recognized

| Solver | Recognizes |
|---|---|
| **what3words** | Three-word coordinates (`///word.word.word`) |
| **Vigenère** | Vigenère-encrypted text, including key detection |
| **ROT-N** | Caesar/ROT shifts, even with an unknown N |
| **Crypto (multi-decoder)** | Common classics such as Base64, Morse, Atbash, and others, in combination |
| **Enigma** | Enigma-encrypted text |
| **Bearing/projection** | "Head … degrees, … meters" as well as the compact N/E projection notation, in German/English/Dutch/French/Czech |
| **Reverse Wherigo** | Wherigo cartridges evaluated in reverse |
| **Digits/number words hidden in a story** | Coordinates hidden as scattered digits or spelled-out number words in a narrative text |
| **One-stage detection** | Recognizes explicit "single-stage"/"one-stage" hints; for letterbox caches, also a cautious circumstantial heuristic |
| **Jigidi** | Recognizes an unsolved Jigidi puzzle link and marks it as "only partially solvable automatically" instead of silently passing it to the AI (which cannot see the linked image) |

Every solver transparently states **exactly what it recognized** (e.g. the detected number or
text) — so a misinterpretation stands out immediately, instead of disguising itself as a silent
wrong answer.

## Field puzzles vs. armchair puzzles

GCMystSolver distinguishes whether a puzzle is fundamentally solvable from your armchair or
necessarily requires an on-site visit (e.g. a multi with several stages, a bearing that can only
be measured at the first waypoint). When there is hard evidence of a field puzzle (e.g. explicit
stage numbering in the listing or real waypoints in the GPX file), no AI solving attempt is made —
the app would otherwise just be guessing.

## Solve mode

When starting a solving run, you choose which caches are included:

- **Unsolved (default)**: only truly unsolved (red) caches; hard field puzzles are skipped.
- **+ Partial**: additionally uncertain (yellow) solutions; existing trusted (green) solutions
  stay untouched.
- **Force (all)**: really all caches, regardless of traffic-light color or find status — e.g. to
  recompute a solution after a solver update.

You additionally choose a **preset** (fast/offline-only up to intensive with AI), which
determines how much effort is spent searching before the AI is consulted.

## Found caches

Already found caches are always shown as solved (green), without being checked again.
