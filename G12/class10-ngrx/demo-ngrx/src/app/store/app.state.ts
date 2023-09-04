import { ActionReducerMap } from '@ngrx/store';
import { TodoState, todosReducer } from './todos/todos.reducer';
import { PostState as PostState, postsReducer } from './posts/posts.reducer';

export interface AppState {
  todos: TodoState;
  posts: PostState;
}

// ActioReducerMap is a type that combines all reducers into the single store
export const appReducer: ActionReducerMap<AppState> = {
  todos: todosReducer,
  posts: postsReducer,
};
