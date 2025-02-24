import data from "./projects.json";

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM Cargado");
  const containerProject = document.querySelector('.js-container');
  
  // El id del proyecto proviene de la URL 
  const urlParams = new URLSearchParams(window.location.search);
  let projectId = parseInt(urlParams.get("id"));
  let allMedia = "";
  let slideIndex = 0;
  console.log("Project ID desde la URL:", projectId);

  // Función para obtener el proyecto por su ID
  function getProjectById(id) {
    console.log(typeof data)
    return data.find((item) => item.id === id);
  }

  // Función para renderizar el proyecto en el HTML
  function renderDataProject() {
    const project = getProjectById(projectId);
    
    if (!project) {
      containerProject.innerHTML = `<p>No se encontró el proyecto.</p>`;
      return;
    }

    allMedia = ""; // Limpiar antes de agregar nuevos elementos

    for (let i = 0; i < project.images.length; i++) {
      const media = project.images[i];
      const imageDescription = project.imageDescriptions[i];
      if (media.includes("youtube.com") || media.includes("vimeo.com")) {
        allMedia += `<iframe class="js-gallery_media" 
                          src="${media}" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen></iframe>`;
      } else if (media.match(/\.(mp4|webm|ogg)$/)) {
        allMedia += `<video class="video js-gallery_media" controls>
                       <source src="${media}" type="video/${media.split('.').pop()}">
                     </video>`;
      } else {
        allMedia += `<img class="gallery_img js-gallery_img" src="${media}" alt="${imageDescription}" data-index="${i}"/>`;
      }
    }

    containerProject.innerHTML = ` 
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
              <a href="https://www.facebook.com/sharer/sharer.php?u=URL_DE_TU_OBRA" target="_blank" title="Compartir en Facebook">
                <i class="fa-brands fa-square-instagram fa-lg"></i>
              </a>
              <a href="https://x.com/intent/tweet?url=URL_DE_TU_OBRA&text=¡Mira esta obra de arte!" target="_blank" title="Compartir en X">
                <i class="fa-brands fa-square-x-twitter fa-lg"></i>
              </a>
              <a href="https://pinterest.com/pin/create/button/?media=URL_DE_LA_IMAGEN&url=URL_DE_TU_OBRA" target="_blank" title="Compartir en Pinterest">
                <i class="fa-brands fa-square-pinterest fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>`;

    addModalListeners(); // Llamar después de renderizar para que existan los elementos en el DOM
  }

  // Botones de navegación entre proyectos
  const btnLeft = document.querySelector('.js-btn_scroll_left');
  const btnRight = document.querySelector('.js-btn_scroll_right');

  function changeProject(offset) {
    const currentIndex = data.findIndex((item) => item.id === projectId);
    const newIndex = (currentIndex + offset + data.length) % data.length;
    const newProject = data[newIndex];
    window.location.search = `?id=${newProject.id}`;
  }

  btnRight.addEventListener("click", () => changeProject(1)); 
  btnLeft.addEventListener("click", () => changeProject(-1));

  // Renderizar el proyecto
  renderDataProject();

  // Modal de imágenes
  function addModalListeners() {
    const mediaInModal = document.querySelectorAll('.js-gallery_img');
    const modal = document.querySelector('.js-mymodal');
    const modalImg = document.querySelector('.js-imgModal');
    const closeBtn = document.querySelector('.js-close');
    const scrollLeft = document.querySelector('.js-scroll_left');
    const scrollRight = document.querySelector('.js-scroll_right');
    const captionText = document.querySelector('.js-caption');

    if (!modal || !modalImg || !closeBtn || !scrollLeft || !scrollRight || !captionText) {
      console.warn("Elementos del modal no encontrados.");
      return;
    }

    let totalImages = mediaInModal.length;

    mediaInModal.forEach((item, index) => {
      item.dataset.index = index; // Asegurar índice correcto
      item.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = item.src;
        modalImg.alt = item.alt;
        slideIndex = index;
        updateCaption(slideIndex, totalImages, captionText);
      });
    });

    scrollLeft.addEventListener('click', () => changeSlide(-1, totalImages, captionText));
    scrollRight.addEventListener('click', () => changeSlide(1, totalImages, captionText));

    function changeSlide(n, totalImages, captionText) {
      slideIndex += n;
      if (slideIndex < 0) {
        slideIndex = mediaInModal.length - 1;
      } else if (slideIndex >= mediaInModal.length) {
        slideIndex = 0;
      }
      modalImg.src = mediaInModal[slideIndex].src;
      modalImg.alt = mediaInModal[slideIndex].alt;
      updateCaption(slideIndex, totalImages, captionText);
    }

    function updateCaption(currentIndex, totalImages, captionText) {
      captionText.textContent = `${currentIndex + 1}/${totalImages}`;
    }

    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
    });
  }

  // Modal de compartir en redes sociales
  const shareContainer = document.querySelector(".share-container");
  const shareButton = document.querySelector(".share-button");

  if (shareButton && shareContainer) {
    shareButton.addEventListener("click", () => {
      shareContainer.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!shareContainer.contains(e.target) && e.target !== shareButton) {
        shareContainer.classList.remove("active");
      }
    });
  }
});
