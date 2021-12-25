import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardListComponent } from './components/card-list/card-list.component';

const routes: Routes = [
  {path:'cardList',component:CardListComponent},
  {path:'detail/:id',component:CardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [CardDetailComponent,CardListComponent];
