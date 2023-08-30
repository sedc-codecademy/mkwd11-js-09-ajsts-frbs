import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie, MovieRequestBody } from '../interfaces/movie.interface';
import { MovieRepositoryService } from './movie.repository.service';
import { Router } from '@angular/router';


// @Injectable({
//   providedIn: AppModule,
// })
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(
    private readonly moviesRepository: MovieRepositoryService,
    private readonly router: Router
  ) {}

  moviesSubject = new BehaviorSubject<Movie[]>([]);

  selectedMovie = new BehaviorSubject<Movie>({} as Movie);
  // Observable of the BehaviourSubject
  $selectedMovie = this.selectedMovie.asObservable();

  isFetching = new BehaviorSubject<boolean>(false);

  getMovies = () => {
    this.isFetching.next(true);

    this.moviesRepository.getMovies().subscribe({
      next: (data) => {
        this.moviesSubject.next(data);
        this.isFetching.next(false);
      },
      error: (error) => {
        console.log('Error happened:', error);
        this.isFetching.next(false);
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

  deleteMovie = (movieId: string) => {
    this.moviesRepository.deleteMovie(movieId).subscribe({
      next: (responseData) => {
        console.log('Response data: ', responseData);
        this.router.navigate(['/movies']);
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
