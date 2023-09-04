import { createAction, props } from '@ngrx/store';

// 1. Add todo
export const addTodo = createAction(
  `[Todos] Add Todo`,
  props<{
    todoText: string;
  }>()
);

// 2. Finish todo
export const finishTodo = createAction(
  '[Todos] Finish Todo',
  props<{ todoId: string }>()
);

// 3. Remove todo
export const removeTodo = createAction(
  `[Todos] Remove Todo`,
  props<{ todoId: string }>()
);
