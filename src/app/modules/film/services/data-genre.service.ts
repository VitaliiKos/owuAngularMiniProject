import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IGenre} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataGenreService {
  storageGenre = new BehaviorSubject<IGenre>({
    id: '',
    name: '',
  });


  constructor() {

  }
}
