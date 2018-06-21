import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    TooltipComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
