import { Component, OnInit } from '@angular/core';
import { ApiRequests } from './shared/services/api-requests.service';
declare const Twilio: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'extensionTest';
  color = 'red';
  showPopup = false;
  onPhone = false;
  muted = false;
  isValidNumber = false;
  logtext = '';
  fullNumber: String = '';
  log = '';
  connection = null;


  constructor(public apiRequest: ApiRequests) {}

  ngOnInit(): void {
    this.getToken();
  }

  public getToken() {
    this.apiRequest.fetchToken().subscribe((data: any) => {
      Twilio.Device.setup(data.token);
    }, error => {
      console.log(error);
    });
  }

  public sendDigit(digit) {
    if (digit === 'D') {
      if (this.fullNumber.length > 0) {
        this.fullNumber = this.fullNumber.substring(0, this.fullNumber.length - 1);
      }
    } else {
      this.fullNumber += digit;
    }
    console.log(this.fullNumber);
    // Twilio.Device.activeConnection().sendDigits(digit);
  }

  public onCalling(number) {
    this.getToken();
    this.fullNumber = number;
    this.toggleCall();
  }

  public onDisconnecting(event) {
  }

    // Make an outbound call with the current number,
  // or hang up the current call
  public toggleCall() {
    if (this.connection === null) {
      console.log('connection is null. Initiating the call with no. - ' + this.fullNumber);
      const params = { "phoneNumber": this.fullNumber};
      this.connection = Twilio.Device.connect(params);
    } else {
      this.connection = null;
      Twilio.Device.disconnectAll();
    }
  }

  public redirectToPage() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.create({url: 'https://studio.builder.ai/'});

    });
  }

  public changeBackground() {
    // let para = document.createElement('div');
    // para.innerText = 'This is a paragraph.';
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.body.style.backgroundColor = "' + this.color + '";' }
        // { code: 'document.body.appendChild("' + para + ')";' }
      );
    });
  }

  public showCallingPopup() {
    this.showPopup = true;
  //   const popup =      <div class="commonPopUp" id="callingPopUp active">
  //   <div class="popOverlay"></div>
  //   <div class="popHolder confirmPopup">
  //     <div class="closePopUp" (click)="closePopup()"><span class="icon-cancel"></span></div>
  //     <h3>Are you sure you want to remove all selections?</h3>
  //     <div class="footerButton">
  //       <button class="cancleButton" (click)="closePopup()">Cancel</button>
  //       <button class="doneButton" (click)="closePopup()">
  //         OK
  //       </button>
  //     </div>
  //   </div>
  // </div>;
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.executeScript(
        // tabs[0].id, {code: `document.body.innerHTML +=  confirm("Incoming Call");`}
        tabs[0].id, {code: `document.body.innerHTML +=   '<div class="commonPopUp" id="callingPopUp active">
        <div class="popOverlay"></div>
        <div class="popHolder confirmPopup">
          <div class="closePopUp><span class="icon-cancel"></span></div>
          <h3>Are you sure you want to remove all selections?</h3>
          <div class="footerButton">
            <button class="cancleButton>Cancel</button>
            <button class="doneButton">
              OK
            </button>
          </div>
        </div>
      </div>'`}
       
        // { code: 'document.body.innerHTML +=' + '<img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" alt="Girl in a jacket" width="500" height="600">' }
        //  +
        // `<div class="commonPopUp" id="callingPopUp active">
        //   <div class="popOverlay"></div>
        //   <div class="popHolder confirmPopup">
        //     <div class="closePopUp" (click)="closePopup()"><span class="icon-cancel"></span></div>
        //     <h3>Are you sure you want to remove all selections?</h3>
        //     <div class="footerButton">
        //       <button class="cancleButton" (click)="closePopup()">Cancel</button>
        //       <button class="doneButton" (click)="closePopup()">
        //         OK
        //       </button>
        //     </div>
        //   </div>
        // </div>` + ')";' }
        // { code: 'document.body.appendChild("' + popup + ')";' }
      );
    });
  }

  public closePopup() {
    this.showPopup = false;
  }

}
