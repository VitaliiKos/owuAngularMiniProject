import {Component, Input, OnInit} from '@angular/core';

import {IGenre} from "../../interfaces";
import {DataGenreService, DataService, FilmService, GenreService} from "../../services";

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {

  @Input()
  genre: IGenre

  constructor(private genreService: GenreService,
              private dataGenreService: DataGenreService,
              private dataService: DataService,
              private filmService: FilmService) {
  }

  ngOnInit(): void {
  }

  getMovieByGenre(genre: IGenre) {
    this.dataGenreService.storageGenre.next(genre);

    this.filmService.getAll().subscribe((value) => {
      this.dataService.storage.next(value);
    })
  }

}
