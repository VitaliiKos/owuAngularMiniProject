import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IDataActor} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataActorService {

  storageActor = new BehaviorSubject<IDataActor>({
    cast: [],
    crew: [],
    id: 1,
  });

  constructor() { }
}
