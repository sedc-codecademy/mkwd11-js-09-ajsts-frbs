import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post.interface';
import { fetchPosts, fetchPostsSuccess } from './posts.actions';

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
  }))
);
