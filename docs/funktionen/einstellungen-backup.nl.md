# Instellingen & back-up

## AI-koppeling

In *Setup* sla je je eigen API-key van een ondersteunde AI-provider op, plus een lijst met
modellen. Deze lijst dient tegelijk als automatische fallback-volgorde (zie
[AI-oplospoging](ki-solver.md)) — er is geen aparte instelling voor een "back-upmodel" meer.
Via **"Test models"** kun je elk opgeslagen model afzonderlijk testen.

Voor een gratis eerste API-key, zie de
[NVIDIA/Google Gemini-aanbeveling](ki-solver.md#aanbeveling-gratis-starten-met-nvidia-of-google-gemini).

## what3words

Voor de herkenning van what3words-coördinaten kun je optioneel je eigen what3words-API-key
opslaan.

## Back-up & herstel

GCMystSolver kan je volledige database plus instellingen een back-up geven. Daarbij zijn er
tegelijk twee beschermingsniveaus:

- **Aan het apparaat gebonden back-up**: automatisch, zonder wachtwoord — werkt betrouwbaar
  zolang je op **hetzelfde apparaat** herstelt (het meest voorkomende geval, bijv. na een
  herinstallatie).
- **Met wachtwoord beveiligde back-up** *(optioneel)*: nodig als je een back-up op een **ander**
  apparaat wilt herstellen — alleen daarmee kunnen API-keys apparaat-overstijgend worden
  meegenomen.

Herstel je een puur aan het apparaat gebonden back-up op een vreemd apparaat, dan worden je
database en alle niet-geheime instellingen toch volledig hersteld — alleen je API-keys blijven
leeg en moeten eenmalig opnieuw worden ingevoerd (de app wijst je hier duidelijk op).

## Opgeslagen oplossingen resetten

**"Clear stored solutions"** verwijdert gericht alle opgeslagen oplossingen van een bepaald
oplossertype en berekent de betreffende notities opnieuw — handig na een app-update die een
oplosser heeft gecorrigeerd, zodat er geen verouderde foute oplossingen in je database blijven
staan.
