const recettesDepart = [
  {
    id: "quiche-lorraine",
    nom: "Quiche lorraine",
    categorie: "Four",
    duree: "45 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Très pratique avec une salade verte.",
    preparation:
      "Garnir la pâte avec les lardons, les oeufs battus et la crème. Cuire au four jusqu'à ce que la quiche soit dorée.",
    ingredients: [
      { nom: "Oeufs", quantite: 3, unite: "pièce(s)", rayon: "Produits laitiers et oeufs" },
      { nom: "Pâte brisée", quantite: 1, unite: "pièce(s)", rayon: "Produits laitiers et oeufs" },
      { nom: "Lardons", quantite: 200, unite: "g", rayon: "Viande et poisson" },
      { nom: "Crème", quantite: 20, unite: "cl", rayon: "Produits laitiers et oeufs" },
      { nom: "Salade verte", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
    ],
  },
  {
    id: "omelette-fromage",
    nom: "Omelette au fromage",
    categorie: "Rapide",
    duree: "15 min",
    difficulte: "Très facile",
    personnes: 4,
    remarques: "Parfait pour un soir simple.",
    preparation:
      "Battre les oeufs, ajouter le fromage, puis cuire doucement à la poêle. Servir avec une salade verte.",
    ingredients: [
      { nom: "Oeufs", quantite: 4, unite: "pièce(s)", rayon: "Produits laitiers et oeufs" },
      { nom: "Fromage râpé", quantite: 80, unite: "g", rayon: "Produits laitiers et oeufs" },
      { nom: "Salade verte", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
    ],
  },
  {
    id: "pates-tomate",
    nom: "Pâtes sauce tomate",
    categorie: "Placard",
    duree: "25 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Base simple, facile à adapter.",
    preparation:
      "Cuire les pâtes, réchauffer la sauce tomate, puis mélanger. Ajouter le parmesan au moment de servir.",
    ingredients: [
      { nom: "Pâtes", quantite: 400, unite: "g", rayon: "Épicerie salée" },
      { nom: "Sauce tomate", quantite: 400, unite: "g", rayon: "Épicerie salée" },
      { nom: "Parmesan", quantite: 60, unite: "g", rayon: "Produits laitiers et oeufs" },
    ],
  },
  {
    id: "poulet-riz",
    nom: "Poulet citron et riz",
    categorie: "Classique",
    duree: "35 min",
    difficulte: "Moyenne",
    personnes: 4,
    remarques: "Bon plat familial pour le midi.",
    preparation:
      "Cuire le riz, faire dorer le poulet, ajouter le citron puis servir avec les petits pois.",
    ingredients: [
      { nom: "Filets de poulet", quantite: 500, unite: "g", rayon: "Viande et poisson" },
      { nom: "Riz", quantite: 300, unite: "g", rayon: "Épicerie salée" },
      { nom: "Citron", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
      { nom: "Petits pois", quantite: 300, unite: "g", rayon: "Surgelés" },
    ],
  },
  {
    id: "soupe-maison",
    nom: "Soupe maison",
    categorie: "Doux",
    duree: "40 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Avec pain grillé et fromage.",
    preparation:
      "Cuire les légumes dans l'eau ou le bouillon, mixer selon la texture souhaitée, puis servir chaud avec le pain.",
    ingredients: [
      { nom: "Carottes", quantite: 500, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Pommes de terre", quantite: 400, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Poireaux", quantite: 2, unite: "pièce(s)", rayon: "Fruits et légumes" },
      { nom: "Pain complet", quantite: 1, unite: "pièce(s)", rayon: "Pain et pâtisserie" },
    ],
  },
];

const recettesBaseSupplementaires = [
  {
    id: "gratin-pates-jambon",
    nom: "Gratin de pâtes au jambon",
    categorie: "Four",
    duree: "35 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Pratique avec un reste de pâtes.",
    preparation:
      "Cuire les pâtes, mélanger avec le jambon, la crème et une partie du fromage. Verser dans un plat, ajouter le reste du fromage et gratiner au four.",
    ingredients: [
      { nom: "Pâtes", quantite: 400, unite: "g", rayon: "Épicerie salée" },
      { nom: "Jambon", quantite: 200, unite: "g", rayon: "Viande et poisson" },
      { nom: "Crème", quantite: 20, unite: "cl", rayon: "Produits laitiers et oeufs" },
      { nom: "Fromage râpé", quantite: 120, unite: "g", rayon: "Produits laitiers et oeufs" },
    ],
  },
  {
    id: "riz-saute-oeuf-legumes",
    nom: "Riz sauté aux oeufs et légumes",
    categorie: "Poêle",
    duree: "25 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Très utile avec un reste de riz.",
    preparation:
      "Faire revenir les légumes à la poêle, ajouter le riz cuit puis les oeufs battus. Mélanger jusqu'à ce que les oeufs soient pris.",
    ingredients: [
      { nom: "Riz", quantite: 300, unite: "g", rayon: "Épicerie salée" },
      { nom: "Oeufs", quantite: 4, unite: "pièce(s)", rayon: "Produits laitiers et oeufs" },
      { nom: "Petits pois", quantite: 200, unite: "g", rayon: "Surgelés" },
      { nom: "Carottes", quantite: 300, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Sauce soja", quantite: 4, unite: "cs", rayon: "Épicerie salée" },
    ],
  },
  {
    id: "curry-lentilles-corail",
    nom: "Curry de lentilles corail",
    categorie: "Végétarien",
    duree: "30 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Bon plat de placard, doux et nourrissant.",
    preparation:
      "Faire revenir l'oignon avec le curry, ajouter les lentilles, les tomates et le lait de coco. Laisser mijoter jusqu'à ce que les lentilles soient tendres.",
    ingredients: [
      { nom: "Lentilles corail", quantite: 250, unite: "g", rayon: "Épicerie salée" },
      { nom: "Lait de coco", quantite: 400, unite: "ml", rayon: "Épicerie salée" },
      { nom: "Tomates concassées", quantite: 400, unite: "g", rayon: "Épicerie salée" },
      { nom: "Oignon", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
      { nom: "Curry", quantite: 2, unite: "cc", rayon: "Épicerie salée" },
    ],
  },
  {
    id: "salade-riz-thon-mais",
    nom: "Salade de riz au thon",
    categorie: "Salade",
    duree: "25 min",
    difficulte: "Très facile",
    personnes: 4,
    remarques: "Simple pour un repas froid.",
    preparation:
      "Cuire le riz puis le refroidir. Mélanger avec le thon, le maïs, les tomates et la sauce choisie.",
    ingredients: [
      { nom: "Riz", quantite: 300, unite: "g", rayon: "Épicerie salée" },
      { nom: "Thon", quantite: 2, unite: "boîte(s)", rayon: "Épicerie salée" },
      { nom: "Maïs", quantite: 1, unite: "boîte(s)", rayon: "Épicerie salée" },
      { nom: "Tomates", quantite: 4, unite: "pièce(s)", rayon: "Fruits et légumes" },
      { nom: "Mayonnaise", quantite: 3, unite: "cs", rayon: "Épicerie salée" },
    ],
  },
  {
    id: "poelee-saucisses-pommes-terre",
    nom: "Poêlée saucisses et pommes de terre",
    categorie: "Poêle",
    duree: "35 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Plat simple et bien nourrissant.",
    preparation:
      "Cuire les pommes de terre en morceaux, faire dorer les saucisses et l'oignon, puis tout réunir dans la poêle quelques minutes.",
    ingredients: [
      { nom: "Pommes de terre", quantite: 800, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Saucisses", quantite: 4, unite: "pièce(s)", rayon: "Viande et poisson" },
      { nom: "Oignon", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
      { nom: "Salade verte", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
    ],
  },
  {
    id: "croque-monsieur-salade",
    nom: "Croque-monsieur salade",
    categorie: "Rapide",
    duree: "20 min",
    difficulte: "Très facile",
    personnes: 4,
    remarques: "Dépanne bien un soir de semaine.",
    preparation:
      "Monter les croques avec pain, jambon et fromage. Les passer au four ou à la poêle jusqu'à ce qu'ils soient dorés, puis servir avec la salade.",
    ingredients: [
      { nom: "Pain de mie", quantite: 8, unite: "tranche(s)", rayon: "Pain et pâtisserie" },
      { nom: "Jambon", quantite: 4, unite: "tranche(s)", rayon: "Viande et poisson" },
      { nom: "Fromage", quantite: 8, unite: "tranche(s)", rayon: "Produits laitiers et oeufs" },
      { nom: "Salade verte", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
    ],
  },
  {
    id: "saumon-riz-courgettes",
    nom: "Saumon, riz et courgettes",
    categorie: "Poisson",
    duree: "30 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Simple, complet, assez léger.",
    preparation:
      "Cuire le riz, faire revenir les courgettes en rondelles et cuire le saumon à la poêle ou au four avec un peu de citron.",
    ingredients: [
      { nom: "Filets de saumon", quantite: 4, unite: "pièce(s)", rayon: "Viande et poisson" },
      { nom: "Riz", quantite: 300, unite: "g", rayon: "Épicerie salée" },
      { nom: "Courgettes", quantite: 3, unite: "pièce(s)", rayon: "Fruits et légumes" },
      { nom: "Citron", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
    ],
  },
  {
    id: "chili-sin-carne",
    nom: "Chili sin carne",
    categorie: "Végétarien",
    duree: "35 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Plat de placard, facile à réchauffer.",
    preparation:
      "Faire revenir l'oignon et les épices, ajouter les haricots, le maïs et les tomates. Laisser mijoter puis servir avec du riz.",
    ingredients: [
      { nom: "Haricots rouges", quantite: 2, unite: "boîte(s)", rayon: "Épicerie salée" },
      { nom: "Maïs", quantite: 1, unite: "boîte(s)", rayon: "Épicerie salée" },
      { nom: "Tomates concassées", quantite: 400, unite: "g", rayon: "Épicerie salée" },
      { nom: "Riz", quantite: 300, unite: "g", rayon: "Épicerie salée" },
      { nom: "Oignon", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
    ],
  },
  {
    id: "crepes-salees-jambon-fromage",
    nom: "Crêpes salées jambon fromage",
    categorie: "Rapide",
    duree: "25 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Version rapide avec crêpes déjà prêtes.",
    preparation:
      "Garnir les crêpes avec jambon et fromage, les plier puis les réchauffer à la poêle ou au four. Servir avec une salade.",
    ingredients: [
      { nom: "Crêpes", quantite: 8, unite: "pièce(s)", rayon: "Produits laitiers et oeufs" },
      { nom: "Jambon", quantite: 4, unite: "tranche(s)", rayon: "Viande et poisson" },
      { nom: "Fromage râpé", quantite: 120, unite: "g", rayon: "Produits laitiers et oeufs" },
      { nom: "Salade verte", quantite: 1, unite: "pièce(s)", rayon: "Fruits et légumes" },
    ],
  },
  {
    id: "semoule-legumes-pois-chiches",
    nom: "Semoule légumes et pois chiches",
    categorie: "Végétarien",
    duree: "30 min",
    difficulte: "Facile",
    personnes: 4,
    remarques: "Très pratique avec des légumes de saison.",
    preparation:
      "Faire mijoter les légumes avec les pois chiches et les épices douces. Préparer la semoule à part puis servir ensemble.",
    ingredients: [
      { nom: "Semoule", quantite: 300, unite: "g", rayon: "Épicerie salée" },
      { nom: "Pois chiches", quantite: 1, unite: "boîte(s)", rayon: "Épicerie salée" },
      { nom: "Carottes", quantite: 400, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Courgettes", quantite: 2, unite: "pièce(s)", rayon: "Fruits et légumes" },
      { nom: "Tomates concassées", quantite: 400, unite: "g", rayon: "Épicerie salée" },
    ],
  },
];

const menage = [
  { frequence: "quotidienne", jour: "lundi", piece: "Chambres", tache: "Aérer 10 minutes" },
  { frequence: "ponctuelle", jour: "lundi", datePonctuelle: "2026-05-17", piece: "Vitres", tache: "Nettoyer les traces du salon" },
  { frequence: "bimensuelle", jour: "samedi", dateDepart: "2026-05-16", piece: "Chambre à coucher", tache: "Retourner le matelas" },
  { frequence: "mensuelle", jour: "lundi", jourDuMois: 1, piece: "Cuisine", tache: "Détartrer la bouilloire" },
  { frequence: "hebdomadaire", jour: "lundi", piece: "Cuisine", tache: "Essuyer le plan de travail" },
  { frequence: "hebdomadaire", jour: "mercredi", piece: "Salon", tache: "Ranger les plaids et coussins" },
  { frequence: "hebdomadaire", jour: "samedi", piece: "Salle de bain", tache: "Changer les serviettes" },
  { frequence: "hebdomadaire", jour: "samedi", piece: "Chambre à coucher", tache: "Changer les draps" },
  { frequence: "hebdomadaire", jour: "dimanche", piece: "Entrée", tache: "Préparer les affaires de la semaine" },
];

const joursSemaine = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

const onglets = [
  { id: "menus", label: "Menus", icon: "🍽️" },
  { id: "courses", label: "Courses", icon: "🛒" },
  { id: "menage", label: "Ménage", icon: "✓" },
  { id: "planning", label: "Tâches", icon: "📅" },
  { id: "profil", label: "Profil", icon: "⚙️" },
  { id: "sauvegarde", label: "Sauv.", icon: "💾" },
];

const profilFoyerDepart = {
  equipements: {
    airfryer: "Airfryer Philips : modèle à compléter",
    fourVapeur: true,
    microOndes: false,
    fourTraditionnel: true,
    fonctionsFour: ["chaleur tournante", "voûte et sole", "grill"],
    plaques: "induction",
    robotMixer: "",
    autresEquipements: ["Cuiseur à riz"],
    equipementsLibres: "",
  },
  habitudes:
    "Repas simples.\nPeu de vaisselle.\nCourses 2 fois par semaine.\nPriorité au calme et à la simplicité.",
  preferencesIa:
    "Réponses courtes.\nTon chaleureux.\nConseils concrets.\nÉviter les solutions au micro-ondes.\nProposer airfryer ou four vapeur quand adapté.",
};

const equipementsCuisineProposes = [
  "Cuiseur à riz",
  "Cocotte-minute",
  "Autocuiseur électrique",
  "Mijoteuse",
  "Plancha",
  "Gril de table",
  "Appareil à raclette",
  "Appareil à fondue",
  "Gaufrier",
  "Croque-monsieur",
  "Crêpière",
  "Friteuse",
  "Machine sous-vide",
  "Déshydrateur",
  "Yaourtière",
  "Machine à pain",
  "Robot pâtissier",
  "Robot multifonction",
  "Blender",
  "Mixeur plongeant",
  "Hachoir",
  "Mandoline",
  "Balance de cuisine",
  "Thermomètre de cuisson",
  "Bouilloire",
  "Machine à café",
  "Grille-pain",
];

const fonctionsFourProposees = [
  "chaleur tournante",
  "air pulsé",
  "voûte et sole",
  "sole seule",
  "voûte seule",
  "chaleur tournante humide",
  "vapeur / ajout vapeur",
  "grill",
  "grill ventilé",
  "fonction pizza",
  "basse température",
  "maintien au chaud",
  "décongélation",
  "préchauffage rapide",
];

const contexteJourDepart = {
  energie: "normale",
  tempsDisponible: "30 min",
  heureRepas: "19:00",
  motivation: "normale",
  objectifs: ["repas simple", "peu de vaisselle"],
};

const optionsEnergieJour = ["faible", "normale", "bonne"];
const optionsTempsDisponible = ["15 min", "30 min", "45 min", "plus"];
const optionsMotivationCuisine = ["faible", "normale", "envie de cuisiner"];
const optionsObjectifMoment = [
  "repas simple",
  "peu de vaisselle",
  "utiliser les restes",
  "repas réconfortant",
  "repas léger",
  "repas économique",
];

const questionsIaRecette = {
  facile:
    "Propose une solution facile autour de cette recette, en tenant compte de l'énergie, du temps disponible, de la motivation et du besoin de simplicité.",
  organiser:
    "Aide-moi à organiser ce repas simplement : ordre des étapes, ce que je peux préparer d'abord, à quelle heure je devrais commencer pour être prêt à l'heure prévue, et comment limiter le stress.",
  cuisson:
    "Propose la cuisson la plus adaptée selon le matériel disponible et cette recette. Si le four est pertinent, précise le mode conseillé : chaleur tournante, voûte et sole, vapeur ou grill si utile. Adapte les températures si nécessaire, donne une durée approximative et un signe de vérification.",
  restes:
    "Que puis-je faire avec les restes de cette recette ? Propose une option simple, familiale et sans compliquer le prochain repas.",
};

const boutonsIaRecette = [
  { id: "facile", label: "Solution facile" },
  { id: "organiser", label: "Organiser" },
  { id: "cuisson", label: "Cuisson adaptée" },
  { id: "restes", label: "Restes" },
];

const categoriesRecettesProposees = [
  "Rapide",
  "Four",
  "Poêle",
  "Végétarien",
  "Viande",
  "Poisson",
  "Pâtes / riz",
  "Soupe",
  "Salade",
  "Restes",
  "Invités",
  "Dessert",
  "Placard",
  "Maison",
];

const rayonsMigros = [
  "Fruits et légumes",
  "Pain et pâtisserie",
  "Viande et poisson",
  "Produits laitiers et oeufs",
  "Épicerie salée",
  "Épicerie sucrée",
  "Boissons",
  "Surgelés",
  "Hygiène et beauté",
  "Ménage",
  "Bébé",
  "Animaux",
  "Autres",
];

const articlesHorsMenusFrequentsDepart = [
  { nom: "Lait", quantite: 1, unite: "l", rayon: "Produits laitiers et oeufs" },
  { nom: "Café", quantite: 1, unite: "paquet", rayon: "Épicerie sucrée" },
  { nom: "Pain", quantite: 1, unite: "pièce(s)", rayon: "Pain et pâtisserie" },
  { nom: "Papier toilette", quantite: 1, unite: "paquet", rayon: "Ménage" },
  { nom: "Lessive", quantite: 1, unite: "pièce(s)", rayon: "Ménage" },
  { nom: "Dentifrice", quantite: 1, unite: "pièce(s)", rayon: "Hygiène et beauté" },
  { nom: "Savon", quantite: 1, unite: "pièce(s)", rayon: "Hygiène et beauté" },
  { nom: "Sacs poubelle", quantite: 1, unite: "rouleau", rayon: "Ménage" },
];

const e = React.createElement;
const cleSauvegardeMenage = "pilier-du-foyer-menage";
const cleCorbeilleMenage = "pilier-du-foyer-menage-corbeille";
const cleTachesFaitesMenage = "pilier-du-foyer-menage-faites";
const cleMenusPlanifies = "pilier-du-foyer-menus-planifies";
const cleRecettes = "pilier-du-foyer-recettes";
const cleArticlesLibresCourses = "pilier-du-foyer-courses-libres";
const cleArticlesHorsMenusFrequents = "pilier-du-foyer-hm-frequents";
const cleCoursesAchetees = "pilier-du-foyer-courses-achetees";
const clePrecisionsCourses = "pilier-du-foyer-courses-precisions";
const cleOrdreRayons = "pilier-du-foyer-ordre-rayons";
const cleProfilFoyer = "pilier-du-foyer-profil";
const cleContexteJour = "pilier-du-foyer-contexte-jour";
const nombrePersonnesDefaut = 2;
const versionSauvegarde = 1;
const stockageApplication = {
  mode: "local",
  lire(cle) {
    return localStorage.getItem(cle);
  },
  enregistrer(cle, valeur) {
    localStorage.setItem(cle, JSON.stringify(valeur));
  },
};
const firebaseConfig = {
  apiKey: "AIzaSyD_dkFZjyJ4OpvFZpB01-EacuSEBbTeCO4",
  authDomain: "pilier-du-foyer.firebaseapp.com",
  projectId: "pilier-du-foyer",
  storageBucket: "pilier-du-foyer.firebasestorage.app",
  messagingSenderId: "400011150455",
  appId: "1:400011150455:web:c7850f0e99c86f512cb272",
};
let servicesCloud = null;

function initialiserCloud() {
  if (servicesCloud) {
    return servicesCloud;
  }

  if (!window.firebase) {
    return null;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  servicesCloud = {
    auth: firebase.auth(),
    db: firebase.firestore(),
  };

  return servicesCloud;
}

function getMessageErreurCloud(erreur) {
  if (!erreur || !erreur.code) {
    return "Action cloud impossible pour le moment.";
  }

  if (erreur.code === "permission-denied") {
    return "Accès refusé par Firebase. Il faudra vérifier les règles Firestore.";
  }

  if (erreur.code === "unauthenticated") {
    return "Connecte-toi avec Google avant d'utiliser le cloud.";
  }

  if (erreur.code === "popup-closed-by-user") {
    return "Connexion annulée.";
  }

  return "Erreur cloud : " + erreur.message;
}

function lireSauvegarde(cle, valeurParDefaut) {
  let sauvegarde = null;

  try {
    sauvegarde = stockageApplication.lire(cle);
  } catch (erreur) {
    return valeurParDefaut;
  }

  if (sauvegarde === null) {
    return valeurParDefaut;
  }

  try {
    return JSON.parse(sauvegarde);
  } catch (erreur) {
    return valeurParDefaut;
  }
}

function enregistrerSauvegarde(cle, valeur) {
  try {
    stockageApplication.enregistrer(cle, valeur);
  } catch (erreur) {
    return;
  }
}

function normaliserTacheMenage(tache) {
  return {
    frequence: tache.frequence || "hebdomadaire",
    jour: tache.jour || "lundi",
    datePonctuelle: tache.datePonctuelle || getCleDate(new Date()),
    dateDepart: tache.dateDepart || getCleDate(new Date()),
    jourDuMois: Number(tache.jourDuMois) || 1,
    piece: tache.piece || "",
    tache: tache.tache || "",
  };
}

function normaliserListeTaches(taches) {
  return taches.map((tache) => normaliserTacheMenage(tache));
}

function getInfosDate(date) {
  const jour = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(date);
  const dateComplete = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return { jour, dateComplete };
}

function changerDate(date, nombreDeJours) {
  const nouvelleDate = new Date(date);
  nouvelleDate.setDate(nouvelleDate.getDate() + nombreDeJours);

  return nouvelleDate;
}

function getCleDate(date) {
  const annee = date.getFullYear();
  const mois = String(date.getMonth() + 1).padStart(2, "0");
  const jour = String(date.getDate()).padStart(2, "0");

  return annee + "-" + mois + "-" + jour;
}

function getDateDepuisCle(cleDate) {
  const morceaux = cleDate.split("-");

  return new Date(Number(morceaux[0]), Number(morceaux[1]) - 1, Number(morceaux[2]));
}

function differenceEnJours(dateA, dateB) {
  const debutA = new Date(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
  const debutB = new Date(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());

  return Math.round((debutA - debutB) / 86400000);
}

function frequenceUtiliseJour(frequence) {
  return frequence === "hebdomadaire" || frequence === "bimensuelle";
}

function getTexteAideFrequence(frequence) {
  if (frequence === "quotidienne") {
    return "Cette tâche apparaîtra tous les jours.";
  }

  if (frequence === "bimensuelle") {
    return "Choisis le jour de la semaine et la première date où la tâche doit apparaître.";
  }

  if (frequence === "mensuelle") {
    return "Choisis le numéro du jour où la tâche revient chaque mois.";
  }

  if (frequence === "ponctuelle") {
    return "Cette tâche apparaîtra une seule fois, à la date choisie.";
  }

  return "Cette tâche reviendra chaque semaine le jour choisi.";
}

function getCleTache(tache) {
  const reference =
    tache.frequence === "bimensuelle"
      ? tache.dateDepart
      : tache.frequence === "mensuelle"
      ? tache.jourDuMois
      : tache.datePonctuelle || tache.jour;

  return (
    (tache.frequence || "hebdomadaire") +
    "|" +
    reference +
    "|" +
    tache.piece +
    "|" +
    tache.tache
  );
}

function tacheEstPrevuePourDate(tache, date) {
  const { jour } = getInfosDate(date);
  const frequence = tache.frequence || "hebdomadaire";

  if (frequence === "quotidienne") {
    return true;
  }

  if (frequence === "hebdomadaire") {
    return tache.jour === jour;
  }

  if (frequence === "bimensuelle") {
    const dateDepart = getDateDepuisCle(tache.dateDepart);
    const ecart = differenceEnJours(date, dateDepart);

    return tache.jour === jour && ecart >= 0 && ecart % 14 === 0;
  }

  if (frequence === "mensuelle") {
    return date.getDate() === Number(tache.jourDuMois);
  }

  if (frequence === "ponctuelle") {
    return tache.datePonctuelle === getCleDate(date);
  }

  return false;
}

function lireCleTache(cleTache) {
  const morceaux = cleTache.split("|");

  if (morceaux.length >= 4) {
    return {
      frequence: morceaux[0] || "",
      jour: morceaux[1] || "",
      piece: morceaux[2] || "",
      tache: morceaux[3] || "",
    };
  }

  return {
    jour: morceaux[0] || "",
    piece: morceaux[1] || "",
    tache: morceaux[2] || "",
  };
}

function formaterCleDate(cleDate) {
  const morceaux = cleDate.split("-");
  const date = new Date(Number(morceaux[0]), Number(morceaux[1]) - 1, Number(morceaux[2]));

  return getInfosDate(date).dateComplete;
}

function getMenusPlanifiesDepart() {
  const aujourdhui = new Date();
  const demain = changerDate(aujourdhui, 1);

  return [
    { date: getCleDate(aujourdhui), recetteId: "quiche-lorraine", personnes: nombrePersonnesDefaut },
    { date: getCleDate(demain), recetteId: "omelette-fromage", personnes: nombrePersonnesDefaut },
  ];
}

function getRecetteParId(recettes, recetteId) {
  return recettes.find((recette) => recette.id === recetteId);
}

function getPersonnesRecette(recette) {
  return Number(recette.personnes) || 4;
}

function formaterQuantite(quantite) {
  if (Number.isInteger(quantite)) {
    return String(quantite);
  }

  return String(Math.round(quantite * 10) / 10).replace(".", ",");
}

function getRangRayon(rayon, ordreRayons = rayonsMigros) {
  const index = ordreRayons.indexOf(rayon);

  return index === -1 ? ordreRayons.length : index;
}

function comparerCourses(a, b, ordreRayons = rayonsMigros) {
  const rangRayon = getRangRayon(a.rayon, ordreRayons) - getRangRayon(b.rayon, ordreRayons);

  if (rangRayon !== 0) {
    return rangRayon;
  }

  return a.nom.localeCompare(b.nom);
}

function creerOptionsRayons(rayonActuel, ordreRayons = rayonsMigros) {
  const options = ordreRayons.includes(rayonActuel)
    ? ordreRayons
    : [...ordreRayons, rayonActuel].filter((rayon) => rayon);

  return options.map((rayon) => e("option", { key: rayon, value: rayon }, rayon));
}

function genererListeCourses(menusPlanifies, recettes, ordreRayons = rayonsMigros) {
  const ingredientsRegroupes = {};

  menusPlanifies.forEach((menu) => {
    const recette = getRecetteParId(recettes, menu.recetteId);

    if (!recette) {
      return;
    }

    recette.ingredients.forEach((ingredient) => {
      const quantite =
        ingredient.quantite * (Number(menu.personnes) || 1) / getPersonnesRecette(recette);
      const cle = ingredient.rayon + "|" + ingredient.nom + "|" + ingredient.unite;

      if (!ingredientsRegroupes[cle]) {
        ingredientsRegroupes[cle] = {
          nom: ingredient.nom,
          quantite: 0,
          unite: ingredient.unite,
          rayon: ingredient.rayon,
        };
      }

      ingredientsRegroupes[cle].quantite += quantite;
    });
  });

  return Object.values(ingredientsRegroupes).sort((a, b) => comparerCourses(a, b, ordreRayons));
}

function grouperCoursesParRayon(listeCourses) {
  return listeCourses.reduce((groupes, item) => {
    if (!groupes[item.rayon]) {
      groupes[item.rayon] = [];
    }

    groupes[item.rayon].push(item);
    return groupes;
  }, {});
}

function getCleCourse(item) {
  return [
    item.source || "menu",
    item.id || "",
    item.rayon,
    item.nom,
    item.unite,
    formaterQuantite(Number(item.quantite) || 0),
  ].join("|");
}

function creerIdDepuisNom(nom) {
  return (
    nom
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") +
    "-" +
    Date.now()
  );
}

function normaliserArticleLibre(article) {
  const articleSource = getObjet(article);

  return {
    id: articleSource.id || creerIdDepuisNom(articleSource.nom || "article"),
    nom: articleSource.nom || "",
    quantite: Number(articleSource.quantite) || 1,
    unite: articleSource.unite || "pièce(s)",
    rayon: articleSource.rayon || "Autres",
    commentaire: articleSource.commentaire || "",
  };
}

function normaliserArticlesLibres(articles) {
  return articles.map((article) => normaliserArticleLibre(article));
}

function normaliserOrdreRayons(rayons) {
  const rayonsSauvegardes = Array.isArray(rayons) ? rayons : [];
  const rayonsConnus = rayonsSauvegardes.filter(
    (rayon, index, liste) => rayonsMigros.includes(rayon) && liste.indexOf(rayon) === index
  );
  const rayonsManquants = rayonsMigros.filter((rayon) => !rayonsConnus.includes(rayon));

  return [...rayonsConnus, ...rayonsManquants];
}

function creerTexteSauvegarde(donnees) {
  return JSON.stringify(
    {
      application: "Pilier du foyer",
      version: versionSauvegarde,
      date: new Date().toISOString(),
      donnees,
    },
    null,
    2
  );
}

function lireTexteSauvegarde(texte) {
  let sauvegarde = null;

  try {
    sauvegarde = JSON.parse(texte);
  } catch (erreur) {
    throw new Error("Le texte colle n'est pas une sauvegarde valide.");
  }

  if (!sauvegarde || typeof sauvegarde !== "object") {
    throw new Error("La sauvegarde est vide ou illisible.");
  }

  if (sauvegarde.application && sauvegarde.application !== "Pilier du foyer") {
    throw new Error("Cette sauvegarde ne semble pas venir de Pilier du foyer.");
  }

  const donnees = sauvegarde.donnees || sauvegarde;

  if (!donnees || typeof donnees !== "object") {
    throw new Error("Les donnees de la sauvegarde sont illisibles.");
  }

  return normaliserDonneesSauvegarde(donnees);
}

function getTableau(valeur) {
  return Array.isArray(valeur) ? valeur : [];
}

function getObjet(valeur) {
  return valeur && typeof valeur === "object" && !Array.isArray(valeur) ? valeur : {};
}

function normaliserListeTextes(valeur) {
  return getTableau(valeur)
    .map((item) => String(item || "").trim())
    .filter((item) => item !== "");
}

function normaliserJournalTachesFaites(journal) {
  return Object.entries(getObjet(journal)).reduce((journalNettoye, [cleDate, taches]) => {
    journalNettoye[cleDate] = normaliserListeTextes(taches);
    return journalNettoye;
  }, {});
}

function normaliserPrecisionsCourses(precisions) {
  return Object.entries(getObjet(precisions)).reduce((precisionsNettoyees, [cleCourse, commentaire]) => {
    const texte = String(commentaire || "").trim();

    if (texte !== "") {
      precisionsNettoyees[cleCourse] = texte;
    }

    return precisionsNettoyees;
  }, {});
}

function normaliserProfilFoyer(profil) {
  const profilSource = getObjet(profil);
  const equipements = getObjet(profilSource.equipements);
  const autresEquipements = Array.isArray(equipements.autresEquipements)
    ? equipements.autresEquipements
    : profilFoyerDepart.equipements.autresEquipements;
  const fonctionsFour = Array.isArray(equipements.fonctionsFour)
    ? equipements.fonctionsFour
    : profilFoyerDepart.equipements.fonctionsFour;
  const autresEquipementsNettoyes = Array.from(
    new Set(
      autresEquipements
        .map((equipement) => String(equipement || "").trim())
        .filter(Boolean)
    )
  );
  const fonctionsFourNettoyees = Array.from(
    new Set(
      fonctionsFour
        .map((fonction) => String(fonction || "").trim())
        .filter((fonction) => fonctionsFourProposees.includes(fonction))
    )
  );

  return {
    equipements: {
      airfryer: String(equipements.airfryer || profilFoyerDepart.equipements.airfryer),
      fourVapeur:
        typeof equipements.fourVapeur === "boolean"
          ? equipements.fourVapeur
          : profilFoyerDepart.equipements.fourVapeur,
      microOndes:
        typeof equipements.microOndes === "boolean"
          ? equipements.microOndes
          : profilFoyerDepart.equipements.microOndes,
      fourTraditionnel:
        typeof equipements.fourTraditionnel === "boolean"
          ? equipements.fourTraditionnel
          : profilFoyerDepart.equipements.fourTraditionnel,
      fonctionsFour: fonctionsFourNettoyees,
      plaques: String(equipements.plaques || profilFoyerDepart.equipements.plaques),
      robotMixer: String(equipements.robotMixer || ""),
      autresEquipements: autresEquipementsNettoyes,
      equipementsLibres: String(equipements.equipementsLibres || ""),
    },
    habitudes: String(profilSource.habitudes || profilFoyerDepart.habitudes),
    preferencesIa: String(profilSource.preferencesIa || profilFoyerDepart.preferencesIa),
  };
}

function formaterOuiNon(valeur) {
  return valeur ? "oui" : "non";
}

function formaterProfilFoyerPourIa(profil) {
  const profilNormalise = normaliserProfilFoyer(profil);

  return [
    "Profil foyer :",
    "- " + profilNormalise.equipements.airfryer,
    "- Four vapeur : " + formaterOuiNon(profilNormalise.equipements.fourVapeur),
    "- Micro-ondes : " + formaterOuiNon(profilNormalise.equipements.microOndes),
    "- Four traditionnel : " + formaterOuiNon(profilNormalise.equipements.fourTraditionnel),
    "- Fonctions du four : " +
      (profilNormalise.equipements.fonctionsFour.length
        ? profilNormalise.equipements.fonctionsFour.join(", ")
        : "non précisées"),
    "- Plaques : " + profilNormalise.equipements.plaques,
    "- Robot ou mixer : " + (profilNormalise.equipements.robotMixer || "non précisé"),
    "- Autres équipements : " +
      (profilNormalise.equipements.autresEquipements.length
        ? profilNormalise.equipements.autresEquipements.join(", ")
        : "non précisés"),
    "- Précisions matériel : " +
      (profilNormalise.equipements.equipementsLibres || "aucun"),
    "",
    "Habitudes du foyer :",
    profilNormalise.habitudes || "Non précisées",
    "",
    "Préférences IA :",
    profilNormalise.preferencesIa || "Non précisées",
  ].join("\n");
}

function normaliserContexteJour(contexte) {
  const contexteSource = getObjet(contexte);
  const heureRepas = String(contexteSource.heureRepas || contexteJourDepart.heureRepas).trim();
  const objectifsSource = Array.isArray(contexteSource.objectifs)
    ? contexteSource.objectifs
    : contexteJourDepart.objectifs;
  const objectifs = Array.from(
    new Set(
      objectifsSource
        .map((objectif) => String(objectif || "").trim())
        .filter((objectif) => optionsObjectifMoment.includes(objectif))
    )
  );

  return {
    energie: optionsEnergieJour.includes(contexteSource.energie)
      ? contexteSource.energie
      : contexteJourDepart.energie,
    tempsDisponible: optionsTempsDisponible.includes(contexteSource.tempsDisponible)
      ? contexteSource.tempsDisponible
      : contexteJourDepart.tempsDisponible,
    heureRepas: /^\d{2}:\d{2}$/.test(heureRepas) ? heureRepas : contexteJourDepart.heureRepas,
    motivation: optionsMotivationCuisine.includes(contexteSource.motivation)
      ? contexteSource.motivation
      : contexteJourDepart.motivation,
    objectifs: objectifs.length ? objectifs : contexteJourDepart.objectifs,
  };
}

function formaterContexteJourPourIa(contexte) {
  const contexteNormalise = normaliserContexteJour(contexte);

  return [
    "Contexte du jour :",
    "- Énergie du jour : " + contexteNormalise.energie,
    "- Temps réellement disponible : " + contexteNormalise.tempsDisponible,
    "- Heure prévue du repas : " + contexteNormalise.heureRepas,
    "- Motivation cuisine : " + contexteNormalise.motivation,
    "- Objectif : " + contexteNormalise.objectifs.join(" et "),
  ].join("\n");
}

function resumerContexteIa(profil, contexte) {
  const profilNormalise = normaliserProfilFoyer(profil);
  const contexteNormalise = normaliserContexteJour(contexte);
  const equipementsUtiles = [];

  if (profilNormalise.equipements.airfryer.trim()) {
    equipementsUtiles.push("airfryer");
  }

  if (profilNormalise.equipements.fourVapeur) {
    equipementsUtiles.push("four vapeur");
  }

  if (profilNormalise.equipements.fourTraditionnel) {
    equipementsUtiles.push("four");
  }

  return [
    "IA : énergie " + contexteNormalise.energie,
    contexteNormalise.tempsDisponible,
    "repas " + contexteNormalise.heureRepas,
    "motivation " + contexteNormalise.motivation,
    contexteNormalise.objectifs.join(", "),
    equipementsUtiles.length ? equipementsUtiles.join(", ") + " dispo" : "matériel à préciser",
  ].join(" · ");
}

function normaliserIngredientRecette(ingredient) {
  const ingredientSource = getObjet(ingredient);

  return {
    nom: String(ingredientSource.nom || "").trim(),
    quantite: Number(ingredientSource.quantite) || 1,
    unite: String(ingredientSource.unite || "pièce(s)").trim() || "pièce(s)",
    rayon: String(ingredientSource.rayon || "Autres").trim() || "Autres",
  };
}

function normaliserRecette(recette) {
  const recetteSource = getObjet(recette);
  const nom = String(recetteSource.nom || "Recette").trim();
  const categorie = String(recetteSource.categorie || "Maison").trim() || "Maison";

  return {
    id: recetteSource.id || creerIdDepuisNom(nom),
    nom,
    categorie,
    duree: String(recetteSource.duree || "").trim(),
    difficulte: String(recetteSource.difficulte || "").trim(),
    personnes: Number(recetteSource.personnes) || 4,
    remarques: String(recetteSource.remarques || "").trim(),
    preparation: String(recetteSource.preparation || "").trim(),
    ingredients: getTableau(recetteSource.ingredients)
      .map((ingredient) => normaliserIngredientRecette(ingredient))
      .filter((ingredient) => ingredient.nom !== ""),
  };
}

function normaliserRecettes(recettes) {
  const recettesNettoyees = getTableau(recettes)
    .map((recette) => normaliserRecette(recette))
    .filter((recette) => recette.nom !== "");

  return recettesNettoyees.length > 0 ? recettesNettoyees : recettesDepart;
}

function normaliserMenusPlanifies(menus) {
  return getTableau(menus)
    .map((menu) => {
      const menuSource = getObjet(menu);

      return {
        date: menuSource.date || getCleDate(new Date()),
        recetteId: menuSource.recetteId || "",
        personnes: Number(menuSource.personnes) || nombrePersonnesDefaut,
      };
    })
    .filter((menu) => menu.recetteId !== "");
}

function normaliserDonneesSauvegarde(donnees) {
  return {
    tachesMenage: normaliserListeTaches(getTableau(donnees.tachesMenage)),
    tachesSupprimees: normaliserListeTaches(getTableau(donnees.tachesSupprimees)),
    tachesFaites: normaliserJournalTachesFaites(donnees.tachesFaites),
    recettes: normaliserRecettes(donnees.recettes),
    menusPlanifies: normaliserMenusPlanifies(donnees.menusPlanifies),
    articlesLibresCourses: normaliserArticlesLibres(getTableau(donnees.articlesLibresCourses)),
    articlesHorsMenusFrequents: normaliserArticlesLibres(
      getTableau(donnees.articlesHorsMenusFrequents)
    ),
    coursesAchetees: normaliserListeTextes(donnees.coursesAchetees),
    precisionsCourses: normaliserPrecisionsCourses(donnees.precisionsCourses),
    ordreRayons: normaliserOrdreRayons(donnees.ordreRayons || rayonsMigros),
    profilFoyer: normaliserProfilFoyer(donnees.profilFoyer || profilFoyerDepart),
    contexteJour: normaliserContexteJour(donnees.contexteJour || contexteJourDepart),
  };
}

function analyserTexteSauvegarde(texte) {
  let sauvegarde = null;

  try {
    sauvegarde = JSON.parse(texte);
  } catch (erreur) {
    return { valide: false };
  }

  if (!sauvegarde || typeof sauvegarde !== "object") {
    return { valide: false };
  }

  if (sauvegarde.application && sauvegarde.application !== "Pilier du foyer") {
    return { valide: false };
  }

  const donnees = normaliserDonneesSauvegarde(sauvegarde.donnees || sauvegarde);

  if (!donnees || typeof donnees !== "object") {
    return { valide: false };
  }

  return {
    valide: true,
    date: sauvegarde.date || "",
    application: sauvegarde.application || "Pilier du foyer",
    version: sauvegarde.version || "",
    recettes: Array.isArray(donnees.recettes) ? donnees.recettes.length : 0,
    menusPlanifies: Array.isArray(donnees.menusPlanifies) ? donnees.menusPlanifies.length : 0,
    tachesMenage: Array.isArray(donnees.tachesMenage) ? donnees.tachesMenage.length : 0,
    articlesLibresCourses: Array.isArray(donnees.articlesLibresCourses)
      ? donnees.articlesLibresCourses.length
      : 0,
    articlesHorsMenusFrequents: Array.isArray(donnees.articlesHorsMenusFrequents)
      ? donnees.articlesHorsMenusFrequents.length
      : 0,
    rayons: Array.isArray(donnees.ordreRayons) ? donnees.ordreRayons.length : 0,
  };
}

function formaterDateSauvegarde(dateIso) {
  if (!dateIso) {
    return "Date non indiquee";
  }

  const date = new Date(dateIso);

  if (Number.isNaN(date.getTime())) {
    return "Date non indiquee";
  }

  return date.toLocaleString("fr-CH", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

function creerNomFichierSauvegarde() {
  const date = new Date();
  const annee = date.getFullYear();
  const mois = String(date.getMonth() + 1).padStart(2, "0");
  const jour = String(date.getDate()).padStart(2, "0");
  const heures = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return "pilier-du-foyer-" + annee + "-" + mois + "-" + jour + "-" + heures + minutes + ".json";
}

function creerQuestionIaRecette(recette, intention, profilFoyer, contexteJour) {
  const ingredients = recette.ingredients
    .map(
      (ingredient) =>
        "- " + ingredient.nom + " : " + formaterQuantite(ingredient.quantite) + " " + ingredient.unite
    )
    .join("\n");

  return [
    "Tu es un assistant chaleureux pour une application familiale appelée Pilier du foyer.",
    "Réponds en français, court, simple et concret.",
    "Priorité à la simplicité, au calme et à la paix du foyer.",
    "Pour la cuisson, donne des durées approximatives, des températures si utiles, et un conseil de vérification.",
    "Rappelle les règles de sécurité alimentaire seulement si c'est important.",
    "",
    formaterProfilFoyerPourIa(profilFoyer),
    "",
    formaterContexteJourPourIa(contexteJour),
    "",
    "Contexte :",
    "Recette : " + recette.nom,
    "Catégorie : " + recette.categorie,
    "Durée : " + recette.duree,
    "Difficulté : " + recette.difficulte,
    "Personnes : " + getPersonnesRecette(recette),
    "Remarques : " + (recette.remarques || "Aucune"),
    "Préparation prévue : " + (recette.preparation || "Non précisée"),
    "",
    "Ingrédients :",
    ingredients || "Non précisés",
    "",
    "Question :",
    questionsIaRecette[intention] || questionsIaRecette.organiser,
  ].join("\n");
}

function preparerListeCourses(listeGeneree, articlesLibres, ordreRayons = rayonsMigros) {
  const articlesDepuisMenus = listeGeneree.map((item) => ({
    ...item,
    source: "menu",
  }));
  const articlesLibresActifs = articlesLibres.map((item) => ({
    ...item,
    source: "libre",
  }));

  return [...articlesDepuisMenus, ...articlesLibresActifs].sort((a, b) =>
    comparerCourses(a, b, ordreRayons)
  );
}

function creerIngredientVide() {
  return {
    nom: "",
    quantite: 1,
    unite: "pièce(s)",
    rayon: "Autres",
  };
}

function nettoyerIngredients(ingredients) {
  return ingredients
    .map((ingredient) => ({
      nom: ingredient.nom.trim(),
      quantite: Number(String(ingredient.quantite || "1").replace(",", ".")) || 1,
      unite: ingredient.unite.trim() || "pièce(s)",
      rayon: ingredient.rayon.trim() || "Autres",
    }))
    .filter((ingredient) => ingredient.nom !== "");
}

function App() {
  const [ongletActif, setOngletActif] = React.useState("menus");
  const [dateSelectionnee, setDateSelectionnee] = React.useState(() => new Date());
  const [tachesMenage, setTachesMenage] = React.useState(() =>
    normaliserListeTaches(lireSauvegarde(cleSauvegardeMenage, menage))
  );
  const [tachesSupprimees, setTachesSupprimees] = React.useState(() =>
    normaliserListeTaches(lireSauvegarde(cleCorbeilleMenage, []))
  );
  const [tachesFaites, setTachesFaites] = React.useState(() =>
    lireSauvegarde(cleTachesFaitesMenage, {})
  );
  const [recettes, setRecettes] = React.useState(() =>
    lireSauvegarde(cleRecettes, recettesDepart)
  );
  const [menusPlanifies, setMenusPlanifies] = React.useState(() =>
    lireSauvegarde(cleMenusPlanifies, getMenusPlanifiesDepart())
  );
  const [articlesLibresCourses, setArticlesLibresCourses] = React.useState(() =>
    normaliserArticlesLibres(lireSauvegarde(cleArticlesLibresCourses, []))
  );
  const [articlesHorsMenusFrequents, setArticlesHorsMenusFrequents] = React.useState(() =>
    normaliserArticlesLibres(
      lireSauvegarde(cleArticlesHorsMenusFrequents, articlesHorsMenusFrequentsDepart)
    )
  );
  const [coursesAchetees, setCoursesAchetees] = React.useState(() =>
    lireSauvegarde(cleCoursesAchetees, [])
  );
  const [precisionsCourses, setPrecisionsCourses] = React.useState(() =>
    lireSauvegarde(clePrecisionsCourses, {})
  );
  const [ordreRayons, setOrdreRayons] = React.useState(() =>
    normaliserOrdreRayons(lireSauvegarde(cleOrdreRayons, rayonsMigros))
  );
  const [profilFoyer, setProfilFoyer] = React.useState(() =>
    normaliserProfilFoyer(lireSauvegarde(cleProfilFoyer, profilFoyerDepart))
  );
  const [contexteJour, setContexteJour] = React.useState(() =>
    normaliserContexteJour(lireSauvegarde(cleContexteJour, contexteJourDepart))
  );
  const { jour, dateComplete } = getInfosDate(dateSelectionnee);
  const cleDateSelectionnee = getCleDate(dateSelectionnee);
  const listeCoursesGeneree = genererListeCourses(menusPlanifies, recettes, ordreRayons);
  const listeCourses = preparerListeCourses(
    listeCoursesGeneree,
    articlesLibresCourses,
    ordreRayons
  ).map((item) => ({
    ...item,
    commentaire: precisionsCourses[getCleCourse(item)] || item.commentaire || "",
  }));

  React.useEffect(() => {
    enregistrerSauvegarde(cleSauvegardeMenage, tachesMenage);
  }, [tachesMenage]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleCorbeilleMenage, tachesSupprimees);
  }, [tachesSupprimees]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleTachesFaitesMenage, tachesFaites);
  }, [tachesFaites]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleMenusPlanifies, menusPlanifies);
  }, [menusPlanifies]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleRecettes, recettes);
  }, [recettes]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleArticlesLibresCourses, articlesLibresCourses);
  }, [articlesLibresCourses]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleArticlesHorsMenusFrequents, articlesHorsMenusFrequents);
  }, [articlesHorsMenusFrequents]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleCoursesAchetees, coursesAchetees);
  }, [coursesAchetees]);

  React.useEffect(() => {
    enregistrerSauvegarde(clePrecisionsCourses, precisionsCourses);
  }, [precisionsCourses]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleOrdreRayons, ordreRayons);
  }, [ordreRayons]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleProfilFoyer, profilFoyer);
  }, [profilFoyer]);

  React.useEffect(() => {
    enregistrerSauvegarde(cleContexteJour, contexteJour);
  }, [contexteJour]);

  function ajouterRecette(recette) {
    setRecettes([...recettes, recette]);
  }

  function ajouterRecettes(recettesAAjouter) {
    setRecettes([...recettes, ...recettesAAjouter]);
  }

  function modifierRecette(recetteModifiee) {
    setRecettes(
      recettes.map((recette) =>
        recette.id === recetteModifiee.id ? recetteModifiee : recette
      )
    );
  }

  function supprimerRecette(recetteId) {
    setRecettes(recettes.filter((recette) => recette.id !== recetteId));
  }

  function planifierRecette(recetteId, dateRepas, nombrePersonnes) {
    setMenusPlanifies([
      ...menusPlanifies,
      {
        date: dateRepas,
        recetteId,
        personnes: nombrePersonnes || nombrePersonnesDefaut,
      },
    ]);
  }

  function changerMenuPlanifie(indexMenu, champ, valeur) {
    setMenusPlanifies(
      menusPlanifies.map((menu, index) =>
        index === indexMenu ? { ...menu, [champ]: valeur } : menu
      )
    );
  }

  function supprimerMenuPlanifie(indexMenu) {
    setMenusPlanifies(menusPlanifies.filter((menu, index) => index !== indexMenu));
  }

  function ajouterArticleLibreCourse(article) {
    setArticlesLibresCourses([...articlesLibresCourses, normaliserArticleLibre(article)]);
  }

  function supprimerArticleLibreCourse(articleId) {
    setArticlesLibresCourses(articlesLibresCourses.filter((article) => article.id !== articleId));
  }

  function confirmerSuppressionArticleLibre(article) {
    const doitSupprimer = window.confirm(
      "Retirer \"" + article.nom + "\" de la liste de courses ?"
    );

    if (!doitSupprimer) {
      return;
    }

    supprimerArticleLibreCourse(article.id);
  }

  function modifierCommentaireArticleLibre(articleId, commentaire) {
    setArticlesLibresCourses(
      articlesLibresCourses.map((article) =>
        article.id === articleId ? { ...article, commentaire } : article
      )
    );
  }

  function modifierPrecisionCourse(cleCourse, commentaire) {
    const nouvellesPrecisions = { ...precisionsCourses };

    if (commentaire.trim() === "") {
      delete nouvellesPrecisions[cleCourse];
    } else {
      nouvellesPrecisions[cleCourse] = commentaire.trim();
    }

    setPrecisionsCourses(nouvellesPrecisions);
  }

  function ajouterArticleHorsMenusFrequent(article) {
    setArticlesHorsMenusFrequents([
      ...articlesHorsMenusFrequents,
      normaliserArticleLibre(article),
    ]);
  }

  function supprimerArticleHorsMenusFrequent(articleId) {
    setArticlesHorsMenusFrequents(
      articlesHorsMenusFrequents.filter((article) => article.id !== articleId)
    );
  }

  function imprimerListeCourses() {
    window.print();
  }

  function basculerCourseAchetee(cleCourse) {
    const dejaAchetee = coursesAchetees.includes(cleCourse);

    setCoursesAchetees(
      dejaAchetee
        ? coursesAchetees.filter((course) => course !== cleCourse)
        : [...coursesAchetees, cleCourse]
    );
  }

  function deplacerRayon(indexRayon, direction) {
    const nouvelIndex = indexRayon + direction;

    if (nouvelIndex < 0 || nouvelIndex >= ordreRayons.length) {
      return;
    }

    const nouvelOrdre = [...ordreRayons];
    const rayonDeplace = nouvelOrdre[indexRayon];

    nouvelOrdre[indexRayon] = nouvelOrdre[nouvelIndex];
    nouvelOrdre[nouvelIndex] = rayonDeplace;
    setOrdreRayons(nouvelOrdre);
  }

  function reinitialiserOrdreRayons() {
    setOrdreRayons([...rayonsMigros]);
  }

  function creerSauvegardeComplete() {
    return creerTexteSauvegarde({
      tachesMenage,
      tachesSupprimees,
      tachesFaites,
      recettes,
      menusPlanifies,
      articlesLibresCourses,
      articlesHorsMenusFrequents,
      coursesAchetees,
      precisionsCourses,
      ordreRayons,
      profilFoyer,
      contexteJour,
    });
  }

  function restaurerDepuisSauvegarde(texteSauvegarde) {
    const donnees = lireTexteSauvegarde(texteSauvegarde);

    setTachesMenage(donnees.tachesMenage);
    setTachesSupprimees(donnees.tachesSupprimees);
    setTachesFaites(donnees.tachesFaites);
    setRecettes(donnees.recettes);
    setMenusPlanifies(donnees.menusPlanifies);
    setArticlesLibresCourses(donnees.articlesLibresCourses);
    setArticlesHorsMenusFrequents(donnees.articlesHorsMenusFrequents);
    setCoursesAchetees(donnees.coursesAchetees);
    setPrecisionsCourses(donnees.precisionsCourses);
    setOrdreRayons(donnees.ordreRayons);
    setProfilFoyer(donnees.profilFoyer);
    setContexteJour(donnees.contexteJour);
  }

  function ajouterTache(nouvelleTache) {
    setTachesMenage([...tachesMenage, normaliserTacheMenage(nouvelleTache)]);
  }

  function modifierTache(indexTache, tacheModifiee) {
    setTachesMenage(
      tachesMenage.map((tache, index) =>
        index === indexTache ? normaliserTacheMenage(tacheModifiee) : tache
      )
    );
  }

  function supprimerTache(indexTache) {
    const tacheSupprimee = tachesMenage[indexTache];

    setTachesMenage(tachesMenage.filter((tache, index) => index !== indexTache));
    setTachesSupprimees([...tachesSupprimees, tacheSupprimee]);
  }

  function restaurerTacheSupprimee(indexTacheSupprimee) {
    const tacheARestaurer = tachesSupprimees[indexTacheSupprimee];

    setTachesMenage([...tachesMenage, tacheARestaurer]);
    setTachesSupprimees(
      tachesSupprimees.filter((tache, index) => index !== indexTacheSupprimee)
    );
  }

  function restaurerTachesSupprimees() {
    setTachesMenage([...tachesMenage, ...tachesSupprimees]);
    setTachesSupprimees([]);
  }

  function supprimerDefinitivementTache(indexTacheSupprimee) {
    setTachesSupprimees(
      tachesSupprimees.filter((tache, index) => index !== indexTacheSupprimee)
    );
  }

  function basculerTacheFaite(cleDate, cleTache) {
    const tachesFaitesCeJour = tachesFaites[cleDate] || [];
    const dejaFaite = tachesFaitesCeJour.includes(cleTache);
    const nouvellesTachesFaites = dejaFaite
      ? tachesFaitesCeJour.filter((tache) => tache !== cleTache)
      : [...tachesFaitesCeJour, cleTache];

    setTachesFaites({
      ...tachesFaites,
      [cleDate]: nouvellesTachesFaites,
    });
  }

  return e(
    "main",
    { className: "app" },
    e(
      "section",
      { className: "hero" },
      e("p", { className: "eyebrow" }, "Bienvenue"),
      e("h1", null, "Pilier du foyer"),
      e("p", null, "L'essentiel du foyer, simplement.")
    ),
    e(
      "div",
      { className: "todayPanel" },
      e("p", { className: "label" }, "Jour consulté"),
      e("h2", null, dateComplete),
      e(
        "div",
        { className: "dateControls" },
        e(
          "button",
          {
            onClick: () => setDateSelectionnee(changerDate(dateSelectionnee, -1)),
            type: "button",
          },
          "Jour-1"
        ),
        e(
          "button",
          { onClick: () => setDateSelectionnee(new Date()), type: "button" },
          "Aujourd'hui"
        ),
        e(
          "button",
          {
            onClick: () => setDateSelectionnee(changerDate(dateSelectionnee, 1)),
            type: "button",
          },
          "Jour+1"
        )
      )
    ),
    ongletActif === "menus" &&
      e(Menus, {
        menusPlanifies,
        recettes,
        profilFoyer,
        contexteJour,
        setContexteJour,
        planifierRecette,
        ajouterRecette,
        ajouterRecettes,
        modifierRecette,
        supprimerRecette,
        changerMenuPlanifie,
        supprimerMenuPlanifie,
      }),
    ongletActif === "courses" &&
      e(Courses, {
        listeCourses,
        coursesAchetees,
        articlesHorsMenusFrequents,
        ordreRayons,
        ajouterArticleLibreCourse,
        supprimerArticleLibreCourse: confirmerSuppressionArticleLibre,
        modifierCommentaireArticleLibre,
        modifierPrecisionCourse,
        ajouterArticleHorsMenusFrequent,
        supprimerArticleHorsMenusFrequent,
        imprimerListeCourses,
        basculerCourseAchetee,
        deplacerRayon,
        reinitialiserOrdreRayons,
      }),
    ongletActif === "menage" &&
      e(Menage, {
        jour,
        dateComplete,
        dateSelectionnee,
        cleDate: cleDateSelectionnee,
        tachesMenage,
        tachesFaites,
        basculerTacheFaite,
      }),
    ongletActif === "planning" &&
      e(Planning, {
        jour,
        tachesMenage,
        tachesSupprimees,
        ajouterTache,
        modifierTache,
        supprimerTache,
        restaurerTacheSupprimee,
        restaurerTachesSupprimees,
        supprimerDefinitivementTache,
      }),
    ongletActif === "profil" &&
      e(ProfilFoyer, {
        profilFoyer,
        setProfilFoyer,
      }),
    ongletActif === "sauvegarde" &&
      e(Sauvegarde, {
        creerSauvegardeComplete,
        restaurerDepuisSauvegarde,
      }),
    e(
      "nav",
      { className: "bottomNav", "aria-label": "Navigation principale" },
      onglets.map((onglet) =>
        e(
          "button",
          {
            className: ongletActif === onglet.id ? "navButton active" : "navButton",
            key: onglet.id,
            onClick: () => setOngletActif(onglet.id),
            type: "button",
          },
          e("span", { className: "navIcon", "aria-hidden": "true" }, onglet.icon),
          e("span", null, onglet.label)
        )
      )
    )
  );
}

function Menus({
  menusPlanifies,
  recettes,
  profilFoyer,
  contexteJour,
  setContexteJour,
  planifierRecette,
  ajouterRecette,
  ajouterRecettes,
  modifierRecette,
  supprimerRecette,
  changerMenuPlanifie,
  supprimerMenuPlanifie,
}) {
  const [vueMenus, setVueMenus] = React.useState("planning");
  const [dateRepasChoisie, setDateRepasChoisie] = React.useState(getCleDate(new Date()));
  const [personnesChoisies, setPersonnesChoisies] = React.useState(nombrePersonnesDefaut);
  const [indexMenuAChanger, setIndexMenuAChanger] = React.useState(null);
  const [recetteAfficheeId, setRecetteAfficheeId] = React.useState(null);
  const [retourFicheRecette, setRetourFicheRecette] = React.useState("recettes");
  const [formulaireRecetteOuvert, setFormulaireRecetteOuvert] = React.useState(false);
  const [recetteEnEditionId, setRecetteEnEditionId] = React.useState(null);
  const [recetteASupprimerId, setRecetteASupprimerId] = React.useState(null);
  const [messageSuppressionRecette, setMessageSuppressionRecette] = React.useState("");
  const [rechercheRecette, setRechercheRecette] = React.useState("");
  const [categorieFiltreRecette, setCategorieFiltreRecette] = React.useState("Toutes");
  const [nomRecette, setNomRecette] = React.useState("");
  const [categorieRecette, setCategorieRecette] = React.useState("");
  const [dureeRecette, setDureeRecette] = React.useState("");
  const [difficulteRecette, setDifficulteRecette] = React.useState("Facile");
  const [personnesRecette, setPersonnesRecette] = React.useState(nombrePersonnesDefaut);
  const [remarquesRecette, setRemarquesRecette] = React.useState("");
  const [preparationRecette, setPreparationRecette] = React.useState("");
  const [ingredientsRecette, setIngredientsRecette] = React.useState([creerIngredientVide()]);
  const menusTries = menusPlanifies
    .map((menu, index) => ({ ...menu, indexOriginal: index }))
    .sort((a, b) => a.date.localeCompare(b.date));
  const recetteAffichee = recetteAfficheeId ? getRecetteParId(recettes, recetteAfficheeId) : null;
  const categoriesPersonnalisees = Array.from(
    new Set(recettes.map((recette) => recette.categorie || "Maison"))
  )
    .filter((categorie) => !categoriesRecettesProposees.includes(categorie))
    .sort((a, b) => a.localeCompare(b));
  const categoriesRecettes = ["Toutes", ...categoriesRecettesProposees, ...categoriesPersonnalisees];
  const categoriesFormulaireRecettes = [...categoriesRecettesProposees, ...categoriesPersonnalisees];
  const rechercheNormalisee = rechercheRecette.trim().toLowerCase();
  const recettesFiltrees = recettes
    .filter((recette) => {
      const correspondCategorie =
        categorieFiltreRecette === "Toutes" || recette.categorie === categorieFiltreRecette;
      const texteRecette = [
        recette.nom,
        recette.categorie,
        recette.difficulte,
        recette.remarques,
        recette.preparation,
      ]
        .join(" ")
        .toLowerCase();

      return correspondCategorie && texteRecette.includes(rechercheNormalisee);
    })
    .sort((a, b) => a.nom.localeCompare(b.nom));
  const recettesBaseManquantes = recettesBaseSupplementaires.filter(
    (recetteBase) => !recettes.some((recette) => recette.id === recetteBase.id)
  );

  function ajouterRecetteAuPlanning(recetteId) {
    if (indexMenuAChanger !== null) {
      changerMenuPlanifie(indexMenuAChanger, "recetteId", recetteId);
      setIndexMenuAChanger(null);
    } else {
      planifierRecette(recetteId, dateRepasChoisie, personnesChoisies);
    }

    setVueMenus("planning");
  }

  function ouvrirChangementRecette(menu) {
    setIndexMenuAChanger(menu.indexOriginal);
    setDateRepasChoisie(menu.date);
    setPersonnesChoisies(menu.personnes);
    setVueMenus("recettes");
  }

  function basculerVueMenus() {
    if (vueMenus === "planning") {
      setIndexMenuAChanger(null);
      setRecetteAfficheeId(null);
      setRecetteASupprimerId(null);
      setMessageSuppressionRecette("");
      setVueMenus("recettes");
      return;
    }

    setIndexMenuAChanger(null);
    setRecetteAfficheeId(null);
    setRetourFicheRecette("recettes");
    setRecetteASupprimerId(null);
    setMessageSuppressionRecette("");
    setVueMenus("planning");
  }

  function afficherRecetteDepuisPlanning(recetteId) {
    setRecetteAfficheeId(recetteId);
    setRetourFicheRecette("planning");
    setFormulaireRecetteOuvert(false);
    setRecetteASupprimerId(null);
    setMessageSuppressionRecette("");
    setVueMenus("recettes");
  }

  function afficherRecetteDepuisListe(recetteId) {
    setRecetteAfficheeId(recetteId);
    setRetourFicheRecette("recettes");
  }

  function fermerFicheRecette() {
    setRecetteAfficheeId(null);
    setRecetteASupprimerId(null);
    setMessageSuppressionRecette("");

    if (retourFicheRecette === "planning") {
      setVueMenus("planning");
    }

    setRetourFicheRecette("recettes");
  }

  function fermerFormulaireRecette() {
    setFormulaireRecetteOuvert(false);
    setRecetteEnEditionId(null);
    setNomRecette("");
    setCategorieRecette("");
    setDureeRecette("");
    setDifficulteRecette("Facile");
    setPersonnesRecette(nombrePersonnesDefaut);
    setRemarquesRecette("");
    setPreparationRecette("");
    setIngredientsRecette([creerIngredientVide()]);
  }

  function enregistrerNouvelleRecette(event) {
    event.preventDefault();

    if (nomRecette.trim() === "") {
      return;
    }

    const recetteAEnregistrer = {
      id: recetteEnEditionId || creerIdDepuisNom(nomRecette),
      nom: nomRecette.trim(),
      categorie: categorieRecette.trim() || "Maison",
      duree: dureeRecette.trim() || "À préciser",
      difficulte: difficulteRecette.trim() || "Facile",
      personnes: Number(personnesRecette) || nombrePersonnesDefaut,
      remarques: remarquesRecette.trim(),
      preparation: preparationRecette.trim(),
      ingredients: nettoyerIngredients(ingredientsRecette),
    };

    if (recetteEnEditionId) {
      modifierRecette(recetteAEnregistrer);
    } else {
      ajouterRecette(recetteAEnregistrer);
    }

    fermerFormulaireRecette();
  }

  function ouvrirEditionRecette(recette) {
    setRecetteAfficheeId(null);
    setRetourFicheRecette("recettes");
    setFormulaireRecetteOuvert(true);
    setRecetteEnEditionId(recette.id);
    setNomRecette(recette.nom);
    setCategorieRecette(recette.categorie);
    setDureeRecette(recette.duree);
    setDifficulteRecette(recette.difficulte);
    setPersonnesRecette(getPersonnesRecette(recette));
    setRemarquesRecette(recette.remarques);
    setPreparationRecette(recette.preparation || "");
    setIngredientsRecette(recette.ingredients.length ? recette.ingredients : [creerIngredientVide()]);
  }

  function demanderSuppressionRecette(recette) {
    const utilisations = menusPlanifies.filter((menu) => menu.recetteId === recette.id).length;

    if (utilisations > 0) {
      setRecetteASupprimerId(null);
      setMessageSuppressionRecette(
        "Cette recette est utilisée dans " +
          utilisations +
          " menu(s) planifié(s). Retire ou change ces menus avant de la supprimer."
      );
      return;
    }

    setMessageSuppressionRecette("");
    setRecetteASupprimerId(recette.id);
  }

  function confirmerSuppressionRecette(recetteId) {
    supprimerRecette(recetteId);
    setRecetteASupprimerId(null);
    setRecetteAfficheeId(null);
  }

  function changerIngredientRecette(indexIngredient, champ, valeur) {
    setIngredientsRecette(
      ingredientsRecette.map((ingredient, index) =>
        index === indexIngredient ? { ...ingredient, [champ]: valeur } : ingredient
      )
    );
  }

  function ajouterLigneIngredient() {
    setIngredientsRecette([...ingredientsRecette, creerIngredientVide()]);
  }

  function retirerLigneIngredient(indexIngredient) {
    if (ingredientsRecette.length === 1) {
      setIngredientsRecette([creerIngredientVide()]);
      return;
    }

    setIngredientsRecette(
      ingredientsRecette.filter((ingredient, index) => index !== indexIngredient)
    );
  }

  function ajouterBibliothequeBase() {
    ajouterRecettes(recettesBaseManquantes.map((recette) => normaliserRecette(recette)));
  }

  return e(
    "section",
    { className: "section" },
    e(
      "div",
      { className: "sectionHeader" },
      e("h2", null, "Menus"),
      e("span", null, menusPlanifies.length + " planifié(s)")
    ),
    e(
      "div",
      { className: "menusToolbar" },
      e(
        "p",
        { className: "label" },
        vueMenus === "planning"
          ? "Menus planifiés"
          : recetteAffichee
          ? "Fiche recette"
          : indexMenuAChanger === null
          ? "Recettes disponibles"
          : "Changer de menu"
      ),
      e(
        "button",
        {
          onClick: basculerVueMenus,
          type: "button",
        },
        vueMenus === "planning" ? "Planifier" : "Retour"
      )
    ),
    vueMenus === "recettes" &&
    e(
      "section",
      { className: "mealPanel" },
      recetteAffichee
        ? e(FicheRecette, {
            recette: recetteAffichee,
            profilFoyer,
            contexteJour,
            recetteASupprimerId,
            messageSuppressionRecette,
            modifierLaRecette: () => ouvrirEditionRecette(recetteAffichee),
            demanderSuppressionRecette: () => demanderSuppressionRecette(recetteAffichee),
            confirmerSuppressionRecette: () => confirmerSuppressionRecette(recetteAffichee.id),
            annulerSuppressionRecette: () => setRecetteASupprimerId(null),
            retourAuxRecettes: fermerFicheRecette,
          })
        : formulaireRecetteOuvert
        ? e(FormulaireRecette, {
            nomRecette,
            categorieRecette,
            dureeRecette,
            difficulteRecette,
            personnesRecette,
            remarquesRecette,
            preparationRecette,
            ingredientsRecette,
            estEditionRecette: recetteEnEditionId !== null,
            changerIngredientRecette,
            ajouterLigneIngredient,
            retirerLigneIngredient,
            setNomRecette,
            setCategorieRecette,
            setDureeRecette,
            setDifficulteRecette,
            setPersonnesRecette,
            setRemarquesRecette,
            setPreparationRecette,
            categoriesFormulaireRecettes,
            enregistrerNouvelleRecette,
            fermerFormulaireRecette,
          })
        : e(
            React.Fragment,
            null,
            e(ContexteJour, {
              contexteJour,
              setContexteJour,
            }),
      indexMenuAChanger !== null &&
        e(
          "p",
          { className: "frequencyHint" },
          "Choisis un nouveau menu. La date et le nombre de personnes seront conservés."
        ),
      indexMenuAChanger === null &&
      e(
        "div",
        { className: "mealChoiceForm" },
        e(
          "label",
          null,
          "Date du repas",
          e("input", {
            onChange: (event) => setDateRepasChoisie(event.target.value),
            type: "date",
            value: dateRepasChoisie,
          })
        ),
        e(
          "label",
          null,
          "Personnes",
          e("input", {
            min: "1",
            onChange: (event) => setPersonnesChoisies(event.target.value),
            type: "number",
            value: personnesChoisies,
          })
        )
      ),
      e(
        "div",
        { className: "recipeFilters" },
        e("input", {
          onChange: (event) => setRechercheRecette(event.target.value),
          placeholder: "Rechercher une recette",
          type: "search",
          value: rechercheRecette,
        }),
        e(
          "select",
          {
            onChange: (event) => setCategorieFiltreRecette(event.target.value),
            value: categorieFiltreRecette,
          },
          categoriesRecettes.map((categorie) =>
            e("option", { key: categorie, value: categorie }, categorie)
          )
        )
      ),
      indexMenuAChanger === null &&
        e(
          "button",
          {
            className: "addRecipeButton",
            onClick: () => setFormulaireRecetteOuvert(true),
            type: "button",
          },
          "Ajouter une recette"
        ),
      indexMenuAChanger === null &&
        recettesBaseManquantes.length > 0 &&
        e(
          "button",
          {
            className: "addRecipeButton secondaryRecipeImport",
            onClick: ajouterBibliothequeBase,
            type: "button",
          },
          "Ajouter " + recettesBaseManquantes.length + " recettes de base"
        ),
      e(
        "div",
        { className: "cards" },
        recettesFiltrees.length === 0
          ? e(
              "div",
              { className: "emptyState" },
              e("h3", null, "Aucune recette trouvée"),
              e("p", null, "Essaie une autre recherche ou une autre catégorie.")
            )
          : recettesFiltrees.map((recette) =>
          e(
            "article",
            { className: "card recipeCard", key: recette.id },
            e(
              "div",
              null,
              e(
                "p",
                { className: "label" },
                recette.categorie +
                  " · " +
                  recette.duree +
                  " · pour " +
                  getPersonnesRecette(recette)
              ),
              e("h3", null, recette.nom),
              e("p", null, recette.difficulte + " · " + recette.remarques)
            ),
            e(
              "div",
              { className: "recipeActions" },
              e(
                "button",
                { onClick: () => ajouterRecetteAuPlanning(recette.id), type: "button" },
                indexMenuAChanger === null ? "Ajouter à cette date" : "Choisir ce menu"
              ),
              e(
                "button",
                {
                  className: "secondaryButton",
                  onClick: () => afficherRecetteDepuisListe(recette.id),
                  type: "button",
                },
                "Voir la recette"
              )
            )
          )
        )
      )
            )
    ),
    vueMenus === "planning" &&
    e(
      "section",
      { className: "mealPanel" },
      menusPlanifies.length === 0
        ? e("div", { className: "emptyState" }, e("h3", null, "Aucun menu prévu"), e("p", null, "Appuie sur Planifier pour choisir une recette."))
        : e(
            "div",
            { className: "plannedMeals" },
            menusTries.map((menu) => {
              const recette = getRecetteParId(recettes, menu.recetteId);

              return e(
                "article",
                { className: "plannedMeal", key: menu.date + menu.recetteId + menu.indexOriginal },
                e(
                  "div",
                  null,
                  e("p", { className: "label" }, formaterCleDate(menu.date)),
                  e("h3", null, recette ? recette.nom : "Recette inconnue")
                ),
                e(
                  "div",
                  { className: "plannedMealControls" },
                  e("input", {
                    onChange: (event) =>
                      changerMenuPlanifie(menu.indexOriginal, "date", event.target.value),
                    type: "date",
                    value: menu.date,
                  }),
                  e(
                    "label",
                    { className: "peopleInput" },
                    e("span", { "aria-hidden": "true" }, "👤"),
                    e("input", {
                      "aria-label": "Nombre de personnes",
                      min: "1",
                      onChange: (event) =>
                        changerMenuPlanifie(menu.indexOriginal, "personnes", event.target.value),
                      type: "number",
                      value: menu.personnes,
                    })
                  ),
                  e(
                    "button",
                    { onClick: () => supprimerMenuPlanifie(menu.indexOriginal), type: "button" },
                    "Retirer"
                  ),
                  e(
                    "button",
                    { onClick: () => ouvrirChangementRecette(menu), type: "button" },
                    "Changer de menu"
                  ),
                  recette &&
                    e(
                      "button",
                      { onClick: () => afficherRecetteDepuisPlanning(recette.id), type: "button" },
                      "Voir la recette"
                    )
                )
              );
            })
          )
    )
  );
}

function ContexteJour({ contexteJour, setContexteJour }) {
  const [estOuvert, setEstOuvert] = React.useState(false);
  const contexteNormalise = normaliserContexteJour(contexteJour);
  const resumeContexte =
    "Énergie " +
    contexteNormalise.energie +
    " · " +
    contexteNormalise.tempsDisponible +
    " · repas " +
    contexteNormalise.heureRepas +
    " · " +
    contexteNormalise.objectifs.join(", ");

  function changerChamp(champ, valeur) {
    setContexteJour(normaliserContexteJour({ ...contexteNormalise, [champ]: valeur }));
  }

  function basculerObjectif(objectif) {
    const objectifsActuels = contexteNormalise.objectifs;
    const objectifsSuivants = objectifsActuels.includes(objectif)
      ? objectifsActuels.filter((element) => element !== objectif)
      : [...objectifsActuels, objectif];

    changerChamp("objectifs", objectifsSuivants);
  }

  return e(
    "article",
    { className: "dailyContextPanel" },
    e(
      "div",
      { className: "dailyContextHeader" },
      e(
        "div",
        null,
        e("h3", null, "Contexte du jour"),
        e("p", { className: "dailyContextSummary" }, resumeContexte)
      ),
      e(
        "button",
        {
          className: "dailyContextToggle",
          onClick: () => setEstOuvert(!estOuvert),
          type: "button",
        },
        estOuvert ? "Fermer" : "Modifier"
      )
    ),
    estOuvert &&
      e(
        React.Fragment,
        null,
        e(
          "div",
          { className: "dailyContextGrid" },
          e(
            "label",
            null,
            "Énergie",
            e(
              "select",
              {
                onChange: (event) => changerChamp("energie", event.target.value),
                value: contexteNormalise.energie,
              },
              optionsEnergieJour.map((option) =>
                e("option", { key: option, value: option }, option)
              )
            )
          ),
          e(
            "label",
            null,
            "Temps",
            e(
              "select",
              {
                onChange: (event) => changerChamp("tempsDisponible", event.target.value),
                value: contexteNormalise.tempsDisponible,
              },
              optionsTempsDisponible.map((option) =>
                e("option", { key: option, value: option }, option)
              )
            )
          ),
          e(
            "label",
            null,
            "Repas à",
            e("input", {
              onChange: (event) => changerChamp("heureRepas", event.target.value),
              type: "time",
              value: contexteNormalise.heureRepas,
            })
          ),
          e(
            "label",
            null,
            "Motivation",
            e(
              "select",
              {
                onChange: (event) => changerChamp("motivation", event.target.value),
                value: contexteNormalise.motivation,
              },
              optionsMotivationCuisine.map((option) =>
                e("option", { key: option, value: option }, option)
              )
            )
          )
        ),
        e("p", { className: "label" }, "Objectif du moment"),
        e(
          "div",
          { className: "dailyGoalGrid" },
          optionsObjectifMoment.map((objectif) =>
            e(
              "label",
              { className: "dailyGoal", key: objectif },
              e("input", {
                checked: contexteNormalise.objectifs.includes(objectif),
                onChange: () => basculerObjectif(objectif),
                type: "checkbox",
              }),
              objectif
            )
          )
        )
      )
  );
}

function FicheRecette({
  recette,
  profilFoyer,
  contexteJour,
  recetteASupprimerId,
  messageSuppressionRecette,
  modifierLaRecette,
  demanderSuppressionRecette,
  confirmerSuppressionRecette,
  annulerSuppressionRecette,
  retourAuxRecettes,
}) {
  const [questionIa, setQuestionIa] = React.useState("");
  const [messageIa, setMessageIa] = React.useState("");
  const zoneQuestionIa = React.useRef(null);
  const resumeIa = resumerContexteIa(profilFoyer, contexteJour);

  function selectionnerQuestionIa() {
    setTimeout(() => {
      if (!zoneQuestionIa.current) {
        return;
      }

      zoneQuestionIa.current.focus();
      zoneQuestionIa.current.select();
      zoneQuestionIa.current.setSelectionRange(0, zoneQuestionIa.current.value.length);
    }, 0);
  }

  function preparerQuestionIa(intention) {
    setQuestionIa(creerQuestionIaRecette(recette, intention, profilFoyer, contexteJour));
    setMessageIa("Question préparée.");
  }

  async function copierQuestionIa() {
    if (!questionIa) {
      setMessageIa("Choisis d'abord une question rapide.");
      return;
    }

    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      selectionnerQuestionIa();
      setMessageIa("Copie automatique bloquée. Le texte est sélectionné : touche Copier.");
      return;
    }

    try {
      await navigator.clipboard.writeText(questionIa);
      setMessageIa("Question copiée.");
    } catch (erreur) {
      selectionnerQuestionIa();
      setMessageIa("Copie automatique bloquée. Le texte est sélectionné : touche Copier.");
    }
  }

  return e(
    "article",
    { className: "recipeSheet" },
    e(
      "p",
      { className: "label" },
      recette.categorie +
        " · " +
        recette.duree +
        " · pour " +
        getPersonnesRecette(recette) +
        " personnes"
    ),
    e("h3", null, recette.nom),
    e("p", { className: "recipeMeta" }, recette.difficulte),
    e("p", null, recette.remarques),
    recette.preparation &&
      e(
        React.Fragment,
        null,
        e("h4", null, "Préparation"),
        e("p", { className: "recipePreparation" }, recette.preparation)
      ),
    e("h4", null, "Ingrédients"),
    e(
      "ul",
      { className: "ingredientList" },
      recette.ingredients.map((ingredient) =>
        e(
          "li",
          { key: ingredient.nom + ingredient.unite },
          e("span", null, ingredient.nom),
          e(
            "strong",
            null,
            formaterQuantite(ingredient.quantite) + " " + ingredient.unite
          ),
          e("em", null, ingredient.rayon)
        )
      )
    ),
    e(
      "div",
      { className: "aiHelpPanel" },
      e("h4", null, "Aide IA"),
      e("p", { className: "aiContextSummary" }, resumeIa),
      e(
        "div",
        { className: "aiQuickButtons" },
        boutonsIaRecette.map((bouton) =>
          e(
            "button",
            {
              key: bouton.id,
              onClick: () => preparerQuestionIa(bouton.id),
              type: "button",
            },
            bouton.label
          )
        )
      ),
      questionIa &&
        e("textarea", {
          onChange: (event) => setQuestionIa(event.target.value),
          ref: zoneQuestionIa,
          value: questionIa,
        }),
      questionIa &&
        e("button", { className: "secondaryButton", onClick: copierQuestionIa, type: "button" }, "Copier la question"),
      messageIa && e("p", { className: "aiHelpMessage" }, messageIa)
    ),
    e(
      "button",
      { onClick: modifierLaRecette, type: "button" },
      "Modifier la recette"
    ),
    messageSuppressionRecette &&
      e("p", { className: "deleteWarning" }, messageSuppressionRecette),
    recetteASupprimerId === recette.id
      ? e(
          "div",
          { className: "confirmDelete recipeConfirmDelete" },
          e(
            "button",
            {
              className: "confirmDeleteButton",
              onClick: confirmerSuppressionRecette,
              type: "button",
            },
            "Confirmer"
          ),
          e(
            "button",
            {
              className: "cancelDeleteButton",
              onClick: annulerSuppressionRecette,
              type: "button",
            },
            "Annuler"
          )
        )
      : e(
          "button",
          {
            className: "dangerButton",
            onClick: demanderSuppressionRecette,
            type: "button",
          },
          "Supprimer la recette"
        ),
    e(
      "button",
      { className: "secondaryButton", onClick: retourAuxRecettes, type: "button" },
      "Retour aux recettes"
    )
  );
}

function FormulaireRecette({
  nomRecette,
  categorieRecette,
  dureeRecette,
  difficulteRecette,
  personnesRecette,
  remarquesRecette,
  preparationRecette,
  ingredientsRecette,
  estEditionRecette,
  changerIngredientRecette,
  ajouterLigneIngredient,
  retirerLigneIngredient,
  setNomRecette,
  setCategorieRecette,
  setDureeRecette,
  setDifficulteRecette,
  setPersonnesRecette,
  setRemarquesRecette,
  setPreparationRecette,
  categoriesFormulaireRecettes,
  enregistrerNouvelleRecette,
  fermerFormulaireRecette,
}) {
  return e(
    "form",
    { className: "recipeForm", onSubmit: enregistrerNouvelleRecette },
    e("p", { className: "label" }, estEditionRecette ? "Modifier la recette" : "Nouvelle recette"),
    e(
      "label",
      null,
      "Nom",
      e("input", {
        onChange: (event) => setNomRecette(event.target.value),
        placeholder: "Ex. Curry de légumes",
        type: "text",
        value: nomRecette,
      })
    ),
    e(
      "div",
      { className: "recipeFormGrid" },
      e(
        "label",
        null,
        "Catégorie",
        e(
          "select",
          {
          onChange: (event) => setCategorieRecette(event.target.value),
          value: categorieRecette,
          },
          categoriesFormulaireRecettes.map((categorie) =>
            e("option", { key: categorie, value: categorie }, categorie)
          )
        )
      ),
      e(
        "label",
        null,
        "Durée",
        e("input", {
          onChange: (event) => setDureeRecette(event.target.value),
          placeholder: "Ex. 30 min",
          type: "text",
          value: dureeRecette,
        })
      )
    ),
    e(
      "div",
      { className: "recipeFormGrid" },
      e(
        "label",
        null,
        "Difficulté",
        e("input", {
          onChange: (event) => setDifficulteRecette(event.target.value),
          type: "text",
          value: difficulteRecette,
        })
      ),
      e(
        "label",
        null,
        "Pour",
        e("input", {
          min: "1",
          onChange: (event) => setPersonnesRecette(event.target.value),
          type: "number",
          value: personnesRecette,
        })
      )
    ),
    e(
      "label",
      null,
      "Remarques",
      e("input", {
        onChange: (event) => setRemarquesRecette(event.target.value),
        placeholder: "Ex. Bon avec du riz",
        type: "text",
        value: remarquesRecette,
      })
    ),
    e(
      "label",
      null,
      "Préparation",
      e("textarea", {
        onChange: (event) => setPreparationRecette(event.target.value),
        placeholder: "Explique les étapes principales de la recette.",
        value: preparationRecette,
      })
    ),
    e("p", { className: "label" }, "Ingrédients"),
    e(
      "div",
      { className: "ingredientEditor" },
      ingredientsRecette.map((ingredient, index) =>
        e(
          "div",
          { className: "ingredientEditorRow", key: index },
          e("input", {
            onChange: (event) => changerIngredientRecette(index, "nom", event.target.value),
            placeholder: "Nom",
            type: "text",
            value: ingredient.nom,
          }),
          e("input", {
            min: "0",
            onChange: (event) => changerIngredientRecette(index, "quantite", event.target.value),
            placeholder: "Qté",
            type: "number",
            value: ingredient.quantite,
          }),
          e("input", {
            onChange: (event) => changerIngredientRecette(index, "unite", event.target.value),
            placeholder: "Unité",
            type: "text",
            value: ingredient.unite,
          }),
          e("select", {
            onChange: (event) => changerIngredientRecette(index, "rayon", event.target.value),
            value: ingredient.rayon,
          }, creerOptionsRayons(ingredient.rayon)),
          e(
            "button",
            {
              className: "secondaryButton",
              onClick: () => retirerLigneIngredient(index),
              type: "button",
            },
            "Retirer"
          )
        )
      ),
      e(
        "button",
        {
          className: "addIngredientButton",
          onClick: ajouterLigneIngredient,
          type: "button",
        },
        "Ajouter un ingrédient"
      )
    ),
    e(
      "p",
      { className: "frequencyHint compact" },
      "Les ingrédients vides ne seront pas enregistrés."
    ),
    e(
      "div",
      { className: "recipeActions" },
      e("button", { type: "submit" }, estEditionRecette ? "Enregistrer les changements" : "Enregistrer la recette"),
      e(
        "button",
        { className: "secondaryButton", onClick: fermerFormulaireRecette, type: "button" },
        "Annuler"
      )
    )
  );
}

function Courses({
  listeCourses,
  coursesAchetees,
  articlesHorsMenusFrequents,
  ordreRayons,
  ajouterArticleLibreCourse,
  supprimerArticleLibreCourse,
  modifierCommentaireArticleLibre,
  modifierPrecisionCourse,
  ajouterArticleHorsMenusFrequent,
  supprimerArticleHorsMenusFrequent,
  imprimerListeCourses,
  basculerCourseAchetee,
  deplacerRayon,
  reinitialiserOrdreRayons,
}) {
  const [formulaireArticleOuvert, setFormulaireArticleOuvert] = React.useState(false);
  const [gestionFrequentOuverte, setGestionFrequentOuverte] = React.useState(false);
  const [gestionRayonsOuverte, setGestionRayonsOuverte] = React.useState(false);
  const [nomArticle, setNomArticle] = React.useState("");
  const [quantiteArticle, setQuantiteArticle] = React.useState(1);
  const [uniteArticle, setUniteArticle] = React.useState("pièce(s)");
  const [rayonArticle, setRayonArticle] = React.useState("Autres");
  const [commentaireArticle, setCommentaireArticle] = React.useState("");
  const [nomFrequent, setNomFrequent] = React.useState("");
  const [quantiteFrequent, setQuantiteFrequent] = React.useState(1);
  const [uniteFrequent, setUniteFrequent] = React.useState("pièce(s)");
  const [rayonFrequent, setRayonFrequent] = React.useState("Autres");
  const coursesParRayon = grouperCoursesParRayon(listeCourses);
  const rayons = Object.keys(coursesParRayon).sort(
    (a, b) => getRangRayon(a, ordreRayons) - getRangRayon(b, ordreRayons) || a.localeCompare(b)
  );

  function ajouterArticle(event) {
    event.preventDefault();

    if (nomArticle.trim() === "") {
      return;
    }

    ajouterArticleLibreCourse({
      nom: nomArticle.trim(),
      quantite: quantiteArticle,
      unite: uniteArticle.trim() || "pièce(s)",
      rayon: rayonArticle.trim() || "Autres",
      commentaire: commentaireArticle.trim(),
    });
    setNomArticle("");
    setQuantiteArticle(1);
    setUniteArticle("pièce(s)");
    setRayonArticle("Autres");
    setCommentaireArticle("");
  }

  function ajouterArticleFrequent(article) {
    ajouterArticleLibreCourse({ ...article, commentaire: "" });
  }

  function ouvrirPrecisionArticle(item) {
    const cleCourse = getCleCourse(item);
    const precision = window.prompt(
      "Précision pour " + item.nom + " :",
      item.commentaire || ""
    );

    if (precision === null) {
      return;
    }

    modifierPrecisionCourse(cleCourse, precision.trim());

    if (item.source === "libre") {
      modifierCommentaireArticleLibre(item.id, precision.trim());
    }
  }

  function ajouterFrequent(event) {
    event.preventDefault();

    if (nomFrequent.trim() === "") {
      return;
    }

    ajouterArticleHorsMenusFrequent({
      nom: nomFrequent.trim(),
      quantite: quantiteFrequent,
      unite: uniteFrequent.trim() || "pièce(s)",
      rayon: rayonFrequent.trim() || "Autres",
      commentaire: "",
    });
    setNomFrequent("");
    setQuantiteFrequent(1);
    setUniteFrequent("pièce(s)");
    setRayonFrequent("Autres");
  }

  return e(
    "section",
    { className: "section" },
    e(
      "div",
      { className: "sectionHeader" },
      e("h2", null, "Courses"),
      e("span", null, listeCourses.length + " article(s)")
    ),
    e(
      "div",
      { className: "shoppingToolbar" },
      e(
        "button",
        {
          className: "secondaryButton",
          onClick: () => setFormulaireArticleOuvert(!formulaireArticleOuvert),
          type: "button",
        },
        formulaireArticleOuvert ? "Fermer" : "Ajouter HM"
      ),
      e(
        "button",
        {
          className: "secondaryButton",
          onClick: () => setGestionRayonsOuverte(!gestionRayonsOuverte),
          type: "button",
        },
        gestionRayonsOuverte ? "Fermer les rayons" : "Rayons"
      ),
      e("p", null, "Sans badge = utile aux menus")
    ),
    gestionRayonsOuverte &&
      e(
        "div",
        { className: "rayonManage" },
        e(
          "div",
          { className: "rayonManageHeader" },
          e("p", { className: "label" }, "Ordre des rayons"),
          e(
            "button",
            {
              onClick: reinitialiserOrdreRayons,
              type: "button",
            },
            "Réinitialiser"
          )
        ),
        e(
          "div",
          { className: "rayonManageList" },
          ordreRayons.map((rayon, index) =>
            e(
              "div",
              { className: "rayonManageItem", key: rayon },
              e("span", null, index + 1 + ". " + rayon),
              e(
                "div",
                { className: "rayonMoveButtons" },
                e(
                  "button",
                  {
                    disabled: index === 0,
                    onClick: () => deplacerRayon(index, -1),
                    type: "button",
                    title: "Monter",
                  },
                  "↑"
                ),
                e(
                  "button",
                  {
                    disabled: index === ordreRayons.length - 1,
                    onClick: () => deplacerRayon(index, 1),
                    type: "button",
                    title: "Descendre",
                  },
                  "↓"
                )
              )
            )
          )
        )
      ),
    e(
      "div",
      { className: "quickItems" },
      e(
        "div",
        { className: "quickItemsHeader" },
        e("p", { className: "label" }, "HM fréquents"),
        e(
          "button",
          {
            onClick: () => setGestionFrequentOuverte(!gestionFrequentOuverte),
            type: "button",
          },
          gestionFrequentOuverte ? "Fermer" : "Gérer"
        )
      ),
      e(
        "div",
        { className: "quickItemList" },
        articlesHorsMenusFrequents.length === 0
          ? e("p", { className: "quickEmpty" }, "Aucun raccourci pour l'instant.")
          : articlesHorsMenusFrequents.map((article) =>
              e(
                "button",
                {
                  key: article.id,
                  onClick: () => ajouterArticleFrequent(article),
                  type: "button",
                  title: article.rayon,
                },
                article.nom
              )
            )
      ),
      gestionFrequentOuverte &&
        e(
          "div",
          { className: "quickManage" },
          e(
            "div",
            { className: "quickManageList" },
            articlesHorsMenusFrequents.map((article) =>
              e(
                "div",
                { className: "quickManageItem", key: article.id },
                e(
                  "span",
                  null,
                  article.nom +
                    " · " +
                    formaterQuantite(article.quantite) +
                    " " +
                    article.unite
                ),
                e(
                  "button",
                  {
                    onClick: () => supprimerArticleHorsMenusFrequent(article.id),
                    type: "button",
                  },
                  "Retirer"
                )
              )
            )
          ),
          e(
            "form",
            { className: "quickManageForm", onSubmit: ajouterFrequent },
            e("p", { className: "label" }, "Nouveau raccourci"),
            e("input", {
              onChange: (event) => setNomFrequent(event.target.value),
              placeholder: "Nom",
              type: "text",
              value: nomFrequent,
            }),
            e(
              "div",
              { className: "shoppingFormGrid" },
              e("input", {
                min: "0",
                onChange: (event) => setQuantiteFrequent(event.target.value),
                placeholder: "Qté",
                step: "0.1",
                type: "number",
                value: quantiteFrequent,
              }),
              e("input", {
                onChange: (event) => setUniteFrequent(event.target.value),
                placeholder: "Unité",
                type: "text",
                value: uniteFrequent,
              })
            ),
            e("select", {
              onChange: (event) => setRayonFrequent(event.target.value),
              value: rayonFrequent,
            }, creerOptionsRayons(rayonFrequent, ordreRayons)),
            e("button", { type: "submit" }, "Ajouter aux fréquents")
          )
        )
    ),
    formulaireArticleOuvert &&
      e(
        "form",
        { className: "shoppingForm", onSubmit: ajouterArticle },
        e("p", { className: "label" }, "Article hors menus"),
        e(
          "label",
          null,
          "Nom",
          e("input", {
            onChange: (event) => setNomArticle(event.target.value),
            placeholder: "Ex. lessive",
            type: "text",
            value: nomArticle,
          })
        ),
        e(
          "div",
          { className: "shoppingFormGrid" },
          e(
            "label",
            null,
            "Quantité",
            e("input", {
              min: "0",
              onChange: (event) => setQuantiteArticle(event.target.value),
              step: "0.1",
              type: "number",
              value: quantiteArticle,
            })
          ),
          e(
            "label",
            null,
            "Unité",
            e("input", {
              onChange: (event) => setUniteArticle(event.target.value),
              type: "text",
              value: uniteArticle,
            })
          )
        ),
        e(
          "label",
          null,
          "Rayon",
          e("select", {
            onChange: (event) => setRayonArticle(event.target.value),
            value: rayonArticle,
          }, creerOptionsRayons(rayonArticle, ordreRayons))
        ),
        e(
          "label",
          null,
          "Précision",
          e("input", {
            onChange: (event) => setCommentaireArticle(event.target.value),
            placeholder: "Ex. marque, taille, parfum...",
            type: "text",
            value: commentaireArticle,
          })
        ),
        e("button", { type: "submit" }, "Ajouter l'article")
      ),
    e(
      "div",
      { className: "printPanel" },
      e(
        "button",
        {
          disabled: listeCourses.length === 0,
          onClick: imprimerListeCourses,
          type: "button",
        },
        "Imprimer la liste"
      )
    ),
    listeCourses.length === 0
      ? e(
          "div",
          { className: "emptyState" },
          e("h3", null, "Aucune course à imprimer"),
          e("p", null, "Planifie une recette ou ajoute un article hors menus.")
        )
        : e(
            React.Fragment,
            null,
            e(
            "div",
            { className: "shoppingGroups" },
          rayons.map((rayon) =>
            e(
              "section",
              { className: "shoppingGroup", key: rayon },
              e("h3", null, rayon),
              e(
                "div",
                { className: "shoppingList" },
                coursesParRayon[rayon].map((item) => {
                  const cleCourse = getCleCourse(item);
                  const estAchetee = coursesAchetees.includes(cleCourse);

                  return e(
                    "div",
                    {
                      className:
                        "shoppingItem" +
                        (estAchetee ? " bought" : "") +
                        (item.source === "libre" ? " freeItem" : ""),
                      key: cleCourse,
                    },
                    e("input", {
                      checked: estAchetee,
                      onChange: () => basculerCourseAchetee(cleCourse),
                      type: "checkbox",
                    }),
                    e(
                      "span",
                      { className: "shoppingItemText" },
                      item.nom + " · " + formaterQuantite(item.quantite) + " " + item.unite,
                      item.commentaire &&
                        e("small", { className: "shoppingComment" }, item.commentaire)
                    ),
                    item.source === "libre" &&
                      e("em", { className: "shoppingBadge" }, "Hors menus"),
                    e(
                      "div",
                      { className: "shoppingItemActions" },
                      item.source === "libre" &&
                        e(
                          "button",
                          {
                            className: "smallTextButton",
                            onClick: () => supprimerArticleLibreCourse(item),
                            type: "button",
                          },
                          "Retirer"
                        ),
                      e(
                        "button",
                        {
                          className: "smallTextButton",
                          onClick: () => ouvrirPrecisionArticle(item),
                          type: "button",
                        },
                        item.commentaire ? "Modifier" : "Préciser"
                      )
                    ),
                    null
                  );
                })
              )
            )
          )
          )
        )
  );
}

function ProfilFoyer({ profilFoyer, setProfilFoyer }) {
  const [profilEnCours, setProfilEnCours] = React.useState(() =>
    normaliserProfilFoyer(profilFoyer)
  );
  const [message, setMessage] = React.useState("");
  const [equipementsAvancesOuverts, setEquipementsAvancesOuverts] = React.useState(false);
  const nombreEquipementsAvances = (profilEnCours.equipements.autresEquipements || []).length;

  React.useEffect(() => {
    setProfilEnCours(normaliserProfilFoyer(profilFoyer));
  }, [profilFoyer]);

  function changerEquipement(champ, valeur) {
    setProfilEnCours({
      ...profilEnCours,
      equipements: {
        ...profilEnCours.equipements,
        [champ]: valeur,
      },
    });
  }

  function basculerAutreEquipement(equipement) {
    const equipementsActuels = profilEnCours.equipements.autresEquipements || [];
    const equipementsSuivants = equipementsActuels.includes(equipement)
      ? equipementsActuels.filter((element) => element !== equipement)
      : [...equipementsActuels, equipement];

    changerEquipement("autresEquipements", equipementsSuivants);
  }

  function basculerFonctionFour(fonction) {
    const fonctionsActuelles = profilEnCours.equipements.fonctionsFour || [];
    const fonctionsSuivantes = fonctionsActuelles.includes(fonction)
      ? fonctionsActuelles.filter((element) => element !== fonction)
      : [...fonctionsActuelles, fonction];

    changerEquipement("fonctionsFour", fonctionsSuivantes);
  }

  function enregistrerProfil(event) {
    event.preventDefault();
    setProfilFoyer(normaliserProfilFoyer(profilEnCours));
    setMessage("Profil foyer enregistré.");
  }

  return e(
    "section",
    { className: "section profileSection" },
    e(
      "div",
      { className: "sectionHeader" },
      e("h2", null, "Profil foyer"),
      e("span", null, "IA cuisine")
    ),
    e(
      "form",
      { className: "profileForm", onSubmit: enregistrerProfil },
      e("p", { className: "label" }, "Équipements cuisine"),
      e(
        "label",
        null,
        "Airfryer",
        e("input", {
          onChange: (event) => changerEquipement("airfryer", event.target.value),
          type: "text",
          value: profilEnCours.equipements.airfryer,
        })
      ),
      e(
        "div",
        { className: "profileToggleGrid" },
        e(
          "label",
          { className: "profileToggle" },
          e("input", {
            checked: profilEnCours.equipements.fourVapeur,
            onChange: (event) => changerEquipement("fourVapeur", event.target.checked),
            type: "checkbox",
          }),
          "Four vapeur"
        ),
        e(
          "div",
          { className: "profileNestedToggle" },
          e(
            "label",
            { className: "profileToggle" },
            e("input", {
              checked: profilEnCours.equipements.fourTraditionnel,
              onChange: (event) => changerEquipement("fourTraditionnel", event.target.checked),
              type: "checkbox",
            }),
            "Four traditionnel"
          ),
          profilEnCours.equipements.fourTraditionnel &&
            e(
              "div",
              { className: "profileNestedOptions" },
              fonctionsFourProposees.map((fonction) =>
                e(
                  "label",
                  { className: "profileToggle profileSubToggle", key: fonction },
                  e("input", {
                    checked: (profilEnCours.equipements.fonctionsFour || []).includes(fonction),
                    onChange: () => basculerFonctionFour(fonction),
                    type: "checkbox",
                  }),
                  fonction
                )
              )
            )
        ),
        e(
          "label",
          { className: "profileToggle" },
          e("input", {
            checked: profilEnCours.equipements.microOndes,
            onChange: (event) => changerEquipement("microOndes", event.target.checked),
            type: "checkbox",
          }),
          "Micro-ondes"
        )
      ),
      e(
        "label",
        null,
        "Plaques",
        e(
          "select",
          {
            onChange: (event) => changerEquipement("plaques", event.target.value),
            value: profilEnCours.equipements.plaques,
          },
          ["induction", "vitrocéramique", "gaz", "autre"].map((option) =>
            e("option", { key: option, value: option }, option)
          )
        )
      ),
      e(
        "label",
        null,
        "Robot ou mixer",
        e("input", {
          onChange: (event) => changerEquipement("robotMixer", event.target.value),
          placeholder: "Ex. mixer plongeant, robot pâtissier...",
          type: "text",
          value: profilEnCours.equipements.robotMixer,
        })
      ),
      e(
        "div",
        { className: "profileInlineHeader" },
        e(
          "p",
          { className: "label" },
          "Autres équipements" +
            (nombreEquipementsAvances ? " · " + nombreEquipementsAvances : "")
        ),
        e(
          "button",
          {
            className: "profileTextButton",
            onClick: () => setEquipementsAvancesOuverts(!equipementsAvancesOuverts),
            type: "button",
          },
          equipementsAvancesOuverts ? "Masquer" : "Choisir"
        )
      ),
      equipementsAvancesOuverts &&
      e(
        "div",
        { className: "profileEquipmentGrid" },
        equipementsCuisineProposes.map((equipement) =>
          e(
            "label",
            { className: "profileToggle", key: equipement },
            e("input", {
              checked: (profilEnCours.equipements.autresEquipements || []).includes(equipement),
              onChange: () => basculerAutreEquipement(equipement),
              type: "checkbox",
            }),
            equipement
          )
        )
      ),
      e(
        "label",
        null,
        "Précisions matériel",
        e("textarea", {
          onChange: (event) => changerEquipement("equipementsLibres", event.target.value),
          placeholder: "Ex. airfryer petit panier, cuiseur à riz 3 cups, four qui chauffe fort, robot sans cuisson...",
          value: profilEnCours.equipements.equipementsLibres,
        })
      ),
      e("p", { className: "label" }, "Habitudes du foyer"),
      e("textarea", {
        onChange: (event) =>
          setProfilEnCours({ ...profilEnCours, habitudes: event.target.value }),
        value: profilEnCours.habitudes,
      }),
      e("p", { className: "label" }, "Préférences IA"),
      e("textarea", {
        onChange: (event) =>
          setProfilEnCours({ ...profilEnCours, preferencesIa: event.target.value }),
        value: profilEnCours.preferencesIa,
      }),
      e("button", { type: "submit" }, "Enregistrer"),
      message && e("p", { className: "profileMessage", role: "status" }, message)
    )
  );
}

function Sauvegarde({ creerSauvegardeComplete, restaurerDepuisSauvegarde }) {
  const [texteSauvegarde, setTexteSauvegarde] = React.useState("");
  const [texteImport, setTexteImport] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [typeMessage, setTypeMessage] = React.useState("info");
  const [cloudDisponible, setCloudDisponible] = React.useState(false);
  const [cloudUtilisateur, setCloudUtilisateur] = React.useState(null);
  const [dateCloud, setDateCloud] = React.useState("");
  const zoneSauvegarde = React.useRef(null);
  const champFichierImport = React.useRef(null);
  const resumeExport = texteSauvegarde ? analyserTexteSauvegarde(texteSauvegarde) : null;
  const resumeImport = texteImport.trim() ? analyserTexteSauvegarde(texteImport.trim()) : null;

  React.useEffect(() => {
    const services = initialiserCloud();

    if (!services) {
      setCloudDisponible(false);
      return undefined;
    }

    setCloudDisponible(true);
    services.auth.getRedirectResult().catch(() => {});

    return services.auth.onAuthStateChanged((utilisateur) => {
      setCloudUtilisateur(utilisateur);
      if (!utilisateur) {
        setDateCloud("");
      }
    });
  }, []);

  React.useEffect(() => {
    const services = initialiserCloud();

    if (!services || !cloudUtilisateur) {
      return undefined;
    }

    const desabonner = services.db
      .collection("foyers")
      .doc(cloudUtilisateur.uid)
      .onSnapshot(
        (documentCloud) => {
          const donnees = documentCloud.exists ? documentCloud.data() : null;
          setDateCloud(donnees && donnees.updatedAtIso ? donnees.updatedAtIso : "");
        },
        () => {
          setDateCloud("");
        }
      );

    return desabonner;
  }, [cloudUtilisateur]);

  function afficherMessage(texte, type = "info") {
    setMessage(texte);
    setTypeMessage(type);
  }

  async function connecterCloud() {
    const services = initialiserCloud();

    if (!services) {
      afficherMessage("Firebase n'est pas encore disponible sur cette page.", "error");
      return;
    }

    const fournisseur = new firebase.auth.GoogleAuthProvider();

    try {
      await services.auth.signInWithPopup(fournisseur);
      afficherMessage("Connexion Google réussie.", "success");
    } catch (erreur) {
      if (erreur.code === "auth/popup-blocked" || erreur.code === "auth/operation-not-supported-in-this-environment") {
        await services.auth.signInWithRedirect(fournisseur);
        return;
      }

      afficherMessage(getMessageErreurCloud(erreur), "error");
    }
  }

  async function deconnecterCloud() {
    const services = initialiserCloud();

    if (!services) {
      return;
    }

    await services.auth.signOut();
    afficherMessage("Déconnecté du cloud.");
  }

  async function envoyerVersCloud() {
    const services = initialiserCloud();

    if (!services || !cloudUtilisateur) {
      afficherMessage("Connecte-toi avec Google avant d'envoyer vers le cloud.", "error");
      return;
    }

    try {
      const sauvegarde = JSON.parse(creerSauvegardeComplete());

      await services.db.collection("foyers").doc(cloudUtilisateur.uid).set({
        sauvegarde,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAtIso: new Date().toISOString(),
      });

      afficherMessage("Sauvegarde envoyée vers le cloud.", "success");
    } catch (erreur) {
      afficherMessage(getMessageErreurCloud(erreur), "error");
    }
  }

  async function chargerDepuisCloud() {
    const services = initialiserCloud();

    if (!services || !cloudUtilisateur) {
      afficherMessage("Connecte-toi avec Google avant de charger depuis le cloud.", "error");
      return;
    }

    try {
      const documentCloud = await services.db.collection("foyers").doc(cloudUtilisateur.uid).get();

      if (!documentCloud.exists || !documentCloud.data().sauvegarde) {
        afficherMessage("Aucune sauvegarde cloud trouvée pour ce compte.", "error");
        return;
      }

      const confirme = window.confirm(
        "Charger la sauvegarde cloud" +
          (dateCloud ? " du " + formaterDateSauvegarde(dateCloud) : "") +
          " ? Les données actuelles de cet appareil seront remplacées."
      );

      if (!confirme) {
        return;
      }

      restaurerDepuisSauvegarde(JSON.stringify(documentCloud.data().sauvegarde));
      afficherMessage("Sauvegarde cloud chargée sur cet appareil.", "success");
    } catch (erreur) {
      afficherMessage(getMessageErreurCloud(erreur), "error");
    }
  }

  function preparerSauvegarde() {
    const texte = creerSauvegardeComplete();

    setTexteSauvegarde(texte);
    afficherMessage("Sauvegarde préparée.");
  }

  function selectionnerTexteSauvegarde() {
    setTimeout(() => {
      if (!zoneSauvegarde.current) {
        return;
      }

      zoneSauvegarde.current.focus();
      zoneSauvegarde.current.select();
      zoneSauvegarde.current.setSelectionRange(0, zoneSauvegarde.current.value.length);
    }, 0);
  }

  async function copierSauvegarde() {
    const texte = texteSauvegarde || creerSauvegardeComplete();

    setTexteSauvegarde(texte);

    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      selectionnerTexteSauvegarde();
      afficherMessage("Copie automatique bloquée sur cet appareil. Le texte est sélectionné : touche Copier.");
      return;
    }

    try {
      await navigator.clipboard.writeText(texte);
      afficherMessage("Sauvegarde copiée.", "success");
    } catch (erreur) {
      selectionnerTexteSauvegarde();
      afficherMessage("Copie automatique bloquée. Le texte est sélectionné : touche Copier.");
    }
  }

  async function enregistrerFichierSauvegarde() {
    const texte = texteSauvegarde || creerSauvegardeComplete();
    const nomFichier = creerNomFichierSauvegarde();
    const fichier = new File([texte], nomFichier, { type: "application/json" });

    setTexteSauvegarde(texte);

    if (navigator.canShare && navigator.canShare({ files: [fichier] }) && navigator.share) {
      try {
        await navigator.share({
          files: [fichier],
          title: "Sauvegarde Pilier du foyer",
          text: "Sauvegarde Pilier du foyer",
        });
        afficherMessage("Fichier de sauvegarde partagé. Choisis Fichiers, iCloud Drive ou Google Drive.", "success");
        return;
      } catch (erreur) {
        if (erreur.name === "AbortError") {
          afficherMessage("Partage annulé.");
          return;
        }
      }
    }

    const lien = document.createElement("a");
    const adresse = URL.createObjectURL(fichier);

    lien.href = adresse;
    lien.download = nomFichier;
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
    URL.revokeObjectURL(adresse);
    afficherMessage("Fichier de sauvegarde créé. Il est disponible dans les téléchargements.", "success");
  }

  async function lireFichierImport(event) {
    const fichier = event.target.files && event.target.files[0];

    if (!fichier) {
      return;
    }

    try {
      const texte = await fichier.text();

      lireTexteSauvegarde(texte);
      setTexteImport(texte);
      afficherMessage("Fichier chargé. Vérifie l'aperçu puis restaure si tout est correct.", "success");
    } catch (erreur) {
      setTexteImport("");
      afficherMessage(erreur.message || "Impossible de lire ce fichier.", "error");
    } finally {
      event.target.value = "";
    }
  }

  function choisirFichierImport() {
    if (!champFichierImport.current) {
      return;
    }

    champFichierImport.current.click();
  }

  function restaurerSauvegarde(event) {
    event.preventDefault();

    if (texteImport.trim() === "") {
      afficherMessage("Colle d'abord une sauvegarde à restaurer.", "error");
      return;
    }

    try {
      lireTexteSauvegarde(texteImport.trim());
    } catch (erreur) {
      afficherMessage(erreur.message, "error");
      return;
    }

    const confirme = window.confirm(
      "Restaurer cette sauvegarde ? Les données actuelles de cet appareil seront remplacées."
    );

    if (!confirme) {
      return;
    }

    try {
      restaurerDepuisSauvegarde(texteImport.trim());
      setTexteImport("");
      afficherMessage(
        "Restauration terminée. Les données de cette sauvegarde sont maintenant utilisées sur cet appareil.",
        "success"
      );
    } catch (erreur) {
      afficherMessage(erreur.message, "error");
    }
  }

  return e(
    "section",
    { className: "section backupSection" },
    e(
      "div",
      { className: "sectionHeader" },
      e("h2", null, "Sauvegarde"),
      e("span", null, "Export / import")
    ),
    e(
      "div",
      { className: "backupPanel" },
      e("h3", null, "Exporter"),
      e(
        "p",
        null,
        "Copie une sauvegarde complète de cet appareil. Tu pourras la garder ou la coller sur un autre appareil."
      ),
      e(
        "div",
        { className: "backupActions" },
        e("button", { onClick: preparerSauvegarde, type: "button" }, "Préparer"),
        e("button", { onClick: copierSauvegarde, type: "button" }, "Copier"),
        e("button", { onClick: enregistrerFichierSauvegarde, type: "button" }, "Fichier")
      ),
      e("textarea", {
        placeholder: "La sauvegarde apparaîtra ici.",
        readOnly: true,
        ref: zoneSauvegarde,
        value: texteSauvegarde,
      }),
      resumeExport &&
        e(ResumeSauvegarde, {
          resume: resumeExport,
          titre: "Contenu exporté",
        })
    ),
    e(
      "div",
      { className: "backupPanel cloudPanel" },
      e("h3", null, "Cloud"),
      e(
        "p",
        null,
        cloudUtilisateur
          ? "Connecté avec " + (cloudUtilisateur.email || "Google") + "."
          : cloudDisponible
          ? "Connecte-toi avec Google pour envoyer ou charger une sauvegarde cloud."
          : "Le cloud sera disponible quand l'application sera connectée à Firebase."
      ),
      e(
        "p",
        { className: "cloudHint" },
        dateCloud
          ? "Dernière sauvegarde cloud : " + formaterDateSauvegarde(dateCloud)
          : cloudUtilisateur
          ? "Aucune sauvegarde cloud trouvée pour ce compte."
          : "Connecte-toi avant d'utiliser les boutons cloud."
      ),
      e(
        "p",
        { className: "cloudHint warning" },
        "Envoyer remplace le cloud par cet appareil. Charger remplace cet appareil par le cloud."
      ),
      e(
        "div",
        { className: "backupActions" },
        cloudUtilisateur
          ? e("button", { onClick: deconnecterCloud, type: "button" }, "Déconnecter")
          : e(
              "button",
              { disabled: !cloudDisponible, onClick: connecterCloud, type: "button" },
              "Connexion Google"
            ),
        e(
          "button",
          {
            disabled: !cloudUtilisateur,
            onClick: envoyerVersCloud,
            type: "button",
          },
          "Envoyer cloud"
        ),
        e(
          "button",
          {
            disabled: !cloudUtilisateur,
            onClick: chargerDepuisCloud,
            type: "button",
          },
          "Charger cloud"
        )
      )
    ),
    e(
      "form",
      { className: "backupPanel", onSubmit: restaurerSauvegarde },
      e("h3", null, "Importer"),
      e(
        "p",
        null,
        "Choisis un fichier de sauvegarde ou colle son contenu. L'application demandera confirmation avant de remplacer les données actuelles."
      ),
      e("input", {
        accept: ".json,application/json,text/plain",
        className: "backupFileInput",
        onChange: lireFichierImport,
        ref: champFichierImport,
        type: "file",
      }),
      e(
        "button",
        {
          className: "secondaryBackupButton",
          onClick: choisirFichierImport,
          type: "button",
        },
        "Choisir un fichier"
      ),
      e("textarea", {
        onChange: (event) => setTexteImport(event.target.value),
        placeholder: "Colle une sauvegarde ici.",
        value: texteImport,
      }),
      resumeImport &&
        e(ResumeSauvegarde, {
          resume: resumeImport,
          titre: resumeImport.valide ? "Aperçu avant restauration" : "Sauvegarde non reconnue",
        }),
      e("button", { type: "submit" }, "Restaurer cette sauvegarde")
    ),
    message &&
      e(
        "div",
        { className: "backupMessage " + typeMessage, role: "status" },
        message
      )
  );
}

function ResumeSauvegarde({ resume, titre }) {
  if (!resume.valide) {
    return e(
      "div",
      { className: "backupSummary error" },
      e("strong", null, titre),
      e("p", null, "Le texte collé ne ressemble pas encore à une sauvegarde Pilier du foyer.")
    );
  }

  return e(
    "div",
    { className: "backupSummary" },
    e("strong", null, titre),
    e("p", null, "Date : " + formaterDateSauvegarde(resume.date)),
    e(
      "ul",
      null,
      e("li", null, resume.recettes + " recette(s)"),
      e("li", null, resume.menusPlanifies + " menu(s) planifié(s)"),
      e("li", null, resume.tachesMenage + " tâche(s) ménagère(s)"),
      e("li", null, resume.articlesLibresCourses + " article(s) hors menus"),
      e("li", null, resume.articlesHorsMenusFrequents + " raccourci(s) HM"),
      e("li", null, resume.rayons + " rayon(s)")
    )
  );
}

function Menage({
  jour,
  dateComplete,
  dateSelectionnee,
  cleDate,
  tachesMenage,
  tachesFaites,
  basculerTacheFaite,
}) {
  const [vueMenage, setVueMenage] = React.useState("aujourdhui");
  const tachesDuJour = tachesMenage.filter((item) => tacheEstPrevuePourDate(item, dateSelectionnee));
  const tachesFaitesCeJour = tachesFaites[cleDate] || [];
  const nombreFaites = tachesDuJour.filter((item) =>
    tachesFaitesCeJour.includes(getCleTache(item))
  ).length;

  return e(
    "section",
    { className: "section" },
    e(
      "div",
      { className: "sectionHeader" },
      e("h2", null, vueMenage === "aujourdhui" ? "Ménage" : "Journal"),
      e("span", null, dateComplete)
    ),
    e(
      "div",
      { className: "menageToolbar" },
      e(
        "button",
        {
          className: vueMenage === "aujourdhui" ? "toolbarButton active" : "toolbarButton",
          onClick: () => setVueMenage("aujourdhui"),
          type: "button",
        },
        "Tâches du jour"
      ),
      e(
        "button",
        {
          className: vueMenage === "journal" ? "toolbarButton active" : "toolbarButton",
          onClick: () => setVueMenage("journal"),
          type: "button",
        },
        "Historique"
      )
    ),
    vueMenage === "journal"
      ? e(JournalMenage, { tachesFaites })
      :
    tachesDuJour.length === 0
      ? e(
          "div",
          { className: "emptyState" },
          e("p", { className: "label" }, jour),
          e("h3", null, "Aucune tâche prévue aujourd'hui"),
          e("p", null, "Tu peux ajouter une tâche dans le planning.")
        )
      : e(
          React.Fragment,
          null,
          e(
            "div",
            { className: "taskSummary" },
            e("strong", null, nombreFaites + " faite(s)"),
            e("span", null, "sur " + tachesDuJour.length + " tâche(s)")
          ),
          e(
            "div",
            { className: "cards" },
            tachesDuJour.map((item) => {
              const cleTache = getCleTache(item);
              const estFaite = tachesFaitesCeJour.includes(cleTache);

              return e(
                "article",
                {
                  className: estFaite ? "card taskCard done" : "card taskCard",
                  key: item.piece + item.tache,
                },
                e(
                  "label",
                  { className: "taskCheckRow" },
                  e("input", {
                    checked: estFaite,
                    onChange: () => basculerTacheFaite(cleDate, cleTache),
                    type: "checkbox",
                  }),
                  e(
                    "span",
                    null,
                    e("span", { className: "label" }, item.piece),
                    e("strong", null, item.tache)
                  )
                ),
                e("p", { className: "taskDay" }, estFaite ? "Fait pour cette date" : "À faire")
              );
            })
          )
        )
  );
}

function JournalMenage({ tachesFaites }) {
  const entreesJournal = Object.keys(tachesFaites)
    .filter((cleDate) => tachesFaites[cleDate].length > 0)
    .sort()
    .reverse();

  return e(
    "div",
    { className: "journalList" },
    entreesJournal.length === 0
      ? e(
          "div",
          { className: "emptyState" },
          e("p", { className: "label" }, "Journal"),
          e("h3", null, "Aucune tâche faite pour l'instant"),
          e("p", null, "Les tâches cochées apparaîtront ici, groupées par date.")
        )
      : entreesJournal.map((cleDate) =>
          e(
            "article",
            { className: "journalDay", key: cleDate },
            e("p", { className: "label" }, formaterCleDate(cleDate)),
            e(
              "ul",
              null,
              tachesFaites[cleDate].map((cleTache) => {
                const tache = lireCleTache(cleTache);

                return e("li", { key: cleTache }, tache.piece + " - " + tache.tache);
              })
            )
          )
        )
  );
}

function Planning({
  jour,
  tachesMenage,
  tachesSupprimees,
  ajouterTache,
  modifierTache,
  supprimerTache,
  restaurerTacheSupprimee,
  restaurerTachesSupprimees,
  supprimerDefinitivementTache,
}) {
  const [vuePlanning, setVuePlanning] = React.useState("planning");
  const [frequenceChoisie, setFrequenceChoisie] = React.useState("hebdomadaire");
  const [jourChoisi, setJourChoisi] = React.useState(jour);
  const [datePonctuelleChoisie, setDatePonctuelleChoisie] = React.useState(getCleDate(new Date()));
  const [dateDepartChoisie, setDateDepartChoisie] = React.useState(getCleDate(new Date()));
  const [jourMoisChoisi, setJourMoisChoisi] = React.useState(1);
  const [piece, setPiece] = React.useState("");
  const [tache, setTache] = React.useState("");
  const [indexAConfirmer, setIndexAConfirmer] = React.useState(null);
  const [indexAModifier, setIndexAModifier] = React.useState(null);
  const [frequenceModifiee, setFrequenceModifiee] = React.useState("hebdomadaire");
  const [jourModifie, setJourModifie] = React.useState(jour);
  const [datePonctuelleModifiee, setDatePonctuelleModifiee] = React.useState(getCleDate(new Date()));
  const [dateDepartModifiee, setDateDepartModifiee] = React.useState(getCleDate(new Date()));
  const [jourMoisModifie, setJourMoisModifie] = React.useState(1);
  const [pieceModifiee, setPieceModifiee] = React.useState("");
  const [tacheModifiee, setTacheModifiee] = React.useState("");

  function envoyerFormulaire(event) {
    event.preventDefault();

    if (piece.trim() === "" || tache.trim() === "") {
      return;
    }

    ajouterTache({
      frequence: frequenceChoisie,
      jour: jourChoisi,
      datePonctuelle: datePonctuelleChoisie,
      dateDepart: dateDepartChoisie,
      jourDuMois: jourMoisChoisi,
      piece: piece.trim(),
      tache: tache.trim(),
    });

    setPiece("");
    setTache("");
  }

  function confirmerSuppression(indexTache) {
    supprimerTache(indexTache);
    setIndexAConfirmer(null);
  }

  function ouvrirModification(item) {
    setIndexAConfirmer(null);
    setIndexAModifier(item.index);
    setFrequenceModifiee(item.frequence || "hebdomadaire");
    setJourModifie(item.jour);
    setDatePonctuelleModifiee(item.datePonctuelle || getCleDate(new Date()));
    setDateDepartModifiee(item.dateDepart || getCleDate(new Date()));
    setJourMoisModifie(item.jourDuMois || 1);
    setPieceModifiee(item.piece);
    setTacheModifiee(item.tache);
  }

  function annulerModification() {
    setIndexAModifier(null);
    setPieceModifiee("");
    setTacheModifiee("");
  }

  function enregistrerModification(indexTache) {
    if (pieceModifiee.trim() === "" || tacheModifiee.trim() === "") {
      return;
    }

    modifierTache(indexTache, {
      frequence: frequenceModifiee,
      jour: jourModifie,
      datePonctuelle: datePonctuelleModifiee,
      dateDepart: dateDepartModifiee,
      jourDuMois: jourMoisModifie,
      piece: pieceModifiee.trim(),
      tache: tacheModifiee.trim(),
    });

    annulerModification();
  }

  return e(
    "section",
    { className: "section" },
    e(
      "div",
      { className: "sectionHeader" },
      e("h2", null, vuePlanning === "planning" ? "Tâches" : "Corbeille"),
      e(
        "span",
        null,
        vuePlanning === "planning"
          ? tachesMenage.length + " tâches"
          : tachesSupprimees.length + " supprimée(s)"
      )
    ),
    e(
      "div",
      { className: "planningToolbar" },
      e(
        "button",
        {
          className: vuePlanning === "planning" ? "toolbarButton active" : "toolbarButton",
          onClick: () => setVuePlanning("planning"),
          type: "button",
        },
        "Organisation"
      ),
      e(
        "button",
        {
          className: vuePlanning === "corbeille" ? "toolbarButton active" : "toolbarButton",
          onClick: () => setVuePlanning("corbeille"),
          type: "button",
        },
        "Corbeille (" + tachesSupprimees.length + ")"
      )
    ),
    vuePlanning === "corbeille"
      ? e(Corbeille, {
          tachesSupprimees,
          restaurerTacheSupprimee,
          restaurerTachesSupprimees,
          supprimerDefinitivementTache,
        })
      : e(
          React.Fragment,
          null,
    e(
      "form",
      { className: "taskForm", onSubmit: envoyerFormulaire },
      e("p", { className: "label" }, "Nouvelle tâche"),
      e(
        "label",
        null,
        "Fréquence",
        e(
          "select",
          {
            value: frequenceChoisie,
            onChange: (event) => setFrequenceChoisie(event.target.value),
          },
          e("option", { value: "hebdomadaire" }, "Chaque semaine"),
          e("option", { value: "quotidienne" }, "Tous les jours"),
          e("option", { value: "bimensuelle" }, "Toutes les 2 semaines"),
          e("option", { value: "mensuelle" }, "Chaque mois"),
          e("option", { value: "ponctuelle" }, "Une date précise")
        )
      ),
      e("p", { className: "frequencyHint" }, getTexteAideFrequence(frequenceChoisie)),
      frequenceUtiliseJour(frequenceChoisie) &&
        e(
          "label",
          null,
        "Jour de la semaine",
        e(
          "select",
          { value: jourChoisi, onChange: (event) => setJourChoisi(event.target.value) },
          joursSemaine.map((jourSemaine) =>
            e("option", { key: jourSemaine, value: jourSemaine }, jourSemaine)
          )
        )
      ),
      frequenceChoisie === "bimensuelle" &&
        e(
          "label",
          null,
          "Date de départ",
          e("input", {
            onChange: (event) => setDateDepartChoisie(event.target.value),
            type: "date",
            value: dateDepartChoisie,
          })
        ),
      frequenceChoisie === "mensuelle" &&
        e(
          "label",
          null,
          "Jour du mois",
          e("input", {
            max: "31",
            min: "1",
            onChange: (event) => setJourMoisChoisi(event.target.value),
            type: "number",
            value: jourMoisChoisi,
          })
        ),
      frequenceChoisie === "ponctuelle" &&
        e(
          "label",
          null,
          "Date précise",
          e("input", {
            onChange: (event) => setDatePonctuelleChoisie(event.target.value),
            type: "date",
            value: datePonctuelleChoisie,
          })
        ),
      e(
        "label",
        null,
        "Pièce",
        e("input", {
          onChange: (event) => setPiece(event.target.value),
          placeholder: "Ex. Cuisine",
          type: "text",
          value: piece,
        })
      ),
      e(
        "label",
        null,
        "Tâche",
        e("input", {
          onChange: (event) => setTache(event.target.value),
          placeholder: "Ex. Nettoyer le frigo",
          type: "text",
          value: tache,
        })
      ),
      e("button", { type: "submit" }, "Ajouter")
    ),
    e(
      "div",
      { className: "planningList" },
      e(PlanningQuotidien, {
        tachesMenage,
        indexAModifier,
        indexAConfirmer,
        frequenceModifiee,
        jourModifie,
        datePonctuelleModifiee,
        dateDepartModifiee,
        jourMoisModifie,
        pieceModifiee,
        tacheModifiee,
        setFrequenceModifiee,
        setJourModifie,
        setDatePonctuelleModifiee,
        setDateDepartModifiee,
        setJourMoisModifie,
        setPieceModifiee,
        setTacheModifiee,
        ouvrirModification,
        enregistrerModification,
        annulerModification,
        confirmerSuppression,
        setIndexAConfirmer,
        setIndexAModifier,
      }),
      e(PlanningBimensuel, {
        tachesMenage,
        indexAModifier,
        indexAConfirmer,
        frequenceModifiee,
        jourModifie,
        datePonctuelleModifiee,
        dateDepartModifiee,
        jourMoisModifie,
        pieceModifiee,
        tacheModifiee,
        setFrequenceModifiee,
        setJourModifie,
        setDatePonctuelleModifiee,
        setDateDepartModifiee,
        setJourMoisModifie,
        setPieceModifiee,
        setTacheModifiee,
        ouvrirModification,
        enregistrerModification,
        annulerModification,
        confirmerSuppression,
        setIndexAConfirmer,
        setIndexAModifier,
      }),
      e(PlanningMensuel, {
        tachesMenage,
        indexAModifier,
        indexAConfirmer,
        frequenceModifiee,
        jourModifie,
        datePonctuelleModifiee,
        dateDepartModifiee,
        jourMoisModifie,
        pieceModifiee,
        tacheModifiee,
        setFrequenceModifiee,
        setJourModifie,
        setDatePonctuelleModifiee,
        setDateDepartModifiee,
        setJourMoisModifie,
        setPieceModifiee,
        setTacheModifiee,
        ouvrirModification,
        enregistrerModification,
        annulerModification,
        confirmerSuppression,
        setIndexAConfirmer,
        setIndexAModifier,
      }),
      e(PlanningPonctuel, {
        tachesMenage,
        indexAModifier,
        indexAConfirmer,
        frequenceModifiee,
        jourModifie,
        datePonctuelleModifiee,
        dateDepartModifiee,
        jourMoisModifie,
        pieceModifiee,
        tacheModifiee,
        setFrequenceModifiee,
        setJourModifie,
        setDatePonctuelleModifiee,
        setDateDepartModifiee,
        setJourMoisModifie,
        setPieceModifiee,
        setTacheModifiee,
        ouvrirModification,
        enregistrerModification,
        annulerModification,
        confirmerSuppression,
        setIndexAConfirmer,
        setIndexAModifier,
      }),
      joursSemaine.map((jourSemaine) => {
        const taches = tachesMenage
          .map((item, index) => ({ ...item, index }))
          .filter((item) => (item.frequence || "hebdomadaire") === "hebdomadaire")
          .filter((item) => item.jour === jourSemaine);

        return e(
          "article",
          {
            className: jourSemaine === jour ? "planningDay today" : "planningDay",
            key: jourSemaine,
          },
          e(
            "div",
            { className: "planningDayHeader" },
            e("h3", null, jourSemaine),
            e("span", null, taches.length === 0 ? "Libre" : taches.length + " tâche(s)")
          ),
          taches.length === 0
            ? e("p", { className: "planningEmpty" }, "Aucune tâche prévue.")
            : e(
                "ul",
                { className: "planningTasks" },
                taches.map((item) =>
                  e(
                    "li",
                    { key: item.index },
                    indexAModifier === item.index
                      ? e(
                          "div",
                          { className: "editTaskForm" },
                          e(
                            "select",
                            {
                              value: frequenceModifiee,
                              onChange: (event) => setFrequenceModifiee(event.target.value),
                            },
                            e("option", { value: "hebdomadaire" }, "Chaque semaine"),
                            e("option", { value: "quotidienne" }, "Tous les jours"),
                            e("option", { value: "bimensuelle" }, "Toutes les 2 semaines"),
                            e("option", { value: "mensuelle" }, "Chaque mois"),
                            e("option", { value: "ponctuelle" }, "Une date précise")
                          ),
                          e("p", { className: "frequencyHint compact" }, getTexteAideFrequence(frequenceModifiee)),
                          frequenceUtiliseJour(frequenceModifiee) &&
                          e(
                            "select",
                            {
                              value: jourModifie,
                              onChange: (event) => setJourModifie(event.target.value),
                            },
                            joursSemaine.map((jourOption) =>
                              e("option", { key: jourOption, value: jourOption }, jourOption)
                            )
                          ),
                          frequenceModifiee === "bimensuelle" &&
                            e("input", {
                              onChange: (event) => setDateDepartModifiee(event.target.value),
                              type: "date",
                              value: dateDepartModifiee,
                            }),
                          frequenceModifiee === "mensuelle" &&
                            e("input", {
                              max: "31",
                              min: "1",
                              onChange: (event) => setJourMoisModifie(event.target.value),
                              type: "number",
                              value: jourMoisModifie,
                            }),
                          frequenceModifiee === "ponctuelle" &&
                            e("input", {
                              onChange: (event) => setDatePonctuelleModifiee(event.target.value),
                              type: "date",
                              value: datePonctuelleModifiee,
                            }),
                          e("input", {
                            onChange: (event) => setPieceModifiee(event.target.value),
                            type: "text",
                            value: pieceModifiee,
                          }),
                          e("input", {
                            onChange: (event) => setTacheModifiee(event.target.value),
                            type: "text",
                            value: tacheModifiee,
                          })
                        )
                      : e("span", null, item.piece + " - " + item.tache),
                    indexAModifier === item.index
                      ? e(
                          "div",
                          { className: "editTaskActions" },
                          e(
                            "button",
                            {
                              className: "saveEditButton",
                              onClick: () => enregistrerModification(item.index),
                              type: "button",
                            },
                            "Enregistrer"
                          ),
                          e(
                            "button",
                            {
                              className: "cancelDeleteButton",
                              onClick: annulerModification,
                              type: "button",
                            },
                            "Annuler"
                          )
                        )
                      : indexAConfirmer === item.index
                      ? e(
                          "div",
                          { className: "confirmDelete" },
                          e(
                            "button",
                            {
                              className: "confirmDeleteButton",
                              onClick: () => confirmerSuppression(item.index),
                              type: "button",
                            },
                            "Confirmer"
                          ),
                          e(
                            "button",
                            {
                              className: "cancelDeleteButton",
                              onClick: () => setIndexAConfirmer(null),
                              type: "button",
                            },
                            "Annuler"
                          )
                        )
                      : e(
                          "div",
                          { className: "taskActions" },
                          e(
                            "button",
                            {
                              className: "editTaskButton",
                              onClick: () => ouvrirModification(item),
                              type: "button",
                            },
                            "Modifier"
                          ),
                          e(
                            "button",
                            {
                              className: "deleteTaskButton",
                              onClick: () => {
                                setIndexAModifier(null);
                                setIndexAConfirmer(item.index);
                              },
                              type: "button",
                            },
                            "Supprimer"
                          )
                        )
                  )
                )
              )
        );
      })
    )
        )
  );
}

function PlanningQuotidien({
  tachesMenage,
  indexAModifier,
  indexAConfirmer,
  frequenceModifiee,
  jourModifie,
  datePonctuelleModifiee,
  dateDepartModifiee,
  jourMoisModifie,
  pieceModifiee,
  tacheModifiee,
  setFrequenceModifiee,
  setJourModifie,
  setDatePonctuelleModifiee,
  setDateDepartModifiee,
  setJourMoisModifie,
  setPieceModifiee,
  setTacheModifiee,
  ouvrirModification,
  enregistrerModification,
  annulerModification,
  confirmerSuppression,
  setIndexAConfirmer,
  setIndexAModifier,
}) {
  const taches = tachesMenage
    .map((item, index) => ({ ...item, index }))
    .filter((item) => item.frequence === "quotidienne");

  if (taches.length === 0) {
    return null;
  }

  return e(
    "article",
    { className: "planningDay daily" },
    e(
      "div",
      { className: "planningDayHeader" },
      e("h3", null, "Tous les jours"),
      e("span", null, taches.length + " tâche(s)")
    ),
    e(
      "ul",
      { className: "planningTasks" },
      taches.map((item) =>
        e(
          "li",
          { key: item.index },
          indexAModifier === item.index
            ? e(
                "div",
                { className: "editTaskForm" },
                e(
                  "select",
                  {
                    value: frequenceModifiee,
                    onChange: (event) => setFrequenceModifiee(event.target.value),
                  },
                  e("option", { value: "hebdomadaire" }, "Chaque semaine"),
                  e("option", { value: "quotidienne" }, "Tous les jours"),
                  e("option", { value: "bimensuelle" }, "Toutes les 2 semaines"),
                  e("option", { value: "mensuelle" }, "Chaque mois"),
                  e("option", { value: "ponctuelle" }, "Une date précise")
                ),
                e("p", { className: "frequencyHint compact" }, getTexteAideFrequence(frequenceModifiee)),
                frequenceUtiliseJour(frequenceModifiee) &&
                  e(
                    "select",
                    {
                      value: jourModifie,
                      onChange: (event) => setJourModifie(event.target.value),
                    },
                    joursSemaine.map((jourOption) =>
                      e("option", { key: jourOption, value: jourOption }, jourOption)
                    )
                  ),
                frequenceModifiee === "bimensuelle" &&
                  e("input", {
                    onChange: (event) => setDateDepartModifiee(event.target.value),
                    type: "date",
                    value: dateDepartModifiee,
                  }),
                frequenceModifiee === "mensuelle" &&
                  e("input", {
                    max: "31",
                    min: "1",
                    onChange: (event) => setJourMoisModifie(event.target.value),
                    type: "number",
                    value: jourMoisModifie,
                  }),
                frequenceModifiee === "ponctuelle" &&
                  e("input", {
                    onChange: (event) => setDatePonctuelleModifiee(event.target.value),
                    type: "date",
                    value: datePonctuelleModifiee,
                  }),
                e("input", {
                  onChange: (event) => setPieceModifiee(event.target.value),
                  type: "text",
                  value: pieceModifiee,
                }),
                e("input", {
                  onChange: (event) => setTacheModifiee(event.target.value),
                  type: "text",
                  value: tacheModifiee,
                })
              )
            : e("span", null, item.piece + " - " + item.tache),
          indexAModifier === item.index
            ? e(
                "div",
                { className: "editTaskActions" },
                e(
                  "button",
                  {
                    className: "saveEditButton",
                    onClick: () => enregistrerModification(item.index),
                    type: "button",
                  },
                  "Enregistrer"
                ),
                e(
                  "button",
                  {
                    className: "cancelDeleteButton",
                    onClick: annulerModification,
                    type: "button",
                  },
                  "Annuler"
                )
              )
            : indexAConfirmer === item.index
            ? e(
                "div",
                { className: "confirmDelete" },
                e(
                  "button",
                  {
                    className: "confirmDeleteButton",
                    onClick: () => confirmerSuppression(item.index),
                    type: "button",
                  },
                  "Confirmer"
                ),
                e(
                  "button",
                  {
                    className: "cancelDeleteButton",
                    onClick: () => setIndexAConfirmer(null),
                    type: "button",
                  },
                  "Annuler"
                )
              )
            : e(
                "div",
                { className: "taskActions" },
                e(
                  "button",
                  {
                    className: "editTaskButton",
                    onClick: () => ouvrirModification(item),
                    type: "button",
                  },
                  "Modifier"
                ),
                e(
                  "button",
                  {
                    className: "deleteTaskButton",
                    onClick: () => {
                      setIndexAModifier(null);
                      setIndexAConfirmer(item.index);
                    },
                    type: "button",
                  },
                  "Supprimer"
                )
              )
        )
      )
    )
  );
}

function PlanningBimensuel({
  tachesMenage,
  indexAModifier,
  indexAConfirmer,
  frequenceModifiee,
  jourModifie,
  datePonctuelleModifiee,
  dateDepartModifiee,
  jourMoisModifie,
  pieceModifiee,
  tacheModifiee,
  setFrequenceModifiee,
  setJourModifie,
  setDatePonctuelleModifiee,
  setDateDepartModifiee,
  setJourMoisModifie,
  setPieceModifiee,
  setTacheModifiee,
  ouvrirModification,
  enregistrerModification,
  annulerModification,
  confirmerSuppression,
  setIndexAConfirmer,
  setIndexAModifier,
}) {
  const taches = tachesMenage
    .map((item, index) => ({ ...item, index }))
    .filter((item) => item.frequence === "bimensuelle")
    .sort((a, b) => a.dateDepart.localeCompare(b.dateDepart));

  if (taches.length === 0) {
    return null;
  }

  return e(
    "article",
    { className: "planningDay biweekly" },
    e(
      "div",
      { className: "planningDayHeader" },
      e("h3", null, "Toutes les 2 semaines"),
      e("span", null, taches.length + " tâche(s)")
    ),
    e(
      "ul",
      { className: "planningTasks" },
      taches.map((item) =>
        e(
          "li",
          { key: item.index },
          indexAModifier === item.index
            ? e(
                "div",
                { className: "editTaskForm" },
                e(
                  "select",
                  {
                    value: frequenceModifiee,
                    onChange: (event) => setFrequenceModifiee(event.target.value),
                  },
                  e("option", { value: "hebdomadaire" }, "Chaque semaine"),
                  e("option", { value: "quotidienne" }, "Tous les jours"),
                  e("option", { value: "bimensuelle" }, "Toutes les 2 semaines"),
                  e("option", { value: "mensuelle" }, "Chaque mois"),
                  e("option", { value: "ponctuelle" }, "Une date précise")
                ),
                e("p", { className: "frequencyHint compact" }, getTexteAideFrequence(frequenceModifiee)),
                frequenceUtiliseJour(frequenceModifiee) &&
                  e(
                    "select",
                    {
                      value: jourModifie,
                      onChange: (event) => setJourModifie(event.target.value),
                    },
                    joursSemaine.map((jourOption) =>
                      e("option", { key: jourOption, value: jourOption }, jourOption)
                    )
                  ),
                frequenceModifiee === "bimensuelle" &&
                  e("input", {
                    onChange: (event) => setDateDepartModifiee(event.target.value),
                    type: "date",
                    value: dateDepartModifiee,
                  }),
                frequenceModifiee === "mensuelle" &&
                  e("input", {
                    max: "31",
                    min: "1",
                    onChange: (event) => setJourMoisModifie(event.target.value),
                    type: "number",
                    value: jourMoisModifie,
                  }),
                frequenceModifiee === "ponctuelle" &&
                  e("input", {
                    onChange: (event) => setDatePonctuelleModifiee(event.target.value),
                    type: "date",
                    value: datePonctuelleModifiee,
                  }),
                e("input", {
                  onChange: (event) => setPieceModifiee(event.target.value),
                  type: "text",
                  value: pieceModifiee,
                }),
                e("input", {
                  onChange: (event) => setTacheModifiee(event.target.value),
                  type: "text",
                  value: tacheModifiee,
                })
              )
            : e(
                "span",
                null,
                item.jour +
                  " - départ " +
                  formaterCleDate(item.dateDepart) +
                  " - " +
                  item.piece +
                  " - " +
                  item.tache
              ),
          indexAModifier === item.index
            ? e(
                "div",
                { className: "editTaskActions" },
                e(
                  "button",
                  {
                    className: "saveEditButton",
                    onClick: () => enregistrerModification(item.index),
                    type: "button",
                  },
                  "Enregistrer"
                ),
                e(
                  "button",
                  {
                    className: "cancelDeleteButton",
                    onClick: annulerModification,
                    type: "button",
                  },
                  "Annuler"
                )
              )
            : indexAConfirmer === item.index
            ? e(
                "div",
                { className: "confirmDelete" },
                e(
                  "button",
                  {
                    className: "confirmDeleteButton",
                    onClick: () => confirmerSuppression(item.index),
                    type: "button",
                  },
                  "Confirmer"
                ),
                e(
                  "button",
                  {
                    className: "cancelDeleteButton",
                    onClick: () => setIndexAConfirmer(null),
                    type: "button",
                  },
                  "Annuler"
                )
              )
            : e(
                "div",
                { className: "taskActions" },
                e(
                  "button",
                  {
                    className: "editTaskButton",
                    onClick: () => ouvrirModification(item),
                    type: "button",
                  },
                  "Modifier"
                ),
                e(
                  "button",
                  {
                    className: "deleteTaskButton",
                    onClick: () => {
                      setIndexAModifier(null);
                      setIndexAConfirmer(item.index);
                    },
                    type: "button",
                  },
                  "Supprimer"
                )
              )
        )
      )
    )
  );
}

function PlanningMensuel({
  tachesMenage,
  indexAModifier,
  indexAConfirmer,
  frequenceModifiee,
  jourModifie,
  datePonctuelleModifiee,
  dateDepartModifiee,
  jourMoisModifie,
  pieceModifiee,
  tacheModifiee,
  setFrequenceModifiee,
  setJourModifie,
  setDatePonctuelleModifiee,
  setDateDepartModifiee,
  setJourMoisModifie,
  setPieceModifiee,
  setTacheModifiee,
  ouvrirModification,
  enregistrerModification,
  annulerModification,
  confirmerSuppression,
  setIndexAConfirmer,
  setIndexAModifier,
}) {
  const taches = tachesMenage
    .map((item, index) => ({ ...item, index }))
    .filter((item) => item.frequence === "mensuelle")
    .sort((a, b) => Number(a.jourDuMois) - Number(b.jourDuMois));

  if (taches.length === 0) {
    return null;
  }

  return e(
    "article",
    { className: "planningDay monthly" },
    e(
      "div",
      { className: "planningDayHeader" },
      e("h3", null, "Chaque mois"),
      e("span", null, taches.length + " tâche(s)")
    ),
    e(
      "ul",
      { className: "planningTasks" },
      taches.map((item) =>
        e(
          "li",
          { key: item.index },
          indexAModifier === item.index
            ? e(
                "div",
                { className: "editTaskForm" },
                e(
                  "select",
                  {
                    value: frequenceModifiee,
                    onChange: (event) => setFrequenceModifiee(event.target.value),
                  },
                  e("option", { value: "hebdomadaire" }, "Chaque semaine"),
                  e("option", { value: "quotidienne" }, "Tous les jours"),
                  e("option", { value: "bimensuelle" }, "Toutes les 2 semaines"),
                  e("option", { value: "mensuelle" }, "Chaque mois"),
                  e("option", { value: "ponctuelle" }, "Une date précise")
                ),
                e("p", { className: "frequencyHint compact" }, getTexteAideFrequence(frequenceModifiee)),
                frequenceUtiliseJour(frequenceModifiee) &&
                  e(
                    "select",
                    {
                      value: jourModifie,
                      onChange: (event) => setJourModifie(event.target.value),
                    },
                    joursSemaine.map((jourOption) =>
                      e("option", { key: jourOption, value: jourOption }, jourOption)
                    )
                  ),
                frequenceModifiee === "bimensuelle" &&
                  e("input", {
                    onChange: (event) => setDateDepartModifiee(event.target.value),
                    type: "date",
                    value: dateDepartModifiee,
                  }),
                frequenceModifiee === "mensuelle" &&
                  e("input", {
                    max: "31",
                    min: "1",
                    onChange: (event) => setJourMoisModifie(event.target.value),
                    type: "number",
                    value: jourMoisModifie,
                  }),
                frequenceModifiee === "ponctuelle" &&
                  e("input", {
                    onChange: (event) => setDatePonctuelleModifiee(event.target.value),
                    type: "date",
                    value: datePonctuelleModifiee,
                  }),
                e("input", {
                  onChange: (event) => setPieceModifiee(event.target.value),
                  type: "text",
                  value: pieceModifiee,
                }),
                e("input", {
                  onChange: (event) => setTacheModifiee(event.target.value),
                  type: "text",
                  value: tacheModifiee,
                })
              )
            : e(
                "span",
                null,
                "Le " + item.jourDuMois + " du mois - " + item.piece + " - " + item.tache
              ),
          indexAModifier === item.index
            ? e(
                "div",
                { className: "editTaskActions" },
                e(
                  "button",
                  {
                    className: "saveEditButton",
                    onClick: () => enregistrerModification(item.index),
                    type: "button",
                  },
                  "Enregistrer"
                ),
                e(
                  "button",
                  {
                    className: "cancelDeleteButton",
                    onClick: annulerModification,
                    type: "button",
                  },
                  "Annuler"
                )
              )
            : indexAConfirmer === item.index
            ? e(
                "div",
                { className: "confirmDelete" },
                e(
                  "button",
                  {
                    className: "confirmDeleteButton",
                    onClick: () => confirmerSuppression(item.index),
                    type: "button",
                  },
                  "Confirmer"
                ),
                e(
                  "button",
                  {
                    className: "cancelDeleteButton",
                    onClick: () => setIndexAConfirmer(null),
                    type: "button",
                  },
                  "Annuler"
                )
              )
            : e(
                "div",
                { className: "taskActions" },
                e(
                  "button",
                  {
                    className: "editTaskButton",
                    onClick: () => ouvrirModification(item),
                    type: "button",
                  },
                  "Modifier"
                ),
                e(
                  "button",
                  {
                    className: "deleteTaskButton",
                    onClick: () => {
                      setIndexAModifier(null);
                      setIndexAConfirmer(item.index);
                    },
                    type: "button",
                  },
                  "Supprimer"
                )
              )
        )
      )
    )
  );
}

function PlanningPonctuel({
  tachesMenage,
  indexAModifier,
  indexAConfirmer,
  frequenceModifiee,
  jourModifie,
  datePonctuelleModifiee,
  dateDepartModifiee,
  jourMoisModifie,
  pieceModifiee,
  tacheModifiee,
  setFrequenceModifiee,
  setJourModifie,
  setDatePonctuelleModifiee,
  setDateDepartModifiee,
  setJourMoisModifie,
  setPieceModifiee,
  setTacheModifiee,
  ouvrirModification,
  enregistrerModification,
  annulerModification,
  confirmerSuppression,
  setIndexAConfirmer,
  setIndexAModifier,
}) {
  const taches = tachesMenage
    .map((item, index) => ({ ...item, index }))
    .filter((item) => item.frequence === "ponctuelle")
    .sort((a, b) => a.datePonctuelle.localeCompare(b.datePonctuelle));

  if (taches.length === 0) {
    return null;
  }

  return e(
    "article",
    { className: "planningDay punctual" },
    e(
      "div",
      { className: "planningDayHeader" },
      e("h3", null, "Dates précises"),
      e("span", null, taches.length + " tâche(s)")
    ),
    e(
      "ul",
      { className: "planningTasks" },
      taches.map((item) =>
        e(
          "li",
          { key: item.index },
          indexAModifier === item.index
            ? e(
                "div",
                { className: "editTaskForm" },
                e(
                  "select",
                  {
                    value: frequenceModifiee,
                    onChange: (event) => setFrequenceModifiee(event.target.value),
                  },
                  e("option", { value: "hebdomadaire" }, "Chaque semaine"),
                  e("option", { value: "quotidienne" }, "Tous les jours"),
                  e("option", { value: "bimensuelle" }, "Toutes les 2 semaines"),
                  e("option", { value: "mensuelle" }, "Chaque mois"),
                  e("option", { value: "ponctuelle" }, "Une date précise")
                ),
                e("p", { className: "frequencyHint compact" }, getTexteAideFrequence(frequenceModifiee)),
                frequenceUtiliseJour(frequenceModifiee) &&
                  e(
                    "select",
                    {
                      value: jourModifie,
                      onChange: (event) => setJourModifie(event.target.value),
                    },
                    joursSemaine.map((jourOption) =>
                      e("option", { key: jourOption, value: jourOption }, jourOption)
                    )
                  ),
                frequenceModifiee === "bimensuelle" &&
                  e("input", {
                    onChange: (event) => setDateDepartModifiee(event.target.value),
                    type: "date",
                    value: dateDepartModifiee,
                  }),
                frequenceModifiee === "mensuelle" &&
                  e("input", {
                    max: "31",
                    min: "1",
                    onChange: (event) => setJourMoisModifie(event.target.value),
                    type: "number",
                    value: jourMoisModifie,
                  }),
                frequenceModifiee === "ponctuelle" &&
                  e("input", {
                    onChange: (event) => setDatePonctuelleModifiee(event.target.value),
                    type: "date",
                    value: datePonctuelleModifiee,
                  }),
                e("input", {
                  onChange: (event) => setPieceModifiee(event.target.value),
                  type: "text",
                  value: pieceModifiee,
                }),
                e("input", {
                  onChange: (event) => setTacheModifiee(event.target.value),
                  type: "text",
                  value: tacheModifiee,
                })
              )
            : e(
                "span",
                null,
                formaterCleDate(item.datePonctuelle) + " - " + item.piece + " - " + item.tache
              ),
          indexAModifier === item.index
            ? e(
                "div",
                { className: "editTaskActions" },
                e(
                  "button",
                  {
                    className: "saveEditButton",
                    onClick: () => enregistrerModification(item.index),
                    type: "button",
                  },
                  "Enregistrer"
                ),
                e(
                  "button",
                  {
                    className: "cancelDeleteButton",
                    onClick: annulerModification,
                    type: "button",
                  },
                  "Annuler"
                )
              )
            : indexAConfirmer === item.index
            ? e(
                "div",
                { className: "confirmDelete" },
                e(
                  "button",
                  {
                    className: "confirmDeleteButton",
                    onClick: () => confirmerSuppression(item.index),
                    type: "button",
                  },
                  "Confirmer"
                ),
                e(
                  "button",
                  {
                    className: "cancelDeleteButton",
                    onClick: () => setIndexAConfirmer(null),
                    type: "button",
                  },
                  "Annuler"
                )
              )
            : e(
                "div",
                { className: "taskActions" },
                e(
                  "button",
                  {
                    className: "editTaskButton",
                    onClick: () => ouvrirModification(item),
                    type: "button",
                  },
                  "Modifier"
                ),
                e(
                  "button",
                  {
                    className: "deleteTaskButton",
                    onClick: () => {
                      setIndexAModifier(null);
                      setIndexAConfirmer(item.index);
                    },
                    type: "button",
                  },
                  "Supprimer"
                )
              )
        )
      )
    )
  );
}

function Corbeille({
  tachesSupprimees,
  restaurerTacheSupprimee,
  restaurerTachesSupprimees,
  supprimerDefinitivementTache,
}) {
  return e(
    "div",
    { className: "trashScreen" },
    tachesSupprimees.length === 0
      ? e(
          "div",
          { className: "emptyState" },
          e("p", { className: "label" }, "Corbeille"),
          e("h3", null, "Aucune tâche supprimée"),
          e("p", null, "Les tâches supprimées apparaîtront ici.")
        )
      : e(
          React.Fragment,
          null,
          e(
            "ul",
            { className: "trashList" },
            tachesSupprimees.map((item, index) =>
              e(
                "li",
                { key: item.piece + item.tache + index },
                e(
                  "div",
                  null,
                  e("p", { className: "label" }, item.jour),
                  e("h3", null, item.piece),
                  e("p", null, item.tache)
                ),
                e(
                  "div",
                  { className: "trashActions" },
                  e(
                    "button",
                    { onClick: () => restaurerTacheSupprimee(index), type: "button" },
                    "Restaurer"
                  ),
                  e(
                    "button",
                    {
                      className: "dangerButton",
                      onClick: () => supprimerDefinitivementTache(index),
                      type: "button",
                    },
                    "Supprimer définitivement"
                  )
                )
              )
            )
          ),
          e(
            "button",
            { className: "restoreAllButton", onClick: restaurerTachesSupprimees, type: "button" },
            "Restaurer tout"
          )
        )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(e(App));
