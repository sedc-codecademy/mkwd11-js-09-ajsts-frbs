import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AverageGradePipe } from './pipes/average-grade.pipe';
import { GradeColorDirective } from './directives/grade-color.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsService } from './services/students.service';
import { AddGradesComponent } from './components/add-grades/add-grades.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsListComponent,
    AverageGradePipe,
    GradeColorDirective,
    NavbarComponent,
    NotFoundComponent,
    TopSectionComponent,
    StudentDetailsComponent,
    AddGradesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
