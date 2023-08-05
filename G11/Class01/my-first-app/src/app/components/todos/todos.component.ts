import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  title: string = 'Todos component';

  greeting: string = 'Hello from todos component';

  titleFromChild: string = '';

  @Output()
  todosFromParent: string[] = ['Write homework', 'Wash the dishes', 'Read a book'];

  onTitleReceive(value: string) :void {
    console.log(value);
    this.titleFromChild = value;
  }

}
