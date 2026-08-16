# Import (GPX / PocketQuery)

## Supported files

- Single **GPX files**, as exported by geocaching.com or c:geo for one cache or a list.
- **PocketQueries** (also GPX format) with up to several hundred caches at once.

Caches that already exist are **updated** on re-import, not duplicated — so you can re-import the
same list as often as you like, e.g. to pick up your current find status.

## What happens automatically on import

1. **Region resolution** (offline, no internet access needed): country, state/region and county
   are determined from the cache coordinates.
2. **Challenge pre-check**: for all caches recognized as a challenge, the traffic-light rating is
   computed immediately (see [Challenge Checking](challenges.md)) — not only when you open the
   cache.
3. **Elevation resolution in the background**: elevation values are fetched without blocking the
   app. For very large imports this can keep running in the background for a while.

## Core principle: offline before network

Wherever possible, GCMystSolver uses **local data and offline reference data** for import and for
region/elevation resolution before any network access happens at all. That keeps import reliable
and fast even for large lists.
