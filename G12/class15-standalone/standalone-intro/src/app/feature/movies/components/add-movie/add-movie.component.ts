import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  imports: [CommonModule, MovieFormComponent],
})
export class AddMovieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
