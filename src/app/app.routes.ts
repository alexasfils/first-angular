//ROUTING

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';

export const routes: Routes = [
  //metto i phath per spostarmi da una pagina all'altra
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contatti', component: ContactComponent,
    children: [{path: ':id', component: ContattoComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
