# Installations préalables

installer nodejs

Dans le terminal vérifier :

   $ node --version
   $ npm --version


## Installer angular/cli

    $ npm install -g @angular/cli
    $ npm install

démarrer un serveur

````
$ npm run server
$ npm run client -- <step>
````

client -> http://localhost:4200/ 
server ->  http://localhost:9000/

ou avec 

````
$ ng serve
````

## Installer une application angular avec cli

````
$ ng new sharebook-frontend
````

## Angular généralités

Structure d'une single page application dans Angular (SPA)

- `template` : fichier HTML
- `style` : fichier csss (ou scss)
- `composant` : fichier typescript (.ts)
- `service` : appel au backend
- `module` : regrouper les éléments ci-dessus par domaine fonctionnel

autres fichiers :
- `package.json` : gestion des dépendances frontend (comme pom.xml)
- `index.html` : point d'entrée SPA
- `environment.ts` 
- `styles.css` : style global
- `karma.conf.ts` : pour le lancement des tests unitaires


## Créer un lien symbolique pour le dossier /node_modules

[lien symbolique windows](https://authfix-le-gaulois.tech/creer-lien-symbolique-windows/)

quand on crée une application angular le dossier /nodes_modules est crée est est de taille importante
--> utiliser toujours le même dossier et pointer un lien symbolique pour chaque nouvelle app angular

````
$ mklink /J \chemin_du_lien_symbolique\node_modules \chemin_physique_du_dossier\node_modules

$ mklink /J H:\java-projects-2\udem-dev-web-fullstack-av-spring-et-angular\sharebook-frontend\node_modules C:\Users\fernand\IdeaProjects\untitled\node_modules
````
mklink /J H:\java-projects-2\udem-dev-web-fullstack-av-spring-et-angular\sharebook-frontend-app\node_modules C:\Users\fernand\IdeaProjects\untitled\node_modules

## Les composants angular

**Home** : élément structurant sans données; va inclure le header

**Book** : composant qui va être inclu dans plusieurs composants

**Header** : composant générique qui est dans tous les autres composants

**MyBooks** : renvoie la listes des livres (on affichera **Book**)

**AddBook** : formulaire pour l'ajout d'un livre on y accède via **MyBooks**
              (on affichera **Book**)

**MyLoans** : affiche les emprunts (on affichera **Book**)

**Spinner** : va indiquer un chargement

**Login** : composant de connection 

**AddUser** : enregistrer un nouvel utilisateur

**ListBooks** : affiche les livres disponibles (on affichera **Book**)

