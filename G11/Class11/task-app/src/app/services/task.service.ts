import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RawFirestoreTask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private readonly firestore: Firestore) {}

  getTask = () => {
    const tasksCollection = collection(this.firestore, 'tasks');
    const tasksCollectionData = collectionData(tasksCollection, {
      idField: 'id',
    }) as Observable<RawFirestoreTask[]>;

    // tasksCollectionData.subscribe((data) => console.log(data));

    return tasksCollectionData;
  };
}
