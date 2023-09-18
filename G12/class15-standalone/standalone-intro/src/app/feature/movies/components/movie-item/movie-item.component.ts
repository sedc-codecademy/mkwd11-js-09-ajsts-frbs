import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieItemComponent {
  @Input() movie: Movie;
}
