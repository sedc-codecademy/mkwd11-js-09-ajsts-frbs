import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: Movie;
  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.$selectedMovie.subscribe((data) => {
      console.log(data);
      this.selectedMovie = data;
    });
  }

  deleteMovie = () => {
    this.movieService.deleteMovie(this.selectedMovie.id);
  };
}
