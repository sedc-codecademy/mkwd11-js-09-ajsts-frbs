import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = new BehaviorSubject<User | null>(null)

  constructor(private readonly router: Router) { 
  }

  users: User[] = [
    {email: 'bob@gmail.com',password: 'bob123'},
    {email: 'jill@gmail.com',password: 'jill123'},
    {email: 'john@gmail.com',password: 'john123'}
  ]

  login(email: string, password: string): void {
    const foundUser = this.users.find(user => user.email === email && user.password === password);
    if (foundUser) {
      this.currentUser$.next(foundUser);
      this.router.navigate(['/movies'])
    } else {
      this.router.navigate(['/home'])
      
    }
  }

  register(email: string, password: string): void{}
}
