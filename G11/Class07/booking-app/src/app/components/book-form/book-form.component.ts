import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, AfterViewInit{

  @ViewChild('bookingForm') bookingForm: NgForm
  @ViewChild('email') email: NgModel

  userEmail: string;
  defaultAcommodation: string = 'hotel';


  ngOnInit() {
    console.log(this.bookingForm)
  }

  onFormSubmit(form: NgForm): void {
    console.log(form);
    this.userEmail = this.email.value;
    this.bookingForm.reset();
  }

  ngAfterViewInit() {
    console.log(this.bookingForm);
    console.log(this.email)

  }

}
