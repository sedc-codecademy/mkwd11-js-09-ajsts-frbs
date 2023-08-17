import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[];
  totalLikes = 0;

  moviesEmitter = new EventEmitter<Movie[]>();
  selectedMovieEmitter = new EventEmitter<Movie>();
  likesEmitter = new EventEmitter<number>();

  constructor() {
    console.log('Movie service created');
  }

  getMovies() {
    fetch('https://movie-reviews-api-o633.onrender.com/movies')
      .then((res) => res.json())
      .then((value: Movie[]) => {
        this.movies = value;
        this.totalLikes = value.reduce((acc, el) => acc + el.likeCount, 0);

        this.moviesEmitter.emit(this.movies);
        this.likesEmitter.emit(this.totalLikes);
      });
  }

  onMovieSelect(movie: Movie) {
    console.log('Selected movie emitted');
    this.selectedMovieEmitter.emit(movie);
  }

  logTime(component: string) {
    console.log(
      `The time is: ${new Date()} and it was logged from component: ${component}`
    );
  }

  addLike(selectedMovie: Movie) {
    this.totalLikes++;
    this.likesEmitter.emit(this.totalLikes);

    // this.movies = this.movies.map((movie) => {
    //   if (movie.id === selectedMovie.id) {
    //     movie.likeCount++;
    //     return movie;
    //   }
    //   return movie;
    // });

    this.movies = this.movies.map((movie) =>
      movie.id === selectedMovie.id
        ? { ...movie, likeCount: movie.likeCount + 1 }
        : movie
    );

    this.moviesEmitter.emit(this.movies);
  }
}
