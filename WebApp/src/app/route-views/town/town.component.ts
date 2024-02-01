import { Component } from '@angular/core';
import { TownService } from 'src/app/services/town.service';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.scss']
})
export class TownComponent {
  constructor(private _TownService: TownService){}

  public getWeather(){
    return this._TownService.getTowns();
  }
}
