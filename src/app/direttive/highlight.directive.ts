import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //ESERCIZIO DIRETTIVA CON NEW-PROVA
  @Input() appHighlight = '';
  @Input() defaultColor = '';

  constructor(private element: ElementRef<HTMLElement>) { 
  }
    //quando metto il mouse sull elemento il colore diventa quello che arriva da app.componet
  @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColore(this.appHighlight || this.defaultColor || 'gray');
   
  }
    
  //quando tolgo il mouse il colore dicventa trasparente
  @HostListener('mouseleave') onMouseLeave() {
    this.cambiaColore('transparent');
  }

  //Prende il valore dell colere che arriva.
  cambiaColore(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore;
  }

}
