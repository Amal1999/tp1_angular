import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  color: string = "red";

  constructor() { }

  ngOnInit(): void {
  }
  onColorRecieved(val : any)
  {
    this.color = val;

  }

}
