import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectIsAuthenticated } from 'src/app/store/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private readonly store: Store<AppState>) {}

  canActivate() {
    return this.store.select(selectIsAuthenticated).pipe(take(1));
  }
}
