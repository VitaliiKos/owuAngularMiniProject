import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {IFilm} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient:HttpClient) {
  }
  getAll():Observable<IFilm[]>{
    console.log(this.httpClient.get<IFilm[]>(urls.movies));
    return this.httpClient.get<IFilm[]>(urls.movies);
  }
}
