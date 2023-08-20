import { EventEmitter, Injectable } from '@angular/core';
import { ordersMockData } from '../const/orders.mock';
import { Order, OrderStatus } from '../interfaces/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Order[] = ordersMockData;

  ordersEmitter = new EventEmitter<Order[]>();
  selectedOrderEmitter = new EventEmitter<Order>();

  getOrders() {
    setTimeout(() => {
      this.ordersEmitter.emit(this.orders);
    }, 500);
  }

  onOrderSelect(order: Order) {
    console.log('Order selected with id:', order.id);
    this.selectedOrderEmitter.emit(order);
  }

  updateOrderStatus(orderId: number, newStatus: OrderStatus) {
    // Update this.orders
    this.orders.forEach((order) => {
      if (order.id === orderId) {
        order.status = newStatus;
        return;
      }
    });

    // Emit updated orders
    this.ordersEmitter.emit(this.orders);
  }
}
