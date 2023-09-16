import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectIsAuthenticated } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private readonly taskService: TaskService,
    private readonly authService: AuthService,
    private readonly store: Store<AppState>
  ) {}

  numberOfTasks: string;
  isAuth: boolean;
  ngOnInit(): void {
    this.taskService.getTask().subscribe((res) => {
      this.numberOfTasks = res.length.toString();
    });

    this.store.select(selectIsAuthenticated).subscribe((isAuthenticated) => {
      this.isAuth = isAuthenticated;
    });
  }

  logout = async () => {
    await this.authService.logout();
  };
}
