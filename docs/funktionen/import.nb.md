# Import og eksport (GPX / PocketQuery)

<figure class="gcms-shot" markdown>
![Import-skjerm med knappen "Choose GPX / ZIP"](../assets/screenshots/import-screen.png)
<figcaption>Import-fanen</figcaption>
</figure>

## Støttede filer

- Enkeltstående **GPX-filer**, slik geocaching.com eller c:geo eksporterer for én cache eller en
  liste.
- **PocketQueries** (også GPX-format) med opptil flere hundre cacher på én gang.

Cacher som allerede finnes, blir **oppdatert** ved ny import, ikke duplisert — du kan altså
importere samme liste så ofte du vil, for eksempel for å hente inn din nåværende funnstatus.

## Listenavn

Før importen skriver du inn et **fritt listenavn** (forhåndsutfylt med filnavnet; lar du det stå
tomt, heter listen "import"). To tilfeller:

- **Nytt navn**: en ny liste med det navnet opprettes.
- **Navn på en eksisterende liste**: de importerte cachene legges til i den listen — det oppstår
  ingen duplisert liste og ingen dupliserte cacher.

Det finnes også valget **"Rename list by region (from cache locations)"** — etter importen
bestemmer appen automatisk et navn ut fra cachenes koordinater (klyngegjenkjenning +
stedsoppslag), f.eks. "Kerpen, Nordrhein-Westfalen, DE".

!!! warning "Ikke for MyFinds-spørringer"
    I en MyFinds-PocketQuery er funnene dine spredt over hele verden — en automatisk
    regionomdøping gir her ikke noe meningsfylt navn. Gi slike lister et navn for hånd i stedet
    (f.eks. "MyFinds").

## Hva som skjer automatisk ved import

1. **Funnstatus-gjenkjenning**: en PocketQuery hvis navn starter med "my finds" gjenkjennes
   automatisk — alle cachene i den merkes som funnet (melding: *"Recognised as a My Finds query —
   all of them marked found."*). I vanlige PQ-er/GPX-filer gjenkjenner appen i tillegg dine egne
   "Found it"/"Attended"/"Webcam Photo Taken"-loggoppføringer ved å sammenligne dem med
   geocaching.com-**username** lagret i *Setup*. Når en cache først er gjenkjent som funnet,
   forblir den det ved hver senere import også.
2. **Regionbestemmelse** (offline, uten internettilgang): land, region og kommune/fylke bestemmes
   ut fra cachens koordinater.
3. **Challenge-forhåndssjekk**: for alle cacher som gjenkjennes som en challenge, beregnes
   trafikklys-vurderingen umiddelbart (se [Challenge-kontroll](challenges.md)) — ikke først når du
   åpner cachen.
4. **Høydebestemmelse i bakgrunnen**: høydeverdier hentes uten å blokkere appen. Ved svært store
   importer kan dette fortsette å kjøre i bakgrunnen en stund.

!!! tip "MyFinds PQ for korrekt challenge-vurdering"
    Challenge-kontrollen teller utelukkende funn som allerede finnes i din lokale database — det
    finnes ingen nettbasert sammenligning med din faktiske funnhistorikk. For pålitelige
    resultater ved funnantall-/Jasmer-/365-dagers-/streak-challenges bør du derfor importere din
    komplette **MyFinds-PocketQuery** én gang (se [Challenge-kontroll](challenges.md)).

## Eksisterende løsninger og notater

- **Løsninger overskrives aldri**: en allerede lagret løsning overlever en ny import. Bare hvis
  den importerte GPX-en selv inneholder en nyere `[GCMystSolver]`-blokk (f.eks. fordi du leser
  inn igjen en fil GCMystSolver allerede har eksportert), tar appen i bruk den nyere løsningen.
- **Personlige notater blandes, erstattes ikke**: din egen frie tekst fra GPX-ens personlige
  notat bevares og legges til under den automatisk genererte `[GCMystSolver]`-blokken — ingenting
  går tapt, og gjentatt import/eksport stabler ikke blokken flere ganger.

## Grunnprinsipp: offline før nettverk

Der det er mulig, bruker GCMystSolver **lokale data og offline-referanser** for import og for
region-/høydebestemmelse, før noen nettverkstilgang i det hele tatt skjer. Det gjør importen
pålitelig og rask selv for store lister.

## Raskeste vei fra c:geo

1. Åpne i c:geo, i listens detaljvisning, menyen → **"Eksporter/Last opp"** → **"Eksporter GPX"**.
2. Gå i GCMystSolver til *Import* og naviger i filvelgeren til c:geos eksportmappe (vanligvis
   `\cgeo\gpx`).
3. Still i filvelgerens tre-punkts-meny inn **"Sorter etter"** → **"Endringstidspunkt (nyeste
   først)"**.
4. Last inn den øverste (nyeste) GPX-filen.

Med over 100 GPX-filer i c:geos eksportmappe er den riktige ellers vanskelig å finne.

## Eksport

Via **"Export GPX"** (i *Lists*, i en cacheliste, eller i "Solved"-listen) skriver du cachene
dine, inkludert GCMystSolvers resultater, tilbake til en GPX-fil — f.eks. for å bruke dem videre i
c:geo eller en annen app.

- **Løst koordinat**: er en cache løst, settes den eksporterte waypoint-koordinaten direkte til
  den løste posisjonen (ingen egen "Final"-waypoint — selve cachen "flytter seg" til løsningen i
  eksporten).
- **Løsning i det personlige notatet**: løsningen (opprinnelig koordinat, løst koordinat,
  confidence, solve type, checker-lenke) havner som en `[GCMystSolver]`-blokk i det personlige
  notatet til den eksporterte cachen — rett etterfulgt av din egen notat-tekst.

Under *Setup → Export privacy* kan du dempe to detaljer av dette:

- **"Show AI model in export"**: av, slik at en AI-løsning bare vises som "AI" i stedet for
  f.eks. "AI (gemini-2.5-flash)".
- **"Show [GCMystSolver] tag in export"**: av, slik at eksporten kun inneholder **din egen
  notat-tekst** — uten confidence, solve type eller løsningstekst. Selve den løste koordinaten
  eksporteres alltid uavhengig av dette.
