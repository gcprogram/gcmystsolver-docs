# Politique de confidentialité

!!! info "Ne remplace pas un conseil juridique"
    Ce texte décrit aussi précisément que possible quelles données GCMystSolver traite et
    pourquoi. Il ne remplace pas un conseil juridique individuel.

## Responsable du traitement

Développeur : **LoveCaching**
E-mail : [LoveCaching@gcmystsolver.de](mailto:LoveCaching@gcmystsolver.de)

## Quelles données GCMystSolver traite-t-elle ?

- **Données de géocache** (titre, coordonnées, texte du listing, statut de trouvaille, …) que tu
  importes toi-même via GPX/PocketQuery. Elles restent locales sur ton appareil (base de données
  Room), sauf si tu utilises l'une des fonctions réseau optionnelles listées ci-dessous.
- **Calcul lié à la localisation, hors ligne** : le pays, la région et le département sont
  déterminés à partir des coordonnées importées, localement sur l'appareil, sans accès réseau.
- **Données d'altitude** : pour les caches importées, les coordonnées sont envoyées à
  [OpenTopoData](https://www.opentopodata.org/) (jeu de données SRTM30m) pour déterminer
  l'altitude. Cela se fait automatiquement en arrière-plan, sans que tu aies besoin de ton propre
  compte/clé. La raison en est les challenges d'altitude, qui exigent une trouvaille au-dessus/en
  dessous d'une certaine altitude (par ex. « x caches au-dessus de 2 000 m ») — sans données
  d'altitude, l'application ne pourrait pas évaluer ces challenges.
- **Requêtes IA (optionnel, uniquement si activé par toi)** : GCMystSolver n'intègre elle-même
  **aucun** fournisseur d'IA prédéfini. Dans *Setup*, tu choisis et configures toi-même le
  service d'IA que tu souhaites utiliser — des presets prêts à l'emploi pour, entre autres,
  Anthropic, OpenAI, Google Gemini, NVIDIA, DeepSeek et OpenRouter, ou alternativement n'importe
  quelle adresse compatible OpenAI de ton choix (par ex. un **Ollama** auto-hébergé sur ton propre
  réseau local — auquel cas tes données ne quittent éventuellement pas du tout ton propre
  réseau). Ce n'est qu'une fois que tu as enregistré ta propre clé API/point d'accès que le texte
  du listing, l'indice et les photos que tu as éventuellement téléversées sont envoyés
  précisément au service que tu as choisi. La manière dont ce service traite ces données est
  régie par **sa propre** politique de confidentialité — merci de vérifier les conditions d'un
  fournisseur avant de l'utiliser. En tant que fournisseur de l'application, nous n'avons aucune
  influence sur ce traitement et ne recevons nous-mêmes aucune copie de tes requêtes ni de ta clé
  API. (Pour t'aider à choisir un fournisseur, voir [Résolution par IA](funktionen/ki-solver.md).)
- **Requêtes what3words (optionnel)** : si une clé what3words est enregistrée, les requêtes
  correspondantes sont envoyées à what3words.
- **Clés API** : stockées de façon chiffrée, liées à ton appareil, et en option protégées en plus
  par un mot de passe pour une sauvegarde inter-appareils (voir
  [Paramètres et sauvegarde](funktionen/einstellungen-backup.md)). Elles ne servent qu'à
  t'authentifier auprès du fournisseur d'IA que tu as configuré — à rien d'autre.
- **Ton pseudonyme** (pour reconnaître automatiquement tes propres trouvailles dans les listings)
  ne quitte jamais ton appareil.

## Ce que GCMystSolver ne fait pas

- Pas de publicité, pas de SDK de suivi ou d'analytique (par ex. pas de Firebase/Crashlytics)
  dans le code.
- Pas de transmission de tes données de caches à des tiers, en dehors des services optionnels
  que tu as toi-même activés ci-dessus (récupération d'altitude toujours, IA/what3words
  seulement si configuré).

## Sauvegarde

Une sauvegarde que tu crées ne quitte ton appareil que si tu l'exportes ou la partages toi-même.

## Tes droits

Dans la mesure où des données à caractère personnel sont traitées, tu disposes en vertu du RGPD
notamment des droits suivants vis-à-vis du responsable du traitement : droit d'accès (art. 15),
de rectification (art. 16), d'effacement (art. 17), de limitation du traitement (art. 18), de
portabilité des données (art. 20) ainsi que d'opposition (art. 21). Tu disposes également d'un
droit de réclamation auprès d'une autorité de contrôle en matière de protection des données,
notamment dans l'État membre de ta résidence habituelle.

En pratique, cependant, presque tout reste actuellement entièrement entre tes mains, sur ton
propre appareil : ton pseudonyme ne quitte jamais l'appareil, et tes clés API sont stockées de
façon chiffrée sur l'appareil et utilisées exclusivement pour t'authentifier auprès du
fournisseur d'IA que tu as choisi.

## Contact pour les questions de confidentialité

Pour toute question relative à la confidentialité, tu peux nous joindre à
[data_privacy@gcmystsolver.de](mailto:data_privacy@gcmystsolver.de).
