import { Injectable } from '@angular/core';

//Servoce inniettabile che sara inniettato all interno di vari componnenti
@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  stringa = "ciao pippo";

  persone = [
    {nome: 'pippo', cognome: 'Verdi',eta: 25,isOnline: true},
    {nome: 'Mimmo',cognome: 'Neri',eta: 20,isOnline: false},
    {nome: 'Ciro',cognome: 'Gialli',eta: 35,isOnline: true},
    {nome: 'Leonardo',cognome: 'Crini',eta: 45,isOnline: false},
    {nome: 'Peppe',cognome: 'Ciombo',eta: 27,isOnline: true}
  ]

  constructor() { }

  getPersone() {
    return this.persone
  }

  getPersona(index: number) {
    return this.persone[index]
  }
  getStringa() {
    return this.stringa
  }
}
