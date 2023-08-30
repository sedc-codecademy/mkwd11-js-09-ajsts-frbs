import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieRequestBody } from '../interfaces/movie.interface';
import { MoviesModule } from '../movies.module';


@Injectable({
  providedIn: 'root',
})
// @Injectable({
//   providedIn: MoviesModule,
// })
export class MovieRepositoryService {
  constructor(private readonly httpClient: HttpClient) {}

  private readonly URL = 'http://localhost:3000/movies';

  getMovies = () => {
    return this.httpClient.get<Movie[]>(this.URL);
  };

  createMovie = (movieRequestBody: MovieRequestBody) => {
    return this.httpClient.post(this.URL, movieRequestBody);
  };

  deleteMovie = (movieId: string) => {
    return this.httpClient.delete(`${this.URL}/${movieId}`);
  };
}
