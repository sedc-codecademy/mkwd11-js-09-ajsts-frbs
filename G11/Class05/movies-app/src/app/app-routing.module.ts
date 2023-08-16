import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, // localhost:4200
  {path: 'about', component: AboutComponent}, // localhost:4200/about
  {path: 'movies', component: MoviesListComponent}, // localhost:4200/about
  {path: 'movies/:id', component: MovieDetailsComponent}, // localhost:4200/movies/id
  {path: 'not-found', component: NotFoundComponent}, // localhost:4200/not-found
  {path: '**', component: NotFoundComponent} // localhost:4200/everythingElseExceptDefinedRoutes
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
