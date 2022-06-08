import {Component, OnInit} from '@angular/core';

import {DataService, FilmService} from "../../services";
import {IFilm} from "../../interfaces";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: IFilm[];

  constructor(private filmService: FilmService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.filmService.getAll().subscribe((value) => {
      this.dataService.storage.next(value);
      this.dataService.storage.subscribe(listFilms => this.films = listFilms.results)

    });


  }

}
