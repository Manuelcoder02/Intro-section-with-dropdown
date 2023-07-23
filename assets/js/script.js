"use strict";

const bodyWork = document.querySelector(".body-work");
const openNavBtn = document.querySelector(".nav-img");
const closeNavBtn = document.querySelector(".close-navbar");
const overlayEL = document.querySelector(".overlay");
const navigationBarEL = document.querySelector(".navbar-content");

const featToggle = document.querySelector(".features-ss");
const featureContent = document.querySelector(".feature-content");
const featArrowUp = document.querySelector(".fu");
const featArrowDown = document.querySelector(".fd");

const compToggle = document.querySelector(".company-ss");
const companyContent = document.querySelector(".company-content");
const compArrowUp = document.querySelector(".cu");
const compArrowDown = document.querySelector(".cd");

console.log(featArrowDown, featArrowUp);
// const dropDown = function(){

// }
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

featToggle.addEventListener("click", function () {
  featureContent.classList.toggle("feature-content-nav");
  // featArrowDown.style.visibility = "hidden";
  // featArrowUp.style.visibility = "visible";
  featArrowDown.classList.toggle("ddd");
  featArrowUp.classList.toggle("fff");
});

compToggle.addEventListener("click", function () {
  companyContent.classList.toggle("company-content-nav");
  compArrowDown.classList.toggle("ddd");
  compArrowUp.classList.toggle("fff");
});
