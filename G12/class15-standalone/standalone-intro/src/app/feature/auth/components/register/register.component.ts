import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private authService = inject(AuthService);

  registerForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ]),
      },
      this.comparePasswordsValidator
    );
  }

  comparePasswordsValidator = (formGroup: any) => {
    if (
      formGroup.controls.password.value !==
      formGroup.controls.confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }

    return null;
  };

  onFormSubmit() {
    console.log(this.registerForm.value);

    if (this.registerForm.invalid) return;

    const { email, password } = this.registerForm.value;

    // Call backend with form data to register user
    this.authService.registerUser(email, password);
  }
}
