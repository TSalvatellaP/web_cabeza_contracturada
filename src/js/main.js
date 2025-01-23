'use strict';
// import data from "./data.json";
// console.log (data);

const closeBtn = document.querySelector(".js-closeBtn");
const menu = document.querySelector(".js-menu");
const menuOpen = document.querySelector(".js-menuOpen");

menuOpen.addEventListener("click", () => {
  menu.classList.remove("collapsed"); // Abre el menú
  console.log("abre menu");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("collapsed"); // Cierra el menú
  console.log("cierra menu");
});