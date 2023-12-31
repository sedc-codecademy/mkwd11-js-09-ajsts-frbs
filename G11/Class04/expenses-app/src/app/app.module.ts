import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { LoggerService } from './services/logger.service';
import { FormsModule } from '@angular/forms';
import { ExpenseDetailsComponent } from './components/expense-details/expense-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListExpensesComponent,
    AddExpenseComponent,
    ExpenseComponent,
    ExpenseDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    // LoggerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
