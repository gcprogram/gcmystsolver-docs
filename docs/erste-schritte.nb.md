# Kom i gang

## 1. Importere cacher

GCMystSolver leser inn **GPX-filer** — enten enkeltcacher eksportert fra geocaching.com/c:geo,
eller en hel **PocketQuery** med hundrevis av cacher på én gang. Åpne appen, velg *Import* og
ønsket fil. Cacher som allerede finnes, oppdateres i stedet for å dupliseres.

Ved import skjer det automatisk mer enn bare innlesing:

- Land, region og kommune/fylke bestemmes ut fra koordinatene (offline, uten internett).
- For challenge-relevante cacher sjekkes det umiddelbart om dine eksisterende funn oppfyller
  kravet (trafikklys rødt/gult/grønt).
- Høydedata hentes i bakgrunnen (dette kan ta litt tid ved store PocketQueries, men kjører
  ubemerket videre mens du allerede bruker appen).

## 2. (Valgfritt) Aktiver AI

De innebygde løserne løser allerede mange puslespilltyper helt uten AI. For alt annet kan du koble
til en AI i *Setup* (din egen API-nøkkel fra en støttet leverandør). Setup viser et grovt anslag
for tokenbudsjettet, slik at du får en idé om forventet kostnad for en hel PocketQuery.

Mer om dette: [AI-løsningsforsøk](funktionen/ki-solver.md), [Innstillinger og sikkerhetskopi](funktionen/einstellungen-backup.md).

## 3. La appen løse

I fanen *Solve* starter du en løsingsrunde over de importerte cachene dine. Du velger:

- **Hvor grundig** (forhåndsinnstilling fra rask/kun offline til intensiv med AI),
- **Hvilke cacher** som inkluderes (kun uløste, uløste+usikre, eller virkelig alle — se
  [Automatiske løsere](funktionen/solver.md#lsingsmodus)).

Til slutt ser du en trafikklysfarge for hver cache og, hvis noe ble funnet, det foreslåtte svaret
med begrunnelse.

## 4. Jobbe videre med én enkelt cache

På detaljsiden til en cache kan du godta løsningen, rette den, eller åpne
[AI-chatten](funktionen/ai-chat.md) for å diskutere akkurat den cachen med AI-en.
