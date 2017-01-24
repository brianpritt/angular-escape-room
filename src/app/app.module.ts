import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { OhayoconComponent } from './ohayocon/ohayocon.component';
import { MadScientistComponent } from './mad-scientist/mad-scientist.component';
import { CharacterComponent } from './character/character.component';
import { Ohayocon1Component } from './ohayocon1/ohayocon1.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    OhayoconComponent,
    MadScientistComponent,
    CharacterComponent,
    Ohayocon1Component,
    QuestionDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
