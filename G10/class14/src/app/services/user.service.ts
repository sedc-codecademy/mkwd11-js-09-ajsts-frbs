import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Roles, User } from '../interfaces/user.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private firestore: AngularFirestore,
    private notificationService: NotificationsService
  ) {}

  searchUsers(userName: string): Observable<User[]> {
    return this.firestore
      .collection<User>('users')
      .valueChanges()
      .pipe(
        map((users) =>
          users.filter((user) =>
            user.name.toLowerCase().includes(userName.toLowerCase())
          )
        )
      );
  }

  async updateUserRoles(id: string, roles: Roles) {
    const userRef = this.firestore.collection<User>('users').doc(id);

    try {
      await userRef.update({ roles });
      this.notificationService.pushNotification(
        'User role updated successfully',
        'success'
      );
    } catch (error: any) {
      this.notificationService.pushNotification(
        error.message || 'Error while updating user roles',
        'error'
      );
    }
  }
}
