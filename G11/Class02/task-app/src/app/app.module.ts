import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskShadowDirective } from './directives/task-shadow.directive';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [AppComponent, TasksListComponent, TaskShadowDirective, AddTaskComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
