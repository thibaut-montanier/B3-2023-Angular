import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TennisPlayersService } from 'src/app/services/tennis-players.service';

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.scss']
})
export class BonjourComponent {


  public nom = '';
  public constructor(private _activeRoute: ActivatedRoute, private _tennisPlayerService: TennisPlayersService) {

  }

  public getCountTennisPlayers(){
    return this._tennisPlayerService.getPlayersCount();
  }

  ngOnInit(){
    // la gestion de l'observabe n'est pas propre
    // nous verrons ça plus tard quand nous traiterons des communication http
    // c'est suffisant pour le moment
    this._activeRoute.paramMap.subscribe(r=>{
      this.nom = r.get('nom') ?? '';
    });
  }
}
