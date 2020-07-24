import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialpad',
  templateUrl: './dialpad.component.html',
  styleUrls: ['./dialpad.component.css']
})
export class DialpadComponent implements OnInit {
  @Output( 'onDigitClick') onDigitClick = new EventEmitter();
  @Output( 'onMakeCall') onMakeCall = new EventEmitter();
  @Output( 'onDisconnectCall') onDisconnectCall = new EventEmitter();
  fullNumber: String = '';
  constructor() { }

  ngOnInit() {
  }

   // Handle numeric buttons
   public clickDigit(digit) {
    if (digit === 'D') {
      if (this.fullNumber.length > 0) {
        this.fullNumber = this.fullNumber.substring(0, this.fullNumber.length - 1);
      }
    } else {
      this.fullNumber += digit;
    }
    // this.onDigitClick.emit(digit);
  }

  public makeCall() {
    this.onMakeCall.emit(this.fullNumber);
  }

  public disconnectCall() {
    this.onDisconnectCall.emit(true);
  }

}
