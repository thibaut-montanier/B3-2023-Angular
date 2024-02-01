import { Injectable } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TennisPlayersService {


  public constructor(private _httpClient: HttpClient) { }

  private _Players: TennisPlayer[] = [];

  public addPlayer(p: TennisPlayer){
    // il faut gérer les id ici pour faire fonctionner les méthodes d'update et get(id)
    // il faudra le faire via une api http plus tard
    this._Players.push(p);
  }

  public removePlayer(p: TennisPlayer){

  }

  public updatePlayer(p: TennisPlayer){

  }

  public getPlayer(id: number){

  }

  private _players = this._httpClient.get<TennisPlayer[]>('assets/players.json');
  public getPlayers(){
    return this._players;
  }

  public getPlayersCount(){
    return this._Players.length;
  }
}
