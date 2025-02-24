import dataProject from "./projects.json";

const containerProject = document.querySelector ('.js-container');
//el id del proyecto proviene de la URL 
const urlParams = new URLSearchParams(window.location.search);
let projectId = parseInt(urlParams.get("id"));
let allMedia = "";
let slideIndex = 0;

// Función para obtener el proyecto por su ID
function getProjectById(id) {
  return dataProject.find((item) => item.id === id);
}

//Funcion para pintar el projecto en el html
function renderDataProject() {
  const project = getProjectById(projectId);
  for (let i = 0; i < project.images.length; i++)  {
    const media = project.images[i];
    const imageDescription = project.imageDescriptions[i];
    if (media.includes("youtube.com") || media.includes("vimeo.com")) {
      // Si es un enlace de video (por ejemplo, de YouTube o Vimeo)
      allMedia += `<iframe class="js-gallery_media" 
                        src="${media}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>`;
    } else if (media.match(/\.(mp4|webm|ogg)$/)) {
      // Si es un enlace a un video con extensión conocida
      allMedia += `<video class=" video js-gallery_media" controls>
                     <source src="${media}" type="video/${media.split('.').pop()}">
                   </video>`;
    } else {
      // Si es un enlace a una imagen
      allMedia += `<img class="gallery_img js-gallery_img" src="${media}" alt="${imageDescription}" data-index="${i}"/>`;
    }
  }

  containerProject.innerHTML += `
    <div class="content_gallery">${allMedia}</div>
    <div class="content_text">
      <div>
        <h2 class="content_h2">${project.title}</h2>
        <p class="content_p">${project.desc}</p>
        <p class="content_p">${project.date}</p>
    </div>
      <div class="category">
        <h4>CATEGORÍA</h4>
        <p>${project.category || "Proyectos"}</p>
        <div class="share-container">
  <button class="share-button">Comparte</button>
  <div class="modal_social">
    <div class="arrow"></div>
    <a
      href="https://www.facebook.com/sharer/sharer.php?u=URL_DE_TU_OBRA"
      target="_blank"
      rel="noopener noreferrer"
      title="Compartir en Facebook"
    >
      <i class="fa-brands fa-square-instagram fa-lg"></i>
    </a>
    <a
      href="https://x.com/intent/tweet?url=URL_DE_TU_OBRA&text=¡Mira esta obra de arte!"
      target="_blank"
      rel="noopener noreferrer"
      title="Compartir en X"
    >
      <i class="fa-brands fa-square-x-twitter fa-lg"></i>
    </a>
    <a
      href="https://pinterest.com/pin/create/button/?media=URL_DE_LA_IMAGEN&url=URL_DE_TU_OBRA"
      target="_blank"
      rel="noopener noreferrer"
      title="Compartir en Pinterest"
    >
      <i class="fa-brands fa-square-pinterest fa-lg"></i>
    </a>
   
    
  </div>
</div>
      </div>
    </div>`;
}


/// Botones para moverse de un proyecto a otro next <- ->

const buttonL = document.querySelector ('.js-button_scroll_left')
const buttonR = document.querySelector ('.js-button_scroll_right')

// Función para cambiar el proyecto mostrando el siguiente o anterior
function changeProject(offset) {
  // Hay que buscar la posicion ID
  const currentIndex = dataProject.findIndex((item) => item.id === projectId);
  const newIndex = (currentIndex + offset + dataProject.length) % dataProject.length; // % para asegurarnos de que el índice nunca se desborde (devolverá al primer proyecto si estamos en el último, o al último proyecto si estamos en el primero).
  const newProject = dataProject[newIndex];
  // Actualiza la URL para cargar el nuevo proyecto
  window.location.search = `?id=${newProject.id}`;
}

// Habilitar los botones para navegar entre proyectos
buttonR.addEventListener("click", () => changeProject(-1)); 
buttonL.addEventListener("click", () => changeProject(1)); 

// Llamar a la función para renderizar el proyecto
renderDataProject ();

//VENTANA MODAL AL CLICKAR CADA IMAGEN
const mediaInModal = document.querySelectorAll ('.js-gallery_img');
const modal = document.querySelector('.js-mymodal');
const imgModal = document.querySelector('.js-imgModal');
const closeButton = document.querySelector('.js-close');
const scrollLeft = document.querySelector ('.js-scroll_left');
const scrollRight = document.querySelector ('.js-scroll_right');
const imageText = document.querySelector ('.js-caption')
const totalImages = mediaInModal.length;


// Abre el modal con la imagen ampliada
function addModalListeners() {
mediaInModal.forEach(item => {
  item.addEventListener('click', function() {
      modal.style.display = "block"; // Muestra el modal
      imgModal.src = item.src; // Cambia el src de la imagen del modal por la de la imagen clickeada
      imgModal.alt = item.alt;
      slideIndex = parseInt(item.dataset.index);
      updateCaption(slideIndex, totalImages, imageText);
  
  });
});
}
scrollLeft.addEventListener('click', () => {
  changeSlide(-1, totalImages, imageText);
});

scrollRight.addEventListener('click', () => {
  changeSlide(1, totalImages, imageText);
});

function changeSlide(n, totalImages, imageText) {
  slideIndex += n;
  if (slideIndex < 0) {
      slideIndex = mediaInModal.length - 1;
  } else if (slideIndex >= mediaInModal.length) {
      slideIndex = 0;
  }
  imgModal.src = mediaInModal[slideIndex].src;
  imgModal.alt = mediaInModal[slideIndex].alt;
  updateCaption(slideIndex, totalImages, imageText);
}

function updateCaption(currentIndex, totalImages, imageText) {
  imageText.textContent = `${currentIndex + 1}/${totalImages} `; 
}
// Cierra el modal cuando se hace clic en la "x"
closeButton.addEventListener('click', function() {
  modal.style.display = "none";
});

addModalListeners()


//MODAL SOCIAL

  const shareContainer = document.querySelector(".share-container");
  const shareButton = document.querySelector(".share-button");
  
  // Evento para alternar el modal
  shareButton.addEventListener("click", () => {
  shareContainer.classList.toggle("active");
  });

  // Cerrar el modal si haces clic fuera de él
  document.addEventListener("click", (e) => {
    if (!shareContainer.contains(e.target)) {
      shareContainer.classList.remove("active");
    }
  });