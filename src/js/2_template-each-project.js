import dataProject from "./projects.json";

const containerProject = document.querySelector(".js-container");
const urlParams = new URLSearchParams(window.location.search);
let projectId = parseInt(urlParams.get("id"), 10);

// Verifica que el ID sea un número válido
if (isNaN(projectId)) {
  console.warn("⚠️ ID de proyecto no válido en la URL.");
  projectId = null;
}

// Obtener proyecto por ID
function getProjectById(id) {
  return dataProject.find((item) => item.id === id) || null;
}

// Renderizar proyecto en el HTML
function renderDataProject() {
  if (projectId === null) {
    containerProject.innerHTML = `<p class="error-message">⚠️ No se encontró un ID válido en la URL.</p>`;
    return;
  }

  const project = getProjectById(projectId);
  if (!project) {
    containerProject.innerHTML = `<p class="error-message">⚠️ Proyecto no encontrado.</p>`;
    console.warn("⚠️ Proyecto no encontrado.");
    return;
  }

  try {
    const allMedia = project.images
      ?.map((media, i) => {
        const imageDescription = project.imageDescriptions?.[i] || "Imagen sin descripción";
        if (media.includes("youtube.com") || media.includes("vimeo.com")) {
          return `<iframe class="js-gallery_media"
                          src="${media}"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen></iframe>`;
        } else if (media.match(/\.(mp4|webm|ogg)$/)) {
          return `<video class="video js-gallery_media" controls>
                    <source src="${media}" type="video/${media.split('.').pop()}">
                  </video>`;
        } else {
          return `<img class="gallery_img js-gallery_img" src="${media}" alt="${imageDescription}" data-index="${i}"/>`;
        }
      })
      .join("") || "";

    containerProject.innerHTML = `
      <div class="content_gallery">${allMedia}</div>
      <div class="content_text">
        <h2 class="content_h2">${project.title || "Sin título"}</h2>
        <p class="content_p">${project.desc || "Sin descripción"}</p>
        <p class="content_p">${project.date || "Fecha no disponible"}</p>
      </div>`;

    addModalListeners();
  } catch (error) {
    console.error("Error al renderizar el proyecto:", error);
  }
}


const buttonL = document.querySelector(".js-button_scroll_left");
const buttonR = document.querySelector(".js-button_scroll_right");

if (buttonL) {
  buttonL.addEventListener("click", () => changeProject(-1));
} else {
  console.warn("⚠️ Botón izquierdo no encontrado en el DOM.");
}

if (buttonR) {
  buttonR.addEventListener("click", () => changeProject(1));
} else {
  console.warn("⚠️ Botón derecho no encontrado en el DOM.");
}

// Función para cambiar de proyecto
function changeProject(offset) {
  const currentIndex = dataProject.findIndex((item) => item.id === projectId);
  if (currentIndex === -1) {
    console.error("ID de proyecto no encontrado en la lista.");
    return;
  }

  const newIndex = (currentIndex + offset + dataProject.length) % dataProject.length;
  const newProject = dataProject[newIndex];

  if (!newProject) {
    console.error("No se pudo encontrar el siguiente proyecto.");
    return;
  }

  window.location.search = `?id=${newProject.id}`;
}

// Modal de imágenes
function addModalListeners() {
  const mediaInModal = document.querySelectorAll(".js-gallery_img");
  const modal = document.querySelector(".js-mymodal");
  const imgModal = document.querySelector(".js-imgModal");
  const closeButton = document.querySelector(".js-close");
  const scrollLeft = document.querySelector(".js-scroll_left");
  const scrollRight = document.querySelector(".js-scroll_right");
  const imageText = document.querySelector(".js-caption");

  if (!mediaInModal.length) {
    console.warn("⚠️ No hay imágenes en el proyecto para mostrar en el modal.");
    return;
  }

  let slideIndex = 0;

  mediaInModal.forEach((item, index) => {
    item.addEventListener("click", function () {
      if (!modal || !imgModal || !imageText) {
        console.error("⚠️ Elementos del modal no encontrados.");
        return;
      }

      modal.style.display = "block";
      imgModal.src = item.src;
      imgModal.alt = item.alt;
      slideIndex = index;
      updateCaption();
    });
  });

  if (scrollLeft) {
    scrollLeft.addEventListener("click", () => changeSlide(-1));
  } else {
    console.warn("⚠️ Botón de scroll izquierdo no encontrado.");
  }

  if (scrollRight) {
    scrollRight.addEventListener("click", () => changeSlide(1));
  } else {
    console.warn("⚠️ Botón de scroll derecho no encontrado.");
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  } else {
    console.warn("⚠️ Botón de cerrar modal no encontrado.");
  }

  function changeSlide(n) {
    slideIndex = (slideIndex + n + mediaInModal.length) % mediaInModal.length;
    imgModal.src = mediaInModal[slideIndex].src;
    imgModal.alt = mediaInModal[slideIndex].alt;
    updateCaption();
  }

  function updateCaption() {
    imageText.textContent = `${slideIndex + 1}/${mediaInModal.length}`;
  }
}

// Renderizar proyecto
renderDataProject();
