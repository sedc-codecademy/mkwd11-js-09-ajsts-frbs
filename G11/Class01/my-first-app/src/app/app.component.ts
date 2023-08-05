import { Component } from '@angular/core';
import { Person } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    console.log("App component is initialized")
  }
  title: string = 'New title';
  name: string = 'Aneta'
  favoriteHobbies: string[] = ['Playing tennis', 'Reading books'];
  myColor: string = 'red';
  imageSource: string = 'https://m.media-amazon.com/images/I/61VlF+ZR6kL._AC_UF1000,1000_QL80_.jpg';

  favoriteFrameworks: string[] = ['Angular', 'React'];
  favoriteFramework: string = 'Angular';

  username: string = 'Jill';
  password: string = 'blabla';

  isDisabled: boolean = false;

  person: Person = {
      firstName: 'Bob',
      lastname: 'Bobsky',
      age: 25,
      hobby: 'Play video games'
    }

    // getFullName(): string {
    //   return `The full name of the person is ${this.person.firstName} ${this.person.lastname}`
    // }

    getFullName(first: string, last: string): string {
      return `The full name of the person is ${first} ${last}`
    }

    onFrameworkChange(): void {
      this.favoriteFramework = this.favoriteFramework === 'React' ?  'Angular' : 'React';
    }

    onUsernameChange (event: Event) :void {
      // console.log(event);
      const target = event.target as HTMLInputElement;
      this.username = target.value;
    }

    onPasswordChange (event: Event): void {
      const target = event.target as HTMLInputElement;
      this.password = target.value;
    }

    
}
