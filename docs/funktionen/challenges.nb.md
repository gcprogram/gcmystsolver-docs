# Challenge-kontroll

For challenge-cacher (cacher som krever at du tidligere har funnet visse andre cacher) beregner
GCMystSolver automatisk en **trafikklys-vurdering**: oppfyller dine eksisterende funn allerede
kravet?

!!! warning "Krever en importert MyFinds-PocketQuery"
    Vurderingen teller utelukkende funn som allerede finnes i din lokale database — det finnes
    **ingen** nettbasert sammenligning med din faktiske funnhistorikk på geocaching.com. For at
    funnantall-, Jasmer-, 365-dagers- og streak-challenges skal vurderes korrekt, må du importere
    din komplette **MyFinds-PocketQuery** én gang (se
    [Import og eksport](import.md#hva-som-skjer-automatisk-ved-import)). En PQ hvis navn starter
    med "my finds" gjenkjennes automatisk, og alle cachene i den merkes som funnet — det trengs
    ingen egen importmodus for det.

## Når skjer kontrollen?

Ved **hver import** — ikke først når du åpner cachen. Slik ser du med en gang i cachelisten din
hvilke challenges du allerede klarer.

## Gjenkjente challenge-typer

- **D/T-matrise-challenges** (f.eks. "alle 81 Difficulty/Terrain-kombinasjoner")
- **Land-challenges** ("liten verdensreise" — fysiske funn i bestemte land)
- **Region-challenges**
- **Kommune-/fylke-challenges** *(sjekker for øyeblikket kun antallet ulike kommuner/fylker, ikke
  en konkret forhåndsdefinert liste)*
- **Høyde-challenges** (funn over/under en bestemt høyde over havet)
- **Funnantall-challenges** (f.eks. "minst 500 funn")
- **Jasmer-challenge** (ett funn per kalendermåned siden mai 2000)
- **365/366-dagers-challenge** (ett funn per kalenderdag i året, på tvers av år)
- **Streak-challenge** (lengste sammenhengende rekke med funn-dager)

## Trafikklysfarger

- 🔴 **Rødt**: kravet er for øyeblikket ikke oppfylt.
- 🟡 **Gult**: usikkert — f.eks. fordi gjenkjenningen i listingens fritekst ikke var entydig.
- 🟢 **Grønt**: kravet er oppfylt basert på gjeldende data.

## Bevisliste

For hvert oppfylte krav viser appen det **minimalt nødvendige beviset** — altså nettopp de funnene
som oppfyller kravet (f.eks. ett funn per måned), ikke alle funnene dine totalt. Ved svært mange
nødvendige bevis vises listen automatisk mer kompakt (kun dato og GC-kode i stedet for full
tittel), og ved ekstremt mange kun oppsummert som tekst, slik at detaljsiden forblir oversiktlig.

## Åpenhet ved fritekstgjenkjenning

Krav som må leses ut av en listings fritekst (f.eks. et minste antall funn nevnt i teksten) vises
alltid sammen med den **konkret gjenkjente verdien** — slik oppdager du en feiltolkning
umiddelbart, i stedet for å måtte stole på en stille svart boks.

## Funnede cacher

En allerede funnet cache vises alltid som grønn, uavhengig av dens challenge-krav.

!!! tip "Etter en oppdatering"
    Er en challenge-kontroll blitt rettet, kan du i *Setup* via **"Clear stored solutions"**
    målrettet slette alle lagrede vurderinger av én type og la dem beregnes på nytt, slik at ingen
    utdaterte feilvurderinger blir stående.
