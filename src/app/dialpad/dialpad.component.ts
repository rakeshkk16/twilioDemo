import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialpad',
  templateUrl: './dialpad.component.html',
  styleUrls: ['./dialpad.component.css']
})
export class DialpadComponent implements OnInit {
  @Output( 'onDigitClick') onDigitClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

   // Handle numeric buttons
   public clickDigit(digit) {
    this.onDigitClick.emit(digit);
  }

}
