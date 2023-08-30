import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', loadChildren: () => import('./features/movies/movies.module')
  .then(m => m.MoviesModule), canActivate: [AuthGuard]},  // The AuthGuard returns true or false based on the value from the currentUser$ from the AuthService
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
