import { TennisPlayer } from './../model/tennis-player';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TennisPlayerService {

  constructor() {
  }

  private _isAdding = false;
  /**
   * Indique si le systeme est en ajout ou en modification
   * @param value
   */
  setIsAdding(value: boolean){
    this._isAdding = value;
  }


  private _playersList : TennisPlayer[] = [];
  addPlayer(player: TennisPlayer){
    if (this._isAdding) {
      this._playersList.push(player);
    }
  }
  public  getPlayers() : TennisPlayer[] {
    return this._playersList;
  }
}
