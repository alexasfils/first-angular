import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from './../../servizi/servizio-prova.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  personaContatto: any;

  constructor(private servise: ServizioProvaService,private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.personaContatto = this.servise.getPersone()[2];
  }




}
