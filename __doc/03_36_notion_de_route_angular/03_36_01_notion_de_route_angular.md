# màj app-routing.module.ts

````ts
const routes: Routes = [
  {path: 'my-books', component: MybooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
````
