# Import (GPX / PocketQuery)

## Filer som stöds

- Enskilda **GPX-filer**, så som geocaching.com eller c:geo exporterar för en cache eller en
  lista.
- **PocketQueries** (även GPX-format) med upp till flera hundra cacher på en gång.

Cacher som redan finns **uppdateras** vid ny import, dupliceras inte — du kan alltså importera
samma lista om och om igen, till exempel för att hämta din aktuella fyndstatus.

## Vad som händer automatiskt vid import

1. **Regionbestämning** (offline, utan internetåtkomst): land, region och kommun/län bestäms
   utifrån cachens koordinater.
2. **Challenge-förkontroll**: för alla cacher som identifieras som en challenge beräknas
   trafikljus-bedömningen omedelbart (se [Challenge-kontroll](challenges.md)) — inte först när du
   öppnar cachen.
3. **Höjdbestämning i bakgrunden**: höjdvärden hämtas utan att blockera appen. Vid mycket stora
   importer kan detta fortsätta köra i bakgrunden ett tag.

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
