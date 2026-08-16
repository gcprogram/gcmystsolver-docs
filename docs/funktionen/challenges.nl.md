# Challenge-controle

Voor challenge-caches (caches die vereisen dat je van tevoren bepaalde andere caches hebt
gevonden) berekent GCMystSolver automatisch een **stoplicht-beoordeling**: voldoe je met je
bestaande vondsten al aan de eis?

!!! warning "Vereist een geïmporteerde MyFinds-PocketQuery"
    De beoordeling telt uitsluitend vondsten die al in je lokale database staan — er is **geen**
    online vergelijking met je werkelijke geocaching.com-vondstgeschiedenis. Om
    vondstenaantal-, Jasmer-, 365-dagen- en streak-challenges correct te beoordelen, moet je
    eenmalig je volledige **MyFinds-PocketQuery importeren** (zie
    [Import & export](import.md#wat-er-automatisch-gebeurt-bij-import)). Een PQ waarvan de naam
    begint met "my finds" wordt automatisch herkend en alle caches erin worden als gevonden
    gemarkeerd — daarvoor is geen aparte importmodus nodig.

## Wanneer wordt er gecontroleerd?

Bij **elke import** — niet pas wanneer je de cache opent. Zo zie je meteen in je cachelijst welke
challenges je al haalt.

## Herkende challenge-typen

- **D/T-matrix-challenges** (bijv. "alle 81 Difficulty/Terrain-combinaties")
- **Landen-challenges** ("mini-wereldreis" — fysieke vondsten in bepaalde landen)
- **Regio-challenges**
- **Gemeente-/provincie-challenges** *(controleert momenteel alleen het aantal verschillende
  gemeenten/provincies, niet een concrete vooraf vastgelegde lijst)*
- **Hoogte-challenges** (vondsten boven/onder een bepaalde hoogte boven zeeniveau)
- **Vondstenaantal-challenges** (bijv. "minimaal 500 vondsten")
- **Jasmer-challenge** (één vondst per kalendermaand sinds mei 2000)
- **365/366-dagen-challenge** (één vondst per kalenderdag van het jaar, jaaroverstijgend)
- **Streak-challenge** (langste aaneengesloten reeks vondstdagen)

## Stoplichtkleuren

- 🔴 **Rood**: eis momenteel niet vervuld.
- 🟡 **Geel**: onzeker — bijv. omdat de herkenning in de vrije tekst van de listing niet
  eenduidig was.
- 🟢 **Groen**: eis vervuld op basis van de huidige gegevens.

## Bewijslijst

Bij elke vervulde eis toont de app het **minimaal benodigde bewijs** — dus precies de vondsten die
aan de eis voldoen (bijv. één vondst per maand), niet al je vondsten in totaal. Bij zeer veel
benodigd bewijs wordt de lijst automatisch compacter weergegeven (alleen datum en GC-code in
plaats van volledige titel), en bij extreem veel alleen nog als tekst samengevat, zodat de
detailpagina overzichtelijk blijft.

## Transparantie bij herkenning in vrije tekst

Eisen die uit de vrije tekst van een listing moeten worden afgeleid (bijv. een in de tekst genoemd
minimumaantal vondsten) worden altijd samen met de **concreet herkende waarde** getoond — zo zie
je een verkeerde interpretatie meteen, in plaats van te moeten vertrouwen op een stille zwarte
doos.

## Gevonden caches

Een al gevonden cache wordt altijd als groen weergegeven, ongeacht de challenge-eis.

!!! tip "Na een update"
    Is een challenge-controle gecorrigeerd, dan kun je in *Setup* via **"Clear stored
    solutions"** gericht alle opgeslagen beoordelingen van één type verwijderen en opnieuw laten
    berekenen, zodat er geen verouderde foute beoordelingen blijven staan.
