import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corso-angilar2';

  onClick(e: any) {
    console.log(e)
  
  }

  onInput(event: Event) {
    console.log((<HTMLInputElement>event.target).value)
  
  }
}