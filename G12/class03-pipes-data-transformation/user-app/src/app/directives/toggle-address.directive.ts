import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleAddress]',
})
export class ToggleAddressDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('click') onClick() {
    console.log(this.elRef.nativeElement);
    console.log('address container clicked');
    // Vanilla javascript starts here
    this.elRef.nativeElement
      .querySelector('.address-details')
      .classList.toggle('hide');
  }
}
