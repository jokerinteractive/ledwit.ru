"use strict";

var toggleButton = document.querySelector(".main-nav__toggle");
var navigation = document.querySelector(".main-nav");
toggleButton.addEventListener("click", function () {
  navigation.classList.toggle("main-nav--cloced");
});