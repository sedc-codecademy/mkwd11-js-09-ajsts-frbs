import { Component, OnInit, inject } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { LoggerService } from 'src/app/services/logger.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  // Functional way of injecting dependencies in angular
  private moviesService = inject(MoviesService);
  private loggerService = inject(LoggerService);

  selectedMovie: Movie;

  ngOnInit(): void {
    this.loggerService.logTime('Movie Details');

    this.moviesService.selectedMovieEmitter.subscribe(
      (value) => (this.selectedMovie = value)
    );
  }

  onAddLike() {
    this.moviesService.addLike(this.selectedMovie);
  }
}
