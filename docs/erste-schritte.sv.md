# Kom igång

## 1. Importera cacher

GCMystSolver läser in **GPX-filer** — antingen enskilda cacher exporterade från geocaching.com/
c:geo, eller en hel **PocketQuery** med hundratals cacher på en gång. Öppna appen, välj *Import*
och önskad fil. Redan befintliga cacher uppdateras i stället för att dubbleras.

Vid import händer automatiskt mer än bara inläsning:

- Land, region och kommun/län bestäms utifrån koordinaterna (offline, utan internet).
- För challenge-relevanta cacher kontrolleras omedelbart om dina befintliga fynd uppfyller kravet
  (trafikljus rött/gult/grönt).
- Höjddata hämtas i bakgrunden (detta kan ta en stund vid stora PocketQueries, men körs i tysthet
  medan du redan använder appen).

## 2. (Valfritt) Aktivera AI

De inbyggda lösarna löser redan många pusseltyper helt utan AI. För allt annat kan du koppla en AI
i *Setup* (din egen API-nyckel från en av de leverantörer som stöds). Setup visar en grov
uppskattning av tokenbudgeten, så att du får en känsla för den förväntade kostnaden för en hel
PocketQuery.

Mer om detta: [AI-lösningsförsök](funktionen/ki-solver.md), [Inställningar och säkerhetskopiering](funktionen/einstellungen-backup.md).

## 3. Låt appen lösa

I fliken *Solve* startar du en lösningsomgång över dina importerade cacher. Du väljer:

- **Hur grundligt** (förinställning från snabb/enbart offline till intensivt med AI),
- **Vilka cacher** som ingår (endast olösta, olösta+osäkra, eller verkligen alla — se
  [Automatiska lösare](funktionen/solver.md#losningslage)).

Till slut ser du en trafikljusfärg för varje cache och, om något hittades, den föreslagna
lösningen med motivering.

## 4. Fortsätta arbeta med en enskild cache

På en caches detaljsida kan du godkänna lösningen, korrigera den, eller öppna
[AI-chatten](funktionen/ai-chat.md) för att diskutera just den cachen med AI:n.
