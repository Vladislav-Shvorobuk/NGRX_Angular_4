import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  @Input() car: Car
  @Output() deleteCar = new EventEmitter<Car>()

  onDelete(){
     this.deleteCar.emit(this.car);
  }

  onBuy(){
    this.car.isSold = true;

  }

}
