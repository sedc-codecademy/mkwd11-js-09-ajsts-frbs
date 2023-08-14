import { Component, Input } from '@angular/core';
import { Expenses } from 'src/app/interfaces/expenses.interface';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent {
  @Input()
  expense: Expenses;
}
