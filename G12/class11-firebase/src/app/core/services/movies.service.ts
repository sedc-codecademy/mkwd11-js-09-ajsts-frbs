import { Injectable } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { MoviesApiService } from './api/movies-api.service';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies$: Observable<Movie[]>;

  selectedMovieSubject$ = new BehaviorSubject<Movie>(null);

  likeSubject$ = new BehaviorSubject<number>(0);

  constructor(private router: Router, private firestore: Firestore) {
    console.log('Movie service created');
  }

  moviesCollection = collection(this.firestore, 'movies');

  // 2. Replace fetch with http methods
  getMovies() {
    this.movies$ = collectionData(this.moviesCollection, {
      idField: 'id',
    }).pipe(
      tap((value) => console.log('movies data', value)),
      map((value) => value as Movie[])
    );
  }

  // 2. Replace fetch with http module
  async getMovieById(id: string) {
    try {
      const docRefrence = doc(this.firestore, 'movies', id);

      const movieSnapshot = await getDoc(docRefrence);

      console.log(movieSnapshot.id);
      console.log(movieSnapshot.data());

      const movie: Movie = {
        id: movieSnapshot.id,
        ...movieSnapshot.data(),
      } as Movie;

      this.selectedMovieSubject$.next(movie);
    } catch (error) {
      console.error(error);
    }
  }

  async createNewMovie(newMovie: Movie) {
    try {
      const docRef = await addDoc(this.moviesCollection, newMovie);

      this.router.navigate(['movies', 'details', docRef.id]);
    } catch (error) {
      console.error(error);
    }
  }

  async updateMovie(id: string, movieData: Partial<Movie>) {
    try {
      const docRef = doc(this.firestore, 'movies', id);

      // Pointer for homework
      await updateDoc(docRef, { ...movieData, likeCount: 300 });

      this.router.navigate(['movies', 'details', docRef.id]);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteMovie(id: string) {
    try {
      const docRef = doc(this.firestore, 'movies', id);

      await deleteDoc(docRef);

      this.router.navigate(['movies']);
    } catch (error) {
      console.error(error);
    }
  }

  onEditMovie() {
    this.router.navigate(['movies', 'edit']);
  }

  addLike(selectedMovie: Movie) {
    this.likeSubject$.next(this.likeSubject$.value + 1);

    // this.movies.forEach((movie) => {
    //   if (movie.id === selectedMovie.id) {
    //     movie.likeCount++;
    //     return;
    //   }
    // });
    // this.moviesSubject$.next(this.movies);
  }
}
