import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
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

  public countTennisPlayers = this._tennisPlayerService.getPlayers().pipe(
    map((d) => { return d.length; } )
  );

  private _paramMapSubscription: Subscription | undefined;

  ngOnInit(){
    this._paramMapSubscription = this._activeRoute.paramMap.subscribe((r) => {
      this.nom = r.get('nom') ?? '';
    });
  }

  ngOnDestroy() {
    this._paramMapSubscription?.unsubscribe();
  }
}
