# definir l'addresse du backend port 8080

[spring boot angular project](https://www.devglan.com/spring-boot/spring-boot-angular-example)

créons à la racine du projet un fichier proxy.json

````json
{
  "/": {
    "target": "http://localhost:8080",
    "secure": false
  }
}
````

## màj package.json "start"

màj de  "start": "ng serve", ajout de --proxy-config proxy.json

````json
  "scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy.json",
````

pour lancer l'appli

    $ npm start
