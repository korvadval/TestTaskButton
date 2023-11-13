import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { ViewerDisabledDirective } from './directives/viewer-disabled/viewer-disabled.directive';

@NgModule({
  declarations: [
    AppComponent,
    ViewerDisabledDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatTooltipModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
