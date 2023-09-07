import { NotificationsService } from 'src/app/services/notifications.service';
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
    private studentsService: StudentsService,
    private notificationsService: NotificationsService
  ) {}

  getStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStudents),
      mergeMap(({ filters }: { filters: SearchFilters }) => {
        return this.studentsService.searchStudents(filters).pipe(
          map((students) => getStudentsSuccess({ students })),
          catchError((error) => {
            this.notificationsService.pushNotification(
              error?.message || 'Error while fetching students',
              'error'
            );
            return of(getStudentsFailure({ error: error.message }));
          })
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
      tap(() =>
        this.notificationsService.pushNotification(
          'Student added successfully',
          'success'
        )
      ),
      map(() => addStudentSuccess()),
      catchError((error) => {
        this.notificationsService.pushNotification(
          error?.message || 'Error while adding student',
          'error'
        );
        return of(addStudentFailure({ error: error.message }));
      })
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStudent),
      switchMap(({ student }: { student: Student }) =>
        this.studentsService.updateStudent(student)
      ),
      tap(() =>
        this.notificationsService.pushNotification(
          'Student updated successfully',
          'success'
        )
      ),
      map(() => updateStudentSuccess()),
      catchError((error) => {
        this.notificationsService.pushNotification(
          error?.message || 'Error while updating student',
          'error'
        );

        return of(updateStudentFailure({ error: error.message }));
      })
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStudent),
      switchMap(({ id }: { id: string }) =>
        this.studentsService.deleteStudent(id)
      ),
      tap(() =>
        this.notificationsService.pushNotification(
          'Student deleted successfully',
          'success'
        )
      ),
      map(() => deleteStudentSuccess()),
      catchError((error) => {
        this.notificationsService.pushNotification(
          error?.message || 'Error while deleting student',
          'error'
        );

        return of(deleteStudentFailure({ error: error.message }));
      })
    )
  );

  gradeStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gradeStudent),
      switchMap(({ studentId, grade }: { studentId: string; grade: number }) =>
        this.studentsService.gradeStudent(studentId, grade)
      ),
      tap(() =>
        this.notificationsService.pushNotification(
          'Grade added successfully',
          'success'
        )
      ),
      map(() => gradeStudentSuccess()),
      catchError((error) => {
        this.notificationsService.pushNotification(
          error?.message || 'Error while adding grade',
          'error'
        );
        return of(gradeStudentFailure({ error: error.message }));
      })
    )
  );
}
