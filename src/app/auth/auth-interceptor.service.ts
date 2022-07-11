import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http'
import { AuthService } from "./auth.service";
import { take, exhaustMap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ){ }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    // return next.handle(req) // adding Auth Params Fails
    return this.authService.user.pipe(
      take(1),
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
