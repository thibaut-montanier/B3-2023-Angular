import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { TennisPlayer } from "../Model/tennis-player";
import { TennisPlayersService } from './../services/tennis-players.service';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent {

  public player = new TennisPlayer();


  public constructor(private _tennisPlayerService: TennisPlayersService, private _router: Router){
  }



  public playerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    lastName: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  public onSubmit() {
    this.player = new TennisPlayer();
    this.player.firstName = this.playerForm.value.firstName!;
    this.player.lastName = this.playerForm.value.lastName!;
    this.player.description = this.playerForm.value.description;
    this._tennisPlayerService.addPlayer(this.player);
    this._router.navigateByUrl('bonjour/polo');
  }

  public disBonjourAuJoueur(player: TennisPlayer){
    alert(`salut ${player.firstName}`);
  }

  /**
   *Indique si le control est valide ou non
   * @param controlName
   * @returns
   */
  public shouldShowError(controlName: string){
    return !this.playerForm.get(controlName)!.valid &&
            this.playerForm.get(controlName)!.touched;
  }

  public isLoading = true;

  public readonly players = this._tennisPlayerService.getPlayers().pipe(
      tap((data)=>{ this.isLoading = false})
    );
}
