import{d as o}from"../../../assets/projects-78434c5c.js";const _=document.querySelector(".js-container"),v=new URLSearchParams(window.location.search);let m=parseInt(v.get("id")),a="",r=0;function b(e){return o.find(n=>n.id===e)}function j(){const e=b(m);for(let n=0;n<e.images.length;n++){const t=e.images[n],l=e.imageDescriptions[n];t.includes("youtube.com")||t.includes("vimeo.com")?a+=`<iframe class="js-gallery_media" 
                        src="${t}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>`:t.match(/\.(mp4|webm|ogg)$/)?a+=`<video class=" video js-gallery_media" controls>
                     <source src="${t}" type="video/${t.split(".").pop()}">
                   </video>`:a+=`<img class="gallery_img js-gallery_img" src="${t}" alt="${l}" data-index="${n}"/>`}_.innerHTML+=`
    <div class="content_gallery">${a}</div>
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
    </div>`}const L=document.querySelector(".js-btn_scroll_left"),w=document.querySelector(".js-btn_scroll_right");function g(e){const t=(o.findIndex(y=>y.id===m)+e+o.length)%o.length,l=o[t];window.location.search=`?id=${l.id}`}w.addEventListener("click",()=>g(-1));L.addEventListener("click",()=>g(1));j();const c=document.querySelectorAll(".js-gallery_img"),p=document.querySelector(".js-mymodal"),s=document.querySelector(".js-imgModal"),q=document.querySelector(".js-close"),E=document.querySelector(".js-scroll_left"),$=document.querySelector(".js-scroll_right"),d=document.querySelector(".js-caption"),u=c.length;function k(){c.forEach(e=>{e.addEventListener("click",function(){p.style.display="block",s.src=e.src,s.alt=e.alt,r=parseInt(e.dataset.index),h(r,u,d)})})}E.addEventListener("click",()=>{f(-1,u,d)});$.addEventListener("click",()=>{f(1,u,d)});function f(e,n,t){r+=e,r<0?r=c.length-1:r>=c.length&&(r=0),s.src=c[r].src,s.alt=c[r].alt,h(r,n,t)}function h(e,n,t){t.textContent=`${e+1}/${n} `}q.addEventListener("click",function(){p.style.display="none"});k();const i=document.querySelector(".share-container"),S=document.querySelector(".share-button");S.addEventListener("click",()=>{i.classList.toggle("active")});document.addEventListener("click",e=>{i.contains(e.target)||i.classList.remove("active")});
//# sourceMappingURL=2_template-each-project.js.map
