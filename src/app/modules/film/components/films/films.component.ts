import {Component, OnInit} from '@angular/core';

import {DataService, FilmService} from "../../services";
import {IFilm, IPage} from "../../interfaces";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: IFilm[];
  page: IPage;

  constructor(private filmService: FilmService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.filmService.getAll().subscribe((value) => {
      this.dataService.storage.next(value);
      this.dataService.storage.subscribe(listFilms => this.films = listFilms.results)
    });
    this.dataService.storagePage.subscribe(value => {
      this.page = value
    })
  }

  goFirstPage() {
    this.dataService.storagePage.next({'page': 1})
    this.filmService.getAll().subscribe((value) => {
      this.dataService.storage.next(value);
    })
  }

  goPreviousPage() {
    this.dataService.storagePage.next({'page': this.page.page - 1})
    this.filmService.getAll().subscribe((value) => {
      this.dataService.storage.next(value);
    })
  }

  goNextPage() {
    this.dataService.storagePage.next({'page': this.page.page + 1})
    this.filmService.getAll().subscribe((value) => {
      this.dataService.storage.next(value);
    })
  }
}
