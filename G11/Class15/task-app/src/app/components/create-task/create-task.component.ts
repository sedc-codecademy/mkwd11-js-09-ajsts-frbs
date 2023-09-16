import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { createTask } from 'src/app/store/tasks/tasks.actions';
import { selectIsCreating } from 'src/app/store/tasks/tasks.selectors';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  description = '';

  isCreating: boolean;
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectIsCreating).subscribe((isTaskCreating) => {
      this.isCreating = isTaskCreating;
    });
  }

  createTask = () => {
    console.log('Description value is:', this.description);

    this.store.dispatch(createTask({ description: this.description }));
    this.description = '';
  };
}
