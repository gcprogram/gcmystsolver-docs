# AI-lösningsförsök

Om ingen av de [automatiska lösarna](solver.md) hittar något passande och pusslet inte är ett
identifierat fältpussel, kan GCMystSolver valfritt konsultera en ansluten AI.

## Förutsättning

Du behöver din egen API-nyckel från en AI-leverantör som stöds, som du sparar i *Setup*. Utan en
sparad nyckel fungerar appen ändå — bara utan AI-komponenten, enbart med de automatiska lösarna.

## Rekommendation: börja gratis med NVIDIA eller Google Gemini

GCMystSolver har själv ingen inbyggd AI-åtkomst — du behöver din egen API-nyckel. Två leverantörer
passar särskilt bra för att komma igång, eftersom de erbjuder en **gratis användningskvot utan
kreditkort**:

- **[Google Gemini](https://aistudio.google.com/)** (Google AI Studio): generera en gratis
  API-nyckel på några klick med ett Google-konto ("Get API key"). Gratisnivån räcker gott och väl
  för normal användning av appen.
- **[NVIDIA](https://build.nvidia.com/)** (NVIDIA API-katalog): med ett gratiskonto får du tillgång
  till många värdbaserade modeller via ett OpenAI-kompatibelt gränssnitt — också användbart utan
  kreditkort.

Båda är redan inlagda som färdiga **presets** i GCMystSolver (se steg-för-steg-guiden nedan) —
du behöver alltså inte leta upp en bas-URL för hand.

!!! tip "Lägg till fler än en modell"
    Eftersom appen automatiskt går vidare till nästa sparade modell vid ett misslyckande (se
    [Modellrotation](#modellrotation-i-stallet-for-en-fast-reservmodell) nedan), lönar det sig att
    till exempel lägga till både en Gemini- och en NVIDIA-modell — tar kvoten för den ena slut tar
    den andra leverantören automatiskt över.

### Steg för steg

1. Skapa och kopiera en gratis API-nyckel på [aistudio.google.com](https://aistudio.google.com/)
   eller [build.nvidia.com](https://build.nvidia.com/).
2. Gå i GCMystSolver till **Setup** och slå på strömbrytaren **"AI solver"**.
3. I avsnittet **"Add model"**:
      - Välj under **"Provider"** *Google Gemini* eller *NVIDIA* (Base URL fylls i automatiskt).
      - Klistra in den kopierade nyckeln i fältet **"API key"**.
      - Tryck på **"Fetch available models"** — appen hämtar listan över tillgängliga modeller.
      - Välj en modell under **"Model"**.
      - Spara med **"Save model"**.
4. Den sparade modellen visas nu under **"Saved models"** och används automatiskt som
   **"Main model"**, förutsatt att ingen redan var inställd.
5. Valfritt: upprepa steg 3 för en andra leverantör — båda hamnar då i fallback-ordningen.

<figure class="gcms-shot" markdown>
![Setup: aktivera AI solver och lägga till en modell](../assets/screenshots/setup-ai-solver.png)
<figcaption>Aktivera AI solver, modeller och gränser</figcaption>
</figure>

<figure class="gcms-shot" markdown>
![Setup: leverantörsval med NVIDIA/Google Gemini-presets](../assets/screenshots/setup-add-model.png)
<figcaption>Leverantörsval i dialogrutan "Add model"</figcaption>
</figure>

## Modellrotation i stället för en fast reservmodell

Du sparar en lista med egna modeller i *Setup*. Misslyckas en förfrågan (t.ex. för att en
leverantör är överbelastad), provar appen automatiskt nästa modell i din lista, utan att fråga.
Först när **hela listan** har provats utan framgång för en enda förfrågan visas ett meddelande
med alternativen *Cancel* eller *Continue*.

Via *Setup → Test models* kan du testa varje sparad modell individuellt.

## Grov kostnadsuppskattning

Installationsguiden visar en grov uppskattning av tokenbudgeten: ungefär 900–1 000 tokens per
cache som AI:n faktiskt försöker lösa, för en hel PocketQuery med ~1 000 cacher typiskt flera
tiotusental upp till omkring 200 000 tokens — beroende på hur många cacher som faktiskt når fram
till AI-steget (de automatiska lösarna fångar upp de flesta innan dess).

## Transparens i lösningen

Ett AI-föreslaget lösningsförslag visas alltid tillsammans med sin motivering och markeras som
**osäkert (gult)** tills du bekräftar eller korrigerar det — det skriver aldrig automatiskt över
en lösning som redan är markerad som pålitlig.
