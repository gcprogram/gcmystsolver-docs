# Import & export (GPX / PocketQuery)

<figure class="gcms-shot" markdown>
![Import-scherm met de knop "Choose GPX / ZIP"](../assets/screenshots/import-screen.png)
<figcaption>Import-tabblad</figcaption>
</figure>

## Ondersteunde bestanden

- Losse **GPX-bestanden**, zoals geocaching.com of c:geo die exporteert voor één cache of een
  lijst.
- **PocketQueries** (ook GPX-formaat) met tot enkele honderden caches tegelijk.

Al bestaande caches worden bij een nieuwe import **bijgewerkt**, niet gedupliceerd — je kunt
dezelfde lijst dus zo vaak opnieuw importeren als je wilt, bijvoorbeeld om je actuele vondststatus
over te nemen.

## Lijstnaam

Voor het importeren vul je een **vrije lijstnaam** in (vooraf ingevuld met de bestandsnaam; laat
je het leeg, dan heet de lijst "import"). Twee gevallen:

- **Nieuwe naam**: er wordt een nieuwe lijst met die naam aangemaakt.
- **Naam van een bestaande lijst**: de geïmporteerde caches worden aan die lijst toegevoegd — er
  ontstaat geen dubbele lijst en geen dubbele caches.

Daarnaast is er de optie **"Rename list by region (from cache locations)"** — na de import bepaalt
de app automatisch een naam op basis van de cache-coördinaten (clusterherkenning +
plaatsbepaling), bijv. "Kerpen, Nordrhein-Westfalen, DE".

!!! warning "Niet voor MyFinds-query's"
    Bij een MyFinds-PocketQuery liggen je vondsten over de hele wereld verspreid — een
    automatische regio-hernoeming levert hier geen zinvolle naam op. Bovendien heet het van
    geocaching.com gedownloade bestand meestal alleen naar het PQ-ID (bijv. `1234567.gpx`) — het
    vooraf ingevulde lijstnaam-veld zou dus ook alleen dat getal zijn. Geef zo'n lijst liever
    handmatig een naam (bijv. "MyFinds").

## Wat er automatisch gebeurt bij import

1. **Vondststatus-herkenning**: of een bestand een MyFinds-PocketQuery is, herkent de app aan het
   `<name>`-veld **in de inhoud van het GPX-bestand zelf** (bij geocaching.com altijd letterlijk
   "My Finds Pocket Query", ongeacht de taal van je account) — **niet aan de bestandsnaam**. De
   herkenning werkt dus ongeacht of het bestand `myfinds.gpx` of gewoon `1234567.gpx` heet. Alle
   caches erin worden dan automatisch als gevonden gemarkeerd (melding: *"Recognised as a My
   Finds query — all of them marked found."*). In gewone PQ's/GPX-bestanden herkent de app
   bovendien je eigen "Found it"/"Attended"/"Webcam Photo Taken"-logboekvermeldingen door ze te
   vergelijken met de geocaching.com-**username** die in *Setup* is ingesteld. Eenmaal als
   gevonden herkend, blijft een cache dat ook bij elke volgende import.
2. **Regiobepaling** (offline, zonder internettoegang): land, regio en gemeente/provincie worden
   bepaald uit de coördinaten van de cache.
3. **Challenge-voorcontrole**: voor alle caches die als challenge worden herkend, wordt de
   stoplicht-beoordeling meteen berekend (zie [Challenge-controle](challenges.md)) — niet pas
   wanneer je de cache opent.
4. **Hoogtebepaling op de achtergrond**: hoogtewaarden worden opgehaald zonder de app te
   blokkeren. Bij zeer grote imports kan dit nog een tijdje op de achtergrond doorlopen.

!!! tip "MyFinds-PQ voor correcte challenge-beoordeling"
    De challenge-controle telt uitsluitend vondsten die al in je lokale database staan — er is
    geen online vergelijking met je werkelijke vondstgeschiedenis. Voor betrouwbare resultaten bij
    vondstenaantal-/Jasmer-/365-dagen-/streak-challenges moet je daarom eenmalig je volledige
    **MyFinds-PocketQuery importeren** (zie [Challenge-controle](challenges.md)).

## Bestaande oplossingen en notities

- **Oplossingen worden nooit overschreven**: een al opgeslagen oplossing blijft bij een nieuwe
  import behouden. Alleen als de geïmporteerde GPX zelf een nieuwer `[GCMystSolver]`-blok bevat
  (bijv. omdat je een door GCMystSolver al geëxporteerd bestand terugleest), neemt de app die
  nieuwere oplossing over.
- **Persoonlijke notities worden gemengd, niet vervangen**: je eigen vrije tekst uit de
  persoonlijke notitie van de GPX blijft behouden en wordt onder het automatisch gegenereerde
  `[GCMystSolver]`-blok geplakt — er gaat niets verloren, en bij herhaalde import/export stapelt
  het blok zich niet meerdere keren op.

## Basisprincipe: offline vóór netwerk

Waar mogelijk gebruikt GCMystSolver **lokale gegevens en offline naslagbronnen** bij import en bij
regio-/hoogtebepaling, vóórdat er überhaupt netwerktoegang plaatsvindt. Dat maakt de import
betrouwbaar en snel, ook bij grote lijsten.

## Snelste weg vanuit c:geo

1. Open in c:geo in de lijst-detailweergave het menu → **"Exporteren/Uploaden"** →
   **"GPX exporteren"**.
2. Ga in GCMystSolver naar *Import* en navigeer in de bestandskiezer naar de exportmap van c:geo
   (meestal `\cgeo\gpx`).
3. Stel in het driepuntsmenu van de bestandskiezer **"Sorteren op"** → **"Wijzigingsdatum (nieuwste
   eerst)"** in.
4. Laad het bovenste (nieuwste) GPX-bestand.

Bij meer dan 100 GPX-bestanden in de exportmap van c:geo is het juiste bestand anders lastig te
vinden.

## Export

Via **"Export GPX"** (in *Lists*, in een cachelijst, of in de "Solved"-lijst) schrijf je je
caches, inclusief GCMystSolver-resultaten, terug naar een GPX-bestand — bijv. om ze in c:geo of
een andere app verder te gebruiken.

- **Opgeloste coördinaat**: is een cache opgelost, dan wordt de geëxporteerde
  waypoint-coördinaat direct op de opgeloste positie gezet (geen apart "Final"-waypoint — de
  cache zelf "verhuist" in de export naar de oplossing).
- **Oplossing in de persoonlijke notitie**: de oplossing (oorspronkelijke coördinaat, opgeloste
  coördinaat, confidence, solve type, checker-link) komt als `[GCMystSolver]`-blok in de
  persoonlijke notitie van de geëxporteerde cache terecht — direct gevolgd door je eigen
  notitietekst.

Via *Setup → Export privacy* kun je twee details hiervan beperken:

- **"Show AI model in export"**: uit, zodat een AI-oplossing alleen als "AI" verschijnt in plaats
  van bijv. "AI (gemini-2.5-flash)".
- **"Show [GCMystSolver] tag in export"**: uit, zodat in de export **alleen je eigen
  notitietekst** overblijft — zonder confidence, solve type of oplossingstekst. De opgeloste
  coördinaat zelf wordt hier los van altijd geëxporteerd.
