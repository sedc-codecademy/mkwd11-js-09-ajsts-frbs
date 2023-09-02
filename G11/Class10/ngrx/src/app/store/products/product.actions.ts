import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product.interface';

// this action will trigger the effect that makes the HTTP call
export const fetchProducts = createAction('FETCH_PRODUCTS');

// this action will be triggered when the products are fetched
// so the reducer can put them in the state
export const fetchProductsSuccess = createAction(
  'FETCH_PRODUCTS_SUCCESS',
  props<{ products: Product[] }>()
);
