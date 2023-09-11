import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/task.service';
import { AppState } from 'src/app/store/app.state';
import {
  deleteTask,
  fetchTasks,
  finishTask,
} from 'src/app/store/tasks/tasks.actions';
import { selectTasks } from 'src/app/store/tasks/tasks.selectors';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'],
})
export class ListTasksComponent implements OnInit {
  constructor(
    private readonly taskService: TaskService,
    private readonly store: Store<AppState>
  ) {}

  tasks: Task[];

  ngOnInit(): void {
    // for demo purpose to see data structore of firestore collection
    // this.taskService.getTask();

    this.store.dispatch(fetchTasks());

    this.store.select(selectTasks).subscribe((tasksFromStore) => {
      this.tasks = tasksFromStore;
    });
  }

  deleteTask = (taskId: string) => {
    this.store.dispatch(deleteTask({ id: taskId }));
  };

  finishTask = (taskId: string) => {
    this.store.dispatch(finishTask({ id: taskId }));
  };
}
