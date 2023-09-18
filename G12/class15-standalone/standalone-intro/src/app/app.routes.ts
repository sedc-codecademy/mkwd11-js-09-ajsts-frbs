import { Routes } from '@angular/router';
import { LoginComponent } from './feature/auth/components/login/login.component';
import { RegisterComponent } from './feature/auth/components/register/register.component';
import { AddMovieComponent } from './feature/movies/components/add-movie/add-movie.component';
import { EditMovieComponent } from './feature/movies/components/edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './feature/movies/components/movie-details/movie-details.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { authGuard, loginGuard } from './core/guards';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [() => loginGuard()],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [() => loginGuard()],
  },
  {
    path: 'movies',
    loadComponent: () =>
      import(
        './feature/movies/components/movie-list/movie-list.component'
      ).then((c) => c.MovieListComponent),
    canActivate: [() => authGuard()],
  },
  {
    path: 'movies/add',
    loadComponent: () =>
      import('./feature/movies/components/add-movie/add-movie.component').then(
        (c) => c.AddMovieComponent
      ),
    canActivate: [() => authGuard()],
  },
  {
    path: 'movies/edit',
    loadComponent: () =>
      import(
        './feature/movies/components/edit-movie/edit-movie.component'
      ).then((c) => c.EditMovieComponent),
    canActivate: [() => authGuard()],
  },
  {
    path: 'movies/details/:id',
    loadComponent: () =>
      import(
        './feature/movies/components/movie-details/movie-details.component'
      ).then((c) => c.MovieDetailsComponent),

    canActivate: [() => authGuard()],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
