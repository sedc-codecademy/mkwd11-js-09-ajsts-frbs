import { Injectable, inject } from '@angular/core';
import { ProductsApiService } from './products-api.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/products.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsApiServce = inject(ProductsApiService);
  private snackBar = inject(MatSnackBar);

  // Behavior subjects always emit their initial value first
  products$ = new BehaviorSubject<Product[]>(null);

  getProducts() {
    this.productsApiServce.fetchProducts().subscribe({
      next: (value) => {
        this.products$.next(value);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  login(email: string, password: string) {
    console.log(email, password);

    this.snackBar.open(
      `User with email: ${email} logged in successfully!`,
      'Dismiss!',
      {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );
  }
}
