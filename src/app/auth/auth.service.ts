import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADyNAjDRgM0gSf44BCYgAromv--EEgNQo';

  isLoggedIn = true;
  isAdmin = true;

  constructor(private http: HttpClient) { }

  isAuthenticated() {
    return this.isLoggedIn;
  }
  isRoleAdmin() {
    return this.isAdmin
  }
  signUp(body:{}) {
    return this.http.post(this.url, body)
  }
}
