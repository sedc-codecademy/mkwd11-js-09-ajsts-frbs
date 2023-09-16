import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor (private readonly taskService: TaskService) {}

  numberOfTasks: string;

  ngOnInit(): void {
    this.taskService.getTask().subscribe(res => {
      this.numberOfTasks = res.length.toString();
    })
  }

}
