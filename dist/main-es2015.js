(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: true })],
//   exports: [RouterModule]
// })
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/api-requests.service */ "./src/app/shared/services/api-requests.service.ts");
/* harmony import */ var _dialpad_dialpad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialpad/dialpad.component */ "./src/app/dialpad/dialpad.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(apiRequest) {
        this.apiRequest = apiRequest;
        this.title = 'extensionTest';
        this.color = 'red';
        this.showPopup = false;
        this.onPhone = false;
        this.muted = false;
        this.isValidNumber = false;
        this.logtext = '';
        this.fullNumber = '';
        this.log = '';
        this.connection = null;
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        this.apiRequest.fetchToken().subscribe((data) => {
            Twilio.Device.setup(data.token);
        }, error => {
            console.log(error);
        });
    }
    sendDigit(digit) {
        if (digit === 'D') {
            if (this.fullNumber.length > 0) {
                this.fullNumber = this.fullNumber.substring(0, this.fullNumber.length - 1);
            }
        }
        else {
            this.fullNumber += digit;
        }
        console.log(this.fullNumber);
        // Twilio.Device.activeConnection().sendDigits(digit);
    }
    onCalling(number) {
        this.getToken();
        this.fullNumber = number;
        this.toggleCall();
    }
    onDisconnecting(event) {
    }
    // Make an outbound call with the current number,
    // or hang up the current call
    toggleCall() {
        if (this.connection === null) {
            console.log('connection is null. Initiating the call with no. - ' + this.fullNumber);
            const params = { "phoneNumber": this.fullNumber };
            this.connection = Twilio.Device.connect(params);
        }
        else {
            this.connection = null;
            Twilio.Device.disconnectAll();
        }
    }
    redirectToPage() {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.create({ url: 'https://studio.builder.ai/' });
        });
    }
    changeBackground() {
        // let para = document.createElement('div');
        // para.innerText = 'This is a paragraph.';
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.executeScript(tabs[0].id, { code: 'document.body.style.backgroundColor = "' + this.color + '";' }
            // { code: 'document.body.appendChild("' + para + ')";' }
            );
        });
    }
    showCallingPopup() {
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
            tabs[0].id, { code: `document.body.innerHTML +=   '<div class="commonPopUp" id="callingPopUp active">
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
      </div>'` }
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
    closePopup() {
        this.showPopup = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__["ApiRequests"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[3, "onDigitClick", "onMakeCall", "onDisconnectCall"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dialpad", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDigitClick", function AppComponent_Template_app_dialpad_onDigitClick_0_listener($event) { return ctx.sendDigit($event); })("onMakeCall", function AppComponent_Template_app_dialpad_onMakeCall_0_listener($event) { return ctx.onCalling($event); })("onDisconnectCall", function AppComponent_Template_app_dialpad_onDisconnectCall_0_listener($event) { return ctx.onDisconnecting($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_dialpad_dialpad_component__WEBPACK_IMPORTED_MODULE_2__["DialpadComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shared_services_api_requests_service__WEBPACK_IMPORTED_MODULE_1__["ApiRequests"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-page/event-page.component */ "./src/app/event-page/event-page.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _dialer_input_dialer_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialer-input/dialer-input.component */ "./src/app/dialer-input/dialer-input.component.ts");
/* harmony import */ var _audio_controls_audio_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio-controls/audio-controls.component */ "./src/app/audio-controls/audio-controls.component.ts");
/* harmony import */ var _dialpad_dialpad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialpad/dialpad.component */ "./src/app/dialpad/dialpad.component.ts");
/* harmony import */ var _statuslog_statuslog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./statuslog/statuslog.component */ "./src/app/statuslog/statuslog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_services_api_requests_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/api-requests.service */ "./src/app/shared/services/api-requests.service.ts");
/* harmony import */ var _shared_services_http_requests_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/http-requests.service */ "./src/app/shared/services/http-requests.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/data.service */ "./src/app/shared/services/data.service.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_services_api_requests_service__WEBPACK_IMPORTED_MODULE_13__["ApiRequests"], _shared_services_http_requests_service__WEBPACK_IMPORTED_MODULE_14__["HttpRequests"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
        _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_5__["EventPageComponent"],
        _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__["PopupComponent"],
        _dialer_input_dialer_input_component__WEBPACK_IMPORTED_MODULE_7__["DialerInputComponent"],
        _audio_controls_audio_controls_component__WEBPACK_IMPORTED_MODULE_8__["AudioControlsComponent"],
        _dialpad_dialpad_component__WEBPACK_IMPORTED_MODULE_9__["DialpadComponent"],
        _statuslog_statuslog_component__WEBPACK_IMPORTED_MODULE_10__["StatuslogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
                    _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_5__["EventPageComponent"],
                    _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__["PopupComponent"],
                    _dialer_input_dialer_input_component__WEBPACK_IMPORTED_MODULE_7__["DialerInputComponent"],
                    _audio_controls_audio_controls_component__WEBPACK_IMPORTED_MODULE_8__["AudioControlsComponent"],
                    _dialpad_dialpad_component__WEBPACK_IMPORTED_MODULE_9__["DialpadComponent"],
                    _statuslog_statuslog_component__WEBPACK_IMPORTED_MODULE_10__["StatuslogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
                ],
                providers: [_shared_services_api_requests_service__WEBPACK_IMPORTED_MODULE_13__["ApiRequests"], _shared_services_http_requests_service__WEBPACK_IMPORTED_MODULE_14__["HttpRequests"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/audio-controls/audio-controls.component.ts":
/*!************************************************************!*\
  !*** ./src/app/audio-controls/audio-controls.component.ts ***!
  \************************************************************/
/*! exports provided: AudioControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioControlsComponent", function() { return AudioControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { "fa-microphone-slash": a0, "fa-microphone": a1 }; };
function AudioControlsComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioControlsComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.clickMute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r0.muted, !ctx_r0.muted));
} }
const _c1 = function (a0, a1) { return { "btn-danger": a0, "btn-success": a1 }; };
const _c2 = function (a0, a1) { return { "fa-close": a0, "fa-phone": a1 }; };
class AudioControlsComponent {
    constructor() {
        this.onClickCall = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClickMute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    clickCall() {
        this.onClickCall.emit();
    }
    clickMute() {
        this.onClickMute.emit();
    }
}
AudioControlsComponent.ɵfac = function AudioControlsComponent_Factory(t) { return new (t || AudioControlsComponent)(); };
AudioControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioControlsComponent, selectors: [["app-audio-controls"]], inputs: { onPhone: "onPhone", muted: "muted", disabled: "disabled" }, outputs: { onClickCall: "onClickCall", onClickMute: "onClickMute" }, decls: 4, vars: 9, consts: [[1, "controls"], [1, "btn", "btn-circle", 3, "ngClass", "click"], [1, "fa", "fa-fw", 3, "ngClass"], ["class", "btn btn-circle btn-default", 3, "click", 4, "ngIf"], [1, "btn", "btn-circle", "btn-default", 3, "click"]], template: function AudioControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioControlsComponent_Template_button_click_1_listener() { return ctx.clickCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AudioControlsComponent_button_3_Template, 2, 4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx.onPhone, !ctx.onPhone));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx.onPhone, !ctx.onPhone));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onPhone);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLWNvbnRyb2xzL2F1ZGlvLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audio-controls',
                templateUrl: './audio-controls.component.html',
                styleUrls: ['./audio-controls.component.css']
            }]
    }], function () { return []; }, { onPhone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], muted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClickCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onClickCall']
        }], onClickMute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onClickMute']
        }] }); })();


/***/ }),

/***/ "./src/app/dialer-input/dialer-input.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dialer-input/dialer-input.component.ts ***!
  \********************************************************/
/*! exports provided: DialerInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialerInputComponent", function() { return DialerInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DialerInputComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialerInputComponent_li_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const country_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectCountry(country_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag flag-", country_r1.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", country_r1.name, " (+", country_r1.cc, ")");
} }
class DialerInputComponent {
    constructor() {
        this.selectedCountryCode = '1';
        this.localNumber = '';
        this.showList = false;
        this.onChangeNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countries = [
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
    }
    ngOnInit() {
    }
    toggleDropdown() {
        this.showList = !this.showList;
    }
    changeNumber(event) {
        this.localNumber = event.target.value;
        this.emitChangeNumber();
    }
    selectCountry(country) {
        this.selectedCountryCode = country.cc;
        this.showList = false;
        this.emitChangeNumber();
    }
    emitChangeNumber() {
        this.onChangeNumber.emit({
            countryCode: this.selectedCountryCode,
            localNumber: this.localNumber,
            fullNumber: `+${this.selectedCountryCode}${this.localNumber}`,
            isValid: /^([0-9]|#|\*)+$/.test(this.localNumber.replace(/[-()\s]/g, ''))
        });
    }
}
DialerInputComponent.ɵfac = function DialerInputComponent_Factory(t) { return new (t || DialerInputComponent)(); };
DialerInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialerInputComponent, selectors: [["app-dialer-input"]], outputs: { onChangeNumber: "onChangeNumber" }, decls: 10, vars: 4, consts: [[1, "input-group", "input-group-sm"], [1, "input-group-btn"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-default", "dropdown-toggle", 3, "ngClass", "click"], [1, "country-code"], [1, "fa", "fa-caret-down"], [1, "dropdown-menu", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["type", "tel", "placeholder", "555-666-7777", 1, "form-control", 3, "keyup"], ["href", "#", 3, "click"]], template: function DialerInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialerInputComponent_Template_button_click_2_listener() { return ctx.toggleDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialerInputComponent_li_8_Template, 5, 5, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DialerInputComponent_Template_input_keyup_9_listener($event) { return ctx.changeNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showList ? "show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedCountryCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showList ? "show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxlci1pbnB1dC9kaWFsZXItaW5wdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialerInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialer-input',
                templateUrl: './dialer-input.component.html',
                styleUrls: ['./dialer-input.component.css']
            }]
    }], function () { return []; }, { onChangeNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onChangeNumber']
        }] }); })();


/***/ }),

/***/ "./src/app/dialpad/dialpad.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dialpad/dialpad.component.ts ***!
  \**********************************************/
/*! exports provided: DialpadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialpadComponent", function() { return DialpadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class DialpadComponent {
    constructor() {
        this.onDigitClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMakeCall = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDisconnectCall = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fullNumber = '';
    }
    ngOnInit() {
    }
    // Handle numeric buttons
    clickDigit(digit) {
        if (digit === 'D') {
            if (this.fullNumber.length > 0) {
                this.fullNumber = this.fullNumber.substring(0, this.fullNumber.length - 1);
            }
        }
        else {
            this.fullNumber += digit;
        }
        // this.onDigitClick.emit(digit);
    }
    makeCall() {
        this.onMakeCall.emit(this.fullNumber);
    }
    disconnectCall() {
        this.onDisconnectCall.emit(true);
    }
}
DialpadComponent.ɵfac = function DialpadComponent_Factory(t) { return new (t || DialpadComponent)(); };
DialpadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialpadComponent, selectors: [["app-dialpad"]], outputs: { onDigitClick: "onDigitClick", onMakeCall: "onMakeCall", onDisconnectCall: "onDisconnectCall" }, decls: 39, vars: 1, consts: [[1, "keys"], [1, "numberBox"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "key-row"], [1, "btn", "btn-circle", "btn-default", 3, "click"], [1, "key-row", "actionBtn"], [1, "btn", "btn-circle", "btn-default", "play-pausebx"], [1, "block-bx", "mute", "unmute"]], template: function DialpadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialpadComponent_Template_input_ngModelChange_2_listener($event) { return ctx.fullNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_4_listener() { return ctx.clickDigit("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_6_listener() { return ctx.clickDigit("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_8_listener() { return ctx.clickDigit("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_11_listener() { return ctx.clickDigit("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_13_listener() { return ctx.clickDigit("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_15_listener() { return ctx.clickDigit("6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_18_listener() { return ctx.clickDigit("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_20_listener() { return ctx.clickDigit("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_22_listener() { return ctx.clickDigit("9"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_25_listener() { return ctx.clickDigit("+"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_27_listener() { return ctx.clickDigit("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_29_listener() { return ctx.clickDigit("D"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_32_listener() { return ctx.makeCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialpadComponent_Template_button_click_34_listener() { return ctx.disconnectCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Disconnect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fullNumber);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".keys[_ngcontent-%COMP%]{width: 100%; max-width: 190px;  padding:20px; margin: 0 auto; background: #fff;     box-shadow: 0 0 10px rgba(0,0,0,.2); border-radius: 3px;}\n.numberBox[_ngcontent-%COMP%]{width: 100%; text-align: center; margin: 0 0 5px 0; box-sizing: border-box;}\n.numberBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding: 10px 0; text-align: center; display: block; font-size: 18px; border: none; width: 100%;}\n.numberBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline: none;}\n.keys[_ngcontent-%COMP%]   .key-row[_ngcontent-%COMP%]{display: flex; align-items: center; justify-content: center; margin: 8px 0;}\n.keys[_ngcontent-%COMP%]   .key-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background: #fff; height: 42px; width: 42px; border-radius: 50%; border: none !important; margin-right: 8px; color: #000; font-size: 18px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); transition: all .2s ease-in-out;}\n.keys[_ngcontent-%COMP%]   .key-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .keys[_ngcontent-%COMP%]   .key-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .keys[_ngcontent-%COMP%]   .key-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background:#f9f9f9 !important; outline: none;}\n.keys[_ngcontent-%COMP%]   .key-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right: 0;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background: none !important; transition: all .1s ease-in-out; cursor: pointer;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform: scale(1.1);}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display: inline-block;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 100%;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.dial[_ngcontent-%COMP%]{background: #4cd964 !important;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.dial[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding: 6px;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.dial[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position: relative ; top: 2px;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.phoneClose[_ngcontent-%COMP%]{background: #cc0003 !important;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.phoneClose[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding: 6px; transform: rotate(129deg);}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.play-pausebx[_ngcontent-%COMP%]{box-shadow: none; padding: 0;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.play-pausebx[_ngcontent-%COMP%]   .block-bx[_ngcontent-%COMP%]{height: 42px; width: 42px; overflow: hidden; }\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.play-pausebx[_ngcontent-%COMP%]   .mute[_ngcontent-%COMP%]{background: url('mute-unmute.png'); background-position:-1px 0; background-repeat: no-repeat;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.play-pausebx[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%]{background: url('palypause.png'); background-position: -1px 0; background-repeat: no-repeat;}\n.keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.play-pausebx[_ngcontent-%COMP%]   .mute.unmute[_ngcontent-%COMP%], .keys[_ngcontent-%COMP%]   .key-row.actionBtn[_ngcontent-%COMP%]   button.play-pausebx[_ngcontent-%COMP%]   .play.pause[_ngcontent-%COMP%]{background-position: -44px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbHBhZC9kaWFscGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxXQUFXLEVBQUUsZ0JBQWdCLEdBQUcsWUFBWSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsTUFBTSxtQ0FBbUMsRUFBRSxrQkFBa0IsQ0FBQztBQUNsSixXQUFXLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQztBQUN0RixpQkFBaUIsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztBQUNqSCx1QkFBdUIsYUFBYSxDQUFDO0FBQ3JDLGVBQWUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLGFBQWEsQ0FBQztBQUMxRixzQkFBc0IsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLHdFQUF3RSxFQUFFLCtCQUErQixDQUFDO0FBQzNRLHVGQUF1Riw2QkFBNkIsRUFBRSxhQUFhLENBQUM7QUFDcEksaUNBQWlDLGVBQWUsQ0FBQztBQUNqRCxnQ0FBZ0MsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsZUFBZSxDQUFDO0FBQzlHLHNDQUFzQyxxQkFBcUIsQ0FBQztBQUM1RCxxQ0FBcUMscUJBQXFCLENBQUM7QUFDM0QseUNBQXlDLFdBQVcsQ0FBQztBQUNyRCxxQ0FBcUMsOEJBQThCLENBQUM7QUFDcEUsMENBQTBDLFlBQVksQ0FBQztBQUN2RCw4Q0FBOEMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDO0FBQzVFLDJDQUEyQyw4QkFBOEIsQ0FBQztBQUMxRSxnREFBZ0QsWUFBWSxFQUFFLHlCQUF5QixDQUFDO0FBRXhGLDZDQUE2QyxnQkFBZ0IsRUFBRSxVQUFVLENBQUM7QUFDMUUsdURBQXVELFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7QUFFcEcsbURBQW1ELGtDQUFvRCxFQUFFLDBCQUEwQixFQUFFLDRCQUE0QixDQUFDO0FBQ2xLLG1EQUFtRCxnQ0FBa0QsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsQ0FBQztBQUVqSyxvSEFBb0gsNEJBQTRCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9kaWFscGFkL2RpYWxwYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rZXlze3dpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDE5MHB4OyAgcGFkZGluZzoyMHB4OyBtYXJnaW46IDAgYXV0bzsgYmFja2dyb3VuZDogI2ZmZjsgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjIpOyBib3JkZXItcmFkaXVzOiAzcHg7fVxuLm51bWJlckJveHt3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW46IDAgMCA1cHggMDsgYm94LXNpemluZzogYm9yZGVyLWJveDt9XG4ubnVtYmVyQm94IGlucHV0e3BhZGRpbmc6IDEwcHggMDsgdGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxOHB4OyBib3JkZXI6IG5vbmU7IHdpZHRoOiAxMDAlO31cbi5udW1iZXJCb3ggaW5wdXQ6Zm9jdXN7b3V0bGluZTogbm9uZTt9XG4ua2V5cyAua2V5LXJvd3tkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luOiA4cHggMDt9XG4ua2V5cyAua2V5LXJvdyBidXR0b257YmFja2dyb3VuZDogI2ZmZjsgaGVpZ2h0OiA0MnB4OyB3aWR0aDogNDJweDsgYm9yZGVyLXJhZGl1czogNTAlOyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgbWFyZ2luLXJpZ2h0OiA4cHg7IGNvbG9yOiAjMDAwOyBmb250LXNpemU6IDE4cHg7IGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTsgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDt9XG4ua2V5cyAua2V5LXJvdyBidXR0b246aG92ZXIsIC5rZXlzIC5rZXktcm93IGJ1dHRvbi5hY3RpdmUsIC5rZXlzIC5rZXktcm93IGJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kOiNmOWY5ZjkgIWltcG9ydGFudDsgb3V0bGluZTogbm9uZTt9XG4ua2V5cyAua2V5LXJvdyBidXR0b246bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6IDA7fVxuLmtleXMgLmtleS1yb3cuYWN0aW9uQnRuIGJ1dHRvbntiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7IGN1cnNvcjogcG9pbnRlcjt9XG4ua2V5cyAua2V5LXJvdy5hY3Rpb25CdG4gYnV0dG9uOmhvdmVye3RyYW5zZm9ybTogc2NhbGUoMS4xKTt9XG4ua2V5cyAua2V5LXJvdy5hY3Rpb25CdG4gYnV0dG9uPnNwYW57ZGlzcGxheTogaW5saW5lLWJsb2NrO31cbi5rZXlzIC5rZXktcm93LmFjdGlvbkJ0biBidXR0b24+c3BhbiBpbWd7d2lkdGg6IDEwMCU7fVxuLmtleXMgLmtleS1yb3cuYWN0aW9uQnRuIGJ1dHRvbi5kaWFse2JhY2tncm91bmQ6ICM0Y2Q5NjQgIWltcG9ydGFudDt9XG4ua2V5cyAua2V5LXJvdy5hY3Rpb25CdG4gYnV0dG9uLmRpYWwgc3BhbntwYWRkaW5nOiA2cHg7fVxuLmtleXMgLmtleS1yb3cuYWN0aW9uQnRuIGJ1dHRvbi5kaWFsIHNwYW4gaW1ne3Bvc2l0aW9uOiByZWxhdGl2ZSA7IHRvcDogMnB4O31cbi5rZXlzIC5rZXktcm93LmFjdGlvbkJ0biBidXR0b24ucGhvbmVDbG9zZXtiYWNrZ3JvdW5kOiAjY2MwMDAzICFpbXBvcnRhbnQ7fVxuLmtleXMgLmtleS1yb3cuYWN0aW9uQnRuIGJ1dHRvbi5waG9uZUNsb3NlIHNwYW57cGFkZGluZzogNnB4OyB0cmFuc2Zvcm06IHJvdGF0ZSgxMjlkZWcpO31cblxuLmtleXMgLmtleS1yb3cuYWN0aW9uQnRuIGJ1dHRvbi5wbGF5LXBhdXNlYnh7Ym94LXNoYWRvdzogbm9uZTsgcGFkZGluZzogMDt9XG4ua2V5cyAua2V5LXJvdy5hY3Rpb25CdG4gYnV0dG9uLnBsYXktcGF1c2VieCAuYmxvY2stYnh7aGVpZ2h0OiA0MnB4OyB3aWR0aDogNDJweDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ua2V5cyAua2V5LXJvdy5hY3Rpb25CdG4gYnV0dG9uLnBsYXktcGF1c2VieCAubXV0ZXtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9tdXRlLXVubXV0ZS5wbmcpOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xcHggMDsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDt9XG4ua2V5cyAua2V5LXJvdy5hY3Rpb25CdG4gYnV0dG9uLnBsYXktcGF1c2VieCAucGxheXtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wYWx5cGF1c2UucG5nKTsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAwOyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O31cblxuLmtleXMgLmtleS1yb3cuYWN0aW9uQnRuIGJ1dHRvbi5wbGF5LXBhdXNlYnggLm11dGUudW5tdXRlLCAua2V5cyAua2V5LXJvdy5hY3Rpb25CdG4gYnV0dG9uLnBsYXktcGF1c2VieCAucGxheS5wYXVzZXtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDRweCAwO31cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialpadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialpad',
                templateUrl: './dialpad.component.html',
                styleUrls: ['./dialpad.component.css']
            }]
    }], function () { return []; }, { onDigitClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onDigitClick']
        }], onMakeCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onMakeCall']
        }], onDisconnectCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onDisconnectCall']
        }] }); })();


/***/ }),

/***/ "./src/app/event-page/event-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/event-page/event-page.component.ts ***!
  \****************************************************/
/*! exports provided: EventPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageComponent", function() { return EventPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EventPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
EventPageComponent.ɵfac = function EventPageComponent_Factory(t) { return new (t || EventPageComponent)(); };
EventPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventPageComponent, selectors: [["app-event-page"]], decls: 2, vars: 0, template: function EventPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "event-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LXBhZ2UvZXZlbnQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-page',
                templateUrl: './event-page.component.html',
                styleUrls: ['./event-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 2, vars: 0, template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "homepage works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PopupComponent {
    ngOnInit() {
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], decls: 2, vars: 0, template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "popup works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup',
                templateUrl: './popup.component.html',
                styleUrls: ['./popup.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/api-requests.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/api-requests.service.ts ***!
  \*********************************************************/
/*! exports provided: ApiRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequests", function() { return ApiRequests; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-requests.service */ "./src/app/shared/services/http-requests.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/services/data.service.ts");






/**
 * Created by Rakesh on 24/07/20.
 */
class ApiRequests {
    constructor(httpRequest, dataService) {
        this.httpRequest = httpRequest;
        this.dataService = dataService;
    }
    fetchToken() {
        const API = 'https://20cd09b5197d.ngrok.io/token/generate';
        return this.httpRequest.post(API, this.dataService.getRequestOptionArgs()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
}
ApiRequests.ɵfac = function ApiRequests_Factory(t) { return new (t || ApiRequests)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_requests_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequests"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
ApiRequests.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiRequests, factory: ApiRequests.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ApiRequests, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _http_requests_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequests"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



/**
 * Created by Rakesh on 24/07/20.
 */
class DataService {
    constructor() {
    }
    getHeadersForClientDashboard() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        // if (this.user.pm_dashboard_token) {
        //   headers = headers.append('client-auth-token', this.user.pm_dashboard_token);
        // }
        // if (environment.PM_DASHBOARD_AUTH.secret_key) {
        //   headers = headers.append('secret-key', environment.PM_DASHBOARD_AUTH.secret_key);
        // }
        // headers = headers.append('partner-code', this.homePageData ? this.homePageData.builder_partner ? this.homePageData.builder_partner.code : 'e-ai' : 'a-ai');
        return headers;
    }
    getHeadersForTracker() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        // // headers = headers.append('Content-Type', 'application/json');
        // if (environment.TRACKER_AUTH.secret_key) {
        //   headers = headers.append('secret-key', environment.TRACKER_AUTH.secret_key);
        // }
        return headers;
    }
    getRequestOptionArgs(contentType, isFromUrl) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        if (!contentType) {
            headers = headers.append('Content-Type', 'application/json');
        }
        else {
            headers = headers.append('Content-Type', contentType);
        }
        // let user;
        // if (this.user) {
        //   user = this.user;
        // } else if (this.signupData) {
        //   user = this.signupData;
        // } else if (this.loginData) {
        //   user = this.loginData;
        // }
        // if (user) {
        //   const token = isFromUrl ? this.urlParameters.authToken ? this.urlParameters.authToken : user.authtoken : user.authtoken;
        //   if (token) {
        //     headers = headers.append('authtoken', token);
        //   }
        // }
        return headers;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/http-requests.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/http-requests.service.ts ***!
  \**********************************************************/
/*! exports provided: HttpRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequests", function() { return HttpRequests; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class HttpRequests {
    constructor(http) {
        this.http = http;
    }
    get(url, headers, requestOptions) {
        if (requestOptions) {
            return this.http.get(url, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)));
        }
        else if (headers) {
            return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
        else {
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
    }
    post(url, data, headers) {
        if (headers) {
            return this.http.post(url, data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
        else {
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
    }
    patch(url, data, headers) {
        if (headers) {
            return this.http.patch(url, data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
        else {
            return this.http.patch(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
    }
    put(url, data, headers) {
        if (headers) {
            return this.http.put(url, data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
        else {
            return this.http.put(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
    }
    delete(url, headers) {
        if (headers) {
            return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
        else {
            return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => this.parseResponse(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
    }
    parseResponse(res) {
        return res ? res : '';
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
    }
}
HttpRequests.ɵfac = function HttpRequests_Factory(t) { return new (t || HttpRequests)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HttpRequests.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpRequests, factory: HttpRequests.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HttpRequests, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/statuslog/statuslog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/statuslog/statuslog.component.ts ***!
  \**************************************************/
/*! exports provided: StatuslogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatuslogComponent", function() { return StatuslogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StatuslogComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatuslogComponent.ɵfac = function StatuslogComponent_Factory(t) { return new (t || StatuslogComponent)(); };
StatuslogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatuslogComponent, selectors: [["app-statuslog"]], inputs: { status: "status", summary: "summary" }, decls: 4, vars: 2, consts: [[1, "log"]], template: function StatuslogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.summary);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1c2xvZy9zdGF0dXNsb2cuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatuslogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statuslog',
                templateUrl: './statuslog.component.html',
                styleUrls: ['./statuslog.component.css']
            }]
    }], function () { return []; }, { status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rakesh_kumar/TwilioDemo/twilioDemo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map