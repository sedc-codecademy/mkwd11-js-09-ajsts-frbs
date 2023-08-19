import { Component, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';

interface MovieDetail {
  name: string;
  raiting: number;
}

@Component({
  selector: 'app-observables-operators',
  templateUrl: './observables-operators.component.html',
  styleUrls: ['./observables-operators.component.scss'],
})
export class ObservablesOperatorsComponent implements OnInit {
  moviesListObservable = new Observable<MovieDetail>((observer) => {
    observer.next({ name: 'The Dark Knight', raiting: 3 });
    observer.next({ name: 'Barbie', raiting: 2 });
    observer.next({ name: 'Need for Speed', raiting: 2 });
    observer.next({ name: 'The fast and furious', raiting: 1 });
    observer.next({ name: 'The Shawshank Redemtion', raiting: 5 });
    observer.next({ name: 'Forest Gump', raiting: 5 });
  });

  ngOnInit(): void {
    // this.moviesListObservable.subscribe((data) => {
    //   if (data.raiting > 2) {
    //     // Log of the whole object that satisfies this condition
    //     console.log(data);

    //     // We return only the name of the movie and not the whole object
    //     console.log(data.name);
    //   }
    // });

    // IMPLEMENTING RXJS OPERATOR

    this.moviesListObservable
      .pipe(
        filter((data) => {
          return data.raiting > 2;
        })
      )
      .subscribe((movie) => {
        console.log(movie);
      });
  }
}
