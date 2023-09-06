import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { omit } from '@ngrx/store/src/utils';
import { NewPost, Post, UpdatePost } from 'src/app/interfaces/post.interface';
import { AppState } from 'src/app/store/app.state';
import {
  addPost,
  fetchPosts,
  updatePost,
} from 'src/app/store/posts/posts.actions';
import { selectPostList } from 'src/app/store/posts/posts.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  private store = inject(Store<AppState>);

  posts$ = this.store.select(selectPostList);

  postForm: FormGroup;

  isEdit = false;

  editPostId: number;

  ngOnInit() {
    this.initForm();

    this.store.dispatch(fetchPosts());
  }

  initForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
    });
  }

  onFormSubmit() {
    if (this.postForm.invalid) return;

    // Add a post here
    const newPost: NewPost = {
      ...this.postForm.value,
      userId: 1,
    };

    if (!this.isEdit) {
      this.store.dispatch(addPost({ newPost }));
    }

    if (this.isEdit) {
      const updateData: UpdatePost = { ...this.postForm.value };

      this.store.dispatch(updatePost({ updateData, postId: this.editPostId }));

      this.editPostId = null;
      this.isEdit = false;
    }
  }

  onPostEdit(post: Post) {
    this.isEdit = true;
    this.editPostId = post.id;

    this.postForm.setValue({
      title: post.title,
      body: post.body,
    });
  }
}
