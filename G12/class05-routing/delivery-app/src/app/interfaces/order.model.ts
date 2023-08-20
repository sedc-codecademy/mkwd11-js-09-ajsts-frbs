export interface Order {
  id: number;
  items: string[];
  amount: number;
  status: OrderStatus;
  date: string;
  deliverer: string;
}

export enum OrderStatus {
  PENDING = 'pending',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}
