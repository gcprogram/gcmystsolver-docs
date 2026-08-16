# Getting Started

## 1. Import caches

GCMystSolver reads **GPX files** — either single caches exported from geocaching.com/c:geo, or a
whole **PocketQuery** with hundreds of caches at once. Open the app, choose *Import* and the
desired file. Caches that already exist are updated rather than duplicated.

Import automatically does more than just reading the file:

- Country, state/region and county are resolved from the coordinates (offline, no internet
  needed).
- For challenge-relevant caches, the app immediately checks whether your existing finds satisfy
  the requirement (red/yellow/green traffic light).
- Elevation values are fetched in the background (this can take a while for large PocketQueries,
  but runs quietly while you already use the app).

## 2. (Optional) Enable AI

The built-in solvers already solve many puzzle types without any AI. For everything beyond that,
you can connect an AI in *Setup* (your own API key from a supported provider). Setup shows a rough
token-budget estimate so you get a sense of the expected cost for a whole PocketQuery.

More on this: [AI Solving](funktionen/ki-solver.md), [Settings & Backup](funktionen/einstellungen-backup.md).

## 3. Let it solve

In the *Solve* tab you start a solving run over your imported caches. You choose:

- **How thorough** (preset from fast/offline-only to intensive with AI),
- **Which caches** are included (only unsolved, unsolved+uncertain, or truly all — see
  [Automatic Solvers](funktionen/solver.md#solve-mode)).

At the end you see a traffic-light color for each cache and, if something was found, the
suggested solution with its reasoning.

## 4. Keep working on a single cache

On a cache's detail page you can accept the solution, correct it, or open the
[AI chat](funktionen/ai-chat.md) to discuss that specific cache with the AI in more depth.
