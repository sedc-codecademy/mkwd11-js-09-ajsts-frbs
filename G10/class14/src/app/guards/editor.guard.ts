import { Injectable } from '@angular/core';
import { AuthService } from '../components/auth/auth.service';
import { Router } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditorGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.userData$.pipe(
      take(1),
      map((user) => !!user?.roles?.['editor']),
      tap((isEditor) => !isEditor && this.router.navigate(['/dashboard']))
    );
  }
}
