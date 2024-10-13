import { Injectable } from '@angular/core';

//Servoce inniettabile che sara inniettato all interno di vari componnenti
@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  stringa = "ciao pippo";

  persone = [
    { nome: 'pippo', cognome: 'Verdi', eta: 25, isOnline: true, color:'blue', imgUrl:'https://thumbs.dreamstime.com/b/giovane-afro-americano-sorridente-che-saluta-la-mano-un-gesto-e-concetto-per-gente-sullo-sfondo-bianco-197664543.jpg'},
    {nome: 'Mimmo',cognome: 'Neri',eta: 20,isOnline: false, color:'red',imgUrl:'https://thumbs.dreamstime.com/b/uomo-felice-con-un-sorriso-e-un-pollice-bianchi-perfetti-su-40905445.jpg'},
    {nome: 'Ciro',cognome: 'Gialli',eta: 35,isOnline: true, color:'yellow', imgUrl:'https://thumbs.dreamstime.com/z/uomo-d-affari-con-la-fabbricazione-della-chiamata-e-lavorare-al-computer-portatile-mentre-sedendosi-nell-ufficio-136595017.jpg'},
    {nome: 'Jessica',cognome: 'Florenzi',eta: 45,isOnline: false, color:'green', imgUrl:'https://th.bing.com/th/id/OIP.Ky7HYn2twwwpkeaWlOfvrAHaEK?rs=1&pid=ImgDetMain'},
    {nome: 'Peppe',cognome: 'Ciombo',eta: 27,isOnline: true,color:'purple', imgUrl:'https://thumbs.dreamstime.com/b/uomo-che-pensa-qualcosa-46728786.jpg'}
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
