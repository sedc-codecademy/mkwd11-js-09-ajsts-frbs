import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IPet, PetType } from '../interfaces/pet.interface';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
})
export class PetFormComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
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

  constructor() {
    console.log('[PetFormComponent] constructor');
  }

  ngOnInit(): void {
    console.log(`[PetFormComponent] ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`[PetFormComponent] ngOnChanges`, changes);
  }

  ngDoCheck(): void {
    console.log(`[PetFormComponent] ngDoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`[PetFormComponent] ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`[PetFormComponent] ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`[PetFormComponent] ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`[PetFormComponent] ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`[PetFormComponent] ngOnDestroy`);
  }

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
