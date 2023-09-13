import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Roles, User } from 'src/app/interfaces/user.interface';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
  ],
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css'],
})
export class AdminSettingsComponent implements OnInit {
  users$: Observable<User[]> = new Observable<User[]>();

  userRoleForm = new FormGroup({
    user: new FormControl<User | null>(null, Validators.required),
    admin: new FormControl<boolean>(false, Validators.required),
    editor: new FormControl<boolean>(false, Validators.required),
  });

  private searchText$: Subject<string> = new Subject<string>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.searchText$.pipe(
      debounceTime(666),
      distinctUntilChanged(),
      switchMap((searchText) => this.userService.searchUsers(searchText))
    );
  }

  displayFn(user: User) {
    return user?.name ? user.name : '';
  }

  search(event: any) {
    this.searchText$.next(event.target.value);
  }

  onSubmit() {
    if (!this.userRoleForm.value.user?.uid) {
      return;
    }

    const id = this.userRoleForm.value.user.uid;
    const roles: Roles = {
      admin: !!this.userRoleForm.value.admin,
      editor: !!this.userRoleForm.value.editor,
    };

    this.userService.updateUserRoles(id, roles);
  }
}
