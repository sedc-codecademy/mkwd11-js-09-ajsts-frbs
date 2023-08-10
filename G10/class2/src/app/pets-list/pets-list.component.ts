import { Component, Input } from '@angular/core';
import { IPet } from '../interfaces/pet.interface';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
})
export class PetsListComponent {
  @Input() pets: IPet[] = [];
  inView: string = 'list';

  changeInView(newView: string) {
    console.log(newView);

    this.inView = newView;
  }

  handlePetRemove(id: number) {
    console.log('PARENT remove pet', id);

    this.pets = this.pets.filter((pet) => pet.id !== id);
  }

  handlePetAdd(pet: IPet) {
    console.log('PetListComponent', pet);
    this.pets.push(pet);
    this.changeInView('list');
  }
}
