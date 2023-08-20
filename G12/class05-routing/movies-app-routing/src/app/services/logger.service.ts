import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logTime(component: string) {
    console.log(
      `The time is: ${new Date()} and it was logged from component: ${component}`
    );
  }
}
