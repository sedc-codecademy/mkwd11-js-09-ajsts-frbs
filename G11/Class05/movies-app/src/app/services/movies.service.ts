import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MOVIES_DATA } from '../mock-data/movies';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private readonly router: Router
  ) { }

  private _movies: Movie[] = MOVIES_DATA;

  _selectedMovie = new EventEmitter<Movie>()

  getMovies(): Movie[] {
    return this._movies;
  }

  getMoviesById(id: number): Movie | undefined {
    const foundMovie = this._movies.find(movie => movie.id === id);
    if(!foundMovie) {
      this.router.navigate(['not-found'])
    }
    return foundMovie;
  }

  setSelectedMovie(movie: Movie) : void {
    this._selectedMovie.emit(movie);
  }

}
