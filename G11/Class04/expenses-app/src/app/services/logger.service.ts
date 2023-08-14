import { Injectable } from '@angular/core';

/**
 * @Injecable decorator we can or we may not have it
 * when creating services
 */
@Injectable({
  /**
   * providedIn means that this service
   * will be shared/accessabel across our application
   */
  providedIn: 'root',
})
export class LoggerService {
  message = 'Costum logger service in Angular.';

  logMessage = (message: string) => {
    console.log(`---Logger service: ${message}---`);
  };
}
