'use strict';
const menu = document.querySelector(".js-menu");
const menuOpen = document.querySelector(".js-menuOpen");

menuOpen.addEventListener("click", () => {
  menu.classList.toggle("collapsed"); // Abre el menú
  console.log("abre menu");
});

