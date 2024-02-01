import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './route-views/accueil/accueil.component';
import { BonjourComponent } from './route-views/bonjour/bonjour.component';
import { TennisPlayerComponent } from './tennis-player/tennis-player.component';
import { WeatherComponent } from './route-views/weather/weather.component';

const routes: Routes = [
  { path:'', component: AccueilComponent },
  { path:'bonjour/:nom', component: BonjourComponent },
  { path:'tennis-players', component: TennisPlayerComponent },
  { path: 'weather', component: WeatherComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
