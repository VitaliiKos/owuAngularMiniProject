import {Component, Input, OnInit} from '@angular/core';

import {IFilm} from "../../interfaces";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input()
  film: IFilm;
  movieImages: string = urls.movieImages

  constructor() {
  }

  ngOnInit(): void {
  }
}
