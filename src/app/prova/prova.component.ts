import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
//Model dell componente la parte Logica dell coponente
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit{

  // isDisabled = true;
  // immagine1 = 'https://www.bluegables.co.nz/cache/images/catalogue/313_2-398x319.jpg';
  // immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  // animali = [
  //   {
  //     nome: 'roger',
  //     razza: 'golden',
  //     descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
  //           A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
  //           bred for hunting.`,
  //     immagine: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  //   },
  //   {
  //     nome: 'Spirit',
  //     razza: 'Horse',
  //     descrizione: `Spirit Horse is the biggest of the six original and distinct horces breeds of dog from Japan.
  //           A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
  //           bred for hunting.`,
  //     immagine: 'https://www.bluegables.co.nz/cache/images/catalogue/313_2-398x319.jpg'
  //   }
  // ]

  //il Valore di (data) arriva da fuori
  // @Input() data: any;
  // @Output() mandaDatiEvento = new EventEmitter<string>();

  // nome = 'Luca';

  constructor() {
    console.log("costruttore");
}
  
  ngOnInit(): void {
    // console.log(this.data);
    // setInterval(() => {
    //   this.isDisabled = !this.isDisabled
    // }, 2000)
  }
  //mando a schermi i cambiamanti avvenuti dopo un qualsiasi evento. Per esempio adesso controllo cosa e' cambiato con il nostro arrey di dati
// ngOnChanges(changes: SimpleChanges): void {
//   console.log(changes);
  //   }
  

  /*
  prende i dati in questa situazione il nome dell prova.component.ts con una funzione manda dati gli passo il Output 
  (mandaDatiEvento che prende il nome come paramentro e al click dell bottone su prova.component.html manda i dati presi dall prova.component.ts all app.component)
  */
  // mandaDati() {
  //   this.mandaDatiEvento.emit(this.nome);
  // }
}
