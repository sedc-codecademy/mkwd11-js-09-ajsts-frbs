import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MoviesApiService } from './movies-api.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  // 1. Replace emitters with subjects
  moviesSubject$ = new BehaviorSubject<Movie[]>(null);

  selectedMovieSubject$ = new BehaviorSubject<Movie>(null);
  likeSubject$ = new BehaviorSubject<number>(0);

  constructor(
    private router: Router,
    private moviesApiService: MoviesApiService
  ) {
    console.log('Movie service created');
  }

  // 2. Replace fetch with http methods
  getMovies() {
    this.moviesApiService.fetchMovies().subscribe({
      next: (value) => {
        console.log('in the http observable', value);
        const totalLikes = value.reduce((acc, el) => acc + el.likeCount, 0);

        this.moviesSubject$.next(value);
        this.likeSubject$.next(totalLikes);
      },
      error: (err) => {
        // If http request errors out we recieve error here
        console.error(err);
      },
      complete: () => {
        console.log('request completed');
      },
    });
  }

  // 2. Replace fetch with http module
  getMovieById(id: number) {
    this.selectedMovieSubject$.next(null);

    this.moviesApiService.fetchMovieById(id).subscribe({
      next: (value) => {
        this.selectedMovieSubject$.next(value);
      },
      error: (err) => {
        this.router.navigate(['not-found']);
        console.error(err);
      },
    });
  }

  createNewMovie(newMovie: Movie) {
    this.moviesApiService.postNewMovie(newMovie).subscribe({
      next: (value) => {
        console.log(value);
        this.router.navigate(['movie-details', value.id]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  updateMovie(id: number, movieData: Movie) {
    this.moviesApiService.patchMovie(id, movieData).subscribe({
      next: (value) => {
        console.log(value);
        this.router.navigate(['movie-details', value.id]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onEditMovie() {
    this.router.navigate(['edit-movie']);
  }

  addLike(selectedMovie: Movie) {
    this.likeSubject$.next(this.likeSubject$.value + 1);

    // this.movies.forEach((movie) => {
    //   if (movie.id === selectedMovie.id) {
    //     movie.likeCount++;
    //     return;
    //   }
    // });
    // this.moviesSubject$.next(this.movies);
  }
}
