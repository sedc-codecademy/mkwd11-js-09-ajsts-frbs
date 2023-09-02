import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../../../interfaces/movie.interface';
import { Observable, map } from 'rxjs';
import { BASE_URL } from '../../constants/core.constants';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<Movie[]> {
    return this.http
      .get(`${BASE_URL}/movies`)
      .pipe(map((value) => value as Movie[]));
  }

  fetchMovieById(id: number) {
    return this.http
      .get(`${BASE_URL}/movies/${id}`)
      .pipe(map((value) => value as Movie));
  }

  postNewMovie(newMovie: Movie) {
    return this.http
      .post(`${BASE_URL}/movies`, newMovie)
      .pipe(map((value) => value as Movie));
  }

  patchMovie(id: number, movieData: Movie) {
    return this.http
      .patch(`${BASE_URL}/movies/${id}`, movieData)
      .pipe(map((value) => value as Movie));
  }
}
