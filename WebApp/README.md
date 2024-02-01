Note pour ceux qui veulent créer un projet avec Angular en version 17
=> ng new MyProject --no-standalone

Pour vérifier : vous devez avoir "app.module.ts" dans src/app.

# Travail à faire pour la prochaine séance
## 1. Créer un formulaire de saisi de tournois
=> Chaque tournoi à une ville (obligaoire), une dotation (obligatoire, minimum 5000) et une description (facultative)
=> Un bouton "Valider" doit etre actif / inactif en fonction de l'état du formulaire
=> Un message d'erreur apparaît en dessous de chaque champ si le champ n'est pas valide.

## 2. Affichage des tournois
   => Je veux voir apparaître un tableau de tournoi, avec 2 colonnes (Nom et Dotation). A chaque fois que je clique sur "Save", le tournoi s'ajoute à la liste

## 3. Fonction de modification
=> Quand je clique sur une ligne du tableau, les valeurs du tournoi sélectionné apparaîssent dans le formulaire.
=> Je peux modifier les valeurs, quand je clique sur "Save", la ligne du tableau doit être mise à jour.

## 4. Rendre tout ça un peu ergonomique
=> Je ne dois pas pouvoir sélectionner d'autre ligne si je suis en édition
=> J'ai un bouton "Créer" : l'utilisateur doit cliquer sur le bouton "Créer" avant de pouvoir créer une nouvelle entrée dans le tableau.

## 5. Pour aller plus loin
Un petit style css sur le tableau pour mettre en gris clair l'arrière plan de l'entrée sélectionnée
Ne pas permettre la saisie dans le formulaire tant qu'on n'a pas sélectionné d'entrée dans le tableau ou qu'on n'a pas cliqué sur "Créer"


Note : vous pouvez également consulter https://angular.io/tutorial/tour-of-heroes qui est un très bon tuto.
