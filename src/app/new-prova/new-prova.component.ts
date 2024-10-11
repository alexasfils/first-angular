import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-prova',
  templateUrl: './new-prova.component.html',
  styleUrl: './new-prova.component.css'
})
export class NewProvaComponent{
  
  //collego viewCild con #inputSaluti dell app.component.html con valoreInput e gli diciamo che non e' null con "!" e di tipo ElementRef( che fa riferimento su queell elemento nello view)
  //In pratica prendo il riferimento di elemento inputSaluti
  // @ViewChild('inputReference') referenza!: ElementRef<HTMLInputElement>
  
  // // valore ="Pippo come stai?"

  // ngOnInit(): void {
  //   console.log("ngOnInit");
  //   console.log(this.referenza);
  // }
  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit");
  //   console.log(this.referenza);
  // }

  // onClick() {
  //   //all click prendo il valore dell input
  //   console.log(this.referenza.nativeElement.value);
  // }

  //colore iniziale
  colore = '';

  //Cambio il colore in base al input che scelgo
  //che quando scatto l'evento cambia il valore della variabbile "colore"
  cambiaColoreEvidenziato(colore: string) {
    this.colore = colore;
  }



}
