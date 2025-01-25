import data from "./data.json";

const containerProject = document.querySelector ('.js-container');
//el id del proyecto proviene de la URL 
const urlParams = new URLSearchParams(window.location.search);
let projectId = parseInt(urlParams.get("id"));


// Función para obtener el proyecto por su ID
function getProjectById(id) {
  return data.find((item) => item.id === id);
}

//Funcion para pintar el projecto en el html
function renderDataProject() {
  const project = getProjectById(projectId);
  let allMedia = ""; 

  for (const media of project.images) {
    if (media.includes("youtube.com") || media.includes("vimeo.com")) {
      // Si es un enlace de video (por ejemplo, de YouTube o Vimeo)
      allMedia += `<iframe class="gallery_media js-gallery_media" 
                        src="${media}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>`;
    } else if (media.match(/\.(mp4|webm|ogg)$/)) {
      // Si es un enlace a un video con extensión conocida
      allMedia += `<video class="gallery_media js-gallery_media" controls>
                     <source src="${media}" type="video/${media.split('.').pop()}">
                   </video>`;
    } else {
      // Si es un enlace a una imagen
      allMedia += `<img class="gallery_img js-gallery_img" src="${media}" alt="${project.title}"/>`;
    }
  }

  containerProject.innerHTML += `
    <div class="content_gallery">${allMedia}</div>
    <div class="content_text">
      <div>
        <h2 class="content_h2">${project.title}</h2>
        <p class="content_p">${project.desc}</p>
      </div>
      <div class="category">
        <h4>CATEGORÍA</h4>
        <p>${project.type || "Proyectos"}</p>
        <h6>Comparte</h6>
      </div>
    </div>`;
}

   

/// Botones para moverse de un proyecto a otro next <- ->

const btnLeft = document.querySelector ('.js-btn_scroll_left')
const btnRight = document.querySelector ('.js-btn_scroll_right')

// Función para cambiar el proyecto mostrando el siguiente o anterior
function changeProject(offset) {
  // Hay que buscar la posicion ID
  const currentIndex = data.findIndex((item) => item.id === projectId);
  const newIndex = (currentIndex + offset + data.length) % data.length; // % para asegurarnos de que el índice nunca se desborde (devolverá al primer proyecto si estamos en el último, o al último proyecto si estamos en el primero).
  const newProject = data[newIndex];
  // Actualiza la URL para cargar el nuevo proyecto
  window.location.search = `?id=${newProject.id}`;
}

// Habilitar los botones para navegar entre proyectos
    btnLeft.addEventListener("click", () => changeProject(-1)); // Proyecto anterior
    btnRight.addEventListener("click", () => changeProject(1)); // Proyecto siguiente

    // Llamar a la función para renderizar el proyecto
renderDataProject ();

//VENTANA MODAL AL CLICKAR CADA IMAGEN





