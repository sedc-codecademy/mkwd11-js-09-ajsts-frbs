import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieRequestBody } from 'src/app/interface/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  createMovieForm: FormGroup;

  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () => {
    this.createMovieForm = new FormGroup({
      movieName: new FormControl(''),
      movieGenre: new FormControl(''),
      movieDirector: new FormControl(''),
      movieCoverImageUrl: new FormControl(''),
    });
  };

  onSubmit = () => {
    console.log('Submitting the form');

    console.log(this.createMovieForm.value);

    const { movieName, movieGenre, movieDirector, movieCoverImageUrl } =
      this.createMovieForm.value;

    const movieCreationProps: MovieRequestBody = {
      name: movieName,
      genre: movieGenre,
      director: movieDirector,
      imageUrl: movieCoverImageUrl,
    };

    this.movieService.createMovie(movieCreationProps);

    this.createMovieForm.reset();
  };
}
