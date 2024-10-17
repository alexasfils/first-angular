import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { NewProvaComponent } from './new-prova/new-prova.component';
import { ProvaServiceComponent } from './prova-service/prova-service.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contatti/contatti.component';
import { HomeComponent } from './componenti/home/home.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { HighlightDirective } from './direttive/highlight.directive';

import { AppRoutingModule } from './app.routes';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SignupComponent } from './componenti/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    NewProvaComponent,
    HighlightDirective,
    ProvaServiceComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ContattoComponent,
    NotfoundComponent,
    SignupComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatCardModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
    MatSelectModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }