import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Api di firebase
  APIKey = 'AIzaSyADyNAjDRgM0gSf44BCYgAromv--EEgNQo'
  //url per registrazione 
  signUpUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`;
  //url di Login
  signInUrl:string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`

  isLoggedIn = true;
  isAdmin = true;
  user: User

  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated() {
    return this.isLoggedIn;
  }
  isRoleAdmin() {
    return this.isAdmin
  }

  //Creo user con questi dati
  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate);
    this.isLoggedIn = true;
}
//registro user con token
  signUp(email:string, password: string) {
    return this.http.post(this.signUpUrl, {email: email, password:password, returnSecureToken: true})
  }

  //accedo con credenziali dello user usando il token creato
  signIn(email:string, password: string) {
    return this.http.post(this.signInUrl, {email: email, password:password, returnSecureToken: true})
  }

  //escco dalla sessione e mi reinderizzo su Login
  logout() {
    this.isLoggedIn = false;
    this.user = null!;
    localStorage.removeItem('user');
    this.router.navigate(['/signin'])

  }
}
