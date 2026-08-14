# Erste Schritte

## 1. Caches importieren

GCMystSolver liest **GPX-Dateien** ein — entweder einzelne, von geocaching.com/c:geo exportierte
Caches, oder eine ganze **PocketQuery** mit hunderten Caches auf einmal. Öffne die App, wähle
*Import* und die gewünschte Datei. Bereits vorhandene Caches werden dabei aktualisiert statt
doppelt angelegt.

Beim Import passiert automatisch mehr als nur das Einlesen:

- Land, Bundesland und Landkreis werden aus den Koordinaten aufgelöst (offline, ohne Internet).
- Für Challenge-relevante Caches wird sofort geprüft, ob deine bisherigen Funde die jeweilige
  Anforderung erfüllen (Ampel Rot/Gelb/Grün).
- Höhenwerte werden im Hintergrund nachgeladen (das kann bei großen PocketQueries etwas dauern,
  läuft aber unauffällig weiter, während du die App schon nutzt).

## 2. (Optional) KI aktivieren

Die eingebauten Solver lösen bereits viele Rätseltypen ohne jede KI. Für alles, was darüber
hinausgeht, kannst du in *Setup* eine KI anbinden (eigener API-Key eines unterstützten Anbieters).
Das Setup zeigt dir eine grobe Token-Budget-Schätzung, damit du eine Vorstellung von den zu
erwartenden Kosten für eine ganze PocketQuery hast.

Mehr dazu: [KI-Lösungsversuch](funktionen/ki-solver.md), [Einstellungen & Backup](funktionen/einstellungen-backup.md).

## 3. Lösen lassen

Im *Solve*-Tab startest du den Löse-Lauf über deine importierten Caches. Du wählst dabei:

- **Wie gründlich** (Preset von schnell/nur-offline bis intensiv mit KI),
- **Welche Caches** einbezogen werden (nur ungelöste, ungelöste+unsichere, oder wirklich alle —
  siehe [Automatische Solver](funktionen/solver.md#solve-modus)).

Am Ende siehst du für jeden Cache eine Ampelfarbe und, falls etwas gefunden wurde, die
vorgeschlagene Lösung samt Begründung.

## 4. Weiterarbeiten an einem einzelnen Cache

Auf der Detailseite eines Caches kannst du die Lösung übernehmen, korrigieren, oder den
[AI-Chat](funktionen/ai-chat.md) öffnen, um gezielt über diesen einen Cache mit der KI zu
diskutieren.
