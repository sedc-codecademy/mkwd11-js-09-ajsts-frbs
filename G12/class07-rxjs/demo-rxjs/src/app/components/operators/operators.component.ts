import { Component, OnInit } from '@angular/core';
import { filter, from, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  usernames = [
    'Janko',
    'Petko',
    'Stanko',
    'Lazar',
    'Krsto',
    'Stojan',
    'Blazhe',
    'Laste',
    'Ratko',
    'Sveto',
    'Risto',
    'Mile',
    'Boris',
    'Slavko',
    'Stefan',
    'Stamencho',
  ];

  updatedNames: string[];

  usernamesFromObs$ = from(this.usernames);

  // Pipes can be added to observables like this when we subscribe to them using the async pipe
  usernamesOfObs$ = of(this.usernames).pipe(
    map((value) => value.map((name) => name + ' Arsov'))
  );

  constructor() {}

  ngOnInit(): void {
    // Map Operator
    // this.usernamesFromObs$
    //   .pipe(
    //     map((name) => {
    //       return 'borche';
    //     })
    //   )
    //   .subscribe((value) => {
    //     console.log(value);
    //   });
    // Filter
    // this.usernamesFromObs$
    //   .pipe(
    //     filter((name) => {
    //       return name.startsWith('R');
    //     })
    //   )
    //   .subscribe((value) => {
    //     console.log(value);
    //   });
    // Take
    // this.usernamesFromObs$.pipe(take(3)).subscribe((value) => {
    //   console.log(value);
    // });
    // Chaining operators in rxjs
    // this.usernamesFromObs$
    //   .pipe(
    //     filter((name) => name.startsWith('S')),
    //     take(2),
    //     map((name) => name.toUpperCase())
    //   )
    //   .subscribe((value) => console.log(value));
    // Tap
    // this.usernamesFromObs$
    //   .pipe(tap((value) => console.log('In tap', value)))
    //   .subscribe((value) => console.log(value));
  }
}
