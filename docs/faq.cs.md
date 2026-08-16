# Časté dotazy

**Potřebuji nutně API klíč k AI?**
Ne. Automatické řešiče fungují bez AI. Klíč jen rozšiřuje, co se navíc zkouší automaticky.

**Stojí aplikace něco?**
Ne, GCMystSolver samotný je zdarma. Používáš-li volitelné připojení AI, vznikají tím náklady u
příslušného poskytovatele AI (vlastní API klíč, platíš přímo jemu — hrubý odhad tokenů viz
[Řešení pomocí AI](funktionen/ki-solver.md)).

**Proč je moje multi keš označena jako „nelze automaticky vyřešit", i když obsahuje hádanku?**
Aplikace rozpozná tvrdé důkazy terénní hádanky (např. více stanovišť v listingu nebo skutečné
waypointy v souboru GPX) a u takových keší se záměrně nepokouší o automatické/AI řešení — prvek na
místě se od stolu vyřešit nedá.

**Moje challenge se zobrazuje červeně/žlutě, přestože ji vlastně splňuji — co s tím?**
Zkontroluj zobrazený seznam dokladů, resp. rozpoznaný text/hodnotu na detailní stránce — často za
tím stojí ještě neimportovaný nález nebo nejednoznačné rozpoznání ve volném textu. Pokud
podezíráš skutečnou chybu v rozpoznávání, [nahlas ji prosím](support.md) — nejlépe s GC kódem
keše.

**Mám nápad na nový řešič nebo typ challenge — kam s tím?**
Jako návrh funkce přes [Podporu](support.md).
