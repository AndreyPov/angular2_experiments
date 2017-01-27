import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() human;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
