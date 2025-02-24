const images = document.querySelectorAll('.js-about_img'); // Selecciona todas las imágenes
const overlay = document.getElementById('myoverlay');
const overlayImg = document.getElementById('imgoverlay');
const captionT = document.getElementById('caption');
const closeButton = document.querySelector('.js-close');
let specialImage = document.querySelector('.js-img_special');
const imageForSpecial = "/images/me/me_17.jpg";

// Abre el overlay con la imagen ampliada
images.forEach(image => {
    captionT.style.fontStyle = 'italic';
    image.addEventListener('click', function() {
        overlay.style.display = "block"; // Muestra el overlay
        overlayImg.src = this.src; // Cambia el src de la imagen del overlay por la de la imagen clickeada
       
    });
});

// Cierra el overlay cuando se hace clic en la "x"
closeButton.addEventListener('click', function() {
    overlay.style.display = "none";
});

specialImage.addEventListener('click', function() {
    overlay.style.display = "block";
    overlayImg.src = imageForSpecial;
    
});
