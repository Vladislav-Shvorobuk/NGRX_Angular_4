import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Car } from '../car.model';
import { AppState } from '../redux/app.state';
import { AddCar } from '../redux/cars.action';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent implements OnInit {

  private id: number = 2;

  carName: string = ''
  carModel: string = ''

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
  }

  onAdd () {
     if(this.carModel === '' || this.carName === '') return;

     this.id = ++this.id;

     const car = new Car(
       this.carName,
       moment().format('DD.MM.YY'),
       this.carModel,
       false,
       this.id 
     );

     this._store.dispatch(new AddCar(car))
    //  this.addCar.emit(car);
     this.carModel = '';
     this.carName = '';
  }

  onLoad () {
     //todo
  }

}
