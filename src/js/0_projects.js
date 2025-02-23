import data from "./projects.json";


/* 
1- En el menu de projectos al clickar en una imagen, tiene que abrir la página de ese proyecto. (un evento llama al id concreto del proyecto) click === data.id
2- Se abre la página nueva de un projecto. Ahi es donde se tiene que pintar 
Funciones: una función para pintar el objeto (article)
Otra función para recorrer los arrays y pintar todos los objetos
ejecutar al cargar la página la función que recorre el array

*/

const gallery = document.querySelector('.js-gallery');
const optionSelect = document.getElementById('optionSelect');

// Función para recorrer el array y renderizar la galería
function renderGallery(projects) {
  gallery.innerHTML = ""; // Limpiar la galería

    if (!projects || projects.length === 0) {
        gallery.innerHTML = "<p>No hay proyectos para mostrar.</p>";
        return;
    }
    const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
    sortedProjects.forEach(item => { // Usamos forEach para simplificar
        const imageDescription = item.imageDescriptions[0] || "Descripción no disponible";
        const mediaSrc = item.images && item.images[0] ? item.images[0] : ""; // Verificamos si existe item.images

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
       <a href="./template-each-project.html?id=${item.id}" class="project-link">
       ${mediaElement}
       <p>${item.title}</p>
      </a>`;
  });

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

// Filtrar proyectos según seleccion
function handleOptionSelect () {
  const selectedCategory = optionSelect.value;
  
  // Filtrar los datos según la categoría seleccionada
  const filteredData = selectedCategory === '' ? data : data.filter(item => item.type === selectedCategory);

  // Renderizar la galería con los proyectos filtrados
  renderGallery(filteredData);
  console.log(filteredData);
 
}

document.addEventListener('DOMContentLoaded', () => {
  optionSelect.addEventListener('change', handleOptionSelect);
  renderGallery(data);
});