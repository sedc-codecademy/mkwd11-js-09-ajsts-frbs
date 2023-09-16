import { AppState } from '../app.state';

export const selectIsAuthenticated = (state: AppState) =>
  state.auth.isAuthenticated;

export const selectIsLoading = (state: AppState) => state.auth.isLoading;

export const selectAuthError = (state: AppState) => state.auth.error;
