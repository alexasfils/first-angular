import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  sottoscrizzione: any;

  /*Posso prendere il child dell componentec cioe' il form e passarlo lato angular
  chiamandolo con @ViewChild('homeform') homeform: NgForm; cosi prendo i dati dell form con angular*/ 
  // @ViewChild('homeform') homeform: NgForm;

constructor(){}
  
//Uso l'observavle usando l'interval e sottoscrivendolo al numero e stampo il numero ogni volta indicato sul interval ad esempio ogni 1000 milesecondi
  ngOnInit(): void {
  //  this.sottoscrizzione = interval(1000).subscribe(numero => {
  //     console.log(numero);
  //   })

    /*
    Creato il mio Observable per vedero come e fatto per poter sotto scriverlo assegnargli il numero
    */
    // new Observable(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count)
    //     count++;
    //   },1000)
    // }).subscribe((numero) => {
    //   console.log(numero)
    // })
  }

  //Distruggo il observable quando il componente non e' piu in uso
// ngOnDestroy(): void {
//   this.sottoscrizzione.unsubscribe();
  //   }
  
  

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
