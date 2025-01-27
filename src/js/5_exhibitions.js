import data from "./exhibitions.json";

const containerExb = document.querySelector('.js-container');

// Función para renderizar las exposiciones
function renderDataExb() {
  let allMedia = "";

  // Recorrer cada exposición en el array `data`
  for (const item of data) {
    // Tomar la primera imagen del array `images` (si existe)
    const media = item.images[0] || "";
    const imageDescription = item.imageDescriptions[0] || "Descripción no disponible";
    
    // Construir el contenido multimedia
    let mediaContent = "";
    if (media.includes("youtube.com") || media.includes("vimeo.com")) {
      mediaContent = `<iframe class="section_video"
                          src="${media}" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen></iframe>`;
    } else if (/\.(mp4|webm|ogg)$/i.test(media)) {
      mediaContent = `<video class="section_video" controls>
                        <source src="${media}" type="video/${media.split('.').pop()}">
                      </video>`;
    } else {
      mediaContent = `<img class="section_img" src="${media}" alt="${imageDescription}"/>`;
    }
    let logosContent = "";
    if (item.logo && item.logo.length > 0) {
      for (const logo of item.logo) {
        logosContent += `<img class="article_img" src="${logo}" alt="Logo de la exposición: ${item.title}">`;
      }
    }
    // Construir el contenido HTML de la sección
    allMedia += `
      <section class="section">
      ${mediaContent}
      <article class="article">
        <a href="${item.url}" target="_blank">
        ${logosContent}</a>         
        <div>
          <h3 class="article_h3">${item.title}</h3>
          <p>${item.desc}</p>
          <p class="article_date">${item.date}</p>            
        </div>
        </article>
      </section>`;
  }

  // Insertar el contenido generado en el contenedor principal
  containerExb.innerHTML = allMedia;
}

// Llamar a la función para renderizar las exposiciones
renderDataExb();
