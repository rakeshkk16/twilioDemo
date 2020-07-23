import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventPageComponent } from './event-page/event-page.component';
import { PopupComponent } from './popup/popup.component';

import { DialerInputComponent } from './dialer-input/dialer-input.component';
import { AudioControlsComponent } from './audio-controls/audio-controls.component';
import { DialpadComponent } from './dialpad/dialpad.component';
import { StatuslogComponent } from './statuslog/statuslog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EventPageComponent,
    PopupComponent,
    DialerInputComponent,
    AudioControlsComponent,
    DialpadComponent,
    StatuslogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
