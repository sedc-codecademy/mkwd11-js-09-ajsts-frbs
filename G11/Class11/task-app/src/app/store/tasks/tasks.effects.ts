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

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.CREATE_TASK),
      switchMap(({ description }) =>
        this.taskService
          .createTask(description)
          .pipe(map(() => TaskActions.createTaskSuccess()))
      )
    )
  );

  finishTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.FINISH_TASK),
      switchMap(({ id }) =>
        this.taskService
          .finishTask(id)
          .pipe(map(() => TaskActions.finishTaskSuccess()))
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.DELETE_TASK),
      switchMap(({ id }) =>
        this.taskService
          .removeTask(id)
          .pipe(map(() => TaskActions.deleteTaskSucess()))
      )
    )
  );
}
