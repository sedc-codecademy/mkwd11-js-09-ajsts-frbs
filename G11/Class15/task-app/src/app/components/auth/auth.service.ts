import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import {
  setAuthenticated,
  setUnauthenticated,
} from 'src/app/store/auth/auth.actions';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly auth: Auth,
    private readonly store: Store<AppState>
  ) {}

  initAuthListener = () => {
    authState(this.auth).subscribe((user) => {
      if (user) {
        // console.log(user);
        console.log('Authenticated');
        this.store.dispatch(setAuthenticated());
      } else {
        console.log('UnAuthenticated');
        this.store.dispatch(setUnauthenticated());
      }
    });
  };

  register = (email: string, password: string) => {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  };

  login = (email: string, password: string) => {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  };

  logout = async () => {
    await signOut(this.auth);
  };
}
