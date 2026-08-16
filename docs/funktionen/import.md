# Import (GPX / PocketQuery)

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

## Was beim Import automatisch passiert

1. **Region-Auflösung** (offline, ohne Internetzugriff): Land, Bundesland und Landkreis werden aus
   den Cache-Koordinaten bestimmt.
2. **Challenge-Vorprüfung**: Für alle Caches, die als Challenge erkannt werden, wird sofort die
   Ampel-Bewertung berechnet (siehe [Challenge-Prüfung](challenges.md)) — nicht erst beim Öffnen
   des Caches.
3. **Höhenauflösung im Hintergrund**: Höhenwerte werden nachgeladen, ohne die App zu blockieren.
   Bei sehr großen Importen kann das im Hintergrund noch eine Weile weiterlaufen.

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
