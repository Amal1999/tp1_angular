import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {


  @Input() parentColor : String = "";
  myFavoriteColor : String = "green" ;

  @Output() sendMsgToDad  = new EventEmitter();

  constructor() {

   }

  ngOnInit(): void {
    console.log(this.parentColor);

  }
  sendFavColor (){
    this.sendMsgToDad.emit(this.myFavoriteColor);
  }

}
