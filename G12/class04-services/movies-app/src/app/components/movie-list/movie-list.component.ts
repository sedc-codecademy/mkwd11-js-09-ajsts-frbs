import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { LoggerService } from 'src/app/services/logger.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  // TODO use whatever means possible to get the movies from the service to be loaded here
  movies: Movie[] = [];

  // Original way of injecting dependecies in angular ( see movie-details for alternative )
  constructor(
    private moviesService: MoviesService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies();

    this.moviesService.moviesEmitter.subscribe((value) => {
      console.log(value);
      this.movies = value;
    });

    this.loggerService.logTime('Movie List');
  }

  onMovieClick(movie: Movie) {
    this.moviesService.onMovieSelect(movie);
  }
}
