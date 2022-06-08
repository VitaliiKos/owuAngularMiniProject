import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IGenre, IPage, ITheme} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataGenreService {
  storageGenre = new BehaviorSubject<IGenre>({
    id: '',
    name: '',
  });
  storagePage = new BehaviorSubject<IPage>({
    id: 1,
  });

  constructor() {

  }
}
