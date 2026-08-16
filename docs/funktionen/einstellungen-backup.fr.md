# Paramètres et sauvegarde

## Connexion IA

Dans *Setup*, tu enregistres ta propre clé API d'un fournisseur d'IA pris en charge, ainsi qu'une
liste de modèles. Cette liste sert aussi d'ordre de repli automatique (voir
[Résolution par IA](ki-solver.md)) — il n'y a plus de réglage séparé pour un « modèle de
secours ». Sous **« Test models »**, tu peux tester individuellement chaque modèle enregistré.

Pour obtenir gratuitement une première clé API, voir la
[recommandation NVIDIA/Google Gemini](ki-solver.md#recommandation-demarrer-gratuitement-avec-nvidia-ou-google-gemini).

## what3words

Pour la reconnaissance des coordonnées what3words, tu peux en option enregistrer ta propre clé
API what3words.

## Sauvegarde et restauration

GCMystSolver peut sauvegarder toute ta base de données ainsi que tes paramètres. Il existe deux
niveaux de protection simultanés :

- **Sauvegarde liée à l'appareil** : automatique, sans mot de passe — fonctionne de manière
  fiable tant que tu restaures sur **le même appareil** (le cas le plus fréquent, par ex. après
  une réinstallation).
- **Sauvegarde protégée par mot de passe** *(optionnel)* : nécessaire si tu veux restaurer une
  sauvegarde sur un **autre** appareil — seule cette méthode permet d'emporter les clés API d'un
  appareil à l'autre.

Si tu restaures une sauvegarde purement liée à l'appareil sur un appareil étranger, ta base de
données et tous les paramètres non secrets sont quand même entièrement restaurés — seules tes
clés API restent vides et doivent être ressaisies une fois (l'application te le signale
clairement).

## Réinitialiser les solutions enregistrées

**« Clear stored solutions »** supprime spécifiquement toutes les solutions enregistrées d'un
type de solveur donné et recalcule les notes concernées — pratique après une mise à jour de
l'application ayant corrigé un solveur, afin qu'aucune ancienne solution erronée ne subsiste dans
ta base de données.
