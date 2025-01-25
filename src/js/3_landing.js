
const carousel = document.querySelector(".carousel_items");
const images = document.querySelectorAll(".carousel_items__img");
const btnLeft = document.querySelector(".btn_scroll:not(.right)");
const btnRight = document.querySelector(".btn_scroll.right");

const totalImages = images.length;
let index = 0;

// Función para actualizar la posición del carrusel
const updateCarousel = () => {
  const imageWidth = images[0].clientWidth; //para que se mueva el ancho de la imagen
  carousel.style.transform = `translateX(-${index * imageWidth}px)`;
};

// Botón derecho 
btnRight.addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;  // % nos ahorramos la condicional
    /*if (index < 0) {
        index = totalImages - 1; // Si retrocedes más allá del inicio, ve al final
      }*/
  updateCarousel();
});

// Botón izquierdo 
btnLeft.addEventListener("click", () => {
    index = (index + 1 + totalImages ) % totalImages; // % Vuelve al final si es menor que 0
  updateCarousel();
});

// Actualizar el carrusel al cargar la página
updateCarousel();
