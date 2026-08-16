# Vanliga frågor

**Behöver jag absolut en AI-API-nyckel?**
Nej. De automatiska lösarna fungerar utan AI. En nyckel utökar bara vad som dessutom provas
automatiskt.

**Kostar appen något?**
Nej, GCMystSolver i sig är gratis. Använder du den valfria AI-anslutningen uppstår kostnader hos
respektive AI-leverantör (din egen API-nyckel, du betalar direkt där — se
[AI-lösningsförsök](funktionen/ki-solver.md) för en grov tokenuppskattning).

**Varför märks min multi-cache som "inte automatiskt lösbar" trots att den innehåller ett
pussel?**
Appen känner igen tydliga tecken på ett fältpussel (t.ex. flera etapper i listningen eller
riktiga waypoints i GPX-filen) och undviker medvetet att försöka lösa sådana cacher
automatiskt/via AI — ett element på plats går inte att knäcka från soffan.

**Min challenge visas som röd/gul trots att jag faktiskt uppfyller den — vad gör jag?**
Kontrollera den visade bevislistan respektive den identifierade texten/värdet på detaljsidan —
ofta beror det på ett ännu inte importerat fynd eller en tvetydig fritextidentifiering. Om du
misstänker en verklig bugg i identifieringen, [rapportera den gärna](support.md) — helst med
cachens GC-kod.

**Jag har en idé till en ny lösare eller challenge-typ — var lägger jag den?**
Som funktionsförslag via [Support](support.md).
