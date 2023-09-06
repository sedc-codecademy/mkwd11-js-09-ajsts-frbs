import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  user,
  Auth,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  // currentUser$ = new BehaviorSubject<User>(
  //   localStorage.getItem('currentUser')
  //     ? JSON.parse(localStorage.getItem('currentUser'))
  //     : null
  // );

  currentUser$ = user(this.auth);

  // 1. Login
  async loginUser(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['movies']);
    } catch (error) {
      console.error(error);
    }
  }

  // 2. Register
  async registerUser(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['auth', 'login']);
    } catch (error) {
      console.error(error);
    }
  }

  // 3. Logoout user
  logoutUser() {
    signOut(this.auth);
    this.router.navigate(['']);
  }
}
