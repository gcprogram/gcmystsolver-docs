# Automatiske løsere

Før en AI i det hele tatt spørres, prøver GCMystSolver å knekke gåten din med en kjede av
innebygde, klassiske løsere. Det er raskere, gratis og fungerer selv helt uten tilkoblet AI.

Du når fanen *Solve* enten direkte via den nederste navigasjonen (en løsingsrunde over en hel
liste), eller via den eksplisitte Solve-knappen på detaljsiden til én cache (løser bare den ene
cachen, uavhengig av valgt løsingsmodus).

<figure class="gcms-shot" markdown>
![Solve-fanen med alle løser-chips](../assets/screenshots/solve-chips.png)
<figcaption>Løsingsmodus, forhåndsinnstilling og individuelt av/på-slåbare løser-chips</figcaption>
</figure>

## Hva som gjenkjennes

| Løser | Gjenkjenner |
|---|---|
| **what3words** | Tre-ords-koordinater (`///ord.ord.ord`) |
| **Vigenère** | Vigenère-kryptert tekst, inkludert nøkkelgjenkjenning |
| **ROT-N** | Cæsar-/ROT-forskyvninger, også med ukjent N |
| **Krypto (multi-dekoder)** | Vanlige klassikere som Base64, Morse, Atbash med flere, i kombinasjon |
| **Enigma** | Enigma-kryptert tekst |
| **Peiling/forskyvning** | "Pei … grader, … meter" samt den kompakte N/E-forskyvningsnotasjonen, på tysk/engelsk/nederlandsk/fransk/tsjekkisk |
| **Reverse Wherigo** | Wherigo-patroner analysert baklengs |
| **Siffer/tallord skjult i en historie** | Koordinater skjult som spredte siffer eller utskrevne tallord i en sammenhengende tekst |
| **One-stage-gjenkjenning** | Gjenkjenner eksplisitte "single-stage"/"one-stage"-hint; for letterbox-cacher i tillegg en forsiktig indisiebasert heuristikk |
| **Jigidi** | Gjenkjenner en uløst Jigidi-puslespill-lenke og merker den som "kun delvis automatisk løsbar" i stedet for å stille sende den videre til AI-en (som ikke kan se det lenkede bildet) |

Hver løser skriver transparent **hva som nøyaktig ble gjenkjent** (f.eks. det oppdagede tallet
eller teksten) — slik oppdages en feiltolkning umiddelbart, i stedet for å skjule seg som et
stille feilaktig svar.

## Feltgåter vs. sofagåter

GCMystSolver skiller mellom om en gåte i utgangspunktet kan løses fra sofaen, eller om den
nødvendigvis krever et besøk på stedet (f.eks. en multi med flere etapper, en peiling som bare kan
måles ved det første waypointet). Ved harde bevis på en feltgåte (f.eks. eksplisitt
etappenummerering i listingen eller ekte waypoints i GPX-filen) gjøres det ikke noe
AI-løsningsforsøk — appen ville ellers bare gjettet.

## Løsingsmodus

Når du starter en løsingsrunde, velger du hvilke cacher som inkluderes:

- **Unsolved (standard)**: kun virkelig uløste (røde) cacher; harde feltgåter hoppes over.
- **+ Partial**: i tillegg usikre (gule) løsninger; eksisterende pålitelige (grønne) løsninger
  forblir urørt.
- **Force (alle)**: virkelig alle cacher, uavhengig av trafikklysfarge eller funnstatus — f.eks.
  for å beregne en løsning på nytt etter en løseroppdatering.

I tillegg velger du en **forhåndsinnstilling** (rask/kun offline til intensiv med AI), som
bestemmer hvor mye innsats som legges i søket før AI-en konsulteres.

## Funnede cacher

Allerede funnede cacher vises alltid som løst (grønt), uten å bli kontrollert på nytt.
