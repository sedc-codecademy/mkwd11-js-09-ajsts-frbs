import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  // Subject is a special kind of Observable
  // Subject === Observable
  product: Subject<string> = new Subject();

  // products: Subject<string[]> = new Subject();
  products: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);

  constructor() {}

  setProduct = (productName: string) => {
    console.log('Product in setProduct is: ', productName);
    this.product.next(productName);
  };

  addProducts = (productName: string) => {
    const valuesUpUntilNow = this.products.getValue();
    console.log('Values up until now:', valuesUpUntilNow);
    this.products.next([...valuesUpUntilNow, productName]);
  };
}
