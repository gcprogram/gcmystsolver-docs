# Databas, listor och statistik

## Lists

Startfliken visar alla dina importerade listor plus två fasta poster: **"All caches"** (alla
cacher tillsammans) och **"Solved"** (alla lösta cacher runt en mittpunkt du väljer).

<figure class="gcms-shot" markdown>
![Lists: startskärm med alla importerade listor](../assets/screenshots/lists-home.png)
<figcaption>Lists — startskärm</figcaption>
</figure>

## Cachelista

Trycker du på en lista öppnas en sökbar, filtrerbar cachelista — efter trafikljusfärg, cachetyp
med mera. Därifrån öppnar du en caches detaljsida.

<figure class="gcms-shot" markdown>
![Cachelista med ett trafikljus på vänsterkanten och en filterrad högst upp](../assets/screenshots/list-detail-arrows.png)
<figcaption>Vänster: trafikljus per cache. Överst: filter för cachetyp, filter för trafikljusfärg, filter för lösare</figcaption>
</figure>

- Den **övre röda pilen** pekar på filterraden: cachetyp-ikoner, de tre trafikljusfärgerna
  (grön/gul/röd) att visa/dölja, och en **"Solver"**-rullgardinsmeny för att filtrera efter
  specifika lösare.
- Den **nedre vänstra röda pilen** pekar på det lilla tredelade **trafikljuset på vänsterkanten av
  varje cache** — den aktuella färgen visas fylld, de andra två punkterna förblir bleka. Samma
  röd/gul/grön-kod som överallt annars i appen.

### Två oberoende trafikljus: lösningsstatus och challenge-status

För challenge-cacher kan **två** trafikljus synas samtidigt — ett till vänster, ett till höger på
radens kant:

<figure class="gcms-shot" markdown>
![Två trafikljus: lösningsstatus till vänster, challenge-uppfyllnad till höger](../assets/screenshots/ampel-legend.png)
<figcaption>Vänster: lösningsstatus (här grönt). Höger: challenge-uppfyllnad (här gult/partial)</figcaption>
</figure>

- **Vänster = lösningsstatus**: identifierades cachens krav (t.ex. challenge-texten), och är
  lösningen/bedömningen pålitlig?
- **Höger = challenge-uppfyllnad**: uppfyller dina befintliga fynd redan det identifierade kravet?
  (Se [Challenge-kontroll](challenges.md) för detaljer om denna andra, oberoende bedömning.)

## Cachedetalj

På en caches detaljsida hittar du listningen, ledtråden, aktuell lösning, trafikljusfärg samt —
alla samlade i **ett gemensamt "Solver results"-kort** — de relevanta extraknapparna för den
cachen: t.ex. en länk till en Geochecker, till gc-project (om listningen länkar till en sådan),
eller till en webbkamerasida för webbkamera-cacher.

## Map

Kartfliken visar den för tillfället valda listan som markörer på en OpenStreetMap-karta. Varje
markör kombinerar två uppgifter:

- **Cachetyp-symbolen** i mitten (t.ex. "?" för Mystery, en bokikon för Traditional).
- **En färgad ring** runt symbolen så snart en lösningsstatus finns: **grönt** = pålitlig lösning
  (confidence ≥ 90 %), **gult/amber** = osäker/delvis lösning. Ingen ring betyder: fortfarande
  olöst.

<figure class="gcms-shot" markdown>
![Karta med flera grönringade, lösta mystery-cacher](../assets/screenshots/map-solved-marker.png)
<figcaption>De grönringade "?"-markörerna är lösta mystery-cacher</figcaption>
</figure>

För challenge-cacher tillkommer dessutom en liten **badge nere till höger på markören** — det är
challenge-uppfyllnaden (samma andra trafikljus som i listan, se ovan), oberoende av ringens
lösningsstatus. Vid väldigt många markörer nära varandra zoomar appen automatiskt till ett mer
kompakt punktläge, där cachetyp-färgen fyller ytan och lösningsstatusen ligger som en tunn ring
runt om.

### Offline-kartor

Via lagerikonen uppe till höger kan du växla mellan onlinekartan (OpenStreetMap) och en egen
inläst **offline-karta (.map-fil)** — praktiskt för användning utan internetuppkoppling. Sådana
`.map`-filer kan laddas ner t.ex. med **c:geo**, och är sedan valbara här också.

<figure class="gcms-shot" markdown>
![Kartlagerval: Online (OSM), Offline (.map), Select Offline Map](../assets/screenshots/map-offline-selector.png)
<figcaption>Val av online-/offlinekarta</figcaption>
</figure>

## Statistik

Statistikskärmen visar dig, per cachetyp, hur många cacher totalt är lösta, delvis lösta och
identifierade som fältpussel — så du ser på ett ögonblick var det fortfarande väntar arbete och
var ett besök på plats ändå är oundvikligt.

<figure class="gcms-shot" markdown>
![Statistiktabell per cachetyp](../assets/screenshots/statistics.png)
<figcaption>Statistik per cachetyp, med en "By solver"-uppdelning nedanför</figcaption>
</figure>

!!! tip "Direkt till den filtrerade listan"
    Trycker du på en cachetyp-rad i statistiktabellen (t.ex. "Mystery") hoppar du direkt till
    cachelistan, redan filtrerad på exakt den typen.

## Säkerhetskopiering och återställning

Via *Setup* kan du säkerhetskopiera hela din databas (inklusive alla inställningar) och återställa
den på en annan enhet. Detaljer: [Inställningar och säkerhetskopiering](einstellungen-backup.md).
