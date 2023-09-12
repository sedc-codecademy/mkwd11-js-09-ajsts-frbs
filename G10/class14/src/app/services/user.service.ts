import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

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
}
