import { Expenses } from '../interfaces/expenses.interface';

export const EXPENSES_DATA: Expenses[] = [
  {
    id: 1,
    description: 'Groceries',
    amount: 50.25,
    date: new Date('2023-08-10'),
    category: 'Food',
    currency: 'USD',
  },
  {
    id: 2,
    description: 'Movie Night',
    amount: 15.0,
    date: new Date('2023-08-11'),
    category: 'Entertainment',
    currency: 'USD',
  },
  {
    id: 3,
    description: 'Gasonline',
    amount: 30.0,
    date: new Date('2023-08-10'),
    category: 'Transportation',
    currency: 'USD',
  },
  {
    id: 4,
    description: 'Dinner Out',
    amount: 40.0,
    date: new Date('2023-08-12'),
    category: 'Food',
    currency: 'USD',
  },
  {
    id: 5,
    description: 'Books',
    amount: 26.0,
    date: new Date('2023-08-10'),
    category: 'Education',
    currency: 'USD',
  },
];
