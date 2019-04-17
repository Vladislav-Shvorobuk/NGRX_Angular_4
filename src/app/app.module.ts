import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarsComponent } from './cars/cars.component';
import { carsReducer } from './redux/cars.reducer';
import { CarsService } from './cars.service';
import { HttpClientModule } from '@angular/common/http';
import { CarsEffect } from './redux/cars.effect';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    EffectsModule.forRoot([CarsEffect]) ,
    StoreModule.forRoot({carPage: carsReducer}),
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: AppComponent
    //   }
    // ]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
