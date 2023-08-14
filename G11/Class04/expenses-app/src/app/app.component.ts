import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // loggerService: LoggerService = new LoggerService();

  /**
   * private readonly
   * @param loggerService
   *
   * Asking for instance for LoggerService from the DI Mechanism
   */
  constructor(private readonly loggerService: LoggerService) {
    console.log('CONSTRUCTOR');
  }

  ngOnInit(): void {
    this.loggerService.logMessage('App component');
  }
}
