import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),

  on(decrement, (state) => {
    return {
      ...state,
      count: state.count - 1,
    };
  })
);
