import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { FilmRoutingModule } from './film-routing.module';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import {FilmService} from "./services";
import { FilmDetailComponent } from './components/film-detail/film-detail.component';


@NgModule({
  declarations: [
    FilmsComponent,
    FilmComponent,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    HttpClientModule
  ],
  providers: [
    FilmService,
  ]
})
export class FilmModule { }
