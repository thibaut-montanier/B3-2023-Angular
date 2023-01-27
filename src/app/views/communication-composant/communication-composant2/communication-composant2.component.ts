import { TennisPlayer } from './../../../model/tennis-player';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-communication-composant2',
  templateUrl: './communication-composant2.component.html',
  styleUrls: ['./communication-composant2.component.scss']
})
export class CommunicationComposant2Component {

  @Input() player : TennisPlayer | null= null;
}
