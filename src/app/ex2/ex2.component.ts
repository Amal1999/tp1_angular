import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {


  fname : String = "";
  lname : String = "";
  job : String = "";
  citation : String = "";
  description : String = "";
  keywords : String = "";



  path : string = "demon.jpg";

  fixUrl  : string = "./assets/images/"
  constructor() { }

  ngOnInit(): void {
  }

}
