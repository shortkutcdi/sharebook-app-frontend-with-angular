# Interaction entre composants

## Passer des données à un composant enfant - notation []

    <composant1 [inputParam]="monChamp">

- Avec **inputParam** déclaré en **@Input** dans composant1

- **monChamp** = nom de la variable déclarée dans le .TS


## Composant enfant passe données à parents - notation ()

Le parent indique à l'enfant une méthode à appeler - notation ()

    <composant2 (outputParam)="méthodeAAppeler">

- avec **outputParam** déclaré en **@Output** dans composant2

- **méthodeAAppeler* = nom méthode déclarée dans le .TS


## Cas particulier pour les formulaires two way binding - notation [()]

Two way binding (double binding) "banana in a box" [()]

    <composant3 [(ngModel)]="champDuComposant">
