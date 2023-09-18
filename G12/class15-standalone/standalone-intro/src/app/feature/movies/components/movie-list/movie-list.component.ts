import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true,
  imports: [CommonModule, MovieItemComponent],
})
export class MovieListComponent implements OnInit {
  private moviesService = inject(MoviesService);
  private router = inject(Router);

  moviesSubject$ = this.moviesService.moviesSubject$;

  ngOnInit(): void {
    this.moviesService.getMovies();
  }

  goToMovieDetails(id: number) {
    this.router.navigate(['movies', 'details', id]);
  }
}
