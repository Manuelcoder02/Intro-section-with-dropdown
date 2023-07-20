"use strict";

const bodyWork = document.querySelector(".body-work");
const openNavBtn = document.querySelector(".nav-img");
const closeNavBtn = document.querySelector(".close-navbar");
const overlayEL = document.querySelector(".overlay");
const navigationBarEL = document.querySelector(".navbar-content");

openNavBtn.addEventListener("click", function () {
  // when the menu bar is been clicked
  navigationBarEL.classList.add("clicked");
  overlayEL.classList.remove("hidden");
  // document.querySelector(".header").classList.add("hidden");
});

closeNavBtn.addEventListener("click", function () {
  navigationBarEL.classList.remove("clicked");
  overlayEL.classList.add("hidden");
});
