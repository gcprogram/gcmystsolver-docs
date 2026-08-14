# KI-Lösungsversuch

Findet keiner der [automatischen Solver](solver.md) etwas Passendes und das Rätsel ist kein
erkanntes Feld-Rätsel, kann GCMystSolver optional eine angebundene KI zurate ziehen.

## Voraussetzung

Du brauchst einen eigenen API-Key eines unterstützten KI-Anbieters, den du in *Setup* hinterlegst.
Ohne hinterlegten Key funktioniert die App weiterhin — nur eben ohne den KI-Baustein, rein mit den
automatischen Solvern.

## Modell-Rotation statt starrem Backup-Modell

Du hinterlegst eine Liste eigener Modelle in *Setup*. Schlägt eine Anfrage fehl (z. B. weil ein
Anbieter überlastet ist), probiert die App automatisch das nächste Modell aus deiner Liste, ohne
nachzufragen. Erst wenn **die ganze Liste** für eine einzelne Anfrage erfolglos durchprobiert
wurde, erscheint eine Meldung mit den Optionen *Abbrechen* oder *Weitermachen*.

Über *Setup → Test models* kannst du jedes hinterlegte Modell einzeln testen.

## Kosten grob einschätzen

Der Einrichtungsassistent zeigt eine grobe Token-Budget-Schätzung: pro tatsächlich von der KI
versuchtem Cache sind es etwa 900–1.000 Token, für eine ganze PocketQuery mit ~1.000 Caches
typischerweise mehrere Zehntausend bis rund 200.000 Token — abhängig davon, wie viele Caches
überhaupt bis zur KI-Stufe durchgereicht werden (die automatischen Solver fangen den Großteil
vorher ab).

## Transparenz der Lösung

Ein KI-Lösungsvorschlag wird immer mit einer Begründung angezeigt und als **unsicher (gelb)**
markiert, bis du ihn bestätigst oder korrigierst — er überschreibt nie automatisch eine bereits
als sicher markierte Lösung.
