import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [AppComponent, PetsListComponent, PetComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
