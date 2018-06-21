import { Component, Input, Directive, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  @Input() message: string;
  showTooltip: boolean = false;

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyDown($event) {
    this.showTooltip = false;
  }
}

//this piece of functionality is incoplete at teh moment and therefore not used
@Directive({
  selector: '[scrollOverTop]'
})
export class ScrollOverTopDirective {
  @Output('scrolledOver') scrolledOver: EventEmitter<any> = new EventEmitter()
  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      console.log("scrolling...");
  }
}
