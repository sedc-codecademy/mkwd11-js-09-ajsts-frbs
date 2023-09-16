import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly auth: Auth) {}

  register = (email: string, password: string) => {};

  login = (email: string, password: string) => {};

  logout = () => {};
}
