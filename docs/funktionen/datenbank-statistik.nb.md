# Database, lister og statistikk

## Lists

Startfanen viser alle dine importerte lister pluss to faste oppføringer: **"All caches"** (alle
cacher samlet) og **"Solved"** (alle løste cacher rundt et midtpunkt du velger).

<figure class="gcms-shot" markdown>
![Lists: startskjerm med alle importerte lister](../assets/screenshots/lists-home.png)
<figcaption>Lists — startskjerm</figcaption>
</figure>

## Cacheliste

Trykker du på en liste, åpnes en søkbar, filtrerbar cacheliste — etter trafikklysfarge, cachetype
med mer. Derfra åpner du detaljsiden til en cache.

<figure class="gcms-shot" markdown>
![Cacheliste med et trafikklys på venstre kant og en filterrad øverst](../assets/screenshots/list-detail-arrows.png)
<figcaption>Venstre: trafikklys per cache. Øverst: filter for cachetype, filter for trafikklysfarge, filter for løser</figcaption>
</figure>

- Den **øverste røde pilen** peker på filterraden: cachetype-ikoner, de tre trafikklysfargene
  (grønn/gul/rød) som kan vises/skjules, og en **"Solver"**-nedtrekksmeny for å filtrere etter
  bestemte løsere.
- Den **nederste venstre røde pilen** peker på det lille tredelte **trafikklyset på venstre kant
  av hver cache** — gjeldende farge vises fylt, de to andre punktene forblir bleke. Samme
  rød/gul/grønn-kode som ellers i appen.

### To uavhengige trafikklys: løsingsstatus og challenge-status

For challenge-cacher kan **to** trafikklys være synlige samtidig — ett til venstre, ett til høyre
på kanten av raden:

<figure class="gcms-shot" markdown>
![To trafikklys: løsingsstatus til venstre, challenge-oppfyllelse til høyre](../assets/screenshots/ampel-legend.png)
<figcaption>Venstre: løsingsstatus (her grønn). Høyre: challenge-oppfyllelse (her gul/partial)</figcaption>
</figure>

- **Venstre = løsingsstatus**: ble cachens krav (f.eks. challenge-teksten) gjenkjent, og er
  løsningen/vurderingen pålitelig?
- **Høyre = challenge-oppfyllelse**: oppfyller dine eksisterende funn allerede det gjenkjente
  kravet? (Se [Challenge-kontroll](challenges.md) for detaljer om denne andre, uavhengige
  vurderingen.)

## Cachedetalj

På detaljsiden til en cache finner du listingen, hintet, gjeldende løsning, trafikklysfarge samt —
alle samlet i **ett felles "Solver results"-kort** — de relevante ekstraknappene for den cachen:
f.eks. en lenke til en Geochecker, til gc-project (hvis listingen lenker til en), eller til en
webkamera-opptakside for webkamera-cacher.

## Map

Kartfanen viser den for øyeblikket valgte listen som markører på et OpenStreetMap-kart. Hver
markør kombinerer to opplysninger:

- **Cachetype-symbolet** i midten (f.eks. "?" for Mystery, et bokikon for Traditional).
- **En fargelagt ring** rundt symbolet så snart det finnes en løsingsstatus: **grønn** = pålitelig
  løsning (confidence ≥ 90 %), **gul/amber** = usikker/delvis løsning. Ingen ring betyr: fortsatt
  uløst.

<figure class="gcms-shot" markdown>
![Kart med flere grønnringede, løste mystery-cacher](../assets/screenshots/map-solved-marker.png)
<figcaption>De grønnringede "?"-markørene er løste mystery-cacher</figcaption>
</figure>

For challenge-cacher kommer det i tillegg en liten **badge nederst til høyre på markøren** — det
er challenge-oppfyllelsen (det samme andre trafikklyset som i listen, se ovenfor), uavhengig av
ringens løsingsstatus. Ved svært mange markører tett sammen zoomer appen automatisk til en mer
kompakt punktmodus, der cachetype-fargen fyller flaten og løsingsstatusen ligger som en tynn ring
rundt.

### Offline-kart

Via lag-ikonet øverst til høyre kan du bytte mellom nettkartet (OpenStreetMap) og et selv innlastet
**offline-kart (.map-fil)** — praktisk for bruk uten internettforbindelse. Slike `.map`-filer kan
lastes ned f.eks. med **c:geo**, og er da også valgbare her.

<figure class="gcms-shot" markdown>
![Kartlag-valg: Online (OSM), Offline (.map), Select Offline Map](../assets/screenshots/map-offline-selector.png)
<figcaption>Valg av nett-/offline-kart</figcaption>
</figure>

## Statistikk

Statistikkskjermen viser deg, per cachetype, hvor mange cacher totalt er løst, delvis løst og
gjenkjent som feltgåte — slik ser du med et blikk hvor det fortsatt venter arbeid, og hvor et
besøk på stedet uansett er uunngåelig.

<figure class="gcms-shot" markdown>
![Statistikktabell etter cachetype](../assets/screenshots/statistics.png)
<figcaption>Statistikk etter cachetype, med en "By solver"-oppdeling under</figcaption>
</figure>

!!! tip "Rett til den filtrerte listen"
    Trykker du på en cachetype-rad i statistikktabellen (f.eks. "Mystery"), hopper du rett til
    cachelisten, allerede filtrert på nettopp den typen.

## Sikkerhetskopi og gjenoppretting

Via *Setup* kan du ta sikkerhetskopi av hele databasen din (inkludert alle innstillinger) og
gjenopprette den på en annen enhet. Detaljer: [Innstillinger og sikkerhetskopi](einstellungen-backup.md).
