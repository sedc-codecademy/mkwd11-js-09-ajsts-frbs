import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NewPost, Post, UpdatePost } from '../interfaces/post.interface';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  constructor(private http: HttpClient) {}

  // 1. Get posts
  getAllPosts(): Observable<Post[]> {
    return this.http.get(POSTS_URL).pipe(map((data) => data as Post[]));
  }

  // 2. Add post
  createNewPost(newPost: NewPost): Observable<Post> {
    return this.http.post(POSTS_URL, newPost).pipe(map((data) => data as Post));
  }

  // 3. Update post
  updatePost(updatePost: UpdatePost, postId: number): Observable<Post> {
    return this.http
      .patch(`${POSTS_URL}/${postId}`, updatePost)
      .pipe(map((data) => data as Post));
  }
}
