import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { HoverShadowDirective } from './directives/hover-shadow.directive';
import { ToggleAddressDirective } from './directives/toggle-address.directive';

@NgModule({
  declarations: [AppComponent, ShortenPipe, FilterPipe, HoverShadowDirective, ToggleAddressDirective],
  // Import FormsModule if you want to use ngModel
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
