import { Todo } from 'src/app/interfaces/todo.interface';
import { createReducer, on } from '@ngrx/store';
import { addTodo, finishTodo, removeTodo } from './todos.actions';
import { v4 as uuid } from 'uuid';

export interface TodoState {
  todos: Todo[];
  areAllTodosFinished: boolean;
}

export const initialState: TodoState = {
  todos: [
    {
      id: '94d1849b-5abf-4463-af27-327ad37b387a',
      text: 'Learn about ngrx',
      isFinished: false,
    },
    {
      id: '4870b323-7d77-40cf-b57a-ac4ff7b9e8db',
      text: "Don't be confused about ngrx",
      isFinished: false,
    },
    {
      id: '5eaee9d3-6f62-49a8-9bb2-02b44e42f3f4',
      text: 'Start liking ngrx',
      isFinished: true,
    },
  ],
  areAllTodosFinished: false,
};

export const todosReducer = createReducer(
  initialState,
  // 1. Add todo
  on(addTodo, (state, { todoText }) => {
    const newTodo: Todo = {
      text: todoText,
      isFinished: false,
      id: uuid(),
    };

    return {
      ...state,
      todos: [...state.todos, newTodo],
    };
  }),
  // 2. Finish todo
  on(finishTodo, (state, { todoId }) => {
    return {
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isFinished: true };
        }
        return todo;
      }),
    };
  }),
  // 3. Remove todo
  on(removeTodo, (state, { todoId }) => {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== todoId),
    };
  })
);
