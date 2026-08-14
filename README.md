# gcmystsolver-docs

Quelltext der Doku-Website für GCMystSolver (Ziel-Domain: `gcmystsolver.de`), gebaut mit
[MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Lokal entwickeln

```bash
pip install mkdocs-material
mkdocs serve
```

Öffnet einen lokalen Server mit Live-Reload (Standard: http://127.0.0.1:8000).

## Statische Seite bauen

```bash
mkdocs build --strict
```

Erzeugt reines HTML/CSS/JS im Ordner `site/` — genau dieser Ordnerinhalt gehört auf den
Webspace (z. B. per Plesk File Manager in den Dokumentstamm von `gcmystsolver.de` hochladen).
Kein PHP, keine Datenbank, kein Server-Prozess nötig.

## Struktur

- `mkdocs.yml` — Navigation, Theme, Konfiguration
- `docs/` — alle Inhaltsseiten (Markdown)
- `feedback-repo-templates/` — GitHub-Issue-Vorlagen für das separate Bug/Feature-Repo, siehe
  dortige `README.md`

## Bugs & Feature-Requests der App selbst

Werden **nicht** hier gepflegt, sondern in einem separaten GitHub-Repo (siehe
`feedback-repo-templates/README.md`), verlinkt von `docs/support.md`.

## Offene TODOs vor Veröffentlichung

- [ ] `docs/datenschutz.md` — nur noch: Name/Anschrift/E-Mail des Verantwortlichen eintragen,
      Rechte-Abschnitt fachlich gegenprüfen lassen (Pflicht für Google Play Developer Program).
      Die Datenverarbeitung selbst (KI = user-konfiguriert/BYOK, Höhendienst = OpenTopoData, kein
      Tracking-SDK im Code) ist bereits inhaltlich korrekt beschrieben.
- [ ] Separates Feedback-Repo auf GitHub anlegen (siehe `feedback-repo-templates/README.md`) —
      wartet auf manuelles Anlegen durch Stefan, dann übernehme ich Templates + Verifikation
- [ ] `site_url` in `mkdocs.yml` prüfen, sobald DNS/Hosting für `gcmystsolver.de` steht
- [ ] Screenshots der App in die Funktionsseiten einbinden (aktuell reiner Text)
- [ ] `site/`-Ordner nach Plesk hochladen (siehe Deploy-Abschnitt oben, sobald Zugangsdaten geklärt sind)
