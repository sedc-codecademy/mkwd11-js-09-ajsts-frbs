import { createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/interfaces/task.interface';
import * as TaskActions from './tasks.actions';

export interface TasksState {
  tasks: Task[];
  isCreating: boolean;
}

export const initialState: TasksState = {
  tasks: [],
  isCreating: false,
};

export const reducer = createReducer(
  // this reducer will work with this state
  initialState,
  // this reducer will 'listen' to this action
  on(TaskActions.fetchTasksSuccess, (state, payload) => {
    return {
      ...state,
      //payload.tasks is acually the tasks props we assigned when we created the action
      tasks: payload.tasks,
    };
  }),

  on(TaskActions.createTask, (state) => {
    return {
      ...state,
      isCreating: true,
    };
  }),

  on(TaskActions.createTaskSuccess, (state) => {
    return {
      ...state,
      isCreating: false,
    };
  })
);
