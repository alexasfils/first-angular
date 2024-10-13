import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { ProvaServiceComponent } from './prova-service/prova-service.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';

import { AppRoutingModule } from './app.routes';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NewProvaComponent } from './new-prova/new-prova.component';
import { HighlightDirective } from './direttive/highlight.directive';
import { HomeComponent } from './componenti/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    NewProvaComponent,
    HighlightDirective,
    ProvaServiceComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatCardModule,
      MatButtonModule,
      MatInputModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }