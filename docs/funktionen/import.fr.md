# Import (GPX / PocketQuery)

## Fichiers pris en charge

- Des **fichiers GPX** individuels, tels qu'exportés par geocaching.com ou c:geo pour une cache
  ou une liste.
- Des **PocketQuery** (également au format GPX) avec jusqu'à plusieurs centaines de caches d'un
  coup.

Les caches déjà présentes sont **mises à jour** lors d'un nouvel import, pas dupliquées — tu peux
donc réimporter la même liste aussi souvent que tu veux, par exemple pour récupérer ton statut de
trouvaille actuel.

## Ce qui se passe automatiquement à l'import

1. **Résolution de la région** (hors ligne, sans accès Internet) : le pays, la région et le
   département sont déterminés à partir des coordonnées de la cache.
2. **Pré-vérification des challenges** : pour toutes les caches reconnues comme un challenge,
   l'évaluation par feu tricolore est calculée immédiatement (voir
   [Vérification des challenges](challenges.md)) — pas seulement à l'ouverture de la cache.
3. **Résolution de l'altitude en arrière-plan** : les altitudes sont récupérées sans bloquer
   l'application. Pour de très gros imports, cela peut continuer en arrière-plan pendant un
   moment.

## Principe de base : hors ligne avant le réseau

Dans la mesure du possible, GCMystSolver utilise des **données locales et des références
hors ligne** pour l'import et pour la résolution de la région/altitude, avant tout accès réseau.
Cela rend l'import fiable et rapide, même pour de grandes listes.
