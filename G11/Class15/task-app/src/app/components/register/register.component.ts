import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

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
    console.log(this.registerForm);
  };
}
