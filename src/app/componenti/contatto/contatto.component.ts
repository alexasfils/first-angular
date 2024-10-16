import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from './../../servizi/servizio-prova.service';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit{
  id: string;
  personaContatto: any;

  constructor(private serviceFirebase: FirebaseService ,private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!;
      console.log('ID ricevuto:', this.id);
      this.serviceFirebase.getPersona(this.id).subscribe(
        (data) => {
           if (data) {
          this.personaContatto = data;
          console.log('Persona ricevuta:', this.personaContatto);
        } else {
          console.warn('Nessun dato trovato per l\'ID:', this.id);
        }
      }
    );
    })
    
  }

}
