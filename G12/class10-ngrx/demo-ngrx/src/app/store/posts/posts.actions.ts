import { createAction, props } from '@ngrx/store';
import { NewPost, Post, UpdatePost } from 'src/app/interfaces/post.interface';

// 1. fetchPosts - when we call the backend for the posts
export const fetchPosts = createAction('[Posts] Fetch Posts');

// 2. fetchPostsSuccess - when we recieve the data from the backend
export const fetchPostsSuccess = createAction(
  `[Posts] Fetch Posts Success`,
  props<{ posts: Post[] }>()
);

// 3. postsError - when we recieve a backend error
export const postsError = createAction(
  `[Posts] Posts Error`,
  props<{ error: string }>()
);

// 4. addPost - when we call the backend for adding a post
export const addPost = createAction(
  `[Posts] Add Post`,
  props<{ newPost: NewPost }>()
);

// 5. addPostSuccess - when the backend successfully adds a post and we recieve the response
export const addPostSuccess = createAction(
  `[Posts] Add Post Success`,
  props<{ post: Post }>()
);

// 6. updatePost - when we call the backend for updating a post
export const updatePost = createAction(
  `[Posts] Update Post`,
  props<{ updateData: UpdatePost; postId: number }>()
);

// 7. updatePostSuccess - when the backend updates a post successfully
export const updatePostSuccess = createAction(
  `[Posts] Update Post Success`,
  props<{ updatedPost: Post }>()
);
