import { Component } from '@angular/core';
import { Task } from './interfaces/task.interface';
import { TaskStatus } from './interfaces/task-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Task Application';
  subtitle = 'Track your tasks';

  upcoming_tasks = [
    'Go to holiday',
    'Finish Project',
    'Eat gyros',
    'Go to the gym',
    'Watch a movie',
  ];

  tasks: Task[] = [
    {
      id: 1,
      title: 'Walk the dog',
      description: 'Walk the dog in the park today.',
      status: TaskStatus.NOT_STARTED,
    },
    {
      id: 2,
      title: 'Wash the dishes',
      description: 'Put in washing machine',
      status: TaskStatus.NOT_STARTED,
    },
    {
      id: 3,
      title: 'Read 10 pages of a book',
      description: 'Reading is good.',
      status: TaskStatus.DONE,
    },
    {
      id: 4,
      title: 'Learn Angular',
      description: 'Angular is a beast.',
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  onStartTask = (taskId: number) => {
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId && task.status === TaskStatus.NOT_STARTED) {
        return {
          ...task,
          status: TaskStatus.IN_PROGRESS,
        };
      }
      return task;
    });
  };

  onEndTask = (taskId: number) => {
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId && task.status === TaskStatus.IN_PROGRESS) {
        return {
          ...task,
          status: TaskStatus.DONE,
        };
      }
      return task;
    });
  };

  onFinishedTask = (task: Task) => {
    console.log('Task that was finished and emmited is:', task);
  };
}
