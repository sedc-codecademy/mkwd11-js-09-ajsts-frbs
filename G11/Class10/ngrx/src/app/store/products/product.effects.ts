import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ProductsService } from 'src/app/services/products.service';
import { fetchProducts, fetchProductsSuccess } from './product.actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productsService: ProductsService
  ) {}

  fetchProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchProducts),
      switchMap(() =>
        this.productsService
          .getProducts()
          .pipe(map((products) => fetchProductsSuccess({ products: products })))
      )
    );
  });
}
