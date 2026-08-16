# Import och export (GPX / PocketQuery)

<figure class="gcms-shot" markdown>
![Import-skärm med knappen "Choose GPX / ZIP"](../assets/screenshots/import-screen.png)
<figcaption>Import-fliken</figcaption>
</figure>

## Filer som stöds

- Enskilda **GPX-filer**, så som geocaching.com eller c:geo exporterar för en cache eller en
  lista.
- **PocketQueries** (även GPX-format) med upp till flera hundra cacher på en gång.

Cacher som redan finns **uppdateras** vid ny import, dupliceras inte — du kan alltså importera
samma lista om och om igen, till exempel för att hämta din aktuella fyndstatus.

## Listnamn

Innan importen anger du ett **fritt listnamn** (förifyllt med filnamnet; lämnar du det tomt heter
listan "import"). Två fall:

- **Nytt namn**: en ny lista med det namnet skapas.
- **Namn på en befintlig lista**: de importerade cacherna läggs till i den listan — ingen
  dubblerad lista och inga dubblerade cacher skapas.

Det finns även alternativet **"Rename list by region (from cache locations)"** — efter importen
bestämmer appen automatiskt ett namn utifrån cachernas koordinater (klusteridentifiering +
platsuppslag), t.ex. "Kerpen, Nordrhein-Westfalen, DE".

!!! warning "Inte för MyFinds-frågor"
    I en MyFinds-PocketQuery är dina fynd utspridda över hela världen — en automatisk
    regionomdöpning ger här inget meningsfullt namn. Dessutom heter filen som laddas ner från
    geocaching.com oftast bara efter PQ-ID:t (t.ex. `1234567.gpx`) — det förifyllda
    listnamn-fältet skulle alltså också bara vara det talet. Ge sådana listor ett namn för hand
    istället (t.ex. "MyFinds").

## Vad som händer automatiskt vid import

1. **Fyndstatus-identifiering**: om en fil är en MyFinds-PocketQuery identifieras via
   `<name>`-fältet **i själva GPX-filens innehåll** (på geocaching.com alltid bokstavligen "My
   Finds Pocket Query", oavsett vilket språk ditt konto har) — **inte via filnamnet**.
   Identifieringen fungerar alltså oavsett om filen heter `myfinds.gpx` eller bara
   `1234567.gpx`. Alla cacher i den markeras då automatiskt som hittade (meddelande: *"Recognised
   as a My Finds query — all of them marked found."*). I vanliga PQ:er/GPX-filer känner appen
   dessutom igen
   dina egna "Found it"/"Attended"/"Webcam Photo Taken"-loggposter genom att matcha dem mot
   geocaching.com-**username** som sparats i *Setup*. När en cache väl identifierats som hittad,
   förblir den det vid varje senare import också.
2. **Regionbestämning** (offline, utan internetåtkomst): land, region och kommun/län bestäms
   utifrån cachens koordinater.
3. **Challenge-förkontroll**: för alla cacher som identifieras som en challenge beräknas
   trafikljus-bedömningen omedelbart (se [Challenge-kontroll](challenges.md)) — inte först när du
   öppnar cachen.
4. **Höjdbestämning i bakgrunden**: höjdvärden hämtas utan att blockera appen. Vid mycket stora
   importer kan detta fortsätta köra i bakgrunden ett tag.

!!! tip "MyFinds-PQ för korrekt challenge-bedömning"
    Challenge-kontrollen räknar enbart fynd som redan finns i din lokala databas — det finns
    ingen online-jämförelse med din faktiska fyndhistorik. För tillförlitliga resultat vid
    fyndantal-/Jasmer-/365-dagars-/streak-challenges bör du därför importera din kompletta
    **MyFinds-PocketQuery** en gång (se [Challenge-kontroll](challenges.md)).

## Befintliga lösningar och anteckningar

- **Lösningar skrivs aldrig över**: en redan sparad lösning överlever en ny import. Bara om den
  importerade GPX:en själv bär på ett nyare `[GCMystSolver]`-block (t.ex. för att du läser in en
  fil som GCMystSolver redan exporterat) tar appen över den nyare lösningen.
- **Personliga anteckningar blandas, ersätts inte**: din egen fria text från GPX:ens personliga
  anteckning bevaras och läggs till under det automatiskt genererade `[GCMystSolver]`-blocket —
  inget går förlorat, och upprepad import/export staplar inte blocket flera gånger.

## Grundprincip: offline före nätverk

Där det är möjligt använder GCMystSolver **lokal data och offline-referenser** för import och för
region-/höjdbestämning, innan någon nätverksåtkomst alls sker. Det gör importen pålitlig och snabb
även för stora listor.

## Snabbaste vägen från c:geo

1. Öppna i c:geo, i listans detaljvy, menyn → **"Exportera/Ladda upp"** → **"Exportera GPX"**.
2. Gå i GCMystSolver till *Import* och navigera i filväljaren till c:geos exportmapp (vanligtvis
   `\cgeo\gpx`).
3. Ställ i filväljarens meny med tre punkter in **"Sortera efter"** → **"Ändringsdatum (senaste
   först)"**.
4. Läs in den översta (senaste) GPX-filen.

Med fler än 100 GPX-filer i c:geos exportmapp är rätt fil annars svår att hitta.

## Export

Via **"Export GPX"** (i *Lists*, i en cachelista, eller i "Solved"-listan) skriver du dina cacher,
inklusive GCMystSolvers resultat, tillbaka till en GPX-fil — t.ex. för att använda dem i c:geo
eller en annan app.

- **Löst koordinat**: är en cache löst sätts den exporterade waypoint-koordinaten direkt till den
  lösta positionen (ingen separat "Final"-waypoint — cachen själv "flyttar sig" i exporten till
  lösningen).
- **Lösning i den personliga anteckningen**: lösningen (ursprunglig koordinat, löst koordinat,
  confidence, solve type, checker-länk) hamnar som ett `[GCMystSolver]`-block i den exporterade
  cachens personliga anteckning — direkt följt av din egen anteckningstext.

Under *Setup → Export privacy* kan du tona ner två detaljer av detta:

- **"Show AI model in export"**: av, så att en AI-lösning bara visas som "AI" istället för t.ex.
  "AI (gemini-2.5-flash)".
- **"Show [GCMystSolver] tag in export"**: av, så att exporten bara innehåller **din egen
  anteckningstext** — utan confidence, solve type eller lösningstext. Själva den lösta
  koordinaten exporteras alltid oavsett detta.
