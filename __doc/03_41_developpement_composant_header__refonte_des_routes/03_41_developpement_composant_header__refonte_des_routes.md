# composant header

ce composant est constament affiché dans chaque composant de l'appli

--> l'afficher dans le composant de base app.component.html

exemple la div menu sera affichée dans toutes les pages quelque soit la route

````html
<app-header></app-header>
<router-outlet></router-outlet>
````

## Génération du composant header

    $ ng g c header

````html
<nav>
  <div>
    <ul>
      <li class="nav-item">
        <a class="nav-link" routerLink="" routerLinkActive="active" >Mes livres</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/my-loans" routerLinkActive="active" >Mes emprunts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/list-books" routerLinkActive="active" >Livres Disponibles</a>
      </li>
      <li class="nav-item">
        <a class="nav-link cursor-link" (click)="logout()" >Se déconnecter</a>  <!-- déconnecter l'utilisateur -->
      </li>
    </ul>
  </div>
</nav>
````

````ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  logout(){
    this.loginService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    }, () => {
      alert('Ko');
    });
  }

}
````

## Création du service login

    $ ng g s ./shared/login
 
 ````ts
 @Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logout() {
      throw new Error("Method not implemented.");
  }
}
 ````
