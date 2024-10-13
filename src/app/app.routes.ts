//ROUTING

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';

export const routes: Routes = [
  //metto i phath per spostarmi da una pagina all'altra
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
