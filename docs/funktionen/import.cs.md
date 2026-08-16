# Import (GPX / PocketQuery)

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

## Co se při importu děje automaticky

1. **Určení regionu** (offline, bez přístupu k internetu): země, kraj/region a okres se určí ze
   souřadnic keše.
2. **Předběžná kontrola challenge**: u všech keší rozpoznaných jako challenge se ihned spočítá
   semaforové hodnocení (viz [Kontrola výzev](challenges.md)) — ne až při otevření keše.
3. **Určení nadmořské výšky na pozadí**: hodnoty výšky se dotahují bez blokování aplikace. U
   velmi velkých importů to může na pozadí ještě chvíli běžet.

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
