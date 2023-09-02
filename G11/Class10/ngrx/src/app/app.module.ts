import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CounterComponent } from './components/counter/counter.component';
import { TaskComponent } from './components/task/task.component';
import { ProductsComponent } from './components/products/products.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { FormsModule } from '@angular/forms';
import { tasksReducer } from './store/task/task.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CounterComponent,
    TaskComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      // counter and tasks keys, are used as select values in the components
      counter: counterReducer,
      tasks: tasksReducer,
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
