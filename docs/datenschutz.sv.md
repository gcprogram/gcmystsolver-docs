# Integritetspolicy

!!! info "Ersätter inte juridisk rådgivning"
    Den här texten beskriver så noggrant som möjligt vilka data GCMystSolver behandlar och
    varför. Den ersätter inte individuell juridisk rådgivning.

## Personuppgiftsansvarig

Utvecklare: **LoveCaching**
E-post: [LoveCaching@gcmystsolver.de](mailto:LoveCaching@gcmystsolver.de)

## Vilka data behandlar GCMystSolver?

- **Geocache-data** (titel, koordinater, listningstext, fyndstatus, …) som du själv importerar via
  GPX/PocketQuery. Dessa förblir lokala på din enhet (Room-databas), om du inte använder någon av
  de valfria nätverksfunktionerna nedan.
- **Platsrelaterad beräkning, offline**: land, region och kommun/län bestäms utifrån de
  importerade koordinaterna lokalt på enheten, utan nätverksåtkomst.
- **Höjddata**: för importerade cacher skickas koordinater till
  [OpenTopoData](https://www.opentopodata.org/) (SRTM30m-dataset) för att bestämma höjden. Detta
  sker automatiskt i bakgrunden, utan att du behöver ett eget konto/nyckel. Anledningen är
  höjd-challenges som kräver ett fynd över/under en viss höjd över havet (t.ex. "x cacher över
  2 000 m") — utan höjddata skulle appen inte kunna bedöma dessa challenges.
- **AI-förfrågningar (valfritt, endast om du aktiverar det)**: GCMystSolver har själv **ingen**
  fast inbyggd AI-leverantör. I *Setup* väljer och konfigurerar du själv vilken AI-tjänst du vill
  använda — färdiga presets för bland annat Anthropic, OpenAI, Google Gemini, NVIDIA, DeepSeek och
  OpenRouter, eller alternativt vilken egen OpenAI-kompatibel adress som helst (t.ex. en egen
  hostad **Ollama** i ditt lokala nätverk — då lämnar dina data eventuellt inte ditt eget nätverk
  alls). Först när du sparar din egen API-nyckel/endpoint skickas listningstext, ledtråd och
  eventuella foton du laddat upp till precis den tjänst du valt. Hur den tjänsten hanterar
  uppgifterna regleras av **dess egen** integritetspolicy — kontrollera en leverantörs villkor
  innan du använder den. Som app-leverantör har vi inget inflytande över den behandlingen och får
  själva ingen kopia av dina förfrågningar eller din API-nyckel. (För hjälp att välja leverantör,
  se [AI-lösningsförsök](funktionen/ki-solver.md).)
- **what3words-förfrågningar (valfritt)**: vid sparad what3words-nyckel skickas motsvarande
  förfrågningar till what3words.
- **API-nycklar**: sparas krypterat, bundna till din enhet, valfritt dessutom lösenordsskyddade
  för en säkerhetskopia mellan enheter (se
  [Inställningar och säkerhetskopiering](funktionen/einstellungen-backup.md)). De används
  uteslutande för autentisering mot den AI-leverantör du konfigurerat — inte för något annat.
- **Ditt smeknamn** (för automatisk identifiering av dina egna fynd i listningar) lämnar aldrig
  din enhet.
- **Home location**: referenspunkten du anger i *Setup* (GC-kod, koordinater eller adress) förblir
  uteslutande på din enhet. Den används för challenges som kräver ett minsta avstånd till din
  hemvist (t.ex. en "360°"-challenge med fynd i varje väderstreck runt din plats).

## Vad GCMystSolver inte gör

- Ingen reklam, ingen spårnings- eller analys-SDK (t.ex. inget Firebase/Crashlytics) i koden.
- Ingen delning av dina cache-data med tredje part utöver de valfria tjänster du själv aktiverat
  ovan (höjdhämtning alltid, AI/what3words endast om konfigurerat).

## Säkerhetskopiering

En säkerhetskopia du skapar lämnar din enhet endast om du själv exporterar eller delar den.

## Dina rättigheter

I den mån personuppgifter behandlas har du enligt GDPR i synnerhet följande rättigheter gentemot
den personuppgiftsansvarige: tillgång (art. 15), rättelse (art. 16), radering (art. 17),
begränsning av behandling (art. 18), dataportabilitet (art. 20) samt invändning (art. 21). Du har
även rätt att lämna in ett klagomål till en tillsynsmyndighet för dataskydd, i synnerhet i den
medlemsstat där du har din hemvist.

I praktiken ligger dock enligt nuvarande läge nästan allt helt i dina egna händer, på din egen
enhet: ditt smeknamn lämnar aldrig enheten, och dina API-nycklar sparas krypterat på enheten och
används uteslutande för autentisering mot den AI-leverantör du valt.

## Kontakt för integritetsfrågor

För frågor om integritet når du oss på
[data_privacy@gcmystsolver.de](mailto:data_privacy@gcmystsolver.de).
