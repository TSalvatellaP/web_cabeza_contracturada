import{d as s}from"../../../assets/projects-78434c5c.js";document.addEventListener("DOMContentLoaded",function(){const h=document.querySelector(".js-container"),b=new URLSearchParams(window.location.search);let m=parseInt(b.get("id")),l="",o=0;console.log("Project ID desde la URL:",m);function j(e){return console.log(typeof s),s.find(n=>n.id===e)}function w(){const e=j(m);if(!e){h.innerHTML="<p>No se encontró el proyecto.</p>";return}l="";for(let n=0;n<e.images.length;n++){const t=e.images[n],a=e.imageDescriptions[n];t.includes("youtube.com")||t.includes("vimeo.com")?l+=`<iframe class="js-gallery_media" 
                          src="${t}" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen></iframe>`:t.match(/\.(mp4|webm|ogg)$/)?l+=`<video class="video js-gallery_media" controls>
                       <source src="${t}" type="video/${t.split(".").pop()}">
                     </video>`:l+=`<img class="gallery_img js-gallery_img" src="${t}" alt="${a}" data-index="${n}"/>`}h.innerHTML=` 
      <div class="content_gallery">${l}</div>
      <div class="content_text">
        <div>
          <h2 class="content_h2">${e.title}</h2>
          <p class="content_p">${e.desc}</p>
          <p class="content_p">${e.date}</p>
        </div>
        <div class="category">
          <h4>CATEGORÍA</h4>
          <p>${e.category||"Proyectos"}</p>
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
      </div>`,$()}const E=document.querySelector(".js-btn_scroll_left"),q=document.querySelector(".js-btn_scroll_right");function y(e){const t=(s.findIndex(d=>d.id===m)+e+s.length)%s.length,a=s[t];window.location.search=`?id=${a.id}`}q.addEventListener("click",()=>y(1)),E.addEventListener("click",()=>y(-1)),w();function $(){const e=document.querySelectorAll(".js-gallery_img"),n=document.querySelector(".js-mymodal"),t=document.querySelector(".js-imgModal"),a=document.querySelector(".js-close"),d=document.querySelector(".js-scroll_left"),_=document.querySelector(".js-scroll_right"),u=document.querySelector(".js-caption");if(!n||!t||!a||!d||!_||!u){console.warn("Elementos del modal no encontrados.");return}let p=e.length;e.forEach((c,r)=>{c.dataset.index=r,c.addEventListener("click",function(){n.style.display="block",t.src=c.src,t.alt=c.alt,o=r,L(o,p,u)})}),d.addEventListener("click",()=>v(-1,p,u)),_.addEventListener("click",()=>v(1,p,u));function v(c,r,f){o+=c,o<0?o=e.length-1:o>=e.length&&(o=0),t.src=e[o].src,t.alt=e[o].alt,L(o,r,f)}function L(c,r,f){f.textContent=`${c+1}/${r}`}a.addEventListener("click",function(){n.style.display="none"})}const i=document.querySelector(".share-container"),g=document.querySelector(".share-button");g&&i&&(g.addEventListener("click",()=>{i.classList.toggle("active")}),document.addEventListener("click",e=>{!i.contains(e.target)&&e.target!==g&&i.classList.remove("active")}))});
//# sourceMappingURL=3_template-each-project.js.map
