# Zásady ochrany osobních údajů

!!! info "Nenahrazuje právní poradenství"
    Tento text co nejpřesněji popisuje, jaká data GCMystSolver zpracovává a proč. Nenahrazuje
    individuální právní poradenství.

## Správce údajů

Vývojář: **LoveCaching**
E-mail: [LoveCaching@gcmystsolver.de](mailto:LoveCaching@gcmystsolver.de)

## Jaká data GCMystSolver zpracovává?

- **Data o geokešich** (název, souřadnice, text listingu, stav nálezu, …), která sám/sama
  importuješ přes GPX/PocketQuery. Ta zůstávají lokálně v tvém zařízení (databáze Room), pokud
  nevyužiješ některou z níže uvedených volitelných síťových funkcí.
- **Výpočet podle polohy, offline**: země, kraj/region a okres se určují z importovaných
  souřadnic lokálně v zařízení, bez síťového přístupu.
- **Data o nadmořské výšce**: u importovaných keší se souřadnice odesílají do
  [OpenTopoData](https://www.opentopodata.org/) (dataset SRTM30m) kvůli určení nadmořské výšky.
  Děje se to automaticky na pozadí, aniž bys k tomu potřeboval/a vlastní účet/klíč. Důvodem jsou
  výškové challenge, které vyžadují nález nad/pod určitou nadmořskou výškou (např. „x keší nad
  2 000 m") — bez dat o nadmořské výšce by aplikace tyto challenge nemohla vyhodnotit.
- **Dotazy na AI (volitelné, jen pokud je sám/sama aktivuješ)**: GCMystSolver sám o sobě
  **neobsahuje** žádného pevně zabudovaného poskytovatele AI. V *Setup* si sám/sama vybereš a
  nastavíš, jakou AI službu chceš použít — hotová přednastavení mj. pro Anthropic, OpenAI, Google
  Gemini, NVIDIA, DeepSeek a OpenRouter, případně jakoukoli vlastní adresu kompatibilní s OpenAI
  (např. vlastní hostovaný **Ollama** ve tvé lokální síti — pak tvá data případně tvou vlastní síť
  vůbec neopustí). Teprve jakmile uložíš vlastní API klíč/endpoint, odesílá se text listingu,
  hint a případně nahrané fotky přesně té službě, kterou sis vybral/a. Jak s daty tato služba
  nakládá, se řídí **jejími vlastními** zásadami ochrany osobních údajů — před použitím
  poskytovatele si prosím ověř jeho podmínky. My jako poskytovatel aplikace nemáme na toto
  zpracování žádný vliv a sami nedostáváme kopii tvých dotazů ani tvého API klíče. (Nápovědu k
  výběru poskytovatele najdeš v [Řešení pomocí AI](funktionen/ki-solver.md).)
- **Dotazy na what3words (volitelné)**: při uloženém klíči what3words se příslušné dotazy odesílají
  na what3words.
- **API klíče**: ukládají se šifrovaně, vázané na tvé zařízení, volitelně navíc chráněné heslem
  pro zálohu napříč zařízeními (viz [Nastavení a záloha](funktionen/einstellungen-backup.md)).
  Používají se výhradně k autentizaci vůči tebou nastavenému poskytovateli AI — k ničemu jinému.
- **Tvůj přezdívkový název (nickname)** (pro automatické rozpoznání tvých vlastních nálezů v
  listinzích) tvé zařízení neopouští.
- **Home location**: referenční bod, který zadáš v *Setup* (GC kód, souřadnice nebo adresa),
  zůstává výhradně na tvém zařízení. Používá se pro challenge, které vyžadují minimální vzdálenost
  od tvého bydliště (např. challenge „360°" s nálezy v každém světovém směru kolem tvé polohy).

## Co GCMystSolver nedělá

- Žádná reklama, žádné sledovací nebo analytické SDK (např. žádný Firebase/Crashlytics) v kódu.
- Žádné předávání tvých dat o keších třetím stranám mimo výše uvedené volitelné služby, které
  sám/sama aktivuješ (určení nadmořské výšky vždy, AI/what3words jen pokud je nastaveno).

## Záloha

Tebou vytvořená záloha opustí tvé zařízení jen tehdy, pokud ji sám/sama exportuješ nebo sdílíš.

## Tvá práva

Pokud jsou zpracovávány osobní údaje, máš podle GDPR vůči správci údajů zejména následující práva:
právo na přístup (čl. 15), opravu (čl. 16), výmaz (čl. 17), omezení zpracování (čl. 18),
přenositelnost údajů (čl. 20) a vznést námitku (čl. 21). Dále máš právo podat stížnost u dozorového
úřadu pro ochranu osobních údajů, zejména v členském státě tvého obvyklého bydliště.

V praxi je ale podle současného stavu téměř vše plně ve tvých rukou, na tvém vlastním zařízení:
tvůj nickname zařízení neopouští a tvé API klíče se ukládají šifrovaně v zařízení a používají se
výhradně k autentizaci vůči tebou zvolenému poskytovateli AI.

## Kontakt pro dotazy k ochraně osobních údajů

S dotazy k ochraně osobních údajů nás můžeš kontaktovat na
[data_privacy@gcmystsolver.de](mailto:data_privacy@gcmystsolver.de).
