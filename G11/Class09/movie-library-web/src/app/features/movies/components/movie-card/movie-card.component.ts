import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/features/movies/interfaces/movie.interface';
import { MovieService } from 'src/app/features/movies/services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input()
  movie: Movie;

  constructor(
    private readonly router: Router,
    private readonly movieService: MovieService
  ) {}

  handleNavigate = () => {
    this.router.navigate(['/movies', this.movie.id]);
    this.movieService.setSelectedMovie(this.movie);
  };
}
