# Création composant Book

  $ ng g c Book

## dans mybooks.component.html appeler book

on lie book avec le composant MyBooks : [book]="book" --> ajout dans book l'annotation **@Input book: BookModel**;

````html
<div class="mybooks-container">
  <h1>Mes livres</h1>
  <div class="books">
    <app-book [book]="book" *ngFor="let book of mybooks"></app-book>
  </div>
</div>
````

## màj template composant Book

ajout d'un bouton de suppression du livre 
il faut ajouter :
--> la propriété book.id
--> la méthode deleteBook() dans BookService et l'appeler dans BookComponent 
    via l'injection du service BookService 

````html
<div class="book-container">
  <div class="book">
    <div><img src="/assets/book.png"></div>
    <p>Titre : {{ book.name }}</p>
    <p>Catégorie :  {{ book.category }}</p>
  </div>
  <button (click)="deleteBook(book.id)">Supprimer</button>
</div>
````

## màj composant book

````ts
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: BookModel; //<<<<<<<<<<<<<<<<<<<<

  constructor() { }

  ngOnInit() {
  }

}
````
