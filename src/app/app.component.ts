import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corso-angilar2';

  isVisible = true;

  persone = [
    {
      nome: 'pippo',
      cognome: 'Verdi',
      eta: 25,
      isOnline: true
    },
    {
      nome: 'Mimmo',
      cognome: 'Neri',
      eta: 20,
      isOnline: false
    },
    {
      nome: 'Ciro',
      cognome: 'Gialli',
      eta: 35,
      isOnline: true
    },
     {
      nome: 'Leonardo',
      cognome: 'Crini',
      eta: 45,
      isOnline: false
    },
      {
      nome: 'Peppe',
      cognome: 'Ciombo',
      eta: 27,
      isOnline: true
    }
  ]

  numero = 3;
  stringa = 'paperino';

  onClick(event: Event) {
    this.title= 'ho cliccato sull bottone'
  
  }

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
    console.log((<HTMLInputElement>event.target).value)
  
  }
}