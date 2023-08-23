import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie, MovieRequestBody } from '../interface/movie.interface';
import { MovieRepositoryService } from './movie.repository.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private readonly moviesRepository: MovieRepositoryService) {}

  moviesSubject = new BehaviorSubject<Movie[]>([]);
  selectedMovie = new BehaviorSubject<Movie>({} as Movie);

  getMovies = () => {
    this.moviesRepository.getMovies().subscribe({
      next: (data) => this.moviesSubject.next(data),
      error: (error) => {
        console.log('Error happened:', error);
        // Logic for handling errors
      },
    });
  };

  createMovie = (movieRequestBody: MovieRequestBody) => {
    this.moviesRepository.createMovie(movieRequestBody).subscribe({
      next: (responseData) => {
        console.log('Response data: ', responseData);
      },
      error: (error) => {
        console.error('Error happened: ', error);
      },
    });
  };

  setSelectedMovie = (movie: Movie) => {
    this.selectedMovie.next(movie);
  };
}
