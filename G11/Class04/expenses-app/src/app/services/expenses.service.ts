import { EventEmitter, Injectable } from '@angular/core';
import { Currency, Expenses } from '../interfaces/expenses.interface';
import { EXPENSES_DATA } from '../data/expenses.data';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private _totalAmmount = 1000;
  private _expenses: Expenses[] = EXPENSES_DATA;

  // We used this approach when we apply new reference to this property
  // And to trigger re-render we had to get this value once more in the ngDoCheck
  // private _selectedExpense: Expenses;

  // The recommended approch. _selectedExpenses is event emmiter
  _selectedExpenses = new EventEmitter<Expenses>();

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

  // We used this approach when we apply new reference to this property
  // so we returned the value of the private property
  // getSelectedExpense = () => {
  //   return this._selectedExpense;
  // };

  setSelectedExpense = (expense: Expenses) => {
    console.log('Selected expenses is:', expense);

    // this._selectedExpense = expense;

    // Once we get new value, we emit this new value in the event emmiter
    // Every component that is subscribed to this event emmiter will get
    // the brand new, up-to-date value
    this._selectedExpenses.emit(expense);
  };
}
