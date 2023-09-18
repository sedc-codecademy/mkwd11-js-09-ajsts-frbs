import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
  standalone: true,
  imports: [CommonModule, MovieFormComponent],
})
export class EditMovieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
