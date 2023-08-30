import { Injectable } from '@angular/core';
// import { SharedModule } from '../shared.module';

// If we want the logger service to be available only in the SharedModule
// @Injectable({
//   providedIn: SharedModule
// })
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logComponentName(component: string): void {
    console.log(`Currently in ${component} component. The time is ${new Date()}`);
  }
}
