import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TaskActions from './tasks.actions';
import { TaskService } from 'src/app/services/task.service';
import { switchMap, map } from 'rxjs';
import { Priority, Task } from 'src/app/interfaces/task.interface';

@Injectable()
export class TasksEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly taskService: TaskService
  ) {}

  fetchTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.FETCH_TASKS),
      switchMap(() =>
        this.taskService.getTask().pipe(
          map((data) => {
            console.log(data);

            const tasks: Task[] = data.map((taskDocument) => {
              return {
                id: taskDocument.id,
                description: taskDocument.description,
                isDone: taskDocument.isDone,
                priority: taskDocument.priority as Priority,
                //taskDocument.createdAt is of type Timestamp from FIRESTORE
                createdAt: taskDocument.createdAt.toDate(),
              };
            });

            return TaskActions.fetchTasksSuccess({ tasks: tasks });
          })
        )
      )
    )
  );
}
