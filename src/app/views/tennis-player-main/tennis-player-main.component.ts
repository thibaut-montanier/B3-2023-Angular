import { TennisPlayerService } from './../../services/tennis-player.service';
import { TennisPlayer } from './../../model/tennis-player';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tennis-player-main',
  templateUrl: './tennis-player-main.component.html',
  styleUrls: ['./tennis-player-main.component.scss']
})
export class TennisPlayerMainComponent {
  selection: TennisPlayer | null = null;

  public constructor(private _playerService: TennisPlayerService){
  }


  getPlayers(){
    return this._playerService?.getPlayers()!;
  }

  selectionChanged(player: TennisPlayer){
    this._playerService.setIsAdding( false);
    this.selection = player;
  }

  onCreate(){
    this._playerService.setIsAdding(true);
    this.selection = new TennisPlayer();
  }

  isFormDirty = false;
  onDirtyChanged(value : boolean){
    this.isFormDirty=value;
  }

  canValidate(){
    return this.isFormDirty;
  }
}
