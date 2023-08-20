import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = 'ccbd7e24c470d62e924851b74fc9dd4c';

  constructor(private http: HttpClient) { }


  getWeatherData(city: string): Observable<any[]> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apiKey}`);
  }

}
