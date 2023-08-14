export type Currency = 'USD' | 'EUR' | 'MKD';

export interface Expenses {
  id: number;
  description: string;
  amount: number;
  date: Date;
  category: string;
  currency: Currency;
}
