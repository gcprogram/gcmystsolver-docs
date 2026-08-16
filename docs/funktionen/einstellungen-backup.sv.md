# Inställningar och säkerhetskopiering

## AI-anslutning

I *Setup* sparar du din egen API-nyckel från en AI-leverantör som stöds, samt en lista med
modeller. Den här listan fungerar också som automatisk fallback-ordning (se
[AI-lösningsförsök](ki-solver.md)) — det finns ingen separat inställning för en "reservmodell"
längre. Under **"Test models"** kan du testa varje sparad modell individuellt.

För att gratis komma över en första API-nyckel, se
[NVIDIA/Google Gemini-rekommendationen](ki-solver.md#rekommendation-borja-gratis-med-nvidia-eller-google-gemini).

## what3words

För identifiering av what3words-koordinater kan du valfritt spara din egen what3words-API-nyckel.

## Säkerhetskopiering och återställning

GCMystSolver kan säkerhetskopiera hela din databas plus inställningar. Det finns två skyddsnivåer
samtidigt:

- **Enhetsbunden säkerhetskopia**: automatisk, utan lösenord — fungerar pålitligt så länge du
  återställer på **samma enhet** (det vanligaste fallet, t.ex. efter en ominstallation).
- **Lösenordsskyddad säkerhetskopia** *(valfritt)*: nödvändig om du vill återställa en
  säkerhetskopia på en **annan** enhet — endast så kan API-nycklar tas med mellan enheter.

Återställer du en rent enhetsbunden säkerhetskopia på en främmande enhet, återställs ändå din
databas och alla icke-hemliga inställningar fullständigt — endast dina API-nycklar förblir tomma
och måste anges på nytt en gång (appen påpekar detta tydligt).

## Återställa sparade lösningar

**"Clear stored solutions"** raderar målinriktat alla sparade lösningar av en viss lösartyp och
beräknar de berörda anteckningarna på nytt — praktiskt efter en appuppdatering som rättat en
lösare, så att inga föråldrade felaktiga lösningar blir kvar i din databas.
