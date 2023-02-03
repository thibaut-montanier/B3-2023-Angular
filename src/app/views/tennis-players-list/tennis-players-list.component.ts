import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { TennisPlayer } from 'src/app/model/tennis-player';

@Component({
  selector: 'app-tennis-players-list',
  templateUrl: './tennis-players-list.component.html',
  styleUrls: ['./tennis-players-list.component.scss']
})
export class TennisPlayersListComponent {
  players : TennisPlayer[]=[
     { name: "Sampras", firstName: "Pete"},
     { name: "Forget", firstName: "Guy" },
     { name: "Courier",firstName: "Jim"}
    ]

    selection: TennisPlayer | null = null;

    /**
     * Retourne vrai si le joueur passé en paramètres correspond au joueur sélectionné
     * @param player
     * @returns
     */
    isSelected(player:  TennisPlayer){
      return this.selection?.name == player.name && this.selection?.firstName == player.firstName;
    }
    
    playerClick(player: TennisPlayer){
      if (!this.canValidate()){
        this.isAdding = false;
        this.selection = player;
        this.playerForm.reset();
        this.playerForm.setValue(this.selection!);
      }
    }


    /**
   * Formulaire contenant les champs à modifier pour un joueur de tennis
   */
  playerForm = new FormGroup({
    name: new FormControl(''),
    firstName: new FormControl('')
  });

  canValidate(){
    return this.playerForm.dirty;
  }

  onSubmit() {
    // en cas de sauvegarde, on enregistre les modifications dans le modèle de données
    console.log(this.playerForm.value);
    this.selection!.name = this.playerForm.value.name!;
    this.selection!.firstName = this.playerForm.value.firstName!;
    if (this.isAdding){
      this.players.push(this.selection!);
    }
    this.playerForm.reset();
    this.playerForm.setValue(this.selection!);

  }
  onCancel() {
    this.playerForm.reset();
    this.playerForm.setValue(this.selection!);
  }

  isAdding=false;

  onCreate(){
    this.isAdding = true;
    this.selection = new TennisPlayer();
    this.playerForm.reset();
    this.playerForm.setValue(this.selection!);
  }
}
