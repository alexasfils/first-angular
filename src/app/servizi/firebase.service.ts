import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  percorso = 'https://corso-angular-3715a-default-rtdb.europe-west1.firebasedatabase.app/persone'

  constructor(private httpClient: HttpClient, private authService: AuthService) { }


  inserPersona(body: {}): Observable<any> {
    return this.httpClient.post(`${this.percorso}.json?auth=${this.authService.user.token}`, body);
  }

  getPersone() {
    return this.httpClient.get(`${this.percorso}.json?auth=${this.authService.user.token}`)
  }

  getPersona(id: string): Observable<any> {
    return this.httpClient.get(`${this.percorso}/${id}.json?auth=${this.authService.user.token}`);
  }

  deletePersona(id: string) {
    return this.httpClient.delete(`${this.percorso}/${id}.json?auth=${this.authService.user.token}`);
  }

  patchPersona(id:string, body: {}) {
    return this.httpClient.patch(`${this.percorso}/${id}.json?auth=${this.authService.user.token}`, body);
  }
  
}
