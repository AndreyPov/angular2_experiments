import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hometitle = "Welcome to the home page";
  myString = "Blablabla...is here";
  myBoolean = "false";
  typedInput = 'someInfo';
  alertMe(binding){
    alert(binding*2);
  }
  constructor() { }

  ngOnInit() {
  }

}
