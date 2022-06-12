import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {API, userKey} from "../../../constants";
import {IDataActor} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private httpClient: HttpClient) {
  }

  getActors(id: number): Observable<IDataActor> {
    return this.httpClient.get<IDataActor>(`${API}/movie/${id}/credits?api_key=${userKey}&language=en-US`);
  }
}
