import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AboutComponent } from './components/about/about.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  // Add routes here
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
