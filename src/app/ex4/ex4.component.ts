import { Component, OnInit } from '@angular/core';
import { Cv } from './models/cv';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {


  selectedCv! : Cv ;

  listCv : Cv[] = [
    new Cv(
      'D1111111',
      'Achour',
      'Ines',
      23,
      '11111111',
      'Etudiante',
      './assets/images/naruto.jpg'
    ),
    new Cv(
      'D2222222',
      'sammari',
      'amal',
      28,
      '22222222',
      'Etudiante',
      './assets/images/demon.jpg'
    ),
    new Cv(
      'D3333333',
      'anonyme',
      '',
      25,
      '33333333',
      'Etudiante',
      './assets/images/jujutsu.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCvRecieve(val : Cv){
    this.selectedCv = val;
  }
}
