import { AppState } from '../app.state';

export const selectTasks = (state: AppState) => state.tasks.tasks;

export const selectIsCreating = (state: AppState) => state.tasks.isCreating;
