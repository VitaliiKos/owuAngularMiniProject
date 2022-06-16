import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IToken, IUser} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessTokenKey = 'access';
  private sessionId = 'status';

  constructor(private httpClient: HttpClient) {
  }

  login(user: IUser): Observable<{}> {
    return this.httpClient.post<any>(urls.sessionWithUser, user)
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token['request_token'])
  }

  setSessionId(status: boolean): void {
    localStorage.setItem(this.sessionId, `${status}`)
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }

  selectToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string
  }

  getToken(): Observable<IToken> {
    return this.httpClient.get<IToken>(urls.getToken)
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey)
    localStorage.removeItem(this.sessionId)
  }
}
