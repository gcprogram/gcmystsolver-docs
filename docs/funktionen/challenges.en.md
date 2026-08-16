# Challenge Checking

For challenge caches (caches that require you to have found certain other caches beforehand),
GCMystSolver automatically computes a **traffic-light rating**: do your existing finds already
satisfy the requirement?

## When is it checked?

On **every import** — not only when you open the cache. So you immediately see in your cache list
which challenges you already qualify for.

## Recognized challenge types

- **D/T matrix challenges** (e.g. "all 81 Difficulty/Terrain combinations")
- **Country challenges** ("mini world tour" — physical finds in specific countries)
- **State/region challenges**
- **County challenges** *(currently only checks the number of distinct counties, not a specific
  predefined list)*
- **Elevation challenges** (finds above/below a certain altitude)
- **Find-count challenges** (e.g. "at least 500 finds")
- **Jasmer challenge** (one find per calendar month since May 2000)
- **365/366-day challenge** (one find per calendar day of the year, across years)
- **Streak challenge** (longest consecutive run of find-days)

## Traffic-light colors

- 🔴 **Red**: requirement currently not met.
- 🟡 **Yellow**: uncertain — e.g. because detection in the listing's free text wasn't
  unambiguous.
- 🟢 **Green**: requirement met based on the current data.

## Evidence list

For every satisfied requirement, the app shows the **minimum necessary evidence** — i.e. exactly
the finds that satisfy the requirement (e.g. one find per month), not all of your finds overall.
When a lot of evidence is needed, the list is automatically displayed more compactly (only date
and GC code instead of the full title), or, for extremely large numbers, just summarized as text,
so the detail page stays readable.

## Transparency for free-text detection

Requirements that have to be read out of a listing's free text (e.g. a minimum find count stated
in the text) are always shown together with the **concretely detected value** — so you notice a
misinterpretation immediately, instead of having to trust a silent black box.

## Found caches

An already found cache is always shown as green, regardless of its challenge requirement.

!!! tip "After an update"
    If a challenge check was corrected, you can go to *Setup* and use **"Clear stored
    solutions"** to specifically delete all stored ratings of one type and have them recomputed,
    so no stale wrong ratings linger.
