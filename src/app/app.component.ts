import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App works!And it is awesome!';
  number = 'Third';
  yell(e){
    alert("I am yelling");
    console.log(e);
  }

}
