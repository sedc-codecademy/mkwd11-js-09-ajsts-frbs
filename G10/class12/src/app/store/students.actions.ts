import { createAction, props } from '@ngrx/store';
import { SearchFilters } from '../interfaces/search-filters.interface';
import { Student } from '../interfaces/student.interface';

export const getStudents = createAction(
  '[Students] Get students',
  props<{ filters: SearchFilters }>()
);

export const getStudentsSuccess = createAction(
  '[Students] Get students success',
  props<{ students: Student[] }>()
);

export const getStudentsFailure = createAction(
  '[Students] Get students error',
  props<{ error: string }>()
);

export const addStudent = createAction(
  '[Students] Add student',
  props<{ student: Student }>()
);

export const addStudentSuccess = createAction('[Students] Add student success');

export const addStudentFailure = createAction(
  '[Students] Add student error',
  props<{ error: string }>()
);

export const updateStudent = createAction(
  '[Students] Update student',
  props<{ student: Student }>()
);

export const updateStudentSuccess = createAction(
  '[Students] Update student success'
);

export const updateStudentFailure = createAction(
  '[Students] Update student error',
  props<{ error: string }>()
);

export const deleteStudent = createAction(
  '[Students] Delete student',
  props<{ id: string }>()
);

export const deleteStudentSuccess = createAction(
  '[Students] Delete student success'
);

export const deleteStudentFailure = createAction(
  '[Students] Delete student error',
  props<{ error: string }>()
);

export const gradeStudent = createAction(
  '[Students] Add student grade',
  props<{ studentId: string; grade: number }>()
);

export const gradeStudentSuccess = createAction(
  '[Students] Add student grade success'
);

export const gradeStudentFailure = createAction(
  '[Student] Add student grade error',
  props<{ error: string }>()
);
