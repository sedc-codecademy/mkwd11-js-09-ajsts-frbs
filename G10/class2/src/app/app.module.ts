import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetComponent } from './pet/pet.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { FormsModule } from '@angular/forms';
import { PetCountComponent } from './pet-count/pet-count.component';
import { AppHoverShadowDirective } from './directives/hover-shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    PetComponent,
    PetFormComponent,
    PetCountComponent,
    AppHoverShadowDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
