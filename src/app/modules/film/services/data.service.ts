import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IDataFilm, ITheme} from "../interfaces";
import {IFilmDetail} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject<IDataFilm>({
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1
  });

  storageFilm = new BehaviorSubject<IFilmDetail>({
    adult: false,
    backdrop_path: "",
    belongs_to_collection: null,
    budget: 1,
    genres: [],
    homepage: "",
    id: 1,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 1,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 1,
    runtime: 1,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 1,
    vote_count: 1,
  });

  // storageGenre = new BehaviorSubject<IGenre>({
  //   id: '',
  //   name: '',
  // });
  // storagePage = new BehaviorSubject<IPage>({
  //   id: 1,
  // });
  storageThemeStatus = new BehaviorSubject<ITheme>({
    status: true,
  });


  constructor() {
  }
}
