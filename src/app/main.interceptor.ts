import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

import {AuthService} from "./modules/login/services";
import {Router} from "@angular/router";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.authService.isAuthorization()

    if (isAuthenticated) {
      request = this.addToken(request, this.authService.selectToken())
    }
    return next.handle(request)
      .pipe(
        catchError((res: HttpErrorResponse) => {
          if (res && res.error && res.status === 401) {
            return this.handle401Error()
          }
          return throwError(() => new Error('token invalid or expired'))
        })
      ) as any;
  }

  addToken(request: HttpRequest<any>, token: string | null): HttpRequest<any> {
    return request.clone({
      setParams: {request_token: `${token}`}
    })
  }

  handle401Error(): any {
    this.authService.deleteToken();
    this.router.navigate(['login'])
    return throwError(() => new Error('token invalid or expired'))
  }


}
