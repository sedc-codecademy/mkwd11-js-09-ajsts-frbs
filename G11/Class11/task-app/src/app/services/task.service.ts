import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  Timestamp,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
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

  createTask = (description: string) => {
    const taskToBeCreated = {
      description: description,
      priority: 'HIGH',
      isDone: false,
      createdAt: Timestamp.fromDate(new Date()),
    };

    console.log('Task to be created:', taskToBeCreated);

    const taskCollection = collection(this.firestore, 'tasks');

    return from(addDoc(taskCollection, taskToBeCreated));
  };

  finishTask = (id: string) => {
    const docRef = doc(this.firestore, `tasks/${id}`);

    return from(updateDoc(docRef, { isDone: true }));
  };

  removeTask = (id: string) => {
    const docRef = doc(this.firestore, `tasks/${id}`);

    return from(deleteDoc(docRef));
  };
}
