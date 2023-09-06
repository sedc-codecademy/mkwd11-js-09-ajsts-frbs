import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsApiService } from 'src/app/services/posts-api.service';
import {
  addPost,
  addPostSuccess,
  fetchPosts,
  fetchPostsSuccess,
  postsError,
  updatePost,
  updatePostSuccess,
} from './posts.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class PostsEffects {
  constructor(
    private postsApiService: PostsApiService,
    private actions$: Actions
  ) {}

  fetchPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPosts),
      switchMap(() => {
        return this.postsApiService.getAllPosts().pipe(
          map((posts) => fetchPostsSuccess({ posts })),
          catchError((error) => of(postsError({ error })))
        );
      })
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPost),
      switchMap(({ newPost }) => {
        return this.postsApiService.createNewPost(newPost).pipe(
          map((post) => addPostSuccess({ post })),
          catchError((error) => of(postsError({ error })))
        );
      })
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePost),
      switchMap(({ updateData, postId }) => {
        return this.postsApiService.updatePost(updateData, postId).pipe(
          map((updatedPost) => updatePostSuccess({ updatedPost })),
          catchError((error) => of(postsError({ error })))
        );
      })
    )
  );
}
