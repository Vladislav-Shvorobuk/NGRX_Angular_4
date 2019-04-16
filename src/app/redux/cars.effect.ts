import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CAR_ACTION, AddCar } from './cars.action';
import { switchMap, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';


@Injectable()
export class CarsEffect {

  constructor(private actions$: Actions, private carService: CarsService){}

  @Effect() 
  loadCars = this.actions$.pipe(
    ofType(CAR_ACTION.ADD_CAR),
    switchMap((action: AddCar) => {
      console.log(action); 
      return this.carService.preloadCars();
    }),
    mergeMap((cars: Car[]) => {
      return [
        {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        }
      ]
    })
  )
}