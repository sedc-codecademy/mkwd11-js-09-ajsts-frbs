import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Output()
  titleToParent: EventEmitter<string> = new EventEmitter<string>();


  @Input()
  todosInChild: string[] = [];

  onTitleSend(value: string): void {
    this.titleToParent.emit(value);
  }

}
