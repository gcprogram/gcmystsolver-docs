# První kroky

## 1. Import keší

GCMystSolver načítá **soubory GPX** — buď jednotlivé keše exportované z geocaching.com/c:geo,
nebo celou **PocketQuery** se stovkami keší najednou. Otevři aplikaci, zvol *Import* a požadovaný
soubor. Již existující keše se aktualizují, ne duplikují.

Při importu se automaticky děje víc než jen samotné načtení:

- Země, kraj/region a okres se určí ze souřadnic (offline, bez internetu).
- U keší relevantních pro challenge se ihned zkontroluje, zda tvé dosavadní nálezy splňují danou
  podmínku (semafor červená/žlutá/zelená).
- Nadmořská výška se dotahuje na pozadí (u velkých PocketQuery to může chvíli trvat, ale běží to
  nenápadně dál, zatímco aplikaci už používáš).

## 2. (Volitelně) Zapnout AI

Vestavěné luštitele už bez jakékoli AI vyřeší mnoho typů hádanek. Pro vše ostatní si můžeš v
*Setup* připojit AI (vlastní API klíč od podporovaného poskytovatele). Setup ukazuje hrubý odhad
tokenového rozpočtu, abys měl/a představu o očekávaných nákladech na celou PocketQuery.

Více k tomu: [Řešení pomocí AI](funktionen/ki-solver.md), [Nastavení a záloha](funktionen/einstellungen-backup.md).

## 3. Nechat vyřešit

Na kartě *Solve* spustíš luštění nad naimportovanými kešemi. Vybereš přitom:

- **Jak důkladně** (přednastavení od rychlého/pouze offline až po intenzivní s AI),
- **Které keše** se zahrnou (jen nevyřešené, nevyřešené + nejisté, nebo opravdu všechny — viz
  [Automatické řešiče](funktionen/solver.md#rezim-reseni)).

Na konci uvidíš u každé keše barvu semaforu a případně navrženou lokaci s odůvodněním.

## 4. Další práce na jedné keši

Na detailní stránce keše můžeš řešení převzít, opravit, nebo otevřít
[AI chat](funktionen/ai-chat.md) a probrat s AI konkrétně tuto keš.
