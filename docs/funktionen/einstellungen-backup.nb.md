# Innstillinger og sikkerhetskopi

## AI-tilkobling

I *Setup* lagrer du din egen API-nøkkel fra en støttet AI-leverandør, samt en liste med modeller.
Denne listen fungerer også som automatisk fallback-rekkefølge (se
[AI-løsningsforsøk](ki-solver.md)) — det finnes ikke lenger en egen innstilling for en
"reservemodell". Under **"Test models"** kan du teste hver lagrede modell individuelt.

For en gratis vei til din første API-nøkkel, se
[NVIDIA/Google Gemini-anbefalingen](ki-solver.md#anbefaling-start-gratis-med-nvidia-eller-google-gemini).

## what3words

For gjenkjenning av what3words-koordinater kan du valgfritt lagre din egen what3words-API-nøkkel.

## Sikkerhetskopi og gjenoppretting

GCMystSolver kan sikkerhetskopiere hele databasen din pluss innstillinger. Det finnes to
beskyttelsesnivåer samtidig:

- **Enhetsbundet sikkerhetskopi**: automatisk, uten passord — fungerer pålitelig så lenge du
  gjenoppretter på **samme enhet** (det vanligste tilfellet, f.eks. etter en ominstallasjon).
- **Passordbeskyttet sikkerhetskopi** *(valgfritt)*: nødvendig hvis du vil gjenopprette et
  sikkerhetskopi på en **annen** enhet — kun slik kan API-nøkler tas med på tvers av enheter.

Gjenoppretter du et rent enhetsbundet sikkerhetskopi på en fremmed enhet, blir databasen din og
alle ikke-hemmelige innstillinger likevel fullstendig gjenopprettet — bare API-nøklene dine
forblir tomme og må angis på nytt én gang (appen påpeker dette tydelig).

## Tilbakestille lagrede løsninger

**"Clear stored solutions"** sletter målrettet alle lagrede løsninger av en bestemt løsertype og
beregner de berørte notatene på nytt — praktisk etter en appoppdatering som har rettet en løser,
slik at ingen utdaterte feilløsninger blir stående i databasen din.
