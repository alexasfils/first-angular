import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from './../../servizi/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit{
  id: number;
  personaContatto: any;

  constructor(private serviceProava: ServizioProvaService ,private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = parseInt(params.get('id')!);
    this.personaContatto = this.serviceProava.getPersona(this.id);
    })
  }

}
