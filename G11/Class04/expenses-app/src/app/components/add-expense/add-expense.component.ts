import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {
  constructor(
    private readonly ls: LoggerService,
    private readonly expensesService: ExpensesService
  ) {}

  inputDescription: string = '';
  inputAmmount: string = '';
  inputCategory: string = '';
  inputCurrency: string = '';

  ngOnInit(): void {
    this.ls.logMessage('Add expense component');
    console.log(
      'Total amount from add expense:',
      this.expensesService.getTotalAmmount()
    );
  }

  clearInputs = () => {
    this.inputDescription = '';
    this.inputAmmount = '';
    this.inputCurrency = '';
    this.inputCategory = '';
  };

  addExpense = () => {
    this.expensesService.createExpense(
      this.inputDescription,
      this.inputAmmount,
      this.inputCurrency,
      this.inputCategory
    );

    this.clearInputs();
  };
}
