import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BookFormComponent } from './components/book-form/book-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'book', component: BookFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
