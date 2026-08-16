# Automatiska lösare

Innan en AI ens tillfrågas försöker GCMystSolver knäcka ditt pussel med en kedja av inbyggda,
klassiska lösare. Det är snabbare, gratis och fungerar även helt utan ansluten AI.

Du når fliken *Solve* antingen direkt via den nedre navigeringen (en lösningsomgång över en hel
lista), eller via den uttryckliga Solve-knappen på en enskild caches detaljsida (löser bara den
cachen, oavsett vald lösningsläge).

<figure class="gcms-shot" markdown>
![Solve-fliken med alla lösar-chips](../assets/screenshots/solve-chips.png)
<figcaption>Lösningsläge, preset och individuellt på-/avslagbara lösar-chips</figcaption>
</figure>

## Vad som känns igen

| Lösare | Känner igen |
|---|---|
| **what3words** | Trevalpiga koordinater (`///ord.ord.ord`) |
| **Vigenère** | Vigenère-krypterad text, inklusive nyckelidentifiering |
| **ROT-N** | Caesar-/ROT-förskjutningar, även med okänt N |
| **Krypto (multiavkodare)** | Vanliga klassiker som Base64, Morse, Atbash med flera, i kombination |
| **Enigma** | Enigma-krypterad text |
| **Bäring/förskjutning** | "Peila … grader, … meter" samt den kompakta N/E-förskjutningsnotationen, på tyska/engelska/nederländska/franska/tjeckiska |
| **Reverse Wherigo** | Wherigo-cartridges analyserade baklänges |
| **Siffror/talord gömda i en berättelse** | Koordinater gömda som utspridda siffror eller utskrivna talord i en löpande text |
| **One-stage-identifiering** | Känner igen uttryckliga "single-stage"/"one-stage"-ledtrådar; för letterbox-cacher dessutom en försiktig indicie-heuristik |
| **Jigidi** | Känner igen en olöst Jigidi-pussellänk och märker den som "endast delvis automatiskt lösbar" i stället för att tyst skicka den vidare till AI:n (som inte kan se den länkade bilden) |

Varje lösare skriver transparent vad som **exakt känts igen** (t.ex. det upptäckta talet eller
texten) — så en feltolkning märks omedelbart, i stället för att gömma sig som ett tyst felaktigt
svar.

## Fältpussel vs. soffpussel

GCMystSolver skiljer på om ett pussel i grunden går att lösa från soffan eller om det
nödvändigtvis kräver ett besök på plats (t.ex. en multi med flera etapper, en bäring som bara kan
mätas vid första waypointen). Vid tydliga tecken på ett fältpussel (t.ex. explicit
etappnumrering i listningen eller riktiga waypoints i GPX-filen) görs inget AI-lösningsförsök —
appen skulle annars bara gissa.

## Lösningsläge

När du startar en lösningsomgång väljer du vilka cacher som ingår:

- **Unsolved (standard)**: endast verkligt olösta (röda) cacher; tydliga fältpussel hoppas över.
- **+ Partial**: dessutom osäkra (gula) lösningar; befintliga pålitliga (gröna) lösningar rörs
  inte.
- **Force (alla)**: verkligen alla cacher, oavsett trafikljusfärg eller fyndstatus — t.ex. för att
  räkna om en lösning efter en lösaruppdatering.

Dessutom väljer du en **preset** (snabb/enbart offline till intensiv med AI), som avgör hur mycket
ansträngning som läggs på sökning innan AI:n konsulteras.

## Hittade cacher

Redan hittade cacher visas alltid som lösta (grönt), utan att kontrolleras igen.
