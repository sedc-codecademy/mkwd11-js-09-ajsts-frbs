import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectTodoList } from 'src/app/store/todos/todos.selector';
import {
  addTodo,
  finishTodo,
  removeTodo,
} from 'src/app/store/todos/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  private store = inject(Store<AppState>);

  todoForm: FormGroup;

  todos$ = this.store.select(selectTodoList);

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.todoForm = new FormGroup({
      todoText: new FormControl('', Validators.required),
    });
  }

  onFormSubmit() {
    if (this.todoForm.invalid) return;

    // Add a todo here
    this.store.dispatch(addTodo({ todoText: this.todoForm.value.todoText }));

    this.todoForm.reset();
  }

  onFinishTodo(todoId: string) {
    this.store.dispatch(finishTodo({ todoId }));
  }

  onRemoveTodo(todoId: string) {
    this.store.dispatch(removeTodo({ todoId }));
  }
}
