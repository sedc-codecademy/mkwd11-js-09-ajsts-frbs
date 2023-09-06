import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post.interface';
import {
  addPostSuccess,
  fetchPosts,
  fetchPostsSuccess,
  postsError,
  updatePostSuccess,
} from './posts.actions';

export enum PostStatus {
  PENDING = 'pending',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PostState {
  posts: Post[];
  status: PostStatus;
  error: string | null;
}

export const initialState: PostState = {
  posts: [],
  error: null,
  status: PostStatus.PENDING,
};

export const postsReducer = createReducer(
  initialState,
  on(fetchPosts, (state) => ({ ...state, status: PostStatus.LOADING })),
  on(fetchPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    status: PostStatus.SUCCESS,
  })),
  on(postsError, (state, { error }) => {
    return { ...state, error, status: PostStatus.ERROR };
  }),
  on(addPostSuccess, (state, { post }) => {
    return { ...state, posts: [...state.posts, post] };
  }),
  on(updatePostSuccess, (state, { updatedPost }) => {
    return {
      ...state,
      posts: state.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      ),
    };
  })
);
