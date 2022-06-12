import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls, userKey} from "../../../constants";
import {IDataFilm, IGenre, IPage} from "../interfaces";
import {IFilmDetail} from "../interfaces";
import {DataGenreService} from "./data-genre.service";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  page: IPage;
  genre: IGenre;

  constructor(private httpClient: HttpClient,
              private dataGenreService: DataGenreService,
              private dataService: DataService) {
    this.dataService.storagePage.subscribe(value => {
      this.page = value;
    });

    this.dataGenreService.storageGenre.subscribe(value => {
      this.genre = value;
    })
  }

  ngOnInit(): void {
  }

  getAll(): Observable<IDataFilm> {
    return this.httpClient.get<IDataFilm>(`${urls.movies}&page=${this.page.page}&with_genres=${this.genre.id}`);
  }

  getById(id: number): Observable<IFilmDetail> {
    return this.httpClient.get<IFilmDetail>(`${urls.getMovieById}${id}?api_key=${userKey}&language=en-US)`)

  }

}
