import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { OhayoconComponent } from './ohayocon/ohayocon.component';
import { MadScientistComponent } from './mad-scientist/mad-scientist.component';
import { CharacterComponent } from './character/character.component';
import { Ohayocon1Component } from './ohayocon1/ohayocon1.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'mad-scientist',
    component: MadScientistComponent
  },
  {
    path: 'ohayocon',
    component: OhayoconComponent
  },
  {
    path: 'ohayocon/:character/:id',
    component: Ohayocon1Component
  },
  {
    path: 'details/:id',
    component: QuestionDetailsComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
