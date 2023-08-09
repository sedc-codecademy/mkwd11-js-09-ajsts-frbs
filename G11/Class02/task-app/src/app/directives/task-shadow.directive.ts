import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTaskShadow]',
})
export class TaskShadowDirective {
  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef);
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse Enter Event');

    this.elementRef.nativeElement.style.boxShadow =
      '10px 10px 5px 0px rgba(0,0,0,0.75)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse Enter Leave');
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
}
