import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit{

  constructor(
    private readonly moviesService: MoviesService,
    private readonly router: Router
  ){}

  movies: Movie[] = [];

  selectedMovie: Movie;

  ngOnInit() {
    this.movies = this.moviesService.getMovies();

    this.moviesService._selectedMovie.subscribe(res => {
      this.selectedMovie = res;
    })
  }

  onSelectMovie(movie: Movie) {
    this.moviesService.setSelectedMovie(movie);
    this.router.navigate(['/movies', movie.id]);
  }

}
