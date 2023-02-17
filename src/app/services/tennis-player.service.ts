import { TennisPlayer } from './../model/tennis-player';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TennisPlayerService {

  constructor() {
  }

  private _playersList : TennisPlayer[] = [];
  addPlayer(player: TennisPlayer){
    this._playersList.push(player);
  }
  public  getPlayers() : TennisPlayer[] {
    return this._playersList;
  }
}
