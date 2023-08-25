import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationMessage } from '../interfaces/notification-message.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private notificationData: BehaviorSubject<NotificationMessage | null> =
    new BehaviorSubject<NotificationMessage | null>(null);

  notification$: Observable<NotificationMessage | null> =
    this.notificationData.asObservable();

  private updateNotificationData(notification: NotificationMessage | null) {
    this.notificationData.next(notification);
  }

  pushNotification(message: string, type: 'error' | 'success') {
    this.updateNotificationData({
      message,
      type,
    });

    setTimeout(() => {
      this.updateNotificationData(null);
    }, 2000);
  }
}
