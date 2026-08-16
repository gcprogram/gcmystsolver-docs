# Databáze, seznamy a statistiky

## Lists

Úvodní karta zobrazuje všechny tvé naimportované seznamy plus dvě pevné položky: **"All caches"**
(všechny keše dohromady) a **"Solved"** (všechny vyřešené keše kolem středu, který si zvolíš).

<figure class="gcms-shot" markdown>
![Lists: úvodní obrazovka se všemi naimportovanými seznamy](../assets/screenshots/lists-home.png)
<figcaption>Lists — úvodní obrazovka</figcaption>
</figure>

## Seznam keší

Klepnutím na seznam se otevře prohledávatelný, filtrovatelný seznam keší — podle barvy semaforu,
typu keše a dalšího. Odtud otevřeš detailní stránku keše.

<figure class="gcms-shot" markdown>
![Seznam keší se semaforem na levém okraji a filtrovacím řádkem nahoře](../assets/screenshots/list-detail-arrows.png)
<figcaption>Vlevo: semafor u každé keše. Nahoře: filtr podle typu keše, podle barvy semaforu, podle řešiče</figcaption>
</figure>

- **Horní červená šipka** ukazuje na filtrovací řádek: ikony typů keší, tři barvy semaforu
  (zelená/žlutá/červená) k zapnutí/vypnutí a rozbalovací nabídku **"Solver"** pro filtrování podle
  konkrétních řešičů.
- **Dolní levá červená šipka** ukazuje na malý trojtečkový **semafor na levém okraji každé keše**
  — aktuální barva je plně zbarvená, zbylé dvě tečky zůstávají bledé. Stejné barevné kódování
  červená/žlutá/zelená jako všude jinde v aplikaci.

### Dva nezávislé semafory: stav řešení a stav challenge

U challenge keší mohou být viditelné **dva** semafory najednou — jeden vlevo, druhý vpravo na
okraji řádku:

<figure class="gcms-shot" markdown>
![Dva semafory: stav řešení vlevo, splnění challenge vpravo](../assets/screenshots/ampel-legend.png)
<figcaption>Vlevo: stav řešení (zde zelená). Vpravo: splnění challenge (zde žlutá/partial)</figcaption>
</figure>

- **Vlevo = stav řešení**: byla podmínka keše (např. text challenge) rozpoznána a je
  řešení/vyhodnocení důvěryhodné?
- **Vpravo = splnění challenge**: splňují tvé dosavadní nálezy rozpoznanou podmínku už teď? (Viz
  [Kontrola výzev](challenges.md) pro podrobnosti k tomuto druhému, nezávislému hodnocení.)

## Detail keše

Na detailní stránce keše najdeš listing, hint, aktuální řešení, barvu semaforu a — všechny
pohromadě v **jedné společné kartě "Solver results"** — relevantní doplňková tlačítka pro danou
keš: např. odkaz na Geochecker, na gc-project (pokud na něj listing odkazuje), nebo na stránku se
záznamem webkamery u webcam keší.

## Map

Karta mapy zobrazuje aktuálně vybraný seznam jako značky na mapě OpenStreetMap. Každá značka
kombinuje dva údaje:

- **Symbol typu keše** uprostřed (např. „?" pro Mystery, ikonu knihy pro Traditional).
- **Barevný kroužek** kolem symbolu, jakmile existuje stav řešení: **zelená** = důvěryhodné řešení
  (jistota ≥ 90 %), **žlutá/amber** = nejisté/částečné řešení. Žádný kroužek znamená: stále
  nevyřešeno.

<figure class="gcms-shot" markdown>
![Mapa s několika zeleně orámovanými, vyřešenými mystery kešemi](../assets/screenshots/map-solved-marker.png)
<figcaption>Zeleně orámované značky „?" jsou vyřešené mystery keše</figcaption>
</figure>

U challenge keší navíc přibývá malý **odznak vpravo dole na značce** — to je splnění challenge
(stejný druhý semafor jako v seznamu, viz výše), nezávislý na stavu řešení kroužku. Při velmi
mnoha značkách blízko sebe aplikace automaticky přepne do kompaktnějšího tečkového režimu, kde
plochu vyplní barva typu keše a stav řešení je kolem ní tenký kroužek.

### Offline mapy

Přes ikonu vrstev vpravo nahoře můžeš přepínat mezi online mapou (OpenStreetMap) a vlastní
načtenou **offline mapou (soubor .map)** — praktické pro použití bez internetového připojení.
Takové soubory `.map` lze stáhnout např. pomocí **c:geo** a poté jsou k výběru i zde.

<figure class="gcms-shot" markdown>
![Výběr vrstvy mapy: Online (OSM), Offline (.map), Select Offline Map](../assets/screenshots/map-offline-selector.png)
<figcaption>Výběr online/offline mapy</figcaption>
</figure>

## Statistiky

Obrazovka statistik ti pro každý typ keše ukáže, kolik keší je celkem vyřešeno, částečně vyřešeno
a rozpoznáno jako terénní hádanka — na první pohled tak vidíš, kde ještě čeká práce a kde je
návštěva na místě stejně nevyhnutelná.

<figure class="gcms-shot" markdown>
![Tabulka statistik podle typu keše](../assets/screenshots/statistics.png)
<figcaption>Statistiky podle typu keše, s rozpisem "By solver" pod ní</figcaption>
</figure>

!!! tip "Přímo do filtrovaného seznamu"
    Klepnutím na řádek typu keše ve statistické tabulce (např. "Mystery") se dostaneš přímo do
    seznamu keší, už filtrovaného přesně na tento typ.

## Záloha a obnova

V *Setup* si můžeš zálohovat celou databázi (včetně všech nastavení) a obnovit ji na jiném
zařízení. Podrobnosti: [Nastavení a záloha](einstellungen-backup.md).
