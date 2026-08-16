# Import a export (GPX / PocketQuery)

<figure class="gcms-shot" markdown>
![Obrazovka Import s tlačítkem "Choose GPX / ZIP"](../assets/screenshots/import-screen.png)
<figcaption>Karta Import</figcaption>
</figure>

## Podporované soubory

- Jednotlivé **soubory GPX**, jak je exportuje geocaching.com nebo c:geo pro jednu keš nebo
  seznam.
- **PocketQuery** (rovněž ve formátu GPX) až s několika stovkami keší najednou.

Již existující keše se při opětovném importu **aktualizují**, ne duplikují — stejný seznam tak
můžeš importovat opakovaně, například abys převzal/a svůj aktuální stav nálezů.

## Název seznamu

Před importem zadáš **libovolný název seznamu** (předvyplněný názvem souboru; necháš-li pole
prázdné, seznam se jmenuje "import"). Dva případy:

- **Nový název**: vytvoří se nový seznam s tímto názvem.
- **Název existujícího seznamu**: naimportované keše se přidají do tohoto seznamu — nevznikne
  duplicitní seznam ani duplicitní keše.

Navíc existuje volba **"Rename list by region (from cache locations)"** — po importu aplikace
automaticky určí název ze souřadnic keší (rozpoznání shluku + zjištění místa), např. "Kerpen,
Nordrhein-Westfalen, DE".

!!! warning "Nevhodné pro MyFinds dotazy"
    U MyFinds PocketQuery jsou tvé nálezy rozptýlené po celém světě — automatické přejmenování
    podle regionu by zde nedávalo smysluplný název. Soubor stažený z geocaching.com navíc bývá
    pojmenovaný jen podle ID PQ (např. `1234567.gpx`) — předvyplněné pole názvu seznamu by tak
    bylo jen toto číslo. U takových seznamů zadej název raději ručně (např. "MyFinds").

## Co se při importu děje automaticky

1. **Rozpoznání stavu nálezu**: zda jde o MyFinds PocketQuery, aplikace rozpozná podle pole
   `<name>` **přímo v obsahu souboru GPX** (na geocaching.com vždy doslovně "My Finds Pocket
   Query", bez ohledu na jazyk tvého účtu) — **ne podle názvu souboru**. Rozpoznání tedy funguje
   bez ohledu na to, zda se soubor jmenuje `myfinds.gpx`, nebo jen `1234567.gpx`. Všechny obsažené
   keše se pak automaticky označí jako nalezené (hláška: *"Recognised as a My Finds query — all of
   them marked found."*). V běžných PQ/GPX souborech aplikace navíc rozpozná
   tvé vlastní záznamy logu "Found it"/"Attended"/"Webcam Photo Taken" tím, že je porovná s
   geocaching.com **username** uloženým v *Setup*. Jakmile je keš jednou rozpoznána jako
   nalezená, zůstane taková i při každém dalším importu.
2. **Určení regionu** (offline, bez přístupu k internetu): země, kraj/region a okres se určí ze
   souřadnic keše.
3. **Předběžná kontrola challenge**: u všech keší rozpoznaných jako challenge se ihned spočítá
   semaforové hodnocení (viz [Kontrola výzev](challenges.md)) — ne až při otevření keše.
4. **Určení nadmořské výšky na pozadí**: hodnoty výšky se dotahují bez blokování aplikace. U
   velmi velkých importů to může na pozadí ještě chvíli běžet.

!!! tip "MyFinds PQ pro správné hodnocení challenge"
    Kontrola challenge počítá výhradně nálezy, které už jsou v tvé lokální databázi — neexistuje
    žádné online porovnání s tvou skutečnou historií nálezů. Pro spolehlivé výsledky u challenge
    podle počtu nálezů/Jasmer/365 dní/streak proto jednou naimportuj svou kompletní **MyFinds
    PocketQuery** (viz [Kontrola výzev](challenges.md)).

## Existující řešení a poznámky

- **Řešení se nikdy nepřepisují**: již uložené řešení zůstane při opětovném importu zachováno.
  Jen pokud sám importovaný GPX obsahuje novější blok `[GCMystSolver]` (např. protože zpětně
  načítáš soubor už jednou exportovaný z GCMystSolver), aplikace toto novější řešení převezme.
- **Osobní poznámky se slučují, ne nahrazují**: tvůj vlastní volný text z osobní poznámky GPX
  zůstává zachován a připojí se pod automaticky vygenerovaný blok `[GCMystSolver]` — nic se
  neztratí a při opakovaném importu/exportu se blok nehromadí vícekrát.

## Základní princip: offline před sítí

Kde je to možné, používá GCMystSolver pro import i pro určení regionu/výšky nejprve **lokální data
a offline podklady**, než dojde k jakémukoli síťovému přístupu. Díky tomu je import spolehlivý a
rychlý i u velkých seznamů.

## Nejrychlejší cesta z c:geo

1. V c:geo v detailním zobrazení seznamu otevři menu → **"Exportovat/Nahrát"** →
   **"Exportovat GPX"**.
2. V GCMystSolver přejdi do *Import* a ve výběru souborů přejdi do exportní složky c:geo (obvykle
   `\cgeo\gpx`).
3. V menu se třemi tečkami ve výběru souborů nastav **"Seřadit podle"** → **"Datum úpravy
   (nejnovější první)"**.
4. Načti nejvýše umístěný (nejnovější) soubor GPX.

Při více než 100 souborech GPX v exportní složce c:geo se ten správný jinak těžko hledá.

## Export

Přes **"Export GPX"** (v *Lists*, v seznamu keší, nebo v seznamu "Solved") zapíšeš své keše
včetně výsledků GCMystSolver zpět do souboru GPX — např. pro další použití v c:geo nebo jiné
aplikaci.

- **Vyřešená souřadnice**: je-li keš vyřešena, exportovaná souřadnice waypointu se nastaví přímo
  na vyřešenou pozici (žádný samostatný waypoint "Final" — keš sama se v exportu "přesune" na
  řešení).
- **Řešení v osobní poznámce**: řešení (původní souřadnice, vyřešená souřadnice, jistota, solve
  type, odkaz na checker) skončí jako blok `[GCMystSolver]` v osobní poznámce exportované keše —
  hned následovaný tvým vlastním textem poznámky.

V *Setup → Export privacy* můžeš dva detaily z toho omezit:

- **"Show AI model in export"**: vypnuto, aby se řešení od AI zobrazilo jen jako "AI" místo např.
  "AI (gemini-2.5-flash)".
- **"Show [GCMystSolver] tag in export"**: vypnuto, aby v exportu zůstal **jen tvůj vlastní text
  poznámky** — bez jistoty, solve type nebo textu řešení. Samotná vyřešená souřadnice se přesto
  vždy exportuje.
