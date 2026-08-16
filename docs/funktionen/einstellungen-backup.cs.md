# Nastavení a záloha

## Připojení AI

V *Setup* uložíš vlastní API klíč od podporovaného poskytovatele AI a seznam modelů. Tento seznam
zároveň slouží jako automatické pořadí náhradního řešení (viz [Řešení pomocí AI](ki-solver.md)) —
samostatné nastavení „záložního modelu" už neexistuje. Přes **"Test models"** můžeš každý uložený
model otestovat jednotlivě.

Pro bezplatné získání prvního API klíče viz
[doporučení NVIDIA/Google Gemini](ki-solver.md#doporuceni-zacni-zdarma-s-nvidia-nebo-google-gemini).

## what3words

Pro rozpoznávání souřadnic what3words můžeš volitelně uložit vlastní API klíč what3words.

## Záloha a obnova

GCMystSolver umí zálohovat celou tvou databázi i nastavení. Existují přitom současně dvě úrovně
ochrany:

- **Záloha vázaná na zařízení**: automatická, bez hesla — funguje spolehlivě, pokud obnovuješ na
  **stejném zařízení** (nejčastější případ, např. po přeinstalaci).
- **Záloha chráněná heslem** *(volitelné)*: nutná, pokud chceš zálohu obnovit na **jiném**
  zařízení — jen tak lze API klíče přenést mezi zařízeními.

Obnovíš-li čistě na zařízení vázanou zálohu na cizím zařízení, tvá databáze i všechna netajná
nastavení se přesto plně obnoví — jen tvé API klíče zůstanou prázdné a je potřeba je jednou
znovu zadat (aplikace tě na to jasně upozorní).

## Reset uložených řešení

**"Clear stored solutions"** cíleně smaže všechna uložená řešení určitého typu řešiče a přepočítá
příslušné poznámky — praktické po aktualizaci aplikace, která opravila nějaký řešič, aby v tvé
databázi nezůstala zastaralá chybná řešení.
