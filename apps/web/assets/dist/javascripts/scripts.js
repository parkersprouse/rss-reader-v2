(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var featherExports = {};
	var feather$1 = {
	  get exports(){ return featherExports; },
	  set exports(v){ featherExports = v; },
	};

	(function (module, exports) {
		(function webpackUniversalModuleDefinition(root, factory) {
			module.exports = factory();
		})(typeof self !== 'undefined' ? self : commonjsGlobal, function() {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId]) {
		/******/ 			return installedModules[moduleId].exports;
		/******/ 		}
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			i: moduleId,
		/******/ 			l: false,
		/******/ 			exports: {}
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.l = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// define getter function for harmony exports
		/******/ 	__webpack_require__.d = function(exports, name, getter) {
		/******/ 		if(!__webpack_require__.o(exports, name)) {
		/******/ 			Object.defineProperty(exports, name, {
		/******/ 				configurable: false,
		/******/ 				enumerable: true,
		/******/ 				get: getter
		/******/ 			});
		/******/ 		}
		/******/ 	};
		/******/
		/******/ 	// define __esModule on exports
		/******/ 	__webpack_require__.r = function(exports) {
		/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
		/******/ 	};
		/******/
		/******/ 	// getDefaultExport function for compatibility with non-harmony modules
		/******/ 	__webpack_require__.n = function(module) {
		/******/ 		var getter = module && module.__esModule ?
		/******/ 			function getDefault() { return module['default']; } :
		/******/ 			function getModuleExports() { return module; };
		/******/ 		__webpack_require__.d(getter, 'a', getter);
		/******/ 		return getter;
		/******/ 	};
		/******/
		/******/ 	// Object.prototype.hasOwnProperty.call
		/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(__webpack_require__.s = 0);
		/******/ })
		/************************************************************************/
		/******/ ({

		/***/ "./dist/icons.json":
		/*!*************************!*\
		  !*** ./dist/icons.json ***!
		  \*************************/
		/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
		/***/ (function(module) {

		module.exports = {"activity":"<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>","airplay":"<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>","alert-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","align-center":"<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>","align-justify":"<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-left":"<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-right":"<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>","anchor":"<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>","aperture":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>","archive":"<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>","arrow-down-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>","arrow-down-left":"<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>","arrow-down-right":"<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>","arrow-down":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>","arrow-left-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>","arrow-left":"<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>","arrow-right-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","arrow-right":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>","arrow-up-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>","arrow-up-left":"<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>","arrow-up-right":"<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>","arrow-up":"<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>","at-sign":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>","award":"<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>","bar-chart-2":"<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>","bar-chart":"<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>","battery-charging":"<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>","battery":"<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>","bell-off":"<path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"></path><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"></path><path d=\"M18 8a6 6 0 0 0-9.33-5\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","bell":"<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path>","bluetooth":"<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>","bold":"<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>","book-open":"<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>","book":"<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>","bookmark":"<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>","box":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","briefcase":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>","calendar":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>","camera-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>","camera":"<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>","cast":"<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2.01\" y2=\"20\"></line>","check-circle":"<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>","check-square":"<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>","check":"<polyline points=\"20 6 9 17 4 12\"></polyline>","chevron-down":"<polyline points=\"6 9 12 15 18 9\"></polyline>","chevron-left":"<polyline points=\"15 18 9 12 15 6\"></polyline>","chevron-right":"<polyline points=\"9 18 15 12 9 6\"></polyline>","chevron-up":"<polyline points=\"18 15 12 9 6 15\"></polyline>","chevrons-down":"<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>","chevrons-left":"<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>","chevrons-right":"<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>","chevrons-up":"<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>","chrome":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>","circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","clipboard":"<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>","cloud-drizzle":"<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-lightning":"<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>","cloud-off":"<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","cloud-rain":"<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-snow":"<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8.01\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12.01\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16.01\" y2=\"20\"></line>","cloud":"<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>","code":"<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>","codepen":"<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>","codesandbox":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline><polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline><polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","coffee":"<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>","columns":"<path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\"></path>","command":"<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>","compass":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>","copy":"<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>","corner-down-left":"<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>","corner-down-right":"<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>","corner-left-down":"<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>","corner-left-up":"<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>","corner-right-down":"<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>","corner-right-up":"<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>","corner-up-left":"<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>","corner-up-right":"<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>","cpu":"<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>","credit-card":"<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>","crop":"<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>","crosshair":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>","delete":"<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>","disc":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","divide-circle":"<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","divide-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>","divide":"<circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle>","dollar-sign":"<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>","download-cloud":"<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>","download":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>","dribbble":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>","droplet":"<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>","edit-2":"<path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>","edit-3":"<path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path>","edit":"<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path>","external-link":"<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>","eye-off":"<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","eye":"<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","facebook":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>","fast-forward":"<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>","feather":"<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line>","figma":"<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>","file-minus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-plus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-text":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>","file":"<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>","film":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>","filter":"<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>","folder-minus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder-plus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>","framer":"<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"></path>","frown":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","gift":"<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>","git-branch":"<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>","git-commit":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>","git-merge":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>","git-pull-request":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>","github":"<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>","gitlab":"<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>","grid":"<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>","hard-drive":"<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"></line>","hash":"<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>","headphones":"<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>","heart":"<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>","help-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","hexagon":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>","home":"<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>","image":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>","inbox":"<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>","info":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>","instagram":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>","italic":"<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>","key":"<path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path>","layers":"<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>","layout":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>","life-buoy":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>","link-2":"<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>","linkedin":"<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>","list":"<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>","loader":"<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>","lock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>","log-in":"<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>","mail":"<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>","map-pin":"<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>","map":"<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>","maximize-2":"<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","maximize":"<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>","meh":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","menu":"<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>","message-circle":"<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>","message-square":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>","mic-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","mic":"<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","minimize-2":"<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","minimize":"<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>","minus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","monitor":"<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>","moon":"<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>","more-horizontal":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>","more-vertical":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>","mouse-pointer":"<path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path>","move":"<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>","music":"<path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle>","navigation-2":"<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>","navigation":"<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>","octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>","package":"<line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"></line><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","paperclip":"<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>","pause-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>","pause":"<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>","pen-tool":"<path d=\"M12 19l7-7 3 3-7 7-3-3z\"></path><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"></path><path d=\"M2 2l7.586 7.586\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>","percent":"<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>","phone-call":"<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-forwarded":"<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-incoming":"<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-missed":"<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-off":"<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>","phone-outgoing":"<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","pie-chart":"<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>","play-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>","play":"<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>","plus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","pocket":"<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>","power":"<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>","printer":"<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>","radio":"<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>","refresh-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>","refresh-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>","repeat":"<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>","rewind":"<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>","rotate-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>","rotate-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>","rss":"<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>","save":"<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>","scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>","search":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>","send":"<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>","server":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"></line>","settings":"<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>","share":"<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>","shield-off":"<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","shield":"<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>","shopping-bag":"<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>","shopping-cart":"<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>","shuffle":"<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>","sidebar":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>","skip-back":"<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>","skip-forward":"<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>","slack":"<path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\"></path><path d=\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path><path d=\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\"></path><path d=\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z\"></path><path d=\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\"></path><path d=\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path><path d=\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\"></path><path d=\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\"></path>","slash":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>","sliders":"<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>","smartphone":"<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","smile":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","speaker":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"></line>","square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>","star":"<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>","stop-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>","sun":"<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>","sunrise":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>","sunset":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>","table":"<path d=\"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18\"></path>","tablet":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","tag":"<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line>","target":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>","terminal":"<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>","thermometer":"<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>","thumbs-down":"<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>","thumbs-up":"<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>","toggle-left":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>","toggle-right":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>","tool":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>","trash-2":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>","trash":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>","trello":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect><rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>","trending-down":"<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>","trending-up":"<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>","triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>","truck":"<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>","tv":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>","twitch":"<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\"></path>","twitter":"<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>","type":"<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>","umbrella":"<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>","underline":"<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>","unlock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>","upload-cloud":"<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>","upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>","user-check":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>","user-minus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-x":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>","user":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>","users":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>","video-off":"<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","video":"<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>","voicemail":"<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>","volume-1":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-2":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-x":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>","volume":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>","watch":"<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>","wifi-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wifi":"<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wind":"<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>","x-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>","x":"<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>","youtube":"<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>","zap-off":"<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","zap":"<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>","zoom-in":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>","zoom-out":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>"};

		/***/ }),

		/***/ "./node_modules/classnames/dedupe.js":
		/*!*******************************************!*\
		  !*** ./node_modules/classnames/dedupe.js ***!
		  \*******************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2016 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/
		/* global define */

		(function () {

			var classNames = (function () {
				// don't inherit from Object so we can skip hasOwnProperty check later
				// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
				function StorageObject() {}
				StorageObject.prototype = Object.create(null);

				function _parseArray (resultSet, array) {
					var length = array.length;

					for (var i = 0; i < length; ++i) {
						_parse(resultSet, array[i]);
					}
				}

				var hasOwn = {}.hasOwnProperty;

				function _parseNumber (resultSet, num) {
					resultSet[num] = true;
				}

				function _parseObject (resultSet, object) {
					for (var k in object) {
						if (hasOwn.call(object, k)) {
							// set value to false instead of deleting it to avoid changing object structure
							// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
							resultSet[k] = !!object[k];
						}
					}
				}

				var SPACE = /\s+/;
				function _parseString (resultSet, str) {
					var array = str.split(SPACE);
					var length = array.length;

					for (var i = 0; i < length; ++i) {
						resultSet[array[i]] = true;
					}
				}

				function _parse (resultSet, arg) {
					if (!arg) return;
					var argType = typeof arg;

					// 'foo bar'
					if (argType === 'string') {
						_parseString(resultSet, arg);

					// ['foo', 'bar', ...]
					} else if (Array.isArray(arg)) {
						_parseArray(resultSet, arg);

					// { 'foo': true, ... }
					} else if (argType === 'object') {
						_parseObject(resultSet, arg);

					// '130'
					} else if (argType === 'number') {
						_parseNumber(resultSet, arg);
					}
				}

				function _classNames () {
					// don't leak arguments
					// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
					var len = arguments.length;
					var args = Array(len);
					for (var i = 0; i < len; i++) {
						args[i] = arguments[i];
					}

					var classSet = new StorageObject();
					_parseArray(classSet, args);

					var list = [];

					for (var k in classSet) {
						if (classSet[k]) {
							list.push(k);
						}
					}

					return list.join(' ');
				}

				return _classNames;
			})();

			if (typeof module !== 'undefined' && module.exports) {
				module.exports = classNames;
			} else {
				// register as 'classnames', consistent with npm package name
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
					return classNames;
				}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
						__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			}
		}());


		/***/ }),

		/***/ "./node_modules/core-js/es/array/from.js":
		/*!***********************************************!*\
		  !*** ./node_modules/core-js/es/array/from.js ***!
		  \***********************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
		__webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
		var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

		module.exports = path.Array.from;


		/***/ }),

		/***/ "./node_modules/core-js/internals/a-function.js":
		/*!******************************************************!*\
		  !*** ./node_modules/core-js/internals/a-function.js ***!
		  \******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		module.exports = function (it) {
		  if (typeof it != 'function') {
		    throw TypeError(String(it) + ' is not a function');
		  } return it;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/an-object.js":
		/*!*****************************************************!*\
		  !*** ./node_modules/core-js/internals/an-object.js ***!
		  \*****************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

		module.exports = function (it) {
		  if (!isObject(it)) {
		    throw TypeError(String(it) + ' is not an object');
		  } return it;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/array-from.js":
		/*!******************************************************!*\
		  !*** ./node_modules/core-js/internals/array-from.js ***!
		  \******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
		var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
		var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
		var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
		var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
		var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
		var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

		// `Array.from` method
		// https://tc39.github.io/ecma262/#sec-array.from
		module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
		  var O = toObject(arrayLike);
		  var C = typeof this == 'function' ? this : Array;
		  var argumentsLength = arguments.length;
		  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
		  var mapping = mapfn !== undefined;
		  var index = 0;
		  var iteratorMethod = getIteratorMethod(O);
		  var length, result, step, iterator;
		  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
		  // if the target is not iterable or it's an array with the default iterator - use a simple case
		  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
		    iterator = iteratorMethod.call(O);
		    result = new C();
		    for (;!(step = iterator.next()).done; index++) {
		      createProperty(result, index, mapping
		        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
		        : step.value
		      );
		    }
		  } else {
		    length = toLength(O.length);
		    result = new C(length);
		    for (;length > index; index++) {
		      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
		    }
		  }
		  result.length = index;
		  return result;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/array-includes.js":
		/*!**********************************************************!*\
		  !*** ./node_modules/core-js/internals/array-includes.js ***!
		  \**********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
		var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
		var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

		// `Array.prototype.{ indexOf, includes }` methods implementation
		// false -> Array#indexOf
		// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
		// true  -> Array#includes
		// https://tc39.github.io/ecma262/#sec-array.prototype.includes
		module.exports = function (IS_INCLUDES) {
		  return function ($this, el, fromIndex) {
		    var O = toIndexedObject($this);
		    var length = toLength(O.length);
		    var index = toAbsoluteIndex(fromIndex, length);
		    var value;
		    // Array#includes uses SameValueZero equality algorithm
		    // eslint-disable-next-line no-self-compare
		    if (IS_INCLUDES && el != el) while (length > index) {
		      value = O[index++];
		      // eslint-disable-next-line no-self-compare
		      if (value != value) return true;
		    // Array#indexOf ignores holes, Array#includes - not
		    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
		      if (O[index] === el) return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/bind-context.js":
		/*!********************************************************!*\
		  !*** ./node_modules/core-js/internals/bind-context.js ***!
		  \********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

		// optional / simple context binding
		module.exports = function (fn, that, length) {
		  aFunction(fn);
		  if (that === undefined) return fn;
		  switch (length) {
		    case 0: return function () {
		      return fn.call(that);
		    };
		    case 1: return function (a) {
		      return fn.call(that, a);
		    };
		    case 2: return function (a, b) {
		      return fn.call(that, a, b);
		    };
		    case 3: return function (a, b, c) {
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function (/* ...args */) {
		    return fn.apply(that, arguments);
		  };
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
		/*!****************************************************************************!*\
		  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
		  \****************************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

		// call something on iterator step with safe closing on error
		module.exports = function (iterator, fn, value, ENTRIES) {
		  try {
		    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
		  // 7.4.6 IteratorClose(iterator, completion)
		  } catch (error) {
		    var returnMethod = iterator['return'];
		    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
		    throw error;
		  }
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
		/*!**************************************************************************!*\
		  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
		  \**************************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

		var ITERATOR = wellKnownSymbol('iterator');
		var SAFE_CLOSING = false;

		try {
		  var called = 0;
		  var iteratorWithReturn = {
		    next: function () {
		      return { done: !!called++ };
		    },
		    'return': function () {
		      SAFE_CLOSING = true;
		    }
		  };
		  iteratorWithReturn[ITERATOR] = function () {
		    return this;
		  };
		  // eslint-disable-next-line no-throw-literal
		  Array.from(iteratorWithReturn, function () { throw 2; });
		} catch (error) { /* empty */ }

		module.exports = function (exec, SKIP_CLOSING) {
		  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
		  var ITERATION_SUPPORT = false;
		  try {
		    var object = {};
		    object[ITERATOR] = function () {
		      return {
		        next: function () {
		          return { done: ITERATION_SUPPORT = true };
		        }
		      };
		    };
		    exec(object);
		  } catch (error) { /* empty */ }
		  return ITERATION_SUPPORT;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/classof-raw.js":
		/*!*******************************************************!*\
		  !*** ./node_modules/core-js/internals/classof-raw.js ***!
		  \*******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		var toString = {}.toString;

		module.exports = function (it) {
		  return toString.call(it).slice(8, -1);
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/classof.js":
		/*!***************************************************!*\
		  !*** ./node_modules/core-js/internals/classof.js ***!
		  \***************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
		var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

		var TO_STRING_TAG = wellKnownSymbol('toStringTag');
		// ES3 wrong here
		var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

		// fallback for IE11 Script Access Denied error
		var tryGet = function (it, key) {
		  try {
		    return it[key];
		  } catch (error) { /* empty */ }
		};

		// getting tag from ES6+ `Object.prototype.toString`
		module.exports = function (it) {
		  var O, tag, result;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
		    // builtinTag case
		    : CORRECT_ARGUMENTS ? classofRaw(O)
		    // ES3 arguments fallback
		    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
		/*!***********************************************************************!*\
		  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
		  \***********************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
		var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
		var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
		var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

		module.exports = function (target, source) {
		  var keys = ownKeys(source);
		  var defineProperty = definePropertyModule.f;
		  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
		  for (var i = 0; i < keys.length; i++) {
		    var key = keys[i];
		    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
		  }
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
		/*!********************************************************************!*\
		  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
		  \********************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

		module.exports = !fails(function () {
		  function F() { /* empty */ }
		  F.prototype.constructor = null;
		  return Object.getPrototypeOf(new F()) !== F.prototype;
		});


		/***/ }),

		/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
		/*!***********************************************************************!*\
		  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
		  \***********************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
		var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
		var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
		var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
		var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

		var returnThis = function () { return this; };

		module.exports = function (IteratorConstructor, NAME, next) {
		  var TO_STRING_TAG = NAME + ' Iterator';
		  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
		  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
		  Iterators[TO_STRING_TAG] = returnThis;
		  return IteratorConstructor;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
		/*!**********************************************************************!*\
		  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
		  \**********************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		module.exports = function (bitmap, value) {
		  return {
		    enumerable: !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable: !(bitmap & 4),
		    value: value
		  };
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/create-property.js":
		/*!***********************************************************!*\
		  !*** ./node_modules/core-js/internals/create-property.js ***!
		  \***********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
		var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
		var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

		module.exports = function (object, key, value) {
		  var propertyKey = toPrimitive(key);
		  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
		  else object[propertyKey] = value;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/define-iterator.js":
		/*!***********************************************************!*\
		  !*** ./node_modules/core-js/internals/define-iterator.js ***!
		  \***********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
		var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
		var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
		var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
		var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
		var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
		var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
		var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
		var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
		var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
		var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

		var IteratorPrototype = IteratorsCore.IteratorPrototype;
		var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
		var ITERATOR = wellKnownSymbol('iterator');
		var KEYS = 'keys';
		var VALUES = 'values';
		var ENTRIES = 'entries';

		var returnThis = function () { return this; };

		module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
		  createIteratorConstructor(IteratorConstructor, NAME, next);

		  var getIterationMethod = function (KIND) {
		    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
		    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
		    switch (KIND) {
		      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
		      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
		      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
		    } return function () { return new IteratorConstructor(this); };
		  };

		  var TO_STRING_TAG = NAME + ' Iterator';
		  var INCORRECT_VALUES_NAME = false;
		  var IterablePrototype = Iterable.prototype;
		  var nativeIterator = IterablePrototype[ITERATOR]
		    || IterablePrototype['@@iterator']
		    || DEFAULT && IterablePrototype[DEFAULT];
		  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
		  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
		  var CurrentIteratorPrototype, methods, KEY;

		  // fix native
		  if (anyNativeIterator) {
		    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
		    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
		      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
		        if (setPrototypeOf) {
		          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
		        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
		          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
		        }
		      }
		      // Set @@toStringTag to native iterators
		      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
		      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
		    }
		  }

		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
		    INCORRECT_VALUES_NAME = true;
		    defaultIterator = function values() { return nativeIterator.call(this); };
		  }

		  // define iterator
		  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
		    hide(IterablePrototype, ITERATOR, defaultIterator);
		  }
		  Iterators[NAME] = defaultIterator;

		  // export additional methods
		  if (DEFAULT) {
		    methods = {
		      values: getIterationMethod(VALUES),
		      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
		      entries: getIterationMethod(ENTRIES)
		    };
		    if (FORCED) for (KEY in methods) {
		      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
		        redefine(IterablePrototype, KEY, methods[KEY]);
		      }
		    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
		  }

		  return methods;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/descriptors.js":
		/*!*******************************************************!*\
		  !*** ./node_modules/core-js/internals/descriptors.js ***!
		  \*******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

		// Thank's IE8 for his funny defineProperty
		module.exports = !fails(function () {
		  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
		});


		/***/ }),

		/***/ "./node_modules/core-js/internals/document-create-element.js":
		/*!*******************************************************************!*\
		  !*** ./node_modules/core-js/internals/document-create-element.js ***!
		  \*******************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
		var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

		var document = global.document;
		// typeof document.createElement is 'object' in old IE
		var exist = isObject(document) && isObject(document.createElement);

		module.exports = function (it) {
		  return exist ? document.createElement(it) : {};
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
		/*!*********************************************************!*\
		  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
		  \*********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		// IE8- don't enum bug keys
		module.exports = [
		  'constructor',
		  'hasOwnProperty',
		  'isPrototypeOf',
		  'propertyIsEnumerable',
		  'toLocaleString',
		  'toString',
		  'valueOf'
		];


		/***/ }),

		/***/ "./node_modules/core-js/internals/export.js":
		/*!**************************************************!*\
		  !*** ./node_modules/core-js/internals/export.js ***!
		  \**************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
		var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
		var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
		var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
		var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
		var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
		var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

		/*
		  options.target      - name of the target object
		  options.global      - target is the global object
		  options.stat        - export as static methods of target
		  options.proto       - export as prototype methods of target
		  options.real        - real prototype method for the `pure` version
		  options.forced      - export even if the native feature is available
		  options.bind        - bind methods to the target, required for the `pure` version
		  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
		  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
		  options.sham        - add a flag to not completely full polyfills
		  options.enumerable  - export as enumerable property
		  options.noTargetGet - prevent calling a getter on target
		*/
		module.exports = function (options, source) {
		  var TARGET = options.target;
		  var GLOBAL = options.global;
		  var STATIC = options.stat;
		  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
		  if (GLOBAL) {
		    target = global;
		  } else if (STATIC) {
		    target = global[TARGET] || setGlobal(TARGET, {});
		  } else {
		    target = (global[TARGET] || {}).prototype;
		  }
		  if (target) for (key in source) {
		    sourceProperty = source[key];
		    if (options.noTargetGet) {
		      descriptor = getOwnPropertyDescriptor(target, key);
		      targetProperty = descriptor && descriptor.value;
		    } else targetProperty = target[key];
		    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
		    // contained in target
		    if (!FORCED && targetProperty !== undefined) {
		      if (typeof sourceProperty === typeof targetProperty) continue;
		      copyConstructorProperties(sourceProperty, targetProperty);
		    }
		    // add a flag to not completely full polyfills
		    if (options.sham || (targetProperty && targetProperty.sham)) {
		      hide(sourceProperty, 'sham', true);
		    }
		    // extend global
		    redefine(target, key, sourceProperty, options);
		  }
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/fails.js":
		/*!*************************************************!*\
		  !*** ./node_modules/core-js/internals/fails.js ***!
		  \*************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		module.exports = function (exec) {
		  try {
		    return !!exec();
		  } catch (error) {
		    return true;
		  }
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/function-to-string.js":
		/*!**************************************************************!*\
		  !*** ./node_modules/core-js/internals/function-to-string.js ***!
		  \**************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

		module.exports = shared('native-function-to-string', Function.toString);


		/***/ }),

		/***/ "./node_modules/core-js/internals/get-iterator-method.js":
		/*!***************************************************************!*\
		  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
		  \***************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
		var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
		var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

		var ITERATOR = wellKnownSymbol('iterator');

		module.exports = function (it) {
		  if (it != undefined) return it[ITERATOR]
		    || it['@@iterator']
		    || Iterators[classof(it)];
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/global.js":
		/*!**************************************************!*\
		  !*** ./node_modules/core-js/internals/global.js ***!
		  \**************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
		var check = function (it) {
		  return it && it.Math == Math && it;
		};

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		module.exports =
		  // eslint-disable-next-line no-undef
		  check(typeof globalThis == O && globalThis) ||
		  check(typeof window == O && window) ||
		  check(typeof self == O && self) ||
		  check(typeof global == O && global) ||
		  // eslint-disable-next-line no-new-func
		  Function('return this')();

		/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")));

		/***/ }),

		/***/ "./node_modules/core-js/internals/has.js":
		/*!***********************************************!*\
		  !*** ./node_modules/core-js/internals/has.js ***!
		  \***********************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		var hasOwnProperty = {}.hasOwnProperty;

		module.exports = function (it, key) {
		  return hasOwnProperty.call(it, key);
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/hidden-keys.js":
		/*!*******************************************************!*\
		  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
		  \*******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		module.exports = {};


		/***/ }),

		/***/ "./node_modules/core-js/internals/hide.js":
		/*!************************************************!*\
		  !*** ./node_modules/core-js/internals/hide.js ***!
		  \************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
		var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
		var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

		module.exports = DESCRIPTORS ? function (object, key, value) {
		  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
		} : function (object, key, value) {
		  object[key] = value;
		  return object;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/html.js":
		/*!************************************************!*\
		  !*** ./node_modules/core-js/internals/html.js ***!
		  \************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

		var document = global.document;

		module.exports = document && document.documentElement;


		/***/ }),

		/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
		/*!**********************************************************!*\
		  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
		  \**********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
		var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
		var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

		// Thank's IE8 for his funny defineProperty
		module.exports = !DESCRIPTORS && !fails(function () {
		  return Object.defineProperty(createElement('div'), 'a', {
		    get: function () { return 7; }
		  }).a != 7;
		});


		/***/ }),

		/***/ "./node_modules/core-js/internals/indexed-object.js":
		/*!**********************************************************!*\
		  !*** ./node_modules/core-js/internals/indexed-object.js ***!
		  \**********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
		var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

		var split = ''.split;

		module.exports = fails(function () {
		  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
		  // eslint-disable-next-line no-prototype-builtins
		  return !Object('z').propertyIsEnumerable(0);
		}) ? function (it) {
		  return classof(it) == 'String' ? split.call(it, '') : Object(it);
		} : Object;


		/***/ }),

		/***/ "./node_modules/core-js/internals/internal-state.js":
		/*!**********************************************************!*\
		  !*** ./node_modules/core-js/internals/internal-state.js ***!
		  \**********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
		var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
		var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
		var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
		var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
		var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

		var WeakMap = global.WeakMap;
		var set, get, has;

		var enforce = function (it) {
		  return has(it) ? get(it) : set(it, {});
		};

		var getterFor = function (TYPE) {
		  return function (it) {
		    var state;
		    if (!isObject(it) || (state = get(it)).type !== TYPE) {
		      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
		    } return state;
		  };
		};

		if (NATIVE_WEAK_MAP) {
		  var store = new WeakMap();
		  var wmget = store.get;
		  var wmhas = store.has;
		  var wmset = store.set;
		  set = function (it, metadata) {
		    wmset.call(store, it, metadata);
		    return metadata;
		  };
		  get = function (it) {
		    return wmget.call(store, it) || {};
		  };
		  has = function (it) {
		    return wmhas.call(store, it);
		  };
		} else {
		  var STATE = sharedKey('state');
		  hiddenKeys[STATE] = true;
		  set = function (it, metadata) {
		    hide(it, STATE, metadata);
		    return metadata;
		  };
		  get = function (it) {
		    return objectHas(it, STATE) ? it[STATE] : {};
		  };
		  has = function (it) {
		    return objectHas(it, STATE);
		  };
		}

		module.exports = {
		  set: set,
		  get: get,
		  has: has,
		  enforce: enforce,
		  getterFor: getterFor
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
		/*!********************************************************************!*\
		  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
		  \********************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
		var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

		var ITERATOR = wellKnownSymbol('iterator');
		var ArrayPrototype = Array.prototype;

		// check on default Array iterator
		module.exports = function (it) {
		  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/is-forced.js":
		/*!*****************************************************!*\
		  !*** ./node_modules/core-js/internals/is-forced.js ***!
		  \*****************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

		var replacement = /#|\.prototype\./;

		var isForced = function (feature, detection) {
		  var value = data[normalize(feature)];
		  return value == POLYFILL ? true
		    : value == NATIVE ? false
		    : typeof detection == 'function' ? fails(detection)
		    : !!detection;
		};

		var normalize = isForced.normalize = function (string) {
		  return String(string).replace(replacement, '.').toLowerCase();
		};

		var data = isForced.data = {};
		var NATIVE = isForced.NATIVE = 'N';
		var POLYFILL = isForced.POLYFILL = 'P';

		module.exports = isForced;


		/***/ }),

		/***/ "./node_modules/core-js/internals/is-object.js":
		/*!*****************************************************!*\
		  !*** ./node_modules/core-js/internals/is-object.js ***!
		  \*****************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		module.exports = function (it) {
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/is-pure.js":
		/*!***************************************************!*\
		  !*** ./node_modules/core-js/internals/is-pure.js ***!
		  \***************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		module.exports = false;


		/***/ }),

		/***/ "./node_modules/core-js/internals/iterators-core.js":
		/*!**********************************************************!*\
		  !*** ./node_modules/core-js/internals/iterators-core.js ***!
		  \**********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
		var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
		var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
		var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
		var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

		var ITERATOR = wellKnownSymbol('iterator');
		var BUGGY_SAFARI_ITERATORS = false;

		var returnThis = function () { return this; };

		// `%IteratorPrototype%` object
		// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
		var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

		if ([].keys) {
		  arrayIterator = [].keys();
		  // Safari 8 has buggy iterators w/o `next`
		  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
		  else {
		    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
		    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
		  }
		}

		if (IteratorPrototype == undefined) IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

		module.exports = {
		  IteratorPrototype: IteratorPrototype,
		  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/iterators.js":
		/*!*****************************************************!*\
		  !*** ./node_modules/core-js/internals/iterators.js ***!
		  \*****************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		module.exports = {};


		/***/ }),

		/***/ "./node_modules/core-js/internals/native-symbol.js":
		/*!*********************************************************!*\
		  !*** ./node_modules/core-js/internals/native-symbol.js ***!
		  \*********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

		module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
		  // Chrome 38 Symbol has incorrect toString conversion
		  // eslint-disable-next-line no-undef
		  return !String(Symbol());
		});


		/***/ }),

		/***/ "./node_modules/core-js/internals/native-weak-map.js":
		/*!***********************************************************!*\
		  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
		  \***********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
		var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

		var WeakMap = global.WeakMap;

		module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-create.js":
		/*!*********************************************************!*\
		  !*** ./node_modules/core-js/internals/object-create.js ***!
		  \*********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
		var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
		var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
		var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
		var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
		var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
		var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
		var IE_PROTO = sharedKey('IE_PROTO');

		var PROTOTYPE = 'prototype';
		var Empty = function () { /* empty */ };

		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function () {
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = documentCreateElement('iframe');
		  var length = enumBugKeys.length;
		  var lt = '<';
		  var script = 'script';
		  var gt = '>';
		  var js = 'java' + script + ':';
		  var iframeDocument;
		  iframe.style.display = 'none';
		  html.appendChild(iframe);
		  iframe.src = String(js);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
		  return createDict();
		};

		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		module.exports = Object.create || function create(O, Properties) {
		  var result;
		  if (O !== null) {
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty();
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : defineProperties(result, Properties);
		};

		hiddenKeys[IE_PROTO] = true;


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-define-properties.js":
		/*!********************************************************************!*\
		  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
		  \********************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
		var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
		var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
		var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

		module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
		  anObject(O);
		  var keys = objectKeys(Properties);
		  var length = keys.length;
		  var i = 0;
		  var key;
		  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
		  return O;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-define-property.js":
		/*!******************************************************************!*\
		  !*** ./node_modules/core-js/internals/object-define-property.js ***!
		  \******************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
		var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
		var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
		var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

		var nativeDefineProperty = Object.defineProperty;

		exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if (IE8_DOM_DEFINE) try {
		    return nativeDefineProperty(O, P, Attributes);
		  } catch (error) { /* empty */ }
		  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
		  if ('value' in Attributes) O[P] = Attributes.value;
		  return O;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
		/*!******************************************************************************!*\
		  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
		  \******************************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
		var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
		var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
		var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
		var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
		var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
		var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

		var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

		exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
		  O = toIndexedObject(O);
		  P = toPrimitive(P, true);
		  if (IE8_DOM_DEFINE) try {
		    return nativeGetOwnPropertyDescriptor(O, P);
		  } catch (error) { /* empty */ }
		  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
		/*!*************************************************************************!*\
		  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
		  \*************************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
		var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
		var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

		var hiddenKeys = enumBugKeys.concat('length', 'prototype');

		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
		  return internalObjectKeys(O, hiddenKeys);
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
		/*!***************************************************************************!*\
		  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
		  \***************************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		exports.f = Object.getOwnPropertySymbols;


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
		/*!*******************************************************************!*\
		  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
		  \*******************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
		var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
		var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
		var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

		var IE_PROTO = sharedKey('IE_PROTO');
		var ObjectPrototype = Object.prototype;

		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
		  O = toObject(O);
		  if (has(O, IE_PROTO)) return O[IE_PROTO];
		  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
		    return O.constructor.prototype;
		  } return O instanceof Object ? ObjectPrototype : null;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-keys-internal.js":
		/*!****************************************************************!*\
		  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
		  \****************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
		var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
		var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
		var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

		var arrayIndexOf = arrayIncludes(false);

		module.exports = function (object, names) {
		  var O = toIndexedObject(object);
		  var i = 0;
		  var result = [];
		  var key;
		  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while (names.length > i) if (has(O, key = names[i++])) {
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-keys.js":
		/*!*******************************************************!*\
		  !*** ./node_modules/core-js/internals/object-keys.js ***!
		  \*******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
		var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		module.exports = Object.keys || function keys(O) {
		  return internalObjectKeys(O, enumBugKeys);
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
		/*!*************************************************************************!*\
		  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
		  \*************************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

		// Nashorn ~ JDK8 bug
		var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

		exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
		  var descriptor = getOwnPropertyDescriptor(this, V);
		  return !!descriptor && descriptor.enumerable;
		} : nativePropertyIsEnumerable;


		/***/ }),

		/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
		/*!*******************************************************************!*\
		  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
		  \*******************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

		// Works with __proto__ only. Old v8 can't work with null proto objects.
		/* eslint-disable no-proto */
		module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
		  var correctSetter = false;
		  var test = {};
		  var setter;
		  try {
		    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
		    setter.call(test, []);
		    correctSetter = test instanceof Array;
		  } catch (error) { /* empty */ }
		  return function setPrototypeOf(O, proto) {
		    validateSetPrototypeOfArguments(O, proto);
		    if (correctSetter) setter.call(O, proto);
		    else O.__proto__ = proto;
		    return O;
		  };
		}() : undefined);


		/***/ }),

		/***/ "./node_modules/core-js/internals/own-keys.js":
		/*!****************************************************!*\
		  !*** ./node_modules/core-js/internals/own-keys.js ***!
		  \****************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
		var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
		var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
		var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

		var Reflect = global.Reflect;

		// all object keys, includes non-enumerable and symbols
		module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
		  var keys = getOwnPropertyNamesModule.f(anObject(it));
		  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
		  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/path.js":
		/*!************************************************!*\
		  !*** ./node_modules/core-js/internals/path.js ***!
		  \************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


		/***/ }),

		/***/ "./node_modules/core-js/internals/redefine.js":
		/*!****************************************************!*\
		  !*** ./node_modules/core-js/internals/redefine.js ***!
		  \****************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
		var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
		var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
		var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
		var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
		var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
		var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

		var getInternalState = InternalStateModule.get;
		var enforceInternalState = InternalStateModule.enforce;
		var TEMPLATE = String(nativeFunctionToString).split('toString');

		shared('inspectSource', function (it) {
		  return nativeFunctionToString.call(it);
		});

		(module.exports = function (O, key, value, options) {
		  var unsafe = options ? !!options.unsafe : false;
		  var simple = options ? !!options.enumerable : false;
		  var noTargetGet = options ? !!options.noTargetGet : false;
		  if (typeof value == 'function') {
		    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
		    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
		  }
		  if (O === global) {
		    if (simple) O[key] = value;
		    else setGlobal(key, value);
		    return;
		  } else if (!unsafe) {
		    delete O[key];
		  } else if (!noTargetGet && O[key]) {
		    simple = true;
		  }
		  if (simple) O[key] = value;
		  else hide(O, key, value);
		// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
		})(Function.prototype, 'toString', function toString() {
		  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
		});


		/***/ }),

		/***/ "./node_modules/core-js/internals/require-object-coercible.js":
		/*!********************************************************************!*\
		  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
		  \********************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		// `RequireObjectCoercible` abstract operation
		// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
		module.exports = function (it) {
		  if (it == undefined) throw TypeError("Can't call method on " + it);
		  return it;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/set-global.js":
		/*!******************************************************!*\
		  !*** ./node_modules/core-js/internals/set-global.js ***!
		  \******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
		var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

		module.exports = function (key, value) {
		  try {
		    hide(global, key, value);
		  } catch (error) {
		    global[key] = value;
		  } return value;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
		/*!*************************************************************!*\
		  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
		  \*************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
		var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
		var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

		var TO_STRING_TAG = wellKnownSymbol('toStringTag');

		module.exports = function (it, TAG, STATIC) {
		  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
		    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
		  }
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/shared-key.js":
		/*!******************************************************!*\
		  !*** ./node_modules/core-js/internals/shared-key.js ***!
		  \******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
		var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

		var keys = shared('keys');

		module.exports = function (key) {
		  return keys[key] || (keys[key] = uid(key));
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/shared.js":
		/*!**************************************************!*\
		  !*** ./node_modules/core-js/internals/shared.js ***!
		  \**************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
		var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
		var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

		var SHARED = '__core-js_shared__';
		var store = global[SHARED] || setGlobal(SHARED, {});

		(module.exports = function (key, value) {
		  return store[key] || (store[key] = value !== undefined ? value : {});
		})('versions', []).push({
		  version: '3.1.3',
		  mode: IS_PURE ? 'pure' : 'global',
		  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
		});


		/***/ }),

		/***/ "./node_modules/core-js/internals/string-at.js":
		/*!*****************************************************!*\
		  !*** ./node_modules/core-js/internals/string-at.js ***!
		  \*****************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
		var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

		// CONVERT_TO_STRING: true  -> String#at
		// CONVERT_TO_STRING: false -> String#codePointAt
		module.exports = function (that, pos, CONVERT_TO_STRING) {
		  var S = String(requireObjectCoercible(that));
		  var position = toInteger(pos);
		  var size = S.length;
		  var first, second;
		  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
		  first = S.charCodeAt(position);
		  return first < 0xD800 || first > 0xDBFF || position + 1 === size
		    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
		      ? CONVERT_TO_STRING ? S.charAt(position) : first
		      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/to-absolute-index.js":
		/*!*************************************************************!*\
		  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
		  \*************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

		var max = Math.max;
		var min = Math.min;

		// Helper for a popular repeating case of the spec:
		// Let integer be ? ToInteger(index).
		// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
		module.exports = function (index, length) {
		  var integer = toInteger(index);
		  return integer < 0 ? max(integer + length, 0) : min(integer, length);
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/to-indexed-object.js":
		/*!*************************************************************!*\
		  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
		  \*************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		// toObject with fallback for non-array-like ES3 strings
		var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
		var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

		module.exports = function (it) {
		  return IndexedObject(requireObjectCoercible(it));
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/to-integer.js":
		/*!******************************************************!*\
		  !*** ./node_modules/core-js/internals/to-integer.js ***!
		  \******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		var ceil = Math.ceil;
		var floor = Math.floor;

		// `ToInteger` abstract operation
		// https://tc39.github.io/ecma262/#sec-tointeger
		module.exports = function (argument) {
		  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/to-length.js":
		/*!*****************************************************!*\
		  !*** ./node_modules/core-js/internals/to-length.js ***!
		  \*****************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

		var min = Math.min;

		// `ToLength` abstract operation
		// https://tc39.github.io/ecma262/#sec-tolength
		module.exports = function (argument) {
		  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/to-object.js":
		/*!*****************************************************!*\
		  !*** ./node_modules/core-js/internals/to-object.js ***!
		  \*****************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

		// `ToObject` abstract operation
		// https://tc39.github.io/ecma262/#sec-toobject
		module.exports = function (argument) {
		  return Object(requireObjectCoercible(argument));
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/to-primitive.js":
		/*!********************************************************!*\
		  !*** ./node_modules/core-js/internals/to-primitive.js ***!
		  \********************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

		// 7.1.1 ToPrimitive(input [, PreferredType])
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function (it, S) {
		  if (!isObject(it)) return it;
		  var fn, val;
		  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
		  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
		  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
		  throw TypeError("Can't convert object to primitive value");
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/uid.js":
		/*!***********************************************!*\
		  !*** ./node_modules/core-js/internals/uid.js ***!
		  \***********************************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		var id = 0;
		var postfix = Math.random();

		module.exports = function (key) {
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
		/*!*******************************************************************************!*\
		  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
		  \*******************************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
		var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

		module.exports = function (O, proto) {
		  anObject(O);
		  if (!isObject(proto) && proto !== null) {
		    throw TypeError("Can't set " + String(proto) + ' as a prototype');
		  }
		};


		/***/ }),

		/***/ "./node_modules/core-js/internals/well-known-symbol.js":
		/*!*************************************************************!*\
		  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
		  \*************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
		var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
		var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
		var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

		var Symbol = global.Symbol;
		var store = shared('wks');

		module.exports = function (name) {
		  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
		    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};


		/***/ }),

		/***/ "./node_modules/core-js/modules/es.array.from.js":
		/*!*******************************************************!*\
		  !*** ./node_modules/core-js/modules/es.array.from.js ***!
		  \*******************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
		var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
		var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

		var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
		  Array.from(iterable);
		});

		// `Array.from` method
		// https://tc39.github.io/ecma262/#sec-array.from
		$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
		  from: from
		});


		/***/ }),

		/***/ "./node_modules/core-js/modules/es.string.iterator.js":
		/*!************************************************************!*\
		  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
		  \************************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
		var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
		var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

		var STRING_ITERATOR = 'String Iterator';
		var setInternalState = InternalStateModule.set;
		var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

		// `String.prototype[@@iterator]` method
		// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
		defineIterator(String, 'String', function (iterated) {
		  setInternalState(this, {
		    type: STRING_ITERATOR,
		    string: String(iterated),
		    index: 0
		  });
		// `%StringIteratorPrototype%.next` method
		// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
		}, function next() {
		  var state = getInternalState(this);
		  var string = state.string;
		  var index = state.index;
		  var point;
		  if (index >= string.length) return { value: undefined, done: true };
		  point = codePointAt(string, index, true);
		  state.index += point.length;
		  return { value: point, done: false };
		});


		/***/ }),

		/***/ "./node_modules/webpack/buildin/global.js":
		/*!***********************************!*\
		  !*** (webpack)/buildin/global.js ***!
		  \***********************************/
		/*! no static exports found */
		/***/ (function(module, exports) {

		var g;

		// This works in non-strict mode
		g = (function() {
			return this;
		})();

		try {
			// This works if eval is allowed (see CSP)
			g = g || Function("return this")() || (1, eval)("this");
		} catch (e) {
			// This works if the window reference is available
			if (typeof window === "object") g = window;
		}

		// g can still be undefined, but nothing to do about it...
		// We return undefined, instead of nothing here, so it's
		// easier to handle this case. if(!global) { ...}

		module.exports = g;


		/***/ }),

		/***/ "./src/default-attrs.json":
		/*!********************************!*\
		  !*** ./src/default-attrs.json ***!
		  \********************************/
		/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
		/***/ (function(module) {

		module.exports = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};

		/***/ }),

		/***/ "./src/icon.js":
		/*!*********************!*\
		  !*** ./src/icon.js ***!
		  \*********************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

		var _dedupe2 = _interopRequireDefault(_dedupe);

		var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");

		var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Icon = function () {
		  function Icon(name, contents) {
		    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

		    _classCallCheck(this, Icon);

		    this.name = name;
		    this.contents = contents;
		    this.tags = tags;
		    this.attrs = _extends({}, _defaultAttrs2.default, { class: 'feather feather-' + name });
		  }

		  /**
		   * Create an SVG string.
		   * @param {Object} attrs
		   * @returns {string}
		   */


		  _createClass(Icon, [{
		    key: 'toSvg',
		    value: function toSvg() {
		      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		      var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

		      return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
		    }

		    /**
		     * Return string representation of an `Icon`.
		     *
		     * Added for backward compatibility. If old code expects `feather.icons.<name>`
		     * to be a string, `toString()` will get implicitly called.
		     *
		     * @returns {string}
		     */

		  }, {
		    key: 'toString',
		    value: function toString() {
		      return this.contents;
		    }
		  }]);

		  return Icon;
		}();

		/**
		 * Convert attributes object to string of HTML attributes.
		 * @param {Object} attrs
		 * @returns {string}
		 */


		function attrsToString(attrs) {
		  return Object.keys(attrs).map(function (key) {
		    return key + '="' + attrs[key] + '"';
		  }).join(' ');
		}

		exports.default = Icon;

		/***/ }),

		/***/ "./src/icons.js":
		/*!**********************!*\
		  !*** ./src/icons.js ***!
		  \**********************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");

		var _icon2 = _interopRequireDefault(_icon);

		var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");

		var _icons2 = _interopRequireDefault(_icons);

		var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");

		var _tags2 = _interopRequireDefault(_tags);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = Object.keys(_icons2.default).map(function (key) {
		  return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
		}).reduce(function (object, icon) {
		  object[icon.name] = icon;
		  return object;
		}, {});

		/***/ }),

		/***/ "./src/index.js":
		/*!**********************!*\
		  !*** ./src/index.js ***!
		  \**********************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {


		var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

		var _icons2 = _interopRequireDefault(_icons);

		var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");

		var _toSvg2 = _interopRequireDefault(_toSvg);

		var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");

		var _replace2 = _interopRequireDefault(_replace);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

		/***/ }),

		/***/ "./src/replace.js":
		/*!************************!*\
		  !*** ./src/replace.js ***!
		  \************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


		var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

		var _dedupe2 = _interopRequireDefault(_dedupe);

		var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

		var _icons2 = _interopRequireDefault(_icons);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
		 * corresponding to the element's `data-feather` attribute value.
		 * @param {Object} attrs
		 */
		function replace() {
		  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		  if (typeof document === 'undefined') {
		    throw new Error('`feather.replace()` only works in a browser environment.');
		  }

		  var elementsToReplace = document.querySelectorAll('[data-feather]');

		  Array.from(elementsToReplace).forEach(function (element) {
		    return replaceElement(element, attrs);
		  });
		}

		/**
		 * Replace a single HTML element with SVG markup
		 * corresponding to the element's `data-feather` attribute value.
		 * @param {HTMLElement} element
		 * @param {Object} attrs
		 */
		function replaceElement(element) {
		  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		  var elementAttrs = getAttrs(element);
		  var name = elementAttrs['data-feather'];
		  delete elementAttrs['data-feather'];

		  var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
		  var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
		  var svgElement = svgDocument.querySelector('svg');

		  element.parentNode.replaceChild(svgElement, element);
		}

		/**
		 * Get the attributes of an HTML element.
		 * @param {HTMLElement} element
		 * @returns {Object}
		 */
		function getAttrs(element) {
		  return Array.from(element.attributes).reduce(function (attrs, attr) {
		    attrs[attr.name] = attr.value;
		    return attrs;
		  }, {});
		}

		exports.default = replace;

		/***/ }),

		/***/ "./src/tags.json":
		/*!***********************!*\
		  !*** ./src/tags.json ***!
		  \***********************/
		/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
		/***/ (function(module) {

		module.exports = {"activity":["pulse","health","action","motion"],"airplay":["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],"anchor":[],"archive":["index","box"],"at-sign":["mention","at","email","message"],"award":["achievement","badge"],"aperture":["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],"battery":["power","electricity"],"battery-charging":["power","electricity"],"bell":["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],"bluetooth":["wireless"],"book-open":["read","library"],"book":["read","dictionary","booklet","magazine","library"],"bookmark":["read","clip","marker","tag"],"box":["cube"],"briefcase":["work","bag","baggage","folder"],"calendar":["date"],"camera":["photo"],"cast":["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],"circle":["off","zero","record"],"clipboard":["copy"],"clock":["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],"cloud":["weather"],"codepen":["logo"],"codesandbox":["logo"],"code":["source","programming"],"coffee":["drink","cup","mug","tea","cafe","hot","beverage"],"columns":["layout"],"command":["keyboard","cmd","terminal","prompt"],"compass":["navigation","safari","travel","direction"],"copy":["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],"cpu":["processor","technology"],"credit-card":["purchase","payment","cc"],"crop":["photo","image"],"crosshair":["aim","target"],"database":["storage","memory"],"delete":["remove"],"disc":["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],"droplet":["water"],"edit":["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],"eye":["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],"facebook":["logo","social"],"fast-forward":["music"],"figma":["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],"film":["movie","video"],"filter":["funnel","hopper"],"flag":["report"],"folder-minus":["directory"],"folder-plus":["directory"],"folder":["directory"],"framer":["logo","design","tool"],"frown":["emoji","face","bad","sad","emotion"],"gift":["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],"github":["logo","version control"],"gitlab":["logo","version control"],"globe":["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],"hash":["hashtag","number","pound"],"headphones":["music","audio","sound"],"heart":["like","love","emotion"],"help-circle":["question mark"],"hexagon":["shape","node.js","logo"],"home":["house","living"],"image":["picture"],"inbox":["email"],"instagram":["logo","camera"],"key":["password","login","authentication","secure"],"layers":["stack"],"layout":["window","webpage"],"life-bouy":["help","life ring","support"],"link":["chain","url"],"link-2":["chain","url"],"linkedin":["logo","social media"],"list":["options"],"lock":["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],"mail":["email","message"],"map-pin":["location","navigation","travel","marker"],"map":["location","navigation","travel"],"maximize":["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],"meh":["emoji","face","neutral","emotion"],"menu":["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],"mic":["record","sound","listen"],"minimize":["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],"minus":["subtract"],"monitor":["tv","screen","display"],"moon":["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],"move":["arrows"],"music":["note"],"navigation":["location","travel"],"navigation-2":["location","travel"],"octagon":["stop"],"package":["box","container"],"paperclip":["attachment"],"pause":["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],"percent":["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],"phone":["call"],"play":["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],"plus":["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],"pocket":["logo","save"],"power":["on","off"],"printer":["fax","office","device"],"radio":["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],"repeat":["loop","arrows"],"rewind":["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],"rss":["feed","subscribe"],"save":["floppy disk"],"scissors":["cut"],"search":["find","magnifier","magnifying glass"],"send":["message","mail","email","paper airplane","paper aeroplane"],"settings":["cog","edit","gear","preferences"],"share-2":["network","connections"],"shield":["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],"shuffle":["music"],"skip-back":["music"],"skip-forward":["music"],"slack":["logo"],"slash":["ban","no"],"sliders":["settings","controls"],"smartphone":["cellphone","device"],"smile":["emoji","face","happy","good","emotion"],"speaker":["audio","music"],"star":["bookmark","favorite","like"],"stop-circle":["media","music"],"sun":["brightness","weather","light"],"sunrise":["weather","time","morning","day"],"sunset":["weather","time","evening","night"],"tablet":["device"],"tag":["label"],"target":["logo","bullseye"],"terminal":["code","command line","prompt"],"thermometer":["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],"tool":["settings","spanner"],"trash":["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],"triangle":["delta"],"truck":["delivery","van","shipping","transport","lorry"],"tv":["television","stream"],"twitch":["logo"],"twitter":["logo","social"],"type":["text"],"umbrella":["rain","weather"],"unlock":["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],"user":["person","account"],"users":["group"],"video-off":["camera","movie","film"],"video":["camera","movie","film"],"voicemail":["phone"],"volume":["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],"watch":["clock","time"],"wifi-off":["disabled"],"wifi":["connection","signal","wireless"],"wind":["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],"x":["cancel","close","delete","remove","times","clear"],"youtube":["logo","video","play"],"zap-off":["flash","camera","lightning"],"zap":["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]};

		/***/ }),

		/***/ "./src/to-svg.js":
		/*!***********************!*\
		  !*** ./src/to-svg.js ***!
		  \***********************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

		var _icons2 = _interopRequireDefault(_icons);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * Create an SVG string.
		 * @deprecated
		 * @param {string} name
		 * @param {Object} attrs
		 * @returns {string}
		 */
		function toSvg(name) {
		  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		  console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');

		  if (!name) {
		    throw new Error('The required `key` (icon name) parameter is missing.');
		  }

		  if (!_icons2.default[name]) {
		    throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
		  }

		  return _icons2.default[name].toSvg(attrs);
		}

		exports.default = toSvg;

		/***/ }),

		/***/ 0:
		/*!**************************************************!*\
		  !*** multi core-js/es/array/from ./src/index.js ***!
		  \**************************************************/
		/*! no static exports found */
		/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__(/*! core-js/es/array/from */"./node_modules/core-js/es/array/from.js");
		module.exports = __webpack_require__(/*! /home/runner/work/feather/feather/src/index.js */"./src/index.js");


		/***/ })

		/******/ });
		});
		
	} (feather$1));

	var feather = /*@__PURE__*/getDefaultExportFromCjs(featherExports);

	/*
	Stimulus 3.2.1
	Copyright © 2022 Basecamp, LLC
	 */
	class EventListener {
	    constructor(eventTarget, eventName, eventOptions) {
	        this.eventTarget = eventTarget;
	        this.eventName = eventName;
	        this.eventOptions = eventOptions;
	        this.unorderedBindings = new Set();
	    }
	    connect() {
	        this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
	    }
	    disconnect() {
	        this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
	    }
	    bindingConnected(binding) {
	        this.unorderedBindings.add(binding);
	    }
	    bindingDisconnected(binding) {
	        this.unorderedBindings.delete(binding);
	    }
	    handleEvent(event) {
	        const extendedEvent = extendEvent(event);
	        for (const binding of this.bindings) {
	            if (extendedEvent.immediatePropagationStopped) {
	                break;
	            }
	            else {
	                binding.handleEvent(extendedEvent);
	            }
	        }
	    }
	    hasBindings() {
	        return this.unorderedBindings.size > 0;
	    }
	    get bindings() {
	        return Array.from(this.unorderedBindings).sort((left, right) => {
	            const leftIndex = left.index, rightIndex = right.index;
	            return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
	        });
	    }
	}
	function extendEvent(event) {
	    if ("immediatePropagationStopped" in event) {
	        return event;
	    }
	    else {
	        const { stopImmediatePropagation } = event;
	        return Object.assign(event, {
	            immediatePropagationStopped: false,
	            stopImmediatePropagation() {
	                this.immediatePropagationStopped = true;
	                stopImmediatePropagation.call(this);
	            },
	        });
	    }
	}

	class Dispatcher {
	    constructor(application) {
	        this.application = application;
	        this.eventListenerMaps = new Map();
	        this.started = false;
	    }
	    start() {
	        if (!this.started) {
	            this.started = true;
	            this.eventListeners.forEach((eventListener) => eventListener.connect());
	        }
	    }
	    stop() {
	        if (this.started) {
	            this.started = false;
	            this.eventListeners.forEach((eventListener) => eventListener.disconnect());
	        }
	    }
	    get eventListeners() {
	        return Array.from(this.eventListenerMaps.values()).reduce((listeners, map) => listeners.concat(Array.from(map.values())), []);
	    }
	    bindingConnected(binding) {
	        this.fetchEventListenerForBinding(binding).bindingConnected(binding);
	    }
	    bindingDisconnected(binding, clearEventListeners = false) {
	        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
	        if (clearEventListeners)
	            this.clearEventListenersForBinding(binding);
	    }
	    handleError(error, message, detail = {}) {
	        this.application.handleError(error, `Error ${message}`, detail);
	    }
	    clearEventListenersForBinding(binding) {
	        const eventListener = this.fetchEventListenerForBinding(binding);
	        if (!eventListener.hasBindings()) {
	            eventListener.disconnect();
	            this.removeMappedEventListenerFor(binding);
	        }
	    }
	    removeMappedEventListenerFor(binding) {
	        const { eventTarget, eventName, eventOptions } = binding;
	        const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
	        const cacheKey = this.cacheKey(eventName, eventOptions);
	        eventListenerMap.delete(cacheKey);
	        if (eventListenerMap.size == 0)
	            this.eventListenerMaps.delete(eventTarget);
	    }
	    fetchEventListenerForBinding(binding) {
	        const { eventTarget, eventName, eventOptions } = binding;
	        return this.fetchEventListener(eventTarget, eventName, eventOptions);
	    }
	    fetchEventListener(eventTarget, eventName, eventOptions) {
	        const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
	        const cacheKey = this.cacheKey(eventName, eventOptions);
	        let eventListener = eventListenerMap.get(cacheKey);
	        if (!eventListener) {
	            eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
	            eventListenerMap.set(cacheKey, eventListener);
	        }
	        return eventListener;
	    }
	    createEventListener(eventTarget, eventName, eventOptions) {
	        const eventListener = new EventListener(eventTarget, eventName, eventOptions);
	        if (this.started) {
	            eventListener.connect();
	        }
	        return eventListener;
	    }
	    fetchEventListenerMapForEventTarget(eventTarget) {
	        let eventListenerMap = this.eventListenerMaps.get(eventTarget);
	        if (!eventListenerMap) {
	            eventListenerMap = new Map();
	            this.eventListenerMaps.set(eventTarget, eventListenerMap);
	        }
	        return eventListenerMap;
	    }
	    cacheKey(eventName, eventOptions) {
	        const parts = [eventName];
	        Object.keys(eventOptions)
	            .sort()
	            .forEach((key) => {
	            parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
	        });
	        return parts.join(":");
	    }
	}

	const defaultActionDescriptorFilters = {
	    stop({ event, value }) {
	        if (value)
	            event.stopPropagation();
	        return true;
	    },
	    prevent({ event, value }) {
	        if (value)
	            event.preventDefault();
	        return true;
	    },
	    self({ event, value, element }) {
	        if (value) {
	            return element === event.target;
	        }
	        else {
	            return true;
	        }
	    },
	};
	const descriptorPattern = /^(?:(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
	function parseActionDescriptorString(descriptorString) {
	    const source = descriptorString.trim();
	    const matches = source.match(descriptorPattern) || [];
	    let eventName = matches[1];
	    let keyFilter = matches[2];
	    if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName)) {
	        eventName += `.${keyFilter}`;
	        keyFilter = "";
	    }
	    return {
	        eventTarget: parseEventTarget(matches[3]),
	        eventName,
	        eventOptions: matches[6] ? parseEventOptions(matches[6]) : {},
	        identifier: matches[4],
	        methodName: matches[5],
	        keyFilter,
	    };
	}
	function parseEventTarget(eventTargetName) {
	    if (eventTargetName == "window") {
	        return window;
	    }
	    else if (eventTargetName == "document") {
	        return document;
	    }
	}
	function parseEventOptions(eventOptions) {
	    return eventOptions
	        .split(":")
	        .reduce((options, token) => Object.assign(options, { [token.replace(/^!/, "")]: !/^!/.test(token) }), {});
	}
	function stringifyEventTarget(eventTarget) {
	    if (eventTarget == window) {
	        return "window";
	    }
	    else if (eventTarget == document) {
	        return "document";
	    }
	}

	function camelize(value) {
	    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
	}
	function namespaceCamelize(value) {
	    return camelize(value.replace(/--/g, "-").replace(/__/g, "_"));
	}
	function capitalize(value) {
	    return value.charAt(0).toUpperCase() + value.slice(1);
	}
	function dasherize(value) {
	    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
	}
	function tokenize(value) {
	    return value.match(/[^\s]+/g) || [];
	}

	class Action {
	    constructor(element, index, descriptor, schema) {
	        this.element = element;
	        this.index = index;
	        this.eventTarget = descriptor.eventTarget || element;
	        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
	        this.eventOptions = descriptor.eventOptions || {};
	        this.identifier = descriptor.identifier || error("missing identifier");
	        this.methodName = descriptor.methodName || error("missing method name");
	        this.keyFilter = descriptor.keyFilter || "";
	        this.schema = schema;
	    }
	    static forToken(token, schema) {
	        return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
	    }
	    toString() {
	        const eventFilter = this.keyFilter ? `.${this.keyFilter}` : "";
	        const eventTarget = this.eventTargetName ? `@${this.eventTargetName}` : "";
	        return `${this.eventName}${eventFilter}${eventTarget}->${this.identifier}#${this.methodName}`;
	    }
	    isFilterTarget(event) {
	        if (!this.keyFilter) {
	            return false;
	        }
	        const filteres = this.keyFilter.split("+");
	        const modifiers = ["meta", "ctrl", "alt", "shift"];
	        const [meta, ctrl, alt, shift] = modifiers.map((modifier) => filteres.includes(modifier));
	        if (event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift) {
	            return true;
	        }
	        const standardFilter = filteres.filter((key) => !modifiers.includes(key))[0];
	        if (!standardFilter) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(this.keyMappings, standardFilter)) {
	            error(`contains unknown key filter: ${this.keyFilter}`);
	        }
	        return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
	    }
	    get params() {
	        const params = {};
	        const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`, "i");
	        for (const { name, value } of Array.from(this.element.attributes)) {
	            const match = name.match(pattern);
	            const key = match && match[1];
	            if (key) {
	                params[camelize(key)] = typecast(value);
	            }
	        }
	        return params;
	    }
	    get eventTargetName() {
	        return stringifyEventTarget(this.eventTarget);
	    }
	    get keyMappings() {
	        return this.schema.keyMappings;
	    }
	}
	const defaultEventNames = {
	    a: () => "click",
	    button: () => "click",
	    form: () => "submit",
	    details: () => "toggle",
	    input: (e) => (e.getAttribute("type") == "submit" ? "click" : "input"),
	    select: () => "change",
	    textarea: () => "input",
	};
	function getDefaultEventNameForElement(element) {
	    const tagName = element.tagName.toLowerCase();
	    if (tagName in defaultEventNames) {
	        return defaultEventNames[tagName](element);
	    }
	}
	function error(message) {
	    throw new Error(message);
	}
	function typecast(value) {
	    try {
	        return JSON.parse(value);
	    }
	    catch (o_O) {
	        return value;
	    }
	}

	class Binding {
	    constructor(context, action) {
	        this.context = context;
	        this.action = action;
	    }
	    get index() {
	        return this.action.index;
	    }
	    get eventTarget() {
	        return this.action.eventTarget;
	    }
	    get eventOptions() {
	        return this.action.eventOptions;
	    }
	    get identifier() {
	        return this.context.identifier;
	    }
	    handleEvent(event) {
	        if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(event)) {
	            this.invokeWithEvent(event);
	        }
	    }
	    get eventName() {
	        return this.action.eventName;
	    }
	    get method() {
	        const method = this.controller[this.methodName];
	        if (typeof method == "function") {
	            return method;
	        }
	        throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
	    }
	    applyEventModifiers(event) {
	        const { element } = this.action;
	        const { actionDescriptorFilters } = this.context.application;
	        let passes = true;
	        for (const [name, value] of Object.entries(this.eventOptions)) {
	            if (name in actionDescriptorFilters) {
	                const filter = actionDescriptorFilters[name];
	                passes = passes && filter({ name, value, event, element });
	            }
	            else {
	                continue;
	            }
	        }
	        return passes;
	    }
	    invokeWithEvent(event) {
	        const { target, currentTarget } = event;
	        try {
	            const { params } = this.action;
	            const actionEvent = Object.assign(event, { params });
	            this.method.call(this.controller, actionEvent);
	            this.context.logDebugActivity(this.methodName, { event, target, currentTarget, action: this.methodName });
	        }
	        catch (error) {
	            const { identifier, controller, element, index } = this;
	            const detail = { identifier, controller, element, index, event };
	            this.context.handleError(error, `invoking action "${this.action}"`, detail);
	        }
	    }
	    willBeInvokedByEvent(event) {
	        const eventTarget = event.target;
	        if (event instanceof KeyboardEvent && this.action.isFilterTarget(event)) {
	            return false;
	        }
	        if (this.element === eventTarget) {
	            return true;
	        }
	        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
	            return this.scope.containsElement(eventTarget);
	        }
	        else {
	            return this.scope.containsElement(this.action.element);
	        }
	    }
	    get controller() {
	        return this.context.controller;
	    }
	    get methodName() {
	        return this.action.methodName;
	    }
	    get element() {
	        return this.scope.element;
	    }
	    get scope() {
	        return this.context.scope;
	    }
	}

	class ElementObserver {
	    constructor(element, delegate) {
	        this.mutationObserverInit = { attributes: true, childList: true, subtree: true };
	        this.element = element;
	        this.started = false;
	        this.delegate = delegate;
	        this.elements = new Set();
	        this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
	    }
	    start() {
	        if (!this.started) {
	            this.started = true;
	            this.mutationObserver.observe(this.element, this.mutationObserverInit);
	            this.refresh();
	        }
	    }
	    pause(callback) {
	        if (this.started) {
	            this.mutationObserver.disconnect();
	            this.started = false;
	        }
	        callback();
	        if (!this.started) {
	            this.mutationObserver.observe(this.element, this.mutationObserverInit);
	            this.started = true;
	        }
	    }
	    stop() {
	        if (this.started) {
	            this.mutationObserver.takeRecords();
	            this.mutationObserver.disconnect();
	            this.started = false;
	        }
	    }
	    refresh() {
	        if (this.started) {
	            const matches = new Set(this.matchElementsInTree());
	            for (const element of Array.from(this.elements)) {
	                if (!matches.has(element)) {
	                    this.removeElement(element);
	                }
	            }
	            for (const element of Array.from(matches)) {
	                this.addElement(element);
	            }
	        }
	    }
	    processMutations(mutations) {
	        if (this.started) {
	            for (const mutation of mutations) {
	                this.processMutation(mutation);
	            }
	        }
	    }
	    processMutation(mutation) {
	        if (mutation.type == "attributes") {
	            this.processAttributeChange(mutation.target, mutation.attributeName);
	        }
	        else if (mutation.type == "childList") {
	            this.processRemovedNodes(mutation.removedNodes);
	            this.processAddedNodes(mutation.addedNodes);
	        }
	    }
	    processAttributeChange(node, attributeName) {
	        const element = node;
	        if (this.elements.has(element)) {
	            if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
	                this.delegate.elementAttributeChanged(element, attributeName);
	            }
	            else {
	                this.removeElement(element);
	            }
	        }
	        else if (this.matchElement(element)) {
	            this.addElement(element);
	        }
	    }
	    processRemovedNodes(nodes) {
	        for (const node of Array.from(nodes)) {
	            const element = this.elementFromNode(node);
	            if (element) {
	                this.processTree(element, this.removeElement);
	            }
	        }
	    }
	    processAddedNodes(nodes) {
	        for (const node of Array.from(nodes)) {
	            const element = this.elementFromNode(node);
	            if (element && this.elementIsActive(element)) {
	                this.processTree(element, this.addElement);
	            }
	        }
	    }
	    matchElement(element) {
	        return this.delegate.matchElement(element);
	    }
	    matchElementsInTree(tree = this.element) {
	        return this.delegate.matchElementsInTree(tree);
	    }
	    processTree(tree, processor) {
	        for (const element of this.matchElementsInTree(tree)) {
	            processor.call(this, element);
	        }
	    }
	    elementFromNode(node) {
	        if (node.nodeType == Node.ELEMENT_NODE) {
	            return node;
	        }
	    }
	    elementIsActive(element) {
	        if (element.isConnected != this.element.isConnected) {
	            return false;
	        }
	        else {
	            return this.element.contains(element);
	        }
	    }
	    addElement(element) {
	        if (!this.elements.has(element)) {
	            if (this.elementIsActive(element)) {
	                this.elements.add(element);
	                if (this.delegate.elementMatched) {
	                    this.delegate.elementMatched(element);
	                }
	            }
	        }
	    }
	    removeElement(element) {
	        if (this.elements.has(element)) {
	            this.elements.delete(element);
	            if (this.delegate.elementUnmatched) {
	                this.delegate.elementUnmatched(element);
	            }
	        }
	    }
	}

	class AttributeObserver {
	    constructor(element, attributeName, delegate) {
	        this.attributeName = attributeName;
	        this.delegate = delegate;
	        this.elementObserver = new ElementObserver(element, this);
	    }
	    get element() {
	        return this.elementObserver.element;
	    }
	    get selector() {
	        return `[${this.attributeName}]`;
	    }
	    start() {
	        this.elementObserver.start();
	    }
	    pause(callback) {
	        this.elementObserver.pause(callback);
	    }
	    stop() {
	        this.elementObserver.stop();
	    }
	    refresh() {
	        this.elementObserver.refresh();
	    }
	    get started() {
	        return this.elementObserver.started;
	    }
	    matchElement(element) {
	        return element.hasAttribute(this.attributeName);
	    }
	    matchElementsInTree(tree) {
	        const match = this.matchElement(tree) ? [tree] : [];
	        const matches = Array.from(tree.querySelectorAll(this.selector));
	        return match.concat(matches);
	    }
	    elementMatched(element) {
	        if (this.delegate.elementMatchedAttribute) {
	            this.delegate.elementMatchedAttribute(element, this.attributeName);
	        }
	    }
	    elementUnmatched(element) {
	        if (this.delegate.elementUnmatchedAttribute) {
	            this.delegate.elementUnmatchedAttribute(element, this.attributeName);
	        }
	    }
	    elementAttributeChanged(element, attributeName) {
	        if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
	            this.delegate.elementAttributeValueChanged(element, attributeName);
	        }
	    }
	}

	function add(map, key, value) {
	    fetch$1(map, key).add(value);
	}
	function del(map, key, value) {
	    fetch$1(map, key).delete(value);
	    prune(map, key);
	}
	function fetch$1(map, key) {
	    let values = map.get(key);
	    if (!values) {
	        values = new Set();
	        map.set(key, values);
	    }
	    return values;
	}
	function prune(map, key) {
	    const values = map.get(key);
	    if (values != null && values.size == 0) {
	        map.delete(key);
	    }
	}

	class Multimap {
	    constructor() {
	        this.valuesByKey = new Map();
	    }
	    get keys() {
	        return Array.from(this.valuesByKey.keys());
	    }
	    get values() {
	        const sets = Array.from(this.valuesByKey.values());
	        return sets.reduce((values, set) => values.concat(Array.from(set)), []);
	    }
	    get size() {
	        const sets = Array.from(this.valuesByKey.values());
	        return sets.reduce((size, set) => size + set.size, 0);
	    }
	    add(key, value) {
	        add(this.valuesByKey, key, value);
	    }
	    delete(key, value) {
	        del(this.valuesByKey, key, value);
	    }
	    has(key, value) {
	        const values = this.valuesByKey.get(key);
	        return values != null && values.has(value);
	    }
	    hasKey(key) {
	        return this.valuesByKey.has(key);
	    }
	    hasValue(value) {
	        const sets = Array.from(this.valuesByKey.values());
	        return sets.some((set) => set.has(value));
	    }
	    getValuesForKey(key) {
	        const values = this.valuesByKey.get(key);
	        return values ? Array.from(values) : [];
	    }
	    getKeysForValue(value) {
	        return Array.from(this.valuesByKey)
	            .filter(([_key, values]) => values.has(value))
	            .map(([key, _values]) => key);
	    }
	}

	class SelectorObserver {
	    constructor(element, selector, delegate, details = {}) {
	        this.selector = selector;
	        this.details = details;
	        this.elementObserver = new ElementObserver(element, this);
	        this.delegate = delegate;
	        this.matchesByElement = new Multimap();
	    }
	    get started() {
	        return this.elementObserver.started;
	    }
	    start() {
	        this.elementObserver.start();
	    }
	    pause(callback) {
	        this.elementObserver.pause(callback);
	    }
	    stop() {
	        this.elementObserver.stop();
	    }
	    refresh() {
	        this.elementObserver.refresh();
	    }
	    get element() {
	        return this.elementObserver.element;
	    }
	    matchElement(element) {
	        const matches = element.matches(this.selector);
	        if (this.delegate.selectorMatchElement) {
	            return matches && this.delegate.selectorMatchElement(element, this.details);
	        }
	        return matches;
	    }
	    matchElementsInTree(tree) {
	        const match = this.matchElement(tree) ? [tree] : [];
	        const matches = Array.from(tree.querySelectorAll(this.selector)).filter((match) => this.matchElement(match));
	        return match.concat(matches);
	    }
	    elementMatched(element) {
	        this.selectorMatched(element);
	    }
	    elementUnmatched(element) {
	        this.selectorUnmatched(element);
	    }
	    elementAttributeChanged(element, _attributeName) {
	        const matches = this.matchElement(element);
	        const matchedBefore = this.matchesByElement.has(this.selector, element);
	        if (!matches && matchedBefore) {
	            this.selectorUnmatched(element);
	        }
	    }
	    selectorMatched(element) {
	        if (this.delegate.selectorMatched) {
	            this.delegate.selectorMatched(element, this.selector, this.details);
	            this.matchesByElement.add(this.selector, element);
	        }
	    }
	    selectorUnmatched(element) {
	        this.delegate.selectorUnmatched(element, this.selector, this.details);
	        this.matchesByElement.delete(this.selector, element);
	    }
	}

	class StringMapObserver {
	    constructor(element, delegate) {
	        this.element = element;
	        this.delegate = delegate;
	        this.started = false;
	        this.stringMap = new Map();
	        this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
	    }
	    start() {
	        if (!this.started) {
	            this.started = true;
	            this.mutationObserver.observe(this.element, { attributes: true, attributeOldValue: true });
	            this.refresh();
	        }
	    }
	    stop() {
	        if (this.started) {
	            this.mutationObserver.takeRecords();
	            this.mutationObserver.disconnect();
	            this.started = false;
	        }
	    }
	    refresh() {
	        if (this.started) {
	            for (const attributeName of this.knownAttributeNames) {
	                this.refreshAttribute(attributeName, null);
	            }
	        }
	    }
	    processMutations(mutations) {
	        if (this.started) {
	            for (const mutation of mutations) {
	                this.processMutation(mutation);
	            }
	        }
	    }
	    processMutation(mutation) {
	        const attributeName = mutation.attributeName;
	        if (attributeName) {
	            this.refreshAttribute(attributeName, mutation.oldValue);
	        }
	    }
	    refreshAttribute(attributeName, oldValue) {
	        const key = this.delegate.getStringMapKeyForAttribute(attributeName);
	        if (key != null) {
	            if (!this.stringMap.has(attributeName)) {
	                this.stringMapKeyAdded(key, attributeName);
	            }
	            const value = this.element.getAttribute(attributeName);
	            if (this.stringMap.get(attributeName) != value) {
	                this.stringMapValueChanged(value, key, oldValue);
	            }
	            if (value == null) {
	                const oldValue = this.stringMap.get(attributeName);
	                this.stringMap.delete(attributeName);
	                if (oldValue)
	                    this.stringMapKeyRemoved(key, attributeName, oldValue);
	            }
	            else {
	                this.stringMap.set(attributeName, value);
	            }
	        }
	    }
	    stringMapKeyAdded(key, attributeName) {
	        if (this.delegate.stringMapKeyAdded) {
	            this.delegate.stringMapKeyAdded(key, attributeName);
	        }
	    }
	    stringMapValueChanged(value, key, oldValue) {
	        if (this.delegate.stringMapValueChanged) {
	            this.delegate.stringMapValueChanged(value, key, oldValue);
	        }
	    }
	    stringMapKeyRemoved(key, attributeName, oldValue) {
	        if (this.delegate.stringMapKeyRemoved) {
	            this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
	        }
	    }
	    get knownAttributeNames() {
	        return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
	    }
	    get currentAttributeNames() {
	        return Array.from(this.element.attributes).map((attribute) => attribute.name);
	    }
	    get recordedAttributeNames() {
	        return Array.from(this.stringMap.keys());
	    }
	}

	class TokenListObserver {
	    constructor(element, attributeName, delegate) {
	        this.attributeObserver = new AttributeObserver(element, attributeName, this);
	        this.delegate = delegate;
	        this.tokensByElement = new Multimap();
	    }
	    get started() {
	        return this.attributeObserver.started;
	    }
	    start() {
	        this.attributeObserver.start();
	    }
	    pause(callback) {
	        this.attributeObserver.pause(callback);
	    }
	    stop() {
	        this.attributeObserver.stop();
	    }
	    refresh() {
	        this.attributeObserver.refresh();
	    }
	    get element() {
	        return this.attributeObserver.element;
	    }
	    get attributeName() {
	        return this.attributeObserver.attributeName;
	    }
	    elementMatchedAttribute(element) {
	        this.tokensMatched(this.readTokensForElement(element));
	    }
	    elementAttributeValueChanged(element) {
	        const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
	        this.tokensUnmatched(unmatchedTokens);
	        this.tokensMatched(matchedTokens);
	    }
	    elementUnmatchedAttribute(element) {
	        this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
	    }
	    tokensMatched(tokens) {
	        tokens.forEach((token) => this.tokenMatched(token));
	    }
	    tokensUnmatched(tokens) {
	        tokens.forEach((token) => this.tokenUnmatched(token));
	    }
	    tokenMatched(token) {
	        this.delegate.tokenMatched(token);
	        this.tokensByElement.add(token.element, token);
	    }
	    tokenUnmatched(token) {
	        this.delegate.tokenUnmatched(token);
	        this.tokensByElement.delete(token.element, token);
	    }
	    refreshTokensForElement(element) {
	        const previousTokens = this.tokensByElement.getValuesForKey(element);
	        const currentTokens = this.readTokensForElement(element);
	        const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken]) => !tokensAreEqual(previousToken, currentToken));
	        if (firstDifferingIndex == -1) {
	            return [[], []];
	        }
	        else {
	            return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
	        }
	    }
	    readTokensForElement(element) {
	        const attributeName = this.attributeName;
	        const tokenString = element.getAttribute(attributeName) || "";
	        return parseTokenString(tokenString, element, attributeName);
	    }
	}
	function parseTokenString(tokenString, element, attributeName) {
	    return tokenString
	        .trim()
	        .split(/\s+/)
	        .filter((content) => content.length)
	        .map((content, index) => ({ element, attributeName, content, index }));
	}
	function zip(left, right) {
	    const length = Math.max(left.length, right.length);
	    return Array.from({ length }, (_, index) => [left[index], right[index]]);
	}
	function tokensAreEqual(left, right) {
	    return left && right && left.index == right.index && left.content == right.content;
	}

	class ValueListObserver {
	    constructor(element, attributeName, delegate) {
	        this.tokenListObserver = new TokenListObserver(element, attributeName, this);
	        this.delegate = delegate;
	        this.parseResultsByToken = new WeakMap();
	        this.valuesByTokenByElement = new WeakMap();
	    }
	    get started() {
	        return this.tokenListObserver.started;
	    }
	    start() {
	        this.tokenListObserver.start();
	    }
	    stop() {
	        this.tokenListObserver.stop();
	    }
	    refresh() {
	        this.tokenListObserver.refresh();
	    }
	    get element() {
	        return this.tokenListObserver.element;
	    }
	    get attributeName() {
	        return this.tokenListObserver.attributeName;
	    }
	    tokenMatched(token) {
	        const { element } = token;
	        const { value } = this.fetchParseResultForToken(token);
	        if (value) {
	            this.fetchValuesByTokenForElement(element).set(token, value);
	            this.delegate.elementMatchedValue(element, value);
	        }
	    }
	    tokenUnmatched(token) {
	        const { element } = token;
	        const { value } = this.fetchParseResultForToken(token);
	        if (value) {
	            this.fetchValuesByTokenForElement(element).delete(token);
	            this.delegate.elementUnmatchedValue(element, value);
	        }
	    }
	    fetchParseResultForToken(token) {
	        let parseResult = this.parseResultsByToken.get(token);
	        if (!parseResult) {
	            parseResult = this.parseToken(token);
	            this.parseResultsByToken.set(token, parseResult);
	        }
	        return parseResult;
	    }
	    fetchValuesByTokenForElement(element) {
	        let valuesByToken = this.valuesByTokenByElement.get(element);
	        if (!valuesByToken) {
	            valuesByToken = new Map();
	            this.valuesByTokenByElement.set(element, valuesByToken);
	        }
	        return valuesByToken;
	    }
	    parseToken(token) {
	        try {
	            const value = this.delegate.parseValueForToken(token);
	            return { value };
	        }
	        catch (error) {
	            return { error };
	        }
	    }
	}

	class BindingObserver {
	    constructor(context, delegate) {
	        this.context = context;
	        this.delegate = delegate;
	        this.bindingsByAction = new Map();
	    }
	    start() {
	        if (!this.valueListObserver) {
	            this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
	            this.valueListObserver.start();
	        }
	    }
	    stop() {
	        if (this.valueListObserver) {
	            this.valueListObserver.stop();
	            delete this.valueListObserver;
	            this.disconnectAllActions();
	        }
	    }
	    get element() {
	        return this.context.element;
	    }
	    get identifier() {
	        return this.context.identifier;
	    }
	    get actionAttribute() {
	        return this.schema.actionAttribute;
	    }
	    get schema() {
	        return this.context.schema;
	    }
	    get bindings() {
	        return Array.from(this.bindingsByAction.values());
	    }
	    connectAction(action) {
	        const binding = new Binding(this.context, action);
	        this.bindingsByAction.set(action, binding);
	        this.delegate.bindingConnected(binding);
	    }
	    disconnectAction(action) {
	        const binding = this.bindingsByAction.get(action);
	        if (binding) {
	            this.bindingsByAction.delete(action);
	            this.delegate.bindingDisconnected(binding);
	        }
	    }
	    disconnectAllActions() {
	        this.bindings.forEach((binding) => this.delegate.bindingDisconnected(binding, true));
	        this.bindingsByAction.clear();
	    }
	    parseValueForToken(token) {
	        const action = Action.forToken(token, this.schema);
	        if (action.identifier == this.identifier) {
	            return action;
	        }
	    }
	    elementMatchedValue(element, action) {
	        this.connectAction(action);
	    }
	    elementUnmatchedValue(element, action) {
	        this.disconnectAction(action);
	    }
	}

	class ValueObserver {
	    constructor(context, receiver) {
	        this.context = context;
	        this.receiver = receiver;
	        this.stringMapObserver = new StringMapObserver(this.element, this);
	        this.valueDescriptorMap = this.controller.valueDescriptorMap;
	    }
	    start() {
	        this.stringMapObserver.start();
	        this.invokeChangedCallbacksForDefaultValues();
	    }
	    stop() {
	        this.stringMapObserver.stop();
	    }
	    get element() {
	        return this.context.element;
	    }
	    get controller() {
	        return this.context.controller;
	    }
	    getStringMapKeyForAttribute(attributeName) {
	        if (attributeName in this.valueDescriptorMap) {
	            return this.valueDescriptorMap[attributeName].name;
	        }
	    }
	    stringMapKeyAdded(key, attributeName) {
	        const descriptor = this.valueDescriptorMap[attributeName];
	        if (!this.hasValue(key)) {
	            this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
	        }
	    }
	    stringMapValueChanged(value, name, oldValue) {
	        const descriptor = this.valueDescriptorNameMap[name];
	        if (value === null)
	            return;
	        if (oldValue === null) {
	            oldValue = descriptor.writer(descriptor.defaultValue);
	        }
	        this.invokeChangedCallback(name, value, oldValue);
	    }
	    stringMapKeyRemoved(key, attributeName, oldValue) {
	        const descriptor = this.valueDescriptorNameMap[key];
	        if (this.hasValue(key)) {
	            this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
	        }
	        else {
	            this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
	        }
	    }
	    invokeChangedCallbacksForDefaultValues() {
	        for (const { key, name, defaultValue, writer } of this.valueDescriptors) {
	            if (defaultValue != undefined && !this.controller.data.has(key)) {
	                this.invokeChangedCallback(name, writer(defaultValue), undefined);
	            }
	        }
	    }
	    invokeChangedCallback(name, rawValue, rawOldValue) {
	        const changedMethodName = `${name}Changed`;
	        const changedMethod = this.receiver[changedMethodName];
	        if (typeof changedMethod == "function") {
	            const descriptor = this.valueDescriptorNameMap[name];
	            try {
	                const value = descriptor.reader(rawValue);
	                let oldValue = rawOldValue;
	                if (rawOldValue) {
	                    oldValue = descriptor.reader(rawOldValue);
	                }
	                changedMethod.call(this.receiver, value, oldValue);
	            }
	            catch (error) {
	                if (error instanceof TypeError) {
	                    error.message = `Stimulus Value "${this.context.identifier}.${descriptor.name}" - ${error.message}`;
	                }
	                throw error;
	            }
	        }
	    }
	    get valueDescriptors() {
	        const { valueDescriptorMap } = this;
	        return Object.keys(valueDescriptorMap).map((key) => valueDescriptorMap[key]);
	    }
	    get valueDescriptorNameMap() {
	        const descriptors = {};
	        Object.keys(this.valueDescriptorMap).forEach((key) => {
	            const descriptor = this.valueDescriptorMap[key];
	            descriptors[descriptor.name] = descriptor;
	        });
	        return descriptors;
	    }
	    hasValue(attributeName) {
	        const descriptor = this.valueDescriptorNameMap[attributeName];
	        const hasMethodName = `has${capitalize(descriptor.name)}`;
	        return this.receiver[hasMethodName];
	    }
	}

	class TargetObserver {
	    constructor(context, delegate) {
	        this.context = context;
	        this.delegate = delegate;
	        this.targetsByName = new Multimap();
	    }
	    start() {
	        if (!this.tokenListObserver) {
	            this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
	            this.tokenListObserver.start();
	        }
	    }
	    stop() {
	        if (this.tokenListObserver) {
	            this.disconnectAllTargets();
	            this.tokenListObserver.stop();
	            delete this.tokenListObserver;
	        }
	    }
	    tokenMatched({ element, content: name }) {
	        if (this.scope.containsElement(element)) {
	            this.connectTarget(element, name);
	        }
	    }
	    tokenUnmatched({ element, content: name }) {
	        this.disconnectTarget(element, name);
	    }
	    connectTarget(element, name) {
	        var _a;
	        if (!this.targetsByName.has(name, element)) {
	            this.targetsByName.add(name, element);
	            (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetConnected(element, name));
	        }
	    }
	    disconnectTarget(element, name) {
	        var _a;
	        if (this.targetsByName.has(name, element)) {
	            this.targetsByName.delete(name, element);
	            (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetDisconnected(element, name));
	        }
	    }
	    disconnectAllTargets() {
	        for (const name of this.targetsByName.keys) {
	            for (const element of this.targetsByName.getValuesForKey(name)) {
	                this.disconnectTarget(element, name);
	            }
	        }
	    }
	    get attributeName() {
	        return `data-${this.context.identifier}-target`;
	    }
	    get element() {
	        return this.context.element;
	    }
	    get scope() {
	        return this.context.scope;
	    }
	}

	function readInheritableStaticArrayValues(constructor, propertyName) {
	    const ancestors = getAncestorsForConstructor(constructor);
	    return Array.from(ancestors.reduce((values, constructor) => {
	        getOwnStaticArrayValues(constructor, propertyName).forEach((name) => values.add(name));
	        return values;
	    }, new Set()));
	}
	function readInheritableStaticObjectPairs(constructor, propertyName) {
	    const ancestors = getAncestorsForConstructor(constructor);
	    return ancestors.reduce((pairs, constructor) => {
	        pairs.push(...getOwnStaticObjectPairs(constructor, propertyName));
	        return pairs;
	    }, []);
	}
	function getAncestorsForConstructor(constructor) {
	    const ancestors = [];
	    while (constructor) {
	        ancestors.push(constructor);
	        constructor = Object.getPrototypeOf(constructor);
	    }
	    return ancestors.reverse();
	}
	function getOwnStaticArrayValues(constructor, propertyName) {
	    const definition = constructor[propertyName];
	    return Array.isArray(definition) ? definition : [];
	}
	function getOwnStaticObjectPairs(constructor, propertyName) {
	    const definition = constructor[propertyName];
	    return definition ? Object.keys(definition).map((key) => [key, definition[key]]) : [];
	}

	class OutletObserver {
	    constructor(context, delegate) {
	        this.context = context;
	        this.delegate = delegate;
	        this.outletsByName = new Multimap();
	        this.outletElementsByName = new Multimap();
	        this.selectorObserverMap = new Map();
	    }
	    start() {
	        if (this.selectorObserverMap.size === 0) {
	            this.outletDefinitions.forEach((outletName) => {
	                const selector = this.selector(outletName);
	                const details = { outletName };
	                if (selector) {
	                    this.selectorObserverMap.set(outletName, new SelectorObserver(document.body, selector, this, details));
	                }
	            });
	            this.selectorObserverMap.forEach((observer) => observer.start());
	        }
	        this.dependentContexts.forEach((context) => context.refresh());
	    }
	    stop() {
	        if (this.selectorObserverMap.size > 0) {
	            this.disconnectAllOutlets();
	            this.selectorObserverMap.forEach((observer) => observer.stop());
	            this.selectorObserverMap.clear();
	        }
	    }
	    refresh() {
	        this.selectorObserverMap.forEach((observer) => observer.refresh());
	    }
	    selectorMatched(element, _selector, { outletName }) {
	        const outlet = this.getOutlet(element, outletName);
	        if (outlet) {
	            this.connectOutlet(outlet, element, outletName);
	        }
	    }
	    selectorUnmatched(element, _selector, { outletName }) {
	        const outlet = this.getOutletFromMap(element, outletName);
	        if (outlet) {
	            this.disconnectOutlet(outlet, element, outletName);
	        }
	    }
	    selectorMatchElement(element, { outletName }) {
	        return (this.hasOutlet(element, outletName) &&
	            element.matches(`[${this.context.application.schema.controllerAttribute}~=${outletName}]`));
	    }
	    connectOutlet(outlet, element, outletName) {
	        var _a;
	        if (!this.outletElementsByName.has(outletName, element)) {
	            this.outletsByName.add(outletName, outlet);
	            this.outletElementsByName.add(outletName, element);
	            (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletConnected(outlet, element, outletName));
	        }
	    }
	    disconnectOutlet(outlet, element, outletName) {
	        var _a;
	        if (this.outletElementsByName.has(outletName, element)) {
	            this.outletsByName.delete(outletName, outlet);
	            this.outletElementsByName.delete(outletName, element);
	            (_a = this.selectorObserverMap
	                .get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletDisconnected(outlet, element, outletName));
	        }
	    }
	    disconnectAllOutlets() {
	        for (const outletName of this.outletElementsByName.keys) {
	            for (const element of this.outletElementsByName.getValuesForKey(outletName)) {
	                for (const outlet of this.outletsByName.getValuesForKey(outletName)) {
	                    this.disconnectOutlet(outlet, element, outletName);
	                }
	            }
	        }
	    }
	    selector(outletName) {
	        return this.scope.outlets.getSelectorForOutletName(outletName);
	    }
	    get outletDependencies() {
	        const dependencies = new Multimap();
	        this.router.modules.forEach((module) => {
	            const constructor = module.definition.controllerConstructor;
	            const outlets = readInheritableStaticArrayValues(constructor, "outlets");
	            outlets.forEach((outlet) => dependencies.add(outlet, module.identifier));
	        });
	        return dependencies;
	    }
	    get outletDefinitions() {
	        return this.outletDependencies.getKeysForValue(this.identifier);
	    }
	    get dependentControllerIdentifiers() {
	        return this.outletDependencies.getValuesForKey(this.identifier);
	    }
	    get dependentContexts() {
	        const identifiers = this.dependentControllerIdentifiers;
	        return this.router.contexts.filter((context) => identifiers.includes(context.identifier));
	    }
	    hasOutlet(element, outletName) {
	        return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
	    }
	    getOutlet(element, outletName) {
	        return this.application.getControllerForElementAndIdentifier(element, outletName);
	    }
	    getOutletFromMap(element, outletName) {
	        return this.outletsByName.getValuesForKey(outletName).find((outlet) => outlet.element === element);
	    }
	    get scope() {
	        return this.context.scope;
	    }
	    get identifier() {
	        return this.context.identifier;
	    }
	    get application() {
	        return this.context.application;
	    }
	    get router() {
	        return this.application.router;
	    }
	}

	class Context {
	    constructor(module, scope) {
	        this.logDebugActivity = (functionName, detail = {}) => {
	            const { identifier, controller, element } = this;
	            detail = Object.assign({ identifier, controller, element }, detail);
	            this.application.logDebugActivity(this.identifier, functionName, detail);
	        };
	        this.module = module;
	        this.scope = scope;
	        this.controller = new module.controllerConstructor(this);
	        this.bindingObserver = new BindingObserver(this, this.dispatcher);
	        this.valueObserver = new ValueObserver(this, this.controller);
	        this.targetObserver = new TargetObserver(this, this);
	        this.outletObserver = new OutletObserver(this, this);
	        try {
	            this.controller.initialize();
	            this.logDebugActivity("initialize");
	        }
	        catch (error) {
	            this.handleError(error, "initializing controller");
	        }
	    }
	    connect() {
	        this.bindingObserver.start();
	        this.valueObserver.start();
	        this.targetObserver.start();
	        this.outletObserver.start();
	        try {
	            this.controller.connect();
	            this.logDebugActivity("connect");
	        }
	        catch (error) {
	            this.handleError(error, "connecting controller");
	        }
	    }
	    refresh() {
	        this.outletObserver.refresh();
	    }
	    disconnect() {
	        try {
	            this.controller.disconnect();
	            this.logDebugActivity("disconnect");
	        }
	        catch (error) {
	            this.handleError(error, "disconnecting controller");
	        }
	        this.outletObserver.stop();
	        this.targetObserver.stop();
	        this.valueObserver.stop();
	        this.bindingObserver.stop();
	    }
	    get application() {
	        return this.module.application;
	    }
	    get identifier() {
	        return this.module.identifier;
	    }
	    get schema() {
	        return this.application.schema;
	    }
	    get dispatcher() {
	        return this.application.dispatcher;
	    }
	    get element() {
	        return this.scope.element;
	    }
	    get parentElement() {
	        return this.element.parentElement;
	    }
	    handleError(error, message, detail = {}) {
	        const { identifier, controller, element } = this;
	        detail = Object.assign({ identifier, controller, element }, detail);
	        this.application.handleError(error, `Error ${message}`, detail);
	    }
	    targetConnected(element, name) {
	        this.invokeControllerMethod(`${name}TargetConnected`, element);
	    }
	    targetDisconnected(element, name) {
	        this.invokeControllerMethod(`${name}TargetDisconnected`, element);
	    }
	    outletConnected(outlet, element, name) {
	        this.invokeControllerMethod(`${namespaceCamelize(name)}OutletConnected`, outlet, element);
	    }
	    outletDisconnected(outlet, element, name) {
	        this.invokeControllerMethod(`${namespaceCamelize(name)}OutletDisconnected`, outlet, element);
	    }
	    invokeControllerMethod(methodName, ...args) {
	        const controller = this.controller;
	        if (typeof controller[methodName] == "function") {
	            controller[methodName](...args);
	        }
	    }
	}

	function bless(constructor) {
	    return shadow(constructor, getBlessedProperties(constructor));
	}
	function shadow(constructor, properties) {
	    const shadowConstructor = extend$1(constructor);
	    const shadowProperties = getShadowProperties(constructor.prototype, properties);
	    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
	    return shadowConstructor;
	}
	function getBlessedProperties(constructor) {
	    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
	    return blessings.reduce((blessedProperties, blessing) => {
	        const properties = blessing(constructor);
	        for (const key in properties) {
	            const descriptor = blessedProperties[key] || {};
	            blessedProperties[key] = Object.assign(descriptor, properties[key]);
	        }
	        return blessedProperties;
	    }, {});
	}
	function getShadowProperties(prototype, properties) {
	    return getOwnKeys(properties).reduce((shadowProperties, key) => {
	        const descriptor = getShadowedDescriptor(prototype, properties, key);
	        if (descriptor) {
	            Object.assign(shadowProperties, { [key]: descriptor });
	        }
	        return shadowProperties;
	    }, {});
	}
	function getShadowedDescriptor(prototype, properties, key) {
	    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
	    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
	    if (!shadowedByValue) {
	        const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
	        if (shadowingDescriptor) {
	            descriptor.get = shadowingDescriptor.get || descriptor.get;
	            descriptor.set = shadowingDescriptor.set || descriptor.set;
	        }
	        return descriptor;
	    }
	}
	const getOwnKeys = (() => {
	    if (typeof Object.getOwnPropertySymbols == "function") {
	        return (object) => [...Object.getOwnPropertyNames(object), ...Object.getOwnPropertySymbols(object)];
	    }
	    else {
	        return Object.getOwnPropertyNames;
	    }
	})();
	const extend$1 = (() => {
	    function extendWithReflect(constructor) {
	        function extended() {
	            return Reflect.construct(constructor, arguments, new.target);
	        }
	        extended.prototype = Object.create(constructor.prototype, {
	            constructor: { value: extended },
	        });
	        Reflect.setPrototypeOf(extended, constructor);
	        return extended;
	    }
	    function testReflectExtension() {
	        const a = function () {
	            this.a.call(this);
	        };
	        const b = extendWithReflect(a);
	        b.prototype.a = function () { };
	        return new b();
	    }
	    try {
	        testReflectExtension();
	        return extendWithReflect;
	    }
	    catch (error) {
	        return (constructor) => class extended extends constructor {
	        };
	    }
	})();

	function blessDefinition(definition) {
	    return {
	        identifier: definition.identifier,
	        controllerConstructor: bless(definition.controllerConstructor),
	    };
	}

	class Module {
	    constructor(application, definition) {
	        this.application = application;
	        this.definition = blessDefinition(definition);
	        this.contextsByScope = new WeakMap();
	        this.connectedContexts = new Set();
	    }
	    get identifier() {
	        return this.definition.identifier;
	    }
	    get controllerConstructor() {
	        return this.definition.controllerConstructor;
	    }
	    get contexts() {
	        return Array.from(this.connectedContexts);
	    }
	    connectContextForScope(scope) {
	        const context = this.fetchContextForScope(scope);
	        this.connectedContexts.add(context);
	        context.connect();
	    }
	    disconnectContextForScope(scope) {
	        const context = this.contextsByScope.get(scope);
	        if (context) {
	            this.connectedContexts.delete(context);
	            context.disconnect();
	        }
	    }
	    fetchContextForScope(scope) {
	        let context = this.contextsByScope.get(scope);
	        if (!context) {
	            context = new Context(this, scope);
	            this.contextsByScope.set(scope, context);
	        }
	        return context;
	    }
	}

	class ClassMap {
	    constructor(scope) {
	        this.scope = scope;
	    }
	    has(name) {
	        return this.data.has(this.getDataKey(name));
	    }
	    get(name) {
	        return this.getAll(name)[0];
	    }
	    getAll(name) {
	        const tokenString = this.data.get(this.getDataKey(name)) || "";
	        return tokenize(tokenString);
	    }
	    getAttributeName(name) {
	        return this.data.getAttributeNameForKey(this.getDataKey(name));
	    }
	    getDataKey(name) {
	        return `${name}-class`;
	    }
	    get data() {
	        return this.scope.data;
	    }
	}

	class DataMap {
	    constructor(scope) {
	        this.scope = scope;
	    }
	    get element() {
	        return this.scope.element;
	    }
	    get identifier() {
	        return this.scope.identifier;
	    }
	    get(key) {
	        const name = this.getAttributeNameForKey(key);
	        return this.element.getAttribute(name);
	    }
	    set(key, value) {
	        const name = this.getAttributeNameForKey(key);
	        this.element.setAttribute(name, value);
	        return this.get(key);
	    }
	    has(key) {
	        const name = this.getAttributeNameForKey(key);
	        return this.element.hasAttribute(name);
	    }
	    delete(key) {
	        if (this.has(key)) {
	            const name = this.getAttributeNameForKey(key);
	            this.element.removeAttribute(name);
	            return true;
	        }
	        else {
	            return false;
	        }
	    }
	    getAttributeNameForKey(key) {
	        return `data-${this.identifier}-${dasherize(key)}`;
	    }
	}

	class Guide {
	    constructor(logger) {
	        this.warnedKeysByObject = new WeakMap();
	        this.logger = logger;
	    }
	    warn(object, key, message) {
	        let warnedKeys = this.warnedKeysByObject.get(object);
	        if (!warnedKeys) {
	            warnedKeys = new Set();
	            this.warnedKeysByObject.set(object, warnedKeys);
	        }
	        if (!warnedKeys.has(key)) {
	            warnedKeys.add(key);
	            this.logger.warn(message, object);
	        }
	    }
	}

	function attributeValueContainsToken(attributeName, token) {
	    return `[${attributeName}~="${token}"]`;
	}

	class TargetSet {
	    constructor(scope) {
	        this.scope = scope;
	    }
	    get element() {
	        return this.scope.element;
	    }
	    get identifier() {
	        return this.scope.identifier;
	    }
	    get schema() {
	        return this.scope.schema;
	    }
	    has(targetName) {
	        return this.find(targetName) != null;
	    }
	    find(...targetNames) {
	        return targetNames.reduce((target, targetName) => target || this.findTarget(targetName) || this.findLegacyTarget(targetName), undefined);
	    }
	    findAll(...targetNames) {
	        return targetNames.reduce((targets, targetName) => [
	            ...targets,
	            ...this.findAllTargets(targetName),
	            ...this.findAllLegacyTargets(targetName),
	        ], []);
	    }
	    findTarget(targetName) {
	        const selector = this.getSelectorForTargetName(targetName);
	        return this.scope.findElement(selector);
	    }
	    findAllTargets(targetName) {
	        const selector = this.getSelectorForTargetName(targetName);
	        return this.scope.findAllElements(selector);
	    }
	    getSelectorForTargetName(targetName) {
	        const attributeName = this.schema.targetAttributeForScope(this.identifier);
	        return attributeValueContainsToken(attributeName, targetName);
	    }
	    findLegacyTarget(targetName) {
	        const selector = this.getLegacySelectorForTargetName(targetName);
	        return this.deprecate(this.scope.findElement(selector), targetName);
	    }
	    findAllLegacyTargets(targetName) {
	        const selector = this.getLegacySelectorForTargetName(targetName);
	        return this.scope.findAllElements(selector).map((element) => this.deprecate(element, targetName));
	    }
	    getLegacySelectorForTargetName(targetName) {
	        const targetDescriptor = `${this.identifier}.${targetName}`;
	        return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
	    }
	    deprecate(element, targetName) {
	        if (element) {
	            const { identifier } = this;
	            const attributeName = this.schema.targetAttribute;
	            const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
	            this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". ` +
	                `The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
	        }
	        return element;
	    }
	    get guide() {
	        return this.scope.guide;
	    }
	}

	class OutletSet {
	    constructor(scope, controllerElement) {
	        this.scope = scope;
	        this.controllerElement = controllerElement;
	    }
	    get element() {
	        return this.scope.element;
	    }
	    get identifier() {
	        return this.scope.identifier;
	    }
	    get schema() {
	        return this.scope.schema;
	    }
	    has(outletName) {
	        return this.find(outletName) != null;
	    }
	    find(...outletNames) {
	        return outletNames.reduce((outlet, outletName) => outlet || this.findOutlet(outletName), undefined);
	    }
	    findAll(...outletNames) {
	        return outletNames.reduce((outlets, outletName) => [...outlets, ...this.findAllOutlets(outletName)], []);
	    }
	    getSelectorForOutletName(outletName) {
	        const attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
	        return this.controllerElement.getAttribute(attributeName);
	    }
	    findOutlet(outletName) {
	        const selector = this.getSelectorForOutletName(outletName);
	        if (selector)
	            return this.findElement(selector, outletName);
	    }
	    findAllOutlets(outletName) {
	        const selector = this.getSelectorForOutletName(outletName);
	        return selector ? this.findAllElements(selector, outletName) : [];
	    }
	    findElement(selector, outletName) {
	        const elements = this.scope.queryElements(selector);
	        return elements.filter((element) => this.matchesElement(element, selector, outletName))[0];
	    }
	    findAllElements(selector, outletName) {
	        const elements = this.scope.queryElements(selector);
	        return elements.filter((element) => this.matchesElement(element, selector, outletName));
	    }
	    matchesElement(element, selector, outletName) {
	        const controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
	        return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
	    }
	}

	class Scope {
	    constructor(schema, element, identifier, logger) {
	        this.targets = new TargetSet(this);
	        this.classes = new ClassMap(this);
	        this.data = new DataMap(this);
	        this.containsElement = (element) => {
	            return element.closest(this.controllerSelector) === this.element;
	        };
	        this.schema = schema;
	        this.element = element;
	        this.identifier = identifier;
	        this.guide = new Guide(logger);
	        this.outlets = new OutletSet(this.documentScope, element);
	    }
	    findElement(selector) {
	        return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
	    }
	    findAllElements(selector) {
	        return [
	            ...(this.element.matches(selector) ? [this.element] : []),
	            ...this.queryElements(selector).filter(this.containsElement),
	        ];
	    }
	    queryElements(selector) {
	        return Array.from(this.element.querySelectorAll(selector));
	    }
	    get controllerSelector() {
	        return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
	    }
	    get isDocumentScope() {
	        return this.element === document.documentElement;
	    }
	    get documentScope() {
	        return this.isDocumentScope
	            ? this
	            : new Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
	    }
	}

	class ScopeObserver {
	    constructor(element, schema, delegate) {
	        this.element = element;
	        this.schema = schema;
	        this.delegate = delegate;
	        this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
	        this.scopesByIdentifierByElement = new WeakMap();
	        this.scopeReferenceCounts = new WeakMap();
	    }
	    start() {
	        this.valueListObserver.start();
	    }
	    stop() {
	        this.valueListObserver.stop();
	    }
	    get controllerAttribute() {
	        return this.schema.controllerAttribute;
	    }
	    parseValueForToken(token) {
	        const { element, content: identifier } = token;
	        const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
	        let scope = scopesByIdentifier.get(identifier);
	        if (!scope) {
	            scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
	            scopesByIdentifier.set(identifier, scope);
	        }
	        return scope;
	    }
	    elementMatchedValue(element, value) {
	        const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
	        this.scopeReferenceCounts.set(value, referenceCount);
	        if (referenceCount == 1) {
	            this.delegate.scopeConnected(value);
	        }
	    }
	    elementUnmatchedValue(element, value) {
	        const referenceCount = this.scopeReferenceCounts.get(value);
	        if (referenceCount) {
	            this.scopeReferenceCounts.set(value, referenceCount - 1);
	            if (referenceCount == 1) {
	                this.delegate.scopeDisconnected(value);
	            }
	        }
	    }
	    fetchScopesByIdentifierForElement(element) {
	        let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
	        if (!scopesByIdentifier) {
	            scopesByIdentifier = new Map();
	            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
	        }
	        return scopesByIdentifier;
	    }
	}

	class Router {
	    constructor(application) {
	        this.application = application;
	        this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
	        this.scopesByIdentifier = new Multimap();
	        this.modulesByIdentifier = new Map();
	    }
	    get element() {
	        return this.application.element;
	    }
	    get schema() {
	        return this.application.schema;
	    }
	    get logger() {
	        return this.application.logger;
	    }
	    get controllerAttribute() {
	        return this.schema.controllerAttribute;
	    }
	    get modules() {
	        return Array.from(this.modulesByIdentifier.values());
	    }
	    get contexts() {
	        return this.modules.reduce((contexts, module) => contexts.concat(module.contexts), []);
	    }
	    start() {
	        this.scopeObserver.start();
	    }
	    stop() {
	        this.scopeObserver.stop();
	    }
	    loadDefinition(definition) {
	        this.unloadIdentifier(definition.identifier);
	        const module = new Module(this.application, definition);
	        this.connectModule(module);
	        const afterLoad = definition.controllerConstructor.afterLoad;
	        if (afterLoad) {
	            afterLoad(definition.identifier, this.application);
	        }
	    }
	    unloadIdentifier(identifier) {
	        const module = this.modulesByIdentifier.get(identifier);
	        if (module) {
	            this.disconnectModule(module);
	        }
	    }
	    getContextForElementAndIdentifier(element, identifier) {
	        const module = this.modulesByIdentifier.get(identifier);
	        if (module) {
	            return module.contexts.find((context) => context.element == element);
	        }
	    }
	    handleError(error, message, detail) {
	        this.application.handleError(error, message, detail);
	    }
	    createScopeForElementAndIdentifier(element, identifier) {
	        return new Scope(this.schema, element, identifier, this.logger);
	    }
	    scopeConnected(scope) {
	        this.scopesByIdentifier.add(scope.identifier, scope);
	        const module = this.modulesByIdentifier.get(scope.identifier);
	        if (module) {
	            module.connectContextForScope(scope);
	        }
	    }
	    scopeDisconnected(scope) {
	        this.scopesByIdentifier.delete(scope.identifier, scope);
	        const module = this.modulesByIdentifier.get(scope.identifier);
	        if (module) {
	            module.disconnectContextForScope(scope);
	        }
	    }
	    connectModule(module) {
	        this.modulesByIdentifier.set(module.identifier, module);
	        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
	        scopes.forEach((scope) => module.connectContextForScope(scope));
	    }
	    disconnectModule(module) {
	        this.modulesByIdentifier.delete(module.identifier);
	        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
	        scopes.forEach((scope) => module.disconnectContextForScope(scope));
	    }
	}

	const defaultSchema = {
	    controllerAttribute: "data-controller",
	    actionAttribute: "data-action",
	    targetAttribute: "data-target",
	    targetAttributeForScope: (identifier) => `data-${identifier}-target`,
	    outletAttributeForScope: (identifier, outlet) => `data-${identifier}-${outlet}-outlet`,
	    keyMappings: Object.assign(Object.assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End" }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c]))), objectFromEntries("0123456789".split("").map((n) => [n, n]))),
	};
	function objectFromEntries(array) {
	    return array.reduce((memo, [k, v]) => (Object.assign(Object.assign({}, memo), { [k]: v })), {});
	}

	class Application {
	    constructor(element = document.documentElement, schema = defaultSchema) {
	        this.logger = console;
	        this.debug = false;
	        this.logDebugActivity = (identifier, functionName, detail = {}) => {
	            if (this.debug) {
	                this.logFormattedMessage(identifier, functionName, detail);
	            }
	        };
	        this.element = element;
	        this.schema = schema;
	        this.dispatcher = new Dispatcher(this);
	        this.router = new Router(this);
	        this.actionDescriptorFilters = Object.assign({}, defaultActionDescriptorFilters);
	    }
	    static start(element, schema) {
	        const application = new this(element, schema);
	        application.start();
	        return application;
	    }
	    async start() {
	        await domReady();
	        this.logDebugActivity("application", "starting");
	        this.dispatcher.start();
	        this.router.start();
	        this.logDebugActivity("application", "start");
	    }
	    stop() {
	        this.logDebugActivity("application", "stopping");
	        this.dispatcher.stop();
	        this.router.stop();
	        this.logDebugActivity("application", "stop");
	    }
	    register(identifier, controllerConstructor) {
	        this.load({ identifier, controllerConstructor });
	    }
	    registerActionOption(name, filter) {
	        this.actionDescriptorFilters[name] = filter;
	    }
	    load(head, ...rest) {
	        const definitions = Array.isArray(head) ? head : [head, ...rest];
	        definitions.forEach((definition) => {
	            if (definition.controllerConstructor.shouldLoad) {
	                this.router.loadDefinition(definition);
	            }
	        });
	    }
	    unload(head, ...rest) {
	        const identifiers = Array.isArray(head) ? head : [head, ...rest];
	        identifiers.forEach((identifier) => this.router.unloadIdentifier(identifier));
	    }
	    get controllers() {
	        return this.router.contexts.map((context) => context.controller);
	    }
	    getControllerForElementAndIdentifier(element, identifier) {
	        const context = this.router.getContextForElementAndIdentifier(element, identifier);
	        return context ? context.controller : null;
	    }
	    handleError(error, message, detail) {
	        var _a;
	        this.logger.error(`%s\n\n%o\n\n%o`, message, error, detail);
	        (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error);
	    }
	    logFormattedMessage(identifier, functionName, detail = {}) {
	        detail = Object.assign({ application: this }, detail);
	        this.logger.groupCollapsed(`${identifier} #${functionName}`);
	        this.logger.log("details:", Object.assign({}, detail));
	        this.logger.groupEnd();
	    }
	}
	function domReady() {
	    return new Promise((resolve) => {
	        if (document.readyState == "loading") {
	            document.addEventListener("DOMContentLoaded", () => resolve());
	        }
	        else {
	            resolve();
	        }
	    });
	}

	function ClassPropertiesBlessing(constructor) {
	    const classes = readInheritableStaticArrayValues(constructor, "classes");
	    return classes.reduce((properties, classDefinition) => {
	        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
	    }, {});
	}
	function propertiesForClassDefinition(key) {
	    return {
	        [`${key}Class`]: {
	            get() {
	                const { classes } = this;
	                if (classes.has(key)) {
	                    return classes.get(key);
	                }
	                else {
	                    const attribute = classes.getAttributeName(key);
	                    throw new Error(`Missing attribute "${attribute}"`);
	                }
	            },
	        },
	        [`${key}Classes`]: {
	            get() {
	                return this.classes.getAll(key);
	            },
	        },
	        [`has${capitalize(key)}Class`]: {
	            get() {
	                return this.classes.has(key);
	            },
	        },
	    };
	}

	function OutletPropertiesBlessing(constructor) {
	    const outlets = readInheritableStaticArrayValues(constructor, "outlets");
	    return outlets.reduce((properties, outletDefinition) => {
	        return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
	    }, {});
	}
	function propertiesForOutletDefinition(name) {
	    const camelizedName = namespaceCamelize(name);
	    return {
	        [`${camelizedName}Outlet`]: {
	            get() {
	                const outlet = this.outlets.find(name);
	                if (outlet) {
	                    const outletController = this.application.getControllerForElementAndIdentifier(outlet, name);
	                    if (outletController) {
	                        return outletController;
	                    }
	                    else {
	                        throw new Error(`Missing "data-controller=${name}" attribute on outlet element for "${this.identifier}" controller`);
	                    }
	                }
	                throw new Error(`Missing outlet element "${name}" for "${this.identifier}" controller`);
	            },
	        },
	        [`${camelizedName}Outlets`]: {
	            get() {
	                const outlets = this.outlets.findAll(name);
	                if (outlets.length > 0) {
	                    return outlets
	                        .map((outlet) => {
	                        const controller = this.application.getControllerForElementAndIdentifier(outlet, name);
	                        if (controller) {
	                            return controller;
	                        }
	                        else {
	                            console.warn(`The provided outlet element is missing the outlet controller "${name}" for "${this.identifier}"`, outlet);
	                        }
	                    })
	                        .filter((controller) => controller);
	                }
	                return [];
	            },
	        },
	        [`${camelizedName}OutletElement`]: {
	            get() {
	                const outlet = this.outlets.find(name);
	                if (outlet) {
	                    return outlet;
	                }
	                else {
	                    throw new Error(`Missing outlet element "${name}" for "${this.identifier}" controller`);
	                }
	            },
	        },
	        [`${camelizedName}OutletElements`]: {
	            get() {
	                return this.outlets.findAll(name);
	            },
	        },
	        [`has${capitalize(camelizedName)}Outlet`]: {
	            get() {
	                return this.outlets.has(name);
	            },
	        },
	    };
	}

	function TargetPropertiesBlessing(constructor) {
	    const targets = readInheritableStaticArrayValues(constructor, "targets");
	    return targets.reduce((properties, targetDefinition) => {
	        return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
	    }, {});
	}
	function propertiesForTargetDefinition(name) {
	    return {
	        [`${name}Target`]: {
	            get() {
	                const target = this.targets.find(name);
	                if (target) {
	                    return target;
	                }
	                else {
	                    throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
	                }
	            },
	        },
	        [`${name}Targets`]: {
	            get() {
	                return this.targets.findAll(name);
	            },
	        },
	        [`has${capitalize(name)}Target`]: {
	            get() {
	                return this.targets.has(name);
	            },
	        },
	    };
	}

	function ValuePropertiesBlessing(constructor) {
	    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
	    const propertyDescriptorMap = {
	        valueDescriptorMap: {
	            get() {
	                return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
	                    const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
	                    const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
	                    return Object.assign(result, { [attributeName]: valueDescriptor });
	                }, {});
	            },
	        },
	    };
	    return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
	        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
	    }, propertyDescriptorMap);
	}
	function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
	    const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
	    const { key, name, reader: read, writer: write } = definition;
	    return {
	        [name]: {
	            get() {
	                const value = this.data.get(key);
	                if (value !== null) {
	                    return read(value);
	                }
	                else {
	                    return definition.defaultValue;
	                }
	            },
	            set(value) {
	                if (value === undefined) {
	                    this.data.delete(key);
	                }
	                else {
	                    this.data.set(key, write(value));
	                }
	            },
	        },
	        [`has${capitalize(name)}`]: {
	            get() {
	                return this.data.has(key) || definition.hasCustomDefaultValue;
	            },
	        },
	    };
	}
	function parseValueDefinitionPair([token, typeDefinition], controller) {
	    return valueDescriptorForTokenAndTypeDefinition({
	        controller,
	        token,
	        typeDefinition,
	    });
	}
	function parseValueTypeConstant(constant) {
	    switch (constant) {
	        case Array:
	            return "array";
	        case Boolean:
	            return "boolean";
	        case Number:
	            return "number";
	        case Object:
	            return "object";
	        case String:
	            return "string";
	    }
	}
	function parseValueTypeDefault(defaultValue) {
	    switch (typeof defaultValue) {
	        case "boolean":
	            return "boolean";
	        case "number":
	            return "number";
	        case "string":
	            return "string";
	    }
	    if (Array.isArray(defaultValue))
	        return "array";
	    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
	        return "object";
	}
	function parseValueTypeObject(payload) {
	    const typeFromObject = parseValueTypeConstant(payload.typeObject.type);
	    if (!typeFromObject)
	        return;
	    const defaultValueType = parseValueTypeDefault(payload.typeObject.default);
	    if (typeFromObject !== defaultValueType) {
	        const propertyPath = payload.controller ? `${payload.controller}.${payload.token}` : payload.token;
	        throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${payload.typeObject.default}" is of type "${defaultValueType}".`);
	    }
	    return typeFromObject;
	}
	function parseValueTypeDefinition(payload) {
	    const typeFromObject = parseValueTypeObject({
	        controller: payload.controller,
	        token: payload.token,
	        typeObject: payload.typeDefinition,
	    });
	    const typeFromDefaultValue = parseValueTypeDefault(payload.typeDefinition);
	    const typeFromConstant = parseValueTypeConstant(payload.typeDefinition);
	    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
	    if (type)
	        return type;
	    const propertyPath = payload.controller ? `${payload.controller}.${payload.typeDefinition}` : payload.token;
	    throw new Error(`Unknown value type "${propertyPath}" for "${payload.token}" value`);
	}
	function defaultValueForDefinition(typeDefinition) {
	    const constant = parseValueTypeConstant(typeDefinition);
	    if (constant)
	        return defaultValuesByType[constant];
	    const defaultValue = typeDefinition.default;
	    if (defaultValue !== undefined)
	        return defaultValue;
	    return typeDefinition;
	}
	function valueDescriptorForTokenAndTypeDefinition(payload) {
	    const key = `${dasherize(payload.token)}-value`;
	    const type = parseValueTypeDefinition(payload);
	    return {
	        type,
	        key,
	        name: camelize(key),
	        get defaultValue() {
	            return defaultValueForDefinition(payload.typeDefinition);
	        },
	        get hasCustomDefaultValue() {
	            return parseValueTypeDefault(payload.typeDefinition) !== undefined;
	        },
	        reader: readers[type],
	        writer: writers[type] || writers.default,
	    };
	}
	const defaultValuesByType = {
	    get array() {
	        return [];
	    },
	    boolean: false,
	    number: 0,
	    get object() {
	        return {};
	    },
	    string: "",
	};
	const readers = {
	    array(value) {
	        const array = JSON.parse(value);
	        if (!Array.isArray(array)) {
	            throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault(array)}"`);
	        }
	        return array;
	    },
	    boolean(value) {
	        return !(value == "0" || String(value).toLowerCase() == "false");
	    },
	    number(value) {
	        return Number(value);
	    },
	    object(value) {
	        const object = JSON.parse(value);
	        if (object === null || typeof object != "object" || Array.isArray(object)) {
	            throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault(object)}"`);
	        }
	        return object;
	    },
	    string(value) {
	        return value;
	    },
	};
	const writers = {
	    default: writeString,
	    array: writeJSON,
	    object: writeJSON,
	};
	function writeJSON(value) {
	    return JSON.stringify(value);
	}
	function writeString(value) {
	    return `${value}`;
	}

	class Controller {
	    constructor(context) {
	        this.context = context;
	    }
	    static get shouldLoad() {
	        return true;
	    }
	    static afterLoad(_identifier, _application) {
	        return;
	    }
	    get application() {
	        return this.context.application;
	    }
	    get scope() {
	        return this.context.scope;
	    }
	    get element() {
	        return this.scope.element;
	    }
	    get identifier() {
	        return this.scope.identifier;
	    }
	    get targets() {
	        return this.scope.targets;
	    }
	    get outlets() {
	        return this.scope.outlets;
	    }
	    get classes() {
	        return this.scope.classes;
	    }
	    get data() {
	        return this.scope.data;
	    }
	    initialize() {
	    }
	    connect() {
	    }
	    disconnect() {
	    }
	    dispatch(eventName, { target = this.element, detail = {}, prefix = this.identifier, bubbles = true, cancelable = true } = {}) {
	        const type = prefix ? `${prefix}:${eventName}` : eventName;
	        const event = new CustomEvent(type, { detail, bubbles, cancelable });
	        target.dispatchEvent(event);
	        return event;
	    }
	}
	Controller.blessings = [
	    ClassPropertiesBlessing,
	    TargetPropertiesBlessing,
	    ValuePropertiesBlessing,
	    OutletPropertiesBlessing,
	];
	Controller.targets = [];
	Controller.outlets = [];
	Controller.values = {};

	class DeleteController extends Controller {
	  connect() {
	    DeleteController.processing_delete = false;
	  }

	  action() {
	    if (DeleteController.processing_delete) return;
	    DeleteController.processing_delete = true;
	    document.getElementById(this.element.dataset.id).requestSubmit();
	  }
	}

	class EditController extends Controller {
	  connect() {
	    this.edit_form = document.getElementById(`edit-${this.element.dataset.id}`);
	    this.feed_list = document.getElementById(`show-${this.element.dataset.id}`);  }

	  showEdit() {
	    if (!this.edit_form || !this.feed_list) return;
	    this.feed_list.style.display = 'none';
	    this.edit_form.style.display = 'initial';
	  }

	  showPanel() {
	    if (!this.edit_form || !this.feed_list) return;
	    this.edit_form.style.display = 'none';
	    this.feed_list.style.display = 'initial';
	  }
	}

	/**!
	 * Sortable 1.15.0
	 * @author	RubaXa   <trash@rubaxa.org>
	 * @author	owenm    <owen23355@gmail.com>
	 * @license MIT
	 */
	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	var version = "1.15.0";

	function userAgent(pattern) {
	  if (typeof window !== 'undefined' && window.navigator) {
	    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
	  }
	}

	var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
	var Edge = userAgent(/Edge/i);
	var FireFox = userAgent(/firefox/i);
	var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
	var IOS = userAgent(/iP(ad|od|hone)/i);
	var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

	var captureMode = {
	  capture: false,
	  passive: false
	};

	function on(el, event, fn) {
	  el.addEventListener(event, fn, !IE11OrLess && captureMode);
	}

	function off(el, event, fn) {
	  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
	}

	function matches(
	/**HTMLElement*/
	el,
	/**String*/
	selector) {
	  if (!selector) return;
	  selector[0] === '>' && (selector = selector.substring(1));

	  if (el) {
	    try {
	      if (el.matches) {
	        return el.matches(selector);
	      } else if (el.msMatchesSelector) {
	        return el.msMatchesSelector(selector);
	      } else if (el.webkitMatchesSelector) {
	        return el.webkitMatchesSelector(selector);
	      }
	    } catch (_) {
	      return false;
	    }
	  }

	  return false;
	}

	function getParentOrHost(el) {
	  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
	}

	function closest(
	/**HTMLElement*/
	el,
	/**String*/
	selector,
	/**HTMLElement*/
	ctx, includeCTX) {
	  if (el) {
	    ctx = ctx || document;

	    do {
	      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
	        return el;
	      }

	      if (el === ctx) break;
	      /* jshint boss:true */
	    } while (el = getParentOrHost(el));
	  }

	  return null;
	}

	var R_SPACE = /\s+/g;

	function toggleClass(el, name, state) {
	  if (el && name) {
	    if (el.classList) {
	      el.classList[state ? 'add' : 'remove'](name);
	    } else {
	      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
	      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
	    }
	  }
	}

	function css(el, prop, val) {
	  var style = el && el.style;

	  if (style) {
	    if (val === void 0) {
	      if (document.defaultView && document.defaultView.getComputedStyle) {
	        val = document.defaultView.getComputedStyle(el, '');
	      } else if (el.currentStyle) {
	        val = el.currentStyle;
	      }

	      return prop === void 0 ? val : val[prop];
	    } else {
	      if (!(prop in style) && prop.indexOf('webkit') === -1) {
	        prop = '-webkit-' + prop;
	      }

	      style[prop] = val + (typeof val === 'string' ? '' : 'px');
	    }
	  }
	}

	function matrix(el, selfOnly) {
	  var appliedTransforms = '';

	  if (typeof el === 'string') {
	    appliedTransforms = el;
	  } else {
	    do {
	      var transform = css(el, 'transform');

	      if (transform && transform !== 'none') {
	        appliedTransforms = transform + ' ' + appliedTransforms;
	      }
	      /* jshint boss:true */

	    } while (!selfOnly && (el = el.parentNode));
	  }

	  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
	  /*jshint -W056 */

	  return matrixFn && new matrixFn(appliedTransforms);
	}

	function find(ctx, tagName, iterator) {
	  if (ctx) {
	    var list = ctx.getElementsByTagName(tagName),
	        i = 0,
	        n = list.length;

	    if (iterator) {
	      for (; i < n; i++) {
	        iterator(list[i], i);
	      }
	    }

	    return list;
	  }

	  return [];
	}

	function getWindowScrollingElement() {
	  var scrollingElement = document.scrollingElement;

	  if (scrollingElement) {
	    return scrollingElement;
	  } else {
	    return document.documentElement;
	  }
	}
	/**
	 * Returns the "bounding client rect" of given element
	 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
	 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
	 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
	 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
	 * @param  {[HTMLElement]} container              The parent the element will be placed in
	 * @return {Object}                               The boundingClientRect of el, with specified adjustments
	 */


	function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
	  if (!el.getBoundingClientRect && el !== window) return;
	  var elRect, top, left, bottom, right, height, width;

	  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
	    elRect = el.getBoundingClientRect();
	    top = elRect.top;
	    left = elRect.left;
	    bottom = elRect.bottom;
	    right = elRect.right;
	    height = elRect.height;
	    width = elRect.width;
	  } else {
	    top = 0;
	    left = 0;
	    bottom = window.innerHeight;
	    right = window.innerWidth;
	    height = window.innerHeight;
	    width = window.innerWidth;
	  }

	  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
	    // Adjust for translate()
	    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
	    // Not needed on <= IE11

	    if (!IE11OrLess) {
	      do {
	        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
	          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

	          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
	          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
	          bottom = top + elRect.height;
	          right = left + elRect.width;
	          break;
	        }
	        /* jshint boss:true */

	      } while (container = container.parentNode);
	    }
	  }

	  if (undoScale && el !== window) {
	    // Adjust for scale()
	    var elMatrix = matrix(container || el),
	        scaleX = elMatrix && elMatrix.a,
	        scaleY = elMatrix && elMatrix.d;

	    if (elMatrix) {
	      top /= scaleY;
	      left /= scaleX;
	      width /= scaleX;
	      height /= scaleY;
	      bottom = top + height;
	      right = left + width;
	    }
	  }

	  return {
	    top: top,
	    left: left,
	    bottom: bottom,
	    right: right,
	    width: width,
	    height: height
	  };
	}
	/**
	 * Checks if a side of an element is scrolled past a side of its parents
	 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
	 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
	 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
	 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
	 */


	function isScrolledPast(el, elSide, parentSide) {
	  var parent = getParentAutoScrollElement(el, true),
	      elSideVal = getRect(el)[elSide];
	  /* jshint boss:true */

	  while (parent) {
	    var parentSideVal = getRect(parent)[parentSide],
	        visible = void 0;

	    if (parentSide === 'top' || parentSide === 'left') {
	      visible = elSideVal >= parentSideVal;
	    } else {
	      visible = elSideVal <= parentSideVal;
	    }

	    if (!visible) return parent;
	    if (parent === getWindowScrollingElement()) break;
	    parent = getParentAutoScrollElement(parent, false);
	  }

	  return false;
	}
	/**
	 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
	 * and non-draggable elements
	 * @param  {HTMLElement} el       The parent element
	 * @param  {Number} childNum      The index of the child
	 * @param  {Object} options       Parent Sortable's options
	 * @return {HTMLElement}          The child at index childNum, or null if not found
	 */


	function getChild(el, childNum, options, includeDragEl) {
	  var currentChild = 0,
	      i = 0,
	      children = el.children;

	  while (i < children.length) {
	    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
	      if (currentChild === childNum) {
	        return children[i];
	      }

	      currentChild++;
	    }

	    i++;
	  }

	  return null;
	}
	/**
	 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
	 * @param  {HTMLElement} el       Parent element
	 * @param  {selector} selector    Any other elements that should be ignored
	 * @return {HTMLElement}          The last child, ignoring ghostEl
	 */


	function lastChild(el, selector) {
	  var last = el.lastElementChild;

	  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
	    last = last.previousElementSibling;
	  }

	  return last || null;
	}
	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */


	function index(el, selector) {
	  var index = 0;

	  if (!el || !el.parentNode) {
	    return -1;
	  }
	  /* jshint boss:true */


	  while (el = el.previousElementSibling) {
	    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
	      index++;
	    }
	  }

	  return index;
	}
	/**
	 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
	 * The value is returned in real pixels.
	 * @param  {HTMLElement} el
	 * @return {Array}             Offsets in the format of [left, top]
	 */


	function getRelativeScrollOffset(el) {
	  var offsetLeft = 0,
	      offsetTop = 0,
	      winScroller = getWindowScrollingElement();

	  if (el) {
	    do {
	      var elMatrix = matrix(el),
	          scaleX = elMatrix.a,
	          scaleY = elMatrix.d;
	      offsetLeft += el.scrollLeft * scaleX;
	      offsetTop += el.scrollTop * scaleY;
	    } while (el !== winScroller && (el = el.parentNode));
	  }

	  return [offsetLeft, offsetTop];
	}
	/**
	 * Returns the index of the object within the given array
	 * @param  {Array} arr   Array that may or may not hold the object
	 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
	 * @return {Number}      The index of the object in the array, or -1
	 */


	function indexOfObject(arr, obj) {
	  for (var i in arr) {
	    if (!arr.hasOwnProperty(i)) continue;

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
	    }
	  }

	  return -1;
	}

	function getParentAutoScrollElement(el, includeSelf) {
	  // skip to window
	  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
	  var elem = el;
	  var gotSelf = false;

	  do {
	    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
	    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
	      var elemCSS = css(elem);

	      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
	        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
	        if (gotSelf || includeSelf) return elem;
	        gotSelf = true;
	      }
	    }
	    /* jshint boss:true */

	  } while (elem = elem.parentNode);

	  return getWindowScrollingElement();
	}

	function extend(dst, src) {
	  if (dst && src) {
	    for (var key in src) {
	      if (src.hasOwnProperty(key)) {
	        dst[key] = src[key];
	      }
	    }
	  }

	  return dst;
	}

	function isRectEqual(rect1, rect2) {
	  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
	}

	var _throttleTimeout;

	function throttle(callback, ms) {
	  return function () {
	    if (!_throttleTimeout) {
	      var args = arguments,
	          _this = this;

	      if (args.length === 1) {
	        callback.call(_this, args[0]);
	      } else {
	        callback.apply(_this, args);
	      }

	      _throttleTimeout = setTimeout(function () {
	        _throttleTimeout = void 0;
	      }, ms);
	    }
	  };
	}

	function scrollBy(el, x, y) {
	  el.scrollLeft += x;
	  el.scrollTop += y;
	}

	function clone(el) {
	  var Polymer = window.Polymer;
	  var $ = window.jQuery || window.Zepto;

	  if (Polymer && Polymer.dom) {
	    return Polymer.dom(el).cloneNode(true);
	  } else if ($) {
	    return $(el).clone(true)[0];
	  } else {
	    return el.cloneNode(true);
	  }
	}

	var expando = 'Sortable' + new Date().getTime();

	function AnimationStateManager() {
	  var animationStates = [],
	      animationCallbackId;
	  return {
	    captureAnimationState: function captureAnimationState() {
	      animationStates = [];
	      if (!this.options.animation) return;
	      var children = [].slice.call(this.el.children);
	      children.forEach(function (child) {
	        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
	        animationStates.push({
	          target: child,
	          rect: getRect(child)
	        });

	        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


	        if (child.thisAnimationDuration) {
	          var childMatrix = matrix(child, true);

	          if (childMatrix) {
	            fromRect.top -= childMatrix.f;
	            fromRect.left -= childMatrix.e;
	          }
	        }

	        child.fromRect = fromRect;
	      });
	    },
	    addAnimationState: function addAnimationState(state) {
	      animationStates.push(state);
	    },
	    removeAnimationState: function removeAnimationState(target) {
	      animationStates.splice(indexOfObject(animationStates, {
	        target: target
	      }), 1);
	    },
	    animateAll: function animateAll(callback) {
	      var _this = this;

	      if (!this.options.animation) {
	        clearTimeout(animationCallbackId);
	        if (typeof callback === 'function') callback();
	        return;
	      }

	      var animating = false,
	          animationTime = 0;
	      animationStates.forEach(function (state) {
	        var time = 0,
	            target = state.target,
	            fromRect = target.fromRect,
	            toRect = getRect(target),
	            prevFromRect = target.prevFromRect,
	            prevToRect = target.prevToRect,
	            animatingRect = state.rect,
	            targetMatrix = matrix(target, true);

	        if (targetMatrix) {
	          // Compensate for current animation
	          toRect.top -= targetMatrix.f;
	          toRect.left -= targetMatrix.e;
	        }

	        target.toRect = toRect;

	        if (target.thisAnimationDuration) {
	          // Could also check if animatingRect is between fromRect and toRect
	          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
	          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
	            // If returning to same place as started from animation and on same axis
	            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
	          }
	        } // if fromRect != toRect: animate


	        if (!isRectEqual(toRect, fromRect)) {
	          target.prevFromRect = fromRect;
	          target.prevToRect = toRect;

	          if (!time) {
	            time = _this.options.animation;
	          }

	          _this.animate(target, animatingRect, toRect, time);
	        }

	        if (time) {
	          animating = true;
	          animationTime = Math.max(animationTime, time);
	          clearTimeout(target.animationResetTimer);
	          target.animationResetTimer = setTimeout(function () {
	            target.animationTime = 0;
	            target.prevFromRect = null;
	            target.fromRect = null;
	            target.prevToRect = null;
	            target.thisAnimationDuration = null;
	          }, time);
	          target.thisAnimationDuration = time;
	        }
	      });
	      clearTimeout(animationCallbackId);

	      if (!animating) {
	        if (typeof callback === 'function') callback();
	      } else {
	        animationCallbackId = setTimeout(function () {
	          if (typeof callback === 'function') callback();
	        }, animationTime);
	      }

	      animationStates = [];
	    },
	    animate: function animate(target, currentRect, toRect, duration) {
	      if (duration) {
	        css(target, 'transition', '');
	        css(target, 'transform', '');
	        var elMatrix = matrix(this.el),
	            scaleX = elMatrix && elMatrix.a,
	            scaleY = elMatrix && elMatrix.d,
	            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
	            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
	        target.animatingX = !!translateX;
	        target.animatingY = !!translateY;
	        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
	        this.forRepaintDummy = repaint(target); // repaint

	        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
	        css(target, 'transform', 'translate3d(0,0,0)');
	        typeof target.animated === 'number' && clearTimeout(target.animated);
	        target.animated = setTimeout(function () {
	          css(target, 'transition', '');
	          css(target, 'transform', '');
	          target.animated = false;
	          target.animatingX = false;
	          target.animatingY = false;
	        }, duration);
	      }
	    }
	  };
	}

	function repaint(target) {
	  return target.offsetWidth;
	}

	function calculateRealTime(animatingRect, fromRect, toRect, options) {
	  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
	}

	var plugins = [];
	var defaults = {
	  initializeByDefault: true
	};
	var PluginManager = {
	  mount: function mount(plugin) {
	    // Set default static properties
	    for (var option in defaults) {
	      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
	        plugin[option] = defaults[option];
	      }
	    }

	    plugins.forEach(function (p) {
	      if (p.pluginName === plugin.pluginName) {
	        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
	      }
	    });
	    plugins.push(plugin);
	  },
	  pluginEvent: function pluginEvent(eventName, sortable, evt) {
	    var _this = this;

	    this.eventCanceled = false;

	    evt.cancel = function () {
	      _this.eventCanceled = true;
	    };

	    var eventNameGlobal = eventName + 'Global';
	    plugins.forEach(function (plugin) {
	      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

	      if (sortable[plugin.pluginName][eventNameGlobal]) {
	        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
	          sortable: sortable
	        }, evt));
	      } // Only fire plugin event if plugin is enabled in this sortable,
	      // and plugin has event defined


	      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
	        sortable[plugin.pluginName][eventName](_objectSpread2({
	          sortable: sortable
	        }, evt));
	      }
	    });
	  },
	  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
	    plugins.forEach(function (plugin) {
	      var pluginName = plugin.pluginName;
	      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
	      var initialized = new plugin(sortable, el, sortable.options);
	      initialized.sortable = sortable;
	      initialized.options = sortable.options;
	      sortable[pluginName] = initialized; // Add default options from plugin

	      _extends(defaults, initialized.defaults);
	    });

	    for (var option in sortable.options) {
	      if (!sortable.options.hasOwnProperty(option)) continue;
	      var modified = this.modifyOption(sortable, option, sortable.options[option]);

	      if (typeof modified !== 'undefined') {
	        sortable.options[option] = modified;
	      }
	    }
	  },
	  getEventProperties: function getEventProperties(name, sortable) {
	    var eventProperties = {};
	    plugins.forEach(function (plugin) {
	      if (typeof plugin.eventProperties !== 'function') return;

	      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
	    });
	    return eventProperties;
	  },
	  modifyOption: function modifyOption(sortable, name, value) {
	    var modifiedValue;
	    plugins.forEach(function (plugin) {
	      // Plugin must exist on the Sortable
	      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

	      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
	        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
	      }
	    });
	    return modifiedValue;
	  }
	};

	function dispatchEvent$1(_ref) {
	  var sortable = _ref.sortable,
	      rootEl = _ref.rootEl,
	      name = _ref.name,
	      targetEl = _ref.targetEl,
	      cloneEl = _ref.cloneEl,
	      toEl = _ref.toEl,
	      fromEl = _ref.fromEl,
	      oldIndex = _ref.oldIndex,
	      newIndex = _ref.newIndex,
	      oldDraggableIndex = _ref.oldDraggableIndex,
	      newDraggableIndex = _ref.newDraggableIndex,
	      originalEvent = _ref.originalEvent,
	      putSortable = _ref.putSortable,
	      extraEventProperties = _ref.extraEventProperties;
	  sortable = sortable || rootEl && rootEl[expando];
	  if (!sortable) return;
	  var evt,
	      options = sortable.options,
	      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

	  if (window.CustomEvent && !IE11OrLess && !Edge) {
	    evt = new CustomEvent(name, {
	      bubbles: true,
	      cancelable: true
	    });
	  } else {
	    evt = document.createEvent('Event');
	    evt.initEvent(name, true, true);
	  }

	  evt.to = toEl || rootEl;
	  evt.from = fromEl || rootEl;
	  evt.item = targetEl || rootEl;
	  evt.clone = cloneEl;
	  evt.oldIndex = oldIndex;
	  evt.newIndex = newIndex;
	  evt.oldDraggableIndex = oldDraggableIndex;
	  evt.newDraggableIndex = newDraggableIndex;
	  evt.originalEvent = originalEvent;
	  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

	  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

	  for (var option in allEventProperties) {
	    evt[option] = allEventProperties[option];
	  }

	  if (rootEl) {
	    rootEl.dispatchEvent(evt);
	  }

	  if (options[onName]) {
	    options[onName].call(sortable, evt);
	  }
	}

	var _excluded = ["evt"];

	var pluginEvent = function pluginEvent(eventName, sortable) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      originalEvent = _ref.evt,
	      data = _objectWithoutProperties(_ref, _excluded);

	  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
	    dragEl: dragEl,
	    parentEl: parentEl,
	    ghostEl: ghostEl,
	    rootEl: rootEl,
	    nextEl: nextEl,
	    lastDownEl: lastDownEl,
	    cloneEl: cloneEl,
	    cloneHidden: cloneHidden,
	    dragStarted: moved,
	    putSortable: putSortable,
	    activeSortable: Sortable.active,
	    originalEvent: originalEvent,
	    oldIndex: oldIndex,
	    oldDraggableIndex: oldDraggableIndex,
	    newIndex: newIndex,
	    newDraggableIndex: newDraggableIndex,
	    hideGhostForTarget: _hideGhostForTarget,
	    unhideGhostForTarget: _unhideGhostForTarget,
	    cloneNowHidden: function cloneNowHidden() {
	      cloneHidden = true;
	    },
	    cloneNowShown: function cloneNowShown() {
	      cloneHidden = false;
	    },
	    dispatchSortableEvent: function dispatchSortableEvent(name) {
	      _dispatchEvent({
	        sortable: sortable,
	        name: name,
	        originalEvent: originalEvent
	      });
	    }
	  }, data));
	};

	function _dispatchEvent(info) {
	  dispatchEvent$1(_objectSpread2({
	    putSortable: putSortable,
	    cloneEl: cloneEl,
	    targetEl: dragEl,
	    rootEl: rootEl,
	    oldIndex: oldIndex,
	    oldDraggableIndex: oldDraggableIndex,
	    newIndex: newIndex,
	    newDraggableIndex: newDraggableIndex
	  }, info));
	}

	var dragEl,
	    parentEl,
	    ghostEl,
	    rootEl,
	    nextEl,
	    lastDownEl,
	    cloneEl,
	    cloneHidden,
	    oldIndex,
	    newIndex,
	    oldDraggableIndex,
	    newDraggableIndex,
	    activeGroup,
	    putSortable,
	    awaitingDragStarted = false,
	    ignoreNextClick = false,
	    sortables = [],
	    tapEvt,
	    touchEvt,
	    lastDx,
	    lastDy,
	    tapDistanceLeft,
	    tapDistanceTop,
	    moved,
	    lastTarget,
	    lastDirection,
	    pastFirstInvertThresh = false,
	    isCircumstantialInvert = false,
	    targetMoveDistance,
	    // For positioning ghost absolutely
	ghostRelativeParent,
	    ghostRelativeParentInitialScroll = [],
	    // (left, top)
	_silent = false,
	    savedInputChecked = [];
	/** @const */

	var documentExists = typeof document !== 'undefined',
	    PositionGhostAbsolutely = IOS,
	    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
	    // This will not pass for IE9, because IE9 DnD only works on anchors
	supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
	    supportCssPointerEvents = function () {
	  if (!documentExists) return; // false when <= IE11

	  if (IE11OrLess) {
	    return false;
	  }

	  var el = document.createElement('x');
	  el.style.cssText = 'pointer-events:auto';
	  return el.style.pointerEvents === 'auto';
	}(),
	    _detectDirection = function _detectDirection(el, options) {
	  var elCSS = css(el),
	      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
	      child1 = getChild(el, 0, options),
	      child2 = getChild(el, 1, options),
	      firstChildCSS = child1 && css(child1),
	      secondChildCSS = child2 && css(child2),
	      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
	      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

	  if (elCSS.display === 'flex') {
	    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
	  }

	  if (elCSS.display === 'grid') {
	    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
	  }

	  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
	    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
	    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
	  }

	  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
	},
	    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
	  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
	      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
	      dragElOppLength = vertical ? dragRect.width : dragRect.height,
	      targetS1Opp = vertical ? targetRect.left : targetRect.top,
	      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
	      targetOppLength = vertical ? targetRect.width : targetRect.height;
	  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
	},

	/**
	 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
	 * @param  {Number} x      X position
	 * @param  {Number} y      Y position
	 * @return {HTMLElement}   Element of the first found nearest Sortable
	 */
	_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
	  var ret;
	  sortables.some(function (sortable) {
	    var threshold = sortable[expando].options.emptyInsertThreshold;
	    if (!threshold || lastChild(sortable)) return;
	    var rect = getRect(sortable),
	        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
	        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

	    if (insideHorizontally && insideVertically) {
	      return ret = sortable;
	    }
	  });
	  return ret;
	},
	    _prepareGroup = function _prepareGroup(options) {
	  function toFn(value, pull) {
	    return function (to, from, dragEl, evt) {
	      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

	      if (value == null && (pull || sameGroup)) {
	        // Default pull value
	        // Default pull and put value if same group
	        return true;
	      } else if (value == null || value === false) {
	        return false;
	      } else if (pull && value === 'clone') {
	        return value;
	      } else if (typeof value === 'function') {
	        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
	      } else {
	        var otherGroup = (pull ? to : from).options.group.name;
	        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
	      }
	    };
	  }

	  var group = {};
	  var originalGroup = options.group;

	  if (!originalGroup || _typeof(originalGroup) != 'object') {
	    originalGroup = {
	      name: originalGroup
	    };
	  }

	  group.name = originalGroup.name;
	  group.checkPull = toFn(originalGroup.pull, true);
	  group.checkPut = toFn(originalGroup.put);
	  group.revertClone = originalGroup.revertClone;
	  options.group = group;
	},
	    _hideGhostForTarget = function _hideGhostForTarget() {
	  if (!supportCssPointerEvents && ghostEl) {
	    css(ghostEl, 'display', 'none');
	  }
	},
	    _unhideGhostForTarget = function _unhideGhostForTarget() {
	  if (!supportCssPointerEvents && ghostEl) {
	    css(ghostEl, 'display', '');
	  }
	}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


	if (documentExists && !ChromeForAndroid) {
	  document.addEventListener('click', function (evt) {
	    if (ignoreNextClick) {
	      evt.preventDefault();
	      evt.stopPropagation && evt.stopPropagation();
	      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
	      ignoreNextClick = false;
	      return false;
	    }
	  }, true);
	}

	var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
	  if (dragEl) {
	    evt = evt.touches ? evt.touches[0] : evt;

	    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

	    if (nearest) {
	      // Create imitation event
	      var event = {};

	      for (var i in evt) {
	        if (evt.hasOwnProperty(i)) {
	          event[i] = evt[i];
	        }
	      }

	      event.target = event.rootEl = nearest;
	      event.preventDefault = void 0;
	      event.stopPropagation = void 0;

	      nearest[expando]._onDragOver(event);
	    }
	  }
	};

	var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
	  if (dragEl) {
	    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
	  }
	};
	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */


	function Sortable(el, options) {
	  if (!(el && el.nodeType && el.nodeType === 1)) {
	    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
	  }

	  this.el = el; // root element

	  this.options = options = _extends({}, options); // Export instance

	  el[expando] = this;
	  var defaults = {
	    group: null,
	    sort: true,
	    disabled: false,
	    store: null,
	    handle: null,
	    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
	    swapThreshold: 1,
	    // percentage; 0 <= x <= 1
	    invertSwap: false,
	    // invert always
	    invertedSwapThreshold: null,
	    // will be set to same as swapThreshold if default
	    removeCloneOnHide: true,
	    direction: function direction() {
	      return _detectDirection(el, this.options);
	    },
	    ghostClass: 'sortable-ghost',
	    chosenClass: 'sortable-chosen',
	    dragClass: 'sortable-drag',
	    ignore: 'a, img',
	    filter: null,
	    preventOnFilter: true,
	    animation: 0,
	    easing: null,
	    setData: function setData(dataTransfer, dragEl) {
	      dataTransfer.setData('Text', dragEl.textContent);
	    },
	    dropBubble: false,
	    dragoverBubble: false,
	    dataIdAttr: 'data-id',
	    delay: 0,
	    delayOnTouchOnly: false,
	    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
	    forceFallback: false,
	    fallbackClass: 'sortable-fallback',
	    fallbackOnBody: false,
	    fallbackTolerance: 0,
	    fallbackOffset: {
	      x: 0,
	      y: 0
	    },
	    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
	    emptyInsertThreshold: 5
	  };
	  PluginManager.initializePlugins(this, el, defaults); // Set default options

	  for (var name in defaults) {
	    !(name in options) && (options[name] = defaults[name]);
	  }

	  _prepareGroup(options); // Bind all private methods


	  for (var fn in this) {
	    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
	      this[fn] = this[fn].bind(this);
	    }
	  } // Setup drag mode


	  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

	  if (this.nativeDraggable) {
	    // Touch start threshold cannot be greater than the native dragstart threshold
	    this.options.touchStartThreshold = 1;
	  } // Bind events


	  if (options.supportPointer) {
	    on(el, 'pointerdown', this._onTapStart);
	  } else {
	    on(el, 'mousedown', this._onTapStart);
	    on(el, 'touchstart', this._onTapStart);
	  }

	  if (this.nativeDraggable) {
	    on(el, 'dragover', this);
	    on(el, 'dragenter', this);
	  }

	  sortables.push(this.el); // Restore sorting

	  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

	  _extends(this, AnimationStateManager());
	}

	Sortable.prototype =
	/** @lends Sortable.prototype */
	{
	  constructor: Sortable,
	  _isOutsideThisEl: function _isOutsideThisEl(target) {
	    if (!this.el.contains(target) && target !== this.el) {
	      lastTarget = null;
	    }
	  },
	  _getDirection: function _getDirection(evt, target) {
	    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
	  },
	  _onTapStart: function _onTapStart(
	  /** Event|TouchEvent */
	  evt) {
	    if (!evt.cancelable) return;

	    var _this = this,
	        el = this.el,
	        options = this.options,
	        preventOnFilter = options.preventOnFilter,
	        type = evt.type,
	        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
	        target = (touch || evt).target,
	        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
	        filter = options.filter;

	    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


	    if (dragEl) {
	      return;
	    }

	    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
	      return; // only left button and enabled
	    } // cancel dnd if original target is content editable


	    if (originalTarget.isContentEditable) {
	      return;
	    } // Safari ignores further event handling after mousedown


	    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
	      return;
	    }

	    target = closest(target, options.draggable, el, false);

	    if (target && target.animated) {
	      return;
	    }

	    if (lastDownEl === target) {
	      // Ignoring duplicate `down`
	      return;
	    } // Get the index of the dragged element within its parent


	    oldIndex = index(target);
	    oldDraggableIndex = index(target, options.draggable); // Check filter

	    if (typeof filter === 'function') {
	      if (filter.call(this, evt, target, this)) {
	        _dispatchEvent({
	          sortable: _this,
	          rootEl: originalTarget,
	          name: 'filter',
	          targetEl: target,
	          toEl: el,
	          fromEl: el
	        });

	        pluginEvent('filter', _this, {
	          evt: evt
	        });
	        preventOnFilter && evt.cancelable && evt.preventDefault();
	        return; // cancel dnd
	      }
	    } else if (filter) {
	      filter = filter.split(',').some(function (criteria) {
	        criteria = closest(originalTarget, criteria.trim(), el, false);

	        if (criteria) {
	          _dispatchEvent({
	            sortable: _this,
	            rootEl: criteria,
	            name: 'filter',
	            targetEl: target,
	            fromEl: el,
	            toEl: el
	          });

	          pluginEvent('filter', _this, {
	            evt: evt
	          });
	          return true;
	        }
	      });

	      if (filter) {
	        preventOnFilter && evt.cancelable && evt.preventDefault();
	        return; // cancel dnd
	      }
	    }

	    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
	      return;
	    } // Prepare `dragstart`


	    this._prepareDragStart(evt, touch, target);
	  },
	  _prepareDragStart: function _prepareDragStart(
	  /** Event */
	  evt,
	  /** Touch */
	  touch,
	  /** HTMLElement */
	  target) {
	    var _this = this,
	        el = _this.el,
	        options = _this.options,
	        ownerDocument = el.ownerDocument,
	        dragStartFn;

	    if (target && !dragEl && target.parentNode === el) {
	      var dragRect = getRect(target);
	      rootEl = el;
	      dragEl = target;
	      parentEl = dragEl.parentNode;
	      nextEl = dragEl.nextSibling;
	      lastDownEl = target;
	      activeGroup = options.group;
	      Sortable.dragged = dragEl;
	      tapEvt = {
	        target: dragEl,
	        clientX: (touch || evt).clientX,
	        clientY: (touch || evt).clientY
	      };
	      tapDistanceLeft = tapEvt.clientX - dragRect.left;
	      tapDistanceTop = tapEvt.clientY - dragRect.top;
	      this._lastX = (touch || evt).clientX;
	      this._lastY = (touch || evt).clientY;
	      dragEl.style['will-change'] = 'all';

	      dragStartFn = function dragStartFn() {
	        pluginEvent('delayEnded', _this, {
	          evt: evt
	        });

	        if (Sortable.eventCanceled) {
	          _this._onDrop();

	          return;
	        } // Delayed drag has been triggered
	        // we can re-enable the events: touchmove/mousemove


	        _this._disableDelayedDragEvents();

	        if (!FireFox && _this.nativeDraggable) {
	          dragEl.draggable = true;
	        } // Bind the events: dragstart/dragend


	        _this._triggerDragStart(evt, touch); // Drag start event


	        _dispatchEvent({
	          sortable: _this,
	          name: 'choose',
	          originalEvent: evt
	        }); // Chosen item


	        toggleClass(dragEl, options.chosenClass, true);
	      }; // Disable "draggable"


	      options.ignore.split(',').forEach(function (criteria) {
	        find(dragEl, criteria.trim(), _disableDraggable);
	      });
	      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
	      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
	      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
	      on(ownerDocument, 'mouseup', _this._onDrop);
	      on(ownerDocument, 'touchend', _this._onDrop);
	      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

	      if (FireFox && this.nativeDraggable) {
	        this.options.touchStartThreshold = 4;
	        dragEl.draggable = true;
	      }

	      pluginEvent('delayStart', this, {
	        evt: evt
	      }); // Delay is impossible for native DnD in Edge or IE

	      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
	        if (Sortable.eventCanceled) {
	          this._onDrop();

	          return;
	        } // If the user moves the pointer or let go the click or touch
	        // before the delay has been reached:
	        // disable the delayed drag


	        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
	        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
	        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
	        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
	        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
	        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
	        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
	      } else {
	        dragStartFn();
	      }
	    }
	  },
	  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
	  /** TouchEvent|PointerEvent **/
	  e) {
	    var touch = e.touches ? e.touches[0] : e;

	    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
	      this._disableDelayedDrag();
	    }
	  },
	  _disableDelayedDrag: function _disableDelayedDrag() {
	    dragEl && _disableDraggable(dragEl);
	    clearTimeout(this._dragStartTimer);

	    this._disableDelayedDragEvents();
	  },
	  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
	    var ownerDocument = this.el.ownerDocument;
	    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
	    off(ownerDocument, 'touchend', this._disableDelayedDrag);
	    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
	    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
	    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
	    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
	  },
	  _triggerDragStart: function _triggerDragStart(
	  /** Event */
	  evt,
	  /** Touch */
	  touch) {
	    touch = touch || evt.pointerType == 'touch' && evt;

	    if (!this.nativeDraggable || touch) {
	      if (this.options.supportPointer) {
	        on(document, 'pointermove', this._onTouchMove);
	      } else if (touch) {
	        on(document, 'touchmove', this._onTouchMove);
	      } else {
	        on(document, 'mousemove', this._onTouchMove);
	      }
	    } else {
	      on(dragEl, 'dragend', this);
	      on(rootEl, 'dragstart', this._onDragStart);
	    }

	    try {
	      if (document.selection) {
	        // Timeout neccessary for IE9
	        _nextTick(function () {
	          document.selection.empty();
	        });
	      } else {
	        window.getSelection().removeAllRanges();
	      }
	    } catch (err) {}
	  },
	  _dragStarted: function _dragStarted(fallback, evt) {

	    awaitingDragStarted = false;

	    if (rootEl && dragEl) {
	      pluginEvent('dragStarted', this, {
	        evt: evt
	      });

	      if (this.nativeDraggable) {
	        on(document, 'dragover', _checkOutsideTargetEl);
	      }

	      var options = this.options; // Apply effect

	      !fallback && toggleClass(dragEl, options.dragClass, false);
	      toggleClass(dragEl, options.ghostClass, true);
	      Sortable.active = this;
	      fallback && this._appendGhost(); // Drag start event

	      _dispatchEvent({
	        sortable: this,
	        name: 'start',
	        originalEvent: evt
	      });
	    } else {
	      this._nulling();
	    }
	  },
	  _emulateDragOver: function _emulateDragOver() {
	    if (touchEvt) {
	      this._lastX = touchEvt.clientX;
	      this._lastY = touchEvt.clientY;

	      _hideGhostForTarget();

	      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
	      var parent = target;

	      while (target && target.shadowRoot) {
	        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
	        if (target === parent) break;
	        parent = target;
	      }

	      dragEl.parentNode[expando]._isOutsideThisEl(target);

	      if (parent) {
	        do {
	          if (parent[expando]) {
	            var inserted = void 0;
	            inserted = parent[expando]._onDragOver({
	              clientX: touchEvt.clientX,
	              clientY: touchEvt.clientY,
	              target: target,
	              rootEl: parent
	            });

	            if (inserted && !this.options.dragoverBubble) {
	              break;
	            }
	          }

	          target = parent; // store last element
	        }
	        /* jshint boss:true */
	        while (parent = parent.parentNode);
	      }

	      _unhideGhostForTarget();
	    }
	  },
	  _onTouchMove: function _onTouchMove(
	  /**TouchEvent*/
	  evt) {
	    if (tapEvt) {
	      var options = this.options,
	          fallbackTolerance = options.fallbackTolerance,
	          fallbackOffset = options.fallbackOffset,
	          touch = evt.touches ? evt.touches[0] : evt,
	          ghostMatrix = ghostEl && matrix(ghostEl, true),
	          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
	          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
	          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
	          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
	          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

	      if (!Sortable.active && !awaitingDragStarted) {
	        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
	          return;
	        }

	        this._onDragStart(evt, true);
	      }

	      if (ghostEl) {
	        if (ghostMatrix) {
	          ghostMatrix.e += dx - (lastDx || 0);
	          ghostMatrix.f += dy - (lastDy || 0);
	        } else {
	          ghostMatrix = {
	            a: 1,
	            b: 0,
	            c: 0,
	            d: 1,
	            e: dx,
	            f: dy
	          };
	        }

	        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
	        css(ghostEl, 'webkitTransform', cssMatrix);
	        css(ghostEl, 'mozTransform', cssMatrix);
	        css(ghostEl, 'msTransform', cssMatrix);
	        css(ghostEl, 'transform', cssMatrix);
	        lastDx = dx;
	        lastDy = dy;
	        touchEvt = touch;
	      }

	      evt.cancelable && evt.preventDefault();
	    }
	  },
	  _appendGhost: function _appendGhost() {
	    // Bug if using scale(): https://stackoverflow.com/questions/2637058
	    // Not being adjusted for
	    if (!ghostEl) {
	      var container = this.options.fallbackOnBody ? document.body : rootEl,
	          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
	          options = this.options; // Position absolutely

	      if (PositionGhostAbsolutely) {
	        // Get relatively positioned parent
	        ghostRelativeParent = container;

	        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
	          ghostRelativeParent = ghostRelativeParent.parentNode;
	        }

	        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
	          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
	          rect.top += ghostRelativeParent.scrollTop;
	          rect.left += ghostRelativeParent.scrollLeft;
	        } else {
	          ghostRelativeParent = getWindowScrollingElement();
	        }

	        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
	      }

	      ghostEl = dragEl.cloneNode(true);
	      toggleClass(ghostEl, options.ghostClass, false);
	      toggleClass(ghostEl, options.fallbackClass, true);
	      toggleClass(ghostEl, options.dragClass, true);
	      css(ghostEl, 'transition', '');
	      css(ghostEl, 'transform', '');
	      css(ghostEl, 'box-sizing', 'border-box');
	      css(ghostEl, 'margin', 0);
	      css(ghostEl, 'top', rect.top);
	      css(ghostEl, 'left', rect.left);
	      css(ghostEl, 'width', rect.width);
	      css(ghostEl, 'height', rect.height);
	      css(ghostEl, 'opacity', '0.8');
	      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
	      css(ghostEl, 'zIndex', '100000');
	      css(ghostEl, 'pointerEvents', 'none');
	      Sortable.ghost = ghostEl;
	      container.appendChild(ghostEl); // Set transform-origin

	      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
	    }
	  },
	  _onDragStart: function _onDragStart(
	  /**Event*/
	  evt,
	  /**boolean*/
	  fallback) {
	    var _this = this;

	    var dataTransfer = evt.dataTransfer;
	    var options = _this.options;
	    pluginEvent('dragStart', this, {
	      evt: evt
	    });

	    if (Sortable.eventCanceled) {
	      this._onDrop();

	      return;
	    }

	    pluginEvent('setupClone', this);

	    if (!Sortable.eventCanceled) {
	      cloneEl = clone(dragEl);
	      cloneEl.removeAttribute("id");
	      cloneEl.draggable = false;
	      cloneEl.style['will-change'] = '';

	      this._hideClone();

	      toggleClass(cloneEl, this.options.chosenClass, false);
	      Sortable.clone = cloneEl;
	    } // #1143: IFrame support workaround


	    _this.cloneId = _nextTick(function () {
	      pluginEvent('clone', _this);
	      if (Sortable.eventCanceled) return;

	      if (!_this.options.removeCloneOnHide) {
	        rootEl.insertBefore(cloneEl, dragEl);
	      }

	      _this._hideClone();

	      _dispatchEvent({
	        sortable: _this,
	        name: 'clone'
	      });
	    });
	    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

	    if (fallback) {
	      ignoreNextClick = true;
	      _this._loopId = setInterval(_this._emulateDragOver, 50);
	    } else {
	      // Undo what was set in _prepareDragStart before drag started
	      off(document, 'mouseup', _this._onDrop);
	      off(document, 'touchend', _this._onDrop);
	      off(document, 'touchcancel', _this._onDrop);

	      if (dataTransfer) {
	        dataTransfer.effectAllowed = 'move';
	        options.setData && options.setData.call(_this, dataTransfer, dragEl);
	      }

	      on(document, 'drop', _this); // #1276 fix:

	      css(dragEl, 'transform', 'translateZ(0)');
	    }

	    awaitingDragStarted = true;
	    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
	    on(document, 'selectstart', _this);
	    moved = true;

	    if (Safari) {
	      css(document.body, 'user-select', 'none');
	    }
	  },
	  // Returns true - if no further action is needed (either inserted or another condition)
	  _onDragOver: function _onDragOver(
	  /**Event*/
	  evt) {
	    var el = this.el,
	        target = evt.target,
	        dragRect,
	        targetRect,
	        revert,
	        options = this.options,
	        group = options.group,
	        activeSortable = Sortable.active,
	        isOwner = activeGroup === group,
	        canSort = options.sort,
	        fromSortable = putSortable || activeSortable,
	        vertical,
	        _this = this,
	        completedFired = false;

	    if (_silent) return;

	    function dragOverEvent(name, extra) {
	      pluginEvent(name, _this, _objectSpread2({
	        evt: evt,
	        isOwner: isOwner,
	        axis: vertical ? 'vertical' : 'horizontal',
	        revert: revert,
	        dragRect: dragRect,
	        targetRect: targetRect,
	        canSort: canSort,
	        fromSortable: fromSortable,
	        target: target,
	        completed: completed,
	        onMove: function onMove(target, after) {
	          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
	        },
	        changed: changed
	      }, extra));
	    } // Capture animation state


	    function capture() {
	      dragOverEvent('dragOverAnimationCapture');

	      _this.captureAnimationState();

	      if (_this !== fromSortable) {
	        fromSortable.captureAnimationState();
	      }
	    } // Return invocation when dragEl is inserted (or completed)


	    function completed(insertion) {
	      dragOverEvent('dragOverCompleted', {
	        insertion: insertion
	      });

	      if (insertion) {
	        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
	        if (isOwner) {
	          activeSortable._hideClone();
	        } else {
	          activeSortable._showClone(_this);
	        }

	        if (_this !== fromSortable) {
	          // Set ghost class to new sortable's ghost class
	          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
	          toggleClass(dragEl, options.ghostClass, true);
	        }

	        if (putSortable !== _this && _this !== Sortable.active) {
	          putSortable = _this;
	        } else if (_this === Sortable.active && putSortable) {
	          putSortable = null;
	        } // Animation


	        if (fromSortable === _this) {
	          _this._ignoreWhileAnimating = target;
	        }

	        _this.animateAll(function () {
	          dragOverEvent('dragOverAnimationComplete');
	          _this._ignoreWhileAnimating = null;
	        });

	        if (_this !== fromSortable) {
	          fromSortable.animateAll();
	          fromSortable._ignoreWhileAnimating = null;
	        }
	      } // Null lastTarget if it is not inside a previously swapped element


	      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
	        lastTarget = null;
	      } // no bubbling and not fallback


	      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
	        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


	        !insertion && nearestEmptyInsertDetectEvent(evt);
	      }

	      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
	      return completedFired = true;
	    } // Call when dragEl has been inserted


	    function changed() {
	      newIndex = index(dragEl);
	      newDraggableIndex = index(dragEl, options.draggable);

	      _dispatchEvent({
	        sortable: _this,
	        name: 'change',
	        toEl: el,
	        newIndex: newIndex,
	        newDraggableIndex: newDraggableIndex,
	        originalEvent: evt
	      });
	    }

	    if (evt.preventDefault !== void 0) {
	      evt.cancelable && evt.preventDefault();
	    }

	    target = closest(target, options.draggable, el, true);
	    dragOverEvent('dragOver');
	    if (Sortable.eventCanceled) return completedFired;

	    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
	      return completed(false);
	    }

	    ignoreNextClick = false;

	    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
	    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
	      vertical = this._getDirection(evt, target) === 'vertical';
	      dragRect = getRect(dragEl);
	      dragOverEvent('dragOverValid');
	      if (Sortable.eventCanceled) return completedFired;

	      if (revert) {
	        parentEl = rootEl; // actualization

	        capture();

	        this._hideClone();

	        dragOverEvent('revert');

	        if (!Sortable.eventCanceled) {
	          if (nextEl) {
	            rootEl.insertBefore(dragEl, nextEl);
	          } else {
	            rootEl.appendChild(dragEl);
	          }
	        }

	        return completed(true);
	      }

	      var elLastChild = lastChild(el, options.draggable);

	      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
	        // Insert to end of list
	        // If already at end of list: Do not insert
	        if (elLastChild === dragEl) {
	          return completed(false);
	        } // if there is a last element, it is the target


	        if (elLastChild && el === evt.target) {
	          target = elLastChild;
	        }

	        if (target) {
	          targetRect = getRect(target);
	        }

	        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
	          capture();

	          if (elLastChild && elLastChild.nextSibling) {
	            // the last draggable element is not the last node
	            el.insertBefore(dragEl, elLastChild.nextSibling);
	          } else {
	            el.appendChild(dragEl);
	          }

	          parentEl = el; // actualization

	          changed();
	          return completed(true);
	        }
	      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
	        // Insert to start of list
	        var firstChild = getChild(el, 0, options, true);

	        if (firstChild === dragEl) {
	          return completed(false);
	        }

	        target = firstChild;
	        targetRect = getRect(target);

	        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
	          capture();
	          el.insertBefore(dragEl, firstChild);
	          parentEl = el; // actualization

	          changed();
	          return completed(true);
	        }
	      } else if (target.parentNode === el) {
	        targetRect = getRect(target);
	        var direction = 0,
	            targetBeforeFirstSwap,
	            differentLevel = dragEl.parentNode !== el,
	            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
	            side1 = vertical ? 'top' : 'left',
	            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
	            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

	        if (lastTarget !== target) {
	          targetBeforeFirstSwap = targetRect[side1];
	          pastFirstInvertThresh = false;
	          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
	        }

	        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
	        var sibling;

	        if (direction !== 0) {
	          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
	          var dragIndex = index(dragEl);

	          do {
	            dragIndex -= direction;
	            sibling = parentEl.children[dragIndex];
	          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
	        } // If dragEl is already beside target: Do not insert


	        if (direction === 0 || sibling === target) {
	          return completed(false);
	        }

	        lastTarget = target;
	        lastDirection = direction;
	        var nextSibling = target.nextElementSibling,
	            after = false;
	        after = direction === 1;

	        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

	        if (moveVector !== false) {
	          if (moveVector === 1 || moveVector === -1) {
	            after = moveVector === 1;
	          }

	          _silent = true;
	          setTimeout(_unsilent, 30);
	          capture();

	          if (after && !nextSibling) {
	            el.appendChild(dragEl);
	          } else {
	            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
	          } // Undo chrome's scroll adjustment (has no effect on other browsers)


	          if (scrolledPastTop) {
	            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
	          }

	          parentEl = dragEl.parentNode; // actualization
	          // must be done before animation

	          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
	            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
	          }

	          changed();
	          return completed(true);
	        }
	      }

	      if (el.contains(dragEl)) {
	        return completed(false);
	      }
	    }

	    return false;
	  },
	  _ignoreWhileAnimating: null,
	  _offMoveEvents: function _offMoveEvents() {
	    off(document, 'mousemove', this._onTouchMove);
	    off(document, 'touchmove', this._onTouchMove);
	    off(document, 'pointermove', this._onTouchMove);
	    off(document, 'dragover', nearestEmptyInsertDetectEvent);
	    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
	    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
	  },
	  _offUpEvents: function _offUpEvents() {
	    var ownerDocument = this.el.ownerDocument;
	    off(ownerDocument, 'mouseup', this._onDrop);
	    off(ownerDocument, 'touchend', this._onDrop);
	    off(ownerDocument, 'pointerup', this._onDrop);
	    off(ownerDocument, 'touchcancel', this._onDrop);
	    off(document, 'selectstart', this);
	  },
	  _onDrop: function _onDrop(
	  /**Event*/
	  evt) {
	    var el = this.el,
	        options = this.options; // Get the index of the dragged element within its parent

	    newIndex = index(dragEl);
	    newDraggableIndex = index(dragEl, options.draggable);
	    pluginEvent('drop', this, {
	      evt: evt
	    });
	    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

	    newIndex = index(dragEl);
	    newDraggableIndex = index(dragEl, options.draggable);

	    if (Sortable.eventCanceled) {
	      this._nulling();

	      return;
	    }

	    awaitingDragStarted = false;
	    isCircumstantialInvert = false;
	    pastFirstInvertThresh = false;
	    clearInterval(this._loopId);
	    clearTimeout(this._dragStartTimer);

	    _cancelNextTick(this.cloneId);

	    _cancelNextTick(this._dragStartId); // Unbind events


	    if (this.nativeDraggable) {
	      off(document, 'drop', this);
	      off(el, 'dragstart', this._onDragStart);
	    }

	    this._offMoveEvents();

	    this._offUpEvents();

	    if (Safari) {
	      css(document.body, 'user-select', '');
	    }

	    css(dragEl, 'transform', '');

	    if (evt) {
	      if (moved) {
	        evt.cancelable && evt.preventDefault();
	        !options.dropBubble && evt.stopPropagation();
	      }

	      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

	      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
	        // Remove clone(s)
	        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
	      }

	      if (dragEl) {
	        if (this.nativeDraggable) {
	          off(dragEl, 'dragend', this);
	        }

	        _disableDraggable(dragEl);

	        dragEl.style['will-change'] = ''; // Remove classes
	        // ghostClass is added in dragStarted

	        if (moved && !awaitingDragStarted) {
	          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
	        }

	        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

	        _dispatchEvent({
	          sortable: this,
	          name: 'unchoose',
	          toEl: parentEl,
	          newIndex: null,
	          newDraggableIndex: null,
	          originalEvent: evt
	        });

	        if (rootEl !== parentEl) {
	          if (newIndex >= 0) {
	            // Add event
	            _dispatchEvent({
	              rootEl: parentEl,
	              name: 'add',
	              toEl: parentEl,
	              fromEl: rootEl,
	              originalEvent: evt
	            }); // Remove event


	            _dispatchEvent({
	              sortable: this,
	              name: 'remove',
	              toEl: parentEl,
	              originalEvent: evt
	            }); // drag from one list and drop into another


	            _dispatchEvent({
	              rootEl: parentEl,
	              name: 'sort',
	              toEl: parentEl,
	              fromEl: rootEl,
	              originalEvent: evt
	            });

	            _dispatchEvent({
	              sortable: this,
	              name: 'sort',
	              toEl: parentEl,
	              originalEvent: evt
	            });
	          }

	          putSortable && putSortable.save();
	        } else {
	          if (newIndex !== oldIndex) {
	            if (newIndex >= 0) {
	              // drag & drop within the same list
	              _dispatchEvent({
	                sortable: this,
	                name: 'update',
	                toEl: parentEl,
	                originalEvent: evt
	              });

	              _dispatchEvent({
	                sortable: this,
	                name: 'sort',
	                toEl: parentEl,
	                originalEvent: evt
	              });
	            }
	          }
	        }

	        if (Sortable.active) {
	          /* jshint eqnull:true */
	          if (newIndex == null || newIndex === -1) {
	            newIndex = oldIndex;
	            newDraggableIndex = oldDraggableIndex;
	          }

	          _dispatchEvent({
	            sortable: this,
	            name: 'end',
	            toEl: parentEl,
	            originalEvent: evt
	          }); // Save sorting


	          this.save();
	        }
	      }
	    }

	    this._nulling();
	  },
	  _nulling: function _nulling() {
	    pluginEvent('nulling', this);
	    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
	    savedInputChecked.forEach(function (el) {
	      el.checked = true;
	    });
	    savedInputChecked.length = lastDx = lastDy = 0;
	  },
	  handleEvent: function handleEvent(
	  /**Event*/
	  evt) {
	    switch (evt.type) {
	      case 'drop':
	      case 'dragend':
	        this._onDrop(evt);

	        break;

	      case 'dragenter':
	      case 'dragover':
	        if (dragEl) {
	          this._onDragOver(evt);

	          _globalDragOver(evt);
	        }

	        break;

	      case 'selectstart':
	        evt.preventDefault();
	        break;
	    }
	  },

	  /**
	   * Serializes the item into an array of string.
	   * @returns {String[]}
	   */
	  toArray: function toArray() {
	    var order = [],
	        el,
	        children = this.el.children,
	        i = 0,
	        n = children.length,
	        options = this.options;

	    for (; i < n; i++) {
	      el = children[i];

	      if (closest(el, options.draggable, this.el, false)) {
	        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
	      }
	    }

	    return order;
	  },

	  /**
	   * Sorts the elements according to the array.
	   * @param  {String[]}  order  order of the items
	   */
	  sort: function sort(order, useAnimation) {
	    var items = {},
	        rootEl = this.el;
	    this.toArray().forEach(function (id, i) {
	      var el = rootEl.children[i];

	      if (closest(el, this.options.draggable, rootEl, false)) {
	        items[id] = el;
	      }
	    }, this);
	    useAnimation && this.captureAnimationState();
	    order.forEach(function (id) {
	      if (items[id]) {
	        rootEl.removeChild(items[id]);
	        rootEl.appendChild(items[id]);
	      }
	    });
	    useAnimation && this.animateAll();
	  },

	  /**
	   * Save the current sorting
	   */
	  save: function save() {
	    var store = this.options.store;
	    store && store.set && store.set(this);
	  },

	  /**
	   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
	   * @param   {HTMLElement}  el
	   * @param   {String}       [selector]  default: `options.draggable`
	   * @returns {HTMLElement|null}
	   */
	  closest: function closest$1(el, selector) {
	    return closest(el, selector || this.options.draggable, this.el, false);
	  },

	  /**
	   * Set/get option
	   * @param   {string} name
	   * @param   {*}      [value]
	   * @returns {*}
	   */
	  option: function option(name, value) {
	    var options = this.options;

	    if (value === void 0) {
	      return options[name];
	    } else {
	      var modifiedValue = PluginManager.modifyOption(this, name, value);

	      if (typeof modifiedValue !== 'undefined') {
	        options[name] = modifiedValue;
	      } else {
	        options[name] = value;
	      }

	      if (name === 'group') {
	        _prepareGroup(options);
	      }
	    }
	  },

	  /**
	   * Destroy
	   */
	  destroy: function destroy() {
	    pluginEvent('destroy', this);
	    var el = this.el;
	    el[expando] = null;
	    off(el, 'mousedown', this._onTapStart);
	    off(el, 'touchstart', this._onTapStart);
	    off(el, 'pointerdown', this._onTapStart);

	    if (this.nativeDraggable) {
	      off(el, 'dragover', this);
	      off(el, 'dragenter', this);
	    } // Remove draggable attributes


	    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
	      el.removeAttribute('draggable');
	    });

	    this._onDrop();

	    this._disableDelayedDragEvents();

	    sortables.splice(sortables.indexOf(this.el), 1);
	    this.el = el = null;
	  },
	  _hideClone: function _hideClone() {
	    if (!cloneHidden) {
	      pluginEvent('hideClone', this);
	      if (Sortable.eventCanceled) return;
	      css(cloneEl, 'display', 'none');

	      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
	        cloneEl.parentNode.removeChild(cloneEl);
	      }

	      cloneHidden = true;
	    }
	  },
	  _showClone: function _showClone(putSortable) {
	    if (putSortable.lastPutMode !== 'clone') {
	      this._hideClone();

	      return;
	    }

	    if (cloneHidden) {
	      pluginEvent('showClone', this);
	      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

	      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
	        rootEl.insertBefore(cloneEl, dragEl);
	      } else if (nextEl) {
	        rootEl.insertBefore(cloneEl, nextEl);
	      } else {
	        rootEl.appendChild(cloneEl);
	      }

	      if (this.options.group.revertClone) {
	        this.animate(dragEl, cloneEl);
	      }

	      css(cloneEl, 'display', '');
	      cloneHidden = false;
	    }
	  }
	};

	function _globalDragOver(
	/**Event*/
	evt) {
	  if (evt.dataTransfer) {
	    evt.dataTransfer.dropEffect = 'move';
	  }

	  evt.cancelable && evt.preventDefault();
	}

	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
	  var evt,
	      sortable = fromEl[expando],
	      onMoveFn = sortable.options.onMove,
	      retVal; // Support for new CustomEvent feature

	  if (window.CustomEvent && !IE11OrLess && !Edge) {
	    evt = new CustomEvent('move', {
	      bubbles: true,
	      cancelable: true
	    });
	  } else {
	    evt = document.createEvent('Event');
	    evt.initEvent('move', true, true);
	  }

	  evt.to = toEl;
	  evt.from = fromEl;
	  evt.dragged = dragEl;
	  evt.draggedRect = dragRect;
	  evt.related = targetEl || toEl;
	  evt.relatedRect = targetRect || getRect(toEl);
	  evt.willInsertAfter = willInsertAfter;
	  evt.originalEvent = originalEvent;
	  fromEl.dispatchEvent(evt);

	  if (onMoveFn) {
	    retVal = onMoveFn.call(sortable, evt, originalEvent);
	  }

	  return retVal;
	}

	function _disableDraggable(el) {
	  el.draggable = false;
	}

	function _unsilent() {
	  _silent = false;
	}

	function _ghostIsFirst(evt, vertical, sortable) {
	  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
	  var spacer = 10;
	  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
	}

	function _ghostIsLast(evt, vertical, sortable) {
	  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
	  var spacer = 10;
	  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
	}

	function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
	  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
	      targetLength = vertical ? targetRect.height : targetRect.width,
	      targetS1 = vertical ? targetRect.top : targetRect.left,
	      targetS2 = vertical ? targetRect.bottom : targetRect.right,
	      invert = false;

	  if (!invertSwap) {
	    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
	    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
	      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
	      // check if past first invert threshold on side opposite of lastDirection
	      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
	        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
	        pastFirstInvertThresh = true;
	      }

	      if (!pastFirstInvertThresh) {
	        // dragEl shadow (target move distance shadow)
	        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
	        : mouseOnAxis > targetS2 - targetMoveDistance) {
	          return -lastDirection;
	        }
	      } else {
	        invert = true;
	      }
	    } else {
	      // Regular
	      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
	        return _getInsertDirection(target);
	      }
	    }
	  }

	  invert = invert || invertSwap;

	  if (invert) {
	    // Invert of regular
	    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
	      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
	    }
	  }

	  return 0;
	}
	/**
	 * Gets the direction dragEl must be swapped relative to target in order to make it
	 * seem that dragEl has been "inserted" into that element's position
	 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
	 * @return {Number}                   Direction dragEl must be swapped
	 */


	function _getInsertDirection(target) {
	  if (index(dragEl) < index(target)) {
	    return 1;
	  } else {
	    return -1;
	  }
	}
	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */


	function _generateId(el) {
	  var str = el.tagName + el.className + el.src + el.href + el.textContent,
	      i = str.length,
	      sum = 0;

	  while (i--) {
	    sum += str.charCodeAt(i);
	  }

	  return sum.toString(36);
	}

	function _saveInputCheckedState(root) {
	  savedInputChecked.length = 0;
	  var inputs = root.getElementsByTagName('input');
	  var idx = inputs.length;

	  while (idx--) {
	    var el = inputs[idx];
	    el.checked && savedInputChecked.push(el);
	  }
	}

	function _nextTick(fn) {
	  return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
	  return clearTimeout(id);
	} // Fixed #973:


	if (documentExists) {
	  on(document, 'touchmove', function (evt) {
	    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
	      evt.preventDefault();
	    }
	  });
	} // Export utils


	Sortable.utils = {
	  on: on,
	  off: off,
	  css: css,
	  find: find,
	  is: function is(el, selector) {
	    return !!closest(el, selector, el, false);
	  },
	  extend: extend,
	  throttle: throttle,
	  closest: closest,
	  toggleClass: toggleClass,
	  clone: clone,
	  index: index,
	  nextTick: _nextTick,
	  cancelNextTick: _cancelNextTick,
	  detectDirection: _detectDirection,
	  getChild: getChild
	};
	/**
	 * Get the Sortable instance of an element
	 * @param  {HTMLElement} element The element
	 * @return {Sortable|undefined}         The instance of Sortable
	 */

	Sortable.get = function (element) {
	  return element[expando];
	};
	/**
	 * Mount a plugin to Sortable
	 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
	 */


	Sortable.mount = function () {
	  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
	    plugins[_key] = arguments[_key];
	  }

	  if (plugins[0].constructor === Array) plugins = plugins[0];
	  plugins.forEach(function (plugin) {
	    if (!plugin.prototype || !plugin.prototype.constructor) {
	      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
	    }

	    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
	    PluginManager.mount(plugin);
	  });
	};
	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */


	Sortable.create = function (el, options) {
	  return new Sortable(el, options);
	}; // Export


	Sortable.version = version;

	var drop = function drop(_ref) {
	  var originalEvent = _ref.originalEvent,
	      putSortable = _ref.putSortable,
	      dragEl = _ref.dragEl,
	      activeSortable = _ref.activeSortable,
	      dispatchSortableEvent = _ref.dispatchSortableEvent,
	      hideGhostForTarget = _ref.hideGhostForTarget,
	      unhideGhostForTarget = _ref.unhideGhostForTarget;
	  if (!originalEvent) return;
	  var toSortable = putSortable || activeSortable;
	  hideGhostForTarget();
	  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
	  var target = document.elementFromPoint(touch.clientX, touch.clientY);
	  unhideGhostForTarget();

	  if (toSortable && !toSortable.el.contains(target)) {
	    dispatchSortableEvent('spill');
	    this.onSpill({
	      dragEl: dragEl,
	      putSortable: putSortable
	    });
	  }
	};

	function Revert() {}

	Revert.prototype = {
	  startIndex: null,
	  dragStart: function dragStart(_ref2) {
	    var oldDraggableIndex = _ref2.oldDraggableIndex;
	    this.startIndex = oldDraggableIndex;
	  },
	  onSpill: function onSpill(_ref3) {
	    var dragEl = _ref3.dragEl,
	        putSortable = _ref3.putSortable;
	    this.sortable.captureAnimationState();

	    if (putSortable) {
	      putSortable.captureAnimationState();
	    }

	    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

	    if (nextSibling) {
	      this.sortable.el.insertBefore(dragEl, nextSibling);
	    } else {
	      this.sortable.el.appendChild(dragEl);
	    }

	    this.sortable.animateAll();

	    if (putSortable) {
	      putSortable.animateAll();
	    }
	  },
	  drop: drop
	};

	_extends(Revert, {
	  pluginName: 'revertOnSpill'
	});

	function Remove() {}

	Remove.prototype = {
	  onSpill: function onSpill(_ref4) {
	    var dragEl = _ref4.dragEl,
	        putSortable = _ref4.putSortable;
	    var parentSortable = putSortable || this.sortable;
	    parentSortable.captureAnimationState();
	    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
	    parentSortable.animateAll();
	  },
	  drop: drop
	};

	_extends(Remove, {
	  pluginName: 'removeOnSpill'
	});

	function sortable() {
	  const feed_list = document.querySelector('.feeds-list');
	  if (!feed_list) return;

	  Sortable.create(
	    feed_list,
	    {
	      animation: 150,
	      draggable: '.col',
	      easing: 'cubic-bezier(1, 0, 0, 1)',
	      handle: '.gra-card-title',

	      onUpdate: (event) => {
	        const { children } = event.to;
	        const list = Object.keys(children).map((ele) => ({ index: ele, id: children[ele].id }));

	        fetch('/feeds/update_sort_order', {
	          method: 'POST',
	          headers: {
	            'Content-Type': 'application/json',
	            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
	          },
	          body: JSON.stringify({ body: list }),
	        }).catch(() => {});
	      },
	    },
	  );
	}

	var jsSnackbarExports = {};
	var jsSnackbar = {
	  get exports(){ return jsSnackbarExports; },
	  set exports(v){ jsSnackbarExports = v; },
	};

	/* v1.5.1 - https://github.com/mickelsonmichael/js-snackbar */

	(function (module) {
		const SnackBar = (function init(userOptions) {
		  var _This = this;
		  var _Interval;
		  var _Element;
		  var _Container;
		  var _Message;
		  var _MessageWrapper;
		  var _Options = {};

		  function _create() {
		      _applyUserOptions();
		      _setContainer();
		      _applyPositionClasses();

		      _Element = _createMessage();
		      _Container.appendChild(_Element);

		      if (_Options.timeout !== false && _Options.timeout > 0) {
		          _Interval = setTimeout(_This.Close, _Options.timeout);
		      }
		  }

		  function _applyUserOptions() {
		      _Options = {
		          message: userOptions?.message ?? "Operation performed successfully.",
		          dismissible: userOptions?.dismissible ?? true,
		          timeout: userOptions?.timeout ?? 5000,
		          status: userOptions?.status ? userOptions.status.toLowerCase().trim() : "",
		          actions: userOptions?.actions ?? [],
		          fixed: userOptions?.fixed ?? false,
		          position: userOptions?.position ?? "br",
		          container: userOptions?.container ?? document.body,
		          width: userOptions?.width,
		          speed: userOptions?.speed,
		          icon: userOptions?.icon
		      };
		  }

		  function _setContainer() {
		      var target = getOrFindContainer();

		      if (target === undefined) {
		          console.warn("SnackBar: Could not find target container " + _Options.container);
		          target = document.body; // default to the body as the container
		      }

		      _Container = getOrAddContainerIn(target);

		      function getOrAddContainerIn(target) {
		          var node;
		          var positionClass = _getPositionClass();

		          for (var i = 0; i < target.children.length; i++) {
		              node = target.children.item(i);

		              if (node.nodeType === 1
		                  && node.classList.length > 0
		                  && node.classList.contains("js-snackbar-container")
		                  && node.classList.contains(positionClass)
		              ) {
		                  return node;
		              }
		          }

		          return createNewContainer(target);
		      }

		      function createNewContainer(target) {
		          var container = document.createElement("div");
		          container.classList.add("js-snackbar-container");

		          if(_Options.fixed) {
		              container.classList.add("js-snackbar-container--fixed");
		          }

		          target.appendChild(container);
		          return container;
		      }

		      function getOrFindContainer() {
		          return typeof _Options.container === "string"
		              ? document.querySelector(_Options.container)
		              : _Options.container;
		      }
		  }

		  function _applyPositionClasses() {
		      _Container.classList.add(_getPositionClass());

		      var fixedClassName = "js-snackbar-container--fixed";

		      if (_Options.fixed) {
		          _Container.classList.add(fixedClassName);
		      }
		      else {
		          _Container.classList.remove(fixedClassName);
		      }
		  }

		  function _createMessage() {
		      var outerElement = createWrapper();

		      var innerSnack = createInnerSnackbar();

		      outerElement.appendChild(innerSnack);

		      return outerElement;

		      function createWrapper() {
		          var outerElement = document.createElement("div");

		          outerElement.classList.add("js-snackbar__wrapper");
		          outerElement.style.height = "0px";
		          outerElement.style.opacity = "0";
		          outerElement.style.marginTop = "0px";
		          outerElement.style.marginBottom = "0px";

		          setWidth(outerElement);
		          setSpeed(outerElement);

		          return outerElement;
		      }

		      function createInnerSnackbar() {
		          var innerSnack = document.createElement("div");
		          innerSnack.classList.add("js-snackbar", "js-snackbar--show");

		          applyColorAndIconTo(innerSnack);
		          insertMessageTo(innerSnack);
		          addActionsTo(innerSnack);
		          addDismissButtonTo(innerSnack);

		          return innerSnack;
		      }

		      function applyColorAndIconTo(element) {
		          if (!_Options.status) return;

		          var status = document.createElement("span");
		          status.classList.add("js-snackbar__status");

		          applyColorTo(status);
		          applyIconTo(status);

		          element.appendChild(status);

		          function applyColorTo(element) {
		              switch (_Options.status)
		              {
		                  case "success":
		                  case "green":
		                      element.classList.add("js-snackbar--success");
		                      break;
		                  case "warning":
		                  case "alert":
		                  case "orange":
		                      element.classList.add("js-snackbar--warning");
		                      break;
		                  case "danger":
		                  case "error":
		                  case "red":
		                      element.classList.add("js-snackbar--danger");
		                      break;
		                  default:
		                      element.classList.add("js-snackbar--info");
		                      break;
		              }
		          }

		          function applyIconTo(element) {
		              if (!_Options.icon) return;

		              var icon = document.createElement("span");
		              icon.classList.add("js-snackbar__icon");

		              switch (_Options.icon)
		              {
		                  case "exclamation":
		                  case "warn":
		                  case "danger":
		                      icon.innerText = "!";
		                      break;
		                  case "info":
		                  case "question":
		                  case "question-mark":
		                      icon.innerText = "?";
		                      break;
		                  case "plus":
		                  case "add":
		                      icon.innerText = "+";
		                      break;
		                  default:
		                      if (_Options.icon.length > 1) {
		                          console.warn("Invalid icon character provided: ", _Options.icon);
		                      }

		                      icon.innerText = _Options.icon.substr(0, 1);
		                      break;
		              }

		              element.appendChild(icon);
		          }
		      }

		      function insertMessageTo(element) {
		          _MessageWrapper = document.createElement("div");
		          _MessageWrapper.classList.add("js-snackbar__message-wrapper");

		          _Message = document.createElement("span");
		          _Message.classList.add("js-snackbar__message");
		          _Message.innerHTML = _Options.message;

		          _MessageWrapper.appendChild(_Message);
		          element.appendChild(_MessageWrapper);
		      }

		      function addActionsTo(element) {
		          if (typeof _Options.actions !== "object") {
		              return;
		          }

		          for (var i = 0; i < _Options.actions.length; i++) {
		              addAction(element, _Options.actions[i]);
		          }

		          function addAction(element, action) {
		              var button = document.createElement("span");
		              button.classList.add("js-snackbar__action");
		              button.textContent = action.text;

		              if (typeof action.function === "function") {
		                  if (action.dismiss === true) {
		                      button.onclick = function() {
		                          action.function();
		                          _This.Close();
		                      };
		                  }
		                  else {
		                      button.onclick = action.function;
		                  }
		              }
		              else {
		                  button.onclick = _This.Close;
		              }

		              element.appendChild(button);
		          }
		      }

		      function addDismissButtonTo(element) {
		          if (!_Options.dismissible) {
		              return;
		          }

		          var closeButton = document.createElement("span");
		          closeButton.classList.add("js-snackbar__close");
		          closeButton.innerText = "\u00D7";
		          closeButton.onclick = _This.Close;

		          element.appendChild(closeButton);
		      }

		      function setWidth(element) {
		          if (!_Options.width) return;

		          element.style.width = _Options.width;
		      }

		      function setSpeed(element) {
		          const { speed } = _Options;

		          switch (typeof speed) {
		              case "number":
		                  element.style.transitionDuration = speed + "ms";
		                  break;
		              case "string":
		                  element.style.transitionDuration = speed;
		                  break;
		          }
		      }
		  }

		  function _getPositionClass() {
		      switch(_Options.position)
		      {
		          case "bl":
		              return "js-snackbar-container--bottom-left";
		          case "tl":
		              return "js-snackbar-container--top-left";
		          case "tr":
		              return "js-snackbar-container--top-right";
		          case "tc":
		          case "tm":
		              return "js-snackbar-container--top-center";
		          case "bc":
		          case "bm":
		              return "js-snackbar-container--bottom-center";
		          default:
		              return "js-snackbar-container--bottom-right";
		      }
		  }

		  this.Open = function() {
		      var contentHeight =  getMessageHeight();

		      _Element.style.height = contentHeight + "px";
		      _Element.style.opacity = 1;
		      _Element.style.marginTop = "5px";
		      _Element.style.marginBottom = "5px";

		      _Element.addEventListener("transitioned", function() {
		          _Element.removeEventListener("transitioned", arguments.callee);
		          _Element.style.height = null;
		      });

		      function getMessageHeight() {
		          const wrapperStyles = window.getComputedStyle(_MessageWrapper);

		          return _Message.scrollHeight
		              + parseFloat(wrapperStyles.getPropertyValue('padding-top'))
		              + parseFloat(wrapperStyles.getPropertyValue("padding-bottom"))
		      }
		  };

		  this.Close = function () {
		      if (_Interval)
		          clearInterval(_Interval);

		      var snackbarHeight = _Element.scrollHeight; // get the auto height as a px value
		      var snackbarTransitions = _Element.style.transition;
		      _Element.style.transition = "";

		      requestAnimationFrame(function() {
		          _Element.style.height = snackbarHeight + "px"; // set the auto height to the px height
		          _Element.style.opacity = 1;
		          _Element.style.marginTop = "0px";
		          _Element.style.marginBottom = "0px";
		          _Element.style.transition = snackbarTransitions;

		          requestAnimationFrame(function() {
		              _Element.style.height = "0px";
		              _Element.style.opacity = 0;
		          });
		      });

		      setTimeout(function() {
		          _Container.removeChild(_Element);
		      }, 1000);
		  };

		  _create();
		  _This.Open();
		}).bind(commonjsGlobal);

		{
		  module.exports = SnackBar;
		}
	} (jsSnackbar));

	var SnackBar = jsSnackbarExports;

	/*
	Turbo 7.2.4
	Copyright © 2022 37signals LLC
	 */
	(function () {
	    if (window.Reflect === undefined ||
	        window.customElements === undefined ||
	        window.customElements.polyfillWrapFlushCallback) {
	        return;
	    }
	    const BuiltInHTMLElement = HTMLElement;
	    const wrapperForTheName = {
	        HTMLElement: function HTMLElement() {
	            return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
	        },
	    };
	    window.HTMLElement = wrapperForTheName["HTMLElement"];
	    HTMLElement.prototype = BuiltInHTMLElement.prototype;
	    HTMLElement.prototype.constructor = HTMLElement;
	    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
	})();

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2019 Javan Makhmali
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */

	(function(prototype) {
	  if (typeof prototype.requestSubmit == "function") return

	  prototype.requestSubmit = function(submitter) {
	    if (submitter) {
	      validateSubmitter(submitter, this);
	      submitter.click();
	    } else {
	      submitter = document.createElement("input");
	      submitter.type = "submit";
	      submitter.hidden = true;
	      this.appendChild(submitter);
	      submitter.click();
	      this.removeChild(submitter);
	    }
	  };

	  function validateSubmitter(submitter, form) {
	    submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
	    submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
	    submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
	  }

	  function raise(errorConstructor, message, name) {
	    throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name)
	  }
	})(HTMLFormElement.prototype);

	const submittersByForm = new WeakMap();
	function findSubmitterFromClickTarget(target) {
	    const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
	    const candidate = element ? element.closest("input, button") : null;
	    return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
	}
	function clickCaptured(event) {
	    const submitter = findSubmitterFromClickTarget(event.target);
	    if (submitter && submitter.form) {
	        submittersByForm.set(submitter.form, submitter);
	    }
	}
	(function () {
	    if ("submitter" in Event.prototype)
	        return;
	    let prototype;
	    if ("SubmitEvent" in window && /Apple Computer/.test(navigator.vendor)) {
	        prototype = window.SubmitEvent.prototype;
	    }
	    else if ("SubmitEvent" in window) {
	        return;
	    }
	    else {
	        prototype = window.Event.prototype;
	    }
	    addEventListener("click", clickCaptured, true);
	    Object.defineProperty(prototype, "submitter", {
	        get() {
	            if (this.type == "submit" && this.target instanceof HTMLFormElement) {
	                return submittersByForm.get(this.target);
	            }
	        },
	    });
	})();

	var FrameLoadingStyle;
	(function (FrameLoadingStyle) {
	    FrameLoadingStyle["eager"] = "eager";
	    FrameLoadingStyle["lazy"] = "lazy";
	})(FrameLoadingStyle || (FrameLoadingStyle = {}));
	class FrameElement extends HTMLElement {
	    constructor() {
	        super();
	        this.loaded = Promise.resolve();
	        this.delegate = new FrameElement.delegateConstructor(this);
	    }
	    static get observedAttributes() {
	        return ["disabled", "complete", "loading", "src"];
	    }
	    connectedCallback() {
	        this.delegate.connect();
	    }
	    disconnectedCallback() {
	        this.delegate.disconnect();
	    }
	    reload() {
	        return this.delegate.sourceURLReloaded();
	    }
	    attributeChangedCallback(name) {
	        if (name == "loading") {
	            this.delegate.loadingStyleChanged();
	        }
	        else if (name == "complete") {
	            this.delegate.completeChanged();
	        }
	        else if (name == "src") {
	            this.delegate.sourceURLChanged();
	        }
	        else {
	            this.delegate.disabledChanged();
	        }
	    }
	    get src() {
	        return this.getAttribute("src");
	    }
	    set src(value) {
	        if (value) {
	            this.setAttribute("src", value);
	        }
	        else {
	            this.removeAttribute("src");
	        }
	    }
	    get loading() {
	        return frameLoadingStyleFromString(this.getAttribute("loading") || "");
	    }
	    set loading(value) {
	        if (value) {
	            this.setAttribute("loading", value);
	        }
	        else {
	            this.removeAttribute("loading");
	        }
	    }
	    get disabled() {
	        return this.hasAttribute("disabled");
	    }
	    set disabled(value) {
	        if (value) {
	            this.setAttribute("disabled", "");
	        }
	        else {
	            this.removeAttribute("disabled");
	        }
	    }
	    get autoscroll() {
	        return this.hasAttribute("autoscroll");
	    }
	    set autoscroll(value) {
	        if (value) {
	            this.setAttribute("autoscroll", "");
	        }
	        else {
	            this.removeAttribute("autoscroll");
	        }
	    }
	    get complete() {
	        return !this.delegate.isLoading;
	    }
	    get isActive() {
	        return this.ownerDocument === document && !this.isPreview;
	    }
	    get isPreview() {
	        var _a, _b;
	        return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
	    }
	}
	function frameLoadingStyleFromString(style) {
	    switch (style.toLowerCase()) {
	        case "lazy":
	            return FrameLoadingStyle.lazy;
	        default:
	            return FrameLoadingStyle.eager;
	    }
	}

	function expandURL(locatable) {
	    return new URL(locatable.toString(), document.baseURI);
	}
	function getAnchor(url) {
	    let anchorMatch;
	    if (url.hash) {
	        return url.hash.slice(1);
	    }
	    else if ((anchorMatch = url.href.match(/#(.*)$/))) {
	        return anchorMatch[1];
	    }
	}
	function getAction(form, submitter) {
	    const action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) || form.getAttribute("action") || form.action;
	    return expandURL(action);
	}
	function getExtension(url) {
	    return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
	}
	function isHTML(url) {
	    return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml|php))$/);
	}
	function isPrefixedBy(baseURL, url) {
	    const prefix = getPrefix(url);
	    return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
	}
	function locationIsVisitable(location, rootLocation) {
	    return isPrefixedBy(location, rootLocation) && isHTML(location);
	}
	function getRequestURL(url) {
	    const anchor = getAnchor(url);
	    return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
	}
	function toCacheKey(url) {
	    return getRequestURL(url);
	}
	function urlsAreEqual(left, right) {
	    return expandURL(left).href == expandURL(right).href;
	}
	function getPathComponents(url) {
	    return url.pathname.split("/").slice(1);
	}
	function getLastPathComponent(url) {
	    return getPathComponents(url).slice(-1)[0];
	}
	function getPrefix(url) {
	    return addTrailingSlash(url.origin + url.pathname);
	}
	function addTrailingSlash(value) {
	    return value.endsWith("/") ? value : value + "/";
	}

	class FetchResponse {
	    constructor(response) {
	        this.response = response;
	    }
	    get succeeded() {
	        return this.response.ok;
	    }
	    get failed() {
	        return !this.succeeded;
	    }
	    get clientError() {
	        return this.statusCode >= 400 && this.statusCode <= 499;
	    }
	    get serverError() {
	        return this.statusCode >= 500 && this.statusCode <= 599;
	    }
	    get redirected() {
	        return this.response.redirected;
	    }
	    get location() {
	        return expandURL(this.response.url);
	    }
	    get isHTML() {
	        return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
	    }
	    get statusCode() {
	        return this.response.status;
	    }
	    get contentType() {
	        return this.header("Content-Type");
	    }
	    get responseText() {
	        return this.response.clone().text();
	    }
	    get responseHTML() {
	        if (this.isHTML) {
	            return this.response.clone().text();
	        }
	        else {
	            return Promise.resolve(undefined);
	        }
	    }
	    header(name) {
	        return this.response.headers.get(name);
	    }
	}

	function isAction(action) {
	    return action == "advance" || action == "replace" || action == "restore";
	}

	function activateScriptElement(element) {
	    if (element.getAttribute("data-turbo-eval") == "false") {
	        return element;
	    }
	    else {
	        const createdScriptElement = document.createElement("script");
	        const cspNonce = getMetaContent("csp-nonce");
	        if (cspNonce) {
	            createdScriptElement.nonce = cspNonce;
	        }
	        createdScriptElement.textContent = element.textContent;
	        createdScriptElement.async = false;
	        copyElementAttributes(createdScriptElement, element);
	        return createdScriptElement;
	    }
	}
	function copyElementAttributes(destinationElement, sourceElement) {
	    for (const { name, value } of sourceElement.attributes) {
	        destinationElement.setAttribute(name, value);
	    }
	}
	function createDocumentFragment(html) {
	    const template = document.createElement("template");
	    template.innerHTML = html;
	    return template.content;
	}
	function dispatch(eventName, { target, cancelable, detail } = {}) {
	    const event = new CustomEvent(eventName, {
	        cancelable,
	        bubbles: true,
	        detail,
	    });
	    if (target && target.isConnected) {
	        target.dispatchEvent(event);
	    }
	    else {
	        document.documentElement.dispatchEvent(event);
	    }
	    return event;
	}
	function nextAnimationFrame() {
	    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
	}
	function nextEventLoopTick() {
	    return new Promise((resolve) => setTimeout(() => resolve(), 0));
	}
	function nextMicrotask() {
	    return Promise.resolve();
	}
	function parseHTMLDocument(html = "") {
	    return new DOMParser().parseFromString(html, "text/html");
	}
	function unindent(strings, ...values) {
	    const lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
	    const match = lines[0].match(/^\s+/);
	    const indent = match ? match[0].length : 0;
	    return lines.map((line) => line.slice(indent)).join("\n");
	}
	function interpolate(strings, values) {
	    return strings.reduce((result, string, i) => {
	        const value = values[i] == undefined ? "" : values[i];
	        return result + string + value;
	    }, "");
	}
	function uuid() {
	    return Array.from({ length: 36 })
	        .map((_, i) => {
	        if (i == 8 || i == 13 || i == 18 || i == 23) {
	            return "-";
	        }
	        else if (i == 14) {
	            return "4";
	        }
	        else if (i == 19) {
	            return (Math.floor(Math.random() * 4) + 8).toString(16);
	        }
	        else {
	            return Math.floor(Math.random() * 15).toString(16);
	        }
	    })
	        .join("");
	}
	function getAttribute(attributeName, ...elements) {
	    for (const value of elements.map((element) => element === null || element === void 0 ? void 0 : element.getAttribute(attributeName))) {
	        if (typeof value == "string")
	            return value;
	    }
	    return null;
	}
	function hasAttribute(attributeName, ...elements) {
	    return elements.some((element) => element && element.hasAttribute(attributeName));
	}
	function markAsBusy(...elements) {
	    for (const element of elements) {
	        if (element.localName == "turbo-frame") {
	            element.setAttribute("busy", "");
	        }
	        element.setAttribute("aria-busy", "true");
	    }
	}
	function clearBusyState(...elements) {
	    for (const element of elements) {
	        if (element.localName == "turbo-frame") {
	            element.removeAttribute("busy");
	        }
	        element.removeAttribute("aria-busy");
	    }
	}
	function waitForLoad(element, timeoutInMilliseconds = 2000) {
	    return new Promise((resolve) => {
	        const onComplete = () => {
	            element.removeEventListener("error", onComplete);
	            element.removeEventListener("load", onComplete);
	            resolve();
	        };
	        element.addEventListener("load", onComplete, { once: true });
	        element.addEventListener("error", onComplete, { once: true });
	        setTimeout(resolve, timeoutInMilliseconds);
	    });
	}
	function getHistoryMethodForAction(action) {
	    switch (action) {
	        case "replace":
	            return history.replaceState;
	        case "advance":
	        case "restore":
	            return history.pushState;
	    }
	}
	function getVisitAction(...elements) {
	    const action = getAttribute("data-turbo-action", ...elements);
	    return isAction(action) ? action : null;
	}
	function getMetaElement(name) {
	    return document.querySelector(`meta[name="${name}"]`);
	}
	function getMetaContent(name) {
	    const element = getMetaElement(name);
	    return element && element.content;
	}
	function setMetaContent(name, content) {
	    let element = getMetaElement(name);
	    if (!element) {
	        element = document.createElement("meta");
	        element.setAttribute("name", name);
	        document.head.appendChild(element);
	    }
	    element.setAttribute("content", content);
	    return element;
	}

	var FetchMethod;
	(function (FetchMethod) {
	    FetchMethod[FetchMethod["get"] = 0] = "get";
	    FetchMethod[FetchMethod["post"] = 1] = "post";
	    FetchMethod[FetchMethod["put"] = 2] = "put";
	    FetchMethod[FetchMethod["patch"] = 3] = "patch";
	    FetchMethod[FetchMethod["delete"] = 4] = "delete";
	})(FetchMethod || (FetchMethod = {}));
	function fetchMethodFromString(method) {
	    switch (method.toLowerCase()) {
	        case "get":
	            return FetchMethod.get;
	        case "post":
	            return FetchMethod.post;
	        case "put":
	            return FetchMethod.put;
	        case "patch":
	            return FetchMethod.patch;
	        case "delete":
	            return FetchMethod.delete;
	    }
	}
	class FetchRequest {
	    constructor(delegate, method, location, body = new URLSearchParams(), target = null) {
	        this.abortController = new AbortController();
	        this.resolveRequestPromise = (_value) => { };
	        this.delegate = delegate;
	        this.method = method;
	        this.headers = this.defaultHeaders;
	        this.body = body;
	        this.url = location;
	        this.target = target;
	    }
	    get location() {
	        return this.url;
	    }
	    get params() {
	        return this.url.searchParams;
	    }
	    get entries() {
	        return this.body ? Array.from(this.body.entries()) : [];
	    }
	    cancel() {
	        this.abortController.abort();
	    }
	    async perform() {
	        var _a, _b;
	        const { fetchOptions } = this;
	        (_b = (_a = this.delegate).prepareHeadersForRequest) === null || _b === void 0 ? void 0 : _b.call(_a, this.headers, this);
	        await this.allowRequestToBeIntercepted(fetchOptions);
	        try {
	            this.delegate.requestStarted(this);
	            const response = await fetch(this.url.href, fetchOptions);
	            return await this.receive(response);
	        }
	        catch (error) {
	            if (error.name !== "AbortError") {
	                if (this.willDelegateErrorHandling(error)) {
	                    this.delegate.requestErrored(this, error);
	                }
	                throw error;
	            }
	        }
	        finally {
	            this.delegate.requestFinished(this);
	        }
	    }
	    async receive(response) {
	        const fetchResponse = new FetchResponse(response);
	        const event = dispatch("turbo:before-fetch-response", {
	            cancelable: true,
	            detail: { fetchResponse },
	            target: this.target,
	        });
	        if (event.defaultPrevented) {
	            this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
	        }
	        else if (fetchResponse.succeeded) {
	            this.delegate.requestSucceededWithResponse(this, fetchResponse);
	        }
	        else {
	            this.delegate.requestFailedWithResponse(this, fetchResponse);
	        }
	        return fetchResponse;
	    }
	    get fetchOptions() {
	        var _a;
	        return {
	            method: FetchMethod[this.method].toUpperCase(),
	            credentials: "same-origin",
	            headers: this.headers,
	            redirect: "follow",
	            body: this.isIdempotent ? null : this.body,
	            signal: this.abortSignal,
	            referrer: (_a = this.delegate.referrer) === null || _a === void 0 ? void 0 : _a.href,
	        };
	    }
	    get defaultHeaders() {
	        return {
	            Accept: "text/html, application/xhtml+xml",
	        };
	    }
	    get isIdempotent() {
	        return this.method == FetchMethod.get;
	    }
	    get abortSignal() {
	        return this.abortController.signal;
	    }
	    acceptResponseType(mimeType) {
	        this.headers["Accept"] = [mimeType, this.headers["Accept"]].join(", ");
	    }
	    async allowRequestToBeIntercepted(fetchOptions) {
	        const requestInterception = new Promise((resolve) => (this.resolveRequestPromise = resolve));
	        const event = dispatch("turbo:before-fetch-request", {
	            cancelable: true,
	            detail: {
	                fetchOptions,
	                url: this.url,
	                resume: this.resolveRequestPromise,
	            },
	            target: this.target,
	        });
	        if (event.defaultPrevented)
	            await requestInterception;
	    }
	    willDelegateErrorHandling(error) {
	        const event = dispatch("turbo:fetch-request-error", {
	            target: this.target,
	            cancelable: true,
	            detail: { request: this, error: error },
	        });
	        return !event.defaultPrevented;
	    }
	}

	class AppearanceObserver {
	    constructor(delegate, element) {
	        this.started = false;
	        this.intersect = (entries) => {
	            const lastEntry = entries.slice(-1)[0];
	            if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) {
	                this.delegate.elementAppearedInViewport(this.element);
	            }
	        };
	        this.delegate = delegate;
	        this.element = element;
	        this.intersectionObserver = new IntersectionObserver(this.intersect);
	    }
	    start() {
	        if (!this.started) {
	            this.started = true;
	            this.intersectionObserver.observe(this.element);
	        }
	    }
	    stop() {
	        if (this.started) {
	            this.started = false;
	            this.intersectionObserver.unobserve(this.element);
	        }
	    }
	}

	class StreamMessage {
	    constructor(fragment) {
	        this.fragment = importStreamElements(fragment);
	    }
	    static wrap(message) {
	        if (typeof message == "string") {
	            return new this(createDocumentFragment(message));
	        }
	        else {
	            return message;
	        }
	    }
	}
	StreamMessage.contentType = "text/vnd.turbo-stream.html";
	function importStreamElements(fragment) {
	    for (const element of fragment.querySelectorAll("turbo-stream")) {
	        const streamElement = document.importNode(element, true);
	        for (const inertScriptElement of streamElement.templateElement.content.querySelectorAll("script")) {
	            inertScriptElement.replaceWith(activateScriptElement(inertScriptElement));
	        }
	        element.replaceWith(streamElement);
	    }
	    return fragment;
	}

	var FormSubmissionState;
	(function (FormSubmissionState) {
	    FormSubmissionState[FormSubmissionState["initialized"] = 0] = "initialized";
	    FormSubmissionState[FormSubmissionState["requesting"] = 1] = "requesting";
	    FormSubmissionState[FormSubmissionState["waiting"] = 2] = "waiting";
	    FormSubmissionState[FormSubmissionState["receiving"] = 3] = "receiving";
	    FormSubmissionState[FormSubmissionState["stopping"] = 4] = "stopping";
	    FormSubmissionState[FormSubmissionState["stopped"] = 5] = "stopped";
	})(FormSubmissionState || (FormSubmissionState = {}));
	var FormEnctype;
	(function (FormEnctype) {
	    FormEnctype["urlEncoded"] = "application/x-www-form-urlencoded";
	    FormEnctype["multipart"] = "multipart/form-data";
	    FormEnctype["plain"] = "text/plain";
	})(FormEnctype || (FormEnctype = {}));
	function formEnctypeFromString(encoding) {
	    switch (encoding.toLowerCase()) {
	        case FormEnctype.multipart:
	            return FormEnctype.multipart;
	        case FormEnctype.plain:
	            return FormEnctype.plain;
	        default:
	            return FormEnctype.urlEncoded;
	    }
	}
	class FormSubmission {
	    constructor(delegate, formElement, submitter, mustRedirect = false) {
	        this.state = FormSubmissionState.initialized;
	        this.delegate = delegate;
	        this.formElement = formElement;
	        this.submitter = submitter;
	        this.formData = buildFormData(formElement, submitter);
	        this.location = expandURL(this.action);
	        if (this.method == FetchMethod.get) {
	            mergeFormDataEntries(this.location, [...this.body.entries()]);
	        }
	        this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body, this.formElement);
	        this.mustRedirect = mustRedirect;
	    }
	    static confirmMethod(message, _element, _submitter) {
	        return Promise.resolve(confirm(message));
	    }
	    get method() {
	        var _a;
	        const method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
	        return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
	    }
	    get action() {
	        var _a;
	        const formElementAction = typeof this.formElement.action === "string" ? this.formElement.action : null;
	        if ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.hasAttribute("formaction")) {
	            return this.submitter.getAttribute("formaction") || "";
	        }
	        else {
	            return this.formElement.getAttribute("action") || formElementAction || "";
	        }
	    }
	    get body() {
	        if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) {
	            return new URLSearchParams(this.stringFormData);
	        }
	        else {
	            return this.formData;
	        }
	    }
	    get enctype() {
	        var _a;
	        return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
	    }
	    get isIdempotent() {
	        return this.fetchRequest.isIdempotent;
	    }
	    get stringFormData() {
	        return [...this.formData].reduce((entries, [name, value]) => {
	            return entries.concat(typeof value == "string" ? [[name, value]] : []);
	        }, []);
	    }
	    async start() {
	        const { initialized, requesting } = FormSubmissionState;
	        const confirmationMessage = getAttribute("data-turbo-confirm", this.submitter, this.formElement);
	        if (typeof confirmationMessage === "string") {
	            const answer = await FormSubmission.confirmMethod(confirmationMessage, this.formElement, this.submitter);
	            if (!answer) {
	                return;
	            }
	        }
	        if (this.state == initialized) {
	            this.state = requesting;
	            return this.fetchRequest.perform();
	        }
	    }
	    stop() {
	        const { stopping, stopped } = FormSubmissionState;
	        if (this.state != stopping && this.state != stopped) {
	            this.state = stopping;
	            this.fetchRequest.cancel();
	            return true;
	        }
	    }
	    prepareHeadersForRequest(headers, request) {
	        if (!request.isIdempotent) {
	            const token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");
	            if (token) {
	                headers["X-CSRF-Token"] = token;
	            }
	        }
	        if (this.requestAcceptsTurboStreamResponse(request)) {
	            request.acceptResponseType(StreamMessage.contentType);
	        }
	    }
	    requestStarted(_request) {
	        var _a;
	        this.state = FormSubmissionState.waiting;
	        (_a = this.submitter) === null || _a === void 0 ? void 0 : _a.setAttribute("disabled", "");
	        dispatch("turbo:submit-start", {
	            target: this.formElement,
	            detail: { formSubmission: this },
	        });
	        this.delegate.formSubmissionStarted(this);
	    }
	    requestPreventedHandlingResponse(request, response) {
	        this.result = { success: response.succeeded, fetchResponse: response };
	    }
	    requestSucceededWithResponse(request, response) {
	        if (response.clientError || response.serverError) {
	            this.delegate.formSubmissionFailedWithResponse(this, response);
	        }
	        else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
	            const error = new Error("Form responses must redirect to another location");
	            this.delegate.formSubmissionErrored(this, error);
	        }
	        else {
	            this.state = FormSubmissionState.receiving;
	            this.result = { success: true, fetchResponse: response };
	            this.delegate.formSubmissionSucceededWithResponse(this, response);
	        }
	    }
	    requestFailedWithResponse(request, response) {
	        this.result = { success: false, fetchResponse: response };
	        this.delegate.formSubmissionFailedWithResponse(this, response);
	    }
	    requestErrored(request, error) {
	        this.result = { success: false, error };
	        this.delegate.formSubmissionErrored(this, error);
	    }
	    requestFinished(_request) {
	        var _a;
	        this.state = FormSubmissionState.stopped;
	        (_a = this.submitter) === null || _a === void 0 ? void 0 : _a.removeAttribute("disabled");
	        dispatch("turbo:submit-end", {
	            target: this.formElement,
	            detail: Object.assign({ formSubmission: this }, this.result),
	        });
	        this.delegate.formSubmissionFinished(this);
	    }
	    requestMustRedirect(request) {
	        return !request.isIdempotent && this.mustRedirect;
	    }
	    requestAcceptsTurboStreamResponse(request) {
	        return !request.isIdempotent || hasAttribute("data-turbo-stream", this.submitter, this.formElement);
	    }
	}
	function buildFormData(formElement, submitter) {
	    const formData = new FormData(formElement);
	    const name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
	    const value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");
	    if (name) {
	        formData.append(name, value || "");
	    }
	    return formData;
	}
	function getCookieValue(cookieName) {
	    if (cookieName != null) {
	        const cookies = document.cookie ? document.cookie.split("; ") : [];
	        const cookie = cookies.find((cookie) => cookie.startsWith(cookieName));
	        if (cookie) {
	            const value = cookie.split("=").slice(1).join("=");
	            return value ? decodeURIComponent(value) : undefined;
	        }
	    }
	}
	function responseSucceededWithoutRedirect(response) {
	    return response.statusCode == 200 && !response.redirected;
	}
	function mergeFormDataEntries(url, entries) {
	    const searchParams = new URLSearchParams();
	    for (const [name, value] of entries) {
	        if (value instanceof File)
	            continue;
	        searchParams.append(name, value);
	    }
	    url.search = searchParams.toString();
	    return url;
	}

	class Snapshot {
	    constructor(element) {
	        this.element = element;
	    }
	    get activeElement() {
	        return this.element.ownerDocument.activeElement;
	    }
	    get children() {
	        return [...this.element.children];
	    }
	    hasAnchor(anchor) {
	        return this.getElementForAnchor(anchor) != null;
	    }
	    getElementForAnchor(anchor) {
	        return anchor ? this.element.querySelector(`[id='${anchor}'], a[name='${anchor}']`) : null;
	    }
	    get isConnected() {
	        return this.element.isConnected;
	    }
	    get firstAutofocusableElement() {
	        const inertDisabledOrHidden = "[inert], :disabled, [hidden], details:not([open]), dialog:not([open])";
	        for (const element of this.element.querySelectorAll("[autofocus]")) {
	            if (element.closest(inertDisabledOrHidden) == null)
	                return element;
	            else
	                continue;
	        }
	        return null;
	    }
	    get permanentElements() {
	        return queryPermanentElementsAll(this.element);
	    }
	    getPermanentElementById(id) {
	        return getPermanentElementById(this.element, id);
	    }
	    getPermanentElementMapForSnapshot(snapshot) {
	        const permanentElementMap = {};
	        for (const currentPermanentElement of this.permanentElements) {
	            const { id } = currentPermanentElement;
	            const newPermanentElement = snapshot.getPermanentElementById(id);
	            if (newPermanentElement) {
	                permanentElementMap[id] = [currentPermanentElement, newPermanentElement];
	            }
	        }
	        return permanentElementMap;
	    }
	}
	function getPermanentElementById(node, id) {
	    return node.querySelector(`#${id}[data-turbo-permanent]`);
	}
	function queryPermanentElementsAll(node) {
	    return node.querySelectorAll("[id][data-turbo-permanent]");
	}

	class FormSubmitObserver {
	    constructor(delegate, eventTarget) {
	        this.started = false;
	        this.submitCaptured = () => {
	            this.eventTarget.removeEventListener("submit", this.submitBubbled, false);
	            this.eventTarget.addEventListener("submit", this.submitBubbled, false);
	        };
	        this.submitBubbled = ((event) => {
	            if (!event.defaultPrevented) {
	                const form = event.target instanceof HTMLFormElement ? event.target : undefined;
	                const submitter = event.submitter || undefined;
	                if (form &&
	                    submissionDoesNotDismissDialog(form, submitter) &&
	                    submissionDoesNotTargetIFrame(form, submitter) &&
	                    this.delegate.willSubmitForm(form, submitter)) {
	                    event.preventDefault();
	                    event.stopImmediatePropagation();
	                    this.delegate.formSubmitted(form, submitter);
	                }
	            }
	        });
	        this.delegate = delegate;
	        this.eventTarget = eventTarget;
	    }
	    start() {
	        if (!this.started) {
	            this.eventTarget.addEventListener("submit", this.submitCaptured, true);
	            this.started = true;
	        }
	    }
	    stop() {
	        if (this.started) {
	            this.eventTarget.removeEventListener("submit", this.submitCaptured, true);
	            this.started = false;
	        }
	    }
	}
	function submissionDoesNotDismissDialog(form, submitter) {
	    const method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.getAttribute("method");
	    return method != "dialog";
	}
	function submissionDoesNotTargetIFrame(form, submitter) {
	    const target = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formtarget")) || form.target;
	    for (const element of document.getElementsByName(target)) {
	        if (element instanceof HTMLIFrameElement)
	            return false;
	    }
	    return true;
	}

	class View {
	    constructor(delegate, element) {
	        this.resolveRenderPromise = (_value) => { };
	        this.resolveInterceptionPromise = (_value) => { };
	        this.delegate = delegate;
	        this.element = element;
	    }
	    scrollToAnchor(anchor) {
	        const element = this.snapshot.getElementForAnchor(anchor);
	        if (element) {
	            this.scrollToElement(element);
	            this.focusElement(element);
	        }
	        else {
	            this.scrollToPosition({ x: 0, y: 0 });
	        }
	    }
	    scrollToAnchorFromLocation(location) {
	        this.scrollToAnchor(getAnchor(location));
	    }
	    scrollToElement(element) {
	        element.scrollIntoView();
	    }
	    focusElement(element) {
	        if (element instanceof HTMLElement) {
	            if (element.hasAttribute("tabindex")) {
	                element.focus();
	            }
	            else {
	                element.setAttribute("tabindex", "-1");
	                element.focus();
	                element.removeAttribute("tabindex");
	            }
	        }
	    }
	    scrollToPosition({ x, y }) {
	        this.scrollRoot.scrollTo(x, y);
	    }
	    scrollToTop() {
	        this.scrollToPosition({ x: 0, y: 0 });
	    }
	    get scrollRoot() {
	        return window;
	    }
	    async render(renderer) {
	        const { isPreview, shouldRender, newSnapshot: snapshot } = renderer;
	        if (shouldRender) {
	            try {
	                this.renderPromise = new Promise((resolve) => (this.resolveRenderPromise = resolve));
	                this.renderer = renderer;
	                await this.prepareToRenderSnapshot(renderer);
	                const renderInterception = new Promise((resolve) => (this.resolveInterceptionPromise = resolve));
	                const options = { resume: this.resolveInterceptionPromise, render: this.renderer.renderElement };
	                const immediateRender = this.delegate.allowsImmediateRender(snapshot, options);
	                if (!immediateRender)
	                    await renderInterception;
	                await this.renderSnapshot(renderer);
	                this.delegate.viewRenderedSnapshot(snapshot, isPreview);
	                this.delegate.preloadOnLoadLinksForView(this.element);
	                this.finishRenderingSnapshot(renderer);
	            }
	            finally {
	                delete this.renderer;
	                this.resolveRenderPromise(undefined);
	                delete this.renderPromise;
	            }
	        }
	        else {
	            this.invalidate(renderer.reloadReason);
	        }
	    }
	    invalidate(reason) {
	        this.delegate.viewInvalidated(reason);
	    }
	    async prepareToRenderSnapshot(renderer) {
	        this.markAsPreview(renderer.isPreview);
	        await renderer.prepareToRender();
	    }
	    markAsPreview(isPreview) {
	        if (isPreview) {
	            this.element.setAttribute("data-turbo-preview", "");
	        }
	        else {
	            this.element.removeAttribute("data-turbo-preview");
	        }
	    }
	    async renderSnapshot(renderer) {
	        await renderer.render();
	    }
	    finishRenderingSnapshot(renderer) {
	        renderer.finishRendering();
	    }
	}

	class FrameView extends View {
	    invalidate() {
	        this.element.innerHTML = "";
	    }
	    get snapshot() {
	        return new Snapshot(this.element);
	    }
	}

	class LinkInterceptor {
	    constructor(delegate, element) {
	        this.clickBubbled = (event) => {
	            if (this.respondsToEventTarget(event.target)) {
	                this.clickEvent = event;
	            }
	            else {
	                delete this.clickEvent;
	            }
	        };
	        this.linkClicked = ((event) => {
	            if (this.clickEvent && this.respondsToEventTarget(event.target) && event.target instanceof Element) {
	                if (this.delegate.shouldInterceptLinkClick(event.target, event.detail.url, event.detail.originalEvent)) {
	                    this.clickEvent.preventDefault();
	                    event.preventDefault();
	                    this.delegate.linkClickIntercepted(event.target, event.detail.url, event.detail.originalEvent);
	                }
	            }
	            delete this.clickEvent;
	        });
	        this.willVisit = ((_event) => {
	            delete this.clickEvent;
	        });
	        this.delegate = delegate;
	        this.element = element;
	    }
	    start() {
	        this.element.addEventListener("click", this.clickBubbled);
	        document.addEventListener("turbo:click", this.linkClicked);
	        document.addEventListener("turbo:before-visit", this.willVisit);
	    }
	    stop() {
	        this.element.removeEventListener("click", this.clickBubbled);
	        document.removeEventListener("turbo:click", this.linkClicked);
	        document.removeEventListener("turbo:before-visit", this.willVisit);
	    }
	    respondsToEventTarget(target) {
	        const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
	        return element && element.closest("turbo-frame, html") == this.element;
	    }
	}

	class LinkClickObserver {
	    constructor(delegate, eventTarget) {
	        this.started = false;
	        this.clickCaptured = () => {
	            this.eventTarget.removeEventListener("click", this.clickBubbled, false);
	            this.eventTarget.addEventListener("click", this.clickBubbled, false);
	        };
	        this.clickBubbled = (event) => {
	            if (event instanceof MouseEvent && this.clickEventIsSignificant(event)) {
	                const target = (event.composedPath && event.composedPath()[0]) || event.target;
	                const link = this.findLinkFromClickTarget(target);
	                if (link && doesNotTargetIFrame(link)) {
	                    const location = this.getLocationForLink(link);
	                    if (this.delegate.willFollowLinkToLocation(link, location, event)) {
	                        event.preventDefault();
	                        this.delegate.followedLinkToLocation(link, location);
	                    }
	                }
	            }
	        };
	        this.delegate = delegate;
	        this.eventTarget = eventTarget;
	    }
	    start() {
	        if (!this.started) {
	            this.eventTarget.addEventListener("click", this.clickCaptured, true);
	            this.started = true;
	        }
	    }
	    stop() {
	        if (this.started) {
	            this.eventTarget.removeEventListener("click", this.clickCaptured, true);
	            this.started = false;
	        }
	    }
	    clickEventIsSignificant(event) {
	        return !((event.target && event.target.isContentEditable) ||
	            event.defaultPrevented ||
	            event.which > 1 ||
	            event.altKey ||
	            event.ctrlKey ||
	            event.metaKey ||
	            event.shiftKey);
	    }
	    findLinkFromClickTarget(target) {
	        if (target instanceof Element) {
	            return target.closest("a[href]:not([target^=_]):not([download])");
	        }
	    }
	    getLocationForLink(link) {
	        return expandURL(link.getAttribute("href") || "");
	    }
	}
	function doesNotTargetIFrame(anchor) {
	    for (const element of document.getElementsByName(anchor.target)) {
	        if (element instanceof HTMLIFrameElement)
	            return false;
	    }
	    return true;
	}

	class FormLinkClickObserver {
	    constructor(delegate, element) {
	        this.delegate = delegate;
	        this.linkInterceptor = new LinkClickObserver(this, element);
	    }
	    start() {
	        this.linkInterceptor.start();
	    }
	    stop() {
	        this.linkInterceptor.stop();
	    }
	    willFollowLinkToLocation(link, location, originalEvent) {
	        return (this.delegate.willSubmitFormLinkToLocation(link, location, originalEvent) &&
	            link.hasAttribute("data-turbo-method"));
	    }
	    followedLinkToLocation(link, location) {
	        const action = location.href;
	        const form = document.createElement("form");
	        form.setAttribute("data-turbo", "true");
	        form.setAttribute("action", action);
	        form.setAttribute("hidden", "");
	        const method = link.getAttribute("data-turbo-method");
	        if (method)
	            form.setAttribute("method", method);
	        const turboFrame = link.getAttribute("data-turbo-frame");
	        if (turboFrame)
	            form.setAttribute("data-turbo-frame", turboFrame);
	        const turboAction = link.getAttribute("data-turbo-action");
	        if (turboAction)
	            form.setAttribute("data-turbo-action", turboAction);
	        const turboConfirm = link.getAttribute("data-turbo-confirm");
	        if (turboConfirm)
	            form.setAttribute("data-turbo-confirm", turboConfirm);
	        const turboStream = link.hasAttribute("data-turbo-stream");
	        if (turboStream)
	            form.setAttribute("data-turbo-stream", "");
	        this.delegate.submittedFormLinkToLocation(link, location, form);
	        document.body.appendChild(form);
	        form.addEventListener("turbo:submit-end", () => form.remove(), { once: true });
	        requestAnimationFrame(() => form.requestSubmit());
	    }
	}

	class Bardo {
	    constructor(delegate, permanentElementMap) {
	        this.delegate = delegate;
	        this.permanentElementMap = permanentElementMap;
	    }
	    static preservingPermanentElements(delegate, permanentElementMap, callback) {
	        const bardo = new this(delegate, permanentElementMap);
	        bardo.enter();
	        callback();
	        bardo.leave();
	    }
	    enter() {
	        for (const id in this.permanentElementMap) {
	            const [currentPermanentElement, newPermanentElement] = this.permanentElementMap[id];
	            this.delegate.enteringBardo(currentPermanentElement, newPermanentElement);
	            this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
	        }
	    }
	    leave() {
	        for (const id in this.permanentElementMap) {
	            const [currentPermanentElement] = this.permanentElementMap[id];
	            this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
	            this.replacePlaceholderWithPermanentElement(currentPermanentElement);
	            this.delegate.leavingBardo(currentPermanentElement);
	        }
	    }
	    replaceNewPermanentElementWithPlaceholder(permanentElement) {
	        const placeholder = createPlaceholderForPermanentElement(permanentElement);
	        permanentElement.replaceWith(placeholder);
	    }
	    replaceCurrentPermanentElementWithClone(permanentElement) {
	        const clone = permanentElement.cloneNode(true);
	        permanentElement.replaceWith(clone);
	    }
	    replacePlaceholderWithPermanentElement(permanentElement) {
	        const placeholder = this.getPlaceholderById(permanentElement.id);
	        placeholder === null || placeholder === void 0 ? void 0 : placeholder.replaceWith(permanentElement);
	    }
	    getPlaceholderById(id) {
	        return this.placeholders.find((element) => element.content == id);
	    }
	    get placeholders() {
	        return [...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")];
	    }
	}
	function createPlaceholderForPermanentElement(permanentElement) {
	    const element = document.createElement("meta");
	    element.setAttribute("name", "turbo-permanent-placeholder");
	    element.setAttribute("content", permanentElement.id);
	    return element;
	}

	class Renderer {
	    constructor(currentSnapshot, newSnapshot, renderElement, isPreview, willRender = true) {
	        this.activeElement = null;
	        this.currentSnapshot = currentSnapshot;
	        this.newSnapshot = newSnapshot;
	        this.isPreview = isPreview;
	        this.willRender = willRender;
	        this.renderElement = renderElement;
	        this.promise = new Promise((resolve, reject) => (this.resolvingFunctions = { resolve, reject }));
	    }
	    get shouldRender() {
	        return true;
	    }
	    get reloadReason() {
	        return;
	    }
	    prepareToRender() {
	        return;
	    }
	    finishRendering() {
	        if (this.resolvingFunctions) {
	            this.resolvingFunctions.resolve();
	            delete this.resolvingFunctions;
	        }
	    }
	    preservingPermanentElements(callback) {
	        Bardo.preservingPermanentElements(this, this.permanentElementMap, callback);
	    }
	    focusFirstAutofocusableElement() {
	        const element = this.connectedSnapshot.firstAutofocusableElement;
	        if (elementIsFocusable(element)) {
	            element.focus();
	        }
	    }
	    enteringBardo(currentPermanentElement) {
	        if (this.activeElement)
	            return;
	        if (currentPermanentElement.contains(this.currentSnapshot.activeElement)) {
	            this.activeElement = this.currentSnapshot.activeElement;
	        }
	    }
	    leavingBardo(currentPermanentElement) {
	        if (currentPermanentElement.contains(this.activeElement) && this.activeElement instanceof HTMLElement) {
	            this.activeElement.focus();
	            this.activeElement = null;
	        }
	    }
	    get connectedSnapshot() {
	        return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
	    }
	    get currentElement() {
	        return this.currentSnapshot.element;
	    }
	    get newElement() {
	        return this.newSnapshot.element;
	    }
	    get permanentElementMap() {
	        return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
	    }
	}
	function elementIsFocusable(element) {
	    return element && typeof element.focus == "function";
	}

	class FrameRenderer extends Renderer {
	    constructor(delegate, currentSnapshot, newSnapshot, renderElement, isPreview, willRender = true) {
	        super(currentSnapshot, newSnapshot, renderElement, isPreview, willRender);
	        this.delegate = delegate;
	    }
	    static renderElement(currentElement, newElement) {
	        var _a;
	        const destinationRange = document.createRange();
	        destinationRange.selectNodeContents(currentElement);
	        destinationRange.deleteContents();
	        const frameElement = newElement;
	        const sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();
	        if (sourceRange) {
	            sourceRange.selectNodeContents(frameElement);
	            currentElement.appendChild(sourceRange.extractContents());
	        }
	    }
	    get shouldRender() {
	        return true;
	    }
	    async render() {
	        await nextAnimationFrame();
	        this.preservingPermanentElements(() => {
	            this.loadFrameElement();
	        });
	        this.scrollFrameIntoView();
	        await nextAnimationFrame();
	        this.focusFirstAutofocusableElement();
	        await nextAnimationFrame();
	        this.activateScriptElements();
	    }
	    loadFrameElement() {
	        this.delegate.willRenderFrame(this.currentElement, this.newElement);
	        this.renderElement(this.currentElement, this.newElement);
	    }
	    scrollFrameIntoView() {
	        if (this.currentElement.autoscroll || this.newElement.autoscroll) {
	            const element = this.currentElement.firstElementChild;
	            const block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");
	            const behavior = readScrollBehavior(this.currentElement.getAttribute("data-autoscroll-behavior"), "auto");
	            if (element) {
	                element.scrollIntoView({ block, behavior });
	                return true;
	            }
	        }
	        return false;
	    }
	    activateScriptElements() {
	        for (const inertScriptElement of this.newScriptElements) {
	            const activatedScriptElement = activateScriptElement(inertScriptElement);
	            inertScriptElement.replaceWith(activatedScriptElement);
	        }
	    }
	    get newScriptElements() {
	        return this.currentElement.querySelectorAll("script");
	    }
	}
	function readScrollLogicalPosition(value, defaultValue) {
	    if (value == "end" || value == "start" || value == "center" || value == "nearest") {
	        return value;
	    }
	    else {
	        return defaultValue;
	    }
	}
	function readScrollBehavior(value, defaultValue) {
	    if (value == "auto" || value == "smooth") {
	        return value;
	    }
	    else {
	        return defaultValue;
	    }
	}

	class ProgressBar {
	    constructor() {
	        this.hiding = false;
	        this.value = 0;
	        this.visible = false;
	        this.trickle = () => {
	            this.setValue(this.value + Math.random() / 100);
	        };
	        this.stylesheetElement = this.createStylesheetElement();
	        this.progressElement = this.createProgressElement();
	        this.installStylesheetElement();
	        this.setValue(0);
	    }
	    static get defaultCSS() {
	        return unindent `
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 2147483647;
        transition:
          width ${ProgressBar.animationDuration}ms ease-out,
          opacity ${ProgressBar.animationDuration / 2}ms ${ProgressBar.animationDuration / 2}ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `;
	    }
	    show() {
	        if (!this.visible) {
	            this.visible = true;
	            this.installProgressElement();
	            this.startTrickling();
	        }
	    }
	    hide() {
	        if (this.visible && !this.hiding) {
	            this.hiding = true;
	            this.fadeProgressElement(() => {
	                this.uninstallProgressElement();
	                this.stopTrickling();
	                this.visible = false;
	                this.hiding = false;
	            });
	        }
	    }
	    setValue(value) {
	        this.value = value;
	        this.refresh();
	    }
	    installStylesheetElement() {
	        document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
	    }
	    installProgressElement() {
	        this.progressElement.style.width = "0";
	        this.progressElement.style.opacity = "1";
	        document.documentElement.insertBefore(this.progressElement, document.body);
	        this.refresh();
	    }
	    fadeProgressElement(callback) {
	        this.progressElement.style.opacity = "0";
	        setTimeout(callback, ProgressBar.animationDuration * 1.5);
	    }
	    uninstallProgressElement() {
	        if (this.progressElement.parentNode) {
	            document.documentElement.removeChild(this.progressElement);
	        }
	    }
	    startTrickling() {
	        if (!this.trickleInterval) {
	            this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration);
	        }
	    }
	    stopTrickling() {
	        window.clearInterval(this.trickleInterval);
	        delete this.trickleInterval;
	    }
	    refresh() {
	        requestAnimationFrame(() => {
	            this.progressElement.style.width = `${10 + this.value * 90}%`;
	        });
	    }
	    createStylesheetElement() {
	        const element = document.createElement("style");
	        element.type = "text/css";
	        element.textContent = ProgressBar.defaultCSS;
	        if (this.cspNonce) {
	            element.nonce = this.cspNonce;
	        }
	        return element;
	    }
	    createProgressElement() {
	        const element = document.createElement("div");
	        element.className = "turbo-progress-bar";
	        return element;
	    }
	    get cspNonce() {
	        return getMetaContent("csp-nonce");
	    }
	}
	ProgressBar.animationDuration = 300;

	class HeadSnapshot extends Snapshot {
	    constructor() {
	        super(...arguments);
	        this.detailsByOuterHTML = this.children
	            .filter((element) => !elementIsNoscript(element))
	            .map((element) => elementWithoutNonce(element))
	            .reduce((result, element) => {
	            const { outerHTML } = element;
	            const details = outerHTML in result
	                ? result[outerHTML]
	                : {
	                    type: elementType(element),
	                    tracked: elementIsTracked(element),
	                    elements: [],
	                };
	            return Object.assign(Object.assign({}, result), { [outerHTML]: Object.assign(Object.assign({}, details), { elements: [...details.elements, element] }) });
	        }, {});
	    }
	    get trackedElementSignature() {
	        return Object.keys(this.detailsByOuterHTML)
	            .filter((outerHTML) => this.detailsByOuterHTML[outerHTML].tracked)
	            .join("");
	    }
	    getScriptElementsNotInSnapshot(snapshot) {
	        return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
	    }
	    getStylesheetElementsNotInSnapshot(snapshot) {
	        return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
	    }
	    getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
	        return Object.keys(this.detailsByOuterHTML)
	            .filter((outerHTML) => !(outerHTML in snapshot.detailsByOuterHTML))
	            .map((outerHTML) => this.detailsByOuterHTML[outerHTML])
	            .filter(({ type }) => type == matchedType)
	            .map(({ elements: [element] }) => element);
	    }
	    get provisionalElements() {
	        return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML) => {
	            const { type, tracked, elements } = this.detailsByOuterHTML[outerHTML];
	            if (type == null && !tracked) {
	                return [...result, ...elements];
	            }
	            else if (elements.length > 1) {
	                return [...result, ...elements.slice(1)];
	            }
	            else {
	                return result;
	            }
	        }, []);
	    }
	    getMetaValue(name) {
	        const element = this.findMetaElementByName(name);
	        return element ? element.getAttribute("content") : null;
	    }
	    findMetaElementByName(name) {
	        return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML) => {
	            const { elements: [element], } = this.detailsByOuterHTML[outerHTML];
	            return elementIsMetaElementWithName(element, name) ? element : result;
	        }, undefined);
	    }
	}
	function elementType(element) {
	    if (elementIsScript(element)) {
	        return "script";
	    }
	    else if (elementIsStylesheet(element)) {
	        return "stylesheet";
	    }
	}
	function elementIsTracked(element) {
	    return element.getAttribute("data-turbo-track") == "reload";
	}
	function elementIsScript(element) {
	    const tagName = element.localName;
	    return tagName == "script";
	}
	function elementIsNoscript(element) {
	    const tagName = element.localName;
	    return tagName == "noscript";
	}
	function elementIsStylesheet(element) {
	    const tagName = element.localName;
	    return tagName == "style" || (tagName == "link" && element.getAttribute("rel") == "stylesheet");
	}
	function elementIsMetaElementWithName(element, name) {
	    const tagName = element.localName;
	    return tagName == "meta" && element.getAttribute("name") == name;
	}
	function elementWithoutNonce(element) {
	    if (element.hasAttribute("nonce")) {
	        element.setAttribute("nonce", "");
	    }
	    return element;
	}

	class PageSnapshot extends Snapshot {
	    constructor(element, headSnapshot) {
	        super(element);
	        this.headSnapshot = headSnapshot;
	    }
	    static fromHTMLString(html = "") {
	        return this.fromDocument(parseHTMLDocument(html));
	    }
	    static fromElement(element) {
	        return this.fromDocument(element.ownerDocument);
	    }
	    static fromDocument({ head, body }) {
	        return new this(body, new HeadSnapshot(head));
	    }
	    clone() {
	        const clonedElement = this.element.cloneNode(true);
	        const selectElements = this.element.querySelectorAll("select");
	        const clonedSelectElements = clonedElement.querySelectorAll("select");
	        for (const [index, source] of selectElements.entries()) {
	            const clone = clonedSelectElements[index];
	            for (const option of clone.selectedOptions)
	                option.selected = false;
	            for (const option of source.selectedOptions)
	                clone.options[option.index].selected = true;
	        }
	        for (const clonedPasswordInput of clonedElement.querySelectorAll('input[type="password"]')) {
	            clonedPasswordInput.value = "";
	        }
	        return new PageSnapshot(clonedElement, this.headSnapshot);
	    }
	    get headElement() {
	        return this.headSnapshot.element;
	    }
	    get rootLocation() {
	        var _a;
	        const root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
	        return expandURL(root);
	    }
	    get cacheControlValue() {
	        return this.getSetting("cache-control");
	    }
	    get isPreviewable() {
	        return this.cacheControlValue != "no-preview";
	    }
	    get isCacheable() {
	        return this.cacheControlValue != "no-cache";
	    }
	    get isVisitable() {
	        return this.getSetting("visit-control") != "reload";
	    }
	    getSetting(name) {
	        return this.headSnapshot.getMetaValue(`turbo-${name}`);
	    }
	}

	var TimingMetric;
	(function (TimingMetric) {
	    TimingMetric["visitStart"] = "visitStart";
	    TimingMetric["requestStart"] = "requestStart";
	    TimingMetric["requestEnd"] = "requestEnd";
	    TimingMetric["visitEnd"] = "visitEnd";
	})(TimingMetric || (TimingMetric = {}));
	var VisitState;
	(function (VisitState) {
	    VisitState["initialized"] = "initialized";
	    VisitState["started"] = "started";
	    VisitState["canceled"] = "canceled";
	    VisitState["failed"] = "failed";
	    VisitState["completed"] = "completed";
	})(VisitState || (VisitState = {}));
	const defaultOptions = {
	    action: "advance",
	    historyChanged: false,
	    visitCachedSnapshot: () => { },
	    willRender: true,
	    updateHistory: true,
	    shouldCacheSnapshot: true,
	    acceptsStreamResponse: false,
	};
	var SystemStatusCode;
	(function (SystemStatusCode) {
	    SystemStatusCode[SystemStatusCode["networkFailure"] = 0] = "networkFailure";
	    SystemStatusCode[SystemStatusCode["timeoutFailure"] = -1] = "timeoutFailure";
	    SystemStatusCode[SystemStatusCode["contentTypeMismatch"] = -2] = "contentTypeMismatch";
	})(SystemStatusCode || (SystemStatusCode = {}));
	class Visit {
	    constructor(delegate, location, restorationIdentifier, options = {}) {
	        this.identifier = uuid();
	        this.timingMetrics = {};
	        this.followedRedirect = false;
	        this.historyChanged = false;
	        this.scrolled = false;
	        this.shouldCacheSnapshot = true;
	        this.acceptsStreamResponse = false;
	        this.snapshotCached = false;
	        this.state = VisitState.initialized;
	        this.delegate = delegate;
	        this.location = location;
	        this.restorationIdentifier = restorationIdentifier || uuid();
	        const { action, historyChanged, referrer, snapshot, snapshotHTML, response, visitCachedSnapshot, willRender, updateHistory, shouldCacheSnapshot, acceptsStreamResponse, } = Object.assign(Object.assign({}, defaultOptions), options);
	        this.action = action;
	        this.historyChanged = historyChanged;
	        this.referrer = referrer;
	        this.snapshot = snapshot;
	        this.snapshotHTML = snapshotHTML;
	        this.response = response;
	        this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
	        this.visitCachedSnapshot = visitCachedSnapshot;
	        this.willRender = willRender;
	        this.updateHistory = updateHistory;
	        this.scrolled = !willRender;
	        this.shouldCacheSnapshot = shouldCacheSnapshot;
	        this.acceptsStreamResponse = acceptsStreamResponse;
	    }
	    get adapter() {
	        return this.delegate.adapter;
	    }
	    get view() {
	        return this.delegate.view;
	    }
	    get history() {
	        return this.delegate.history;
	    }
	    get restorationData() {
	        return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
	    }
	    get silent() {
	        return this.isSamePage;
	    }
	    start() {
	        if (this.state == VisitState.initialized) {
	            this.recordTimingMetric(TimingMetric.visitStart);
	            this.state = VisitState.started;
	            this.adapter.visitStarted(this);
	            this.delegate.visitStarted(this);
	        }
	    }
	    cancel() {
	        if (this.state == VisitState.started) {
	            if (this.request) {
	                this.request.cancel();
	            }
	            this.cancelRender();
	            this.state = VisitState.canceled;
	        }
	    }
	    complete() {
	        if (this.state == VisitState.started) {
	            this.recordTimingMetric(TimingMetric.visitEnd);
	            this.state = VisitState.completed;
	            this.followRedirect();
	            if (!this.followedRedirect) {
	                this.adapter.visitCompleted(this);
	                this.delegate.visitCompleted(this);
	            }
	        }
	    }
	    fail() {
	        if (this.state == VisitState.started) {
	            this.state = VisitState.failed;
	            this.adapter.visitFailed(this);
	        }
	    }
	    changeHistory() {
	        var _a;
	        if (!this.historyChanged && this.updateHistory) {
	            const actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
	            const method = getHistoryMethodForAction(actionForHistory);
	            this.history.update(method, this.location, this.restorationIdentifier);
	            this.historyChanged = true;
	        }
	    }
	    issueRequest() {
	        if (this.hasPreloadedResponse()) {
	            this.simulateRequest();
	        }
	        else if (this.shouldIssueRequest() && !this.request) {
	            this.request = new FetchRequest(this, FetchMethod.get, this.location);
	            this.request.perform();
	        }
	    }
	    simulateRequest() {
	        if (this.response) {
	            this.startRequest();
	            this.recordResponse();
	            this.finishRequest();
	        }
	    }
	    startRequest() {
	        this.recordTimingMetric(TimingMetric.requestStart);
	        this.adapter.visitRequestStarted(this);
	    }
	    recordResponse(response = this.response) {
	        this.response = response;
	        if (response) {
	            const { statusCode } = response;
	            if (isSuccessful(statusCode)) {
	                this.adapter.visitRequestCompleted(this);
	            }
	            else {
	                this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
	            }
	        }
	    }
	    finishRequest() {
	        this.recordTimingMetric(TimingMetric.requestEnd);
	        this.adapter.visitRequestFinished(this);
	    }
	    loadResponse() {
	        if (this.response) {
	            const { statusCode, responseHTML } = this.response;
	            this.render(async () => {
	                if (this.shouldCacheSnapshot)
	                    this.cacheSnapshot();
	                if (this.view.renderPromise)
	                    await this.view.renderPromise;
	                if (isSuccessful(statusCode) && responseHTML != null) {
	                    await this.view.renderPage(PageSnapshot.fromHTMLString(responseHTML), false, this.willRender, this);
	                    this.performScroll();
	                    this.adapter.visitRendered(this);
	                    this.complete();
	                }
	                else {
	                    await this.view.renderError(PageSnapshot.fromHTMLString(responseHTML), this);
	                    this.adapter.visitRendered(this);
	                    this.fail();
	                }
	            });
	        }
	    }
	    getCachedSnapshot() {
	        const snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
	        if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
	            if (this.action == "restore" || snapshot.isPreviewable) {
	                return snapshot;
	            }
	        }
	    }
	    getPreloadedSnapshot() {
	        if (this.snapshotHTML) {
	            return PageSnapshot.fromHTMLString(this.snapshotHTML);
	        }
	    }
	    hasCachedSnapshot() {
	        return this.getCachedSnapshot() != null;
	    }
	    loadCachedSnapshot() {
	        const snapshot = this.getCachedSnapshot();
	        if (snapshot) {
	            const isPreview = this.shouldIssueRequest();
	            this.render(async () => {
	                this.cacheSnapshot();
	                if (this.isSamePage) {
	                    this.adapter.visitRendered(this);
	                }
	                else {
	                    if (this.view.renderPromise)
	                        await this.view.renderPromise;
	                    await this.view.renderPage(snapshot, isPreview, this.willRender, this);
	                    this.performScroll();
	                    this.adapter.visitRendered(this);
	                    if (!isPreview) {
	                        this.complete();
	                    }
	                }
	            });
	        }
	    }
	    followRedirect() {
	        var _a;
	        if (this.redirectedToLocation && !this.followedRedirect && ((_a = this.response) === null || _a === void 0 ? void 0 : _a.redirected)) {
	            this.adapter.visitProposedToLocation(this.redirectedToLocation, {
	                action: "replace",
	                response: this.response,
	            });
	            this.followedRedirect = true;
	        }
	    }
	    goToSamePageAnchor() {
	        if (this.isSamePage) {
	            this.render(async () => {
	                this.cacheSnapshot();
	                this.performScroll();
	                this.changeHistory();
	                this.adapter.visitRendered(this);
	            });
	        }
	    }
	    prepareHeadersForRequest(headers, request) {
	        if (this.acceptsStreamResponse) {
	            request.acceptResponseType(StreamMessage.contentType);
	        }
	    }
	    requestStarted() {
	        this.startRequest();
	    }
	    requestPreventedHandlingResponse(_request, _response) { }
	    async requestSucceededWithResponse(request, response) {
	        const responseHTML = await response.responseHTML;
	        const { redirected, statusCode } = response;
	        if (responseHTML == undefined) {
	            this.recordResponse({
	                statusCode: SystemStatusCode.contentTypeMismatch,
	                redirected,
	            });
	        }
	        else {
	            this.redirectedToLocation = response.redirected ? response.location : undefined;
	            this.recordResponse({ statusCode: statusCode, responseHTML, redirected });
	        }
	    }
	    async requestFailedWithResponse(request, response) {
	        const responseHTML = await response.responseHTML;
	        const { redirected, statusCode } = response;
	        if (responseHTML == undefined) {
	            this.recordResponse({
	                statusCode: SystemStatusCode.contentTypeMismatch,
	                redirected,
	            });
	        }
	        else {
	            this.recordResponse({ statusCode: statusCode, responseHTML, redirected });
	        }
	    }
	    requestErrored(_request, _error) {
	        this.recordResponse({
	            statusCode: SystemStatusCode.networkFailure,
	            redirected: false,
	        });
	    }
	    requestFinished() {
	        this.finishRequest();
	    }
	    performScroll() {
	        if (!this.scrolled && !this.view.forceReloaded) {
	            if (this.action == "restore") {
	                this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
	            }
	            else {
	                this.scrollToAnchor() || this.view.scrollToTop();
	            }
	            if (this.isSamePage) {
	                this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
	            }
	            this.scrolled = true;
	        }
	    }
	    scrollToRestoredPosition() {
	        const { scrollPosition } = this.restorationData;
	        if (scrollPosition) {
	            this.view.scrollToPosition(scrollPosition);
	            return true;
	        }
	    }
	    scrollToAnchor() {
	        const anchor = getAnchor(this.location);
	        if (anchor != null) {
	            this.view.scrollToAnchor(anchor);
	            return true;
	        }
	    }
	    recordTimingMetric(metric) {
	        this.timingMetrics[metric] = new Date().getTime();
	    }
	    getTimingMetrics() {
	        return Object.assign({}, this.timingMetrics);
	    }
	    getHistoryMethodForAction(action) {
	        switch (action) {
	            case "replace":
	                return history.replaceState;
	            case "advance":
	            case "restore":
	                return history.pushState;
	        }
	    }
	    hasPreloadedResponse() {
	        return typeof this.response == "object";
	    }
	    shouldIssueRequest() {
	        if (this.isSamePage) {
	            return false;
	        }
	        else if (this.action == "restore") {
	            return !this.hasCachedSnapshot();
	        }
	        else {
	            return this.willRender;
	        }
	    }
	    cacheSnapshot() {
	        if (!this.snapshotCached) {
	            this.view.cacheSnapshot(this.snapshot).then((snapshot) => snapshot && this.visitCachedSnapshot(snapshot));
	            this.snapshotCached = true;
	        }
	    }
	    async render(callback) {
	        this.cancelRender();
	        await new Promise((resolve) => {
	            this.frame = requestAnimationFrame(() => resolve());
	        });
	        await callback();
	        delete this.frame;
	    }
	    cancelRender() {
	        if (this.frame) {
	            cancelAnimationFrame(this.frame);
	            delete this.frame;
	        }
	    }
	}
	function isSuccessful(statusCode) {
	    return statusCode >= 200 && statusCode < 300;
	}

	class BrowserAdapter {
	    constructor(session) {
	        this.progressBar = new ProgressBar();
	        this.showProgressBar = () => {
	            this.progressBar.show();
	        };
	        this.session = session;
	    }
	    visitProposedToLocation(location, options) {
	        this.navigator.startVisit(location, (options === null || options === void 0 ? void 0 : options.restorationIdentifier) || uuid(), options);
	    }
	    visitStarted(visit) {
	        this.location = visit.location;
	        visit.loadCachedSnapshot();
	        visit.issueRequest();
	        visit.goToSamePageAnchor();
	    }
	    visitRequestStarted(visit) {
	        this.progressBar.setValue(0);
	        if (visit.hasCachedSnapshot() || visit.action != "restore") {
	            this.showVisitProgressBarAfterDelay();
	        }
	        else {
	            this.showProgressBar();
	        }
	    }
	    visitRequestCompleted(visit) {
	        visit.loadResponse();
	    }
	    visitRequestFailedWithStatusCode(visit, statusCode) {
	        switch (statusCode) {
	            case SystemStatusCode.networkFailure:
	            case SystemStatusCode.timeoutFailure:
	            case SystemStatusCode.contentTypeMismatch:
	                return this.reload({
	                    reason: "request_failed",
	                    context: {
	                        statusCode,
	                    },
	                });
	            default:
	                return visit.loadResponse();
	        }
	    }
	    visitRequestFinished(_visit) {
	        this.progressBar.setValue(1);
	        this.hideVisitProgressBar();
	    }
	    visitCompleted(_visit) { }
	    pageInvalidated(reason) {
	        this.reload(reason);
	    }
	    visitFailed(_visit) { }
	    visitRendered(_visit) { }
	    formSubmissionStarted(_formSubmission) {
	        this.progressBar.setValue(0);
	        this.showFormProgressBarAfterDelay();
	    }
	    formSubmissionFinished(_formSubmission) {
	        this.progressBar.setValue(1);
	        this.hideFormProgressBar();
	    }
	    showVisitProgressBarAfterDelay() {
	        this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
	    }
	    hideVisitProgressBar() {
	        this.progressBar.hide();
	        if (this.visitProgressBarTimeout != null) {
	            window.clearTimeout(this.visitProgressBarTimeout);
	            delete this.visitProgressBarTimeout;
	        }
	    }
	    showFormProgressBarAfterDelay() {
	        if (this.formProgressBarTimeout == null) {
	            this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
	        }
	    }
	    hideFormProgressBar() {
	        this.progressBar.hide();
	        if (this.formProgressBarTimeout != null) {
	            window.clearTimeout(this.formProgressBarTimeout);
	            delete this.formProgressBarTimeout;
	        }
	    }
	    reload(reason) {
	        var _a;
	        dispatch("turbo:reload", { detail: reason });
	        window.location.href = ((_a = this.location) === null || _a === void 0 ? void 0 : _a.toString()) || window.location.href;
	    }
	    get navigator() {
	        return this.session.navigator;
	    }
	}

	class CacheObserver {
	    constructor() {
	        this.started = false;
	        this.removeStaleElements = ((_event) => {
	            const staleElements = [...document.querySelectorAll('[data-turbo-cache="false"]')];
	            for (const element of staleElements) {
	                element.remove();
	            }
	        });
	    }
	    start() {
	        if (!this.started) {
	            this.started = true;
	            addEventListener("turbo:before-cache", this.removeStaleElements, false);
	        }
	    }
	    stop() {
	        if (this.started) {
	            this.started = false;
	            removeEventListener("turbo:before-cache", this.removeStaleElements, false);
	        }
	    }
	}

	class FrameRedirector {
	    constructor(session, element) {
	        this.session = session;
	        this.element = element;
	        this.linkInterceptor = new LinkInterceptor(this, element);
	        this.formSubmitObserver = new FormSubmitObserver(this, element);
	    }
	    start() {
	        this.linkInterceptor.start();
	        this.formSubmitObserver.start();
	    }
	    stop() {
	        this.linkInterceptor.stop();
	        this.formSubmitObserver.stop();
	    }
	    shouldInterceptLinkClick(element, _location, _event) {
	        return this.shouldRedirect(element);
	    }
	    linkClickIntercepted(element, url, event) {
	        const frame = this.findFrameElement(element);
	        if (frame) {
	            frame.delegate.linkClickIntercepted(element, url, event);
	        }
	    }
	    willSubmitForm(element, submitter) {
	        return (element.closest("turbo-frame") == null &&
	            this.shouldSubmit(element, submitter) &&
	            this.shouldRedirect(element, submitter));
	    }
	    formSubmitted(element, submitter) {
	        const frame = this.findFrameElement(element, submitter);
	        if (frame) {
	            frame.delegate.formSubmitted(element, submitter);
	        }
	    }
	    shouldSubmit(form, submitter) {
	        var _a;
	        const action = getAction(form, submitter);
	        const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
	        const rootLocation = expandURL((_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/");
	        return this.shouldRedirect(form, submitter) && locationIsVisitable(action, rootLocation);
	    }
	    shouldRedirect(element, submitter) {
	        const isNavigatable = element instanceof HTMLFormElement
	            ? this.session.submissionIsNavigatable(element, submitter)
	            : this.session.elementIsNavigatable(element);
	        if (isNavigatable) {
	            const frame = this.findFrameElement(element, submitter);
	            return frame ? frame != element.closest("turbo-frame") : false;
	        }
	        else {
	            return false;
	        }
	    }
	    findFrameElement(element, submitter) {
	        const id = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-frame")) || element.getAttribute("data-turbo-frame");
	        if (id && id != "_top") {
	            const frame = this.element.querySelector(`#${id}:not([disabled])`);
	            if (frame instanceof FrameElement) {
	                return frame;
	            }
	        }
	    }
	}

	class History {
	    constructor(delegate) {
	        this.restorationIdentifier = uuid();
	        this.restorationData = {};
	        this.started = false;
	        this.pageLoaded = false;
	        this.onPopState = (event) => {
	            if (this.shouldHandlePopState()) {
	                const { turbo } = event.state || {};
	                if (turbo) {
	                    this.location = new URL(window.location.href);
	                    const { restorationIdentifier } = turbo;
	                    this.restorationIdentifier = restorationIdentifier;
	                    this.delegate.historyPoppedToLocationWithRestorationIdentifier(this.location, restorationIdentifier);
	                }
	            }
	        };
	        this.onPageLoad = async (_event) => {
	            await nextMicrotask();
	            this.pageLoaded = true;
	        };
	        this.delegate = delegate;
	    }
	    start() {
	        if (!this.started) {
	            addEventListener("popstate", this.onPopState, false);
	            addEventListener("load", this.onPageLoad, false);
	            this.started = true;
	            this.replace(new URL(window.location.href));
	        }
	    }
	    stop() {
	        if (this.started) {
	            removeEventListener("popstate", this.onPopState, false);
	            removeEventListener("load", this.onPageLoad, false);
	            this.started = false;
	        }
	    }
	    push(location, restorationIdentifier) {
	        this.update(history.pushState, location, restorationIdentifier);
	    }
	    replace(location, restorationIdentifier) {
	        this.update(history.replaceState, location, restorationIdentifier);
	    }
	    update(method, location, restorationIdentifier = uuid()) {
	        const state = { turbo: { restorationIdentifier } };
	        method.call(history, state, "", location.href);
	        this.location = location;
	        this.restorationIdentifier = restorationIdentifier;
	    }
	    getRestorationDataForIdentifier(restorationIdentifier) {
	        return this.restorationData[restorationIdentifier] || {};
	    }
	    updateRestorationData(additionalData) {
	        const { restorationIdentifier } = this;
	        const restorationData = this.restorationData[restorationIdentifier];
	        this.restorationData[restorationIdentifier] = Object.assign(Object.assign({}, restorationData), additionalData);
	    }
	    assumeControlOfScrollRestoration() {
	        var _a;
	        if (!this.previousScrollRestoration) {
	            this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
	            history.scrollRestoration = "manual";
	        }
	    }
	    relinquishControlOfScrollRestoration() {
	        if (this.previousScrollRestoration) {
	            history.scrollRestoration = this.previousScrollRestoration;
	            delete this.previousScrollRestoration;
	        }
	    }
	    shouldHandlePopState() {
	        return this.pageIsLoaded();
	    }
	    pageIsLoaded() {
	        return this.pageLoaded || document.readyState == "complete";
	    }
	}

	class Navigator {
	    constructor(delegate) {
	        this.delegate = delegate;
	    }
	    proposeVisit(location, options = {}) {
	        if (this.delegate.allowsVisitingLocationWithAction(location, options.action)) {
	            if (locationIsVisitable(location, this.view.snapshot.rootLocation)) {
	                this.delegate.visitProposedToLocation(location, options);
	            }
	            else {
	                window.location.href = location.toString();
	            }
	        }
	    }
	    startVisit(locatable, restorationIdentifier, options = {}) {
	        this.stop();
	        this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, Object.assign({ referrer: this.location }, options));
	        this.currentVisit.start();
	    }
	    submitForm(form, submitter) {
	        this.stop();
	        this.formSubmission = new FormSubmission(this, form, submitter, true);
	        this.formSubmission.start();
	    }
	    stop() {
	        if (this.formSubmission) {
	            this.formSubmission.stop();
	            delete this.formSubmission;
	        }
	        if (this.currentVisit) {
	            this.currentVisit.cancel();
	            delete this.currentVisit;
	        }
	    }
	    get adapter() {
	        return this.delegate.adapter;
	    }
	    get view() {
	        return this.delegate.view;
	    }
	    get history() {
	        return this.delegate.history;
	    }
	    formSubmissionStarted(formSubmission) {
	        if (typeof this.adapter.formSubmissionStarted === "function") {
	            this.adapter.formSubmissionStarted(formSubmission);
	        }
	    }
	    async formSubmissionSucceededWithResponse(formSubmission, fetchResponse) {
	        if (formSubmission == this.formSubmission) {
	            const responseHTML = await fetchResponse.responseHTML;
	            if (responseHTML) {
	                const shouldCacheSnapshot = formSubmission.method == FetchMethod.get;
	                if (!shouldCacheSnapshot) {
	                    this.view.clearSnapshotCache();
	                }
	                const { statusCode, redirected } = fetchResponse;
	                const action = this.getActionForFormSubmission(formSubmission);
	                const visitOptions = {
	                    action,
	                    shouldCacheSnapshot,
	                    response: { statusCode, responseHTML, redirected },
	                };
	                this.proposeVisit(fetchResponse.location, visitOptions);
	            }
	        }
	    }
	    async formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
	        const responseHTML = await fetchResponse.responseHTML;
	        if (responseHTML) {
	            const snapshot = PageSnapshot.fromHTMLString(responseHTML);
	            if (fetchResponse.serverError) {
	                await this.view.renderError(snapshot, this.currentVisit);
	            }
	            else {
	                await this.view.renderPage(snapshot, false, true, this.currentVisit);
	            }
	            this.view.scrollToTop();
	            this.view.clearSnapshotCache();
	        }
	    }
	    formSubmissionErrored(formSubmission, error) {
	        console.error(error);
	    }
	    formSubmissionFinished(formSubmission) {
	        if (typeof this.adapter.formSubmissionFinished === "function") {
	            this.adapter.formSubmissionFinished(formSubmission);
	        }
	    }
	    visitStarted(visit) {
	        this.delegate.visitStarted(visit);
	    }
	    visitCompleted(visit) {
	        this.delegate.visitCompleted(visit);
	    }
	    locationWithActionIsSamePage(location, action) {
	        const anchor = getAnchor(location);
	        const currentAnchor = getAnchor(this.view.lastRenderedLocation);
	        const isRestorationToTop = action === "restore" && typeof anchor === "undefined";
	        return (action !== "replace" &&
	            getRequestURL(location) === getRequestURL(this.view.lastRenderedLocation) &&
	            (isRestorationToTop || (anchor != null && anchor !== currentAnchor)));
	    }
	    visitScrolledToSamePageLocation(oldURL, newURL) {
	        this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
	    }
	    get location() {
	        return this.history.location;
	    }
	    get restorationIdentifier() {
	        return this.history.restorationIdentifier;
	    }
	    getActionForFormSubmission(formSubmission) {
	        const { formElement, submitter } = formSubmission;
	        const action = getAttribute("data-turbo-action", submitter, formElement);
	        return isAction(action) ? action : "advance";
	    }
	}

	var PageStage;
	(function (PageStage) {
	    PageStage[PageStage["initial"] = 0] = "initial";
	    PageStage[PageStage["loading"] = 1] = "loading";
	    PageStage[PageStage["interactive"] = 2] = "interactive";
	    PageStage[PageStage["complete"] = 3] = "complete";
	})(PageStage || (PageStage = {}));
	class PageObserver {
	    constructor(delegate) {
	        this.stage = PageStage.initial;
	        this.started = false;
	        this.interpretReadyState = () => {
	            const { readyState } = this;
	            if (readyState == "interactive") {
	                this.pageIsInteractive();
	            }
	            else if (readyState == "complete") {
	                this.pageIsComplete();
	            }
	        };
	        this.pageWillUnload = () => {
	            this.delegate.pageWillUnload();
	        };
	        this.delegate = delegate;
	    }
	    start() {
	        if (!this.started) {
	            if (this.stage == PageStage.initial) {
	                this.stage = PageStage.loading;
	            }
	            document.addEventListener("readystatechange", this.interpretReadyState, false);
	            addEventListener("pagehide", this.pageWillUnload, false);
	            this.started = true;
	        }
	    }
	    stop() {
	        if (this.started) {
	            document.removeEventListener("readystatechange", this.interpretReadyState, false);
	            removeEventListener("pagehide", this.pageWillUnload, false);
	            this.started = false;
	        }
	    }
	    pageIsInteractive() {
	        if (this.stage == PageStage.loading) {
	            this.stage = PageStage.interactive;
	            this.delegate.pageBecameInteractive();
	        }
	    }
	    pageIsComplete() {
	        this.pageIsInteractive();
	        if (this.stage == PageStage.interactive) {
	            this.stage = PageStage.complete;
	            this.delegate.pageLoaded();
	        }
	    }
	    get readyState() {
	        return document.readyState;
	    }
	}

	class ScrollObserver {
	    constructor(delegate) {
	        this.started = false;
	        this.onScroll = () => {
	            this.updatePosition({ x: window.pageXOffset, y: window.pageYOffset });
	        };
	        this.delegate = delegate;
	    }
	    start() {
	        if (!this.started) {
	            addEventListener("scroll", this.onScroll, false);
	            this.onScroll();
	            this.started = true;
	        }
	    }
	    stop() {
	        if (this.started) {
	            removeEventListener("scroll", this.onScroll, false);
	            this.started = false;
	        }
	    }
	    updatePosition(position) {
	        this.delegate.scrollPositionChanged(position);
	    }
	}

	class StreamMessageRenderer {
	    render({ fragment }) {
	        Bardo.preservingPermanentElements(this, getPermanentElementMapForFragment(fragment), () => document.documentElement.appendChild(fragment));
	    }
	    enteringBardo(currentPermanentElement, newPermanentElement) {
	        newPermanentElement.replaceWith(currentPermanentElement.cloneNode(true));
	    }
	    leavingBardo() { }
	}
	function getPermanentElementMapForFragment(fragment) {
	    const permanentElementsInDocument = queryPermanentElementsAll(document.documentElement);
	    const permanentElementMap = {};
	    for (const permanentElementInDocument of permanentElementsInDocument) {
	        const { id } = permanentElementInDocument;
	        for (const streamElement of fragment.querySelectorAll("turbo-stream")) {
	            const elementInStream = getPermanentElementById(streamElement.templateElement.content, id);
	            if (elementInStream) {
	                permanentElementMap[id] = [permanentElementInDocument, elementInStream];
	            }
	        }
	    }
	    return permanentElementMap;
	}

	class StreamObserver {
	    constructor(delegate) {
	        this.sources = new Set();
	        this.started = false;
	        this.inspectFetchResponse = ((event) => {
	            const response = fetchResponseFromEvent(event);
	            if (response && fetchResponseIsStream(response)) {
	                event.preventDefault();
	                this.receiveMessageResponse(response);
	            }
	        });
	        this.receiveMessageEvent = (event) => {
	            if (this.started && typeof event.data == "string") {
	                this.receiveMessageHTML(event.data);
	            }
	        };
	        this.delegate = delegate;
	    }
	    start() {
	        if (!this.started) {
	            this.started = true;
	            addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
	        }
	    }
	    stop() {
	        if (this.started) {
	            this.started = false;
	            removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
	        }
	    }
	    connectStreamSource(source) {
	        if (!this.streamSourceIsConnected(source)) {
	            this.sources.add(source);
	            source.addEventListener("message", this.receiveMessageEvent, false);
	        }
	    }
	    disconnectStreamSource(source) {
	        if (this.streamSourceIsConnected(source)) {
	            this.sources.delete(source);
	            source.removeEventListener("message", this.receiveMessageEvent, false);
	        }
	    }
	    streamSourceIsConnected(source) {
	        return this.sources.has(source);
	    }
	    async receiveMessageResponse(response) {
	        const html = await response.responseHTML;
	        if (html) {
	            this.receiveMessageHTML(html);
	        }
	    }
	    receiveMessageHTML(html) {
	        this.delegate.receivedMessageFromStream(StreamMessage.wrap(html));
	    }
	}
	function fetchResponseFromEvent(event) {
	    var _a;
	    const fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;
	    if (fetchResponse instanceof FetchResponse) {
	        return fetchResponse;
	    }
	}
	function fetchResponseIsStream(response) {
	    var _a;
	    const contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
	    return contentType.startsWith(StreamMessage.contentType);
	}

	class ErrorRenderer extends Renderer {
	    static renderElement(currentElement, newElement) {
	        const { documentElement, body } = document;
	        documentElement.replaceChild(newElement, body);
	    }
	    async render() {
	        this.replaceHeadAndBody();
	        this.activateScriptElements();
	    }
	    replaceHeadAndBody() {
	        const { documentElement, head } = document;
	        documentElement.replaceChild(this.newHead, head);
	        this.renderElement(this.currentElement, this.newElement);
	    }
	    activateScriptElements() {
	        for (const replaceableElement of this.scriptElements) {
	            const parentNode = replaceableElement.parentNode;
	            if (parentNode) {
	                const element = activateScriptElement(replaceableElement);
	                parentNode.replaceChild(element, replaceableElement);
	            }
	        }
	    }
	    get newHead() {
	        return this.newSnapshot.headSnapshot.element;
	    }
	    get scriptElements() {
	        return document.documentElement.querySelectorAll("script");
	    }
	}

	class PageRenderer extends Renderer {
	    static renderElement(currentElement, newElement) {
	        if (document.body && newElement instanceof HTMLBodyElement) {
	            document.body.replaceWith(newElement);
	        }
	        else {
	            document.documentElement.appendChild(newElement);
	        }
	    }
	    get shouldRender() {
	        return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
	    }
	    get reloadReason() {
	        if (!this.newSnapshot.isVisitable) {
	            return {
	                reason: "turbo_visit_control_is_reload",
	            };
	        }
	        if (!this.trackedElementsAreIdentical) {
	            return {
	                reason: "tracked_element_mismatch",
	            };
	        }
	    }
	    async prepareToRender() {
	        await this.mergeHead();
	    }
	    async render() {
	        if (this.willRender) {
	            this.replaceBody();
	        }
	    }
	    finishRendering() {
	        super.finishRendering();
	        if (!this.isPreview) {
	            this.focusFirstAutofocusableElement();
	        }
	    }
	    get currentHeadSnapshot() {
	        return this.currentSnapshot.headSnapshot;
	    }
	    get newHeadSnapshot() {
	        return this.newSnapshot.headSnapshot;
	    }
	    get newElement() {
	        return this.newSnapshot.element;
	    }
	    async mergeHead() {
	        const newStylesheetElements = this.copyNewHeadStylesheetElements();
	        this.copyNewHeadScriptElements();
	        this.removeCurrentHeadProvisionalElements();
	        this.copyNewHeadProvisionalElements();
	        await newStylesheetElements;
	    }
	    replaceBody() {
	        this.preservingPermanentElements(() => {
	            this.activateNewBody();
	            this.assignNewBody();
	        });
	    }
	    get trackedElementsAreIdentical() {
	        return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
	    }
	    async copyNewHeadStylesheetElements() {
	        const loadingElements = [];
	        for (const element of this.newHeadStylesheetElements) {
	            loadingElements.push(waitForLoad(element));
	            document.head.appendChild(element);
	        }
	        await Promise.all(loadingElements);
	    }
	    copyNewHeadScriptElements() {
	        for (const element of this.newHeadScriptElements) {
	            document.head.appendChild(activateScriptElement(element));
	        }
	    }
	    removeCurrentHeadProvisionalElements() {
	        for (const element of this.currentHeadProvisionalElements) {
	            document.head.removeChild(element);
	        }
	    }
	    copyNewHeadProvisionalElements() {
	        for (const element of this.newHeadProvisionalElements) {
	            document.head.appendChild(element);
	        }
	    }
	    activateNewBody() {
	        document.adoptNode(this.newElement);
	        this.activateNewBodyScriptElements();
	    }
	    activateNewBodyScriptElements() {
	        for (const inertScriptElement of this.newBodyScriptElements) {
	            const activatedScriptElement = activateScriptElement(inertScriptElement);
	            inertScriptElement.replaceWith(activatedScriptElement);
	        }
	    }
	    assignNewBody() {
	        this.renderElement(this.currentElement, this.newElement);
	    }
	    get newHeadStylesheetElements() {
	        return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
	    }
	    get newHeadScriptElements() {
	        return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
	    }
	    get currentHeadProvisionalElements() {
	        return this.currentHeadSnapshot.provisionalElements;
	    }
	    get newHeadProvisionalElements() {
	        return this.newHeadSnapshot.provisionalElements;
	    }
	    get newBodyScriptElements() {
	        return this.newElement.querySelectorAll("script");
	    }
	}

	class SnapshotCache {
	    constructor(size) {
	        this.keys = [];
	        this.snapshots = {};
	        this.size = size;
	    }
	    has(location) {
	        return toCacheKey(location) in this.snapshots;
	    }
	    get(location) {
	        if (this.has(location)) {
	            const snapshot = this.read(location);
	            this.touch(location);
	            return snapshot;
	        }
	    }
	    put(location, snapshot) {
	        this.write(location, snapshot);
	        this.touch(location);
	        return snapshot;
	    }
	    clear() {
	        this.snapshots = {};
	    }
	    read(location) {
	        return this.snapshots[toCacheKey(location)];
	    }
	    write(location, snapshot) {
	        this.snapshots[toCacheKey(location)] = snapshot;
	    }
	    touch(location) {
	        const key = toCacheKey(location);
	        const index = this.keys.indexOf(key);
	        if (index > -1)
	            this.keys.splice(index, 1);
	        this.keys.unshift(key);
	        this.trim();
	    }
	    trim() {
	        for (const key of this.keys.splice(this.size)) {
	            delete this.snapshots[key];
	        }
	    }
	}

	class PageView extends View {
	    constructor() {
	        super(...arguments);
	        this.snapshotCache = new SnapshotCache(10);
	        this.lastRenderedLocation = new URL(location.href);
	        this.forceReloaded = false;
	    }
	    renderPage(snapshot, isPreview = false, willRender = true, visit) {
	        const renderer = new PageRenderer(this.snapshot, snapshot, PageRenderer.renderElement, isPreview, willRender);
	        if (!renderer.shouldRender) {
	            this.forceReloaded = true;
	        }
	        else {
	            visit === null || visit === void 0 ? void 0 : visit.changeHistory();
	        }
	        return this.render(renderer);
	    }
	    renderError(snapshot, visit) {
	        visit === null || visit === void 0 ? void 0 : visit.changeHistory();
	        const renderer = new ErrorRenderer(this.snapshot, snapshot, ErrorRenderer.renderElement, false);
	        return this.render(renderer);
	    }
	    clearSnapshotCache() {
	        this.snapshotCache.clear();
	    }
	    async cacheSnapshot(snapshot = this.snapshot) {
	        if (snapshot.isCacheable) {
	            this.delegate.viewWillCacheSnapshot();
	            const { lastRenderedLocation: location } = this;
	            await nextEventLoopTick();
	            const cachedSnapshot = snapshot.clone();
	            this.snapshotCache.put(location, cachedSnapshot);
	            return cachedSnapshot;
	        }
	    }
	    getCachedSnapshotForLocation(location) {
	        return this.snapshotCache.get(location);
	    }
	    get snapshot() {
	        return PageSnapshot.fromElement(this.element);
	    }
	}

	class Preloader {
	    constructor(delegate) {
	        this.selector = "a[data-turbo-preload]";
	        this.delegate = delegate;
	    }
	    get snapshotCache() {
	        return this.delegate.navigator.view.snapshotCache;
	    }
	    start() {
	        if (document.readyState === "loading") {
	            return document.addEventListener("DOMContentLoaded", () => {
	                this.preloadOnLoadLinksForView(document.body);
	            });
	        }
	        else {
	            this.preloadOnLoadLinksForView(document.body);
	        }
	    }
	    preloadOnLoadLinksForView(element) {
	        for (const link of element.querySelectorAll(this.selector)) {
	            this.preloadURL(link);
	        }
	    }
	    async preloadURL(link) {
	        const location = new URL(link.href);
	        if (this.snapshotCache.has(location)) {
	            return;
	        }
	        try {
	            const response = await fetch(location.toString(), { headers: { "VND.PREFETCH": "true", Accept: "text/html" } });
	            const responseText = await response.text();
	            const snapshot = PageSnapshot.fromHTMLString(responseText);
	            this.snapshotCache.put(location, snapshot);
	        }
	        catch (_) {
	        }
	    }
	}

	class Session {
	    constructor() {
	        this.navigator = new Navigator(this);
	        this.history = new History(this);
	        this.preloader = new Preloader(this);
	        this.view = new PageView(this, document.documentElement);
	        this.adapter = new BrowserAdapter(this);
	        this.pageObserver = new PageObserver(this);
	        this.cacheObserver = new CacheObserver();
	        this.linkClickObserver = new LinkClickObserver(this, window);
	        this.formSubmitObserver = new FormSubmitObserver(this, document);
	        this.scrollObserver = new ScrollObserver(this);
	        this.streamObserver = new StreamObserver(this);
	        this.formLinkClickObserver = new FormLinkClickObserver(this, document.documentElement);
	        this.frameRedirector = new FrameRedirector(this, document.documentElement);
	        this.streamMessageRenderer = new StreamMessageRenderer();
	        this.drive = true;
	        this.enabled = true;
	        this.progressBarDelay = 500;
	        this.started = false;
	        this.formMode = "on";
	    }
	    start() {
	        if (!this.started) {
	            this.pageObserver.start();
	            this.cacheObserver.start();
	            this.formLinkClickObserver.start();
	            this.linkClickObserver.start();
	            this.formSubmitObserver.start();
	            this.scrollObserver.start();
	            this.streamObserver.start();
	            this.frameRedirector.start();
	            this.history.start();
	            this.preloader.start();
	            this.started = true;
	            this.enabled = true;
	        }
	    }
	    disable() {
	        this.enabled = false;
	    }
	    stop() {
	        if (this.started) {
	            this.pageObserver.stop();
	            this.cacheObserver.stop();
	            this.formLinkClickObserver.stop();
	            this.linkClickObserver.stop();
	            this.formSubmitObserver.stop();
	            this.scrollObserver.stop();
	            this.streamObserver.stop();
	            this.frameRedirector.stop();
	            this.history.stop();
	            this.started = false;
	        }
	    }
	    registerAdapter(adapter) {
	        this.adapter = adapter;
	    }
	    visit(location, options = {}) {
	        const frameElement = options.frame ? document.getElementById(options.frame) : null;
	        if (frameElement instanceof FrameElement) {
	            frameElement.src = location.toString();
	            frameElement.loaded;
	        }
	        else {
	            this.navigator.proposeVisit(expandURL(location), options);
	        }
	    }
	    connectStreamSource(source) {
	        this.streamObserver.connectStreamSource(source);
	    }
	    disconnectStreamSource(source) {
	        this.streamObserver.disconnectStreamSource(source);
	    }
	    renderStreamMessage(message) {
	        this.streamMessageRenderer.render(StreamMessage.wrap(message));
	    }
	    clearCache() {
	        this.view.clearSnapshotCache();
	    }
	    setProgressBarDelay(delay) {
	        this.progressBarDelay = delay;
	    }
	    setFormMode(mode) {
	        this.formMode = mode;
	    }
	    get location() {
	        return this.history.location;
	    }
	    get restorationIdentifier() {
	        return this.history.restorationIdentifier;
	    }
	    historyPoppedToLocationWithRestorationIdentifier(location, restorationIdentifier) {
	        if (this.enabled) {
	            this.navigator.startVisit(location, restorationIdentifier, {
	                action: "restore",
	                historyChanged: true,
	            });
	        }
	        else {
	            this.adapter.pageInvalidated({
	                reason: "turbo_disabled",
	            });
	        }
	    }
	    scrollPositionChanged(position) {
	        this.history.updateRestorationData({ scrollPosition: position });
	    }
	    willSubmitFormLinkToLocation(link, location) {
	        return this.elementIsNavigatable(link) && locationIsVisitable(location, this.snapshot.rootLocation);
	    }
	    submittedFormLinkToLocation() { }
	    willFollowLinkToLocation(link, location, event) {
	        return (this.elementIsNavigatable(link) &&
	            locationIsVisitable(location, this.snapshot.rootLocation) &&
	            this.applicationAllowsFollowingLinkToLocation(link, location, event));
	    }
	    followedLinkToLocation(link, location) {
	        const action = this.getActionForLink(link);
	        const acceptsStreamResponse = link.hasAttribute("data-turbo-stream");
	        this.visit(location.href, { action, acceptsStreamResponse });
	    }
	    allowsVisitingLocationWithAction(location, action) {
	        return this.locationWithActionIsSamePage(location, action) || this.applicationAllowsVisitingLocation(location);
	    }
	    visitProposedToLocation(location, options) {
	        extendURLWithDeprecatedProperties(location);
	        this.adapter.visitProposedToLocation(location, options);
	    }
	    visitStarted(visit) {
	        if (!visit.acceptsStreamResponse) {
	            markAsBusy(document.documentElement);
	        }
	        extendURLWithDeprecatedProperties(visit.location);
	        if (!visit.silent) {
	            this.notifyApplicationAfterVisitingLocation(visit.location, visit.action);
	        }
	    }
	    visitCompleted(visit) {
	        clearBusyState(document.documentElement);
	        this.notifyApplicationAfterPageLoad(visit.getTimingMetrics());
	    }
	    locationWithActionIsSamePage(location, action) {
	        return this.navigator.locationWithActionIsSamePage(location, action);
	    }
	    visitScrolledToSamePageLocation(oldURL, newURL) {
	        this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
	    }
	    willSubmitForm(form, submitter) {
	        const action = getAction(form, submitter);
	        return (this.submissionIsNavigatable(form, submitter) &&
	            locationIsVisitable(expandURL(action), this.snapshot.rootLocation));
	    }
	    formSubmitted(form, submitter) {
	        this.navigator.submitForm(form, submitter);
	    }
	    pageBecameInteractive() {
	        this.view.lastRenderedLocation = this.location;
	        this.notifyApplicationAfterPageLoad();
	    }
	    pageLoaded() {
	        this.history.assumeControlOfScrollRestoration();
	    }
	    pageWillUnload() {
	        this.history.relinquishControlOfScrollRestoration();
	    }
	    receivedMessageFromStream(message) {
	        this.renderStreamMessage(message);
	    }
	    viewWillCacheSnapshot() {
	        var _a;
	        if (!((_a = this.navigator.currentVisit) === null || _a === void 0 ? void 0 : _a.silent)) {
	            this.notifyApplicationBeforeCachingSnapshot();
	        }
	    }
	    allowsImmediateRender({ element }, options) {
	        const event = this.notifyApplicationBeforeRender(element, options);
	        const { defaultPrevented, detail: { render }, } = event;
	        if (this.view.renderer && render) {
	            this.view.renderer.renderElement = render;
	        }
	        return !defaultPrevented;
	    }
	    viewRenderedSnapshot(_snapshot, _isPreview) {
	        this.view.lastRenderedLocation = this.history.location;
	        this.notifyApplicationAfterRender();
	    }
	    preloadOnLoadLinksForView(element) {
	        this.preloader.preloadOnLoadLinksForView(element);
	    }
	    viewInvalidated(reason) {
	        this.adapter.pageInvalidated(reason);
	    }
	    frameLoaded(frame) {
	        this.notifyApplicationAfterFrameLoad(frame);
	    }
	    frameRendered(fetchResponse, frame) {
	        this.notifyApplicationAfterFrameRender(fetchResponse, frame);
	    }
	    applicationAllowsFollowingLinkToLocation(link, location, ev) {
	        const event = this.notifyApplicationAfterClickingLinkToLocation(link, location, ev);
	        return !event.defaultPrevented;
	    }
	    applicationAllowsVisitingLocation(location) {
	        const event = this.notifyApplicationBeforeVisitingLocation(location);
	        return !event.defaultPrevented;
	    }
	    notifyApplicationAfterClickingLinkToLocation(link, location, event) {
	        return dispatch("turbo:click", {
	            target: link,
	            detail: { url: location.href, originalEvent: event },
	            cancelable: true,
	        });
	    }
	    notifyApplicationBeforeVisitingLocation(location) {
	        return dispatch("turbo:before-visit", {
	            detail: { url: location.href },
	            cancelable: true,
	        });
	    }
	    notifyApplicationAfterVisitingLocation(location, action) {
	        return dispatch("turbo:visit", { detail: { url: location.href, action } });
	    }
	    notifyApplicationBeforeCachingSnapshot() {
	        return dispatch("turbo:before-cache");
	    }
	    notifyApplicationBeforeRender(newBody, options) {
	        return dispatch("turbo:before-render", {
	            detail: Object.assign({ newBody }, options),
	            cancelable: true,
	        });
	    }
	    notifyApplicationAfterRender() {
	        return dispatch("turbo:render");
	    }
	    notifyApplicationAfterPageLoad(timing = {}) {
	        return dispatch("turbo:load", {
	            detail: { url: this.location.href, timing },
	        });
	    }
	    notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
	        dispatchEvent(new HashChangeEvent("hashchange", {
	            oldURL: oldURL.toString(),
	            newURL: newURL.toString(),
	        }));
	    }
	    notifyApplicationAfterFrameLoad(frame) {
	        return dispatch("turbo:frame-load", { target: frame });
	    }
	    notifyApplicationAfterFrameRender(fetchResponse, frame) {
	        return dispatch("turbo:frame-render", {
	            detail: { fetchResponse },
	            target: frame,
	            cancelable: true,
	        });
	    }
	    submissionIsNavigatable(form, submitter) {
	        if (this.formMode == "off") {
	            return false;
	        }
	        else {
	            const submitterIsNavigatable = submitter ? this.elementIsNavigatable(submitter) : true;
	            if (this.formMode == "optin") {
	                return submitterIsNavigatable && form.closest('[data-turbo="true"]') != null;
	            }
	            else {
	                return submitterIsNavigatable && this.elementIsNavigatable(form);
	            }
	        }
	    }
	    elementIsNavigatable(element) {
	        const container = element.closest("[data-turbo]");
	        const withinFrame = element.closest("turbo-frame");
	        if (this.drive || withinFrame) {
	            if (container) {
	                return container.getAttribute("data-turbo") != "false";
	            }
	            else {
	                return true;
	            }
	        }
	        else {
	            if (container) {
	                return container.getAttribute("data-turbo") == "true";
	            }
	            else {
	                return false;
	            }
	        }
	    }
	    getActionForLink(link) {
	        const action = link.getAttribute("data-turbo-action");
	        return isAction(action) ? action : "advance";
	    }
	    get snapshot() {
	        return this.view.snapshot;
	    }
	}
	function extendURLWithDeprecatedProperties(url) {
	    Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
	}
	const deprecatedLocationPropertyDescriptors = {
	    absoluteURL: {
	        get() {
	            return this.toString();
	        },
	    },
	};

	class Cache {
	    constructor(session) {
	        this.session = session;
	    }
	    clear() {
	        this.session.clearCache();
	    }
	    resetCacheControl() {
	        this.setCacheControl("");
	    }
	    exemptPageFromCache() {
	        this.setCacheControl("no-cache");
	    }
	    exemptPageFromPreview() {
	        this.setCacheControl("no-preview");
	    }
	    setCacheControl(value) {
	        setMetaContent("turbo-cache-control", value);
	    }
	}

	const StreamActions = {
	    after() {
	        this.targetElements.forEach((e) => { var _a; return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e.nextSibling); });
	    },
	    append() {
	        this.removeDuplicateTargetChildren();
	        this.targetElements.forEach((e) => e.append(this.templateContent));
	    },
	    before() {
	        this.targetElements.forEach((e) => { var _a; return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e); });
	    },
	    prepend() {
	        this.removeDuplicateTargetChildren();
	        this.targetElements.forEach((e) => e.prepend(this.templateContent));
	    },
	    remove() {
	        this.targetElements.forEach((e) => e.remove());
	    },
	    replace() {
	        this.targetElements.forEach((e) => e.replaceWith(this.templateContent));
	    },
	    update() {
	        this.targetElements.forEach((e) => e.replaceChildren(this.templateContent));
	    },
	};

	const session = new Session();
	const cache = new Cache(session);
	const { navigator: navigator$1 } = session;
	function start() {
	    session.start();
	}
	function registerAdapter(adapter) {
	    session.registerAdapter(adapter);
	}
	function visit(location, options) {
	    session.visit(location, options);
	}
	function connectStreamSource(source) {
	    session.connectStreamSource(source);
	}
	function disconnectStreamSource(source) {
	    session.disconnectStreamSource(source);
	}
	function renderStreamMessage(message) {
	    session.renderStreamMessage(message);
	}
	function clearCache() {
	    console.warn("Please replace `Turbo.clearCache()` with `Turbo.cache.clear()`. The top-level function is deprecated and will be removed in a future version of Turbo.`");
	    session.clearCache();
	}
	function setProgressBarDelay(delay) {
	    session.setProgressBarDelay(delay);
	}
	function setConfirmMethod(confirmMethod) {
	    FormSubmission.confirmMethod = confirmMethod;
	}
	function setFormMode(mode) {
	    session.setFormMode(mode);
	}

	var Turbo = /*#__PURE__*/Object.freeze({
	    __proto__: null,
	    navigator: navigator$1,
	    session: session,
	    cache: cache,
	    PageRenderer: PageRenderer,
	    PageSnapshot: PageSnapshot,
	    FrameRenderer: FrameRenderer,
	    start: start,
	    registerAdapter: registerAdapter,
	    visit: visit,
	    connectStreamSource: connectStreamSource,
	    disconnectStreamSource: disconnectStreamSource,
	    renderStreamMessage: renderStreamMessage,
	    clearCache: clearCache,
	    setProgressBarDelay: setProgressBarDelay,
	    setConfirmMethod: setConfirmMethod,
	    setFormMode: setFormMode,
	    StreamActions: StreamActions
	});

	class FrameController {
	    constructor(element) {
	        this.fetchResponseLoaded = (_fetchResponse) => { };
	        this.currentFetchRequest = null;
	        this.resolveVisitPromise = () => { };
	        this.connected = false;
	        this.hasBeenLoaded = false;
	        this.ignoredAttributes = new Set();
	        this.action = null;
	        this.visitCachedSnapshot = ({ element }) => {
	            const frame = element.querySelector("#" + this.element.id);
	            if (frame && this.previousFrameElement) {
	                frame.replaceChildren(...this.previousFrameElement.children);
	            }
	            delete this.previousFrameElement;
	        };
	        this.element = element;
	        this.view = new FrameView(this, this.element);
	        this.appearanceObserver = new AppearanceObserver(this, this.element);
	        this.formLinkClickObserver = new FormLinkClickObserver(this, this.element);
	        this.linkInterceptor = new LinkInterceptor(this, this.element);
	        this.restorationIdentifier = uuid();
	        this.formSubmitObserver = new FormSubmitObserver(this, this.element);
	    }
	    connect() {
	        if (!this.connected) {
	            this.connected = true;
	            if (this.loadingStyle == FrameLoadingStyle.lazy) {
	                this.appearanceObserver.start();
	            }
	            else {
	                this.loadSourceURL();
	            }
	            this.formLinkClickObserver.start();
	            this.linkInterceptor.start();
	            this.formSubmitObserver.start();
	        }
	    }
	    disconnect() {
	        if (this.connected) {
	            this.connected = false;
	            this.appearanceObserver.stop();
	            this.formLinkClickObserver.stop();
	            this.linkInterceptor.stop();
	            this.formSubmitObserver.stop();
	        }
	    }
	    disabledChanged() {
	        if (this.loadingStyle == FrameLoadingStyle.eager) {
	            this.loadSourceURL();
	        }
	    }
	    sourceURLChanged() {
	        if (this.isIgnoringChangesTo("src"))
	            return;
	        if (this.element.isConnected) {
	            this.complete = false;
	        }
	        if (this.loadingStyle == FrameLoadingStyle.eager || this.hasBeenLoaded) {
	            this.loadSourceURL();
	        }
	    }
	    sourceURLReloaded() {
	        const { src } = this.element;
	        this.ignoringChangesToAttribute("complete", () => {
	            this.element.removeAttribute("complete");
	        });
	        this.element.src = null;
	        this.element.src = src;
	        return this.element.loaded;
	    }
	    completeChanged() {
	        if (this.isIgnoringChangesTo("complete"))
	            return;
	        this.loadSourceURL();
	    }
	    loadingStyleChanged() {
	        if (this.loadingStyle == FrameLoadingStyle.lazy) {
	            this.appearanceObserver.start();
	        }
	        else {
	            this.appearanceObserver.stop();
	            this.loadSourceURL();
	        }
	    }
	    async loadSourceURL() {
	        if (this.enabled && this.isActive && !this.complete && this.sourceURL) {
	            this.element.loaded = this.visit(expandURL(this.sourceURL));
	            this.appearanceObserver.stop();
	            await this.element.loaded;
	            this.hasBeenLoaded = true;
	        }
	    }
	    async loadResponse(fetchResponse) {
	        if (fetchResponse.redirected || (fetchResponse.succeeded && fetchResponse.isHTML)) {
	            this.sourceURL = fetchResponse.response.url;
	        }
	        try {
	            const html = await fetchResponse.responseHTML;
	            if (html) {
	                const { body } = parseHTMLDocument(html);
	                const newFrameElement = await this.extractForeignFrameElement(body);
	                if (newFrameElement) {
	                    const snapshot = new Snapshot(newFrameElement);
	                    const renderer = new FrameRenderer(this, this.view.snapshot, snapshot, FrameRenderer.renderElement, false, false);
	                    if (this.view.renderPromise)
	                        await this.view.renderPromise;
	                    this.changeHistory();
	                    await this.view.render(renderer);
	                    this.complete = true;
	                    session.frameRendered(fetchResponse, this.element);
	                    session.frameLoaded(this.element);
	                    this.fetchResponseLoaded(fetchResponse);
	                }
	                else if (this.willHandleFrameMissingFromResponse(fetchResponse)) {
	                    console.warn(`A matching frame for #${this.element.id} was missing from the response, transforming into full-page Visit.`);
	                    this.visitResponse(fetchResponse.response);
	                }
	            }
	        }
	        catch (error) {
	            console.error(error);
	            this.view.invalidate();
	        }
	        finally {
	            this.fetchResponseLoaded = () => { };
	        }
	    }
	    elementAppearedInViewport(_element) {
	        this.loadSourceURL();
	    }
	    willSubmitFormLinkToLocation(link) {
	        return this.shouldInterceptNavigation(link);
	    }
	    submittedFormLinkToLocation(link, _location, form) {
	        const frame = this.findFrameElement(link);
	        if (frame)
	            form.setAttribute("data-turbo-frame", frame.id);
	    }
	    shouldInterceptLinkClick(element, _location, _event) {
	        return this.shouldInterceptNavigation(element);
	    }
	    linkClickIntercepted(element, location) {
	        this.navigateFrame(element, location);
	    }
	    willSubmitForm(element, submitter) {
	        return element.closest("turbo-frame") == this.element && this.shouldInterceptNavigation(element, submitter);
	    }
	    formSubmitted(element, submitter) {
	        if (this.formSubmission) {
	            this.formSubmission.stop();
	        }
	        this.formSubmission = new FormSubmission(this, element, submitter);
	        const { fetchRequest } = this.formSubmission;
	        this.prepareHeadersForRequest(fetchRequest.headers, fetchRequest);
	        this.formSubmission.start();
	    }
	    prepareHeadersForRequest(headers, request) {
	        var _a;
	        headers["Turbo-Frame"] = this.id;
	        if ((_a = this.currentNavigationElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("data-turbo-stream")) {
	            request.acceptResponseType(StreamMessage.contentType);
	        }
	    }
	    requestStarted(_request) {
	        markAsBusy(this.element);
	    }
	    requestPreventedHandlingResponse(_request, _response) {
	        this.resolveVisitPromise();
	    }
	    async requestSucceededWithResponse(request, response) {
	        await this.loadResponse(response);
	        this.resolveVisitPromise();
	    }
	    async requestFailedWithResponse(request, response) {
	        console.error(response);
	        await this.loadResponse(response);
	        this.resolveVisitPromise();
	    }
	    requestErrored(request, error) {
	        console.error(error);
	        this.resolveVisitPromise();
	    }
	    requestFinished(_request) {
	        clearBusyState(this.element);
	    }
	    formSubmissionStarted({ formElement }) {
	        markAsBusy(formElement, this.findFrameElement(formElement));
	    }
	    formSubmissionSucceededWithResponse(formSubmission, response) {
	        const frame = this.findFrameElement(formSubmission.formElement, formSubmission.submitter);
	        frame.delegate.proposeVisitIfNavigatedWithAction(frame, formSubmission.formElement, formSubmission.submitter);
	        frame.delegate.loadResponse(response);
	    }
	    formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
	        this.element.delegate.loadResponse(fetchResponse);
	    }
	    formSubmissionErrored(formSubmission, error) {
	        console.error(error);
	    }
	    formSubmissionFinished({ formElement }) {
	        clearBusyState(formElement, this.findFrameElement(formElement));
	    }
	    allowsImmediateRender({ element: newFrame }, options) {
	        const event = dispatch("turbo:before-frame-render", {
	            target: this.element,
	            detail: Object.assign({ newFrame }, options),
	            cancelable: true,
	        });
	        const { defaultPrevented, detail: { render }, } = event;
	        if (this.view.renderer && render) {
	            this.view.renderer.renderElement = render;
	        }
	        return !defaultPrevented;
	    }
	    viewRenderedSnapshot(_snapshot, _isPreview) { }
	    preloadOnLoadLinksForView(element) {
	        session.preloadOnLoadLinksForView(element);
	    }
	    viewInvalidated() { }
	    willRenderFrame(currentElement, _newElement) {
	        this.previousFrameElement = currentElement.cloneNode(true);
	    }
	    async visit(url) {
	        var _a;
	        const request = new FetchRequest(this, FetchMethod.get, url, new URLSearchParams(), this.element);
	        (_a = this.currentFetchRequest) === null || _a === void 0 ? void 0 : _a.cancel();
	        this.currentFetchRequest = request;
	        return new Promise((resolve) => {
	            this.resolveVisitPromise = () => {
	                this.resolveVisitPromise = () => { };
	                this.currentFetchRequest = null;
	                resolve();
	            };
	            request.perform();
	        });
	    }
	    navigateFrame(element, url, submitter) {
	        const frame = this.findFrameElement(element, submitter);
	        this.pageSnapshot = PageSnapshot.fromElement(frame).clone();
	        frame.delegate.proposeVisitIfNavigatedWithAction(frame, element, submitter);
	        this.withCurrentNavigationElement(element, () => {
	            frame.src = url;
	        });
	    }
	    proposeVisitIfNavigatedWithAction(frame, element, submitter) {
	        this.action = getVisitAction(submitter, element, frame);
	        if (isAction(this.action)) {
	            const { visitCachedSnapshot } = frame.delegate;
	            frame.delegate.fetchResponseLoaded = (fetchResponse) => {
	                if (frame.src) {
	                    const { statusCode, redirected } = fetchResponse;
	                    const responseHTML = frame.ownerDocument.documentElement.outerHTML;
	                    const response = { statusCode, redirected, responseHTML };
	                    const options = {
	                        response,
	                        visitCachedSnapshot,
	                        willRender: false,
	                        updateHistory: false,
	                        restorationIdentifier: this.restorationIdentifier,
	                        snapshot: this.pageSnapshot,
	                    };
	                    if (this.action)
	                        options.action = this.action;
	                    session.visit(frame.src, options);
	                }
	            };
	        }
	    }
	    changeHistory() {
	        if (this.action) {
	            const method = getHistoryMethodForAction(this.action);
	            session.history.update(method, expandURL(this.element.src || ""), this.restorationIdentifier);
	        }
	    }
	    willHandleFrameMissingFromResponse(fetchResponse) {
	        this.element.setAttribute("complete", "");
	        const response = fetchResponse.response;
	        const visit = async (url, options = {}) => {
	            if (url instanceof Response) {
	                this.visitResponse(url);
	            }
	            else {
	                session.visit(url, options);
	            }
	        };
	        const event = dispatch("turbo:frame-missing", {
	            target: this.element,
	            detail: { response, visit },
	            cancelable: true,
	        });
	        return !event.defaultPrevented;
	    }
	    async visitResponse(response) {
	        const wrapped = new FetchResponse(response);
	        const responseHTML = await wrapped.responseHTML;
	        const { location, redirected, statusCode } = wrapped;
	        return session.visit(location, { response: { redirected, statusCode, responseHTML } });
	    }
	    findFrameElement(element, submitter) {
	        var _a;
	        const id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
	        return (_a = getFrameElementById(id)) !== null && _a !== void 0 ? _a : this.element;
	    }
	    async extractForeignFrameElement(container) {
	        let element;
	        const id = CSS.escape(this.id);
	        try {
	            element = activateElement(container.querySelector(`turbo-frame#${id}`), this.sourceURL);
	            if (element) {
	                return element;
	            }
	            element = activateElement(container.querySelector(`turbo-frame[src][recurse~=${id}]`), this.sourceURL);
	            if (element) {
	                await element.loaded;
	                return await this.extractForeignFrameElement(element);
	            }
	        }
	        catch (error) {
	            console.error(error);
	            return new FrameElement();
	        }
	        return null;
	    }
	    formActionIsVisitable(form, submitter) {
	        const action = getAction(form, submitter);
	        return locationIsVisitable(expandURL(action), this.rootLocation);
	    }
	    shouldInterceptNavigation(element, submitter) {
	        const id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
	        if (element instanceof HTMLFormElement && !this.formActionIsVisitable(element, submitter)) {
	            return false;
	        }
	        if (!this.enabled || id == "_top") {
	            return false;
	        }
	        if (id) {
	            const frameElement = getFrameElementById(id);
	            if (frameElement) {
	                return !frameElement.disabled;
	            }
	        }
	        if (!session.elementIsNavigatable(element)) {
	            return false;
	        }
	        if (submitter && !session.elementIsNavigatable(submitter)) {
	            return false;
	        }
	        return true;
	    }
	    get id() {
	        return this.element.id;
	    }
	    get enabled() {
	        return !this.element.disabled;
	    }
	    get sourceURL() {
	        if (this.element.src) {
	            return this.element.src;
	        }
	    }
	    set sourceURL(sourceURL) {
	        this.ignoringChangesToAttribute("src", () => {
	            this.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
	        });
	    }
	    get loadingStyle() {
	        return this.element.loading;
	    }
	    get isLoading() {
	        return this.formSubmission !== undefined || this.resolveVisitPromise() !== undefined;
	    }
	    get complete() {
	        return this.element.hasAttribute("complete");
	    }
	    set complete(value) {
	        this.ignoringChangesToAttribute("complete", () => {
	            if (value) {
	                this.element.setAttribute("complete", "");
	            }
	            else {
	                this.element.removeAttribute("complete");
	            }
	        });
	    }
	    get isActive() {
	        return this.element.isActive && this.connected;
	    }
	    get rootLocation() {
	        var _a;
	        const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
	        const root = (_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/";
	        return expandURL(root);
	    }
	    isIgnoringChangesTo(attributeName) {
	        return this.ignoredAttributes.has(attributeName);
	    }
	    ignoringChangesToAttribute(attributeName, callback) {
	        this.ignoredAttributes.add(attributeName);
	        callback();
	        this.ignoredAttributes.delete(attributeName);
	    }
	    withCurrentNavigationElement(element, callback) {
	        this.currentNavigationElement = element;
	        callback();
	        delete this.currentNavigationElement;
	    }
	}
	function getFrameElementById(id) {
	    if (id != null) {
	        const element = document.getElementById(id);
	        if (element instanceof FrameElement) {
	            return element;
	        }
	    }
	}
	function activateElement(element, currentURL) {
	    if (element) {
	        const src = element.getAttribute("src");
	        if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) {
	            throw new Error(`Matching <turbo-frame id="${element.id}"> element has a source URL which references itself`);
	        }
	        if (element.ownerDocument !== document) {
	            element = document.importNode(element, true);
	        }
	        if (element instanceof FrameElement) {
	            element.connectedCallback();
	            element.disconnectedCallback();
	            return element;
	        }
	    }
	}

	class StreamElement extends HTMLElement {
	    static async renderElement(newElement) {
	        await newElement.performAction();
	    }
	    async connectedCallback() {
	        try {
	            await this.render();
	        }
	        catch (error) {
	            console.error(error);
	        }
	        finally {
	            this.disconnect();
	        }
	    }
	    async render() {
	        var _a;
	        return ((_a = this.renderPromise) !== null && _a !== void 0 ? _a : (this.renderPromise = (async () => {
	            const event = this.beforeRenderEvent;
	            if (this.dispatchEvent(event)) {
	                await nextAnimationFrame();
	                await event.detail.render(this);
	            }
	        })()));
	    }
	    disconnect() {
	        try {
	            this.remove();
	        }
	        catch (_a) { }
	    }
	    removeDuplicateTargetChildren() {
	        this.duplicateChildren.forEach((c) => c.remove());
	    }
	    get duplicateChildren() {
	        var _a;
	        const existingChildren = this.targetElements.flatMap((e) => [...e.children]).filter((c) => !!c.id);
	        const newChildrenIds = [...(((_a = this.templateContent) === null || _a === void 0 ? void 0 : _a.children) || [])].filter((c) => !!c.id).map((c) => c.id);
	        return existingChildren.filter((c) => newChildrenIds.includes(c.id));
	    }
	    get performAction() {
	        if (this.action) {
	            const actionFunction = StreamActions[this.action];
	            if (actionFunction) {
	                return actionFunction;
	            }
	            this.raise("unknown action");
	        }
	        this.raise("action attribute is missing");
	    }
	    get targetElements() {
	        if (this.target) {
	            return this.targetElementsById;
	        }
	        else if (this.targets) {
	            return this.targetElementsByQuery;
	        }
	        else {
	            this.raise("target or targets attribute is missing");
	        }
	    }
	    get templateContent() {
	        return this.templateElement.content.cloneNode(true);
	    }
	    get templateElement() {
	        if (this.firstElementChild === null) {
	            const template = this.ownerDocument.createElement("template");
	            this.appendChild(template);
	            return template;
	        }
	        else if (this.firstElementChild instanceof HTMLTemplateElement) {
	            return this.firstElementChild;
	        }
	        this.raise("first child element must be a <template> element");
	    }
	    get action() {
	        return this.getAttribute("action");
	    }
	    get target() {
	        return this.getAttribute("target");
	    }
	    get targets() {
	        return this.getAttribute("targets");
	    }
	    raise(message) {
	        throw new Error(`${this.description}: ${message}`);
	    }
	    get description() {
	        var _a, _b;
	        return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
	    }
	    get beforeRenderEvent() {
	        return new CustomEvent("turbo:before-stream-render", {
	            bubbles: true,
	            cancelable: true,
	            detail: { newStream: this, render: StreamElement.renderElement },
	        });
	    }
	    get targetElementsById() {
	        var _a;
	        const element = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);
	        if (element !== null) {
	            return [element];
	        }
	        else {
	            return [];
	        }
	    }
	    get targetElementsByQuery() {
	        var _a;
	        const elements = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.targets);
	        if (elements.length !== 0) {
	            return Array.prototype.slice.call(elements);
	        }
	        else {
	            return [];
	        }
	    }
	}

	class StreamSourceElement extends HTMLElement {
	    constructor() {
	        super(...arguments);
	        this.streamSource = null;
	    }
	    connectedCallback() {
	        this.streamSource = this.src.match(/^ws{1,2}:/) ? new WebSocket(this.src) : new EventSource(this.src);
	        connectStreamSource(this.streamSource);
	    }
	    disconnectedCallback() {
	        if (this.streamSource) {
	            disconnectStreamSource(this.streamSource);
	        }
	    }
	    get src() {
	        return this.getAttribute("src") || "";
	    }
	}

	FrameElement.delegateConstructor = FrameController;
	if (customElements.get("turbo-frame") === undefined) {
	    customElements.define("turbo-frame", FrameElement);
	}
	if (customElements.get("turbo-stream") === undefined) {
	    customElements.define("turbo-stream", StreamElement);
	}
	if (customElements.get("turbo-stream-source") === undefined) {
	    customElements.define("turbo-stream-source", StreamSourceElement);
	}

	(() => {
	    let element = document.currentScript;
	    if (!element)
	        return;
	    if (element.hasAttribute("data-turbo-suppress-warning"))
	        return;
	    element = element.parentElement;
	    while (element) {
	        if (element == document.body) {
	            return console.warn(unindent `
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your application’s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        ——
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `, element.outerHTML);
	        }
	        element = element.parentElement;
	    }
	})();

	window.Turbo = Turbo;
	start();

	window.Stimulus = Application.start();
	Stimulus.register('delete', DeleteController);
	Stimulus.register('edit', EditController);

	document.addEventListener('turbo:load', () => {
	  feather.replace();
	  sortable();

	  if (window.RssReader?.sucmsg) {
	    SnackBar({
	      fixed: true,
	      message: window.RssReader.sucmsg,
	      position: 'tr',
	      speed: 250,
	      status: 'success',
	      timeout: 2500,
	    });
	  }

	  if (window.RssReader?.errmsg) {
	    SnackBar({
	      fixed: true,
	      message: window.RssReader.errmsg,
	      position: 'tr',
	      speed: 250,
	      status: 'error',
	      timeout: 2500,
	    });
	  }
	});

})();
