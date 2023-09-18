import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLink } from '../../models/navbar.model';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private authService = inject(AuthService);

  currentUser$ = this.authService.currentUser$;

  authNavLinks: NavLink[] = [
    {
      url: '/login',
      text: 'Login',
    },
    {
      url: '/register',
      text: 'Register',
    },
  ];

  moviesNavLinks: NavLink[] = [
    {
      url: '/movies',
      text: 'Movies',
    },
    {
      url: '/movies/add',
      text: 'Add',
    },
  ];

  onLogout() {
    this.authService.logoutUser();
  }
}
