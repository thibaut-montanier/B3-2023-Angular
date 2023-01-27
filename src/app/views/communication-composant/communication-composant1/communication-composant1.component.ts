import { TennisPlayer } from './../../../model/tennis-player';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-communication-composant1',
  templateUrl: './communication-composant1.component.html',
  styleUrls: ['./communication-composant1.component.scss']
})
export class CommunicationComposant1Component {

  @Input() currentPlayer: TennisPlayer | null = null;



  @Output() currentPlayerChanged = new EventEmitter<TennisPlayer>();


  changePlayer(){
    this.currentPlayerChanged.emit({
      firstName: 'Jimi',
      name: 'Conors'
    })
  }

}
