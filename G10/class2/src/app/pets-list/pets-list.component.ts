import { Component } from '@angular/core';
import { IPet, PetType } from '../interfaces/pet.interface';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
})
export class PetsListComponent {
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

  inView: string = 'list';

  changeInView(newView: string) {
    console.log(newView);

    this.inView = newView;
  }

  handlePetRemove(id: number) {
    console.log('PARENT remove pet', id);

    this.pets = this.pets.filter((pet) => pet.id !== id);
  }
}
