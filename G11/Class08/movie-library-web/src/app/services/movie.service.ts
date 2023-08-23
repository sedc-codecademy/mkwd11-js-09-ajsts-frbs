import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private readonly httpClient: HttpClient) {}

  moviesSubject = new BehaviorSubject<Movie[]>([]);

  getMovies = () => {
    this.httpClient
      .get<Movie[]>('http://localhost:3000/movies')
      .subscribe((data) => {
        console.log('Result from requst is: ', data);

        this.moviesSubject.next(data);
      });
  };
}
