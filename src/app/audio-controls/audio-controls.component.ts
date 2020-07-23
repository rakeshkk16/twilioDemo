import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-audio-controls',
  templateUrl: './audio-controls.component.html',
  styleUrls: ['./audio-controls.component.css']
})
export class AudioControlsComponent implements OnInit {
  @Input() onPhone;
  @Input() muted;
  @Input() disabled;
  @Output( 'onClickCall') onClickCall = new EventEmitter();
  @Output( 'onClickMute') onClickMute = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public clickCall() {
    this.onClickCall.emit();
  }

  public clickMute() {
    this.onClickMute.emit();
  }

}
