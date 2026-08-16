# Premiers pas

## 1. Importer des caches

GCMystSolver lit des **fichiers GPX** — soit des caches individuels exportés depuis
geocaching.com/c:geo, soit une **PocketQuery** entière avec des centaines de caches d'un coup.
Ouvre l'application, choisis *Import* puis le fichier souhaité. Les caches déjà présentes sont
mises à jour plutôt que dupliquées.

L'import fait automatiquement plus que la simple lecture :

- Le pays, la région et le département sont déterminés à partir des coordonnées (hors ligne, sans
  Internet).
- Pour les caches liées à un challenge, l'application vérifie immédiatement si tes trouvailles
  existantes remplissent la condition (feu rouge/jaune/vert).
- Les altitudes sont chargées en arrière-plan (cela peut prendre un moment pour de grosses
  PocketQuery, mais se déroule discrètement pendant que tu utilises déjà l'application).

## 2. (Optionnel) Activer l'IA

Les solveurs intégrés résolvent déjà de nombreux types d'énigmes sans aucune IA. Pour tout le
reste, tu peux connecter une IA dans *Setup* (ta propre clé API d'un fournisseur pris en charge).
Le setup affiche une estimation approximative du budget en tokens, pour te donner une idée du coût
attendu pour une PocketQuery entière.

En savoir plus : [Résolution par IA](funktionen/ki-solver.md), [Paramètres et sauvegarde](funktionen/einstellungen-backup.md).

## 3. Lancer la résolution

Dans l'onglet *Solve*, tu lances une session de résolution sur tes caches importées. Tu choisis :

- **Le niveau d'approfondissement** (preset, de rapide/hors-ligne uniquement à intensif avec IA),
- **Quelles caches** sont incluses (seulement non résolues, non résolues + incertaines, ou
  vraiment toutes — voir [Solveurs automatiques](funktionen/solver.md#mode-de-resolution)).

À la fin, tu vois pour chaque cache une couleur de feu tricolore et, si une solution a été
trouvée, la solution proposée avec sa justification.

## 4. Continuer à travailler sur une cache

Sur la page de détail d'une cache, tu peux accepter la solution, la corriger, ou ouvrir le
[chat IA](funktionen/ai-chat.md) pour discuter spécifiquement de cette cache avec l'IA.
