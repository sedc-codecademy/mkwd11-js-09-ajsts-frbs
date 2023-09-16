import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly auth: Auth) {}

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
