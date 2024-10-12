import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../servizi/servizio-prova.service';

@Component({
  selector: 'app-prova-service',
  templateUrl: './prova-service.component.html',
  styleUrl: './prova-service.component.css'
})
export class ProvaServiceComponent implements OnInit{

  //metto il servizio come parametro nell costruttore, e poi posso usarlo nell componente per chiamare i dati e/o metodo/funzioni
  //in pratica innietto il servizio mettendo la visibilita ad esempio(private) nell costruttore in modo che sare sempre acessiibbili all componente
  constructor(public servizioProva: ServizioProvaService) {
  
}

  ngOnInit(): void {
    console.log("prova-service component: ", this.servizioProva.getPersone());
  }
  

}
