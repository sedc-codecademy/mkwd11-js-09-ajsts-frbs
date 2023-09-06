import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/interfaces/task.interface';

export const FETCH_TASKS = '[Tasks] Fetch Tasks';
export const FETCH_TASKS_SUCCESS = '[Tasks] Fetch Tasks Success';

export const CREATE_TASK = '[Tasks] Create Task';
export const CREATE_TASK_SUCCESS = '[Tasks] Create Task Success';

export const FINISH_TASK = '[Tasks] Finish Task';
export const FINISH_TASK_SUCCESS = '[Tasks] Finish Task Success';

export const DELETE_TASK = '[Tasks] Delete Task';
export const DELETE_TASK_SUCCESS = '[Tasks] Delete Task Sucess';

export const fetchTasks = createAction(FETCH_TASKS);
export const fetchTasksSuccess = createAction(
  FETCH_TASKS_SUCCESS,
  props<{ tasks: Task[] }>()
);

export const createTask = createAction(
  CREATE_TASK,
  props<{ description: string }>()
);
export const createTaskSuccess = createAction(CREATE_TASK_SUCCESS);

export const finishTask = createAction(FINISH_TASK, props<{ id: string }>());
export const finishTaskSuccess = createAction(FINISH_TASK_SUCCESS);

export const deleteTask = createAction(DELETE_TASK, props<{ id: string }>());
export const deleteTaskSucess = createAction(DELETE_TASK_SUCCESS);
