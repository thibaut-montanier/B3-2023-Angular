import { Injectable } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TennisPlayersService {


  private _Players: TennisPlayer[] = [];

  public addPlayer(p: TennisPlayer){
    // il faut gérer les id ici pour faire fonctionner les méthodes d'update et get(id)
    this._Players.push(p);
  }

  public removePlayer(p: TennisPlayer){

  }

  public updatePlayer(p: TennisPlayer){

  }

  public getPlayer(id: number){

  }

  public getPlayers(){
    return this._Players;
  }
}
