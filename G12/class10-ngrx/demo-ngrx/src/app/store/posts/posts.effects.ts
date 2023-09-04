import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsApiService } from 'src/app/services/posts-api.service';
import { fetchPosts, fetchPostsSuccess, postsError } from './posts.actions';
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
}
