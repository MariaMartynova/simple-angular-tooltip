import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: `[clickOutside]`
})
export class ClickOutsideDirective {
  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  handleClick(targetEl) {
    if (!this.el.nativeElement.contains(targetEl)) {
      this.clickOutside.emit(null);
    }
  }
}
