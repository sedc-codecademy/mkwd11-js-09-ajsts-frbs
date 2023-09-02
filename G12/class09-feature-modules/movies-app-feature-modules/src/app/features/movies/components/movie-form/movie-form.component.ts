import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  @Input() isEdit = false;

  movieForm: FormGroup;
  editMovie: Movie;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.editMovie = this.moviesService.selectedMovieSubject$.value;

    if (this.isEdit && !this.editMovie) this.router.navigate(['movies']);

    this.initForm();
  }

  initForm() {
    if (!this.isEdit) {
      // CREATING BEGINS HERE
      this.movieForm = new FormGroup({
        title: new FormControl('', Validators.required),
        director: new FormControl('', Validators.required),
        year: new FormControl(null, [
          Validators.required,
          Validators.min(1850),
        ]),
        author: new FormControl('', Validators.required),
        rating: new FormControl(null, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        text: new FormControl('', Validators.required),
        genres: new FormControl('', Validators.required),
      });
    } else {
      // EDITING BEGINS HERE

      this.movieForm = new FormGroup({
        title: new FormControl(this.editMovie.title, Validators.required),
        director: new FormControl(this.editMovie.director, Validators.required),
        year: new FormControl(this.editMovie.year, [
          Validators.required,
          Validators.min(1850),
        ]),
        author: new FormControl(this.editMovie.author, Validators.required),
        rating: new FormControl(this.editMovie.rating, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        text: new FormControl(this.editMovie.text, Validators.required),
        genres: new FormControl(this.editMovie.genres, Validators.required),
      });
    }
  }

  onFormSubmit() {
    if (this.movieForm.value.invalid) return;

    const movieData: Movie = this.movieForm.value;

    console.log(movieData);

    // Here we call service methods that will send a post request to the backend
    if (!this.isEdit) {
      this.moviesService.createNewMovie({ ...movieData, likeCount: 0 });
    } else {
      // Call edit method here
      this.moviesService.updateMovie(this.editMovie.id, {
        ...movieData,
        likeCount: this.editMovie.likeCount,
      });
    }
  }

  onFormReset() {
    this.movieForm.reset();
  }
}
