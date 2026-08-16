# GCMystSolver

**GCMystSolver** is an Android app that helps you solve Geocaching mystery and puzzle caches
faster. You import your caches from a GPX file or a PocketQuery, the app automatically runs a
chain of classic puzzle solvers (Vigenère, ROT-N, what3words, Enigma, crypto decoders,
bearing/projection, and more), and can optionally bring in an AI when no built-in solver fits.
On top of that, the app automatically checks whether your found caches meet the requirements of
challenge caches (D/T matrix, countries, states/regions, elevation, find counts, and more).

This handbook describes every feature of the app in detail. Use the navigation above or the
search to find a topic.

<figure class="gcms-hero" markdown>
![Unsolved vs. solved geoart map](assets/screenshots/geoart-animation.gif)
<figcaption>A real geoart puzzle (a deer made of ~300 mystery caches in the Netherlands) —
unsolved on the left, then automatically solved by GCMystSolver, with a close-up of the green
solution rings</figcaption>
</figure>

## Quick start

- [Getting Started](erste-schritte.md) — install the app, do your first import
- [Automatic Solvers](funktionen/solver.md) — which puzzle types the app solves without AI
- [Challenge Checking](funktionen/challenges.md) — how the traffic-light rating of your challenge caches works
- [Support](support.md) — report a bug or suggest a new feature

## Good to know

!!! info "Free, no premium tier"
    GCMystSolver currently has no paid features and no restricted functionality.

!!! warning "No substitute for your own thinking"
    Automatic solvers and AI assistance are tools, not magic. For field puzzles (multis with
    several stages, on-site bearings, and similar) the app can do no more than point you to the
    right solver — you still have to crack the cache at the hide location.

!!! note "APK download"
    You'll find the link to the current APK at the top of the menu ("APK herunterladen"). It's a
    debug build outside the Play Store — your device will ask for permission to install apps from
    unknown sources the first time.
