# AI-løsningsforsøk

Hvis ingen av de [automatiske løserne](solver.md) finner noe passende og gåten ikke er en
gjenkjent feltgåte, kan GCMystSolver eventuelt rådføre seg med en tilkoblet AI.

## Forutsetning

Du trenger din egen API-nøkkel fra en støttet AI-leverandør, som du lagrer i *Setup*. Uten en
lagret nøkkel fungerer appen likevel — bare uten AI-komponenten, kun med de automatiske løserne.

## Anbefaling: start gratis med NVIDIA eller Google Gemini

GCMystSolver har selv ingen innebygd AI-tilgang — du trenger din egen API-nøkkel. To leverandører
egner seg spesielt godt for å komme i gang, fordi de tilbyr en **gratis brukskvote uten
kredittkort**:

- **[Google Gemini](https://aistudio.google.com/)** (Google AI Studio): generer en gratis
  API-nøkkel på noen få klikk med en Google-konto ("Get API key"). Gratisnivået er mer enn nok
  for normal bruk av appen.
- **[NVIDIA](https://build.nvidia.com/)** (NVIDIA API-katalog): med en gratis konto får du tilgang
  til mange verts-modeller via et OpenAI-kompatibelt grensesnitt — også brukbart uten
  kredittkort.

Begge er allerede lagt inn som ferdige **presets** i GCMystSolver (se steg-for-steg-guiden
nedenfor) — du trenger altså ikke å lete opp en grunn-URL for hånd.

!!! tip "Legg til flere enn én modell"
    Siden appen automatisk går videre til neste lagrede modell ved feil (se
    [Modellrotasjon](#modellrotasjon-i-stedet-for-en-fast-reservemodell) nedenfor), lønner det
    seg å legge til for eksempel både en Gemini- og en NVIDIA-modell — går kvoten til den ene
    tom, tar den andre leverandøren automatisk over.

### Steg for steg

1. Generer og kopier en gratis API-nøkkel på [aistudio.google.com](https://aistudio.google.com/)
   eller [build.nvidia.com](https://build.nvidia.com/).
2. Gå i GCMystSolver til **Setup** og slå på bryteren **"AI solver"**.
3. I seksjonen **"Add model"**:
      - Velg under **"Provider"** *Google Gemini* eller *NVIDIA* (Base URL fylles inn
        automatisk).
      - Lim inn den kopierte nøkkelen i feltet **"API key"**.
      - Trykk på **"Fetch available models"** — appen laster listen over tilgjengelige modeller.
      - Velg en modell under **"Model"**.
      - Lagre med **"Save model"**.
4. Den lagrede modellen vises nå under **"Saved models"** og brukes automatisk som
   **"Main model"**, forutsatt at ingen allerede var satt.
5. Valgfritt: gjenta steg 3 for en annen leverandør — begge havner da i fallback-rekkefølgen.

<figure class="gcms-shot" markdown>
![Setup: aktivere AI solver og legge til en modell](../assets/screenshots/setup-ai-solver.png)
<figcaption>Aktivere AI solver, modeller og grenser</figcaption>
</figure>

<figure class="gcms-shot" markdown>
![Setup: leverandørvalg med NVIDIA/Google Gemini-presets](../assets/screenshots/setup-add-model.png)
<figcaption>Leverandørvalg i "Add model"-dialogen</figcaption>
</figure>

## Modellrotasjon i stedet for en fast reservemodell

Du lagrer en liste med egne modeller i *Setup*. Feiler en forespørsel (f.eks. fordi en leverandør
er overbelastet), prøver appen automatisk neste modell fra listen din, uten å spørre. Først når
**hele listen** er prøvd uten hell for én enkelt forespørsel, vises en melding med alternativene
*Cancel* eller *Continue*.

Via *Setup → Test models* kan du teste hver lagrede modell individuelt.

## Grovt kostnadsanslag

Oppsettveiviseren viser et grovt anslag for tokenbudsjettet: rundt 900–1 000 tokens per cache som
AI-en faktisk forsøker, for en hel PocketQuery med ~1 000 cacher typisk flere titusener opp til
rundt 200 000 tokens — avhengig av hvor mange cacher som faktisk når frem til AI-trinnet (de
automatiske løserne fanger opp de fleste før det).

## Åpenhet om løsningen

Et AI-foreslått løsningsforslag vises alltid sammen med begrunnelsen og merkes som
**usikkert (gult)** til du bekrefter eller retter det — det overskriver aldri automatisk en
løsning som allerede er merket som pålitelig.
