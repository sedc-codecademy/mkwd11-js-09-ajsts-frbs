import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { fetchProducts } from 'src/app/store/products/product.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchProducts());
  }
}
