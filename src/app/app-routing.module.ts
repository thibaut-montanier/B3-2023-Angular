import { TennisPlayerFormComponent } from './views/tennis-player-form/tennis-player-form.component';
import { TennisPlayerMainComponent } from './views/tennis-player-main/tennis-player-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes =
[
  { path: 'players', component: TennisPlayerMainComponent },
  { path: 'playerform', component: TennisPlayerFormComponent},
  { path: 'player-detail/:nom', component: TennisPlayerFormComponent}
];

@NgModule({
declarations: [],
imports: [
  RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
