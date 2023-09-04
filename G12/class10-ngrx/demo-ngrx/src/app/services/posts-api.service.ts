import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../interfaces/post.interface';

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

  // 3. Update post
}
