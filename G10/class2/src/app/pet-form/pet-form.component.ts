import { Component, EventEmitter, Output } from '@angular/core';
import { IPet, PetType } from '../interfaces/pet.interface';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
})
export class PetFormComponent {
  @Output() onPetAdded: EventEmitter<IPet> = new EventEmitter<IPet>();
  name: string = '';
  color: string = '';
  age: number = 0;
  hasOwner: boolean = false;
  type: PetType = PetType.dog;

  //   nameChanged(e: any) {
  //     console.log(e.target.value);
  //     this.name = e.target.value;
  //   }

  onSubmit() {
    const newPet: IPet = {
      id: Date.now(),
      name: this.name,
      color: this.color,
      age: this.age,
      hasOwner: this.hasOwner,
      type: this.type,
    };
    console.log(newPet);
    this.onPetAdded.emit(newPet);
  }
}
