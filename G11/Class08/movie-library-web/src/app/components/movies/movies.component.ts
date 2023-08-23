import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private readonly movieService: MovieService) {}

  movies: Movie[];

  ngOnInit(): void {
    this.movieService.getMovies();

    this.movieService.moviesSubject.subscribe({
      next: (moviesResponse) => {
        this.movies = moviesResponse;
      },
    });
  }
}
