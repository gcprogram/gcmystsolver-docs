# Settings & Backup

## AI connection

In *Setup* you store your own API key from a supported AI provider, plus a list of models. This
list also serves as the automatic fallback order (see [AI Solving](ki-solver.md)) — there's no
separate "backup model" setting anymore. Under **"Test models"** you can test each stored model
individually.

For a free way to get your first API key, see the
[NVIDIA/Google Gemini recommendation](ki-solver.md#recommendation-start-for-free-with-nvidia-or-google-gemini).

## what3words

For recognizing what3words coordinates you can optionally store your own what3words API key.

## Backup & restore

GCMystSolver can back up your entire database plus settings. There are two protection levels at
once:

- **Device-bound backup**: automatic, no password — works reliably as long as you restore on
  **the same device** (the most common case, e.g. after a reinstall).
- **Password-protected backup** *(optional)*: needed if you want to restore a backup on
  **another** device — only this way can API keys be carried across devices.

If you restore a purely device-bound backup on a foreign device, your database and all non-secret
settings are still fully restored — only your API keys stay empty and need to be re-entered once
(the app clearly points this out).

## Resetting stored solutions

**"Clear stored solutions"** specifically deletes all stored solutions of a given solver type and
recomputes the affected notes — handy after an app update that fixed a solver, so no stale wrong
solutions linger in your database.
