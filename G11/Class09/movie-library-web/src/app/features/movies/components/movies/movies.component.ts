import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/features/movies/interfaces/movie.interface';
import { MovieService } from 'src/app/features/movies/services/movie.service';
import { LoggerService } from 'src/app/shared/services/logger.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(
    private readonly movieService: MovieService,
    private readonly loggerService: LoggerService
    ) {}

  movies: Movie[];
  isFetching: boolean;

  ngOnInit(): void {
    this.loggerService.logComponentName('MoviesComponent')
    this.movieService.getMovies();

    this.movieService.moviesSubject.subscribe({
      next: (moviesResponse) => {
        this.movies = moviesResponse;
      },
    });

    this.movieService.isFetching.subscribe((data) => {
      this.isFetching = data;
    });
  }
}
