import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TownService {

  constructor(private _httpClient: HttpClient) { }

  private _getTowns = this._httpClient.get('/api/town');
  public getTowns(){
    return this._getTowns;
  }
}
