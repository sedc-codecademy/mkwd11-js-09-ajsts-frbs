import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AuthComponent],
  providers: [AuthService],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class AuthModule {} // Feature Module
