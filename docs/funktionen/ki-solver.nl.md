# AI-oplospoging

Vindt geen van de [automatische oplossers](solver.md) iets passends en is de puzzel geen herkende
veldpuzzel, dan kan GCMystSolver optioneel een gekoppelde AI raadplegen.

## Vereiste

Je hebt een eigen API-key van een ondersteunde AI-provider nodig, die je in *Setup* opslaat.
Zonder opgeslagen key werkt de app gewoon door — alleen dan zonder het AI-onderdeel, puur met de
automatische oplossers.

## Aanbeveling: gratis starten met NVIDIA of Google Gemini

GCMystSolver bevat zelf geen AI-toegang — je hebt je eigen API-key nodig. Twee providers zijn
bijzonder geschikt om mee te beginnen, omdat ze een **gratis gebruikscontingent zonder
creditcard** aanbieden:

- **[Google Gemini](https://aistudio.google.com/)** (Google AI Studio): met een Google-account in
  een paar klikken een gratis API-key aanmaken ("Get API key"). De gratis laag is ruim voldoende
  voor normaal gebruik van de app.
- **[NVIDIA](https://build.nvidia.com/)** (NVIDIA API-catalogus): met een gratis account krijg je
  toegang tot talrijke gehoste modellen via een OpenAI-compatibele interface — eveneens zonder
  creditcard te gebruiken.

Beide staan al als kant-en-klare **presets** in GCMystSolver (zie de stap-voor-stap-handleiding
hieronder) — je hoeft dus geen basis-URL met de hand op te zoeken.

!!! tip "Meerdere modellen toevoegen"
    Omdat de app bij een mislukte poging automatisch doorschakelt naar het volgende opgeslagen
    model (zie [Modelrotatie](#modelrotatie-in-plaats-van-een-vast-back-upmodel) hieronder), loont
    het om bijvoorbeeld zowel een Gemini- als een NVIDIA-model toe te voegen — raakt bij de één het
    contingent op, dan neemt de andere provider automatisch het over.

### Stap voor stap

1. Genereer en kopieer een gratis API-key op [aistudio.google.com](https://aistudio.google.com/)
   of [build.nvidia.com](https://build.nvidia.com/).
2. Ga in GCMystSolver naar **Setup** en zet de schakelaar **"AI solver"** aan.
3. In het gedeelte **"Add model"**:
      - Kies onder **"Provider"** *Google Gemini* of *NVIDIA* (Base URL wordt automatisch
        ingevuld).
      - Plak de gekopieerde key in het veld **"API key"**.
      - Tik op **"Fetch available models"** — de app laadt de lijst met beschikbare modellen.
      - Kies onder **"Model"** een model.
      - Sla op met **"Save model"**.
4. Het opgeslagen model verschijnt nu onder **"Saved models"** en wordt automatisch als
   **"Main model"** gebruikt, mits er nog geen was ingesteld.
5. Optioneel: herhaal stap 3 voor een tweede provider — beide komen dan in de fallback-volgorde
   terecht.

![Setup: AI solver inschakelen en een model toevoegen](../assets/screenshots/setup-ai-solver.png)

![Setup: providerkeuze met NVIDIA/Google Gemini presets](../assets/screenshots/setup-add-model.png)

## Modelrotatie in plaats van een vast back-upmodel

Je slaat een lijst met eigen modellen op in *Setup*. Mislukt een aanvraag (bijv. omdat een
provider overbelast is), dan probeert de app automatisch het volgende model uit je lijst, zonder
te vragen. Pas als **de hele lijst** voor één aanvraag zonder succes is doorlopen, verschijnt een
melding met de opties *Cancel* of *Continue*.

Via *Setup → Test models* kun je elk opgeslagen model afzonderlijk testen.

## Kosten grof inschatten

De setup-assistent toont een grove inschatting van het tokenbudget: per cache die de AI daadwerkelijk
probeert, is dat ongeveer 900–1.000 tokens; voor een hele PocketQuery met ~1.000 caches doorgaans
enkele tienduizenden tot rond de 200.000 tokens — afhankelijk van hoeveel caches daadwerkelijk tot
de AI-fase doorstromen (de automatische oplossers onderscheppen het merendeel daarvoor al).

## Transparantie van de oplossing

Een door de AI voorgestelde oplossing wordt altijd samen met een onderbouwing getoond en als
**onzeker (geel)** gemarkeerd, totdat je hem bevestigt of corrigeert — hij overschrijft nooit
automatisch een reeds als betrouwbaar gemarkeerde oplossing.
