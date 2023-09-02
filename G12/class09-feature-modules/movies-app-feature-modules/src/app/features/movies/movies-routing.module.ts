import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

// When this is loaded the url is already localhost:4200/movies

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  { path: 'add', component: AddMovieComponent },
  { path: 'edit', component: EditMovieComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
