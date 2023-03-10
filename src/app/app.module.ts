import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TennisPlayerComponent } from './views/tennis-player/tennis-player.component';
import { FootballTeamComponent } from './views/football-team/football-team.component';
import { TennisPlayersListComponent } from './views/tennis-players-list/tennis-players-list.component';
import { CommunicationComposantMainComponent } from './views/communication-composant/communication-composant-main/communication-composant-main.component';
import { CommunicationComposant1Component } from './views/communication-composant/communication-composant1/communication-composant1.component';
import { CommunicationComposant2Component } from './views/communication-composant/communication-composant2/communication-composant2.component';
import { TennisPlayerMainComponent } from './views/tennis-player-main/tennis-player-main.component';
import { TennisPlayerFormComponent } from './views/tennis-player-form/tennis-player-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TennisPlayerComponent,
    FootballTeamComponent,
    TennisPlayersListComponent,
    CommunicationComposantMainComponent,
    CommunicationComposant1Component,
    CommunicationComposant2Component,
    TennisPlayerMainComponent,
    TennisPlayerFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
