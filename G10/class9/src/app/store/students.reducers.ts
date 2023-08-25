import { filter } from 'rxjs';
import { reducers } from './../reducers/index';
import { StudentsState } from '../interfaces/student-state.interface';
import { createReducer, on } from '@ngrx/store';
import { getStudents } from './students.actions';

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
  }))
);
