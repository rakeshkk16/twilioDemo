import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialer-input',
  templateUrl: './dialer-input.component.html',
  styleUrls: ['./dialer-input.component.css']
})
export class DialerInputComponent implements OnInit {
    public selectedCountryCode = '1';
    public localNumber = '';
    public showList = false;
    @Output( 'onChangeNumber') onChangeNumber = new EventEmitter();
    public countries = [
      { name: 'United States', cc: '1', code: 'us' },
      { name: 'Great Britain', cc: '44', code: 'gb' },
      { name: 'Colombia', cc: '57', code: 'co' },
      { name: 'Ecuador', cc: '593', code: 'ec' },
      { name: 'Estonia', cc: '372', code: 'ee' },
      { name: 'Germany', cc: '49', code: 'de' },
      { name: 'Hong Kong', cc: '852', code: 'hk' },
      { name: 'Ireland', cc: '353', code: 'ie' },
      { name: 'Singapore', cc: '65', code: 'sg' },
      { name: 'Spain', cc: '34', code: 'es' },
      { name: 'Brazil', cc: '55', code: 'br' },
      { name: 'India', cc: '91', code: 'in' },
    ];
  constructor() { }

  ngOnInit() {
  }

  public toggleDropdown() {
    this.showList = !this.showList;
  }

  public changeNumber(event) {
    this.localNumber = event.target.value;

    this.emitChangeNumber();
  }

  public selectCountry(country) {
    this.selectedCountryCode = country.cc;
    this.showList = false;

    this.emitChangeNumber();
  }

  public emitChangeNumber() {
    this.onChangeNumber.emit({
      countryCode: this.selectedCountryCode,
      localNumber: this.localNumber,
      fullNumber: `+${this.selectedCountryCode}${this.localNumber}`,
      isValid: /^([0-9]|#|\*)+$/.test(this.localNumber.replace(/[-()\s]/g,''))
    });
  }

}
