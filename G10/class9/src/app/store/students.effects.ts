import { SearchFilters } from './../interfaces/search-filters.interface';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StudentsService } from '../services/students.service';
import {
  getStudents,
  getStudentsFailure,
  getStudentsSuccess,
} from './students.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class StudentsEffects {
  constructor(
    private actions$: Actions,
    private studentsService: StudentsService
  ) {}

  getStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStudents),
      mergeMap(({ filters }: { filters: SearchFilters }) => {
        return this.studentsService.searchStudents(filters).pipe(
          map((students) => getStudentsSuccess({ students })),
          catchError((error) =>
            of(getStudentsFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
