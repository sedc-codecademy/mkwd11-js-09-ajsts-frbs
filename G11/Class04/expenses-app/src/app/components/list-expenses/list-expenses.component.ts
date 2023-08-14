import { Component, DoCheck, OnInit } from '@angular/core';
import { Expenses } from 'src/app/interfaces/expenses.interface';
import { ExpensesService } from 'src/app/services/expenses.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.scss'],
})
export class ListExpensesComponent implements OnInit, DoCheck {
  // loggerService: LoggerService = new LoggerService();

  expenses: Expenses[] = [];

  constructor(
    private readonly loggerService: LoggerService,
    private readonly expensesService: ExpensesService
  ) {}

  ngOnInit(): void {
    this.loggerService.logMessage('List Expenses component.');

    console.log('Total amount is:', this.expensesService.getTotalAmmount());

    this.expenses = this.expensesService.getExpenses();
  }

  ngDoCheck(): void {
    console.log('LIST EXPENSES:', this.expensesService.getExpenses());

    // this.expenses = this.expensesService.getExpenses();
  }
}
