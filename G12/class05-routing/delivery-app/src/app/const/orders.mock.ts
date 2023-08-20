import { Order, OrderStatus } from '../interfaces/order.model';

export const ordersMockData: Order[] = [
  {
    id: 1,
    items: ['Carrots', 'Orange'],
    amount: 13.99,
    status: OrderStatus.PENDING,
    date: '11-12-2023',
    deliverer: 'Boris',
  },
  {
    id: 2,
    items: ['Milk', 'Bread'],
    amount: 14.32,
    status: OrderStatus.PENDING,
    date: '11-13-2023',
    deliverer: 'John',
  },
];
