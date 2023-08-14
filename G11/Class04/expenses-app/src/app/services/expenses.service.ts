import { Injectable } from '@angular/core';
import { Currency, Expenses } from '../interfaces/expenses.interface';
import { EXPENSES_DATA } from '../data/expenses.data';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private _totalAmmount = 1000;
  private _expenses: Expenses[] = EXPENSES_DATA;

  constructor() {}

  getTotalAmmount = () => {
    return this._totalAmmount;
  };

  getExpenses = () => {
    return this._expenses;
  };

  createExpense = (
    description: string,
    ammount: string,
    currency: string,
    category: string
  ) => {
    const expense: Expenses = {
      id: Date.now(),
      description: description,
      amount: Number(ammount),
      date: new Date(),
      category: category,
      currency: currency as Currency,
    };

    this._expenses.push(expense);
  };
}
