import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.state';
import { TasksEffects } from './store/tasks/tasks.effects';
import { FormsModule } from '@angular/forms';

// It is not good practice to have sensitive data visible
const firebaseConfig = {
  apiKey: 'AIzaSyBmmDbRlkIhxF-I9HnYlL3x5ZGkWvgamC0',
  authDomain: 'task-management-7751e.firebaseapp.com',
  projectId: 'task-management-7751e',
  storageBucket: 'task-management-7751e.appspot.com',
  messagingSenderId: '384256946014',
  appId: '1:384256946014:web:a52796d4e1d1af5e4929cf',
  measurementId: 'G-77N8KB9HDF',
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateTaskComponent,
    ListTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TasksEffects]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
