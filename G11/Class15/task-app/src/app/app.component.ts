import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { selectIsLoading } from './store/auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly store: Store<AppState>
  ) {}

  isLoading: boolean;
  ngOnInit(): void {
    this.authService.initAuthListener();

    this.store.select(selectIsLoading).subscribe((isAuthLoading) => {
      this.isLoading = isAuthLoading;
    });
  }
}
