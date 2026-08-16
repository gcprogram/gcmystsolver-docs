# Privacy Policy

!!! info "Not a substitute for legal advice"
    This notice describes as precisely as possible which data GCMystSolver processes and why. It
    does not replace individual legal advice.

## Data controller

Developer: **LoveCaching**
Email: [LoveCaching@gcmystsolver.de](mailto:LoveCaching@gcmystsolver.de)

## What data does GCMystSolver process?

- **Geocache data** (title, coordinates, listing text, find status, …) that you import yourself
  via GPX/PocketQuery. This stays local on your device (Room database), unless you use one of the
  optional network features listed below.
- **Location-based computation, offline**: country, state/region and county are determined from
  the imported coordinates locally on the device, with no network access.
- **Elevation data**: for imported caches, coordinates are sent to
  [OpenTopoData](https://www.opentopodata.org/) (SRTM30m dataset) to determine elevation. This
  runs automatically in the background, without you needing your own account/key. The reason is
  elevation challenges that require a find above/below a certain sea-level altitude (e.g. "x
  caches above 2,000 m") — without elevation data the app couldn't evaluate these challenges.
- **AI requests (optional, only if enabled by you)**: GCMystSolver itself does **not** ship with
  any hard-wired AI provider. In *Setup* you choose and configure which AI service you want to
  use — ready-made presets for, among others, Anthropic, OpenAI, Google Gemini, NVIDIA, DeepSeek
  and OpenRouter, or alternatively any OpenAI-compatible address of your own (e.g. a
  self-hosted **Ollama** on your own local network — in which case your data may not leave your
  own network at all). Only once you store your own API key/endpoint are listing text, hint, and
  any photos you uploaded sent to exactly the service you chose. What that service does with the
  data and how is governed by **its own** privacy policy — please check a provider's terms before
  using it. As the app provider, we have no influence over that processing and do not ourselves
  receive a copy of your requests or your API key. (For help choosing a provider, see
  [AI Solving](funktionen/ki-solver.md).)
- **what3words requests (optional)**: if a what3words key is stored, corresponding requests are
  sent to what3words.
- **API keys**: stored encrypted, bound to your device, optionally additionally
  password-protected for a cross-device backup (see [Settings & Backup](funktionen/einstellungen-backup.md)).
  They are used exclusively to authenticate against the AI provider you configured — for nothing
  else.
- **Your nickname** (for automatically recognizing your own finds in listings) never leaves your
  device.

## What GCMystSolver does not do

- No advertising, no tracking or analytics SDK (e.g. no Firebase/Crashlytics) in the code.
- No sharing of your cache data with third parties beyond the optional services you activated
  yourself as listed above (elevation lookup always, AI/what3words only if configured).

## Backup

A backup you create only leaves your device if you export or share it yourself.

## Your rights

Insofar as personal data is processed, under the GDPR you have in particular the following rights
against the data controller: access (Art. 15), rectification (Art. 16), erasure (Art. 17),
restriction of processing (Art. 18), data portability (Art. 20), and objection (Art. 21). You also
have the right to lodge a complaint with a data protection supervisory authority, in particular in
the member state of your habitual residence.

In practice, though, almost everything currently stays entirely in your own hands, on your own
device: your nickname never leaves the device, and your API keys are stored encrypted on the
device and used exclusively to authenticate against the AI provider you chose.

## Contact for privacy questions

For questions about privacy, you can reach us at
[data_privacy@gcmystsolver.de](mailto:data_privacy@gcmystsolver.de).
