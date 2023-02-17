import { TennisPlayerService } from './../../services/tennis-player.service';
import { TennisPlayer } from './../../model/tennis-player';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tennis-player-form',
  templateUrl: './tennis-player-form.component.html',
  styleUrls: ['./tennis-player-form.component.scss']
})
export class TennisPlayerFormComponent {

  private _selection: TennisPlayer | null  = null;

  @Output() dirtyChanged = new EventEmitter<boolean>();

  @Output() validated = new EventEmitter<boolean>();
  /**
   * On transforme l'input en setter: une fonction pour être informé d'un changement qui a eu lieu au niveau du parent
   */
  @Input() set selection(value:TennisPlayer | null)
  {
    this._selection = value;
    this.playerForm.reset();
    if (value != null){
      this.playerForm.setValue(value!);
    }
  }

  constructor(private _playerService: TennisPlayerService, private _activatedRoute: ActivatedRoute) { }


  private formStatusSubscription: Subscription | null = null;
  ngOnInit(){
    this.formStatusSubscription = this.playerForm.statusChanges.subscribe(()=>{
      this.dirtyChanged.emit(this.playerForm.dirty);
    });
    this._activatedRoute.paramMap.subscribe(v=>{
      this.selection = this._playerService.getPlayer(v?.get('nom'));
      if (this.selection != null){
        this.playerForm.reset();
        this.playerForm.setValue(this.selection!);
      }

    })
  }


  get selection(){
    return this._selection;
  }
  /**
  * Formulaire contenant les champs à modifier pour un joueur de tennis
  */
  playerForm = new FormGroup({
    name: new FormControl(''),
    firstName: new FormControl('')
  });




  ngOnDestroy(){
    if (this.formStatusSubscription != null){
      this.formStatusSubscription.unsubscribe();
    }
  }


  canValidate(){
    return this.playerForm.dirty;
  }

  onSubmit() {
    // en cas de sauvegarde, on enregistre les modifications dans le modèle de données
    console.log(this.playerForm.value);
    this.selection!.name = this.playerForm.value.name!;
    this.selection!.firstName = this.playerForm.value.firstName!;
    this.playerForm.reset();
    this.playerForm.setValue(this.selection!);
    this._playerService!.addPlayer(this.selection!);
    this.validated.emit(true);

  }
  onCancel() {
    this.playerForm.reset();
    this.playerForm.setValue(this.selection!);
  }
}
