import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressTransform } from './pipes/address-transformer.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { PerformanceTranformPipe } from './pipes/performance-tranform.pipe';
import { FormsModule } from '@angular/forms';
import { PositionFilterPipe } from './pipes/position-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddressTransform,
    ShortenPipe,
    PerformanceTranformPipe,
    PositionFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
