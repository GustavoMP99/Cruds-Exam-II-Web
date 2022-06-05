import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.get('Authorization') === null) {
      request = request.clone(
        {
          setHeaders: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbGFnSldUIjp0cnVlLCJpYXQiOjE2NTQxODkwNTl9.X6nqrguJVhQ2ly4TgmdsCGOG7EdAcGtquBuAEkOgyFE' }
        }
      );
    }
    return next.handle(request);
  }
}
