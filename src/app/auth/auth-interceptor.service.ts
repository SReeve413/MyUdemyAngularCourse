import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http'
import { AuthService } from "./auth.service";
import { take, exhaustMap, map } from 'rxjs/operators'
import { Store } from "@ngrx/store";

import * as fromApp from '../store/app.reducer';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ){ }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    // return next.handle(req) // adding Auth Params Fails
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      exhaustMap(user => {
        if(!user){
            return next.handle(req)
        }else{
          // const modReq = req.clone({params: new HttpParams().set('auth', user.token)})
          // return next.handle(modReq)
          return next.handle(req)
        }

    }),

    )}

}
