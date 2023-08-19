import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketService } from './services/basket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  product: string = '';

  products: string[] = [];

  constructor(private readonly basketService: BasketService) {}

  basketSubscription: Subscription;
  basketListSubscription: Subscription;

  ngOnInit(): void {
    this.basketSubscription = this.basketService.product.subscribe((data) => {
      console.log('Subscribed to data of product: ', data);
      this.product = data;
    });

    this.basketListSubscription = this.basketService.products.subscribe(
      (data) => {
        this.products = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.basketSubscription.unsubscribe();
    this.basketListSubscription.unsubscribe();
  }
}
