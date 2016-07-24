import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})

export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output()
  public clickOutside = new EventEmitter();

  @HostListener('document: click', [ '$event.target' ])
  public onClick(targetElement) {
    const clickedElement = this._elementRef.nativeElement.contains(targetElement);
    if(!clickedElement) this.clickOutside.emit(null);
  }
}
