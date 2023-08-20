import { Component, OnInit } from '@angular/core';
import { Order, OrderStatus } from 'src/app/interfaces/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  selectedOrder: Order;
  orderStatus = OrderStatus;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.selectedOrderEmitter.subscribe((value) => {
      this.selectedOrder = value;
    });
  }

  onStatusChange(status: OrderStatus) {
    console.log('status change', status);
    this.ordersService.updateOrderStatus(this.selectedOrder.id, status);
  }
}
