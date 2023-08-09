import { Component } from '@angular/core';
import { Person } from './interfaces/person.interface';
import { employees } from './mock-data/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'company-employees';
  people: Person[] = employees;
  position: string = '';

  companyTitleAsync = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('IT Services & Consulting Corporation')
    }, 1000);
  })
}
