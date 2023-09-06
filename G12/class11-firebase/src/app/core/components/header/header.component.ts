import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../services/api/auth-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  totalLikes = 0;

  currentUser: User;

  constructor(
    private moviesService: MoviesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.moviesService.likeSubject$.subscribe(
      (value) => (this.totalLikes = value)
    );

    this.authService.currentUser$.subscribe((value) => {
      this.currentUser = value;
    });
  }

  onLogout() {
    this.authService.logoutUser();
  }
}
