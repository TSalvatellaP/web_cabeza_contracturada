// Seleccionar los elementos del carrusel
const carousel = document.querySelector(".js-carousel");
const imgs = document.querySelectorAll(".js-carousel_img");
const buttonLeft = document.querySelector(".js-button_scroll_left");
const buttonRight = document.querySelector(".js-button_scroll_right");

let currentIndex = 0;
const totalImgs = imgs.length;

// Función para actualizar la posición del carrusel
function updateCarousel() {
 carousel.style.transform = `translateX(-${currentIndex * 50}%)`; 
 imgs.forEach(image => image.classList.remove('active'));
 imgs[currentIndex].classList.add('active');
}

// Función para manejar el botón derecho (ahora hacia la izquierda)
buttonRight.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImgs) % totalImgs;
  updateCarousel();
});

// Función para manejar el botón izquierdo (avanza a la derecha)
buttonLeft.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImgs;
  updateCarousel();
});