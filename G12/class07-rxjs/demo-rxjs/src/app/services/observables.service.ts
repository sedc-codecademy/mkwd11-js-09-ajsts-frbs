import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

const fruits = ['Apple', 'Pear', 'Orange', 'Grape', 'Banana'];

@Injectable({
  providedIn: 'root',
})
export class ObservablesService {
  nameArray = ['Jack', 'Jill', 'Joe', 'Jerry', 'Jonah'];
  nameSubject$ = new Subject<string[]>();

  fruitsSubject$ = new BehaviorSubject<string[]>(fruits);

  getNames() {
    console.log('get names called');
    this.nameSubject$.next(this.nameArray);
  }

  addName(name: string) {
    this.nameArray.push(name);
    this.nameSubject$.next(this.nameArray);
  }

  addFruit(fruit: string) {
    const fruits = this.fruitsSubject$.value;

    this.fruitsSubject$.next([...fruits, fruit]);
  }
}
