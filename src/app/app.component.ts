import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'extensionTest';
  color = 'red';
  showPopup = false;

  constructor() { }

  ngOnInit(): void {
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
        tabs[0].id, {code: 'document.body.innerHTML += "<div>My new content</div>"'}
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
