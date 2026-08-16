# AI-chat per cache

Hvis en automatisk funnet løsning er feil eller ingen ble funnet i det hele tatt, kan du på
detaljsiden til en cache åpne en **fullskjerms-chat** med AI-en — spesifikt om akkurat den
cachen.

## Hva chatten allerede vet

Chatten starter med cachens fullstendige kontekst: listingtekst, hint og den eksisterende
(muligens feilaktige) løsningen. Du kan i tillegg legge ved egne bilder, f.eks. av et skilt med
et hint eller et gåteelement som ikke står i listingteksten.

## Løsere på forespørsel

Midt i samtalen kan AI-en selvstendig kalle opp en av de klassiske løserne (what3words, Vigenère,
ROT-N, kryptodekodere, Enigma, Reverse Wherigo) — f.eks. for å dekryptere en mellomtekst som er
diskutert i chatten direkte. Resultatet vises som et eget, tydelig merket chatteinnlegg, og AI-en
tar det automatisk med i sitt neste svar. Dette er begrenset til maks tre automatiske
AI-svarrunder per melding, slik at samtalen ikke havner i en endeløs løkke.

## Overta løsningen

Kommer dere frem til en bedre løsning i chatten, overtar du den via knappen **"Take over as
solution"** rett inn i cache-databasen — uten å måtte legge inn løsningen manuelt et annet sted.
