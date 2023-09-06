import { StudentsState } from '../interfaces/student-state.interface';
import { createReducer, on } from '@ngrx/store';
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
import { SortDirectionEnum } from '../interfaces/sort.enum';

export const initialState: StudentsState = {
  students: [],
  isLoading: false,
  filters: {
    sortBy: 'name',
    sortDirection: SortDirectionEnum.asc,
  },
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
  })),
  on(addStudent, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(addStudentSuccess, (state, action) => ({
    ...state,
    isLoading: false,
  })),
  on(addStudentFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(updateStudent, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(updateStudentSuccess, (state, action) => ({
    ...state,
    isLoading: false,
  })),
  on(updateStudentFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(deleteStudent, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(deleteStudentSuccess, (state, action) => ({
    ...state,
    isLoading: false,
  })),
  on(deleteStudentFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(gradeStudent, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(gradeStudentSuccess, (state, action) => ({
    ...state,
    isLoading: false,
  })),
  on(gradeStudentFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
