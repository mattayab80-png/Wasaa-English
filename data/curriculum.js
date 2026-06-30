/* ============================================================================
   CURRICULUM.JS
   Base de données pédagogique — Programme officiel d'Anglais du Lycée Nigérien
   Source : Nouveaux Programmes d'Enseignement, Second Cycle, République du Niger
   Niveaux couverts : Seconde (séries A & C), Première (séries A & C/D),
   Terminale (séries A & C/D) — fusionnés en un seul parcours par niveau qui
   couvre l'intégralité des thèmes, structures grammaticales et fonctions de
   communication des deux filières, afin que tout élève de Lycée s'y retrouve.
   ----------------------------------------------------------------------------
   Structure :
   CURRICULUM = {
     [levelId]: {
       title, subtitle, weeks, hours, color,
       units: [
         {
           id, title, theme, icon,
           functions: [...],          // actes de parole du programme officiel
           lessons: [
             {
               id, title, type, xp,
               intro, // courte explication pédagogique
               exercises: [ {type, ...} ]
             }
           ]
         }
       ]
     }
   }
   ========================================================================== */

const CURRICULUM = {

  /* ====================== SECONDE ====================== */
  seconde: {
    id: "seconde",
    title: "Seconde",
    subtitle: "Premier pas vers la maîtrise — révisions et structures de base",
    weeks: 25,
    hours: 100,
    color: "#16A085",
    units: [

      /* ---------- UNITE 1 : The Family and the Home ---------- */
      {
        id: "s-u1",
        title: "The Family and the Home",
        theme: "La famille et la maison",
        icon: "house",
        functions: ["Agreeing or disagreeing", "Giving directions"],
        lessons: [
          {
            id: "s-u1-l1",
            title: "Le Présent Simple & Présent Continu",
            type: "grammar",
            xp: 20,
            intro: "Révisons les deux temps les plus utilisés en anglais pour parler du présent : le Simple Present (habitudes, vérités générales) et le Present Continuous (action en cours).",
            exercises: [
              { type: "mcq", question: "Choisis la forme correcte : My mother ___ rice every Sunday.", options: ["cook", "cooks", "is cooking", "cooking"], answer: 1, explanation: "Avec une habitude répétée (every Sunday), on utilise le Simple Present : 'cooks' (3e pers. du singulier + s)." },
              { type: "mcq", question: "Choisis la forme correcte : Look! The children ___ in the yard right now.", options: ["play", "plays", "are playing", "played"], answer: 2, explanation: "'Right now' indique une action en cours → Present Continuous : 'are playing'." },
              { type: "fill", question: "She always ___ (go) to the market on Fridays.", answer: ["goes"], explanation: "Habitude → Simple Present, 3e personne du singulier : goes." },
              { type: "fill", question: "Listen! Someone ___ (knock) at the door.", answer: ["is knocking"], explanation: "Action en train de se dérouler → Present Continuous." },
              { type: "order", question: "Remets les mots dans l'ordre : (the / cleaning / is / She / house)", answer: ["She", "is", "cleaning", "the", "house"], explanation: "Sujet + auxiliaire BE + verbe-ing + complément." },
            ]
          },
          {
            id: "s-u1-l2",
            title: "Le comparatif double",
            type: "grammar",
            xp: 20,
            intro: "Pour exprimer une double comparaison (une évolution progressive), on répète le comparatif : 'It's getting darker and darker' (de plus en plus sombre).",
            exercises: [
              { type: "mcq", question: "Nowadays, cars go ___ (fast).", options: ["fast and fast", "faster and faster", "fastest and fastest", "more fast"], answer: 1, explanation: "Comparatif double avec adverbe court : faster and faster." },
              { type: "mcq", question: "Choisis la phrase correcte avec 'alike' :", options: ["Salmou and her sister are alike.", "Salmou and her sister alike are.", "Salmou alike her sister are."], answer: 0, explanation: "'Alike' se place après le verbe BE : 'are alike' = se ressemblent." },
              { type: "fill", question: "The weather is becoming ___ and ___. (hot)", answer: ["hotter", "hotter"], explanation: "Comparatif double : hotter and hotter." },
              { type: "mcq", question: "The teacher treats his students ___.", options: ["like", "alike", "as"], answer: 1, explanation: "'Treat someone alike' = traiter de manière égale." },
              { type: "fill", question: "It's getting ___ and ___ in the classroom. (dark)", answer: ["darker", "darker"], explanation: "Comparatif double avec adjectif court : darker and darker." },
            ]
          },
          {
            id: "s-u1-l3",
            title: "Vocabulaire : la maison et la famille",
            type: "vocabulary",
            xp: 15,
            intro: "Apprenons le vocabulaire essentiel pour décrire ta famille et ta maison en anglais.",
            exercises: [
              { type: "match", question: "Associe chaque mot à sa traduction.", pairs: [["sibling","frère/sœur"],["household","foyer"],["relative","parent (famille)"],["yard","cour"],["roof","toit"]] },
              { type: "mcq", question: "Comment dit-on 'beau-père' (le mari de la mère) en anglais ?", options: ["father-in-law", "stepfather", "grandfather", "uncle"], answer: 1, explanation: "'Stepfather' = beau-père (remariage). 'Father-in-law' est le père du conjoint." },
              { type: "fill", question: "My father's brother is my ___.", answer: ["uncle"], explanation: "Le frère du père = uncle (oncle)." },
              { type: "match", question: "Associe chaque pièce de la maison à sa traduction.", pairs: [["kitchen","cuisine"],["bedroom","chambre"],["living room","salon"],["courtyard","cour intérieure"],["fence","clôture"]] },
            ]
          },
          {
            id: "s-u1-l4",
            title: "Accord ou désaccord poli",
            type: "function",
            xp: 16,
            intro: "Savoir exprimer poliment son accord ou son désaccord est essentiel pour une conversation respectueuse en anglais.",
            exercises: [
              { type: "mcq", question: "Quelle expression sert à exprimer un accord ?", options: ["I couldn't agree more.", "I'm afraid not.", "That's not quite right."], answer: 0, explanation: "'I couldn't agree more' = je suis tout à fait d'accord." },
              { type: "mcq", question: "Comment exprimer un désaccord poli ?", options: ["You're totally wrong!", "I see your point, but I think...", "No way!"], answer: 1, explanation: "'I see your point, but...' permet de nuancer poliment un désaccord." },
              { type: "match", question: "Associe chaque expression à sa fonction.", pairs: [["Exactly!","Accord total"],["I'm not so sure about that.","Désaccord nuancé"],["That's a good point.","Reconnaissance"],["I beg to differ.","Désaccord formel"]] },
            ]
          },
        ]
      },

      /* ---------- UNITE 2 : Health and Diseases ---------- */
      {
        id: "s-u2",
        title: "Health and Diseases",
        theme: "Santé et maladies (paludisme, VIH/SIDA, premiers secours)",
        icon: "heart",
        functions: ["Making polite requests"],
        lessons: [
          {
            id: "s-u2-l1",
            title: "Les modaux : must, should, may, might",
            type: "grammar",
            xp: 20,
            intro: "Les modaux expriment l'obligation, le conseil ou la possibilité. 'Must' exprime aussi la déduction logique : 'He must have a fever' (il doit avoir de la fièvre).",
            exercises: [
              { type: "mcq", question: "Ali has a high temperature. He ___ have a fever.", options: ["can", "must", "may not", "needn't"], answer: 1, explanation: "Déduction logique forte → 'must' (il doit/il a sûrement)." },
              { type: "mcq", question: "You ___ tell the truth to the doctor.", options: ["ought to", "may", "can't"], answer: 0, explanation: "'Ought to' exprime un conseil moral fort, proche de 'should'." },
              { type: "fill", question: "He ___ (need not) bring his books today.", answer: ["needn't", "need not"], explanation: "'Need not / needn't' = il n'est pas nécessaire de." },
              { type: "mcq", question: "Quelle phrase exprime correctement une interdiction polie ?", options: ["You must not smoke here.", "You must to not smoke.", "You not must smoke."], answer: 0, explanation: "'Must not' (mustn't) exprime l'interdiction." },
            ]
          },
          {
            id: "s-u2-l2",
            title: "Need et Dare comme semi-modaux",
            type: "grammar",
            xp: 18,
            intro: "'Need' et 'dare' peuvent fonctionner comme des modaux (sans 's' à la 3e personne, suivis de l'infinitif sans 'to' à la forme négative).",
            exercises: [
              { type: "mcq", question: "They ___ bring their books today.", options: ["need not", "needs not", "needing not"], answer: 0, explanation: "'Need not' (semi-modal) ne prend pas de 's', même à la 3e personne du pluriel/singulier." },
              { type: "fill", question: "He ___ (dare not) go out alone at night.", answer: ["dare not", "daren't"], explanation: "'Dare not / daren't' = il n'ose pas." },
              { type: "mcq", question: "Quelle phrase est correcte ?", options: ["She need not worry.", "She needs not worry.", "She not need worry."], answer: 0, explanation: "Comme semi-modal, 'need' ne prend pas de 's' à la 3e personne." },
            ]
          },
          {
            id: "s-u2-l3",
            title: "Révision des causatifs (have/make someone do)",
            type: "grammar",
            xp: 20,
            intro: "Le causatif sert à exprimer qu'on fait faire une action par quelqu'un d'autre. Compare 'make someone do something' et 'have something done'.",
            exercises: [
              { type: "mcq", question: "The teacher always ___ a student clean the board.", options: ["makes", "has", "does"], answer: 0, explanation: "'Make someone do something' = obliger quelqu'un à faire quelque chose." },
              { type: "fill", question: "Ali has his bicycle ___ (repair).", answer: ["repaired"], explanation: "'Have something done' = faire faire quelque chose par quelqu'un d'autre (participe passé)." },
              { type: "mcq", question: "Quelle structure signifie 'faire réparer sa voiture' ?", options: ["have the car repaired", "make the car repair", "have the car repair"], answer: 0, explanation: "'Have + objet + participe passé' est la structure causative correcte." },
            ]
          },
          {
            id: "s-u2-l4",
            title: "Les expressions de quantité : no more, no longer",
            type: "grammar",
            xp: 18,
            intro: "'Anymore / no longer / any more / any longer' servent à exprimer la fin d'une situation.",
            exercises: [
              { type: "mcq", question: "I can't eat ___ food.", options: ["any more", "no more", "any longer"], answer: 0, explanation: "Avec une forme négative déjà présente (can't), on utilise 'any more'." },
              { type: "mcq", question: "Transforme : 'I can eat no more food.' a le même sens que :", options: ["I can't eat any more food.", "I eat more food.", "I never eat food."], answer: 0, explanation: "'No more' (sans négation du verbe) = 'not...any more' (avec négation du verbe)." },
              { type: "fill", question: "I can't walk any ___. (longer/long)", answer: ["longer"], explanation: "'Any longer' s'utilise pour la durée." },
              { type: "mcq", question: "Either Ali ___ Boubacar will come.", options: ["or", "nor", "and"], answer: 0, explanation: "'Either...or' = soit...soit." },
            ]
          },
          {
            id: "s-u2-l5",
            title: "Either/or, Neither/nor, Each other",
            type: "grammar",
            xp: 18,
            intro: "Ces expressions de corrélation sont très utilisées : 'either...or' (soit...soit), 'neither...nor' (ni...ni), 'each other' (l'un l'autre, réciprocité).",
            exercises: [
              { type: "mcq", question: "___ Fati ___ Ali came to school today.", options: ["Neither / nor", "Either / nor", "Both / or"], answer: 0, explanation: "'Neither...nor' = ni l'un ni l'autre n'est venu." },
              { type: "fill", question: "The two friends help ___ ___. (each)", answer: ["each other"], explanation: "'Each other' exprime une action réciproque entre deux personnes." },
              { type: "mcq", question: "Both Ali ___ Fati passed the exam.", options: ["and", "or", "nor"], answer: 0, explanation: "'Both...and' = à la fois...et." },
            ]
          },
          {
            id: "s-u2-l6",
            title: "Vocabulaire de la santé",
            type: "vocabulary",
            xp: 15,
            intro: "Le vocabulaire médical de base est essentiel, surtout pour parler de maladies comme le paludisme (malaria) très présentes au Niger.",
            exercises: [
              { type: "match", question: "Associe chaque terme médical à sa traduction.", pairs: [["fever","fièvre"],["malaria","paludisme"],["first aid","premiers secours"],["headache","mal de tête"],["recovery","guérison"]] },
              { type: "mcq", question: "Comment demander poliment de l'aide médicale ?", options: ["Give me medicine!", "Could you help me, please?", "Help now!"], answer: 1, explanation: "'Could you... please?' est une formule de politesse standard (making polite requests)." },
              { type: "match", question: "Associe chaque mot médical à sa traduction.", pairs: [["vaccine","vaccin"],["symptom","symptôme"],["treatment","traitement"],["pharmacy","pharmacie"],["nurse","infirmier/infirmière"]] },
            ]
          },
        ]
      },

      /* ---------- UNITE 3 : Sports and the Olympics ---------- */
      {
        id: "s-u3",
        title: "Sports and the Olympics",
        theme: "Sports nationaux et internationaux",
        icon: "trophy",
        functions: ["Asking for help/information"],
        lessons: [
          {
            id: "s-u3-l1",
            title: "Le futur : Simple Future & Present Continuous à valeur future",
            type: "grammar",
            xp: 20,
            intro: "On peut exprimer le futur de plusieurs façons : 'will' (Simple Future) pour les prédictions, ou le Present Continuous pour un projet déjà programmé : 'The President is leaving tomorrow.'",
            exercises: [
              { type: "mcq", question: "The President ___ for Addis Ababa tomorrow. (projet déjà programmé)", options: ["will leave", "is leaving", "leaves", "left"], answer: 1, explanation: "Present Continuous à valeur future pour un programme déjà fixé." },
              { type: "fill", question: "He can buy that car ___ he is very rich. (lien logique)", answer: ["because"], explanation: "'Because' introduit la cause." },
              { type: "mcq", question: "He will help you ___ he comes.", options: ["when", "although", "in order to"], answer: 0, explanation: "'When' introduit une subordonnée de temps." },
              { type: "fill", question: "Choisis le bon connecteur de but : I study hard ___ pass my exam. (in order to / because)", answer: ["in order to"], explanation: "'In order to' + verbe = pour (exprime le but)." },
            ]
          },
          {
            id: "s-u3-l2",
            title: "Adverbiaux de but : in order to, so as to, so that",
            type: "grammar",
            xp: 18,
            intro: "Pour exprimer un but, plusieurs structures sont possibles en anglais : 'in order to / to / so as to' + infinitif, ou 'so that' + proposition complète.",
            exercises: [
              { type: "mcq", question: "He studies hard ___ pass his exams.", options: ["so that", "in order to", "because"], answer: 1, explanation: "'In order to' + infinitif exprime le but." },
              { type: "fill", question: "She works hard ___ she can support her family. (so that)", answer: ["so that"], explanation: "'So that' + sujet + verbe exprime le but avec une proposition complète." },
              { type: "mcq", question: "He left early ___ to miss the bus.", options: ["so as not", "so as", "in order"], answer: 0, explanation: "'So as not to' = afin de ne pas (forme négative du but)." },
            ]
          },
          {
            id: "s-u3-l3",
            title: "Until/till, as far as",
            type: "grammar",
            xp: 16,
            intro: "'Until/till' expriment une limite dans le temps. 'As far as' exprime une limite dans l'espace ou une opinion limitée.",
            exercises: [
              { type: "mcq", question: "We will wait ___ the rain stops.", options: ["until", "as far as", "since"], answer: 0, explanation: "'Until' indique une limite temporelle : jusqu'à ce que." },
              { type: "fill", question: "___ as I know, the match starts at 5pm. (As far)", answer: ["As far"], explanation: "'As far as I know' = autant que je sache." },
            ]
          },
          {
            id: "s-u3-l4",
            title: "Vocabulaire du sport",
            type: "vocabulary",
            xp: 15,
            intro: "Le sport est un sujet de conversation universel — apprends à en parler en anglais !",
            exercises: [
              { type: "match", question: "Associe chaque mot de sport à sa traduction.", pairs: [["referee","arbitre"],["championship","championnat"],["to score a goal","marquer un but"],["athlete","athlète"],["medal","médaille"]] },
              { type: "mcq", question: "Comment demander une information poliment ?", options: ["Tell me now!", "Excuse me, could you tell me where the stadium is?", "Where stadium?"], answer: 1, explanation: "Formule polie standard pour demander une information (asking for information)." },
              { type: "match", question: "Associe chaque mot à sa traduction.", pairs: [["coach","entraîneur"],["opponent","adversaire"],["training","entraînement"],["victory","victoire"],["defeat","défaite"]] },
            ]
          },
        ]
      },

      /* ---------- UNITE 4 : History, Geography and Climate of Niger ---------- */
      {
        id: "s-u4",
        title: "History, Geography and Climate of Niger",
        theme: "Histoire, géographie et climat du Niger et d'ailleurs",
        icon: "globe",
        functions: ["Expressing surprise or admiration", "Expressing one's fear or worries"],
        lessons: [
          {
            id: "s-u4-l1",
            title: "Habitual Past avec 'would' & les Relatives (who/which/that)",
            type: "grammar",
            xp: 22,
            intro: "'Would' peut exprimer une habitude passée (comme 'used to'). Les pronoms relatifs who/which/that introduisent une information sur une personne ou une chose.",
            exercises: [
              { type: "mcq", question: "When I was young, I ___ play football every evening.", options: ["would", "will", "am"], answer: 0, explanation: "'Would' + verbe = habitude passée, équivalent de 'used to'." },
              { type: "mcq", question: "The man ___ is sitting next to Falmata is Fulani.", options: ["who", "which", "whose"], answer: 0, explanation: "'Who' remplace une personne sujette de la relative." },
              { type: "mcq", question: "The woman ___ I am talking to is your neighbor.", options: ["who", "which", "whom/who"], answer: 2, explanation: "Complément d'objet → 'whom' (formel) ou 'who' (courant)." },
              { type: "fill", question: "The exam was ___ easy that all the students passed it. (so/such)", answer: ["so"], explanation: "'So + adjectif + that' = tellement... que." },
              { type: "fill", question: "There was ___ much noise that I couldn't hear the teacher. (so/such)", answer: ["so"], explanation: "'So much + nom + that' = tellement de... que." },
            ]
          },
          {
            id: "s-u4-l2",
            title: "Les formes emphatiques (do/did + verbe)",
            type: "grammar",
            xp: 18,
            intro: "Pour insister sur la véracité d'une affirmation au présent ou au passé, on utilise 'do/does/did' + verbe à l'infinitif sans 'to'.",
            exercises: [
              { type: "mcq", question: "Forme emphatique : Illo ___ teach English. (insistance)", options: ["does", "is", "has"], answer: 0, explanation: "'Does teach' insiste sur le fait : il enseigne bel et bien l'anglais." },
              { type: "fill", question: "Fourera ___ (open, forme emphatique passée) the letter.", answer: ["did open"], explanation: "'Did open' insiste : elle a bel et bien ouvert la lettre." },
              { type: "mcq", question: "Quelle phrase utilise correctement la forme emphatique ?", options: ["She does likes tea.", "She does like tea.", "She do like tea."], answer: 1, explanation: "Après 'does' (emphatique), le verbe reste à l'infinitif sans 's' : does like." },
            ]
          },
          {
            id: "s-u4-l3",
            title: "Connecteurs logiques : nevertheless, however, although",
            type: "grammar",
            xp: 18,
            intro: "Ces connecteurs permettent d'exprimer une opposition ou une concession entre deux idées dans un texte.",
            exercises: [
              { type: "mcq", question: "It rained heavily. ___, the match continued.", options: ["Nevertheless", "Because", "So that"], answer: 0, explanation: "'Nevertheless' = néanmoins, malgré cela (opposition entre deux phrases)." },
              { type: "mcq", question: "___ he studied hard, he failed the exam.", options: ["Although", "Moreover", "Then"], answer: 0, explanation: "'Although' + proposition complète introduit une concession." },
              { type: "fill", question: "She is poor; ___, she is very generous. (however)", answer: ["however"], explanation: "'However' marque un contraste entre deux phrases." },
            ]
          },
          {
            id: "s-u4-l4",
            title: "Exprimer la surprise ou l'admiration",
            type: "function",
            xp: 16,
            intro: "Pour exprimer une émotion forte, on utilise souvent 'How + adjectif/adverbe !' ou 'What (a) + nom !'",
            exercises: [
              { type: "mcq", question: "Comment exprimer l'admiration sur la vitesse de quelqu'un qui court ?", options: ["How fast it runs!", "What fast!", "How it runs fast!"], answer: 0, explanation: "'How + adverbe' s'utilise sans article. 'How fast it runs!'" },
              { type: "mcq", question: "Devant un événement extraordinaire, on dira :", options: ["What a day!", "How day!", "What day!"], answer: 0, explanation: "'What a/an + nom singulier' = Quel/Quelle...!" },
              { type: "fill", question: "___ hard times! (What/How)", answer: ["What"], explanation: "Nom pluriel sans article → 'What + nom !'" },
              { type: "mcq", question: "Comment exprimer la peur ou l'inquiétude ?", options: ["I'm worried about the exam.", "I'm happy about the exam.", "I love the exam."], answer: 0, explanation: "'I'm worried about...' exprime l'inquiétude (expressing one's fear or worries)." },
            ]
          },
          {
            id: "s-u4-l5",
            title: "Vocabulaire géographique du Niger",
            type: "vocabulary",
            xp: 15,
            intro: "Apprends à décrire le climat et la géographie de ton pays en anglais.",
            exercises: [
              { type: "match", question: "Associe chaque mot géographique à sa traduction.", pairs: [["drought","sécheresse"],["rainy season","saison des pluies"],["desert","désert"],["river bank","rive du fleuve"],["climate","climat"]] },
              { type: "match", question: "Associe chaque mot à sa traduction.", pairs: [["savannah","savane"],["dune","dune"],["plateau","plateau"],["vegetation","végétation"],["dry season","saison sèche"]] },
            ]
          },
        ]
      },

      /* ---------- UNITE 5 : Agriculture, Water Resources & Desertification ---------- */
      {
        id: "s-u5",
        title: "Agriculture, Water Resources & Desertification",
        theme: "Agriculture, ressources en eau, désertification",
        icon: "leaf",
        functions: ["Apologizing"],
        lessons: [
          {
            id: "s-u5-l1",
            title: "Present Perfect & Past Perfect",
            type: "grammar",
            xp: 22,
            intro: "Le Present Perfect (have/has + participe passé) relie le passé au présent. Le Past Perfect exprime une action antérieure à une autre action passée.",
            exercises: [
              { type: "mcq", question: "I ___ lived in Niamey since 2015.", options: ["have", "has", "had", "am"], answer: 0, explanation: "'I' + 'have' + participe passé = Present Perfect." },
              { type: "mcq", question: "By the time we arrived, the rain ___ already stopped.", options: ["has", "have", "had"], answer: 2, explanation: "Action antérieure à une autre action passée → Past Perfect : 'had stopped'." },
              { type: "fill", question: "She ___ (study) English for three years now.", answer: ["has studied", "has been studying"], explanation: "Present Perfect (simple ou continu) avec 'for' = durée jusqu'à présent." },
              { type: "mcq", question: "Phrasal verb : 'do without' signifie :", options: ["se passer de", "refaire", "ne rien faire"], answer: 0, explanation: "'Do without something' = se passer de quelque chose." },
            ]
          },
          {
            id: "s-u5-l2",
            title: "Past Perfect Continuous",
            type: "grammar",
            xp: 20,
            intro: "Le Past Perfect Continuous (had been + verbe-ing) exprime une action en cours qui se déroulait avant un autre moment du passé.",
            exercises: [
              { type: "mcq", question: "She ___ for two hours when the rain stopped.", options: ["had been walking", "has walked", "was walking"], answer: 0, explanation: "Action continue antérieure à un point du passé → Past Perfect Continuous." },
              { type: "fill", question: "They ___ (wait) for an hour before the bus finally arrived.", answer: ["had been waiting"], explanation: "Past Perfect Continuous pour une durée avant un événement passé." },
            ]
          },
          {
            id: "s-u5-l3",
            title: "Phrasal verbs essentiels (give, get, do, have...)",
            type: "vocabulary",
            xp: 18,
            intro: "Les phrasal verbs (verbes + particule) changent souvent complètement de sens selon la particule employée.",
            exercises: [
              { type: "match", question: "Associe chaque phrasal verb à son sens.", pairs: [["do over","refaire"],["do without","se passer de"],["have someone over","inviter quelqu'un"],["find out","découvrir"],["set up","établir/créer"]] },
              { type: "mcq", question: "Could you ___ the lights before leaving? (éteindre)", options: ["turn off", "turn on", "turn up"], answer: 0, explanation: "'Turn off' = éteindre." },
              { type: "fill", question: "I had to ___ (do without) sugar this month. (se passer de)", answer: ["do without"], explanation: "'Do without' = se passer de quelque chose." },
            ]
          },
          {
            id: "s-u5-l4",
            title: "Few/a few, little/a little — expressions de quantité",
            type: "grammar",
            xp: 18,
            intro: "'A few/a little' indiquent une petite quantité positive. 'Few/little' (sans 'a') indiquent un manque, une quantité insuffisante.",
            exercises: [
              { type: "mcq", question: "There is ___ water left in the well. (un peu, positif)", options: ["little", "a little", "few"], answer: 1, explanation: "'A little' (indénombrable) = un peu, dans un sens positif." },
              { type: "mcq", question: "___ students passed the exam. (très peu, négatif)", options: ["A few", "Few", "A little"], answer: 1, explanation: "'Few' (sans 'a', dénombrable) exprime un manque : très peu d'élèves." },
              { type: "fill", question: "We have ___ ___ rain this year — the crops are suffering. (very little)", answer: ["very little"], explanation: "'Little' insiste sur l'insuffisance de pluie." },
            ]
          },
          {
            id: "s-u5-l5",
            title: "Less and less, more and more",
            type: "grammar",
            xp: 16,
            intro: "Ces structures expriment une évolution progressive (diminution ou augmentation continue).",
            exercises: [
              { type: "mcq", question: "There is ___ rain in the Sahel these days.", options: ["less and less", "least and least", "few and few"], answer: 0, explanation: "'Less and less' = de moins en moins (avec un nom indénombrable comme 'rain')." },
              { type: "fill", question: "Students make ___ ___ effort nowadays. (less and less)", answer: ["less and less"], explanation: "'Less and less effort' = de moins en moins d'effort." },
            ]
          },
          {
            id: "s-u5-l6",
            title: "S'excuser (Apologizing)",
            type: "function",
            xp: 14,
            intro: "Savoir s'excuser poliment est essentiel dans toute langue. Voici les formules clés.",
            exercises: [
              { type: "mcq", question: "Quelle est la formule d'excuse la plus formelle ?", options: ["My bad.", "I'm sorry, I didn't mean to.", "Oops."], answer: 1, explanation: "'I'm sorry, I didn't mean to' est une excuse formelle et complète." },
              { type: "mcq", question: "Comment répondre à des excuses ?", options: ["No problem, don't worry about it.", "Yes I am.", "Thank you."], answer: 0, explanation: "Réponse standard et courtoise à des excuses." },
              { type: "match", question: "Associe chaque expression d'excuse à son registre.", pairs: [["I do apologize for the delay.","Très formel"],["Sorry about that.","Familier"],["Please accept my apologies.","Formel"],["My bad!","Très familier"]] },
            ]
          },
        ]
      },

      /* ---------- UNITE 6 : Reported Speech & Civic Life ---------- */
      {
        id: "s-u6",
        title: "Reported Speech & Civic Life",
        theme: "Discours rapporté et vie civique",
        icon: "speech",
        functions: ["Reporting exclamatory sentences"],
        lessons: [
          {
            id: "s-u6-l1",
            title: "Rapporter une phrase exclamative",
            type: "grammar",
            xp: 20,
            intro: "Pour rapporter une exclamation, on transforme la structure : « What a terrible day! » he said → He said it was a terrible day.",
            exercises: [
              { type: "fill", question: "Transforme : 'What a beautiful house!' she said. → She said it ___ a beautiful house.", answer: ["was"], explanation: "Le discours rapporté met le verbe BE au passé : was." },
              { type: "mcq", question: "Au discours direct, 'How fast he runs!' devient au discours rapporté :", options: ["He said he ran fast.", "He said how he runs fast.", "He said that fast he runs."], answer: 0, explanation: "La structure exclamative devient une affirmation simple rapportée." },
              { type: "mcq", question: "'What hard times!' she exclaimed. → She exclaimed that...", options: ["they were hard times.", "what hard times.", "it is hard times."], answer: 0, explanation: "L'exclamation avec 'what + nom pluriel' devient une affirmation rapportée standard." },
            ]
          },
          {
            id: "s-u6-l2",
            title: "Such a + nom, So + adjectif",
            type: "grammar",
            xp: 16,
            intro: "'Such a + nom' et 'so + adjectif' servent tous deux à intensifier une description, mais leur construction diffère.",
            exercises: [
              { type: "mcq", question: "She is ___ kind person.", options: ["so", "such a", "such"], answer: 1, explanation: "'Such a + adjectif + nom singulier' = une si gentille personne." },
              { type: "fill", question: "The weather is ___ hot today! (so/such)", answer: ["so"], explanation: "'So + adjectif' (sans nom) s'utilise directement devant l'adjectif." },
              { type: "mcq", question: "It was ___ a long journey that we were exhausted.", options: ["so", "such", "very"], answer: 1, explanation: "'Such a long journey' + that = une si longue route que..." },
            ]
          },
          {
            id: "s-u6-l3",
            title: "Vocabulaire de la vie civique",
            type: "vocabulary",
            xp: 16,
            intro: "Le vocabulaire civique te permet de discuter de la société, des institutions et de la citoyenneté.",
            exercises: [
              { type: "match", question: "Associe chaque mot à sa traduction.", pairs: [["citizen","citoyen"],["government","gouvernement"],["election","élection"],["community","communauté"],["responsibility","responsabilité"]] },
              { type: "mcq", question: "Comment dit-on 'droits civiques' en anglais ?", options: ["civic rights", "civil rules", "city laws"], answer: 0, explanation: "'Civic rights' = droits civiques." },
            ]
          },
        ]
      },

      /* ---------- UNITE 7 : The Human Body (Seconde C) ---------- */
      {
        id: "s-u7",
        title: "The Human Body",
        theme: "Le corps humain",
        icon: "heart",
        functions: ["Agreeing or disagreeing", "Giving directions"],
        lessons: [
          {
            id: "s-u7-l1",
            title: "Vocabulaire du corps humain",
            type: "vocabulary",
            xp: 16,
            intro: "Apprends à nommer les parties du corps humain et à décrire des sensations physiques en anglais.",
            exercises: [
              { type: "match", question: "Associe chaque partie du corps à sa traduction.", pairs: [["skull","crâne"],["spine","colonne vertébrale"],["lungs","poumons"],["liver","foie"],["joint","articulation"]] },
              { type: "mcq", question: "Comment dit-on 'j'ai mal au dos' en anglais ?", options: ["I have a backache.", "I have a back pain me.", "My back hurting."], answer: 0, explanation: "'I have a backache' est la formule standard pour exprimer une douleur." },
              { type: "fill", question: "My ___ hurts when I run too fast. (genou)", answer: ["knee"], explanation: "'Knee' = genou." },
            ]
          },
          {
            id: "s-u7-l2",
            title: "Révision : comparatif double et 'alike'",
            type: "grammar",
            xp: 18,
            intro: "Comme pour Seconde A, ces structures de comparaison s'appliquent aussi pour décrire des ressemblances physiques entre personnes.",
            exercises: [
              { type: "mcq", question: "The twins look ___.", options: ["alike", "like", "as"], answer: 0, explanation: "'Look alike' = se ressembler physiquement." },
              { type: "fill", question: "As people grow older, their hair becomes ___ and ___. (grey, comparatif double)", answer: ["greyer", "greyer"], explanation: "Comparatif double : greyer and greyer (de plus en plus gris)." },
            ]
          },
        ]
      },

      /* ---------- UNITE 8 : Means of Transportation (Seconde C) ---------- */
      {
        id: "s-u8",
        title: "Means of Transportation",
        theme: "Moyens de transport : air, terre, eau",
        icon: "plane",
        functions: ["Making polite requests"],
        lessons: [
          {
            id: "s-u8-l1",
            title: "Vocabulaire des transports",
            type: "vocabulary",
            xp: 16,
            intro: "Le vocabulaire des transports est essentiel pour parler de voyages et de déplacements.",
            exercises: [
              { type: "match", question: "Associe chaque moyen de transport à sa traduction.", pairs: [["aircraft","avion (terme général)"],["canoe","pirogue"],["railway","voie ferrée"],["passenger","passager"],["fare","tarif (prix du trajet)"]] },
              { type: "mcq", question: "Comment dit-on 'embarquer' (dans un avion/bus) en anglais ?", options: ["to board", "to enter", "to climb"], answer: 0, explanation: "'To board' (a plane/bus/train) = embarquer." },
            ]
          },
          {
            id: "s-u8-l2",
            title: "Révision des causatifs et modaux",
            type: "grammar",
            xp: 18,
            intro: "Les modaux et causatifs étudiés en Seconde s'appliquent aussi dans le contexte des transports : obligations, déductions, services rendus.",
            exercises: [
              { type: "mcq", question: "Passengers ___ fasten their seatbelts before take-off.", options: ["must", "may", "needn't"], answer: 0, explanation: "Obligation forte (sécurité) → 'must'." },
              { type: "fill", question: "He ___ (have) his car washed before the trip.", answer: ["had"], explanation: "Causatif au passé : had + objet + participe passé." },
            ]
          },
        ]
      },

      /* ---------- UNITE 9 : Electricity (Basic Terminology) (Seconde C) ---------- */
      {
        id: "s-u9",
        title: "Electricity (Basic Terminology)",
        theme: "L'électricité : terminologie de base",
        icon: "chip",
        functions: ["Apologizing"],
        lessons: [
          {
            id: "s-u9-l1",
            title: "Vocabulaire de l'électricité",
            type: "vocabulary",
            xp: 16,
            intro: "Découvre le vocabulaire technique de base lié à l'électricité, utile pour les filières scientifiques.",
            exercises: [
              { type: "match", question: "Associe chaque terme électrique à sa traduction.", pairs: [["switch","interrupteur"],["socket","prise"],["wire","fil électrique"],["battery","pile/batterie"],["power cut","coupure de courant"]] },
              { type: "mcq", question: "Comment dit-on 'ampoule' en anglais ?", options: ["light bulb", "light ball", "bulb light"], answer: 0, explanation: "'Light bulb' = ampoule." },
              { type: "fill", question: "There was a ___ ___ last night and we had no light. (power cut)", answer: ["power cut"], explanation: "'Power cut' = coupure de courant." },
            ]
          },
        ]
      },

      /* ---------- UNITE 10 : Career Possibilities (Seconde C) ---------- */
      {
        id: "s-u10",
        title: "Career Possibilities",
        theme: "Les possibilités de carrière",
        icon: "briefcase",
        functions: ["Asking for help/information"],
        lessons: [
          {
            id: "s-u10-l1",
            title: "Vocabulaire des métiers",
            type: "vocabulary",
            xp: 16,
            intro: "Apprends à nommer les métiers et à parler de tes ambitions professionnelles en anglais.",
            exercises: [
              { type: "match", question: "Associe chaque métier à sa traduction.", pairs: [["engineer","ingénieur"],["civil servant","fonctionnaire"],["accountant","comptable"],["craftsman","artisan"],["entrepreneur","entrepreneur"]] },
              { type: "mcq", question: "Comment demander à quelqu'un quel métier il souhaite faire ?", options: ["What do you want to become?", "What you want?", "Who are you?"], answer: 0, explanation: "'What do you want to become?' est la question standard sur les ambitions professionnelles." },
            ]
          },
          {
            id: "s-u10-l2",
            title: "Connecteurs : nevertheless, moreover, though",
            type: "grammar",
            xp: 18,
            intro: "Ces connecteurs permettent d'enrichir un discours sur les choix de carrière en liant les idées de façon nuancée.",
            exercises: [
              { type: "mcq", question: "I want to become a doctor. ___, it requires many years of study.", options: ["Moreover", "Though", "Then"], answer: 0, explanation: "'Moreover' = de plus, ajoute une idée complémentaire." },
              { type: "fill", question: "He is young; he is, ___, very experienced. (though)", answer: ["though"], explanation: "'Though' en fin de phrase signifie 'cependant'." },
            ]
          },
        ]
      },

    ]
  },
  /* ====================== PREMIERE ====================== */
  premiere: {
    id: "premiere",
    title: "Première",
    subtitle: "Complexité grammaticale accrue — discussions et rédactions",
    weeks: 25,
    hours: 100,
    color: "#E8702A",
    units: [

      /* ---------- UNITE 1 : Tradition, Culture and Education ---------- */
      {
        id: "p-u1",
        title: "Tradition, Culture and Education",
        theme: "Tradition et culture en Afrique, éducation au Niger et ailleurs",
        icon: "book",
        functions: ["Apologizing", "Giving directions"],
        lessons: [
          {
            id: "p-u1-l1",
            title: "Les adverbiaux de concession : despite, in spite of, although",
            type: "grammar",
            xp: 22,
            intro: "Ces expressions introduisent une opposition. 'Despite' et 'in spite of' sont suivis d'un nom ou d'un gérondif, tandis qu'although est suivi d'une proposition complète (sujet + verbe).",
            exercises: [
              { type: "mcq", question: "___ the rain, they went to school.", options: ["Although", "Despite", "Because"], answer: 1, explanation: "'Despite' + nom (the rain), sans 'of' ici car suivi directement du nom." },
              { type: "mcq", question: "He passed the exam ___ he didn't study much.", options: ["despite", "in spite of", "although"], answer: 2, explanation: "'Although' est suivi d'une proposition complète (sujet + verbe)." },
              { type: "fill", question: "___ of being poor, he is very generous. (in spite)", answer: ["In spite"], explanation: "'In spite of' + nom/gérondif." },
              { type: "mcq", question: "My friend is ___ tall. (degré modéré)", options: ["rather", "very much", "extremely"], answer: 0, explanation: "'Rather/fairly/quite' expriment un degré modéré d'appréciation." },
            ]
          },
          {
            id: "p-u1-l2",
            title: "Adverbiaux de cause et de circonstance",
            type: "grammar",
            xp: 20,
            intro: "Le programme de Première introduit de nombreux adverbiaux pour exprimer la cause, la condition ou la circonstance : due to, owing to, instead of, whenever, wherever, whatever.",
            exercises: [
              { type: "mcq", question: "___ heavy rain, we could not go to school.", options: ["Due to", "Because", "Although"], answer: 0, explanation: "'Due to' + nom exprime la cause, comme 'owing to'." },
              { type: "fill", question: "You can sit ___ you like in this classroom. (wherever)", answer: ["wherever"], explanation: "'Wherever' = où que ce soit, n'importe où." },
              { type: "mcq", question: "___ happens, I will always support you.", options: ["Whatever", "Whenever", "Wherever"], answer: 0, explanation: "'Whatever happens' = quoi qu'il arrive." },
              { type: "fill", question: "I'll call you ___ I arrive. (whenever/as soon as)", answer: ["whenever"], explanation: "'Whenever' = chaque fois que / dès que." },
            ]
          },
          {
            id: "p-u1-l3",
            title: "La voix passive (formes avancées)",
            type: "grammar",
            xp: 24,
            intro: "Avec des verbes d'opinion (say, believe, think), la voix passive a une structure particulière : 'People say he is intelligent' → 'He is said to be intelligent.'",
            exercises: [
              { type: "mcq", question: "'People believe he came from Ghana' devient à la voix passive :", options: ["He is believed to have come from Ghana.", "He was believed to come from Ghana.", "He believed to come from Ghana."], answer: 0, explanation: "Action antérieure au verbe d'opinion → 'to have + participe passé'." },
              { type: "fill", question: "He ___ (be said) to be the best student. (forme passive)", answer: ["is said"], explanation: "'Is said to be' = on dit qu'il est." },
              { type: "mcq", question: "Caritas is an NGO that helps ___. (adjectif substantivé : les aveugles)", options: ["the blind", "blinds", "blind people only"], answer: 0, explanation: "'The + adjectif' = les personnes ayant cette caractéristique (the blind = les aveugles)." },
            ]
          },
          {
            id: "p-u1-l4",
            title: "Vocabulaire : l'éducation et la culture",
            type: "vocabulary",
            xp: 16,
            intro: "Le vocabulaire culturel et éducatif te permettra de mieux discuter de ces sujets en classe.",
            exercises: [
              { type: "match", question: "Associe chaque mot à sa traduction.", pairs: [["heritage","patrimoine"],["curriculum","programme scolaire"],["literacy","alphabétisation"],["custom","coutume"],["craftsmanship","artisanat"]] },
              { type: "match", question: "Associe chaque mot à sa traduction.", pairs: [["ancestor","ancêtre"],["ritual","rituel"],["scholarship","bourse d'études"],["graduation","remise de diplôme"],["enrollment","inscription"]] },
            ]
          },
        ]
      },

      /* ---------- UNITE 2 : Education in Niger and Elsewhere ---------- */
      {
        id: "p-u2",
        title: "Education in Niger and Elsewhere",
        theme: "L'éducation au Niger et ailleurs",
        icon: "graduation",
        functions: ["Giving directions"],
        lessons: [
          {
            id: "p-u2-l1",
            title: "Present Progressive à valeur future",
            type: "grammar",
            xp: 18,
            intro: "Pour parler d'un projet futur déjà programmé, on utilise souvent le Present Progressive plutôt que 'will'.",
            exercises: [
              { type: "mcq", question: "The President ___ to Addis Ababa tomorrow.", options: ["is traveling", "travels", "will travels"], answer: 0, explanation: "Present Progressive pour un projet futur déjà arrangé : is traveling." },
              { type: "fill", question: "We ___ (meet) the headmaster next Monday.", answer: ["are meeting"], explanation: "Present Progressive à valeur future pour un rendez-vous déjà fixé." },
            ]
          },
          {
            id: "p-u2-l2",
            title: "Rather, fairly, quite (+ adjectifs)",
            type: "grammar",
            xp: 16,
            intro: "Ces adverbes modèrent l'intensité d'un adjectif : 'rather', 'fairly' et 'quite' expriment un degré moyen d'appréciation.",
            exercises: [
              { type: "mcq", question: "This school is ___ far from my house. (assez, modéré)", options: ["rather", "extremely", "totally"], answer: 0, explanation: "'Rather' exprime un degré modéré, ni faible ni extrême." },
              { type: "fill", question: "The exam was ___ difficult, but I passed. (quite)", answer: ["quite"], explanation: "'Quite' = assez, plutôt (modération)." },
            ]
          },
          {
            id: "p-u2-l3",
            title: "Vocabulaire du système scolaire",
            type: "vocabulary",
            xp: 16,
            intro: "Apprends le vocabulaire propre au système éducatif pour décrire ton parcours scolaire.",
            exercises: [
              { type: "match", question: "Associe chaque mot scolaire à sa traduction.", pairs: [["headmaster","directeur (lycée)"],["timetable","emploi du temps"],["assessment","évaluation"],["repeat a class","redoubler"],["pass an exam","réussir un examen"]] },
            ]
          },
        ]
      },

      /* ---------- UNITE 3 : The Arts in Niger ---------- */
      {
        id: "p-u3",
        title: "The Arts in Niger",
        theme: "Les arts au Niger : musique, danse, peinture, littérature",
        icon: "sparkles",
        functions: ["Asking for help, information"],
        lessons: [
          {
            id: "p-u3-l1",
            title: "Double comparatif de changement : less and less / more and more",
            type: "grammar",
            xp: 18,
            intro: "Pour exprimer une évolution progressive avec des noms, on utilise 'less and less' ou 'more and more' suivi d'un nom.",
            exercises: [
              { type: "mcq", question: "Nowadays students make ___ effort. (de moins en moins)", options: ["less and less", "few and few", "least and least"], answer: 0, explanation: "'Less and less + nom' = de moins en moins de." },
              { type: "fill", question: "There is ___ ___ interest in traditional music. (more and more)", answer: ["more and more"], explanation: "'More and more interest' = de plus en plus d'intérêt." },
            ]
          },
          {
            id: "p-u3-l2",
            title: "Vocabulaire des arts traditionnels et modernes",
            type: "vocabulary",
            xp: 18,
            intro: "Découvre le vocabulaire pour parler des arts nigériens : musique, danse, peinture et littérature.",
            exercises: [
              { type: "match", question: "Associe chaque mot artistique à sa traduction.", pairs: [["sculpture","sculpture"],["folk song","chanson traditionnelle"],["performance","représentation/spectacle"],["exhibition","exposition"],["craftsman","artisan"]] },
              { type: "mcq", question: "Comment demander une information sur un spectacle ?", options: ["Could you tell me when the show starts?", "Show when?", "Tell me show."], answer: 0, explanation: "Formule polie standard (asking for information)." },
            ]
          },
        ]
      },

      /* ---------- UNITE 4 : Travelling and International Organizations ---------- */
      {
        id: "p-u4",
        title: "Travelling & International Organizations",
        theme: "Voyages internationaux, procédures aéroportuaires, organisations internationales",
        icon: "plane",
        functions: ["Giving one's opinion"],
        lessons: [
          {
            id: "p-u4-l1",
            title: "Les modaux d'obligation et de possibilité",
            type: "grammar",
            xp: 22,
            intro: "'Must / must not' expriment obligation et interdiction. 'Will have to' exprime une obligation future. 'May / might' expriment la possibilité.",
            exercises: [
              { type: "mcq", question: "Passengers ___ show their passports at the airport.", options: ["must", "might", "would"], answer: 0, explanation: "Obligation au présent → 'must'." },
              { type: "mcq", question: "Next year, students ___ wear new uniforms. (obligation future)", options: ["must", "will have to", "may"], answer: 1, explanation: "'Will have to' exprime une obligation future (pas encore en vigueur)." },
              { type: "fill", question: "It ___ rain tomorrow. (possibilité : may/might)", answer: ["may", "might"], explanation: "'May/might' expriment la possibilité/probabilité." },
            ]
          },
          {
            id: "p-u4-l2",
            title: "Exprimer un souhait : Wish",
            type: "grammar",
            xp: 22,
            intro: "'Wish + Simple Past' exprime un regret au présent ; 'wish + Past Perfect' exprime un regret au passé. 'Wish + infinitif' exprime un souhait réalisable.",
            exercises: [
              { type: "mcq", question: "I wish I ___ rich. (regret présent)", options: ["am", "were", "will be"], answer: 1, explanation: "'Wish + Simple Past' (were, même au singulier) pour un regret présent." },
              { type: "mcq", question: "I wish I ___ harder last year. (regret passé)", options: ["worked", "had worked", "work"], answer: 1, explanation: "'Wish + Past Perfect' pour un regret concernant le passé." },
              { type: "fill", question: "I ___ Amadou good luck. (formule de souhait + nom)", answer: ["wish"], explanation: "'Wish + nom/pronom' = souhaiter quelque chose à quelqu'un." },
              { type: "mcq", question: "Quelle phrase exprime un souhait réalisable ?", options: ["I wish to go on pilgrimage.", "I wish I were rich.", "I wish I had studied."], answer: 0, explanation: "'Wish + infinitif' exprime un souhait simple et réalisable, pas un regret." },
            ]
          },
          {
            id: "p-u4-l3",
            title: "Les pronoms relatifs whose et of which",
            type: "grammar",
            xp: 20,
            intro: "'Whose' indique une relation de possession. 'Of which' s'utilise pour les choses dans un registre plus formel.",
            exercises: [
              { type: "mcq", question: "Ali, ___ father is a doctor, wants to study medicine.", options: ["who", "whose", "which"], answer: 1, explanation: "'Whose' exprime la possession (le père d'Ali)." },
              { type: "fill", question: "This is the book ___ cover is torn. (whose/who)", answer: ["whose"], explanation: "'Whose' s'utilise aussi pour les objets en cas de possession." },
              { type: "mcq", question: "The classroom, the blackboard ___ is damaged, has been repaired.", options: ["of which", "whose", "which"], answer: 0, explanation: "'Of which' (registre formel) s'utilise pour les choses." },
            ]
          },
          {
            id: "p-u4-l4",
            title: "Donner son opinion",
            type: "function",
            xp: 16,
            intro: "Pour exprimer une opinion personnelle de façon nuancée et formelle, utilise ces expressions.",
            exercises: [
              { type: "mcq", question: "Quelle expression introduit une opinion personnelle ?", options: ["As far as I'm concerned,...", "It is said that...", "Everyone knows..."], answer: 0, explanation: "'As far as I'm concerned' = en ce qui me concerne / à mon avis." },
              { type: "mcq", question: "Complète : 'In my opinion, ___'", options: ["education is important.", "education important is.", "important education is."], answer: 0, explanation: "Ordre standard sujet-verbe-complément après l'expression d'opinion." },
            ]
          },
        ]
      },

      /* ---------- UNITE 5 : The Role of the Mass-Media ---------- */
      {
        id: "p-u5",
        title: "The Role of the Mass-Media",
        theme: "Le rôle des médias : radio, télévision, cinéma, presse",
        icon: "speech",
        functions: ["Complaining", "Making polite requests"],
        lessons: [
          {
            id: "p-u5-l1",
            title: "L'inversion après never, seldom, not once, at no time",
            type: "grammar",
            xp: 22,
            intro: "Quand certains adverbes négatifs sont placés en début de phrase pour insister, l'ordre sujet-auxiliaire s'inverse, comme dans une question.",
            exercises: [
              { type: "mcq", question: "___ had he thought of leaving his village.", options: ["Never", "Often", "Sometimes"], answer: 0, explanation: "'Never' en tête de phrase entraîne l'inversion : 'Never had he thought...'" },
              { type: "fill", question: "Not once ___ she complain about her job. (did/does)", answer: ["did"], explanation: "Inversion après 'not once' en tête de phrase : did + sujet." },
              { type: "mcq", question: "At no time ___ the journalist reveal his source.", options: ["did", "does", "had"], answer: 0, explanation: "'At no time did...' = inversion avec l'auxiliaire 'did' (passé)." },
            ]
          },
          {
            id: "p-u5-l2",
            title: "Objets directs et indirects",
            type: "grammar",
            xp: 20,
            intro: "Un verbe peut avoir un complément d'objet direct (COD) et indirect (COI) : 'She gave a book to Fati' = 'She gave Fati a book.'",
            exercises: [
              { type: "mcq", question: "Réécris : 'She gave a book to Fati' avec l'objet indirect avant :", options: ["She gave Fati a book.", "She gave a Fati book.", "Fati gave a book she."], answer: 0, explanation: "Structure : Sujet + V + COI + COD (sans 'to')." },
              { type: "fill", question: "He showed ___ his new car. (his friend / pronom complément)", answer: ["him", "his friend"], explanation: "Possible avec un nom ou un pronom complément d'objet indirect." },
            ]
          },
          {
            id: "p-u5-l3",
            title: "Phrasal verbs (expansion) : come, go, give, get",
            type: "vocabulary",
            xp: 20,
            intro: "Le programme de Première développe de nombreux phrasal verbs supplémentaires : come about, go through, give away, get across...",
            exercises: [
              { type: "match", question: "Associe chaque phrasal verb à son sens.", pairs: [["come about","se produire"],["come up with","proposer une idée"],["go through","traverser/subir"],["give away","révéler/donner"],["get across","faire comprendre"]] },
              { type: "mcq", question: "The journalist managed to ___ his message. (faire comprendre)", options: ["get across", "get ahead", "get into"], answer: 0, explanation: "'Get a message across' = faire comprendre/faire passer un message." },
              { type: "fill", question: "How did this problem ___ (come about)?", answer: ["come about"], explanation: "'Come about' = se produire, survenir." },
            ]
          },
          {
            id: "p-u5-l4",
            title: "Phrasal verbs (expansion) : set, bring, make, put",
            type: "vocabulary",
            xp: 20,
            intro: "Poursuite de l'étude des phrasal verbs : set up, bring about, make up, put off et bien d'autres.",
            exercises: [
              { type: "match", question: "Associe chaque phrasal verb à son sens.", pairs: [["set up","créer/établir"],["bring about","provoquer"],["make up","inventer/se réconcilier"],["put off","reporter"],["put away","ranger"]] },
              { type: "mcq", question: "The meeting has been ___ until next week. (reportée)", options: ["put off", "put away", "put on"], answer: 0, explanation: "'Put off' = reporter/repousser." },
              { type: "fill", question: "She decided to ___ (set up) her own newspaper. (créer)", answer: ["set up"], explanation: "'Set up' = établir, créer (une entreprise, une organisation)." },
            ]
          },
          {
            id: "p-u5-l5",
            title: "Se plaindre poliment (Complaining)",
            type: "function",
            xp: 16,
            intro: "Savoir exprimer une plainte de façon constructive et polie est une compétence de communication importante.",
            exercises: [
              { type: "mcq", question: "Quelle formule introduit une plainte polie ?", options: ["I'm afraid there's a problem with...", "This is terrible!", "You never do anything right!"], answer: 0, explanation: "'I'm afraid there's a problem with...' est une formule de plainte mesurée et professionnelle." },
              { type: "mcq", question: "Comment se plaindre du bruit chez un voisin poliment ?", options: ["Could you please keep the noise down?", "Stop that noise now!", "You're so noisy!"], answer: 0, explanation: "'Could you please...' reste poli même en exprimant une plainte." },
            ]
          },
        ]
      },

      /* ---------- UNITE 6 : Electricity — Uses and Appliances ---------- */
      {
        id: "p-u6",
        title: "Electricity: Uses and Appliances",
        theme: "L'électricité : usages, appareils, hydroélectricité, énergie solaire",
        icon: "chip",
        functions: ["Asking for help, information"],
        lessons: [
          {
            id: "p-u6-l1",
            title: "Adverbiaux : despite, in spite of, due to, owing to, instead of",
            type: "grammar",
            xp: 20,
            intro: "Révision approfondie des adverbiaux de concession et de cause, appliqués au contexte technique de l'électricité et de l'énergie.",
            exercises: [
              { type: "mcq", question: "___ his hard work, Ali failed the final exam.", options: ["In spite of", "Because of", "Due to"], answer: 0, explanation: "'In spite of' + nom exprime la concession (malgré)." },
              { type: "fill", question: "___ heavy rain, we could not go to school. (Due to)", answer: ["Due to"], explanation: "'Due to' + nom exprime la cause." },
              { type: "mcq", question: "We use solar panels ___ traditional electricity in rural areas.", options: ["instead of", "despite", "owing to"], answer: 0, explanation: "'Instead of' = à la place de." },
            ]
          },
          {
            id: "p-u6-l2",
            title: "Vocabulaire de l'énergie",
            type: "vocabulary",
            xp: 18,
            intro: "Apprends le vocabulaire des sources d'énergie : hydroélectricité, énergie solaire, appareils électriques.",
            exercises: [
              { type: "match", question: "Associe chaque mot d'énergie à sa traduction.", pairs: [["solar panel","panneau solaire"],["hydroelectric dam","barrage hydroélectrique"],["appliance","appareil électroménager"],["renewable energy","énergie renouvelable"],["generator","générateur"]] },
              { type: "mcq", question: "Comment dit-on 'consommation d'énergie' en anglais ?", options: ["energy consumption", "energy using", "power eating"], answer: 0, explanation: "'Energy consumption' = consommation d'énergie." },
            ]
          },
        ]
      },

      /* ---------- UNITE 7 : International Trade, Banking and Commerce ---------- */
      {
        id: "p-u7",
        title: "International Trade, Banking and Commerce",
        theme: "Commerce international, banque et activités commerciales",
        icon: "briefcase",
        functions: ["Making polite requests"],
        lessons: [
          {
            id: "p-u7-l1",
            title: "La voix passive dans le contexte économique",
            type: "grammar",
            xp: 20,
            intro: "La voix passive est très utilisée dans les textes économiques et commerciaux pour insister sur l'action plutôt que sur l'acteur.",
            exercises: [
              { type: "mcq", question: "Millions of dollars ___ traded every day on this market.", options: ["are", "is", "be"], answer: 0, explanation: "Sujet pluriel (millions) → 'are' à la voix passive." },
              { type: "fill", question: "This bank ___ (found) in 1990.", answer: ["was founded"], explanation: "Voix passive au passé : was founded = a été fondée." },
              { type: "mcq", question: "Goods ___ to be imported from China.", options: ["are said", "is said", "say"], answer: 0, explanation: "'Are said to be' = on dit qu'ils sont (voix passive avec verbe d'opinion)." },
            ]
          },
          {
            id: "p-u7-l2",
            title: "Vocabulaire du commerce et de la banque",
            type: "vocabulary",
            xp: 18,
            intro: "Le vocabulaire commercial et bancaire est essentiel pour comprendre l'économie et les échanges internationaux.",
            exercises: [
              { type: "match", question: "Associe chaque mot économique à sa traduction.", pairs: [["currency","monnaie"],["interest rate","taux d'intérêt"],["import/export","importation/exportation"],["loan","prêt"],["transaction","transaction"]] },
              { type: "mcq", question: "Comment demander poliment des informations bancaires ?", options: ["I would like some information about opening an account, please.", "Tell me about accounts now.", "Account information!"], answer: 0, explanation: "Formule polie et formelle adaptée au contexte bancaire (making polite requests)." },
            ]
          },
        ]
      },

      /* ---------- UNITE 8 : Phrasal Verbs & Relative Pronouns ---------- */
      {
        id: "p-u8",
        title: "Phrasal Verbs & Relative Pronouns",
        theme: "Verbes à particules et pronoms relatifs (récapitulatif)",
        icon: "puzzle",
        functions: ["Apologizing"],
        lessons: [
          {
            id: "p-u8-l1",
            title: "Whose et of which — révision approfondie",
            type: "grammar",
            xp: 20,
            intro: "Révisons en profondeur 'whose' et 'of which', deux pronoms relatifs essentiels pour des phrases complexes.",
            exercises: [
              { type: "mcq", question: "The teacher ___ class I attend is very strict.", options: ["who", "whose", "which"], answer: 1, explanation: "'Whose' exprime la possession (la classe DU professeur)." },
              { type: "fill", question: "This is the book ___ cover is torn. (whose/who)", answer: ["whose"], explanation: "'Whose' s'utilise aussi pour les objets en cas de possession." },
            ]
          },
          {
            id: "p-u8-l2",
            title: "Phrasal verbs essentiels — récapitulatif",
            type: "vocabulary",
            xp: 18,
            intro: "Un dernier tour d'horizon des phrasal verbs les plus utiles vus en Première.",
            exercises: [
              { type: "match", question: "Associe chaque phrasal verb à son sens.", pairs: [["set up","établir/créer"],["bring about","provoquer/causer"],["make up","inventer/se réconcilier"],["put off","reporter/repousser"],["find out","découvrir"]] },
              { type: "mcq", question: "She decided to ___ her own business. (créer)", options: ["set up", "set back", "set out"], answer: 0, explanation: "'Set up a business' = créer une entreprise." },
            ]
          },
        ]
      },

      /* ---------- UNITE 9 : The World of Sports ---------- */
      {
        id: "p-u9",
        title: "The World of Sports",
        theme: "Sports nationaux et internationaux, les Jeux Olympiques",
        icon: "trophy",
        functions: ["Giving one's opinion", "Asking for help/information"],
        lessons: [
          {
            id: "p-u9-l1",
            title: "Objets directs et indirects (approfondissement)",
            type: "grammar",
            xp: 20,
            intro: "Reprenons la structure des doubles compléments d'objet dans un contexte sportif.",
            exercises: [
              { type: "mcq", question: "The coach gave ___ some advice before the match.", options: ["the players", "to the players", "for the players"], answer: 0, explanation: "Objet indirect placé directement après le verbe, sans préposition." },
              { type: "fill", question: "The referee showed ___ a red card. (the player / pronom)", answer: ["him", "the player"], explanation: "L'objet indirect peut être un nom ou un pronom complément." },
            ]
          },
          {
            id: "p-u9-l2",
            title: "Inversion après 'no sooner...than'",
            type: "grammar",
            xp: 22,
            intro: "Quand une phrase commence par 'no sooner', l'ordre sujet-verbe s'inverse (comme une question).",
            exercises: [
              { type: "mcq", question: "No sooner ___ the match started than it began to rain.", options: ["had", "have", "did"], answer: 0, explanation: "Inversion : 'No sooner had + sujet + participe passé...'" },
              { type: "fill", question: "Hardly ___ he finished eating than the visitors arrived. (had/has)", answer: ["had"], explanation: "Avec 'hardly...than', on utilise 'had + participe passé' (Past Perfect inversé)." },
            ]
          },
          {
            id: "p-u9-l3",
            title: "Vocabulaire : sport et compétitions internationales",
            type: "vocabulary",
            xp: 16,
            intro: "Vocabulaire essentiel pour parler des Jeux Olympiques et des compétitions internationales.",
            exercises: [
              { type: "match", question: "Associe chaque mot à sa traduction.", pairs: [["host country","pays hôte"],["opening ceremony","cérémonie d'ouverture"],["world record","record du monde"],["qualification","qualification"],["doping","dopage"]] },
            ]
          },
        ]
      },

    ]
  },
  /* ====================== TERMINALE ====================== */
  terminale: {
    id: "terminale",
    title: "Terminale",
    subtitle: "Maîtrise avancée — examens, opinions et structures complexes",
    weeks: 20,
    hours: 80,
    color: "#1B1336",
    units: [

      /* ---------- UNITE 1 : Education in Niger and Abroad ---------- */
      {
        id: "t-u1",
        title: "Education in Niger and Abroad",
        theme: "Éducation au Niger et à l'étranger",
        icon: "graduation",
        functions: ["Expressing desires and regrets", "Apologizing"],
        lessons: [
          {
            id: "t-u1-l1",
            title: "Comparatifs less/more + adjectif ou nom",
            type: "grammar",
            xp: 20,
            intro: "Révision et approfondissement des structures comparatives 'less/more + adjectif ou nom + than', essentielles pour des comparaisons nuancées.",
            exercises: [
              { type: "mcq", question: "The English test was ___ difficult than the Math one.", options: ["less", "least", "the less"], answer: 0, explanation: "'Less + adjectif + than' = moins... que." },
              { type: "fill", question: "There is ___ water in a bucket than in a bottle. (more)", answer: ["more"], explanation: "'More + nom + than' = plus de... que." },
            ]
          },
          {
            id: "t-u1-l2",
            title: "Les degrés de comparaison avancés",
            type: "grammar",
            xp: 24,
            intro: "Pour renforcer un comparatif, on utilise 'much/far + comparatif' ou 'much more/far more + adjectif long'.",
            exercises: [
              { type: "mcq", question: "Habibou is ___ stronger than his brother. (renforcement)", options: ["much", "very", "so"], answer: 0, explanation: "'Much + comparatif court' renforce la comparaison." },
              { type: "mcq", question: "English is ___ interesting than Physics. (adjectif long)", options: ["much more", "much", "far"], answer: 0, explanation: "Avec un adjectif long, on utilise 'much more / far more + adjectif'." },
              { type: "fill", question: "A bicycle is far ___ expensive than a car. (less/least)", answer: ["less"], explanation: "'Far less + adjectif' = bien moins... que." },
              { type: "mcq", question: "The second hole is twice ___ big as the first one. (ratio)", options: ["as", "than", "that"], answer: 0, explanation: "Structure du ratio : 'twice/three times + as + adjectif + as'." },
            ]
          },
          {
            id: "t-u1-l3",
            title: "Comparaisons avec noms dénombrables et indénombrables",
            type: "grammar",
            xp: 18,
            intro: "Les structures comparatives changent légèrement selon que le nom est dénombrable ou indénombrable.",
            exercises: [
              { type: "mcq", question: "Abdou has ___ money than his friend. (indénombrable)", options: ["a little / a lot more", "a few more", "many more"], answer: 0, explanation: "Avec un nom indénombrable (money), on utilise 'a little more / a lot more'." },
              { type: "mcq", question: "Halidou has ___ books than Saidou. (dénombrable)", options: ["a few more", "a little more", "much more"], answer: 0, explanation: "Avec un nom dénombrable (books), on utilise 'a few more'." },
            ]
          },
          {
            id: "t-u1-l4",
            title: "Exprimer des désirs et des regrets",
            type: "function",
            xp: 18,
            intro: "Au niveau Terminale, on affine l'expression des désirs et regrets avec des structures plus nuancées.",
            exercises: [
              { type: "mcq", question: "Quelle phrase exprime un désir réalisable dans le futur ?", options: ["I wish to travel to Europe one day.", "I wish I were a bird.", "I wish I had studied harder."], answer: 0, explanation: "'Wish + infinitif' exprime un désir simple et réalisable." },
              { type: "mcq", question: "Quelle phrase exprime un regret sur le passé ?", options: ["I wish I had worked harder.", "I wish to work harder.", "I wish I work harder."], answer: 0, explanation: "'Wish + Past Perfect' = regret sur une action passée." },
            ]
          },
        ]
      },

      /* ---------- UNITE 2 : Science and Technology (NTIC) ---------- */
      {
        id: "t-u2",
        title: "Science, Technology (NTIC) & Inversion",
        theme: "Sciences, nouvelles technologies de l'information",
        icon: "chip",
        functions: ["Giving directions", "Asking for help"],
        lessons: [
          {
            id: "t-u2-l1",
            title: "Future Continuous & Future Perfect",
            type: "grammar",
            xp: 22,
            intro: "Le Future Continuous décrit une action en cours à un moment futur précis. Le Future Perfect décrit une action achevée avant un moment futur.",
            exercises: [
              { type: "mcq", question: "This time tomorrow, I ___ my exam. (action en cours)", options: ["will be taking", "will take", "will have taken"], answer: 0, explanation: "Future Continuous : action en cours à un moment précis du futur." },
              { type: "mcq", question: "By next year, she ___ her studies. (achevée avant un point futur)", options: ["will finish", "will have finished", "will be finishing"], answer: 1, explanation: "Future Perfect : action achevée avant un point précis dans le futur." },
            ]
          },
          {
            id: "t-u2-l2",
            title: "Le gérondif après certains verbes et prépositions",
            type: "grammar",
            xp: 20,
            intro: "Le gérondif (verbe-ing) s'utilise après certains verbes et systématiquement après une préposition.",
            exercises: [
              { type: "mcq", question: "On ___ home, he found the door open. (en arrivant)", options: ["arriving", "arrive", "arrived"], answer: 0, explanation: "Gérondif après préposition 'on' : on arriving = en arrivant." },
              { type: "fill", question: "After ___ (wash) his hands, he ate food.", answer: ["washing"], explanation: "Gérondif après préposition 'after'." },
              { type: "mcq", question: "Because of ___ late, I missed the English class.", options: ["sleeping", "sleep", "slept"], answer: 0, explanation: "'Because of' est suivi du gérondif." },
            ]
          },
          {
            id: "t-u2-l3",
            title: "Comparaisons avec adverbiaux : in contrast to, unlike, while/whereas",
            type: "grammar",
            xp: 20,
            intro: "Ces structures permettent d'exprimer un contraste élégant entre deux éléments, très utiles à l'écrit académique.",
            exercises: [
              { type: "mcq", question: "___ his sister, Ali is a hard-working student.", options: ["In contrast to", "Because of", "Due to"], answer: 0, explanation: "'In contrast to' = contrairement à, par contraste avec." },
              { type: "fill", question: "Niger produces uranium ___ Burkina Faso doesn't. (while/whereas)", answer: ["while", "whereas"], explanation: "'While/whereas' expriment un contraste entre deux faits." },
              { type: "mcq", question: "___ his brother, Amadou hates football.", options: ["Unlike", "Like", "As"], answer: 0, explanation: "'Unlike' = contrairement à, à la différence de." },
            ]
          },
          {
            id: "t-u2-l4",
            title: "L'inversion après never, seldom, at no time",
            type: "grammar",
            xp: 24,
            intro: "Quand certains adverbes négatifs sont placés en début de phrase pour insister, l'ordre sujet-auxiliaire s'inverse.",
            exercises: [
              { type: "mcq", question: "___ had he thought of leaving his village.", options: ["Never", "Often", "Sometimes"], answer: 0, explanation: "'Never' en tête de phrase entraîne l'inversion : 'Never had he thought...'" },
              { type: "fill", question: "At no time ___ she complain about her work. (did/does)", answer: ["did"], explanation: "Inversion avec l'auxiliaire 'did' pour le passé." },
              { type: "mcq", question: "___ will he disobey his teachers. (jamais)", options: ["Never", "Always", "Sometimes"], answer: 0, explanation: "'Never' en tête de phrase entraîne l'inversion auxiliaire-sujet." },
            ]
          },
          {
            id: "t-u2-l5",
            title: "Inversion avec 'no sooner...than' et 'hardly...than'",
            type: "grammar",
            xp: 22,
            intro: "Ces structures rares mais élégantes décrivent deux événements qui se suivent immédiatement, avec inversion du sujet et de l'auxiliaire.",
            exercises: [
              { type: "mcq", question: "No sooner ___ the students arrived than they started arguing.", options: ["had", "have", "did"], answer: 0, explanation: "Inversion : 'No sooner had + sujet + participe passé...'" },
              { type: "fill", question: "Hardly ___ he finished eating than the visitors arrived. (had/has)", answer: ["had"], explanation: "Avec 'hardly...than', on utilise 'had + participe passé' (Past Perfect inversé)." },
              { type: "mcq", question: "Quel mot peut aussi être utilisé en début de phrase avec inversion ?", options: ["Scarcely", "Usually", "Sometimes"], answer: 0, explanation: "'Scarcely', 'rarely', 'barely' fonctionnent comme 'hardly' avec inversion." },
            ]
          },
          {
            id: "t-u2-l6",
            title: "Vocabulaire : technologie et NTIC",
            type: "vocabulary",
            xp: 16,
            intro: "Le vocabulaire des nouvelles technologies est essentiel pour les discussions modernes en anglais.",
            exercises: [
              { type: "match", question: "Associe chaque terme technologique à sa traduction.", pairs: [["device","appareil"],["network","réseau"],["data","données"],["software","logiciel"],["bandwidth","bande passante"]] },
              { type: "match", question: "Associe chaque terme à sa traduction.", pairs: [["artificial intelligence","intelligence artificielle"],["server","serveur"],["upload","téléverser"],["download","télécharger"],["cybersecurity","cybersécurité"]] },
            ]
          },
        ]
      },

      /* ---------- UNITE 3 : Arts — Current Issues ---------- */
      {
        id: "t-u3",
        title: "Arts: Current Issues",
        theme: "Actualités dans la littérature, la peinture, la musique et la danse",
        icon: "sparkles",
        functions: ["Giving directions", "Asking for help, information"],
        lessons: [
          {
            id: "t-u3-l1",
            title: "Such (a) + nom + that",
            type: "grammar",
            xp: 18,
            intro: "'Such (a) + nom + that' exprime une conséquence intense, similaire à 'so + adjectif + that' mais avec un nom.",
            exercises: [
              { type: "mcq", question: "She is ___ a liar that nobody believes her.", options: ["such", "so", "very"], answer: 0, explanation: "'Such a + nom + that' = une telle/un tel... que." },
              { type: "fill", question: "It was ___ a beautiful performance that the audience applauded for minutes. (such)", answer: ["such"], explanation: "'Such a + adjectif + nom + that' insiste sur la qualité exceptionnelle." },
            ]
          },
          {
            id: "t-u3-l2",
            title: "Description d'un procédé (How to make something)",
            type: "grammar",
            xp: 18,
            intro: "Décrire un procédé artistique ou technique nécessite des connecteurs de séquence et souvent la voix passive.",
            exercises: [
              { type: "mcq", question: "First, the clay ___ shaped by hand.", options: ["is", "does", "has"], answer: 0, explanation: "Voix passive pour décrire un procédé : is shaped (est façonnée)." },
              { type: "fill", question: "___, the paint is applied in thin layers. (Next/First — connecteur de séquence)", answer: ["Next", "Then"], explanation: "Les connecteurs de séquence (first, next, then, finally) structurent la description d'un procédé." },
            ]
          },
          {
            id: "t-u3-l3",
            title: "Prepositions 'but' et 'except' (sans gérondif)",
            type: "grammar",
            xp: 16,
            intro: "Attention : contrairement aux autres prépositions, 'but' et 'except' ne sont jamais suivies du gérondif, mais de l'infinitif sans 'to'.",
            exercises: [
              { type: "mcq", question: "She does nothing but ___ in class. (dormir)", options: ["sleep", "sleeping", "to sleep"], answer: 0, explanation: "'But' est suivi de l'infinitif sans 'to', exception aux autres prépositions." },
              { type: "fill", question: "He can do any work around the house except ___. (cook)", answer: ["cook"], explanation: "'Except' + infinitif sans 'to' (exception grammaticale)." },
            ]
          },
        ]
      },

      /* ---------- UNITE 4 : Careers ---------- */
      {
        id: "t-u4",
        title: "Careers in Commerce, Industry, Banking & Civil Service",
        theme: "Carrières dans le commerce, l'industrie, la banque, la fonction publique",
        icon: "briefcase",
        functions: ["Making polite requests"],
        lessons: [
          {
            id: "t-u4-l1",
            title: "Les causatifs : have something done",
            type: "grammar",
            xp: 22,
            intro: "La structure causative 'have something done' indique qu'on fait faire quelque chose par quelqu'un d'autre.",
            exercises: [
              { type: "mcq", question: "Ali ___ his bicycle repaired. (il l'a fait réparer)", options: ["has", "had", "do"], answer: 1, explanation: "'Had + objet + participe passé' = forme causative au passé." },
              { type: "fill", question: "He ___ (have) his car washed yesterday.", answer: ["had"], explanation: "Causatif au passé : had + objet + participe passé." },
              { type: "mcq", question: "Ali helped me carry the sack of millet. (causatif incomplet) — quelle structure illustre un infinitif incomplet ?", options: ["helped me carry", "helped me to carrying", "help carry me"], answer: 0, explanation: "'Help someone + verbe (infinitif sans to)' est une structure causative à infinitif incomplet." },
            ]
          },
          {
            id: "t-u4-l2",
            title: "Lettre de demande d'emploi (vocabulaire)",
            type: "vocabulary",
            xp: 18,
            intro: "Le vocabulaire pour rédiger une demande d'emploi formelle est une compétence clé du programme de Terminale.",
            exercises: [
              { type: "match", question: "Associe chaque terme professionnel à sa traduction.", pairs: [["application letter","lettre de motivation"],["curriculum vitae","CV"],["job vacancy","poste vacant"],["interview","entretien"],["qualification","qualification"]] },
              { type: "mcq", question: "Comment commence une lettre de motivation formelle ?", options: ["Dear Sir or Madam,", "Hey there!", "Hi friend,"], answer: 0, explanation: "'Dear Sir or Madam' est la formule d'ouverture standard d'une lettre formelle." },
            ]
          },
          {
            id: "t-u4-l3",
            title: "Demandes polies avancées",
            type: "function",
            xp: 18,
            intro: "Pour faire une demande très polie et formelle, utilise ces structures sophistiquées du programme de Terminale.",
            exercises: [
              { type: "mcq", question: "Formule de demande polie et formelle :", options: ["Would you mind helping me?", "Help me!", "Can you help?"], answer: 0, explanation: "'Would you mind + gérondif' est très formel et poli." },
              { type: "mcq", question: "Quelle phrase utilise 'I was wondering' correctement ?", options: ["I was wondering if you could help me.", "I was wonder if you help me.", "I wondering if you could help."], answer: 0, explanation: "'I was wondering if + sujet + could/would' est une formule polie classique." },
            ]
          },
        ]
      },

      /* ---------- UNITE 5 : Wh-noun Clauses & Compound Adjectives ---------- */
      {
        id: "t-u5",
        title: "Wh-noun Clauses & Compound Adjectives",
        theme: "Propositions nominales en Wh- et adjectifs composés",
        icon: "layers",
        functions: ["Giving advice"],
        lessons: [
          {
            id: "t-u5-l1",
            title: "Wh- noun clauses",
            type: "grammar",
            xp: 22,
            intro: "Une proposition introduite par Wh- (what, how, where...) peut fonctionner comme sujet ou objet dans une phrase.",
            exercises: [
              { type: "mcq", question: "I have no idea ___ Boubon market is. (comme objet)", options: ["how big", "what big", "how much big"], answer: 0, explanation: "'How + adjectif' introduit une proposition nominale décrivant un degré." },
              { type: "mcq", question: "___ Gambi did made her famous. (sujet)", options: ["What", "How", "Which"], answer: 0, explanation: "'What + sujet + verbe' peut fonctionner comme sujet de la phrase entière." },
            ]
          },
          {
            id: "t-u5-l2",
            title: "Les adjectifs composés",
            type: "grammar",
            xp: 20,
            intro: "Les adjectifs composés combinent deux mots (souvent avec un trait d'union) pour créer une description précise.",
            exercises: [
              { type: "mcq", question: "They are sitting on a ___ chair. (jambes longues)", options: ["long-legged", "longs-leg", "leg-long"], answer: 0, explanation: "Adjectif composé : nom + participe passé avec trait d'union." },
              { type: "fill", question: "She has light-___ skin. (couleur claire)", answer: ["skinned"], explanation: "'Light-skinned' = à la peau claire." },
              { type: "mcq", question: "Distingue : 'a two-day workshop' vs 'a workshop for two days'. Lequel utilise un adjectif composé ?", options: ["a two-day workshop", "a workshop for two days", "les deux"], answer: 0, explanation: "'Two-day' avec trait d'union et nom singulier = adjectif composé." },
            ]
          },
          {
            id: "t-u5-l3",
            title: "Le relatif 'whom'",
            type: "grammar",
            xp: 18,
            intro: "'Whom' est la forme formelle du pronom relatif objet pour les personnes, souvent utilisée après une préposition.",
            exercises: [
              { type: "mcq", question: "The woman ___ I spoke yesterday was my friend's mother.", options: ["to whom", "who", "which"], answer: 0, explanation: "'To whom' (formel) s'utilise après une préposition pour une personne." },
              { type: "fill", question: "The man ___ you met is my uncle. (whom — registre formel)", answer: ["whom"], explanation: "'Whom' remplace l'objet de la relative dans un registre soutenu." },
            ]
          },
          {
            id: "t-u5-l4",
            title: "Donner des conseils (Giving advice)",
            type: "function",
            xp: 16,
            intro: "Donner un bon conseil en anglais nécessite des formules adaptées au degré de fermeté souhaité.",
            exercises: [
              { type: "mcq", question: "Quelle formule donne un conseil fort ?", options: ["You'd better see a doctor.", "You might see a doctor.", "Maybe a doctor?"], answer: 0, explanation: "'You'd better' (you had better) exprime un conseil pressant." },
              { type: "mcq", question: "Quelle formule donne un conseil plus doux ?", options: ["If I were you, I would rest.", "You must rest now!", "Rest!"], answer: 0, explanation: "'If I were you, I would...' est une formule de conseil nuancée et courtoise." },
            ]
          },
        ]
      },

      /* ---------- UNITE 6 : Development Issues & The World Around Us ---------- */
      {
        id: "t-u6",
        title: "Development Issues & The World Around Us",
        theme: "Questions de développement, catastrophes naturelles, avenir de la planète",
        icon: "globe",
        functions: ["Giving advice", "Making polite requests"],
        lessons: [
          {
            id: "t-u6-l1",
            title: "La concordance des temps au discours rapporté",
            type: "grammar",
            xp: 22,
            intro: "Le discours rapporté implique une concordance des temps : le présent devient passé, le passé devient plus-que-parfait, etc.",
            exercises: [
              { type: "mcq", question: "Direct : 'I am tired,' she said. → Rapporté : She said ___ tired.", options: ["she was", "she is", "she be"], answer: 0, explanation: "Présent → passé dans le discours rapporté : 'am' devient 'was'." },
              { type: "mcq", question: "Direct : 'I will come,' he said. → Rapporté : He said he ___ come.", options: ["would", "will", "can"], answer: 0, explanation: "'Will' devient 'would' au discours rapporté." },
              { type: "fill", question: "Direct : 'I have finished,' she said. → Rapporté : She said she ___ finished. (had)", answer: ["had"], explanation: "Present Perfect → Past Perfect dans le discours rapporté." },
            ]
          },
          {
            id: "t-u6-l2",
            title: "Révision : voix active et passive",
            type: "grammar",
            xp: 20,
            intro: "Savoir transformer une phrase de la voix active à la voix passive (et inversement) est essentiel pour varier son style à l'écrit.",
            exercises: [
              { type: "mcq", question: "Voix active : 'The flood destroyed the village.' → Voix passive :", options: ["The village was destroyed by the flood.", "The village destroyed the flood.", "The village is destroying the flood."], answer: 0, explanation: "Voix passive : objet devient sujet + BE + participe passé + by + agent." },
              { type: "fill", question: "Active : 'They will rebuild the houses.' → Passive : The houses ___ ___ rebuilt. (will be)", answer: ["will be"], explanation: "Voix passive au futur : will be + participe passé." },
            ]
          },
          {
            id: "t-u6-l3",
            title: "Vocabulaire : catastrophes naturelles et environnement",
            type: "vocabulary",
            xp: 18,
            intro: "Vocabulaire essentiel pour parler des catastrophes naturelles et des enjeux environnementaux mondiaux.",
            exercises: [
              { type: "match", question: "Associe chaque mot à sa traduction.", pairs: [["flood","inondation"],["natural disaster","catastrophe naturelle"],["pollution","pollution"],["sustainable","durable"],["ecosystem","écosystème"]] },
              { type: "match", question: "Associe chaque mot à sa traduction.", pairs: [["climate change","changement climatique"],["greenhouse gas","gaz à effet de serre"],["renewable","renouvelable"],["famine","famine"],["relief aid","aide humanitaire"]] },
            ]
          },
          {
            id: "t-u6-l4",
            title: "Demandes polies dans un contexte humanitaire",
            type: "function",
            xp: 16,
            intro: "Dans un contexte de développement ou d'urgence humanitaire, savoir demander de l'aide poliment et formellement est crucial.",
            exercises: [
              { type: "mcq", question: "Quelle formule est adaptée pour demander de l'aide à une organisation ?", options: ["We would be grateful for any assistance you could provide.", "Give us help now!", "We need help."], answer: 0, explanation: "Formule très formelle et respectueuse, adaptée à un contexte humanitaire/officiel." },
            ]
          },
        ]
      },

      /* ---------- UNITE 7 : Writing Skills — Process & Application Letters ---------- */
      {
        id: "t-u7",
        title: "Writing Skills: Process Description & Application Letters",
        theme: "Compétences rédactionnelles : description de procédé et lettre de motivation",
        icon: "book",
        functions: ["Giving directions"],
        lessons: [
          {
            id: "t-u7-l1",
            title: "Rédiger un texte à plusieurs paragraphes",
            type: "grammar",
            xp: 20,
            intro: "Le programme de Terminale exige de savoir structurer un texte cohérent de plusieurs paragraphes avec des connecteurs logiques variés.",
            exercises: [
              { type: "mcq", question: "Quel connecteur introduit une conclusion ?", options: ["In conclusion,", "Firstly,", "Moreover,"], answer: 0, explanation: "'In conclusion' introduit la dernière partie d'un texte structuré." },
              { type: "mcq", question: "Quel connecteur ajoute une idée supplémentaire ?", options: ["Furthermore,", "However,", "Despite,"], answer: 0, explanation: "'Furthermore' = de plus, ajoute une idée dans la continuité." },
            ]
          },
          {
            id: "t-u7-l2",
            title: "Décrire un procédé : how tea is made",
            type: "vocabulary",
            xp: 18,
            intro: "Décrire un procédé (comment fabriquer ou préparer quelque chose) utilise souvent la voix passive et des connecteurs de séquence.",
            exercises: [
              { type: "mcq", question: "First, the tea leaves ___ picked by hand.", options: ["are", "do", "have"], answer: 0, explanation: "Voix passive pour décrire un procédé général." },
              { type: "fill", question: "___, the leaves are dried in the sun. (Then/Next — connecteur)", answer: ["Then", "Next"], explanation: "Connecteur de séquence pour enchaîner les étapes d'un procédé." },
            ]
          },
        ]
      },

    ]
  }
};

/* Liste ordonnée des niveaux pour la navigation */
const LEVEL_ORDER = ["seconde", "premiere", "terminale"];

/* Export pour usage global (pas de modules ES pour rester compatible simplement) */
window.CURRICULUM = CURRICULUM;
window.LEVEL_ORDER = LEVEL_ORDER;
