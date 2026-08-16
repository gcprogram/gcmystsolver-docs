# gcmystsolver-docs

Quelltext der Doku-Website für GCMystSolver (live: [gcmystsolver.de](https://gcmystsolver.de/)),
gebaut mit [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) +
[mkdocs-static-i18n](https://github.com/ultrabug/mkdocs-static-i18n) (Deutsch als Standard, plus
Englisch/Französisch/Niederländisch/Tschechisch/Spanisch/Schwedisch/Norwegisch-Bokmål).

## Lokal entwickeln

```bash
pip install mkdocs-material mkdocs-static-i18n
mkdocs serve
```

Öffnet einen lokalen Server mit Live-Reload (Standard: http://127.0.0.1:8000).

## Statische Seite bauen

```bash
mkdocs build --strict
```

Erzeugt reines HTML/CSS/JS im Ordner `site/` (inkl. `site/en/`, `site/fr/`, `site/nl/`, `site/cs/`
für die Übersetzungen) — genau dieser Ordnerinhalt gehört auf den Webspace (per Plesk File
Manager/Git-Pull in den Dokumentstamm von `gcmystsolver.de`). Kein PHP, keine Datenbank, kein
Server-Prozess nötig.

## Struktur

- `mkdocs.yml` — Navigation, Theme, Sprachen (`plugins.i18n`), inkl. `nav_translations` pro Sprache
- `docs/` — Inhaltsseiten. Deutsch ohne Suffix (`index.md`), Übersetzungen mit Sprachsuffix
  (`index.en.md`, `index.fr.md`, `index.nl.md`, `index.cs.md`) — gleiches Schema für jede Seite.
  Neue deutsche Seite anlegen → passende `.en/.fr/.nl/.cs.md`-Varianten ergänzen, sonst fällt die
  Sprache für diese Seite automatisch auf Deutsch zurück.
- `docs/assets/` — App-Icon/Favicon, `docs/assets/screenshots/` — App-Screenshots (aus BlueStacks,
  siehe Projekt-Memory zum Emulator-Zugriff)
- `feedback-repo-templates/` — GitHub-Issue-Vorlagen für das separate Bug/Feature-Repo, siehe
  dortige `README.md`

## Bugs & Feature-Requests der App selbst

Werden **nicht** hier gepflegt, sondern in
[gcprogram/gcmystsolver-feedback](https://github.com/gcprogram/gcmystsolver-feedback), verlinkt
von `docs/support.md`.

## Deploy-Workflow

`.md`-Dateien ändern → `mkdocs build --strict` → `site/` mit committen → `git push` → Stefan
klickt in Plesk auf "Pull updates" (Push allein deployt nicht, siehe Bitpalast/Plesk-Memory).

## APK aktuell halten (`docs/downloads/GCMystSolver.apk`)

Die APK wird in einem **anderen, privaten Repo** gebaut (GCToolkit-App). Hier im Doku-Repo landet
nur das fertige `app-debug.apk`, verlinkt vom Header-Button "APK herunterladen". Da jede
inhaltlich neue APK-Version einen neuen ~24-MB-Blob dauerhaft in der Git-Historie hinterlässt
(auch ein "löschen + neu einchecken" entfernt alte Versionen **nicht** rückwirkend — dafür bräuchte
es einen destruktiven `git filter-repo` + Force-Push, den wir bewusst nicht routinemäßig machen),
vor jedem Ersetzen erst prüfen, ob sich der Inhalt überhaupt geändert hat:

```bash
# Unter Windows/Git Bash, aus diesem Repo-Root:
sha256sum docs/downloads/GCMystSolver.apk
sha256sum /pfad/zur/frisch/gebauten/app-debug.apk
```

Nur committen, wenn die Hashes voneinander abweichen. Sind sie identisch, nichts tun (auch wenn
der Zeitstempel der neu gebauten APK anders ist) — spart unnötige Historie.

```bash
cp /pfad/zur/frisch/gebauten/app-debug.apk docs/downloads/GCMystSolver.apk
mkdocs build --strict   # kopiert automatisch nach site/downloads/ mit
git add docs/downloads/GCMystSolver.apk site/downloads/GCMystSolver.apk
git commit -m "Update APK to <Anlass/Version>"
git push
```

## Offene TODOs

- [ ] `docs/datenschutz.md` (und die vier Übersetzungen) fachlich/juristisch von einer sachkundigen
      Stelle gegenprüfen lassen (Pflicht für Google Play Developer Program) — inhaltlich ist die
      Seite bereits vollständig ausgefüllt.
- [ ] Weitere App-Screenshots ergänzen (bisher nur die AI-Setup-Screens in `ki-solver.md`).
