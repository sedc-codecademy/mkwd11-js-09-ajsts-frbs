import { Timestamp } from '@angular/fire/firestore';

export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

// For the usage of Firestore
export interface RawFirestoreTask {
  id: string;
  description: string;
  isDone: boolean;
  priority: Priority;
  createdAt: Timestamp;
}

// For the usage in our application
export interface Task {
  id: string;
  description: string;
  isDone: boolean;
  priority: Priority;
  createdAt: Date;
}
