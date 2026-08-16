# GCMystSolver

**GCMystSolver** är en Android-app som hjälper dig att lösa Geocaching mystery- och pusselcacher
snabbare. Du importerar dina cacher från en GPX-fil eller en PocketQuery, appen kör automatiskt en
kedja av klassiska pussellösare (Vigenère, ROT-N, what3words, Enigma, kryptoavkodare,
bäring/förskjutning med mera) och kan dessutom ta hjälp av en AI när ingen inbyggd lösare passar.
Dessutom kontrollerar appen automatiskt om dina hittade cacher uppfyller kraven för
challenge-cacher (D/T-matris, länder, regioner, höjd, antal fynd med mera).

Den här handboken beskriver alla appens funktioner i detalj. Använd navigeringen ovan eller
sökfunktionen för att hitta ett ämne.

## Snabbstart

- [Kom igång](erste-schritte.md) — installera appen, gör din första import
- [Automatiska lösare](funktionen/solver.md) — vilka pusseltyper appen löser utan AI
- [Challenge-kontroll](funktionen/challenges.md) — hur trafikljus-bedömningen av dina challenge-cacher fungerar
- [Support](support.md) — rapportera en bugg eller föreslå en ny funktion

## Bra att veta

!!! info "Gratis, ingen premiumnivå"
    GCMystSolver har för närvarande inga betalfunktioner och ingen begränsad funktionalitet.

!!! warning "Ersätter inte eget tänkande"
    Automatiska lösare och AI-stöd är verktyg, ingen magi. Vid fältpussel (multicacher med flera
    etapper, bäringar som mäts på plats med mera) kan appen inte göra mer än att peka dig mot rätt
    lösare — cachen måste ändå knäckas på plats vid gömstället.

!!! note "Ladda ner APK"
    Länken till den aktuella APK:n hittar du högst upp i menyn ("APK herunterladen"). Det är en
    debug-build utanför Play Store — enheten din frågar om tillstånd att installera appar från
    okända källor vid första installationen.
