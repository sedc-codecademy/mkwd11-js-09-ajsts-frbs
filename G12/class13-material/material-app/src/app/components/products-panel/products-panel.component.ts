import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, filter, take, takeUntil, tap } from 'rxjs';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.scss'],
})
export class ProductsPanelComponent implements OnInit, OnDestroy {
  private productsService = inject(ProductsService);

  private unsubscribe$ = new Subject<void>();

  products: Product[];

  productsLength: number;
  avgPrice: string;

  // products$ = this.productsService.products$.pipe(
  //   tap((value) => {
  //     this.productsLength = value?.length;
  //   })
  // );

  ngOnInit(): void {
    this.productsService.products$
      // Take until will complete the subscription when the observable it's called with will complete
      .pipe(
        filter((value) => !!value),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((value) => {
        this.products = value;
        this.productsLength = value.length;

        this.avgPrice = (
          this.products.reduce((sum, product) => sum + product.price, 0) /
          this.products.length
        ).toFixed(2);
      });

    this.productsService.getProducts();
  }

  ngOnDestroy(): void {
    // THis is used to complete unsubscribe and stop listening to all hot observables
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
