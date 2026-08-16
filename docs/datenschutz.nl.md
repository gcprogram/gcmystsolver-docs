# Privacybeleid

!!! info "Geen vervanging voor juridisch advies"
    Deze verklaring beschrijft zo nauwkeurig mogelijk welke gegevens GCMystSolver verwerkt en
    waarom. Ze vervangt geen individueel juridisch advies.

## Verwerkingsverantwoordelijke

Ontwikkelaar: **LoveCaching**
E-mail: [LoveCaching@gcmystsolver.de](mailto:LoveCaching@gcmystsolver.de)

## Welke gegevens verwerkt GCMystSolver?

- **Geocache-gegevens** (titel, coördinaten, listing-tekst, vondststatus, …) die je zelf via
  GPX/PocketQuery importeert. Deze blijven lokaal op je apparaat (Room-database), tenzij je een
  van de hieronder genoemde optionele netwerkfuncties gebruikt.
- **Locatiegebonden berekening, offline**: land, regio en gemeente/provincie worden uit de
  geïmporteerde coördinaten lokaal op het apparaat bepaald, zonder netwerktoegang.
- **Hoogtegegevens**: voor geïmporteerde caches worden coördinaten naar
  [OpenTopoData](https://www.opentopodata.org/) (SRTM30m-dataset) gestuurd om de hoogte te
  bepalen. Dit gebeurt automatisch op de achtergrond, zonder dat je daarvoor een eigen
  account/key nodig hebt. Reden hiervoor zijn hoogte-challenges die een vondst boven/onder een
  bepaalde hoogte boven zeeniveau vereisen (bijv. "x caches boven 2.000 m") — zonder
  hoogtegegevens zou de app deze challenges niet kunnen beoordelen.
- **AI-verzoeken (optioneel, alleen als door jou geactiveerd)**: GCMystSolver bevat zelf **geen**
  vast ingebouwde AI-provider. In *Setup* kies en configureer je zelf welke AI-dienst je wilt
  gebruiken — kant-en-klare presets voor onder meer Anthropic, OpenAI, Google Gemini, NVIDIA,
  DeepSeek en OpenRouter, of anders elk gewenst OpenAI-compatibel adres van jezelf (bijv. een
  zelf gehoste **Ollama** in je eigen lokale netwerk — dan verlaten je gegevens mogelijk je eigen
  netwerk helemaal niet). Pas zodra je een eigen API-key/endpoint opslaat, worden listing-tekst,
  hint en eventueel door jou geüploade foto's naar precies die door jou gekozen dienst verstuurd.
  Hoe die dienst met de gegevens omgaat, wordt geregeld door **zijn eigen** privacybeleid —
  controleer voor gebruik van een provider diens voorwaarden. Als app-aanbieder hebben wij geen
  invloed op die verwerking en ontvangen we zelf geen kopie van je verzoeken of je API-key. (Voor
  hulp bij het kiezen van een provider, zie [AI-oplospoging](funktionen/ki-solver.md).)
- **what3words-verzoeken (optioneel)**: bij een opgeslagen what3words-key worden bijbehorende
  verzoeken naar what3words gestuurd.
- **API-keys**: versleuteld opgeslagen, gebonden aan je apparaat, optioneel extra beveiligd met
  een wachtwoord voor een back-up over meerdere apparaten (zie
  [Instellingen & back-up](funktionen/einstellungen-backup.md)). Ze worden uitsluitend gebruikt
  om je te authenticeren bij de door jou geconfigureerde AI-provider — voor niets anders.
- **Je nickname** (voor het automatisch herkennen van je eigen vondsten in listings) verlaat je
  apparaat niet.
- **Home location**: het referentiepunt dat je in *Setup* invoert (GC-code, coördinaten of adres)
  blijft uitsluitend op je apparaat. Het wordt gebruikt voor challenges die een minimale afstand
  tot je woonplaats vereisen (bijv. een "360°"-challenge met vondsten in elke windrichting rond je
  locatie).

## Wat GCMystSolver niet doet

- Geen reclame, geen tracking- of analytics-SDK (bijv. geen Firebase/Crashlytics) in de code.
- Geen doorgifte van je cache-gegevens aan derden, behalve de hierboven genoemde optionele
  diensten die je zelf hebt geactiveerd (hoogtebepaling altijd, AI/what3words alleen indien
  geconfigureerd).

## Back-up

Een door jou gemaakte back-up verlaat je apparaat alleen als je deze zelf exporteert of deelt.

## Jouw rechten

Voor zover persoonsgegevens worden verwerkt, heb je volgens de AVG onder meer de volgende
rechten tegenover de verwerkingsverantwoordelijke: inzage (art. 15), rectificatie (art. 16),
verwijdering (art. 17), beperking van de verwerking (art. 18), overdraagbaarheid van gegevens
(art. 20) en bezwaar (art. 21). Daarnaast heb je recht op een klacht bij een
gegevensbeschermingsautoriteit, met name in de lidstaat van je gewone verblijfplaats.

In de praktijk ligt naar de huidige stand echter bijna alles volledig in jouw eigen handen, op je
eigen apparaat: je nickname verlaat het apparaat niet, en je API-keys worden versleuteld op het
apparaat opgeslagen en uitsluitend gebruikt om je te authenticeren bij de door jou gekozen
AI-provider.

## Contact voor privacyvragen

Voor vragen over privacy kun je ons bereiken via
[data_privacy@gcmystsolver.de](mailto:data_privacy@gcmystsolver.de).
