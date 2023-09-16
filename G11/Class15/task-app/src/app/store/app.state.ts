import { ActionReducerMap } from '@ngrx/store';
import { TasksState, reducer as TaskReducer } from './tasks/tasks.reducer';

export interface AppState {
  tasks: TasksState;
  /**
   * we can add more states
   */
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: TaskReducer,
};
