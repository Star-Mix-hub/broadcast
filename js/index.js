/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
var blocVideo = document.querySelector(".block-video");
var video = document.querySelector(".video");
var startVideo = new Date();
if (startVideo.getHours() > 18 && startVideo.getHours() < 21) {
  video.classList.add("show");
} else {
  video.classList.remove("show");
}
/******/ })()
;