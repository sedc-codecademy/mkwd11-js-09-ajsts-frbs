import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly URL = 'https://fakestoreapi.com/products';

  constructor(private readonly http: HttpClient) {}

  getProducts = () => {
    return this.http.get<Product[]>(this.URL);
  };
}
