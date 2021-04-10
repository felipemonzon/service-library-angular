import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home-routes';

import { WelcomeComponent } from '../welcome/welcome.component';
import { BookRetrieveComponent } from '../books/book-retrieve/book-retrieve.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    BookRetrieveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
