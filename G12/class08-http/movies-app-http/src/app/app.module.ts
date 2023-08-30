import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    AddMovieComponent,
    MovieFormComponent,
    EditMovieComponent,
  ],
  // TRAINER. Don't forget to import http client module
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
