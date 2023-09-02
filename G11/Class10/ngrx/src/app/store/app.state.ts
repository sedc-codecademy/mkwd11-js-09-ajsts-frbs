import { ActionReducerMap } from '@ngrx/store';
import { CounterState, counterReducer } from './counter/counter.reducer';
import { TasksState, tasksReducer } from './task/task.reducer';
import { ProductsState, productsReducer } from './products/products.reducer';

export interface AppState {
  counter: CounterState;
  tasks: TasksState;
  products: ProductsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  counter: counterReducer,
  tasks: tasksReducer,
  products: productsReducer,
};
