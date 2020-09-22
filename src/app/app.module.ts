import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HeaderComponent } from './header/header.component';
import { ListbooksComponent } from './listbooks/listbooks.component';


@NgModule({
  declarations: [
    AppComponent,
    MybooksComponent,
    BookComponent,
    AddbookComponent,
    HeaderComponent,
    ListbooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // ajout pour utiliser HttpClient
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
