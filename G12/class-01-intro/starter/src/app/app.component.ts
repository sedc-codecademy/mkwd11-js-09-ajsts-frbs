import { Component } from '@angular/core';
import { Person } from './interfaces/person.interface';

enum Courses {
  REACT = 'React',
  ANGULAR = 'Angular',
}

@Component({
  selector: 'app-root', //This is the selector or html tags we use to add this component in another template ( html file )
  templateUrl: './app.component.html', // This is the url to the template file (html) that we use to connect to the component
  styleUrls: ['./app.component.scss'], //This are links to scss files that we connect to the component
})
export class AppComponent {
  // Only properties of the component class can be read and shown in the template
  title = 'Welcome to Angular G12!';
  description = 'The angular course will be 15 classes long';

  person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
    country: 'USA',
  };

  imgSrc =
    'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36';

  isBtnDisabled = true;

  currentCourse = Courses.REACT;

  inputValue = '';

  printPersonFullName() {
    return `The person's full name is: ${this.person.firstName} ${this.person.lastName}`;
  }

  printFullName(firstName: string, lastName: string) {
    return `Full name: ${firstName} ${lastName}`;
  }

  onBtnClick() {
    // Intro to change detection, wheenver a property in the class changes that is referenced in the template, the template is always updated in the view
    this.title = 'It has changed, OH MY GOD!';
    this.person.firstName = 'Chad';
    console.log("I can't believe the btn was clicked");
  }

  onChangeCourse() {
    this.currentCourse =
      this.currentCourse === Courses.ANGULAR
        ? (this.currentCourse = Courses.REACT)
        : (this.currentCourse = Courses.ANGULAR);
  }

  onInputChange(event: Event, test: string) {
    console.log(test);
    // !AVOID USING ANY AS A TYPE LIKE THE PLAGUE OF 1256
    const target = event.target as HTMLInputElement; //We tell typescript that the target is an input element hence why we won't get errors such as ".value doesn't exist"

    this.inputValue = target.value;
  }
}
