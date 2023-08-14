import { Component, DoCheck, OnInit } from '@angular/core';
import { Expenses } from 'src/app/interfaces/expenses.interface';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss'],
})
export class ExpenseDetailsComponent implements OnInit, DoCheck {
  selectedExpense: Expenses | undefined;
  constructor(private readonly expensesService: ExpensesService) {}

  ngOnInit(): void {
    // this.selectedExpense = this.expensesService.getSelectedExpense();

    /**
     * We use this approach, which is highly recommended.
     * The property _selectedExpenses from the service is EventEmmiter
     * When we add/emit new value this subscribe will re-trigger,
     * and will get the new value of the event itself. The value of the callback
     * of the subscribe has the new value of the event, and we assign it to the property
     * this.selectedExpense of this componet which will trigger re-render.
     */
    this.expensesService._selectedExpenses.subscribe((data) => {
      console.log('Expenses from subribed emmiter is:', data);

      this.selectedExpense = data;
    });
  }

  /**
   * using ngDoCheck can give you a way to observe changes and react to them
   * it's worth noting that relying solely on ngDoCheck for detecting changes in your data is not always the most efficient or recommended approach.
   * using techniques like observables or event emitters (our last example) can provide more predictable and efficient ways to handle changes in your application's state.
   */
  ngDoCheck(): void {
    console.log('DO CHECK');

    // We used this approach when selectedExpense from service was plain property
    // Since we add new reference to that property and not mutating the existing reference
    // Angular will detect the change but won't re-render
    // That's why we assign new value to this.selectedExpense of this component
    // So we will trigger re-render
    console.log(
      'NEWLY SELECTED VALUE IN EXPENSES DETAILS IS:'
      // this.expensesService.getSelectedExpense()
    );

    // this.selectedExpense = this.expensesService.getSelectedExpense();
  }
}
