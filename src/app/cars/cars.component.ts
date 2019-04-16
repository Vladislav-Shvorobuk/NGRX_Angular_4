import { Component, Input, Output } from '@angular/core';
import { Car } from '../car.model';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { DeleteCar, UpdateCar } from '../redux/cars.action';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  @Input() car: Car

  constructor(private carsService: CarsService){}

  onDelete(){
    this.carsService.deleteCar(this.car);
  }

  onBuy(){
    this.car.isSold = true;
    this.carsService.updateCar(this.car);
  }

}
