import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../Auth/auth.reducer';
import * as authActions from '../Auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = true;

  constructor(private store: Store) { }

  isUserLoggedIn() {
    return this.loggedIn;
  }

  login(user: User) {
    this.store.dispatch(authActions.login({ user }));
  }

  logout() {
    this.store.dispatch(authActions.logout());
  }

}
