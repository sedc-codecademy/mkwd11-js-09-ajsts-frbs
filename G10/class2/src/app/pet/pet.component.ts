import { IPet } from './../interfaces/pet.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent {
  // @Input() pet: IPet = null
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() color: string = '';
  @Input() hasOwner: boolean = false;
  @Output() onPetRemove: EventEmitter<number> = new EventEmitter<number>();

  removePet() {
    console.log('Pet to be removed', this.id);

    this.onPetRemove.emit(this.id);
  }
}
