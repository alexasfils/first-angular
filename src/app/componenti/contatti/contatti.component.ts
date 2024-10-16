import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContactComponent implements OnInit{
  persone: any;

  constructor(private firebaseSrrvice: FirebaseService) {}

  //prendiamo l'arrey di persone dall servizio servizio-prova
  ngOnInit(): void {
    // this.persone = this.serviceProava.getPersone();

   this.firebaseSrrvice.getPersone()
     .subscribe((data: any) => {
        console.log(data)
       this.persone = Object.keys(data).map((key) => {
         data[key]['id'] = key
         return data[key]
       });
        console.log(this.persone)
    })
  }
  

}
