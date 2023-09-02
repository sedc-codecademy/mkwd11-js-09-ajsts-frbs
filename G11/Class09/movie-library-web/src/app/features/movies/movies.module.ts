import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.module';
// import { MovieService } from './services/movie.service';
// import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieCardComponent,
    AddMovieComponent
  ],
  // providers: [MovieService], another way of declaring services
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // SharedModule // another way of importing services
    MoviesRoutingModule
  ],
  
})
export class MoviesModule { }
