import { Injectable } from '@angular/core';
import { AuthApiService, User } from './api/auth-api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authApiService: AuthApiService, private router: Router) {}

  currentUser$ = new BehaviorSubject<User>(
    localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser'))
      : null
  );

  // 1. Login
  loginUser(email: string, password: string) {
    this.authApiService.loginUser(email, password).subscribe({
      next: (value) => {
        console.log(value);
        localStorage.setItem('currentUser', JSON.stringify(value));
        this.currentUser$.next(value);
        this.router.navigate(['movies']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  // 2. Register
  registerUser(email: string, password: string) {
    this.authApiService.registerUser(email, password).subscribe({
      next: (value) => {
        console.log(value);
        this.router.navigate(['auth', 'login']);
        // If this is success we navigate the user to /login so he can login with his new credentials
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  // 3. Logoout user
  logoutUser() {
    localStorage.clear();
    this.currentUser$.next(null);
    this.router.navigate(['']);
  }
}
