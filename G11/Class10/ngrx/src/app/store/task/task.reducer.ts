import { Task } from 'src/app/interfaces/task.interface';
import { createReducer, on } from '@ngrx/store';
import { addTask } from './task.actions';

export interface TasksState {
  tasks: Task[];
}

export const initialState: TasksState = {
  tasks: [
    { id: 1, description: 'Learn Ngrx', isDone: false },
    { id: 2, description: 'Learn JS', isDone: true },
  ],
};

export const tasksReducer = createReducer(
  initialState,

  on(addTask, (state, payload) => {
    return {
      ...state,
      tasks: [...state.tasks, payload.task],
    };
  })
);
