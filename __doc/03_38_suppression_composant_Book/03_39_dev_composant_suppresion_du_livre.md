# ajout methode deleteBook(bookId) dans BookService

On ajoutera au préalable la propriété id dans BookModel

```ts
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { } // injection de dépendance

  getMyBooks(){
    return this.http.get('/users/1/books');
  }

  deleteBook(idBook: number): any {
    return this.http.delete('/books/' + idBook )
  }
```

## BookComponent - ajout méthode deleteBook via injection de BookService

dans la méthode delete on va appeler refreshBooks() afin de mettre à jour les livres

on l'ajoutera avec

    @Output() refreshBooks = new EventEmiiter<boolean>();

Dans mybooks.component.html on va faire un binding (refreshBooks) qui va appeller la méthode ngOnInit() de
myBooks.component.ts --> récupération des books

mybooks.component.html

```html
<app-book
  [book]="book"
  (refreshBooks)="ngOnInit()"
  *ngFor="let book of mybooks"
>
  {{book.name}} - {{book.category}}
</app-book>
```

mybooks.component.ts

```ts
export class MybooksComponent implements OnInit {

  mybooks: BookModel[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getMyBooks()
      .subscribe((data: BookModel[]) => {
        this.mybooks = data;
      });
  }
```

book.component.ts

```ts
@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;

  @Output() refreshBooks = new EventEmitter<boolean>();

  constructor(private bookService: BookService) {}

  ngOnInit() {}

  deleteBook(idBook: number) {
    this.bookService.deleteBook(idBook).subscribe(() => {
        this.refreshBooks.emit();
      }, (response) => {
        if (response && response.status === 409) {
          alert('Erreur suppression; livre en cours d\'emprunt');
        }
      }
      );
  }
}
```
