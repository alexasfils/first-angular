//ROUTING

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './componenti/signup/signup.component';
import { SigninComponent } from './componenti/signin/signin.component';

export const routes: Routes = [
  //metto i phath per spostarmi da una pagina all'altra
  //sull se non metto niente nell path allora mi sposto su homepage
  { path: '', pathMatch:'full', redirectTo: 'homepage' },
  { path: 'homepage', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'about', component: AboutComponent},
  {//dico che posso accedere ai contatti solo se AuthGuard = true;
    path: 'contatti', component: ContactComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
      { path: ':id', component: ContattoComponent }
    ]},
  { path: '404', component: NotfoundComponent },
  // metto ** per dire che la qualsiasi cosa che non ho qui nei path mo lo reinderizzi alla pagina 404
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
