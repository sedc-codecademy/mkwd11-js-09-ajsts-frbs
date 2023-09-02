import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from 'src/app/store/counter/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor(
    private readonly store: Store<{
      counter: { count: number };
    }>
  ) {}
  count: number;

  ngOnInit(): void {
    this.store.select('counter').subscribe((value) => {
      console.log(value);
      this.count = value.count;
    });
  }

  increment = () => {
    this.store.dispatch(increment());
  };

  decrement = () => {
    this.store.dispatch(decrement());
  };
}
