import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit, AfterViewInit {
  // Allows us to read refrences from the template
  @ViewChild('expenseForm') expenseForm: NgForm;
  @ViewChild('titleInput') titleInput: NgModel;

  paymentTypes: string[] = ['cash', 'card'];

  maxCommentLength = 30;
  expenseCommentValue: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('OnInit');

    console.log(this.expenseForm);
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');

    console.log(this.expenseForm);
    console.log(this.titleInput);
  }

  onFormSubmit() {
    if (!this.expenseForm.valid) {
      console.log('Form is invalid, please try again!');
      return;
    }

    console.log('Form is valid, here is the data');
    console.log(this.expenseForm.value);
  }
}
