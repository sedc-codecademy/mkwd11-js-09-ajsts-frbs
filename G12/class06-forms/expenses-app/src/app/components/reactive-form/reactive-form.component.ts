import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  expenseForm: FormGroup;
  paymentTypes: string[] = ['cash', 'card'];
  maxCommentLength = 30;

  blockedWords: string[] = [
    'money',
    'casino',
    'betting',
    'drugs',
    'french words',
  ];

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.expenseForm = new FormGroup({
      basicData: new FormGroup({
        title: new FormControl('', [
          Validators.required,
          // Pass refrences here to functions, never call them
          this.blockedWordsValidator,
        ]),
        amount: new FormControl(null, [
          Validators.required,
          Validators.min(1),
          Validators.max(500),
        ]),
        date: new FormControl('2023-08-21', Validators.required),
      }),
      priority: new FormControl('medium'),
      comment: new FormControl('', [Validators.maxLength(30)]),
      type: new FormControl('cash'),
    });
  }

  blockedWordsValidator = (
    control: FormControl
    // The type here defines that we can return keys with any value that are strings but the values must be booleans
  ): { [key: string]: boolean } | null => {
    console.log('inside validator', control.value);
    // Custom validators work by returning an object with the error as key and boolean as value if the control is invalid or null if the control is valid

    // {blockedWords: true}
    // {compareValues: true}

    if (this.blockedWords.includes(control.value.toLowerCase())) {
      console.log('inside invalid control block');
      return { wordIsBlocked: true };
    }

    return null;
  };

  onFormSubmit() {
    console.log(this.expenseForm);
  }
}
