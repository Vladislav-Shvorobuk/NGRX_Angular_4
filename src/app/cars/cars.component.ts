import { Component, Input, Output } from '@angular/core';
import { Car } from '../car.model';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { DeleteCar, UpdateCar } from '../redux/cars.action';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  @Input() car: Car

  constructor(private _store: Store<AppState>){}

  onDelete(){
    this._store.dispatch(new DeleteCar(this.car))
  }

  onBuy(){
    this._store.dispatch(new UpdateCar(this.car))
  }

}
