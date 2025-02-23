const images = document.querySelectorAll('.js-about_img'); // Selecciona todas las imágenes
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('imgModal');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.js-close');
const specialImage = document.querySelector('.js-img_special');
const imageForSpecial = "/images/me/me_03.jpg";

// Abre el modal con la imagen ampliada
images.forEach(image => {
    captionText.style.fontStyle = 'italic';
    image.addEventListener('click', function() {
        modal.style.display = "block"; // Muestra el modal
        modalImg.src = this.src; // Cambia el src de la imagen del modal por la de la imagen clickeada
       
        
    });
});

// Cierra el modal cuando se hace clic en la "x"
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

specialImage.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = imageForSpecial; 
   
    
});
//PREGUNTAR POR QUÉ ES NECESARIO USAR EL ID Y una class