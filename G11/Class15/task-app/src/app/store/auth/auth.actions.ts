import { createAction, props } from '@ngrx/store';

// REGISTER
export const REGISTER_USER = '[User] Register';
export const REGISTER_USER_SUCCESS = '[User] Register Success';
export const REGISTER_USER_FAILED = '[User] Register Failed';
// LOGIN
export const LOGIN_USER = '[User] Login';
export const LOGIN_USER_SUCCESS = '[User] Login Success';
export const LOGIN_USER_FAILED = '[User] Login Failed';
// AUTHENTICATED
export const SET_AUTHENTICATED = '[User] Authenticated';
export const SET_UNAUTHENTICATED = '[User] Unauthenticated';

//REGISTER
export const registerUser = createAction(
  REGISTER_USER,
  props<{
    email: string;
    password: string;
  }>()
);
export const registerUserSuccess = createAction(REGISTER_USER_SUCCESS);
export const registerUserFailed = createAction(
  REGISTER_USER_FAILED,
  props<{ error: string }>()
);

//LOGIN
export const loginUser = createAction(
  LOGIN_USER,
  props<{ email: string; password: string }>()
);
export const loginUserSuccess = createAction(LOGIN_USER_SUCCESS);
export const loginUserFailed = createAction(
  LOGIN_USER_FAILED,
  props<{ error: string }>()
);

//AUTHENTICATED
export const setAuthenticated = createAction(SET_AUTHENTICATED);
export const setUnauthenticated = createAction(SET_UNAUTHENTICATED);
