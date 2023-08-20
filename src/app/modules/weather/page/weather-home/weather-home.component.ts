import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { WeatherService } from '../../services/weather.service';
import { WeatherInferface } from 'src/app/models/interfaces/weather-inferface';
import { faMagnifyingGlass,faClose } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName: string = "Brasilia";
  weatherData!: WeatherInferface;
  error: boolean = false;
  searchIcon = faMagnifyingGlass;
  closeIcon = faClose;
  constructor(private weatherService: WeatherService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getWetherData(this.initialCityName);
  }

  getWetherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: any) => {
        res && (this.weatherData = res);

      },
      error: (err: any) => {
        // console.log("erro", err);
        this.error = true;
        // this._snackBar.open(err.error.message, '', {

        //   horizontalPosition: 'center',
        //   verticalPosition: 'top',
        // })
      }
    })
  }

  onSubmit() {
    this.getWetherData(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

  }
}
