import { NgModule, isDevMode } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { RequiredFieldDirective } from './directives/required-field.directive';
import { NotificationsService } from './services/notifications.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/students.reducers';
import { StudentsEffects } from './store/students.effects';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './services/countries.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

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
    StudentFormComponent,
    RequiredFieldDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('students', reducer),
    EffectsModule.forFeature([StudentsEffects]),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [StudentsService, NotificationsService, CountriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
