# ajout de livre (formulaire et composant)

## configurer un formulaire

-1. ajout FormsModule dans app.module.ts

````ts
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    //...
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // ajout pour utiliser HttpClient
    AppRoutingModule,
    FormsModule       // ajout pour utiliser les formulaires
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
````

-2. ajouter la balise <router-outlet> dans app.component.html

````html
<router-outlet></router-outlet>
````

## Déclaration des routes

avec la route par défaut ''

````ts
const routes: Routes = [
  {path: '', component: MybooksComponent},
  // {path: 'my-books', component: MybooksComponent},
  {path: 'add-book', component: AddbookComponent}
];
````

## Ajout d'une route pour ajouter un livre dans un bouton de mybooks

Dans mybooks.component.html ajout bouton "Ajouter un livre"

````html
    <button routerLink="add-book" class="btn btn-primary">
      Ajouter un livre
    </button>
````

## création d'un nouveau composant addbook (formulaire)

    $ ng g c addbook

## Ajout nouvelle route add-book dans app-routing.module.ts

````ts
const routes: Routes = [
  {path: 'my-books', component: MybooksComponent},
  {path: 'add-book', component: AddbookComponent}
];
````

## Màj addbook.component.html

1- dans la balise form appel de la méthode save() à la soumission

````html
  <form (ngSubmit)="save()">
````

2- dans les balises input renseigner via name la propriété
   et two-way binding la propriété avec [(ngModel)] 
  
````html
  <input type="text" name="name" [(ngModel)]="book.name" class="form-control">
````

Résumé
addbook.component.html

````html
<div class="container-add-book">
  <h1>Ajouter un livre</h1>

  <form (ngSubmit)="save()">
    <div>
      <label for="name">Nom du livre</label>
      <input type="text" name="name" [(ngModel)]="book.name" class="form-control">
    </div>
    <div>
      <label for="name">Nom du livre</label>
      <input type="text" name="category" [(ngModel)]="book.category" class="form-control">
    </div>
    <div class="container-submit">
      <input type="submit" value="Valider" class="btn btn-primary">
    </div>
  </form>

  <div>
    <a routerLink="" >Retour</a>
  </div>
</div>
````

## Màj addbook.component.ts - ajout méthode save() via service

- injection de bookService et de router
- ajout propriété book de type BookModel et initialisation des props à ''

````ts
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  // ajout propriété avec valeurs par défaut
  book: BookModel = {
    name: '',
    category: ''
  };

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.bookService.saveBook(this.book).subscribe(() => {
      this.router.navigate(['']); // revient à la home une fois enregistré
    }, (response) => {
      if (response && response.error) {
        alert('Erreur détectée');
      }
    });
  }

}
````

## Màj BookService - ajout méthode saveBook(book: any)

````ts
export class BookService {

  constructor(private http: HttpClient) { } // injection de dépendance

  getMyBooks(){
    return this.http.get('/users/1/books');
  }

  deleteBook(idBook: number): any {
    return this.http.delete('/books/' + idBook );
  }

  saveBook(book: any): any {
    return this.http.post('/users/1/books', book);
  }
````


