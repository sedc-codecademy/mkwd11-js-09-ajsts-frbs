import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/interfaces/task.interface';
import { addTask } from 'src/app/store/task/task.actions';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  taskDescription: string = '';

  tasksData: Task[];
  // tasks is the key that we used to "register" the reducer in the app module
  constructor(private readonly store: Store<{ tasks: { tasks: Task[] } }>) {}

  ngOnInit(): void {
    this.store.select('tasks').subscribe((value) => {
      console.log(value);
      this.tasksData = value.tasks;
    });
  }

  createTask = () => {
    const newTask: Task = {
      id: Date.now(),
      description: this.taskDescription,
      isDone: false,
    };

    this.store.dispatch(addTask({ task: newTask }));

    this.taskDescription = '';
  };
}
