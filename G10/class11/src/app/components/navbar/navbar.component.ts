import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { NotificationMessage } from 'src/app/interfaces/notification-message.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  notification: NotificationMessage | null = null;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
    // let count = 1;
    // setInterval(() => {
    //   this.notificationsService.pushNotification(`sega e ${count}`, 'error');
    //   count++;
    // }, 7000);

    this.notificationsService.notification$.subscribe((notification) => {
      console.log(notification);
      this.notification = notification;
    });
  }
}
