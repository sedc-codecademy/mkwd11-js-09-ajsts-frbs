import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/coutnry.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  URL = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  // ['Macedonia', 'Serbia']
  getCountries(): Observable<string[]> {
    return this.http.get<Country[]>(this.URL).pipe(
      map((countries) => countries.map((c) => c.name.common)),
      catchError(() => of([]))
    );
  }

  addCounty(country: any) {
    return this.http.post(this.URL, country);
  }

  updateCountry(country: any) {
    return this.http.put(`${this.URL}/${country.id}`, country);
  }
}
