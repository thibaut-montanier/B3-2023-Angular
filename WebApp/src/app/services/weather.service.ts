import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _httpClient: HttpClient) { }

  private _getWeather =this._httpClient.get('/api/WeatherForecast');
  public getWeather(){
    return this._getWeather;
  }
}
