import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../constants/core.constants';
import { map } from 'rxjs';

export interface User {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  // 1. login user
  loginUser(email: string, password: string) {
    return this.http
      .post(`${BASE_URL}/auth/login`, { email, password })
      .pipe(map((res) => res as User));
  }

  // 2. register user
  registerUser(email: string, password: string) {
    return this.http.post(`${BASE_URL}/auth/register`, { email, password });
  }
}
