import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {DataService, FilmService} from "../../services";
import {urls} from "../../../../constants";
import {IFilmDetail} from "../../interfaces";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  selectedFilm: IFilmDetail;
  movieImages: string = urls.movieImages;
  movieRuntime: string;
  filmId: number;
  bkUrl = {};


  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService,
              private filmService: FilmService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => {
        this.filmId = id
      }
    )

    this.filmService.getById(this.filmId).subscribe((value) => {
      this.dataService.storageFilm.next(value);
      this.selectedFilm = value;
      this.movieRuntime = `${Math.floor(value.runtime / 60)}h ${value.runtime % 60}m`
      this.bkUrl = this.getBkUrl();
    });
  }

  getBkUrl() {
    return {
      'background-image': `url(${this.movieImages + this.selectedFilm.backdrop_path})`
    };

  }
}
