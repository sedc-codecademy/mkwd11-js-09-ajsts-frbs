import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule],
  // If you want the parent module to use any of the child module's declartions you have to export them like so
  exports: [HeaderComponent],
})
export class CoreModule {}
