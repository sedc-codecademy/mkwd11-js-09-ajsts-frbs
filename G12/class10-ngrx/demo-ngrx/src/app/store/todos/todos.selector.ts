import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todos.reducer';

export const selectTodos = (appState: AppState) => appState.todos;

export const selectTodoList = createSelector(
  // The return of the first selector is the argument in the second callback
  selectTodos,
  (todosState: TodoState) => todosState.todos
);

export const selectAreAllTodosFinished = createSelector(
  selectTodos,
  (state: TodoState) => state.areAllTodosFinished
);
