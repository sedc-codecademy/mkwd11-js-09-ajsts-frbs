import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRequiredField]',
})
export class RequiredFieldDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setRequiredLabel();
  }

  setRequiredLabel() {
    this.el.nativeElement.innerHTML += `<span style="color: red"> *</span>`;
  }
}
