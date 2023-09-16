import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { registerUser } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () => {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      dateOfBirth: new FormControl(),
      gender: new FormControl(''),
    });
  };

  onSubmit = (): void => {
    const email: string = this.registerForm.get('email')?.value;
    const password: string = this.registerForm.get('password')?.value;

    this.store.dispatch(registerUser({ email: email, password: password }));
  };
}
