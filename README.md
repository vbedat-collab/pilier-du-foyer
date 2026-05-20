# Pilier du foyer

Petite maquette mobile en React pour organiser les menus, les courses et le menage.

## Comment l'ouvrir

1. Ouvre le fichier `index.html` dans ton navigateur.
2. La page charge React automatiquement depuis internet.
3. Le code de la page est dans `src/main.js`.
4. Le style visuel est dans `src/styles.css`.

## Test sur iPhone

L'application est maintenant preparee comme une PWA, c'est-a-dire une petite application web installable.

Pour la tester sur iPhone :

1. Double-clique sur `demarrer-iphone.bat`.
2. Garde la fenetre ouverte pendant le test.
3. Connecte l'iPhone au meme Wi-Fi que le PC.
4. Ouvre dans Safari l'adresse affichee dans la fenetre, par exemple `http://192.168.0.35:8080/`.
5. Si Windows demande une autorisation reseau, accepte le reseau prive.
6. Dans Safari, touche le bouton de partage.
7. Choisis `Sur l'ecran d'accueil`.
8. L'icone `Pilier du foyer` apparaitra comme une application.

Important : les donnees restent sauvegardees dans le navigateur de l'appareil utilise. Le PC et l'iPhone n'ont donc pas encore les memes donnees.

## Pour modifier les donnees fictives

La plupart des donnees se modifient maintenant directement dans l'application : recettes, menus planifies, articles hors menus, raccourcis HM frequents et taches menageres.

Dans `src/main.js`, tu peux encore changer les donnees de depart :

- `recettesDepart` pour les recettes disponibles au premier lancement
- `articlesHorsMenusFrequentsDepart` pour les raccourcis HM proposes au debut
- `menage` pour les taches de la maison
- `rayonsMigros` pour l'ordre des rayons dans la liste de courses

Il n'y a pas encore de base de donnees : tout est volontairement simple pour cette premiere maquette.
Quand une donnee a deja ete modifiee dans l'application, elle est sauvegardee dans le navigateur avec `localStorage`.

## Navigation

La navigation en bas de l'ecran change simplement la section affichee :

- Menus
- Courses
- Menage
- Taches
- Profil
- Sauv.

Tout reste dans `src/main.js` pour que le projet reste facile a comprendre.

## Profil foyer

L'onglet `Profil` permet de noter les informations utiles pour personnaliser les questions IA.
La longue liste des autres equipements est repliee par defaut pour garder l'ecran plus calme.

- les equipements de cuisine, comme l'airfryer, le four vapeur, le micro-ondes, le four traditionnel avec ses fonctions en sous-options, les plaques et le robot ou mixer
- les precisions materiel en texte libre, par exemple capacite, limites ou particularites des appareils
- les habitudes du foyer, par exemple repas simples, peu de vaisselle ou courses deux fois par semaine
- les preferences IA, comme des reponses courtes, un ton chaleureux et des conseils concrets

Le bouton `Enregistrer` sauvegarde ce profil dans le navigateur avec `localStorage`.
Il n'y a pas de compte utilisateur, pas de backend et rien n'est envoye automatiquement.
Le profil est seulement ajoute au texte prepare dans l'aide IA quand tu cliques sur une question rapide.

## Sauvegarde

L'onglet `Sauv.` permet de preparer une sauvegarde complete de l'application.
Elle contient les recettes, les menus planifies, les courses hors menus, les raccourcis HM, les rayons, le profil foyer, le contexte du jour, les taches menageres et les etats sauvegardes.

Le bouton `Copier` copie cette sauvegarde dans le presse-papiers quand le navigateur l'autorise.
On peut aussi selectionner le texte affiche et le garder ailleurs.
Le bouton `Fichier` cree une sauvegarde `.json`.
Sur iPhone, l'application essaie d'ouvrir le partage pour l'enregistrer dans Fichiers, iCloud Drive ou Google Drive.
Si le partage direct n'est pas disponible, le fichier est telecharge.
Apres l'export, l'application affiche un petit resume de la sauvegarde : date, nombre de recettes, menus, taches, articles hors menus, raccourcis HM et rayons.

Pour restaurer, colle une sauvegarde dans la zone `Importer`.
Tu peux aussi utiliser le bouton `Choisir un fichier` pour importer directement un fichier `.json` cree par l'application.
Un apercu du contenu apparait avant de confirmer la restauration.
L'application demande confirmation avant de remplacer les donnees actuelles de l'appareil.

## Preparation cloud

Le stockage passe pour l'instant par un petit adaptateur local dans `src/main.js`.
Aujourd'hui, cet adaptateur utilise encore le navigateur de l'appareil.
Il servira de point d'entree pour brancher Firebase ensuite sans changer toute l'application.
Firebase est maintenant prepare dans l'onglet `Sauv.` :

- `Connexion Google` connecte l'appareil au compte Google.
- `Envoyer cloud` envoie une sauvegarde complete dans Firestore.
- `Charger cloud` remplace les donnees de l'appareil par la sauvegarde cloud apres confirmation.
- L'ecran affiche la date de la derniere sauvegarde cloud quand elle existe.

Cette premiere version cloud est volontairement manuelle pour eviter les conflits entre deux appareils.

## Jour consulte

Les boutons `Jour-1`, `Aujourd'hui` et `Jour+1` permettent de naviguer d'un jour a l'autre.
La section Menage utilise le jour consulte pour afficher les taches correspondantes.
Les taches cochees comme faites sont enregistrees pour cette date precise.
La meme tache reapparaitra donc a faire la semaine suivante.
Dans l'onglet Menage, la vue `Journal` affiche les taches faites, groupees par date.

## Planning menage

L'onglet Planning affiche les taches menageres par jour de la semaine.

Pour deplacer une tache, modifie simplement son champ `jour` dans `src/main.js`.
Les taches ont maintenant aussi un champ `frequence`.
Les frequences disponibles dans la maquette sont `hebdomadaire`, `quotidienne`, `bimensuelle`, `mensuelle` et `ponctuelle`.
Une tache bimensuelle revient toutes les 2 semaines a partir de sa date de depart.
Une tache mensuelle revient le meme jour de chaque mois, par exemple le 1 ou le 15.
Une tache ponctuelle apparait seulement a la date choisie.

Tu peux aussi ajouter une tache depuis le formulaire de l'onglet Planning.
Le formulaire affiche une petite aide selon la frequence choisie, pour montrer quels champs sont utiles.
Elle est sauvegardee dans le navigateur avec `localStorage`, donc elle reste apres un rechargement de la page.

Tu peux supprimer une tache avec le bouton `Supprimer` dans le planning.
L'application demande ensuite de confirmer ou d'annuler.

Les taches supprimees sont dans l'ecran `Corbeille` de l'onglet Planning.
Tu peux restaurer une tache precise, tout restaurer, ou supprimer definitivement une tache de la corbeille.

Le bouton `Modifier` permet de changer le jour, la piece ou le texte d'une tache.
Tu peux ensuite enregistrer ou annuler la modification.

## Menus et courses

L'onglet Menus contient maintenant :

- une zone de menus planifies
- un bouton `Planifier` qui ouvre l'ecran de choix des recettes
- un choix de date et de nombre de personnes avant d'ajouter une recette
- un bouton `Voir la recette` directement sur un menu planifie
- un bouton `Voir la recette` pour afficher la duree, les remarques, la preparation et les ingredients
- une zone `Aide IA` dans la fiche recette, avec quatre questions rapides : solution facile, organiser, cuisson adaptee et restes
- un resume discret du contexte IA utilise dans la fiche recette
- une zone `Contexte du jour` repliee par defaut, avec un resume, l'heure prevue du repas et un bouton `Modifier`
- une question de cuisson adaptee qui utilise le profil foyer, les fonctions du four et le materiel disponible
- une recherche et un filtre par categorie dans la liste des recettes
- des categories de recettes proposees dans une liste pour eviter les doublons
- un bouton `Ajouter une recette` avec un formulaire simple
- un bouton pour ajouter une bibliotheque de recettes de base sans ecraser les recettes existantes
- une zone `Preparation` pour noter les etapes principales de la recette
- des lignes d'ingredients avec nom, quantite, unite et rayon Migros
- un bouton `Modifier la recette` dans la fiche recette
- un bouton `Supprimer la recette`, bloque si la recette est encore utilisee dans un menu planifie

Chaque recette contient ses ingredients directement dans `src/main.js`.
Chaque recette peut aussi contenir une preparation, visible dans la fiche recette.
Chaque recette indique aussi son nombre de personnes de reference, utilise pour ajuster les quantites dans les courses.
Pour cette V1, les ingredients sont regroupes dans la liste de courses seulement s'ils ont le meme nom et la meme unite.
Par exemple, 3 oeufs + 4 oeufs donnent 7 oeufs.
Les articles issus des menus peuvent aussi recevoir une precision dans la liste de courses, sans modifier la recette.

Le `Contexte du jour` est sauvegarde dans le navigateur.
Il est ajoute automatiquement aux questions IA avant les informations de recette, pour obtenir des conseils plus adaptes a la fatigue, au temps disponible, a l'heure prevue du repas et au besoin de simplicite du moment.

L'onglet Courses affiche la liste generee automatiquement, groupee par rayon.
On peut aussi ajouter des articles hors menus, par exemple lessive, papier toilette ou dentifrice.
Le bouton compact `Ajouter HM` sert a ajouter ces articles hors menus.
Le formulaire d'ajout des articles hors menus est replie par defaut pour laisser plus de place a la liste.
Chaque article hors menus peut recevoir une precision facultative apres son ajout a la liste, par exemple une marque, une taille, un parfum, `sac taxe` ou `non-taxe`.
La suppression d'un article hors menus demande une confirmation pour eviter les erreurs de manipulation.
Des raccourcis `HM frequents` permettent d'ajouter en un clic des articles courants comme lait, cafe, lessive, dentifrice ou papier toilette.
Le bouton `Gerer` permet d'ajouter ou retirer les raccourcis HM frequents directement depuis l'application.
Les articles hors menus ont un badge `Hors menus`, pour distinguer ce qui est indispensable aux menus de ce qui a ete ajoute en plus.
Les rayons sont choisis dans une liste inspiree d'un parcours Migros simple : fruits et legumes, pain et patisserie, viande et poisson, produits laitiers et oeufs, epicerie, boissons, surgeles, hygiene, menage, etc.
Le bouton `Rayons` permet de changer l'ordre des rayons avec des boutons pour monter ou descendre chaque rayon.
Cet ordre est sauvegarde et sert aussi pour la liste imprimee.
Les cases a cocher des courses sont sauvegardees : un article coche est considere comme achete et devient plus discret.
Le bouton `Imprimer la liste` lance seulement l'impression : les articles restent dans la liste apres impression.
Le mode impression est volontairement tres compact, en noir et blanc, avec peu de marges, une largeur type ticket de courses et une police type Arial 10 pour economiser le papier et le toner.
Les articles hors menus gardent le signe `(HM)` directement apres leur nom a l'impression.
Le bouton `Preciser` permet d'ajouter un petit commentaire a un article, y compris pour un ingredient issu des menus.
Le planning des menus est sauvegarde dans le navigateur avec `localStorage`.
Les recettes ajoutees depuis l'application sont aussi sauvegardees dans le navigateur.
Les articles hors menus, les raccourcis HM frequents et les articles coches comme achetes sont egalement sauvegardes dans le navigateur.
