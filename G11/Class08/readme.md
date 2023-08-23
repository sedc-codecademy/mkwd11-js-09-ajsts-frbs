# Key Concepts for Angular HTTP Client

## 1. Importing HttpClientModule

To make HTTP requests in Angular, you need to import the `HttpClientModule` in your `AppModule`.

```typescript
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  // ...
})
export class AppModule {}
```

## 2. Making a GET Request

Use the `HttpClient` service to make GET requests. The response is usually in JSON format.

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

getPosts() {
  return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
}
```

## 3. Handling Responses

You can subscribe to the `Observable` returned by the HTTP request to handle the response.

```typescript
this.getPosts().subscribe({
  next: (posts) => {
    console.log(posts);
  },
  error: (error) => {
    console.error(error);
  },
});
```

## 4. Making Other HTTP Requests

Angular's HTTP client supports other HTTP methods like POST, PUT, DELETE, etc.

```typescript
createPost(post: Post) {
  return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
}
```

## 5. Sending Data in Requests

You can send data in the request body using the `post`, `put`, and `patch` methods.

```typescript
const newPost: Post = { title: "New Post", body: "This is a new post." };
this.createPost(newPost).subscribe((response) => {
  console.log(response);
});
```
