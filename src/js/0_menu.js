'use strict';
document.addEventListener('DOMContentLoaded', () => {
const menu = document.querySelector(".js-menu");
const menuOpen = document.querySelector(".js-menuOpen");

menuOpen.addEventListener("click", () => {
  menu.classList.toggle("collapsed"); 
  console.log("abre menu");
});

});