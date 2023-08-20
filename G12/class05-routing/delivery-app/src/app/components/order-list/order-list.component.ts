import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders: Order[];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getOrders();

    // We need to fetch the orders here
    this.ordersService.ordersEmitter.subscribe((value) => {
      this.orders = value;
    });
  }

  onOrderClick(order: Order) {
    this.ordersService.onOrderSelect(order);
  }
}
