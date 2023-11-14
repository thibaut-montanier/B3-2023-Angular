import { Component } from "@angular/core";
import { TennisPlayer } from "../Model/tennis-player";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent {

  public player = new TennisPlayer();

  public players: TennisPlayer[] = [];
  public playerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    description: new FormControl('')
  });
  public onSubmit() {
    this.player = new TennisPlayer();
    this.player.firstName = this.playerForm.value.firstName!;
    this.player.lastName = this.playerForm.value.lastName!;
    this.player.description = this.playerForm.value.description;
    this.players.push(this.player);
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
}
