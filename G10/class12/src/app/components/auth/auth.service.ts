import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../../interfaces/user.interface';
import { NotificationsService } from '../../services/notifications.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private notificationService: NotificationsService,
    private router: Router
  ) {
    this.fireAuth.authState.subscribe({
      next: (user) => {
        console.log('authState', user);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          localStorage.setItem('user', '');
        }
      },
      error: (error) => {
        console.log('authState error', error);
      },
    });
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user');

    return !!user;
  }

  async login(email: string, password: string) {
    try {
      const result = await this.fireAuth.signInWithEmailAndPassword(
        email,
        password
      );

      if (result.user) {
        this.router.navigate(['/dashboard']);
      } else {
        this.notificationService.pushNotification('Login failed', 'error');
      }
    } catch (error: any) {
      this.notificationService.pushNotification(
        error.message || 'Login failed',
        'error'
      );
    }
  }

  async register(email: string, password: string, name?: string) {
    console.log('register', name, email, password);
    try {
      const result = await this.fireAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (result?.user) {
        await result.user.updateProfile({ displayName: name });
        await this.setUserData(result.user as User);
        this.router.navigate(['/login']);
      } else {
        this.notificationService.pushNotification('Register failed', 'error');
      }

      console.log(result);
    } catch (error: any) {
      this.notificationService.pushNotification(
        error.message || 'Register failed',
        'error'
      );
    }
  }

  setUserData(user: User): Promise<void> {
    const userRef = this.firestore.collection('users').doc(user.uid);

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || '',
    };

    return userRef.set(userData, {
      merge: true,
    });
  }
}
