import { StudentsState } from '../interfaces/student-state.interface';
import { createReducer, on } from '@ngrx/store';
import {
  getStudents,
  getStudentsFailure,
  getStudentsSuccess,
} from './students.actions';

export const initialState: StudentsState = {
  students: [],
  isLoading: false,
  filters: {},
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(getStudents, (state, action) => ({
    ...state,
    isLoading: true,
    filters: action.filters,
  })),
  on(getStudentsSuccess, (state, action) => ({
    ...state,
    students: action.students,
    isLoading: false,
    error: '',
  })),
  on(getStudentsFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  }))
);
