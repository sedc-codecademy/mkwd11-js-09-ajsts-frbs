import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[];
  totalLikes = 0;

  moviesEmitter = new EventEmitter<Movie[]>();
  selectedMovieEmitter = new EventEmitter<Movie>();
  likesEmitter = new EventEmitter<number>();

  constructor(private router: Router) {
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

  getMovieById(id: number) {
    fetch(`https://movie-reviews-api-o633.onrender.com/movies/${id}`)
      .then((res) => res.json())
      .then((value) => {
        this.selectedMovieEmitter.emit(value);
      })
      .catch((err) => {
        this.router.navigate(['not-found']);
        console.log(err);
      });
  }

  logTime(component: string) {
    console.log(
      `The time is: ${new Date()} and it was logged from component: ${component}`
    );
  }

  addLike(selectedMovie: Movie) {
    this.totalLikes++;
    this.likesEmitter.emit(this.totalLikes);

    this.movies.forEach((movie) => {
      if (movie.id === selectedMovie.id) {
        movie.likeCount++;
        return;
      }
    });

    this.moviesEmitter.emit(this.movies);
  }
}
