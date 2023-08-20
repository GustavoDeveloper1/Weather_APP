import { Component, Input, OnInit } from '@angular/core';
import { WeatherInferface } from 'src/app/models/interfaces/weather-inferface';
import { faTemperatureLow, faTemperatureHigh, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {

  @Input() weatherDataInput!: WeatherInferface;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
