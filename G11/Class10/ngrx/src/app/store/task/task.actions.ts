import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/interfaces/task.interface';

export const addTask = createAction('ADD_TASK', props<{ task: Task }>());
