// Seleccionar los elementos del carrusel
const carousel = document.querySelector(".js-carousel");
const images = document.querySelectorAll(".js-carousel_img");
const btnLeft = document.querySelector(".js-btn_scroll_left");
const btnRight = document.querySelector(".js-btn_scroll_right");

let currentIndex = 0;
const totalImages = images.length;

// Función para actualizar la posición del carrusel
function updateCarousel() {
 carousel.style.transform = `translateX(-${currentIndex * 50}%)`; 
 images.forEach(image => image.classList.remove('active'));
 images[currentIndex].classList.add('active');
}

// Función para manejar el botón derecho (ahora hacia la izquierda)
btnRight.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

// Función para manejar el botón izquierdo (avanza a la derecha)
btnLeft.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});