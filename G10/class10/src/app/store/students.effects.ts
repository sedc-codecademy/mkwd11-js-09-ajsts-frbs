import { SearchFilters } from './../interfaces/search-filters.interface';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StudentsService } from '../services/students.service';
import {
  addStudent,
  addStudentFailure,
  addStudentSuccess,
  deleteStudent,
  deleteStudentFailure,
  deleteStudentSuccess,
  getStudents,
  getStudentsFailure,
  getStudentsSuccess,
  gradeStudent,
  gradeStudentFailure,
  gradeStudentSuccess,
  updateStudent,
  updateStudentFailure,
  updateStudentSuccess,
} from './students.actions';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Student } from '../interfaces/student.interface';

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

  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStudent),
      switchMap(({ student }: { student: Student }) =>
        this.studentsService.addStudent(student)
      ),
      map(() => addStudentSuccess()),
      catchError((error) => of(addStudentFailure({ error: error.message })))
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStudent),
      tap(({ student }: { student: Student }) =>
        this.studentsService.updateStudent(student)
      ),
      map(() => updateStudentSuccess()),
      catchError((error) => of(updateStudentFailure({ error: error.message })))
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStudent),
      switchMap(({ id }: { id: string }) =>
        this.studentsService.deleteStudent(id)
      ),
      map(() => deleteStudentSuccess()),
      catchError((error) => of(deleteStudentFailure({ error: error.message })))
    )
  );

  gradeStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gradeStudent),
      tap(({ studentId, grade }: { studentId: string; grade: number }) =>
        this.studentsService.gradeStudent(studentId, grade)
      ),
      map(() => gradeStudentSuccess()),
      catchError((error) => of(gradeStudentFailure({ error: error.message })))
    )
  );
}
