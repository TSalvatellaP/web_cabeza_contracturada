document.addEventListener('DOMContentLoaded', () => {
// Seleccionar los elementos del carrusel
const carousel = document.querySelector(".js-carousel");
const imgs = document.querySelectorAll(".js-carousel_img");
const buttonLeft = document.querySelector(".js-button_scroll_left");
const buttonRight = document.querySelector(".js-button_scroll_right");

let pointIndex = 0;
const totalImgs = imgs.length;

// Función para actualizar la posición del carrusel
function updateCarousel() {
  if (carousel && imgs.length > 0) { // Verifica si carousel e imgs existen
    carousel.style.transform = `translateX(-${pointIndex * 50}%)`;
    imgs.forEach(image => image.classList.remove('active'));
    imgs[pointIndex].classList.add('active');
  }
}

// Función para manejar el botón derecho (avanza a la derecha)
if (buttonRight) {
  buttonRight.addEventListener("click", () => {
    pointIndex = (pointIndex + 1) % totalImgs;
    updateCarousel();
  });
}

// Función para manejar el botón izquierdo (retrocede a la izquierda)
if (buttonLeft) {
  buttonLeft.addEventListener("click", () => {
    pointIndex = (pointIndex - 1 + totalImgs) % totalImgs;
    updateCarousel();
  });
}


updateCarousel();
});