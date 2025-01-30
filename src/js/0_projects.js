import data from "./projects.json";

/* 
1- En el menu de projectos al clickar en una imagen, tiene que abrir la página de ese proyecto. (un evento llama al id concreto del proyecto) click === data.id
2- Se abre la página nueva de un projecto. Ahi es donde se tiene que pintar 
Funciones: una función para pintar el objeto (article)
Otra función para recorrer los arrays y pintar todos los objetos
ejecutar al cargar la página la función que recorre el array

*/

const gallery = document.querySelector('.js-gallery');

// Función para recorrer el array y renderizar la galería
function renderGallery() {
  const sortedData = [...data].sort((a, b) => b.id - a.id);
  gallery.innerHTML = ""; // Limpiar la galería antes de renderizar

  for (const item of sortedData) {
    const imageDescription = item.imageDescriptions[0] || "Descripción no disponible";
    const mediaSrc = item.images[0] || "";
    let mediaElement = "";

    // Renderizar según el tipo de archivo
    if (mediaSrc.includes("youtube.com") || mediaSrc.includes("vimeo.com")) {
      mediaElement = `
        <iframe class="project_img"
          src="${mediaSrc}" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>`;
    } else if (/\.(mp4|webm|ogg)$/i.test(mediaSrc)) {
      mediaElement = `
        <video class="project_img controls>
          <source src="${mediaSrc}" type="video/${mediaSrc.split('.').pop()}">
        </video>`;
    } else {
      mediaElement = `<img class="project_img js-images" src="${mediaSrc}" alt="${imageDescription}" data-id="${item.id}"/>`;
    }

    // Añadir el proyecto a la galería
    gallery.innerHTML += `
      <div class="card" ><a href="./template-each-project.html?id=${item.id}" class="project-link">
        ${mediaElement}
       <div class = "conteiner_title"><div class="square"> </div><div><p>${item.title}</p>
       <p>lorem lorem lorem lorem </p></div></div>
      </a> 
      </div>`;
  }

  // Agregar eventos a las imágenes
  addImageClickEvents();
}

// Función para añadir eventos a las imágenes
function addImageClickEvents() {
  const allImages = document.querySelectorAll('.js-images');
  for (const oneImage of allImages) {
    oneImage.addEventListener('click', handleClickImg);
  }
}

// Manejador de eventos al hacer clic en una imagen
function handleClickImg(event) {
  const clickedImg = event.target;
  const projectId = clickedImg.dataset.id; // Obtener el ID del proyecto
  if (projectId) {
    window.location.href = `./template-each-project.html?id=${projectId}`;
  }
}

// Ejecutar la función para renderizar la galería al cargar la página
renderGallery();
