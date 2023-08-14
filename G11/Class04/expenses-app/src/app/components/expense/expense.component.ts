import { Component, Input } from '@angular/core';
import { Expenses } from 'src/app/interfaces/expenses.interface';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent {
  @Input()
  expense: Expenses;

  constructor(private readonly expensesService: ExpensesService) {}

  onSelectExpense = (expense: Expenses) => {
    this.expensesService.setSelectedExpense(expense);
  };
}
