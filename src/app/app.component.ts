import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from './servizi/servizio-prova.service';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'corso-angilar2';

  // isVisible = true;
  
  // numero = 3;
  // oggi = Date.now();
  // stringa = 'paperino';

  
  // color = "green";
  // color2 = "red";
//innietto il servizio nell costruttore e stampo a video il valore della stringa che e dentro il service
  constructor(private servizioProva: ServizioProvaService) {
    
  }
  ngOnInit(): void {
    
  }

  
  // onClick() {
  //   this.persone = [
  //   {nome: 'Piero', cognome: 'Verdi',eta: 25,isOnline: true},
  //   {nome: 'Alessandro',cognome: 'Neri',eta: 20,isOnline: false},
  //   {nome: 'Michele',cognome: 'Gialli',eta: 35,isOnline: true},
  //   {nome: 'Leo',cognome: 'Crini',eta: 45,isOnline: false},
  //   {nome: 'Perino',cognome: 'Ciombo',eta: 27,isOnline: true}
  //   ]
  // } 
  
//   onRiceviDati(value: string){
//     console.log(value);
// }
  // onClick(event: Event) {
  //   this.title= 'ho cliccato sull bottone'
  // }

  // onInput(event: Event) {
  //   this.title = (<HTMLInputElement>event.target).value
  //   console.log((<HTMLInputElement>event.target).value)
  
  // }

}