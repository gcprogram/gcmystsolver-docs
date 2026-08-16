# Datenbank, Listen & Statistik

## Lists

Der Start-Tab zeigt alle deine importierten Listen sowie zwei feste Einträge: **"All caches"**
(alle Caches zusammen) und **"Solved"** (alle gelösten Caches rund um einen von dir gewählten
Mittelpunkt).

<figure class="gcms-shot" markdown>
![Lists: Startbildschirm mit allen importierten Listen](../assets/screenshots/lists-home.png)
<figcaption>Lists — Startbildschirm</figcaption>
</figure>

## Cache-Liste

Tippst du eine Liste an, landest du in einer durchsuch- und filterbaren Cache-Liste — nach
Ampelfarbe, Cache-Typ und mehr. Von dort öffnest du die Detailseite eines Caches.

<figure class="gcms-shot" markdown>
![Cache-Liste mit Ampel am linken Rand und Filterleiste oben](../assets/screenshots/list-detail-arrows.png)
<figcaption>Links: Ampel je Cache. Oben: Cache-Typ-Filter, Ampelfarben-Filter, Solver-Filter</figcaption>
</figure>

- Der **rote Pfeil oben** zeigt auf die Filterleiste: Cache-Typ-Icons, die drei Ampelfarben
  (grün/gelb/rot) zum Ein-/Ausblenden und ein **"Solver"**-Dropdown, um nach bestimmten Solvern zu
  filtern.
- Der **rote Pfeil unten links** zeigt auf die kleine dreiteilige **Ampel am linken Rand jedes
  Caches** — die aktuelle Farbe ist kräftig eingefärbt, die anderen beiden Punkte sind blass. Das
  ist derselbe Rot/Gelb/Grün-Code wie überall sonst in der App.

### Zwei unabhängige Ampeln: Lösungsstatus und Challenge-Status

Bei Challenge-Caches können **zwei** Ampeln gleichzeitig sichtbar sein — eine links, eine rechts
am Zeilenrand:

<figure class="gcms-shot" markdown>
![Zwei Ampeln: links Lösungsstatus, rechts Challenge-Erfüllung](../assets/screenshots/ampel-legend.png)
<figcaption>Links: Lösungsstatus (hier Grün). Rechts: Challenge-Erfüllung (hier Gelb/Partial)</figcaption>
</figure>

- **Links = Lösungsstatus**: Wurde die Anforderung des Caches (z. B. der Challenge-Text) erkannt
  und ist die Lösung/Auswertung vertrauenswürdig?
- **Rechts = Challenge-Erfüllung**: Erfüllst du mit deinen bisherigen Funden die erkannte
  Anforderung bereits? (Siehe [Challenge-Prüfung](challenges.md) für Details zu dieser zweiten,
  unabhängigen Bewertung.)

## Cache-Detail

Auf der Detailseite eines Caches findest du Listing, Hinweis, aktuelle Lösung, Ampelfarbe sowie —
alle in **einer gemeinsamen Karte "Solver results"** — die relevanten Zusatz-Buttons für diesen
Cache: z. B. einen Link zum Geochecker, zu gc-project (sofern das Listing so etwas verlinkt), oder
zu einer Webcam-Aufzeichnungsseite bei Webcam-Caches.

## Map

Der Karten-Tab zeigt die aktuell gewählte Liste als Marker auf einer OpenStreetMap-Karte. Jeder
Marker kombiniert zwei Informationen:

- **Das Cache-Typ-Symbol** in der Mitte (z. B. "?" für Mystery, Buch-Icon für Traditional).
- **Ein farbiger Ring** um das Symbol, sobald ein Lösungsstatus vorliegt: **grün** = Lösung
  vertrauenswürdig (Confidence ≥ 90 %), **gelb/amber** = unsichere/teilweise Lösung. Kein Ring
  bedeutet: noch ungelöst.

<figure class="gcms-shot" markdown>
![Karte mit mehreren grün umrandeten, gelösten Mystery-Caches](../assets/screenshots/map-solved-marker.png)
<figcaption>Die grün umrandeten "?"-Marker sind gelöste Mystery-Caches</figcaption>
</figure>

Bei Challenge-Caches kommt zusätzlich ein kleines **Badge unten rechts am Marker** hinzu — das ist
die Challenge-Erfüllung (dieselbe zweite Ampel wie in der Liste, siehe oben), unabhängig vom
Ring-Lösungsstatus. Bei sehr vielen Markern auf engem Raum zoomt die App automatisch in einen
kompakteren Punkt-Modus, bei dem die Cache-Typ-Farbe die Fläche füllt und der Lösungsstatus als
dünner Ring darum liegt.

### Offline-Karten

Über das Ebenen-Symbol oben rechts kannst du zwischen der Online-Karte (OpenStreetMap) und einer
selbst geladenen **Offline-Karte (.map-Datei)** umschalten — praktisch für den Einsatz ohne
Internetverbindung. Solche `.map`-Dateien lassen sich z. B. mit **c:geo** herunterladen und stehen
dann auch hier zur Auswahl.

<figure class="gcms-shot" markdown>
![Karten-Ebenen-Auswahl: Online (OSM), Offline (.map), Select Offline Map](../assets/screenshots/map-offline-selector.png)
<figcaption>Online/Offline-Kartenauswahl</figcaption>
</figure>

## Statistik

Der Statistik-Screen zeigt dir pro Cache-Typ, wie viele Caches insgesamt, gelöst, teilweise gelöst
und als Feld-Rätsel erkannt sind — so siehst du auf einen Blick, wo noch Arbeit wartet und wo ein
Vor-Ort-Besuch ohnehin unumgänglich ist.

<figure class="gcms-shot" markdown>
![Statistik-Tabelle nach Cache-Typ](../assets/screenshots/statistics.png)
<figcaption>Statistik nach Cache-Typ, mit "By solver"-Auswertung darunter</figcaption>
</figure>

!!! tip "Direkt zur gefilterten Liste"
    Tippst du in der Statistik-Tabelle auf eine Cache-Typ-Zeile (z. B. "Mystery"), springt die App
    direkt in die Cache-Liste, bereits nach genau diesem Typ gefiltert.

## Backup & Wiederherstellung

Über *Setup* kannst du deine gesamte Datenbank (inkl. aller Einstellungen) sichern und auf einem
anderen Gerät wiederherstellen. Details dazu: [Einstellungen & Backup](einstellungen-backup.md).
