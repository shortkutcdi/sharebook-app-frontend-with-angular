# Générer composant - ng g c <nomComposant>

Dans terminal avec angular cli

    $ ng g c mybooks

## mybboks.component.html

````html
<div class="mybooks-container">
  <h1>Mes livres</h1>
  <div class="books">
    <div *ngFor="let book of mybooks">{{book.name}} - {{ book.category}}</div>
  </div>
</div>
````

## Ajout tag app-mybooks dans app.component.html

````html
<app-mybooks></app-mybooks>
````

## intérroger le back à l'initialisation du composant ngOnInit()

mybooks.component.ts

````ts
@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.bookService.getMyBooks().
      .subscribe((data: BookModel[]) => {
        this.mybooks = data;
      });
  }
}
````

### Création d'un service et d'un model BookModel pour récupérer des livres

création d'un service dans un répertoire de partage ./shared

    $ ng g s ./shared/bookservice

on va utiliser le service Http ClientModule que l'on va déclarer dans app.module.ts

````ts
  import { HttpClientModule } from '@angular/common/http';

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
````

dans le service bookservice --> injection de dépendance de HttpClient ds constructeur

````ts
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { } // injection de dépendance

  getMyBooks() {
    return this.http.get('/users/1/books');
  }
}
````

## Création de BookModel

./shared/bookmodel.ts

````ts
export class BookModel {
  name: string;
  category: string;

  constructor() {
  }
}
````

## màj de MybooksComponent - injection de BookService

````ts
export class MybooksComponent implements OnInit {

  mybooks: BookModel[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getMyBooks()
      .subscribe((data: BookModel[]) => {
        this.mybooks = data;
      });
  }
}
````

