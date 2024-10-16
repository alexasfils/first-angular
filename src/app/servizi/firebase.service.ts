import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient: HttpClient) { }


  inserPersona(url: string, body:{}): Observable<any> {
    return this.httpClient.post(url, body);
  }

  getPersone(url: string) {
    return this.httpClient.get(url)
  }
  
}
