import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TennisPlayer } from 'src/app/model/tennis-player';

@Component({
  selector: 'app-tennis-players-list',
  templateUrl: './tennis-players-list.component.html',
  styleUrls: ['./tennis-players-list.component.scss']
})
export class TennisPlayersListComponent {
  @Input() players: TennisPlayer[]  = [];
  @Input() selection: TennisPlayer | null = null;
  @Input() disabled = false;

  @Output() selectionChanged = new EventEmitter<TennisPlayer>();
  /**
  * Retourne vrai si le joueur passé en paramètres correspond au joueur sélectionné
  * @param player
  * @returns
  */
  isSelected(player:  TennisPlayer){
    return this.selection?.name == player.name && this.selection?.firstName == player.firstName;
  }

  playerClick(player: TennisPlayer){
    if (!this.disabled){
      this.selectionChanged.emit(player);
      // this.isAdding = false;
      // this.selection = player;
      // this.playerForm.reset();
      // this.playerForm.setValue(this.selection!);
    }
  }
}
