import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  providers: [],
  imports: [CommonModule, MaterialModule],
})
export class AuthModule {} // Feature Module
