# Database, Lists & Statistics

## Lists

The start tab shows all your imported lists plus two fixed entries: **"All caches"** (everything
combined) and **"Solved"** (all solved caches around a center point you choose).

<figure class="gcms-shot" markdown>
![Lists: home screen with all imported lists](../assets/screenshots/lists-home.png)
<figcaption>Lists — home screen</figcaption>
</figure>

## Cache list

Tapping a list opens a searchable, filterable cache list — by traffic-light color, cache type and
more. From there you open a cache's detail page.

<figure class="gcms-shot" markdown>
![Cache list with a traffic light on the left edge and a filter row at the top](../assets/screenshots/list-detail-arrows.png)
<figcaption>Left: traffic light per cache. Top: cache-type filter, traffic-light-color filter, solver filter</figcaption>
</figure>

- The **top red arrow** points to the filter row: cache-type icons, the three traffic-light colors
  (green/yellow/red) to show/hide, and a **"Solver"** dropdown to filter by specific solvers.
- The **bottom-left red arrow** points to the small three-dot **traffic light on the left edge of
  each cache** — the current color is shown solid, the other two dots stay pale. Same
  red/yellow/green code as everywhere else in the app.

### Two independent traffic lights: solve status and challenge status

For challenge caches, **two** traffic lights can be visible at once — one on the left, one on the
right edge of the row:

<figure class="gcms-shot" markdown>
![Two traffic lights: solve status on the left, challenge fulfillment on the right](../assets/screenshots/ampel-legend.png)
<figcaption>Left: solve status (here green). Right: challenge fulfillment (here yellow/partial)</figcaption>
</figure>

- **Left = solve status**: was the cache's requirement (e.g. the challenge text) recognized, and
  is the solution/evaluation trustworthy?
- **Right = challenge fulfillment**: do your existing finds already satisfy the recognized
  requirement? (See [Challenge Checking](challenges.md) for details on this second, independent
  rating.)

## Cache detail

On a cache's detail page you find the listing, hint, current solution, traffic-light color, and —
all in **one shared "Solver results" card** — the relevant extra buttons for that cache: e.g. a
link to a Geochecker, to gc-project (if the listing links one), or to a webcam recording page for
webcam caches.

## Map

The map tab shows the currently selected list as markers on an OpenStreetMap map. Every marker
combines two pieces of information:

- **The cache-type symbol** in the center (e.g. "?" for Mystery, a book icon for Traditional).
- **A colored ring** around the symbol once a solve status exists: **green** = trustworthy
  solution (confidence ≥ 90%), **yellow/amber** = uncertain/partial solution. No ring means: still
  unsolved.

<figure class="gcms-shot" markdown>
![Map with several green-ringed, solved mystery caches](../assets/screenshots/map-solved-marker.png)
<figcaption>The green-ringed "?" markers are solved mystery caches</figcaption>
</figure>

For challenge caches, a small **badge in the bottom-right of the marker** is added — that's the
challenge fulfillment (the same second traffic light as in the list, see above), independent of
the ring's solve status. With many markers close together, the app automatically zooms into a more
compact dot mode, where the cache-type color fills the area and the solve status appears as a thin
ring around it.

### Offline maps

The layers icon in the top-right lets you switch between the online map (OpenStreetMap) and a
self-loaded **offline map (.map file)** — handy for use without an internet connection. Such
`.map` files can be downloaded with e.g. **c:geo**, and are then available for selection here too.

<figure class="gcms-shot" markdown>
![Map layer selector: Online (OSM), Offline (.map), Select Offline Map](../assets/screenshots/map-offline-selector.png)
<figcaption>Online/offline map selection</figcaption>
</figure>

## Statistics

The statistics screen shows you, per cache type, how many caches are solved, partially solved,
and recognized as field puzzles overall — so you see at a glance where work still remains and
where an on-site visit is unavoidable anyway.

<figure class="gcms-shot" markdown>
![Statistics table by cache type](../assets/screenshots/statistics.png)
<figcaption>Statistics by cache type, with a "By solver" breakdown below</figcaption>
</figure>

!!! tip "Straight to the filtered list"
    Tapping a cache-type row in the statistics table (e.g. "Mystery") jumps straight into the
    cache list, already filtered to exactly that type.

## Backup & restore

In *Setup* you can back up your entire database (including all settings) and restore it on
another device. Details: [Settings & Backup](einstellungen-backup.md).
