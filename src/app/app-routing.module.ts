import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { ListbooksComponent } from './listbooks/listbooks.component';


const routes: Routes = [
  {path: '', component: MybooksComponent},
  // {path: 'my-books', component: MybooksComponent},
  {path: 'add-book', component: AddbookComponent},
  {path: 'list-books', component: ListbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
