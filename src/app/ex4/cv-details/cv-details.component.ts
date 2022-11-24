import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css'],
})
export class CvDetailsComponent implements OnInit {
  @Input() cv!: Cv;
  constructor() {}

  ngOnInit(): void {}
}
