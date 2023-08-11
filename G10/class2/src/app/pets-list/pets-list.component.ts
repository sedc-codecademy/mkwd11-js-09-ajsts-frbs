import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IPet } from '../interfaces/pet.interface';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
})
export class PetsListComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  @Input() pets: IPet[] = [];
  inView: string = 'list';

  constructor() {
    console.log('[PetsListComponent] constructor');
  }

  ngOnInit(): void {
    console.log(`[PetsListComponent] ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`[PetsListComponent] ngOnChanges`, changes);
  }

  ngDoCheck(): void {
    console.log(`[PetsListComponent] ngDoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`[PetsListComponent] ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`[PetsListComponent] ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`[PetsListComponent] ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`[PetsListComponent] ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`[PetsListComponent] ngOnDestroy`);
  }

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
