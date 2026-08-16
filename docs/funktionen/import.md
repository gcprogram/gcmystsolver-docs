# Import & Export (GPX / PocketQuery)

<figure class="gcms-shot" markdown>
![Import-Screen mit "Choose GPX / ZIP"-Button](../assets/screenshots/import-screen.png)
<figcaption>Import-Tab</figcaption>
</figure>

## Unterstützte Dateien

- Einzelne **GPX-Dateien**, wie sie geocaching.com oder c:geo für einen Cache oder eine Liste
  exportieren.
- **PocketQueries** (ebenfalls GPX-Format) mit bis zu mehreren hundert Caches auf einmal.

Bereits vorhandene Caches werden beim erneuten Import **aktualisiert**, nicht dupliziert — du
kannst also dieselbe Liste beliebig oft neu importieren, um z. B. deinen aktuellen Fundstatus zu
übernehmen.

## Listenname

Vor dem Import trägst du einen **freien Listennamen** ein (vorausgefüllt mit dem Dateinamen, bei
leerem Feld heißt die Liste "import"). Zwei Fälle:

- **Neuer Name**: Es wird eine neue Liste mit diesem Namen angelegt.
- **Name einer bestehenden Liste**: Die importierten Caches werden dieser Liste hinzugefügt, es
  entsteht keine doppelte Liste und keine doppelten Caches.

Zusätzlich gibt es die Option **"Rename list by region (from cache locations)"** — die App
bestimmt nach dem Import automatisch einen Namen aus den Cache-Koordinaten (Cluster-Erkennung +
Ortsauflösung), z. B. "Kerpen, Nordrhein-Westfalen, DE".

!!! warning "Nicht für MyFinds-Queries"
    Bei einer MyFinds-PocketQuery sind die Funde über die ganze Welt verstreut — eine
    automatische Regions-Umbenennung ergibt hier keinen sinnvollen Namen. Zudem heißt die von
    geocaching.com heruntergeladene Datei meist nur nach der PQ-ID (z. B. `1234567.gpx`) — das
    vorausgefüllte Listenname-Feld wäre also ebenfalls nur diese Zahl. Für solche Listen den
    Namen lieber von Hand vergeben (z. B. "MyFinds").

## Was beim Import automatisch passiert

1. **Fundstatus-Erkennung**: Ob es sich um eine MyFinds-PocketQuery handelt, erkennt die App am
   `<name>`-Feld **im Inhalt der GPX-Datei selbst** (bei geocaching.com immer wörtlich "My Finds
   Pocket Query", unabhängig von der Sprache deines Kontos) — **nicht am Dateinamen**. Die Erkennung
   funktioniert also unabhängig davon, ob die Datei `myfinds.gpx` oder nur `1234567.gpx` heißt.
   Alle enthaltenen Caches werden dabei automatisch als gefunden markiert (Meldung: *"Recognised
   as a My Finds query — all of them marked found."*). In normalen PQs/GPX-Dateien erkennt die App
   zusätzlich deine eigenen "Found it"/"Attended"/"Webcam Photo Taken"-Logeinträge, indem sie sie
   mit deinem in *Setup* hinterlegten geocaching.com-**Username** abgleicht. Einmal als gefunden
   erkannt, bleibt ein Cache das auch bei jedem weiteren Import.
2. **Region-Auflösung** (offline, ohne Internetzugriff): Land, Bundesland und Landkreis werden aus
   den Cache-Koordinaten bestimmt.
3. **Challenge-Vorprüfung**: Für alle Caches, die als Challenge erkannt werden, wird sofort die
   Ampel-Bewertung berechnet (siehe [Challenge-Prüfung](challenges.md)) — nicht erst beim Öffnen
   des Caches.
4. **Höhenauflösung im Hintergrund**: Höhenwerte werden nachgeladen, ohne die App zu blockieren.
   Bei sehr großen Importen kann das im Hintergrund noch eine Weile weiterlaufen.

!!! tip "MyFinds-PQ für korrekte Challenge-Bewertung"
    Die Challenge-Prüfung zählt ausschließlich Funde, die bereits in deiner lokalen Datenbank
    stehen — es gibt keinen Online-Abgleich mit deinem tatsächlichen Fundprofil. Für zuverlässige
    Ergebnisse bei Fundzahl-/Jasmer-/365-Tage-/Streak-Challenges solltest du daher einmalig deine
    komplette **MyFinds-PocketQuery** importieren (siehe [Challenge-Prüfung](challenges.md)).

## Bestehende Lösungen und Notizen

- **Lösungen werden nicht überschrieben**: Eine bereits gespeicherte Lösung bleibt beim
  erneuten Import erhalten. Nur wenn die importierte GPX selbst einen neueren
  `[GCMystSolver]`-Block enthält (z. B. weil du eine bereits von GCMystSolver exportierte Datei
  wieder einliest), übernimmt die App diese neuere Lösung.
- **Persönliche Notizen werden gemischt, nicht ersetzt**: Dein eigener Freitext aus der
  Persönlichen Notiz der GPX-Datei bleibt erhalten und wird unterhalb des automatisch erzeugten
  `[GCMystSolver]`-Blocks angehängt — nichts geht verloren, und beim wiederholten Import/Export
  stapelt sich der Block nicht mehrfach.

## Grundprinzip: Offline vor Netzwerk

GCMystSolver nutzt beim Import und bei der Region-/Höhenauflösung wo immer möglich **lokale
Daten und Offline-Nachschlagewerke**, bevor überhaupt ein Netzwerkzugriff stattfindet. Das macht
den Import auch bei großen Listen zuverlässig und schnell.

## Schnellster Weg von c:geo

1. In c:geo in der Listen-Detailansicht das Menü öffnen → **"Exportieren/Hochladen"** →
   **"GPX exportieren"**.
2. In GCMystSolver zu *Import* wechseln und im Dateiauswahl-Dialog ins Export-Verzeichnis von
   c:geo wechseln (üblicherweise `\cgeo\gpx`).
3. Im Dreipunkt-Menü des Dateiauswahl-Dialogs **"Sortieren nach"** → **"Änderungszeitpunkt
   (neueste zuerst)"** einstellen.
4. Die oberste (neueste) GPX-Datei laden.

Bei über 100 GPX-Dateien im c:geo-Export-Ordner ist die richtige Datei sonst nur schwer zu finden.

## Export

Über **"Export GPX"** (in *Lists*, in einer Cache-Liste oder in der "Solved"-Liste) schreibst du
deine Caches inklusive GCMystSolver-Ergebnissen wieder in eine GPX-Datei — z. B. um sie in c:geo
oder einer anderen App weiterzuverwenden.

- **Gelöste Koordinate**: Ist ein Cache gelöst, wird die exportierte Wegpunkt-Koordinate direkt
  auf die gelöste Position gesetzt (kein separater "Final"-Wegpunkt — der Cache selbst "wandert"
  im Export an die Lösung).
- **Lösung in der Persönlichen Notiz**: Die Lösung (Ursprungskoordinate, gelöste Koordinate,
  Konfidenz, Solve-Type, Checker-Link) landet als `[GCMystSolver]`-Block in der Persönlichen
  Notiz des exportierten Caches — direkt gefolgt von deinem eigenen Notiztext.

In *Setup → Export privacy* kannst du zwei Details davon reduzieren:

- **"Show AI model in export"**: aus, damit eine KI-Lösung nur als "AI" statt z. B. "AI
  (gemini-2.5-flash)" erscheint.
- **"Show [GCMystSolver] tag in export"**: aus, damit im Export **nur noch dein eigener
  Notiztext** steht — ganz ohne Konfidenz, Solve-Type oder Lösungstext. Die gelöste Koordinate
  selbst wird davon unabhängig immer exportiert.
