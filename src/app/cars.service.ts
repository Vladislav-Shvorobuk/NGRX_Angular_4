
import { AppState } from './redux/app.state';
import { Store } from '@ngrx/store';

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoadCars, AddCar, DeleteCar, UpdateCar } from './redux/cars.action';
import { Car } from './car.model';
import { Observable } from 'rxjs';

@Injectable()
export class CarsService {

  static BASE_URL: string = 'http://localhost:3000/'


  constructor(private http: HttpClient , private _store: Store<AppState>){}

  preloadCars(): Observable<Object> {
    return this.http.get(CarsService.BASE_URL + 'cars');
  }

  loadCars(): void {
     this.preloadCars()
      .subscribe((cars: Car[]) => {
         this._store.dispatch(new LoadCars(cars));
      });
  }
  addCar(car: Car){
    this.http.post(CarsService.BASE_URL + 'cars', car)
        .subscribe((car: Car) => {
          this._store.dispatch(new AddCar(car))
    })
  }

  deleteCar(car: Car){
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
        .subscribe( () => {
          this._store.dispatch(new DeleteCar(car))
        });
  }

  updateCar(car: Car){
    this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
        .subscribe( () => {
           this._store.dispatch(new UpdateCar(car));
        });
  }

}