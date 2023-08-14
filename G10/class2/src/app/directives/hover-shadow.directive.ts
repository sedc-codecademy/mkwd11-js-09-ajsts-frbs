import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverShadow]',
})
export class AppHoverShadowDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(`[AppHoverShadowDirective] elementRef`, elementRef);
    console.log(`[AppHoverShadowDirective] rendered`, renderer);
  }

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      '0 4px 8px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.32)'
    );
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'none');
  }
}
