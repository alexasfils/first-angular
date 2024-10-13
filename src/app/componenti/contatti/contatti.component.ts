import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContactComponent implements OnInit{
  persone: any;

  constructor(private serviceProava: ServizioProvaService) {}

  //prendiamo l'arrey di persone dall servizio servizio-prova
  ngOnInit(): void {
    this.persone = this.serviceProava.getPersone();
  }
  

}
