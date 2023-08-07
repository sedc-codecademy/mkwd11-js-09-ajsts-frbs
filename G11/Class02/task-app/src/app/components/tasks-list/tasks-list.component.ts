import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  DoCheck,
  AfterViewInit,
} from '@angular/core';
import { TaskStatus } from 'src/app/interfaces/task-status.enum';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit
{
  @Input()
  tasks_list: Task[] = [];
  showTasks = true;

  // This event emmitter,  will emit value of type number
  @Output() taskIdToStart = new EventEmitter<number>();
  // This event emmitter,  will emit value of type number
  @Output() taskIdToFinish = new EventEmitter<number>();
  // This event emmitter,  will emit value of type Task
  @Output() finishedTaskToEmit = new EventEmitter<Task>();

  private _GREEN = 'green';
  private _ORANGE = 'orange';
  private _RED = 'red';

  toggleShowTasks = () => {
    this.showTasks = !this.showTasks;
  };

  cardColor = (task: Task) => {
    if (task.status === TaskStatus.DONE) {
      return { borderColor: this._GREEN };
    }

    if (task.status === TaskStatus.IN_PROGRESS) {
      return { borderColor: this._ORANGE };
    }

    if (task.status === TaskStatus.NOT_STARTED) {
      return { borderColor: this._RED };
    }

    return { borderColor: 'inherit' };
  };

  startTask = (taskId: number) => {
    this.taskIdToStart.emit(taskId);
  };

  endTask = (taskId: number) => {
    this.taskIdToFinish.emit(taskId);
  };

  emitFinishedTask = (task: Task) => {
    this.finishedTaskToEmit.emit(task);
  };

  ngOnInit(): void {
    console.log('NG ON INIT');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NG ON CHANGES');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('NG ON DESTROY');
  }

  ngDoCheck(): void {
    console.log('NG DO CHECK');
  }

  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW INIT');
  }
}
