import {Component, OnInit} from '@angular/core';

import {GenreService} from "../../services";
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-film-genre',
  templateUrl: './film-genre.component.html',
  styleUrls: ['./film-genre.component.css']
})
export class FilmGenreComponent implements OnInit {

  constructor(private genreService: GenreService) {
  }

  genres: IGenre[]

  ngOnInit(): void {

    this.genreService.getAll().subscribe((value) => {
      this.genres = value['genres'];
    });
  }
}
