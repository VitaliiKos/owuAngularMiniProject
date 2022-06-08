import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FilmsComponent} from "./components/films/films.component";
import {FilmDetailComponent} from "./components/film-detail/film-detail.component";

let selectedFilm;
const routes: Routes = [
  {path: '', component: FilmsComponent,},
  {path: ':id', component: FilmDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule {

}
