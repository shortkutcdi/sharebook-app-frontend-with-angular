# Composant listbooks - livres disponibles

    $ ng g c listbooks

## listbooks.component.html

````html
<div class="list-book-container">
  <h1>Livres disponibles</h1>
  <span *ngIf="books.length == 0">Pas de livres disponibles en cours</span>
  <div class="books">
    <div *ngFor="let book of books">
      <app-book [book]="book" [editMode]="false" ></app-book>
      <button (click)="loanBook(book.id)" class="btn btn-primary">Emprunter</button>
    </div>
  </div>
</div>
````

## Màj book.component.ts - ajout @Input() editMode:boolean

````ts
export class BookComponent implements OnInit {

  @Input() book: BookModel;
  @Input() editMode: boolean;

//...
````

## Màj book.component.html

````html
  <div *ngIf="!editMode">Prêteur : {{book.user.firstName}} {{book.user.lastName}}</div>
  <div *ngIf="editMode">
    <button (click)="deleteBook(book.id)" class="btn btn-primary">Supprimer</button>
  </div>
````

## Màj listbooks.component.ts appel getBooksAvailable dans ngOnInit()

````ts
export class ListbooksComponent implements OnInit {

  books: BookModel[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = [];
    this.bookService.getBooksAvailable().subscribe((data: BookModel[]) => {
      this.books = data;
    });
  }

}
````

## Ajout getBooksAvailable() dans BookService

````ts
  getBooksAvailable() {
    return this.http.get('/users/1/books/status/FREE');
  }
````

## Màj routing - app-routing.module.ts

    {path: 'list-books', component: ListbooksComponent}

## Màj mybooks.component.html - ajout prop @input [editMode]

on met editMode à true - on peut supprimer le livre

````html
    <app-book [book]="book" [editMode]="true" (refreshBooks)="ngOnInit()" *ngFor="let book of mybooks">
      {{book.name}} - {{book.category}}
    </app-book>
````

## Màj postman

creation nouvel utilisateur

 