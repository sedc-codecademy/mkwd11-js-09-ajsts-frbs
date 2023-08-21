import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from 'src/app/interfaces/register-form.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  email: string;

  registerFormValue: RegisterForm = {
    personalInfo: {
      email: '',
      password: '',
      gender: ''
    },
    cardHolder: '',
    cardNumber: '',
    validUntil: '',
    termsAndConditions: false
  };

  forbiddenEmails: string[] = [
    'test@gmail.com', 
    'test@yahoo.com'
  ]

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = new FormGroup({
      personalInfo: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email, this.forbiddenEmailValidator]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        gender: new FormControl(),
      }),
      cardHolder: new FormControl(),
      cardNumber: new FormControl(),
      validUntil: new FormControl(),
      termsAndConditions: new FormControl(false, Validators.requiredTrue)
    })
  }

  onFormSubmit(): void {
    console.log(this.registerForm);
    this.email = this.registerForm.get('personalInfo.email')?.value;
    console.log(this.email);

    // Assign values to registerFormValue properties
    this.registerFormValue.personalInfo.email = this.registerForm.get('personalInfo.email')?.value;
    this.registerFormValue.personalInfo.password = this.registerForm.get('personalInfo.password')?.value;
    this.registerFormValue.personalInfo.gender = this.registerForm.get('personalInfo.gender')?.value;
    this.registerFormValue.cardHolder = this.registerForm.get('cardHolder')?.value;
    this.registerFormValue.cardNumber = this.registerForm.get('cardNumber')?.value;
    this.registerFormValue.validUntil = this.registerForm.get('validUntil')?.value;
    this.registerFormValue.termsAndConditions = this.registerForm.get('termsAndConditions')?.value;

    console.log(this.registerFormValue)
  }

  // Custom validator
  // If validation fails, return the object with the emailIsForbidden property set to true, otherwise, return null
  forbiddenEmailValidator = (control: FormControl): {[key: string]: boolean} | null => {
    if (this.forbiddenEmails.includes(control.value)) {
      return {emailIsForbidden: true}
    }
    return null;
  }

}
