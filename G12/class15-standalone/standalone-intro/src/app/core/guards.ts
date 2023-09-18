import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard = (
  router = inject(Router),
  authService = inject(AuthService)
) => {
  if (!authService.currentUser$.value) {
    router.navigate(['login']);
    return false;
  }
  return true;
};

export const loginGuard = (
  router = inject(Router),
  authService = inject(AuthService)
) => {
  if (authService.currentUser$.value) {
    router.navigate(['movies']);
    return false;
  }
  return true;
};
