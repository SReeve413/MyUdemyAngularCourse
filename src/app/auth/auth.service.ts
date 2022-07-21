import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { User } from './user.model';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenExperationTimer: any;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  setLogoutTimer(experationDuration: number ) {

    this.tokenExperationTimer = setTimeout(() => {
      // this.store.dispatch(new AuthActions.Logout())
    }, experationDuration);
  }

  clearLogoutTimer(){
    if (this.tokenExperationTimer) {
      clearTimeout(this.tokenExperationTimer);
      this.tokenExperationTimer = null;
    }
  }
}
