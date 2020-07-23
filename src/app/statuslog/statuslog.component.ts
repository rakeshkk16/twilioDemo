import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statuslog',
  templateUrl: './statuslog.component.html',
  styleUrls: ['./statuslog.component.css']
})
export class StatuslogComponent implements OnInit {
  @Input() status;
  @Input() summary;
  constructor() { }

  ngOnInit() {
  }

}
