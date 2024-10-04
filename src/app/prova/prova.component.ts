import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
//Model dell componente la parte Logica dell coponente
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy{
  nomeCane = "Roger";

  constructor() {
    console.log("costruttore");
}
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngOnInit(): void {
    console.log("ngOnInit"); 
    
  }

}
