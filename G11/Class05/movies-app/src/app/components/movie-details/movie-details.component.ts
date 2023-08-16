import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private readonly moviesService: MoviesService,
    private readonly route: ActivatedRoute
  ) {}

  selectedMovie: Movie | undefined;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId = +params['id'];
      this.selectedMovie = this.moviesService.getMoviesById(movieId);
    })
  }

}
