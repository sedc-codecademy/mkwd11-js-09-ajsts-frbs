import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PostState } from './posts.reducer';

export const selectPosts = (appState: AppState) => appState.posts;

export const selectPostList = createSelector(
  selectPosts,
  (postState: PostState) => postState.posts
);
