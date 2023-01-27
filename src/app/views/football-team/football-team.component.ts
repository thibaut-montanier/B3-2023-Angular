import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-football-team',
  templateUrl: './football-team.component.html',
  styleUrls: ['./football-team.component.scss']
})
export class FootballTeamComponent {

  footballTeamName = 'Toto';


  footballTeamFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    coach: new FormControl(''),
    position : new FormControl('', [Validators.required, Validators.min(1)])

  })

  isFormValid(){
    return !this.footballTeamFormGroup.invalid;
  }

  shouldShowError(formControlName: string){
    return this.footballTeamFormGroup.get(formControlName)!.touched &&
       !this.footballTeamFormGroup.get(formControlName)!.valid;
  }
  onSubmit(){
    console.log(this.footballTeamFormGroup.value);
    if ( this.footballTeamFormGroup.value.name != null) {
      this.footballTeamName = this.footballTeamFormGroup.value.name;
    }
  }
}
