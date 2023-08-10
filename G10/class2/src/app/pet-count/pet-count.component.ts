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
  ViewChild,
} from '@angular/core';
import { IPet, PetType } from '../interfaces/pet.interface';

@Component({
  selector: 'app-pet-count',
  templateUrl: './pet-count.component.html',
})
export class PetCountComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  @Input() pets: IPet[] = [];
  @ViewChild('petTypeInfo') petTypeInfo: any;
  dogsCount: number = 0;
  catsCount: number = 0;

  constructor() {
    console.log('[PetCountComponent] constructor');
  }

  ngOnInit(): void {
    console.log(`[PetCountComponent] ngOnInit`);
    this.calculatePetsCount();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`[PetCountComponent] ngOnChanges`, changes);

    if (!changes['pets'].firstChange) {
      this.calculatePetsCount();
    }
  }

  ngDoCheck(): void {
    console.log(`[PetCountComponent] ngDoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`[PetCountComponent] ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`[PetCountComponent] ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`[PetCountComponent] ngAfterViewInit`);

    this.petTypeInfo.nativeElement.innerHTML = 'This is some pet info';
  }

  ngAfterViewChecked(): void {
    console.log(`[PetCountComponent] ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`[PetCountComponent] ngOnDestroy`);
  }

  calculatePetsCount() {
    this.dogsCount = this.pets.filter((p) => p.type === PetType.dog).length;
    this.catsCount = this.pets.filter((p) => p.type === PetType.cat).length;
  }
}
