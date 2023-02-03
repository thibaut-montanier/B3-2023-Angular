import { TennisPlayer } from './../../model/tennis-player';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tennis-player-main',
  templateUrl: './tennis-player-main.component.html',
  styleUrls: ['./tennis-player-main.component.scss']
})
export class TennisPlayerMainComponent {
  players : TennisPlayer[]=[
    { name: "Sampras", firstName: "Pete"},
    { name: "Forget", firstName: "Guy" },
    { name: "Courier",firstName: "Jim"}
  ]

  selection: TennisPlayer | null = null;

  selectionChanged(player: TennisPlayer){
    this.isAdding = false;
    this.selection = player;
    this.playerForm.reset();
    this.playerForm.setValue(this.selection!);
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
