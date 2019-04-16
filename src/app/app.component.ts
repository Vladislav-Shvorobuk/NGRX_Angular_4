import { Component, OnInit } from '@angular/core';
import { Car, Cars } from './car.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  public carsState: Observable<Car[]>

  constructor(private _store: Store<Cars>) {}

  ngOnInit() {
    // this._store.select("carPage").subscribe(({cars}) => {
    //   this.cars = cars;
    // });
    this.carsState = this._store.select("carPage");
  }
}




