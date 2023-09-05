import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../../interfaces/user.interface';
import { NotificationsService } from '../../services/notifications.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private notificationService: NotificationsService
  ) {}

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
