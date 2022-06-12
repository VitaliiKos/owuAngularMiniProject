import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {FilmRoutingModule} from './film-routing.module';
import {FilmsComponent} from './components/films/films.component';
import {FilmComponent} from './components/film/film.component';
import {FilmDetailComponent} from './components/film-detail/film-detail.component';
import {FilmService} from "./services";
import {FilmGenreComponent} from './components/film-genre/film-genre.component';
import {GenreCardComponent} from './components/genre-card/genre-card.component';
import {NgbdRatingFormModule} from "../rating-form/rating-form.module";
import {ActorsComponent} from './components/actors/actors.component';
import {ActorComponent} from './components/actor/actor.component';


@NgModule({
  declarations: [
    FilmsComponent,
    FilmComponent,
    FilmDetailComponent,
    FilmGenreComponent,
    GenreCardComponent,
    ActorsComponent,
    ActorComponent,
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    HttpClientModule,
    NgbdRatingFormModule

  ],
  providers: [
    FilmService,
  ]
})
export class FilmModule {
}
