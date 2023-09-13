import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  pricingTiers = ['free', 'premium', 'deluxe', 'enterprise'];

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      pricingTier: new FormControl('free', [Validators.required]),
      gender: new FormControl(null, Validators.required),
      subscribed: new FormControl(false),
    });
  }
}
