import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  hidePassword: boolean = true;
  showLoginForm: boolean = true;

  constructor(private authService: AuthService) {}

  authForm = new FormGroup({
    name: new FormControl<string>(
      '',
      !this.showLoginForm ? Validators.required : undefined
    ),
    email: new FormControl<string>(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl<string>('', Validators.required),
  });

  onSubmit() {
    console.log(this.authForm.value);

    const { name, email, password } = this.authForm.value;

    if (!email || !password || !name) {
      return;
    }

    this.authService.register(email, password, name);
  }
}
