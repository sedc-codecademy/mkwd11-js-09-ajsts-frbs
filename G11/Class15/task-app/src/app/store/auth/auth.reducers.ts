import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  error: '',
};

export const reducer = createReducer(
  initialState,

  // REGISTER USER
  on(AuthActions.registerUser, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(AuthActions.registerUserSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(AuthActions.registerUserFailed, (state, payload) => {
    return {
      ...state,
      error: payload.error,
      isLoading: false,
    };
  }),
  // LOGIN USER
  on(AuthActions.loginUser, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(AuthActions.loginUserSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  // Payload destructured
  on(AuthActions.loginUserFailed, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  // AUTHENTICATED
  on(AuthActions.setAuthenticated, (state) => {
    return {
      ...state,
      isAuthenticated: true,
    };
  }),
  on(AuthActions.setUnauthenticated, (state) => {
    return {
      ...state,
      isAuthenticated: false,
    };
  })
);
