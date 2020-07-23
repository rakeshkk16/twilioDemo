(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["background"],{

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

chrome.runtime.onInstalled.addListener(() => {
    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
            chrome.pageAction.show(id);
        });
    }, { url: [{ urlMatches: 'google.com' }] });
});


/***/ })

},[["./src/background.ts","runtime"]]]);
//# sourceMappingURL=background-es2015.js.map