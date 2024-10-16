import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  percorso = 'https://corso-angular-3715a-default-rtdb.europe-west1.firebasedatabase.app/persone'

  constructor(private httpClient: HttpClient) { }


  inserPersona(body:{}): Observable<any> {
    return this.httpClient.post(`${this.percorso}.json`, body);
  }

  getPersone() {
    return this.httpClient.get(`${this.percorso}.json`)
  }

  getPersona(id: string): Observable<any> {
    return this.httpClient.get(`${this.percorso}/${id}.json`);
  }

  deletePersona(id: string) {
    return this.httpClient.delete(`${this.percorso}/${id}.json`);
  }

  patchPersona(id:string, body: {}) {
    return this.httpClient.patch(`${this.percorso}/${id}.json`, body);
  }
  
}
