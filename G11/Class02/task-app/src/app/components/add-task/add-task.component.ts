import { Component, EventEmitter, Output } from '@angular/core';
import { TaskStatus } from 'src/app/interfaces/task-status.enum';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Output() taskCreated = new EventEmitter<Task>();

  createTask() {
    const task: Task = {
      id: Date.now(),
      title: 'Dummy Title',
      description: 'Dummy Description',
      status: TaskStatus.NOT_STARTED,
    };

    this.taskCreated.emit(task);
  }
}
