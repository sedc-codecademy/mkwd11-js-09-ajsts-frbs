import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentsState } from '../interfaces/student-state.interface';

export const selectFeature = createFeatureSelector<StudentsState>('students');

export const studentsSelector = createSelector(
  selectFeature,
  (state: StudentsState) => state.students
);
