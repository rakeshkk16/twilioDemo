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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiRequests } from './shared/services/api-requests.service';
import { HttpRequests } from './shared/services/http-requests.service';
import { DataService } from './shared/services/data.service';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiRequests, HttpRequests, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
