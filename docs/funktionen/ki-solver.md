# KI-Lösungsversuch

Findet keiner der [automatischen Solver](solver.md) etwas Passendes und das Rätsel ist kein
erkanntes Feld-Rätsel, kann GCMystSolver optional eine angebundene KI zurate ziehen.

## Voraussetzung

Du brauchst einen eigenen API-Key eines unterstützten KI-Anbieters, den du in *Setup* hinterlegst.
Ohne hinterlegten Key funktioniert die App weiterhin — nur eben ohne den KI-Baustein, rein mit den
automatischen Solvern.

## Empfehlung: kostenlos starten mit NVIDIA oder Google Gemini

GCMystSolver bringt selbst keinen KI-Zugang mit — du brauchst einen eigenen API-Key. Zwei Anbieter
eignen sich besonders gut für den Einstieg, weil sie ein **kostenloses Nutzungskontingent ohne
Kreditkarte** anbieten:

- **[Google Gemini](https://aistudio.google.com/)** (Google AI Studio): Mit einem Google-Konto in
  wenigen Klicks einen kostenlosen API-Key erzeugen ("Get API key"). Der kostenlose Tarif reicht
  für den normalen Gebrauch der App gut aus.
- **[NVIDIA](https://build.nvidia.com/)** (NVIDIA API-Katalog): Mit einem kostenlosen Account
  erhältst du Zugriff auf zahlreiche gehostete Modelle über eine OpenAI-kompatible Schnittstelle —
  ebenfalls ohne Kreditkarte nutzbar.

Beide sind in GCMystSolver als fertige **Presets** hinterlegt (siehe Schritt-für-Schritt-Anleitung
unten) — du musst also keine Basis-URL von Hand heraussuchen.

!!! tip "Mehrere Modelle eintragen"
    Da die App bei einem Fehlversuch automatisch zum nächsten gespeicherten Modell weiterspringt
    (siehe [Modell-Rotation](#modell-rotation-statt-starrem-backup-modell) unten), lohnt es sich,
    z. B. sowohl ein Gemini- als auch ein NVIDIA-Modell einzutragen — dann übernimmt bei einem
    ausgeschöpften Kontingent automatisch der andere Anbieter.

### Schritt für Schritt

1. Auf [aistudio.google.com](https://aistudio.google.com/) bzw. [build.nvidia.com](https://build.nvidia.com/)
   einen kostenlosen API-Key erzeugen und kopieren.
2. In GCMystSolver zu **Setup** wechseln und den Schalter **"AI solver"** aktivieren.
3. Im Bereich **"Add model"**:
      - Unter **"Provider"** *Google Gemini* bzw. *NVIDIA* auswählen (Base URL wird automatisch
        eingetragen).
      - Den kopierten Key ins Feld **"API key"** einfügen.
      - Auf **"Fetch available models"** tippen — die App lädt die Liste der verfügbaren Modelle.
      - Unter **"Model"** ein Modell auswählen.
      - Mit **"Save model"** speichern.
4. Das gespeicherte Modell erscheint jetzt unter **"Saved models"** und wird automatisch als
   **"Main model"** verwendet, sofern noch keines gesetzt war.
5. Optional: Schritt 3 für einen zweiten Anbieter wiederholen — beide landen dann in der
   Fallback-Reihenfolge.

![Setup: AI solver aktivieren und Modell hinzufügen](../assets/screenshots/setup-ai-solver.png)

![Setup: Provider-Auswahl mit NVIDIA/Google Gemini Presets](../assets/screenshots/setup-add-model.png)

## Modell-Rotation statt starrem Backup-Modell

Du hinterlegst eine Liste eigener Modelle in *Setup*. Schlägt eine Anfrage fehl (z. B. weil ein
Anbieter überlastet ist), probiert die App automatisch das nächste Modell aus deiner Liste, ohne
nachzufragen. Erst wenn **die ganze Liste** für eine einzelne Anfrage erfolglos durchprobiert
wurde, erscheint eine Meldung mit den Optionen *Abbrechen* oder *Weitermachen*.

Über *Setup → Test models* kannst du jedes hinterlegte Modell einzeln testen.

## Kosten grob einschätzen

Der Einrichtungsassistent zeigt eine grobe Token-Budget-Schätzung: pro tatsächlich von der KI
versuchtem Cache sind es etwa 900–1.000 Token, für eine ganze PocketQuery mit ~1.000 Caches
typischerweise mehrere Zehntausend bis rund 200.000 Token — abhängig davon, wie viele Caches
überhaupt bis zur KI-Stufe durchgereicht werden (die automatischen Solver fangen den Großteil
vorher ab).

## Transparenz der Lösung

Ein KI-Lösungsvorschlag wird immer mit einer Begründung angezeigt und als **unsicher (gelb)**
markiert, bis du ihn bestätigst oder korrigierst — er überschreibt nie automatisch eine bereits
als sicher markierte Lösung.
