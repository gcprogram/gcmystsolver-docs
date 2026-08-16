# Challenge-kontroll

För challenge-cacher (cacher som kräver att du tidigare har hittat vissa andra cacher) beräknar
GCMystSolver automatiskt en **trafikljus-bedömning**: uppfyller dina befintliga fynd redan kravet?

!!! warning "Kräver en importerad MyFinds-PocketQuery"
    Bedömningen räknar enbart fynd som redan finns i din lokala databas — det finns **ingen**
    online-jämförelse med din faktiska fyndhistorik på geocaching.com. För att fyndantal-,
    Jasmer-, 365-dagars- och streak-challenges ska bedömas korrekt måste du importera din
    kompletta **MyFinds-PocketQuery** en gång (se
    [Import och export](import.md#vad-som-hander-automatiskt-vid-import)). En PQ vars namn börjar
    med "my finds" identifieras automatiskt och alla cacher i den markeras som hittade — ingen
    separat importläge behövs för det.

## När sker kontrollen?

Vid **varje import** — inte först när du öppnar cachen. Så du ser genast i din cachelista vilka
challenges du redan klarar.

## Identifierade challenge-typer

- **D/T-matris-challenges** (t.ex. "alla 81 Difficulty/Terrain-kombinationer")
- **Land-challenges** ("liten världsresa" — fysiska fynd i specifika länder)
- **Region-challenges**
- **Kommun-/län-challenges** *(kontrollerar för närvarande bara antalet olika kommuner/län, inte
  en konkret fördefinierad lista)*
- **Höjd-challenges** (fynd över/under en viss höjd över havet)
- **Fyndantal-challenges** (t.ex. "minst 500 fynd")
- **Jasmer-challenge** (ett fynd per kalendermånad sedan maj 2000)
- **365/366-dagars-challenge** (ett fynd per kalenderdag på året, över årsgränser)
- **Streak-challenge** (längsta sammanhängande sviten av fynd-dagar)

## Trafikljusfärger

- 🔴 **Rött**: kravet uppfylls för närvarande inte.
- 🟡 **Gult**: osäkert — t.ex. eftersom identifieringen i listningens fritext inte var entydig.
- 🟢 **Grönt**: kravet uppfylls enligt aktuella data.

## Bevislista

För varje uppfyllt krav visar appen det **minimalt nödvändiga beviset** — alltså exakt de fynd
som uppfyller kravet (t.ex. ett fynd per månad), inte alla dina fynd totalt. Vid mycket stort
bevisbehov visas listan automatiskt mer kompakt (endast datum och GC-kod i stället för fullständig
titel), och vid extremt stort behov sammanfattas den bara som text, så att detaljsidan förblir
överskådlig.

## Transparens vid fritextidentifiering

Krav som måste läsas ut från en listnings fritext (t.ex. ett minsta antal fynd nämnt i texten)
visas alltid tillsammans med det **konkret identifierade värdet** — så du märker en feltolkning
omedelbart, i stället för att behöva lita på en tyst svart låda.

## Hittade cacher

En redan hittad cache visas alltid som grön, oavsett dess challenge-krav.

!!! tip "Efter en uppdatering"
    Har en challenge-kontroll korrigerats kan du i *Setup* via **"Clear stored solutions"**
    målinriktat radera alla sparade bedömningar av en typ och låta dem beräknas om, så att inga
    föråldrade felaktiga bedömningar blir kvar.
