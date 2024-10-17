import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
constructor(private authService: AuthService){}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email, password);
    this.authService.signIn(email,password).subscribe((data:any) => {
      console.log(data);
      //converto la data in millisecondi e la restituiso come number 
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      //Creo lo USer prendo i dati 
      this.authService.createUser(data.email, data.localId, data.idToken, expirationDate)
      localStorage.setItem('user', JSON.stringify(this.authService.user))
      
      console.log(this.authService.user);
    })
    form.reset();
  }
}
