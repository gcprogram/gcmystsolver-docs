# Automatische Solver

Bevor überhaupt eine KI angefragt wird, versucht GCMystSolver dein Rätsel mit einer Kette fest
eingebauter, klassischer Löser zu knacken. Das ist schneller, kostenlos und funktioniert auch ganz
ohne KI-Anbindung.

## Was erkannt wird

| Solver | Erkennt |
|---|---|
| **what3words** | Drei-Wörter-Koordinaten (`///wort.wort.wort`) |
| **Vigenère** | Vigenère-verschlüsselte Texte inkl. Schlüsselerkennung |
| **ROT-N** | Caesar-/ROT-Verschiebungen, auch mit unbekanntem N |
| **Krypto (Multi-Dekoder)** | Gängige Klassiker wie Base64, Morse, Atbash u. a. in Kombination |
| **Enigma** | Enigma-verschlüsselte Texte |
| **Peilung/Verschiebung** | "Peile … Grad, … Meter" sowie kompakte N/E-Verschiebungsnotation, in Deutsch/Englisch/Niederländisch/Französisch/Tschechisch |
| **Reverse-Wherigo** | Wherigo-Cartridges rückwärts ausgewertet |
| **Ziffern/Zahlwörter in einer Geschichte versteckt** | Koordinaten, die als verstreute Ziffern oder ausgeschriebene Zahlwörter in einem Fließtext versteckt sind |
| **One-Stage-Erkennung** | Erkennt explizite "einstufig"/"one-stage"-Hinweise, bei Letterbox-Caches zusätzlich eine vorsichtige Indizien-Heuristik |
| **Jigidi** | Erkennt einen unaufgelösten Jigidi-Puzzle-Link und markiert ihn als "nur teilweise automatisch lösbar", statt ihn stillschweigend an die KI weiterzugeben (die das verlinkte Bild nicht sehen kann) |

Jeder Solver schreibt transparent hin, **was genau erkannt wurde** (z. B. die erkannte Zahl oder
der erkannte Text) — so fällt eine Fehlinterpretation sofort auf, statt sich als stille Falschlösung
zu tarnen.

## Feld- vs. Sofa-Rätsel

GCMystSolver unterscheidet, ob ein Rätsel grundsätzlich vom Sofa aus lösbar ist oder zwingend
einen Vor-Ort-Besuch braucht (z. B. ein Multi mit mehreren Stationen, eine Peilung, die erst am
ersten Wegpunkt gemessen werden kann). Bei harten Hinweisen auf ein Feld-Rätsel (z. B. explizite
Stationsnummerierung im Listing oder echte Wegpunkte in der GPX-Datei) wird kein KI-Lösungsversuch
unternommen — die App würde sonst nur raten.

## Solve-Modus

Beim Start eines Löse-Laufs wählst du, welche Caches einbezogen werden:

- **Unsolved (Standard)**: nur wirklich ungelöste (rote) Caches, harte Feld-Rätsel werden
  übersprungen.
- **+ Partial**: zusätzlich unsichere (gelbe) Lösungen, bestehende sichere (grüne) Lösungen bleiben
  unangetastet.
- **Force (alle)**: wirklich alle Caches, unabhängig von Ampelfarbe oder Fundstatus — z. B. um eine
  Lösung nach einem Solver-Update neu zu berechnen.

Zusätzlich wählst du ein **Preset** (Schnell/offline-only bis intensiv mit KI), das bestimmt, wie
aufwändig gesucht wird, bevor die KI zurate gezogen wird.

## Gefundene Caches

Bereits gefundene Caches werden immer als gelöst (grün) angezeigt, ohne erneut geprüft zu werden.
