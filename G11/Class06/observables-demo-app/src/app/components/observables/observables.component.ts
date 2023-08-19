import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  // *** EXAMPLE 1 ***
  animals: Observable<string[]> = of([
    'Labrador',
    'Persian Cat',
    'Lion',
    'Bear',
    'Fish',
  ]);

  fullName: Observable<string> = of('Bob Bobski');
  animalsFromSubscribe: string[] = [];

  // *** EXAMPLE 2 ***
  movieList = [
    'The Shawshank Redemption',
    'The Godfather',
    'Pulp Fiction',
    'Inception',
    'The Dark Knight',
    'Fight Club',
    'Forrest Gump',
    'The Matrix',
    'Star Wars: Episode IV - A New Hope',
    'Jurassic Park',
    'Top Gun',
    'The Exorcist',
    'Fast and Furious',
  ];

  moviesObservable = new Observable<string>((observer) => {
    // Adding data in the observable with next method
    // observer.next('Interstellar');
    // observer.next('The Godfather');
    // observer.next('The Dark Knight Rises');
    let count = 0;

    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.movieList.length);
      const randomMovie = this.movieList[randomIndex];

      // Each second we add random movie in the observable
      observer.next(randomMovie);

      // if (
      //   randomMovie === 'The Exorcist' ||
      //   randomMovie === 'Fast and Furious'
      // ) {
      //   //Observable throws error and it will stop executing
      //   observer.error('We do not prefer this movie.');
      // }

      // if (count === 5) {
      //   // We complete the observable and it stops executing
      //   observer.complete();
      // }

      count++;
    }, 1000);
  });

  moviesSubscription: Subscription;

  ngOnInit(): void {
    // *** EXAMPLE 1 ***
    console.log('--- EXAMPLE 1 ---');
    console.log(this.fullName);

    // HERE WE SUBSCRIBE TO THE OBSERVABLE this.fullName
    // THAT MAKES US OBSERVERS
    this.fullName.subscribe((data) => {
      console.log(`Data from fullName observable is: ${data}`);
    });

    this.animals.subscribe((dataAnimals) => {
      console.log(dataAnimals);
      this.animalsFromSubscribe = dataAnimals;
    });

    // *** EXAMPLE 2 ***

    console.log('--- EXAMPLE 2 ---');
    // Deprecated for handling error or completion
    // this.moviesObservable.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   // Handling the error
    //   (error) => {
    //     console.log('Error happened: ', error);
    //   }
    // );

    // Newer approch
    this.moviesSubscription = this.moviesObservable.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log('Error happened: ', error);
      },
      complete: () => {
        console.log('Yaay, observable is complete.');
      },
    });

    // We can subscribe multiple times on same obserables
    // Or multiple units can be subscribed to the same ovservable if needed
    // this.moviesObservable.subscribe((data) => {
    //   console.log(data);
    // });
  }

  ngOnDestroy(): void {
    console.log('Component is destroyed');
    console.log('Subscription is about to get unsubscribed');
    this.moviesSubscription.unsubscribe();
  }
}
