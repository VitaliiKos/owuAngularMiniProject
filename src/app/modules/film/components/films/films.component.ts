import { Component, OnInit } from '@angular/core';

import {IFilm} from "../../interfaces";
import {FilmService} from "../../services";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films:IFilm[];

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.filmService.getAll().subscribe(value =>
    // @ts-ignore
      this.films = value['results']
    // console.log(value['results'])
    )
  }

}
