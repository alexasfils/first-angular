import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
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

  animali = [
    {
      nome: 'roger',
      razza: 'golden',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
      immagine: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      nome: 'Spirit',
      razza: 'Horse',
      descrizione: `Spirit Horse is the biggest of the six original and distinct horces breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`,
      immagine: 'https://www.bluegables.co.nz/cache/images/catalogue/313_2-398x319.jpg'
    }
  ]

  constructor() {
    console.log("costruttore");
}

  ngOnInit(): void {
    console.log("ngOnInit");
    // setInterval(() => {
    //   this.isDisabled = !this.isDisabled
    // }, 2000)
    
  }

}
