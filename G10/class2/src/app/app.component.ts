import { Component } from '@angular/core';
import { IPet, PetType } from './interfaces/pet.interface';

@Component({
  selector: 'app-root',
  // template: `<h1>Directly from the component</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'class1';
  pets: IPet[] = [
    {
      id: 1,
      name: 'Boem',
      type: PetType.dog,
      color: 'yellow',
      age: 5,
      hasOwner: true,
    },
    {
      id: 2,
      name: 'Galen',
      type: PetType.dog,
      color: 'blue',
      age: 6,
      hasOwner: true,
    },
    {
      id: 3,
      name: 'Sharko',
      type: PetType.dog,
      color: 'green',
      age: 6,
      hasOwner: false,
    },
  ];

  onInputChange(event: any) {
    console.log('input changed', event.target.value);

    this.title = event.target.value;
  }
}
