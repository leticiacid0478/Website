const arrowWrapper = document.querySelector(".arrow-wrapper");
const arrow = document.querySelector(".arrow");
const navSmall = document.querySelector(".nav-small");
const video = document.querySelector(".video");

const twoRowWrapper = document.querySelector(".two-row-wrapper");
const contentWrapper = document.querySelector(".content-wrapper");
const logoWrapper = document.querySelector(".logo-link-wrapper");
const navLinkWrappers = document.querySelectorAll(".nav-link-wrapper");
const rightNav = document.querySelector(".right-nav");

const navBarWrapper = document.querySelector(".nav-wrapper");
var isDarkMode = false;
var breadcrumbsLi = document.querySelectorAll(".breadcrumbs li");
var breadLinks = document.querySelectorAll(".breadcrumbs li a");
const breadcrumbsWrapper = document.querySelector(".breadcrumbs-wrapper");
const breadcrumbs = document.querySelector(".breadcrumbs");

const backgroundWrapper = document.querySelector(".background-wrapper");
if (breadcrumbsLi.length ==1) {
  var contentBlockWrappers = document.querySelector(".content-wrapper").children;
  var allBlockWrappers = document.querySelectorAll(".block-wrapper");
  var allBlockTitles = document.querySelectorAll(".block-wrapper a");
  var tallest = 0;
}

const hamburger = document.querySelector(".hamburger-bar-wrapper");
const hamburgerBar = document.querySelector(".side-bar-wrapper");
const hamburgerContent = document.querySelector(".side-bar-content");
const hamburgerLines = document.querySelectorAll(".bar");
const hamburgerBarLinkWrappers = document.querySelectorAll(".side-bar-link-wrapper");
if (breadcrumbsLi.length > 1 && breadcrumbsLi[1].innerHTML == "Weeb Corner") {
  var hamburgerBarSublinkWrappers = document.querySelectorAll(".side-bar-sublink-wrapper");
}

const backgroundVideo = document.querySelector(".background-video");
const videoFadeTwo = document.querySelector(".video-fade-two");
const drStoneWrapper = document.querySelector(".dr-stone-wrapper");
const cellsAtWorkWrapper = document.querySelector(".cells-at-work-wrapper");
const backgroundColor = document.querySelector(".background-color");
const descriptionWrappers = document.querySelectorAll(".description-wrapper");

var hOne = document.querySelectorAll("h1");
var hTwo = document.querySelectorAll("h2");
var pOne = document.querySelectorAll("p1");
var pTwo = document.querySelectorAll("p2");

hamburger.addEventListener("click", sideBar);

function sideBar() {
  hamburger.classList.toggle("active");
  hamburgerBar.classList.toggle("active");
  hamburgerContent.classList.toggle("active");
}

arrow.addEventListener("click", navBar);

function navBar() {
  arrowWrapper.classList.toggle("active");
  navSmall.classList.toggle("active");
  video.classList.toggle("hidden");
}

var videoWidth;
var fadeHeight;
var videoHeight;
var originalWindowWidth = window.innerWidth;
if (breadcrumbsLi.length > 1 && breadcrumbsLi[1].innerHTML == "Weeb Corner") {
  videoWidth = backgroundVideo.offsetWidth;
  fadeHeight = videoFadeTwo.offsetHeight;
  videoHeight = backgroundVideo.offsetHeight;
}

if (window.innerWidth <= 840) {
  if (breadcrumbsLi.length == 1) {
    contentWrapper.classList.add("small");
  }
  breadcrumbs.classList.add("small");
  if (breadcrumbsLi.length > 1 && breadcrumbsLi[1].innerHTML == "Weeb Corner") {
    drStoneWrapper.classList.add("small");
    cellsAtWorkWrapper.classList.add("small");
  }
} else {
  if (breadcrumbsLi.length == 1) {
    contentWrapper.classList.remove("small");
  }
  breadcrumbs.classList.remove("small");
  if (breadcrumbsLi.length > 1 && breadcrumbsLi[1].innerHTML == "Weeb Corner") {
    drStoneWrapper.classList.remove("small");
    cellsAtWorkWrapper.classList.remove("small");
  }
}

if (window.innerWidth < 1400) {
  navLinkWrappers.forEach((element) => {
    element.classList.add('small');
  });
  rightNav.classList.add("small");
  arrowWrapper.style.visibility = "visible";
} else {
  navLinkWrappers.forEach((element) => {
    element.classList.remove('small');
  });
  rightNav.classList.remove("small");
  arrowWrapper.style.visibility = "hidden";
  navSmall.classList.remove("active");
}

window.onresize = function() {

  if (breadcrumbsLi.length > 1 && breadcrumbsLi[1].innerHTML == "Weeb Corner") {
    videoWidth = backgroundVideo.offsetWidth;
    fadeHeight = videoFadeTwo.offsetHeight;
    videoHeight = backgroundVideo.offsetHeight;
    videoFadeTwo.style.right = ((originalWindowWidth - window.innerwidth - videoFadeTwo.offsetHeight) + "px");
 //   videoFadeTwo.style.right = (((backgroundVideo.offsetWidth)/3 + videoFadeTwo.offsetHeight) + "px");
 //   videoFadeTwo.style.height = backgroundVideo.offsetHeight;
  }

  if (window.innerWidth <= 840) {
    if (breadcrumbsLi.length == 1) {
      contentWrapper.classList.add("small");
    }
    breadcrumbs.classList.add("small");
    if (breadcrumbsLi.length > 1 && breadcrumbsLi[1].innerHTML == "Weeb Corner") {
      drStoneWrapper.classList.add("small");
      cellsAtWorkWrapper.classList.add("small");
    }
  } else {
    if (breadcrumbsLi.length == 1) {
      contentWrapper.classList.remove("small");
    }
    breadcrumbs.classList.remove("small");
    if (breadcrumbsLi.length > 1 && breadcrumbsLi[1].innerHTML == "Weeb Corner") {
      drStoneWrapper.classList.remove("small");
      cellsAtWorkWrapper.classList.remove("small");
    }
  }

  if (window.innerWidth < 1400) {
    navLinkWrappers.forEach((element) => {
      element.classList.add('small');
    });
    rightNav.classList.add("small");
    arrowWrapper.style.visibility = "visible";
  } else {
    navLinkWrappers.forEach((element) => {
      element.classList.remove('small');
    });
    rightNav.classList.remove("small");
    arrowWrapper.style.visibility = "hidden";
    navSmall.classList.remove("active");
  }

  if (breadcrumbsLi.length == 1) {
    tallest = 0;
    for (let i = 0; i < contentBlockWrappers.length; i++) {
      contentBlockWrappers[i].style.height = ("auto");
    }
    for (let i = 0; i < contentBlockWrappers.length; i++) {
      if (contentBlockWrappers[i].offsetHeight > tallest) {
        tallest = contentBlockWrappers[i].offsetHeight;
      }
    }
    for (let i = 0; i < allBlockWrappers.length; i++) {
      allBlockWrappers[i].style.height = (tallest + "px");
    }
    contentWrapper.style.marginTop = (-(backgroundWrapper.offsetHeight) + "px");
  }
}


                     //Home Script

if (breadcrumbsLi.length ==1) {
  for (let i = 0; i < contentBlockWrappers.length; i++) {
    if (contentBlockWrappers[i].offsetHeight > tallest) {
      tallest = contentBlockWrappers[i].offsetHeight;
    }
  }
  for (let i = 0; i < allBlockWrappers.length; i++) {
    allBlockWrappers[i].style.height = (tallest + "px");
  }
  contentWrapper.style.marginTop = (-(backgroundWrapper.offsetHeight) + "px");
}

function darkMode() {
  isDarkMode = true;
  navBarWrapper.style.backgroundColor = "#1B1A23";
  navBarWrapper.style.color = "white";
  hamburgerBar.style.backgroundColor = "#1B1A23";
  hamburgerBar.style.color = "white";
  navSmall.style.backgroundColor = "#1B1A23";
  arrow.style.border = "solid white";
  arrow.style.borderWidth = "0 4px 4px 0";
  for (let i = 0; i < hamburgerLines.length; i++) {
    hamburgerLines[i].style.backgroundColor = "white";
  }
  for (let i = 0; i < breadcrumbsLi.length; i++) {
    breadcrumbsLi[i].style.color = "white";
  }
  for (let i = 0; i < breadLinks.length; i++) {
    breadLinks[i].style.color = "white";
  }
  breadcrumbsWrapper.style.backgroundColor = "grey";
  backgroundWrapper.style.backgroundColor = "grey";
  for (let i = 0; i < hOne.length; i++) {
    hOne[i].style.color = "white";
  }
  for (let i = 0; i < hTwo.length; i++) {
    hTwo[i].style.color = "white";
  }
  for (let i = 0; i < pOne.length; i++) {
    pOne[i].style.color = "white";
  }
  for (let i = 0; i < pTwo.length; i++) {
    pTwo[i].style.color = "white";
  }
  if (breadcrumbsLi.length ==1) {
    for (let i = 0; i < allBlockTitles.length; i++) {
      allBlockTitles[i].style.color = "#6489C6";
    }
  }
}

function lightMode() {
  isDarkMode = false;
  navBarWrapper.style.backgroundColor = "#FFE455";
  navBarWrapper.style.color = "black";
  hamburgerBar.style.backgroundColor = "#FFE455";
  hamburgerBar.style.color = "black";
  navSmall.style.backgroundColor = "#FFE455";
  arrow.style.border = "solid black";
  arrow.style.borderWidth = "0 4px 4px 0";
  for (let i = 0; i < hamburgerLines.length; i++) {
    hamburgerLines[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < breadcrumbsLi.length; i++) {
    breadcrumbsLi[i].style.color = "black";
  }
  for (let i = 0; i < breadLinks.length; i++) {
    breadLinks[i].style.color = "black";
  }
  breadcrumbsWrapper.style.backgroundColor = "transparent";
  backgroundWrapper.style.backgroundColor = "white";
  for (let i = 0; i < hOne.length; i++) {
    hOne[i].style.color = "black";
  }
  for (let i = 0; i < hTwo.length; i++) {
    hTwo[i].style.color = "black";
  }
  for (let i = 0; i < pOne.length; i++) {
    pOne[i].style.color = "black";
  }
  for (let i = 0; i < pTwo.length; i++) {
    pTwo[i].style.color = "black";
  }
  if (breadcrumbsLi.length ==1) {
    for (let i = 0; i < allBlockTitles.length; i++) {
      allBlockTitles[i].style.color = "black";
    }
  }
}

window.onscroll = function() {darkModeOnScroll()}; 
function darkModeOnScroll() { 
  breadcrumbsLi = document.querySelectorAll(".breadcrumbs li");
  if (breadcrumbsLi.length == 1) {
    // called when the window is scrolled.
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = 200; 
    if(currentScroll + modifier > documentHeight) {
      console.log('You are at the bottom!');
      darkMode();
    } else {
      lightMode();
    }
  }

  if (breadcrumbsLi.length > 1 && breadcrumbsLi[1].innerHTML == "Weeb Corner") {
    // called when the window is scrolled.
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = (cellsAtWorkWrapper.offsetHeight - descriptionWrappers[1].offsetHeight - 200);
    if(currentScroll + modifier > documentHeight) {
      console.log('You are at the bottom!');
      backgroundColor.style.backgroundColor = "red";
      videoFadeTwo.style.boxShadow = "0 0 50px 50px red";
    } else {
      backgroundColor.style.backgroundColor = "#6493E1";
      videoFadeTwo.style.boxShadow = "0 0 50px 50px #6493E1";
    }
  }
}
                     //Weeb Script
if (breadcrumbsLi.length > 1 && breadcrumbsLi[1].innerHTML == "Weeb Corner") {
  darkMode();
  breadcrumbsWrapper.style.backgroundColor = "transparent";
  videoFadeTwo.style.right = ((backgroundVideo.offsetWidth)*3);
  for (let i = 0; i < hamburgerBarLinkWrappers.length; i++) {
    hamburgerBarLinkWrappers[i].addEventListener("click", subBar);
  }
  function subBar() {
    for (let i = 0; i < hamburgerBarSublinkWrappers.length; i++) {
      hamburgerBarSublinkWrappers[i].classList.toggle("active");
    }
  }
}
