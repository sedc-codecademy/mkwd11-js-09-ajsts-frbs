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
