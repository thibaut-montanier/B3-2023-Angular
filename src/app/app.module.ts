import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TennisPlayerComponent } from './tennis-player/tennis-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './route-views/accueil/accueil.component';
import { BonjourComponent } from './route-views/bonjour/bonjour.component';
import { WeatherComponent } from './route-views/weather/weather.component';
@NgModule({
  declarations: [
    AppComponent,
    TennisPlayerComponent,
    AccueilComponent,
    BonjourComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
