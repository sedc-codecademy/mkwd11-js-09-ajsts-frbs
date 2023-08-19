import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesSubjectsComponent } from './components/observables-subjects/observables-subjects.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { ObservablesOperatorsComponent } from './components/observables-operators/observables-operators.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesSubjectsComponent,
    ObservablesComponent,
    ObservablesOperatorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
