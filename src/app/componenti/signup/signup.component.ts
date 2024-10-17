import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  // @ViewChild('signupform') signupform: NgForm;
constructor(private authService: AuthService){}

  ngOnInit(): void { }
  
  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email, password);
    this.authService.signUp({
      email: email,
      password: password,
      returnSecureToken: true
    }).subscribe(data => {
      console.log(data)
    })
    form.reset();
  }

}
