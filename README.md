# Wasaa English — Apprends l'anglais du Lycée nigérien

Application web interactive (HTML/CSS/JavaScript pur, sans framework ni
build) pour apprendre l'anglais selon le **programme officiel du Second
Cycle au Niger** (Seconde, Première, Terminale), basée sur le document
*Nouveaux Programmes d'Enseignement* du Ministère de l'Éducation Nationale.

## Comment l'utiliser

1. Ouvre simplement `index.html` dans un navigateur (double-clic suffit),
   ou héberge le dossier sur n'importe quel serveur web statique
   (GitHub Pages, Netlify, un hébergement scolaire, etc.).
2. Aucune installation, aucun serveur backend, aucune base de données
   n'est nécessaire : tout fonctionne côté navigateur.
3. La progression de l'élève (XP, leçons terminées, badges, série de
   jours) est sauvegardée automatiquement dans le `localStorage` du
   navigateur — elle persiste donc d'une visite à l'autre sur le même
   appareil/navigateur, sans connexion internet ni compte requis.

## Structure du code

```
wasaa-english/
├── index.html              Structure de toutes les pages (écrans)
├── css/
│   ├── style.css            Tokens de design, reset, composants génériques
│   ├── home.css               Écran d'accueil (hero, sélection de niveau)
│   ├── path.css                 Écran "parcours" (sentier de leçons)
│   ├── lesson.css                 Écran de leçon (exercices, feedback)
│   └── profile.css                  Écran profil (badges, paramètres)
├── js/
│   ├── icons.js              Sprite d'icônes SVG inline (aucune dépendance)
│   ├── progress.js             Gestion de la sauvegarde (localStorage)
│   ├── exercises.js              Moteur de rendu/validation des exercices
│   └── app.js                      Contrôleur principal (navigation, logique)
└── data/
    └── curriculum.js        Contenu pédagogique (26 unités, 88 leçons,
                              233 exercices)
```

## Contenu pédagogique

Le fichier `data/curriculum.js` contient tout le contenu des leçons,
organisé par niveau → unité → leçon → exercices : **26 unités, 88 leçons,
233 exercices** au total, couvrant fidèlement les **six syllabus officiels**
du Ministère (Seconde A, Seconde C, Première A, Première C&D, Terminale A,
Terminale C/D), fusionnés en un seul parcours par niveau afin que toute
filière y trouve son contenu.

Répartition par niveau :
- **Seconde** : 10 unités, 35 leçons (Family/Home, Health, Sports, History/
  Geography, Agriculture, Reported Speech, Human Body, Transportation,
  Electricity basics, Career possibilities)
- **Première** : 9 unités, 27 leçons (Tradition/Culture, Education,
  The Arts, Travelling/Int'l Organizations, Mass-media, Electricity uses,
  Trade/Banking, Phrasal verbs, World of Sports)
- **Terminale** : 7 unités, 26 leçons (Education, Science/NTIC, Arts
  current issues, Careers, Wh-clauses/Compound adjectives, Development
  issues, Writing skills)

Chaque unité reprend fidèlement les **thèmes, structures grammaticales et
fonctions de communication** du programme officiel (ex: Present Simple/
Continuous, modaux, voix passive, discours rapporté, inversion, causatifs,
gérondifs, phrasal verbs, etc.)

### Ajouter ou modifier une leçon

Pour ajouter une leçon, il suffit d'ajouter un objet dans le tableau
`lessons` de l'unité concernée, en suivant le même format que les leçons
existantes. Quatre types d'exercices sont pris en charge :

- `mcq` — Choix multiple (`options`, `answer` = index de la bonne réponse)
- `fill` — Texte à trous (`answer` = tableau des réponses acceptées)
- `match` — Association de paires (`pairs` = tableau de `[mot, traduction]`)
- `order` — Reconstitution de phrase (`answer` = tableau de mots dans l'ordre)

Aucune autre modification n'est nécessaire : l'interface (sentier,
verrouillage des leçons, calcul du score, badges) s'adapte automatiquement.

## Fonctionnalités

- Sentier de progression visuel par unité, avec déblocage progressif des leçons
- Quatre types d'exercices interactifs avec feedback pédagogique explicatif
- Système d'XP, de série de jours (streak) et de badges de motivation
- Sauvegarde locale persistante (aucun compte, aucun serveur)
- Export / import de la progression au format JSON (utile pour changer
  d'appareil ou faire une sauvegarde manuelle)
- Réinitialisation de la progression depuis le profil
- Design entièrement responsive (mobile, tablette, ordinateur)
- Aucune dépendance externe critique (les seules requêtes réseau sont
  pour les polices Google Fonts ; l'app reste utilisable sans elles,
  avec un repli sur les polices système)

## Notes techniques

- 100% HTML/CSS/JavaScript natif, sans framework, sans étape de build
- Toutes les icônes sont des SVG inline dessinés à la main (pas de CDN
  de police d'icônes)
- Le code est commenté en français et organisé en modules clairs
  (curriculum, progression, exercices, contrôleur d'application)

