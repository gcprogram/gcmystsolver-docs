# Vérification des challenges

Pour les challenge caches (caches qui exigent d'avoir préalablement trouvé certaines autres
caches), GCMystSolver calcule automatiquement une **évaluation par feu tricolore** : tes
trouvailles existantes remplissent-elles déjà la condition ?

!!! warning "Nécessite une PocketQuery MyFinds importée"
    L'évaluation ne compte que les trouvailles déjà présentes dans ta base de données locale — il
    n'y a **aucune** comparaison en ligne avec ton historique réel de trouvailles geocaching.com.
    Pour que les challenges de nombre de trouvailles, Jasmer, 365 jours et streak soient évalués
    correctement, tu dois importer une fois ta **PocketQuery MyFinds** complète (voir
    [Import et export](import.md#ce-qui-se-passe-automatiquement-a-limport)). Une PQ dont le nom
    commence par « my finds » est reconnue automatiquement et toutes les caches qu'elle contient
    sont marquées trouvées — aucun mode d'import séparé n'est nécessaire pour cela.

## Quand la vérification a-t-elle lieu ?

À **chaque import** — pas seulement quand tu ouvres la cache. Tu vois donc immédiatement dans ta
liste de caches quels challenges tu remplis déjà.

## Types de challenges reconnus

- **Challenges matrice D/T** (par ex. « les 81 combinaisons Difficulty/Terrain »)
- **Challenges pays** (« mini-tour du monde » — trouvailles physiques dans des pays précis)
- **Challenges région**
- **Challenges département** *(vérifie actuellement seulement le nombre de départements
  différents, pas une liste précise imposée)*
- **Challenges d'altitude** (trouvailles au-dessus/en dessous d'une certaine altitude)
- **Challenges de nombre de trouvailles** (par ex. « au moins 500 trouvailles »)
- **Challenge Jasmer** (une trouvaille par mois calendaire depuis mai 2000)
- **Challenge 365/366 jours** (une trouvaille par jour calendaire de l'année, toutes années
  confondues)
- **Challenge streak** (la plus longue série de jours consécutifs avec trouvaille)

## Couleurs du feu tricolore

- 🔴 **Rouge** : condition actuellement non remplie.
- 🟡 **Jaune** : incertain — par ex. parce que la détection dans le texte libre du listing
  n'était pas univoque.
- 🟢 **Vert** : condition remplie selon les données actuelles.

## Liste de preuves

Pour chaque condition remplie, l'application affiche les **preuves minimales nécessaires** —
c'est-à-dire exactement les trouvailles qui remplissent la condition (par ex. une trouvaille par
mois), pas l'ensemble de toutes tes trouvailles. Quand beaucoup de preuves sont nécessaires, la
liste s'affiche automatiquement de façon plus compacte (seulement date et code GC au lieu du titre
complet), voire, pour un nombre extrêmement élevé, sous forme de simple résumé texte, afin que la
page de détail reste lisible.

## Transparence de la détection dans le texte libre

Les conditions qui doivent être extraites du texte libre d'un listing (par ex. un nombre minimum
de trouvailles mentionné dans le texte) sont toujours affichées avec la **valeur concrètement
détectée** — tu remarques ainsi immédiatement une mauvaise interprétation, au lieu de devoir faire
confiance à une boîte noire silencieuse.

## Caches trouvées

Une cache déjà trouvée est toujours affichée en vert, indépendamment de sa condition de
challenge.

!!! tip "Après une mise à jour"
    Si une vérification de challenge a été corrigée, tu peux aller dans *Setup* et utiliser
    **« Clear stored solutions »** pour supprimer spécifiquement toutes les évaluations
    enregistrées d'un type donné et les faire recalculer, afin qu'aucune évaluation erronée
    obsolète ne subsiste.
