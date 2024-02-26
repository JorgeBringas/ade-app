import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ResponseApi } from '../model/response.model';
import { LoginResponse } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  token: string | undefined;
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (request.url.indexOf('api') != -1) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.token)
      });
    }

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {         
          const response = event.body as ResponseApi;
          const login = event.body as LoginResponse;
          if (login.token != null) {
            this.token = login.token;
          } else if (response !== undefined && response.error === 1) {
            response.message = 'Ha ocurrido un error en su solicitud.';
          }
        }
      }), catchError(event => {
        console.log(event);
        if (request.url.indexOf('api') != -1 && (event.status === 401 || event.status === 403)) {
          window.open('/login', '_self');
          return throwError({ error: -100, message: 'Auth error' } as ResponseApi);
        } else {
          return throwError({ error: -1, message: 'Ha ocurrido un error en su solicitud.' } as ResponseApi);
        }
      }));
  }
}
