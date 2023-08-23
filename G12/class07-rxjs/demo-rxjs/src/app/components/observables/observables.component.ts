import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, from, interval, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // From takes an array an emits every event individually
  fromObs$ = from(this.numArray);

  // Of takes in arguments and emits the one by one
  ofObs$ = of(this.numArray, 'borche', 'dani', true, 'mile');

  // Manual observable
  numberEmitterObs$ = new Observable(function subscribe(subscriber) {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.complete();
    subscriber.next(5);
    subscriber.next(6);
  });

  intervalObs$ = interval(1000);

  intervalSubscription: Subscription;

  intervalAsyncObs$ = interval(500);

  constructor() {}

  ngOnInit(): void {
    this.fromObs$.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Observable complete');
      },
    });

    this.ofObs$.subscribe((value) => {
      console.log('Of obs event', value);
    });

    this.numberEmitterObs$.subscribe((value) => {
      console.log('Manual obs', value);
    });

    // If you want to unsubscribe you have to save every Subscription in it's own variable
    this.intervalSubscription = this.intervalObs$.subscribe((value) => {
      console.log('Interval', value);
    });
  }

  ngOnDestroy(): void {
    console.log('on destroy called');
    this.intervalSubscription.unsubscribe();
  }
}
