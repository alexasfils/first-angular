import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { interval, Observable } from 'rxjs';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  /////////////////OBSERVABLE////////////////////////
  // sottoscrizzione: any;

  /*Posso prendere il child dell componentec cioe' il form e passarlo lato angular
  chiamandolo con @ViewChild('homeform') homeform: NgForm; cosi prendo i dati dell form con angular*/ 
  // @ViewChild('homeform') homeform: NgForm;

constructor(private firebaseService: FirebaseService){}
  
//Uso l'observavle usando l'interval e sottoscrivendolo al numero e stampo il numero ogni volta indicato sul interval ad esempio ogni 1000 milesecondi
  // ngOnInit(): void {
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
  // }

  //Distruggo il observable quando il componente non e' piu in uso
// ngOnDestroy(): void {
//   this.sottoscrizzione.unsubscribe();
  //   }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  ////////////////////////////////////////REACTIVE FORM////////////////////////////////////////////

homeform: FormGroup

  ngOnInit(): void { 

    /*Creo il gruppo di dati con quali voglio interagire dentro il form,
    creo un nuovo FormGroup ed aggiungo i campi di FormContro(nome, email ecc..) posso mettre anche la validazione
    */
    this.homeform = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email] ),
      colore: new FormControl()
    })
  }
  
  onSubmit() {
    console.log(this.homeform);
/*Mi connetto all database di fireBase chiamando il metodo dell servizio
Gli passo l'urd dell db aggiungende per esenpio perso.json ed il corpo del ogetto che voglio creare(nome, cognome, email)
e gli passo (homeform.value.nome , oppure homeform.value.email) losottoscrivo con subscribe(data => {console.log)}) */
    this.firebaseService.inserPersona('https://corso-angular-3715a-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
      {nome: this.homeform.value.nome, email: this.homeform.value.email}
    ).subscribe(data => {
       console.log(data)
     })
  }
}
