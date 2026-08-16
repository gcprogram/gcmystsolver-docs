# Database, lijsten & statistiek

## Lists

Het starttabblad toont al je geïmporteerde lijsten plus twee vaste items: **"All caches"** (alle
caches samen) en **"Solved"** (alle opgeloste caches rond een middelpunt dat jij kiest).

<figure class="gcms-shot" markdown>
![Lists: startscherm met alle geïmporteerde lijsten](../assets/screenshots/lists-home.png)
<figcaption>Lists — startscherm</figcaption>
</figure>

## Cachelijst

Tik je op een lijst, dan kom je in een doorzoekbare, filterbare cachelijst — op stoplichtkleur,
cachetype en meer. Van daaruit open je de detailpagina van een cache.

<figure class="gcms-shot" markdown>
![Cachelijst met een stoplicht aan de linkerrand en een filterbalk bovenaan](../assets/screenshots/list-detail-arrows.png)
<figcaption>Links: stoplicht per cache. Boven: cachetype-filter, stoplichtkleur-filter, oplosser-filter</figcaption>
</figure>

- De **rode pijl bovenaan** wijst naar de filterbalk: cachetype-iconen, de drie stoplichtkleuren
  (groen/geel/rood) om te tonen/verbergen, en een **"Solver"**-dropdown om op specifieke oplossers
  te filteren.
- De **rode pijl linksonder** wijst naar het kleine driepuntige **stoplicht aan de linkerrand van
  elke cache** — de huidige kleur is vol ingekleurd, de andere twee stippen blijven bleek. Dezelfde
  rood/geel/groen-codering als overal elders in de app.

### Twee onafhankelijke stoplichten: oplosstatus en challenge-status

Bij challenge-caches kunnen **twee** stoplichten tegelijk zichtbaar zijn — één links, één rechts
aan de rand van de rij:

<figure class="gcms-shot" markdown>
![Twee stoplichten: oplosstatus links, challenge-vervulling rechts](../assets/screenshots/ampel-legend.png)
<figcaption>Links: oplosstatus (hier groen). Rechts: challenge-vervulling (hier geel/partial)</figcaption>
</figure>

- **Links = oplosstatus**: is de eis van de cache (bijv. de challenge-tekst) herkend, en is de
  oplossing/beoordeling betrouwbaar?
- **Rechts = challenge-vervulling**: voldoe je met je bestaande vondsten al aan de herkende eis?
  (Zie [Challenge-controle](challenges.md) voor details over deze tweede, onafhankelijke
  beoordeling.)

## Cachedetail

Op de detailpagina van een cache vind je de listing, hint, huidige oplossing, stoplichtkleur en —
allemaal samen in **één gedeelde kaart "Solver results"** — de relevante extra knoppen voor die
cache: bijv. een link naar een Geochecker, naar gc-project (als de listing daarnaar linkt), of
naar een webcam-opnamepagina bij webcam-caches.

## Map

Het kaart-tabblad toont de op dat moment gekozen lijst als markers op een OpenStreetMap-kaart.
Elke marker combineert twee stukjes informatie:

- **Het cachetype-symbool** in het midden (bijv. "?" voor Mystery, een boekicoon voor
  Traditional).
- **Een gekleurde ring** om het symbool zodra er een oplosstatus is: **groen** = betrouwbare
  oplossing (confidence ≥ 90%), **geel/amber** = onzekere/gedeeltelijke oplossing. Geen ring
  betekent: nog onopgelost.

<figure class="gcms-shot" markdown>
![Kaart met meerdere groen omrande, opgeloste mystery-caches](../assets/screenshots/map-solved-marker.png)
<figcaption>De groen omrande "?"-markers zijn opgeloste mystery-caches</figcaption>
</figure>

Bij challenge-caches komt er bovendien een klein **badge rechtsonder aan de marker** bij — dat is
de challenge-vervulling (hetzelfde tweede stoplicht als in de lijst, zie hierboven), onafhankelijk
van de oplosstatus van de ring. Bij heel veel markers dicht bij elkaar zoomt de app automatisch
naar een compactere puntmodus, waarbij de cachetype-kleur het vlak vult en de oplosstatus als een
dunne ring eromheen ligt.

### Offline kaarten

Via het lagen-icoon rechtsboven kun je wisselen tussen de online kaart (OpenStreetMap) en een zelf
geladen **offline kaart (.map-bestand)** — handig voor gebruik zonder internetverbinding. Zulke
`.map`-bestanden kun je bijv. met **c:geo** downloaden, en zijn dan ook hier selecteerbaar.

<figure class="gcms-shot" markdown>
![Kaartlaag-selectie: Online (OSM), Offline (.map), Select Offline Map](../assets/screenshots/map-offline-selector.png)
<figcaption>Online/offline kaartkeuze</figcaption>
</figure>

## Statistiek

Het statistiekscherm toont je per cachetype hoeveel caches in totaal opgelost, deels opgelost en
als veldpuzzel herkend zijn — zo zie je in één oogopslag waar nog werk wacht en waar een bezoek
ter plekke sowieso onvermijdelijk is.

<figure class="gcms-shot" markdown>
![Statistiektabel per cachetype](../assets/screenshots/statistics.png)
<figcaption>Statistiek per cachetype, met een "By solver"-overzicht eronder</figcaption>
</figure>

!!! tip "Direct naar de gefilterde lijst"
    Tik je in de statistiektabel op een cachetype-rij (bijv. "Mystery"), dan spring je direct naar
    de cachelijst, al gefilterd op precies dat type.

## Back-up & herstel

Via *Setup* kun je je hele database (inclusief alle instellingen) een back-up geven en op een
ander apparaat herstellen. Details: [Instellingen & back-up](einstellungen-backup.md).
