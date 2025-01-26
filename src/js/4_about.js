const images = document.querySelectorAll('.js-about_img'); // Selecciona todas las imágenes
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('imgModal');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.js-close');
const specialImage = document.querySelector('.js-img_special');
const imageForModal = "/images/me/me_03.jpg";

// Abre el modal con la imagen ampliada
images.forEach(image => {
    captionText.style.fontStyle = 'italic';
    image.addEventListener('click', function() {
        modal.style.display = "block"; // Muestra el modal
        modalImg.src = this.src; // Cambia el src de la imagen del modal por la de la imagen clickeada
        captionText.textContent = this.alt || '';
        
    });
});

// Cierra el modal cuando se hace clic en la imagen dentro del modal
modalImg.addEventListener('click', function() {
    modal.style.display = "none"; // Cierra el modal
});

// Cierra el modal si se hace clic fuera de la imagen
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Cierra el modal si se hace clic fuera de la imagen
    }
});
// Cierra el modal cuando se hace clic en la "x"
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

specialImage.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = imageForModal; 
    captionText.textContent = this.alt || '';// Cambia el src del modal por la imagen específica
    
});
//PREGUNTAR POR QUÉ ES NECESARIO USAR EL ID Y una class