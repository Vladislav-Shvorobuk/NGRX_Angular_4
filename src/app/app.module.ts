import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarsComponent } from './cars/cars.component';
import { carsReducer } from './redux/cars.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({carPage: carsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
