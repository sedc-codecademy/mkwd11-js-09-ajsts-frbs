import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { LoggerService } from 'src/app/core/services/logger.service';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  // Functional way of injecting dependencies in angular
  private moviesService = inject(MoviesService);
  private route = inject(ActivatedRoute);

  selectedMovieSubject$ = this.moviesService.selectedMovieSubject$;

  selectedMovie: Movie;
  movieId: number;

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.params['id']);

    this.moviesService.getMovieById(this.movieId);
  }

  onAddLike() {
    this.moviesService.addLike(this.selectedMovie);
  }

  onEditClick() {
    this.moviesService.onEditMovie();
  }
}
