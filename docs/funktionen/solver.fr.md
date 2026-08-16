# Solveurs automatiques

Avant même de solliciter une IA, GCMystSolver essaie de résoudre ton énigme avec une chaîne de
solveurs classiques intégrés. C'est plus rapide, gratuit, et fonctionne même sans aucune IA
connectée.

## Ce qui est reconnu

| Solveur | Reconnaît |
|---|---|
| **what3words** | Coordonnées en trois mots (`///mot.mot.mot`) |
| **Vigenère** | Textes chiffrés par Vigenère, avec détection de la clé |
| **ROT-N** | Décalages César/ROT, même avec un N inconnu |
| **Crypto (multi-décodeur)** | Classiques courants comme Base64, Morse, Atbash, etc., combinés |
| **Relèvement/projection** | « Vise … degrés, … mètres » ainsi que la notation compacte de projection N/E, en allemand/anglais/néerlandais/français/tchèque |
| **Enigma** | Textes chiffrés par Enigma |
| **Reverse-Wherigo** | Cartouches Wherigo analysées à l'envers |
| **Chiffres/nombres en toutes lettres cachés dans une histoire** | Coordonnées cachées sous forme de chiffres épars ou de nombres écrits en toutes lettres dans un texte narratif |
| **Détection one-stage** | Reconnaît les indices explicites « one-stage »/« une seule étape » ; pour les letterbox, une heuristique indiciaire prudente s'y ajoute |
| **Jigidi** | Reconnaît un lien puzzle Jigidi non résolu et le marque comme « seulement partiellement résoluble automatiquement » au lieu de le transmettre silencieusement à l'IA (qui ne peut pas voir l'image liée) |

Chaque solveur indique de façon transparente **ce qui a été reconnu exactement** (par ex. le
nombre ou le texte détecté) — une mauvaise interprétation saute donc immédiatement aux yeux, au
lieu de se déguiser en fausse solution silencieuse.

## Énigmes de terrain vs. énigmes de canapé

GCMystSolver distingue si une énigme est fondamentalement résoluble depuis son canapé ou nécessite
impérativement une visite sur place (par ex. un multi à plusieurs étapes, un relèvement qui ne
peut être mesuré qu'au premier waypoint). En présence d'indices solides d'une énigme de terrain
(par ex. une numérotation explicite des étapes dans le listing ou de vrais waypoints dans le
fichier GPX), aucune tentative de résolution par IA n'est effectuée — l'application ne ferait
sinon que deviner.

## Mode de résolution

Au lancement d'une session de résolution, tu choisis quelles caches sont incluses :

- **Unsolved (par défaut)** : uniquement les caches vraiment non résolues (rouges), les énigmes
  de terrain avérées sont ignorées.
- **+ Partial** : en plus, les solutions incertaines (jaunes) ; les solutions fiables existantes
  (vertes) restent intactes.
- **Force (toutes)** : vraiment toutes les caches, indépendamment de la couleur ou du statut de
  trouvaille — par ex. pour recalculer une solution après une mise à jour d'un solveur.

Tu choisis en plus un **preset** (rapide/hors-ligne uniquement jusqu'à intensif avec IA), qui
détermine l'effort de recherche avant de consulter l'IA.

## Caches trouvées

Les caches déjà trouvées sont toujours affichées comme résolues (vert), sans être revérifiées.
