import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PRODUCTS_URL } from '../const/core.constants';
import { Observable, map } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  private http = inject(HttpClient);

  fetchProducts(): Observable<Product[]> {
    return this.http.get(PRODUCTS_URL).pipe(map((value) => value as Product[]));
  }
}
