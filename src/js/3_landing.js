// Seleccionar los elementos del carrusel
const carousel = document.querySelector(".js-carousel_items");
const images = document.querySelectorAll(".js-carousel_items__img");
const btnLeft = document.querySelector(".js-btn_scroll_left");
const btnRight = document.querySelector(".js-btn_scroll_right");

// Determinar el número total de imágenes
const totalImages = images.length;
let index = 0; // Índice inicial del carrusel

// Función para actualizar la posición del carrusel
function updateCarousel() {
  const imageWidth = images[0].offsetWidth; // Obtener el ancho de la imagen
  carousel.style.transition = "transform 0.3s ease-in-out"; // Animación suave
  carousel.style.transform = `translateX(-${index * imageWidth}px)`; // Mover el carrusel
}


// Función para manejar el clic en el botón derecho
btnRight.onclick = function() {
  index--; // Aumentar índice para ir a la imagen anterior
  if (index < 0) {
    index = totalImages - 1; 
  }
  updateCarousel();
};

btnLeft.onclick = function() {
  index++; // Disminuir índice para ir a la imagen siguiente
  if (index >= totalImages) {
    index = 0; 
  }
  updateCarousel();
};