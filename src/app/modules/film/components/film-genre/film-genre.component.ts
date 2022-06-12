import {Component, OnInit} from '@angular/core';

import {DataGenreService, DataService, FilmService, GenreService} from "../../services";
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-film-genre',
  templateUrl: './film-genre.component.html',
  styleUrls: ['./film-genre.component.css']
})
export class FilmGenreComponent implements OnInit {

  constructor(private genreService: GenreService,
              private dataGenreService: DataGenreService,
              private filmService: FilmService,
              private dataService: DataService) {
  }

  genres: IGenre[];
  currentGenre: IGenre;
  totalPages: number;
  totalResults: number;

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => {
      this.totalPages = value.total_pages
      this.totalResults = value.total_results

    })

    this.dataGenreService.storageGenre.subscribe(value => this.currentGenre = value)

    this.genreService.getAll().subscribe((value) => {
      this.genres = value['genres'];
    });
  }

  getMovieByAllGenre(value: IGenre) {
    this.currentGenre = value
    this.dataGenreService.storageGenre.next(value);
    this.filmService.getAll().subscribe((value) => {
      this.dataService.storage.next(value);

    })
  }
}
