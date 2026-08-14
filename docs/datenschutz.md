# Datenschutzerklärung

!!! danger "Entwurf — noch nicht veröffentlichungsreif"
    Diese Seite ist ein **Platzhalter/Entwurf**, kein rechtlich geprüfter Text. Für die Anmeldung
    im Google Play Developer Program braucht es eine echte, verlinkte Datenschutzerklärung.
    Bitte vor Veröffentlichung inhaltlich prüfen (lassen) und die markierten Lücken ausfüllen —
    idealerweise mit anwaltlicher/DSGVO-fachkundiger Durchsicht, da es sich um eine App mit
    Standortdaten und optionaler KI-Anbindung handelt.

## Verantwortlicher

`TODO: Name, Anschrift, E-Mail des Verantwortlichen (bei einer Privatperson ggf. nur E-Mail, je
nach Rechtslage prüfen)`

## Welche Daten verarbeitet GCMystSolver?

- **Geocache-Daten** (Titel, Koordinaten, Listing-Text, Fundstatus, …), die du selbst per
  GPX/PocketQuery importierst. Diese verbleiben lokal auf deinem Gerät (Room-Datenbank), es sei
  denn, du nutzt eine der unten genannten optionalen Netzwerkfunktionen.
- **Standortbezogene Berechnung offline**: Land/Bundesland/Landkreis werden aus den importierten
  Koordinaten lokal auf dem Gerät bestimmt, ohne Netzwerkzugriff.
- **Höhendaten**: für importierte Caches werden Koordinaten zur Höhenermittlung an
  [OpenTopoData](https://www.opentopodata.org/) (SRTM30m-Datensatz) übertragen. Das läuft
  automatisch im Hintergrund, ohne dass du dafür einen eigenen Account/Key brauchst.
- **KI-Anfragen (optional, nur falls von dir aktiviert)**: GCMystSolver bringt selbst **keinen**
  fest verdrahteten KI-Anbieter mit. In *Setup* wählst und konfigurierst du selbst, welchen
  KI-Dienst du nutzen möchtest — vorbereitete Presets für u. a. Anthropic, OpenAI, Google Gemini,
  NVIDIA, DeepSeek und OpenRouter, alternativ jede beliebige eigene OpenAI-kompatible Adresse
  (z. B. ein selbst betriebenes **Ollama** lokal im eigenen Netzwerk — dann verlassen deine Daten
  ggf. gar nicht dein eigenes Netz). Erst wenn du einen eigenen API-Key/Endpunkt hinterlegst,
  werden Listing-Text, Hinweis und ggf. von dir hochgeladene Fotos an genau diesen von dir
  gewählten Dienst übertragen. Welche Daten dieser Dienst wie verarbeitet, regelt dessen **eigene**
  Datenschutzerklärung — bitte vor der Nutzung eines Anbieters dessen Bedingungen prüfen. Wir als
  App-Anbieter haben auf diese Verarbeitung keinen Einfluss und erhalten selbst keine Kopie deiner
  Anfragen oder deines API-Keys.
- **what3words-Anfragen (optional)**: bei hinterlegtem what3words-Key werden entsprechende Anfragen
  an what3words gestellt.
- **API-Keys**: werden geräte-gebunden verschlüsselt gespeichert, optional zusätzlich
  passwortgeschützt für ein geräteübergreifendes Backup (siehe
  [Einstellungen & Backup](funktionen/einstellungen-backup.md)).

## Was GCMystSolver nicht tut

- Keine Werbung, kein Tracking- oder Analytics-SDK (z. B. kein Firebase/Crashlytics) im Code.
- Keine Weitergabe deiner Cache-Daten an Dritte außer den von dir selbst aktivierten,
  oben genannten optionalen Diensten (Höhenermittlung immer, KI/what3words nur wenn konfiguriert).

## Backup

Ein von dir erstelltes Backup verlässt dein Gerät nur, wenn du es selbst exportierst/teilst.

## Deine Rechte

Soweit personenbezogene Daten verarbeitet werden, hast du nach der DSGVO insbesondere folgende
Rechte gegenüber dem Verantwortlichen: Auskunft (Art. 15), Berichtigung (Art. 16), Löschung
(Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
Widerspruch (Art. 21). Außerdem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde,
insbesondere in dem Mitgliedstaat deines gewöhnlichen Aufenthaltsorts.

`TODO (Stefan): diesen Abschnitt vor Veröffentlichung von einer sachkundigen Stelle gegenprüfen
lassen — die obige Aufzählung ist eine gängige Standardformulierung, aber keine
Rechtsberatung.`

## Kontakt für Datenschutzfragen

`TODO (Stefan): Kontakt-E-Mail hier eintragen — dieselbe wie unter "Verantwortlicher" oben, oder
eine eigene datenschutz@…-Adresse.`
