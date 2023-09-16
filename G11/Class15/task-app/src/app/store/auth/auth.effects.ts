import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/components/auth/auth.service';
import * as AuthActions from './auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.REGISTER_USER),
      switchMap(({ email, password }) => {
        return this.authService.register(email, password).pipe(
          map((userCredentials) => {
            console.log('Data of register', userCredentials);

            return AuthActions.registerUserSuccess();
          })
        );
      }),
      catchError((error) => {
        console.log(error);

        return of(AuthActions.registerUserFailed({ error: 'Register failed' }));
      })
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_USER),
      switchMap(({ email, password }) => {
        return this.authService.login(email, password).pipe(
          map((userCredentials) => {
            console.log('user:', userCredentials.user);

            this.router.navigate(['/']);
            return AuthActions.loginUserSuccess();
          })
        );
      }),
      catchError((error) => {
        console.log(error);

        return of(AuthActions.loginUserFailed({ error: 'Login Failed' }));
      })
    )
  );
}
