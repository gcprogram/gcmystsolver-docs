# Eerste stappen

## 1. Caches importeren

GCMystSolver leest **GPX-bestanden** in — losse caches geëxporteerd via geocaching.com/c:geo, of
een hele **PocketQuery** met honderden caches tegelijk. Open de app, kies *Import* en het gewenste
bestand. Al bestaande caches worden bijgewerkt in plaats van dubbel aangemaakt.

Bij het importeren gebeurt automatisch meer dan alleen inlezen:

- Land, regio en gemeente/provincie worden uit de coördinaten bepaald (offline, zonder internet).
- Voor challenge-relevante caches wordt meteen gecontroleerd of je bestaande vondsten aan de
  eis voldoen (stoplicht rood/geel/groen).
- Hoogtegegevens worden op de achtergrond opgehaald (dit kan bij grote PocketQueries even duren,
  maar loopt onopvallend door terwijl je de app al gebruikt).

## 2. (Optioneel) AI inschakelen

De ingebouwde oplossers lossen al veel puzzeltypes op zonder enige AI. Voor al het overige kun je
in *Setup* een AI koppelen (je eigen API-key van een ondersteunde provider). Setup toont een grove
inschatting van het tokenbudget, zodat je een idee hebt van de verwachte kosten voor een hele
PocketQuery.

Meer hierover: [AI-oplospoging](funktionen/ki-solver.md), [Instellingen & back-up](funktionen/einstellungen-backup.md).

## 3. Laten oplossen

In het tabblad *Solve* start je een oplosronde over je geïmporteerde caches. Je kiest daarbij:

- **Hoe grondig** (preset van snel/alleen offline tot intensief met AI),
- **Welke caches** worden meegenomen (alleen onopgelost, onopgelost+onzeker, of echt alles — zie
  [Automatische oplossers](funktionen/solver.md#oplosmodus)).

Aan het eind zie je per cache een stoplichtkleur en, als er iets gevonden is, de voorgestelde
oplossing met onderbouwing.

## 4. Verdergaan met één cache

Op de detailpagina van een cache kun je de oplossing overnemen, corrigeren, of de
[AI-chat](funktionen/ai-chat.md) openen om gericht met de AI over die ene cache te discussiëren.
