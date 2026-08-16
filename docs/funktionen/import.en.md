# Import & Export (GPX / PocketQuery)

<figure class="gcms-shot" markdown>
![Import screen with "Choose GPX / ZIP" button](../assets/screenshots/import-screen.png)
<figcaption>Import tab</figcaption>
</figure>

## Supported files

- Single **GPX files**, as exported by geocaching.com or c:geo for one cache or a list.
- **PocketQueries** (also GPX format) with up to several hundred caches at once.

Caches that already exist are **updated** on re-import, not duplicated — so you can re-import the
same list as often as you like, e.g. to pick up your current find status.

## List name

Before importing you enter a **free-text list name** (pre-filled from the file name; if you leave
it blank the list is called "import"). Two cases:

- **New name**: a new list with that name is created.
- **Name of an existing list**: the imported caches are added to that list — no duplicate list
  and no duplicate caches are created.

There's also an option **"Rename list by region (from cache locations)"** — after import, the app
automatically determines a name from the cache coordinates (cluster detection + place lookup),
e.g. "Kerpen, Nordrhein-Westfalen, DE".

!!! warning "Not for MyFinds queries"
    In a MyFinds PocketQuery, your finds are scattered across the whole world — an automatic
    region rename won't produce a meaningful name here. For such lists, give the name by hand
    instead (e.g. "MyFinds").

## What happens automatically on import

1. **Find-status detection**: a PocketQuery whose name starts with "my finds" is recognized
   automatically — every cache in it is marked found (message: *"Recognised as a My Finds query —
   all of them marked found."*). In regular PQs/GPX files, the app additionally recognizes your
   own "Found it"/"Attended"/"Webcam Photo Taken" log entries by matching them against the
   geocaching.com **username** stored in *Setup*. Once a cache is recognized as found, it stays
   found on every later import too.
2. **Region resolution** (offline, no internet access needed): country, state/region and county
   are determined from the cache coordinates.
3. **Challenge pre-check**: for all caches recognized as a challenge, the traffic-light rating is
   computed immediately (see [Challenge Checking](challenges.md)) — not only when you open the
   cache.
4. **Elevation resolution in the background**: elevation values are fetched without blocking the
   app. For very large imports this can keep running in the background for a while.

!!! tip "MyFinds PQ for accurate challenge ratings"
    Challenge checking only counts finds that are already in your local database — there's no
    online comparison with your actual find history. For reliable results on find-count/
    Jasmer/365-day/streak challenges, you should therefore import your complete **MyFinds
    PocketQuery** once (see [Challenge Checking](challenges.md)).

## Existing solutions and notes

- **Solutions are never overwritten**: an already stored solution survives a re-import. Only if
  the imported GPX itself carries a newer `[GCMystSolver]` block (e.g. because you're reading
  back a file GCMystSolver already exported) does the app adopt that newer solution.
- **Personal notes are merged, not replaced**: your own free text from the GPX's personal note is
  preserved and appended below the automatically generated `[GCMystSolver]` block — nothing gets
  lost, and repeated import/export doesn't stack the block multiple times.

## Core principle: offline before network

Wherever possible, GCMystSolver uses **local data and offline reference data** for import and for
region/elevation resolution before any network access happens at all. That keeps import reliable
and fast even for large lists.

## Fastest path from c:geo

1. In c:geo's list detail view, open the menu → **"Export/Upload"** → **"Export GPX"**.
2. In GCMystSolver, go to *Import* and, in the file picker, navigate to c:geo's export folder
   (usually `\cgeo\gpx`).
3. In the file picker's three-dot menu, set **"Sort by"** → **"Date modified (newest first)"**.
4. Load the topmost (newest) GPX file.

With more than 100 GPX files in c:geo's export folder, the right one is otherwise hard to find.

## Export

Via **"Export GPX"** (in *Lists*, in a cache list, or in the "Solved" list) you write your caches,
including GCMystSolver's results, back into a GPX file — e.g. to use them in c:geo or another app.

- **Solved coordinate**: if a cache is solved, the exported waypoint coordinate is set directly to
  the solved position (no separate "Final" waypoint — the cache itself "moves" to the solution in
  the export).
- **Solution in the personal note**: the solution (original coordinate, solved coordinate,
  confidence, solve type, checker link) ends up as a `[GCMystSolver]` block in the exported
  cache's personal note — immediately followed by your own note text.

Under *Setup → Export privacy* you can tone down two details of this:

- **"Show AI model in export"**: off, so an AI solution shows only as "AI" instead of e.g. "AI
  (gemini-2.5-flash)".
- **"Show [GCMystSolver] tag in export"**: off, so the export contains **only your own note
  text** — no confidence, solve type, or solution text. The solved coordinate itself is always
  exported regardless.
