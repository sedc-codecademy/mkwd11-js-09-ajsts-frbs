import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product.interface';
import { fetchProductsSuccess } from './product.actions';

export interface ProductsState {
  products: Product[];
}

export const initialState: ProductsState = {
  products: [],
};

export const productsReducer = createReducer(
  initialState,
  on(fetchProductsSuccess, (state, payload) => {
    console.log('PRODUCTS IN REDUCER', payload.products);
    return {
      ...state,
      products: payload.products,
    };
  })
);
