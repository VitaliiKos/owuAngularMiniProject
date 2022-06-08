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
    console.log(genre)
    this.dataGenreService.storageGenre.next(genre);

    this.filmService.getAll().subscribe((value) => {
      console.log('genre-card', value)
      this.dataService.storage.next(value);
    })
  //   this.genreService.getByGenre(genre.id).subscribe((value) => {
  //     console.log('genre-card', value)
  //     this.dataService.storage.next(value);
  //     console.log('34', this.dataService.storage.value.results)
  //   })
  }

}
