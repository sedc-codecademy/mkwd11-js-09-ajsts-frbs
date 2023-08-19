import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-observables-subjects',
  templateUrl: './observables-subjects.component.html',
  styleUrls: ['./observables-subjects.component.scss'],
})
export class ObservablesSubjectsComponent {
  productInput = '';
  constructor(private readonly basketService: BasketService) {}

  setProduct = () => {
    if (!this.productInput) return;
    // this adds to string observable (subject)
    this.basketService.setProduct(this.productInput);
    // this adds to array string observable (subject)
    this.basketService.addProducts(this.productInput);
    this.productInput = '';
  };
}
