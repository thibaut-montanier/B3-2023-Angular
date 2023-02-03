import { TennisPlayer } from './../../../model/tennis-player';
import { Component } from '@angular/core';

@Component({
  selector: 'app-communication-composant-main',
  templateUrl: './communication-composant-main.component.html',
  styleUrls: ['./communication-composant-main.component.scss']
})
export class CommunicationComposantMainComponent {
  myPlayer : TennisPlayer = {
    firstName: 'Pete',
    name: 'Sampras'
  }

  currentPlayerChanged(player: TennisPlayer){
    this.myPlayer = player;
  }
}
