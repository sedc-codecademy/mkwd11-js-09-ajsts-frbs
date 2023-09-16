import { ActionReducerMap } from '@ngrx/store';
import { TasksState, reducer as TaskReducer } from './tasks/tasks.reducer';
import { AuthState, reducer as AuthReducer } from './auth/auth.reducers';

export interface AppState {
  tasks: TasksState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: TaskReducer,
  auth: AuthReducer,
};
