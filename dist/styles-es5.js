(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
    /***/
    "./node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
      \*******************************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesAngularBuildersCustomWebpackNode_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports, __webpack_require__) {
      // Imports
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
      /*! ../node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/runtime/api.js */
      "./node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/runtime/api.js");

      exports = ___CSS_LOADER_API_IMPORT___(true); // Module

      exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.commonPopUp {\n  opacity: 0;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: none;\n  overflow-y: auto;\n}\n.commonPopUp.active {\n  opacity: 1;\n  z-index: 9999999;\n  display: block;\n}\n.commonPopUp.active .popOverlay {\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-animation: popupfade 0.2s ease-in-out;\n          animation: popupfade 0.2s ease-in-out;\n}\n.commonPopUp.active .popOverlay.bgNone {\n  background: none;\n}\n.commonPopUp.active .popOverlay.bgWhite {\n  background: rgba(255, 255, 255, 0.9);\n}\n.commonPopUp.active .popHolder {\n  -webkit-animation: popupanimation 0.1s ease-in-out;\n          animation: popupanimation 0.1s ease-in-out;\n}\n.commonPopUp.active.zIndex {\n  z-index: 99999999;\n}\n.commonPopUp.active.noAnimation .popOverlay, .commonPopUp.active.noAnimation .popHolder {\n  -webkit-animation: none !important;\n          animation: none !important;\n}\n.commonPopUp .popOverlay {\n  background: rgba(0, 0, 0, 0);\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.commonPopUp .popOverlay.stayStick {\n  position: fixed;\n}\n.commonPopUp .popHolder {\n  background: #fff;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 3;\n  border-radius: 8px;\n}\n.commonPopUp .popHolder .closePopUp {\n  position: absolute;\n  cursor: pointer;\n  z-index: 9;\n  top: 5px;\n  right: 5px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.commonPopUp .popHolder.loginRegister {\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  display: flex;\n  border-radius: 0;\n  transform: none;\n  top: 0;\n  left: 0;\n  -webkit-animation: none;\n          animation: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDZDQUFxQztVQUFyQyxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrREFBMEM7VUFBMUMsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHVCQUFlO1VBQWYsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5jb21tb25Qb3BVcCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY29tbW9uUG9wVXAuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogOTk5OTk5OTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29tbW9uUG9wVXAuYWN0aXZlIC5wb3BPdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBhbmltYXRpb246IHBvcHVwZmFkZSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmNvbW1vblBvcFVwLmFjdGl2ZSAucG9wT3ZlcmxheS5iZ05vbmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmNvbW1vblBvcFVwLmFjdGl2ZSAucG9wT3ZlcmxheS5iZ1doaXRlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuLmNvbW1vblBvcFVwLmFjdGl2ZSAucG9wSG9sZGVyIHtcbiAgYW5pbWF0aW9uOiBwb3B1cGFuaW1hdGlvbiAwLjFzIGVhc2UtaW4tb3V0O1xufVxuLmNvbW1vblBvcFVwLmFjdGl2ZS56SW5kZXgge1xuICB6LWluZGV4OiA5OTk5OTk5OTtcbn1cbi5jb21tb25Qb3BVcC5hY3RpdmUubm9BbmltYXRpb24gLnBvcE92ZXJsYXksIC5jb21tb25Qb3BVcC5hY3RpdmUubm9BbmltYXRpb24gLnBvcEhvbGRlciB7XG4gIGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNvbW1vblBvcFVwIC5wb3BPdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbi5jb21tb25Qb3BVcCAucG9wT3ZlcmxheS5zdGF5U3RpY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uY29tbW9uUG9wVXAgLnBvcEhvbGRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5jb21tb25Qb3BVcCAucG9wSG9sZGVyIC5jbG9zZVBvcFVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uY29tbW9uUG9wVXAgLnBvcEhvbGRlci5sb2dpblJlZ2lzdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuIl19 */", "", {
        "version": 3,
        "sources": ["src/styles.css", "styles.css"],
        "names": [],
        "mappings": "AAAA,8EAA8E;AAC9E;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,eAAe;EACf,OAAO;EACP,MAAM;EACN,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,8BAA8B;EAC9B,6CAAqC;UAArC,qCAAqC;AACvC;AACA;EACE,gBAAgB;AAClB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,kDAA0C;UAA1C,0CAA0C;AAC5C;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kCAA0B;UAA1B,0BAA0B;AAC5B;AACA;EACE,4BAA4B;EAC5B,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,QAAQ;EACR,UAAU;EACV,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,MAAM;EACN,OAAO;EACP,uBAAe;UAAf,eAAe;AACjB;;ACMA,40GAA40G",
        "file": "styles.css",
        "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\n.commonPopUp {\n  opacity: 0;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: none;\n  overflow-y: auto;\n}\n.commonPopUp.active {\n  opacity: 1;\n  z-index: 9999999;\n  display: block;\n}\n.commonPopUp.active .popOverlay {\n  background: rgba(0, 0, 0, 0.5);\n  animation: popupfade 0.2s ease-in-out;\n}\n.commonPopUp.active .popOverlay.bgNone {\n  background: none;\n}\n.commonPopUp.active .popOverlay.bgWhite {\n  background: rgba(255, 255, 255, 0.9);\n}\n.commonPopUp.active .popHolder {\n  animation: popupanimation 0.1s ease-in-out;\n}\n.commonPopUp.active.zIndex {\n  z-index: 99999999;\n}\n.commonPopUp.active.noAnimation .popOverlay, .commonPopUp.active.noAnimation .popHolder {\n  animation: none !important;\n}\n.commonPopUp .popOverlay {\n  background: rgba(0, 0, 0, 0);\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.commonPopUp .popOverlay.stayStick {\n  position: fixed;\n}\n.commonPopUp .popHolder {\n  background: #fff;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 3;\n  border-radius: 8px;\n}\n.commonPopUp .popHolder .closePopUp {\n  position: absolute;\n  cursor: pointer;\n  z-index: 9;\n  top: 5px;\n  right: 5px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.commonPopUp .popHolder.loginRegister {\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  display: flex;\n  border-radius: 0;\n  transform: none;\n  top: 0;\n  left: 0;\n  animation: none;\n}\n", "/* You can add global styles to this file, and also import other style files */\n.commonPopUp {\n  opacity: 0;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: none;\n  overflow-y: auto;\n}\n.commonPopUp.active {\n  opacity: 1;\n  z-index: 9999999;\n  display: block;\n}\n.commonPopUp.active .popOverlay {\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-animation: popupfade 0.2s ease-in-out;\n          animation: popupfade 0.2s ease-in-out;\n}\n.commonPopUp.active .popOverlay.bgNone {\n  background: none;\n}\n.commonPopUp.active .popOverlay.bgWhite {\n  background: rgba(255, 255, 255, 0.9);\n}\n.commonPopUp.active .popHolder {\n  -webkit-animation: popupanimation 0.1s ease-in-out;\n          animation: popupanimation 0.1s ease-in-out;\n}\n.commonPopUp.active.zIndex {\n  z-index: 99999999;\n}\n.commonPopUp.active.noAnimation .popOverlay, .commonPopUp.active.noAnimation .popHolder {\n  -webkit-animation: none !important;\n          animation: none !important;\n}\n.commonPopUp .popOverlay {\n  background: rgba(0, 0, 0, 0);\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.commonPopUp .popOverlay.stayStick {\n  position: fixed;\n}\n.commonPopUp .popHolder {\n  background: #fff;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 3;\n  border-radius: 8px;\n}\n.commonPopUp .popHolder .closePopUp {\n  position: absolute;\n  cursor: pointer;\n  z-index: 9;\n  top: 5px;\n  right: 5px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.commonPopUp .popHolder.loginRegister {\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  display: flex;\n  border-radius: 0;\n  transform: none;\n  top: 0;\n  left: 0;\n  -webkit-animation: none;\n          animation: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDZDQUFxQztVQUFyQyxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrREFBMEM7VUFBMUMsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHVCQUFlO1VBQWYsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5jb21tb25Qb3BVcCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY29tbW9uUG9wVXAuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogOTk5OTk5OTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29tbW9uUG9wVXAuYWN0aXZlIC5wb3BPdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBhbmltYXRpb246IHBvcHVwZmFkZSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmNvbW1vblBvcFVwLmFjdGl2ZSAucG9wT3ZlcmxheS5iZ05vbmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmNvbW1vblBvcFVwLmFjdGl2ZSAucG9wT3ZlcmxheS5iZ1doaXRlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuLmNvbW1vblBvcFVwLmFjdGl2ZSAucG9wSG9sZGVyIHtcbiAgYW5pbWF0aW9uOiBwb3B1cGFuaW1hdGlvbiAwLjFzIGVhc2UtaW4tb3V0O1xufVxuLmNvbW1vblBvcFVwLmFjdGl2ZS56SW5kZXgge1xuICB6LWluZGV4OiA5OTk5OTk5OTtcbn1cbi5jb21tb25Qb3BVcC5hY3RpdmUubm9BbmltYXRpb24gLnBvcE92ZXJsYXksIC5jb21tb25Qb3BVcC5hY3RpdmUubm9BbmltYXRpb24gLnBvcEhvbGRlciB7XG4gIGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNvbW1vblBvcFVwIC5wb3BPdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbi5jb21tb25Qb3BVcCAucG9wT3ZlcmxheS5zdGF5U3RpY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uY29tbW9uUG9wVXAgLnBvcEhvbGRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5jb21tb25Qb3BVcCAucG9wSG9sZGVyIC5jbG9zZVBvcFVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uY29tbW9uUG9wVXAgLnBvcEhvbGRlci5sb2dpblJlZ2lzdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuIl19 */"]
      }]); // Exports

      module.exports = exports;
      /***/
    },

    /***/
    "./node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/runtime/api.js":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/runtime/api.js ***!
      \***************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesAngularBuildersCustomWebpackNode_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
      "use strict";
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names

      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)


      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        return "/*# ".concat(data, " */");
      }
      /***/

    },

    /***/
    "./node_modules/@angular-builders/custom-webpack/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/@angular-builders/custom-webpack/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \**************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesAngularBuildersCustomWebpackNode_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
      "use strict";

      var isOldIE = function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      }();

      var getTarget = function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce = true ? __webpack_require__.nc : undefined;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */


      var replaceText = function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && btoa) {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        } // For old IE

        /* istanbul ignore if  */


        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/

    },

    /***/
    "./src/styles.css":
    /*!************************!*\
      !*** ./src/styles.css ***!
      \************************/

    /*! no static exports found */

    /***/
    function srcStylesCss(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../node_modules/@angular-builders/custom-webpack/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "./node_modules/@angular-builders/custom-webpack/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

      var content = __webpack_require__(
      /*! !../node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */
      "./node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    3:
    /*!******************************!*\
      !*** multi ./src/styles.css ***!
      \******************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/rakesh_kumar/Testing/twilioDemo/src/styles.css */
      "./src/styles.css");
      /***/
    }
  }, [[3, "runtime"]]]);
})();
//# sourceMappingURL=styles-es5.js.map