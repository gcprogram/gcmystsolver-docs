# Einstellungen & Backup

## KI-Anbindung

In *Setup* hinterlegst du deinen eigenen API-Key eines unterstützten KI-Anbieters sowie eine
Liste von Modellen. Diese Liste dient gleichzeitig als automatische Fallback-Reihenfolge (siehe
[KI-Lösungsversuch](ki-solver.md)) — es gibt keine gesonderte "Backup-Modell"-Einstellung mehr.
Über **"Test models"** kannst du jedes hinterlegte Modell einzeln testen.

Für einen kostenlosen Einstieg in einen ersten API-Key siehe die
[NVIDIA/Google-Gemini-Empfehlung](ki-solver.md#empfehlung-kostenlos-starten-mit-nvidia-oder-google-gemini).

## what3words

Für die Erkennung von what3words-Koordinaten kannst du optional einen eigenen what3words-API-Key
hinterlegen.

## Backup & Restore

GCMystSolver kann deine komplette Datenbank plus Einstellungen sichern. Dabei gibt es zwei
Schutzstufen gleichzeitig:

- **Geräte-gebundenes Backup**: automatisch, ohne Passwort — funktioniert zuverlässig, solange du
  auf **demselben Gerät** wiederherstellst (der häufigste Fall, z. B. nach einer Neuinstallation).
- **Passwortgeschütztes Backup** *(optional)*: nötig, wenn du ein Backup auf einem **anderen**
  Gerät wiederherstellen möchtest — nur damit können API-Keys geräteübergreifend mitgenommen
  werden.

Stellst du ein rein geräte-gebundenes Backup auf einem fremden Gerät wieder her, werden deine
Datenbank und alle nicht-geheimen Einstellungen trotzdem vollständig wiederhergestellt — nur deine
API-Keys bleiben leer und müssen einmalig neu eingegeben werden (die App weist dich klar darauf
hin).

## Gespeicherte Lösungen zurücksetzen

**"Clear stored solutions"** löscht gezielt alle gespeicherten Lösungen eines bestimmten
Solver-Typs und berechnet die betroffenen Notizen neu — praktisch nach einem App-Update, das einen
Solver korrigiert hat, damit keine veralteten Falschlösungen in deiner Datenbank stehen bleiben.
