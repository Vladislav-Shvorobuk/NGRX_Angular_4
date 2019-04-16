import { Component } from '@angular/core';
import { ICars, Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'NgrxAngular4';
  public cars: Car[] = []

  onAdd(car: Car) {
    this.cars.push(car);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(item => item.id !== car.id );
  }
}




