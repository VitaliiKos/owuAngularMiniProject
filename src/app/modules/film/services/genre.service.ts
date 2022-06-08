import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IGenre} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IGenre> {
    return this.httpClient.get<IGenre>(urls.genres);
  }

  // getByGenre(id:number|string):Observable<IDataFilm> {
  //
  //   return this.httpClient.get<IDataFilm>(`${urls.movieByGenre}&page=$&with_genres=${id}`)
  //
  // }
}
