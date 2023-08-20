import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private route = inject(ActivatedRoute);

  selectedMovie: Movie;
  movieId: number;

  ngOnInit(): void {
    this.loggerService.logTime('Movie Details');

    this.movieId = Number(this.route.snapshot.params['id']);

    this.moviesService.getMovieById(this.movieId);

    this.moviesService.selectedMovieEmitter.subscribe((value) => {
      this.selectedMovie = value;
    });
  }

  onAddLike() {
    this.moviesService.addLike(this.selectedMovie);
  }
}
