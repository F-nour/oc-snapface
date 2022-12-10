import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
    .append('authentication', `Bearer ${this.auth.getToken()}`)
    const modifiedRequest = request.clone({headers});
    return next.handle(modifiedRequest);
  }
}
function append(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}
