import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/interfaces/task.interface';

export const FETCH_TASKS = '[Tasks] Fetch Tasks';
export const FETCH_TASKS_SUCCESS = '[Tasks] Fetch Tasks Success';

export const fetchTasks = createAction(FETCH_TASKS);
export const fetchTasksSuccess = createAction(
  FETCH_TASKS_SUCCESS,
  props<{ tasks: Task[] }>()
);
