import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { NotificationMessage } from 'src/app/interfaces/notification-message.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  notification: NotificationMessage | null = null;
  isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  userData$: Observable<User | null> = new Observable<User | null>();

  constructor(
    private notificationsService: NotificationsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.userData$ = this.authService.userData$;

    this.notificationsService.notification$.subscribe((notification) => {
      this.notification = notification;
    });
  }

  logout() {
    this.authService.logout();
  }
}
