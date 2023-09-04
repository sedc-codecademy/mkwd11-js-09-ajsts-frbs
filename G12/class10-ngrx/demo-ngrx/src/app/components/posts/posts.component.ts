import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { omit } from '@ngrx/store/src/utils';
import { AppState } from 'src/app/store/app.state';
import { fetchPosts } from 'src/app/store/posts/posts.actions';
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

    // Edit a post here
  }
}
