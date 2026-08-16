# Personvern

!!! info "Erstatter ikke juridisk rådgivning"
    Denne teksten beskriver så nøyaktig som mulig hvilke data GCMystSolver behandler og hvorfor.
    Den erstatter ikke individuell juridisk rådgivning.

## Behandlingsansvarlig

Utvikler: **LoveCaching**
E-post: [LoveCaching@gcmystsolver.de](mailto:LoveCaching@gcmystsolver.de)

## Hvilke data behandler GCMystSolver?

- **Geocache-data** (tittel, koordinater, listingtekst, funnstatus, …) som du selv importerer via
  GPX/PocketQuery. Disse forblir lokale på enheten din (Room-database), med mindre du bruker en
  av de valgfrie nettverksfunksjonene nedenfor.
- **Stedsrelatert beregning, offline**: land, region og kommune/fylke bestemmes ut fra de
  importerte koordinatene lokalt på enheten, uten nettverkstilgang.
- **Høydedata**: for importerte cacher sendes koordinater til
  [OpenTopoData](https://www.opentopodata.org/) (SRTM30m-datasett) for å bestemme høyden. Dette
  skjer automatisk i bakgrunnen, uten at du trenger din egen konto/nøkkel. Årsaken er
  høyde-challenges som krever et funn over/under en bestemt høyde over havet (f.eks. "x cacher
  over 2 000 m") — uten høydedata kunne ikke appen vurdert disse challengene.
- **AI-forespørsler (valgfritt, kun hvis du aktiverer det)**: GCMystSolver har selv **ingen** fast
  innebygd AI-leverandør. I *Setup* velger og konfigurerer du selv hvilken AI-tjeneste du vil
  bruke — ferdige presets for blant annet Anthropic, OpenAI, Google Gemini, NVIDIA, DeepSeek og
  OpenRouter, eller alternativt en hvilken som helst egen OpenAI-kompatibel adresse (f.eks. en
  selvhostet **Ollama** i ditt eget lokale nettverk — da forlater dataene dine kanskje ikke ditt
  eget nettverk i det hele tatt). Først når du lagrer din egen API-nøkkel/endepunkt, sendes
  listingtekst, hint og eventuelle bilder du har lastet opp til akkurat den tjenesten du har
  valgt. Hvordan den tjenesten behandler disse dataene, reguleres av **dens egen** personvernpolicy
  — sjekk vilkårene til en leverandør før du bruker den. Som app-leverandør har vi ingen innflytelse
  over den behandlingen og mottar selv ingen kopi av forespørslene dine eller API-nøkkelen din.
  (For hjelp til å velge leverandør, se [AI-løsningsforsøk](funktionen/ki-solver.md).)
- **what3words-forespørsler (valgfritt)**: ved lagret what3words-nøkkel sendes tilsvarende
  forespørsler til what3words.
- **API-nøkler**: lagres kryptert, bundet til enheten din, valgfritt i tillegg
  passordbeskyttet for et sikkerhetskopi på tvers av enheter (se
  [Innstillinger og sikkerhetskopi](funktionen/einstellungen-backup.md)). De brukes utelukkende
  til autentisering mot AI-leverandøren du har konfigurert — ikke til noe annet.
- **Kallenavnet ditt** (for automatisk gjenkjenning av dine egne funn i listinger) forlater aldri
  enheten din.
- **Home location**: referansepunktet du legger inn i *Setup* (GC-kode, koordinater eller adresse)
  forblir utelukkende på enheten din. Det brukes til challenges som krever en minsteavstand fra
  bostedet ditt (f.eks. en "360°"-challenge med funn i hver himmelretning rundt posisjonen din).

## Hva GCMystSolver ikke gjør

- Ingen reklame, ingen sporings- eller analyse-SDK (f.eks. ingen Firebase/Crashlytics) i koden.
- Ingen deling av cache-dataene dine med tredjeparter utover de valgfrie tjenestene du selv har
  aktivert ovenfor (høydebestemmelse alltid, AI/what3words kun hvis konfigurert).

## Sikkerhetskopi

Et sikkerhetskopi du oppretter forlater enheten din kun hvis du selv eksporterer eller deler det.

## Dine rettigheter

I den grad personopplysninger behandles, har du i henhold til GDPR blant annet følgende
rettigheter overfor den behandlingsansvarlige: innsyn (art. 15), retting (art. 16), sletting
(art. 17), begrensning av behandling (art. 18), dataportabilitet (art. 20) samt rett til å
protestere (art. 21). Du har også rett til å klage til en tilsynsmyndighet for personvern,
særlig i medlemsstaten der du har din vanlige bopel.

I praksis ligger imidlertid nesten alt, slik det er nå, helt i dine egne hender, på din egen
enhet: kallenavnet ditt forlater aldri enheten, og API-nøklene dine lagres kryptert på enheten og
brukes utelukkende til autentisering mot AI-leverandøren du har valgt.

## Kontakt for personvernspørsmål

For spørsmål om personvern kan du nå oss på
[data_privacy@gcmystsolver.de](mailto:data_privacy@gcmystsolver.de).
