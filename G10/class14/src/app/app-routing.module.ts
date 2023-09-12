import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { EditorGuard } from './guards/editor.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'students',
    component: StudentsListComponent,
    canActivate: [AuthGuard, EditorGuard],
  },
  {
    path: 'students/:id',
    component: StudentDetailsComponent,
    canActivate: [AuthGuard, EditorGuard],
  },
  {
    path: 'form',
    component: StudentFormComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'form/:id',
    component: StudentFormComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  { path: 'login', component: AuthComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
