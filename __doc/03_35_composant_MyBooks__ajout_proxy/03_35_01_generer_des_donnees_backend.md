# Lancement du backend

on lance le backend et on ajoute des données via postman

## Ajout utilisateur

user - create user - onglet body

localhost:8080/users

````json
{
	"firstName": "Sylvain",
	"lastName": "Maestri",
	"password": "password",
	"email": "sma@yopmail.com"
}
````

send -> reponse created 201

## Ajout d'un livre - mauvaise insertion nom livre trop court

book - created book 

localhost:8080/users/1/books

````json
{
	"name": "myB",
	"category" : "Policier"
}
````

Résultat bad request 400 - la longueur du nom est inf à 5

````json
{
    "timestamp": "2019-10-12T14:19:46.075+0000",
    "status": 400,
    "error": "Bad Request",
    "errors": [
        {
            "codes": [
                "Size.book.name",
                "Size.name",
                "Size.java.lang.String",
                "Size"
            ],
            "arguments": [
                {
                    "codes": [
                        "book.name",
                        "name"
                    ],
                    "arguments": null,
                    "defaultMessage": "name",
                    "code": "name"
                },
                25,
                5
            ],
            "defaultMessage": "Le nom du livre doit faire entre 5 et 25 carcatères",
            "objectName": "book",
            "field": "name",
            "rejectedValue": "myB",
            "bindingFailure": false,
            "code": "Size"
        }
    ],
    "message": "Validation failed for object='book'. Error count: 1",
    "path": "/users/1/books"
}
````

## ajout d'un livre

book - created book 

localhost:8080/users/1/books

````json
{
	"name": "myBook",
	"category" : "Policier"
}
````

résultat 201 created

````json
{
    "id": 2,
    "status": "FREE",
    "name": "myBook",
    "category": "Policier",
    "deleted": false,
    "user": {
        "id": 1,
        "lastName": "Maestri",
        "firstName": "Sylvain",
        "password": "password",
        "email": "sma@yopmail.com"
    }
}
````

## un autre livre

book - created book 

localhost:8080/users/1/books

````json
{
  "name": "Moon 5",
  "category": "Science fiction",
}
````


