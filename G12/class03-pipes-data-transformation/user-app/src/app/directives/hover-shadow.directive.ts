import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverShadow]',
})
export class HoverShadowDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log('directive working');
    console.log(this.elementRef.nativeElement);

    // this.elementRef.nativeElement.style.fontFamily = 'serif';
    // this.elementRef.nativeElement.style.boxShadow =
    //   '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
  }

  @HostListener('mouseenter') onMouseEnter() {
    // console.log('mouse enter event');
    // this.elementRef.nativeElement.style.boxShadow =
    //   '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    // console.log('mouse leave event');
    // this.elementRef.nativeElement.style.boxShadow = 'none';
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'none');
  }
}
