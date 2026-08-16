# Challenge-Prüfung

Für Challenge-Caches (Caches, die verlangen, dass du zuvor bestimmte andere Caches gefunden hast)
berechnet GCMystSolver automatisch eine **Ampel-Bewertung**: erfüllt du die Anforderung bereits
mit deinen bisherigen Funden?

!!! warning "Setzt eine importierte MyFinds-PocketQuery voraus"
    Die Bewertung zählt ausschließlich Funde, die bereits in deiner lokalen Datenbank stehen — es
    gibt **keinen** Online-Abgleich mit deinem tatsächlichen geocaching.com-Fundprofil. Damit
    Fundzahl-, Jasmer-, 365-Tage- und Streak-Challenges korrekt bewertet werden, musst du einmalig
    deine komplette **MyFinds-PocketQuery importieren** (siehe
    [Import & Export](import.md#was-beim-import-automatisch-passiert)). Eine PQ, deren Name mit
    "my finds" beginnt, erkennt die App automatisch und markiert alle enthaltenen Caches als
    gefunden — ein separater Import-Modus dafür ist nicht nötig.

## Wann wird geprüft?

Bei **jedem Import** — nicht erst, wenn du den Cache öffnest. So siehst du sofort in deiner
Cache-Liste, welche Challenges du schon schaffst.

## Erkannte Challenge-Typen

- **D/T-Matrix-Challenges** (z. B. "alle 81 Difficulty/Terrain-Kombinationen")
- **Länder-Challenges** ("kleine Weltreise" — physische Funde in bestimmten Ländern)
- **Bundesland-Challenges**
- **Landkreis-Challenges** *(prüft aktuell nur die Anzahl unterschiedlicher Landkreise, nicht eine
  konkrete vorgegebene Liste)*
- **Höhen-Challenges** (Funde über/unter einer bestimmten Meereshöhe)
- **Fundzahl-Challenges** (z. B. "mindestens 500 Funde")
- **Jasmer-Challenge** (ein Fund pro Kalendermonat seit Mai 2000)
- **365/366-Tage-Challenge** (ein Fund pro Kalendertag im Jahr, jahresübergreifend)
- **Streak-Challenge** (längste zusammenhängende Fund-Tage-Folge)

## Ampelfarben

- 🔴 **Rot**: Anforderung aktuell nicht erfüllt.
- 🟡 **Gelb**: unsicher — z. B. weil die Erkennung im Freitext des Listings nicht eindeutig war.
- 🟢 **Grün**: Anforderung nach aktuellem Datenstand erfüllt.

## Nachweisliste

Zu jeder erfüllten Anforderung zeigt die App die **minimal nötigen Belege** — also genau die
Funde, die die Anforderung erfüllen (z. B. ein Fund pro Monat), nicht alle deine Funde insgesamt.
Bei sehr vielen nötigen Belegen wird die Liste automatisch kompakter dargestellt (nur Datum und
GC-Code statt vollem Titel) bzw. bei extrem vielen nur noch als Text zusammengefasst, damit die
Detailseite übersichtlich bleibt.

## Transparenz bei Freitext-Erkennung

Anforderungen, die aus dem Freitext eines Listings herausgelesen werden müssen (z. B. eine im
Text genannte Mindest-Fundzahl), werden immer mit dem **konkret erkannten Wert** angezeigt — so
erkennst du eine Fehlinterpretation sofort, statt dich auf eine stille Blackbox verlassen zu
müssen.

## Gefundene Caches

Ein bereits gefundener Cache wird immer als Grün geführt, unabhängig von seiner
Challenge-Anforderung.

!!! tip "Nach einem Update"
    Wurde ein Challenge-Check korrigiert, kannst du in *Setup* über **"Clear stored solutions"**
    gezielt alle gespeicherten Bewertungen eines Typs löschen und neu berechnen lassen, damit keine
    veralteten Falschbewertungen stehen bleiben.
