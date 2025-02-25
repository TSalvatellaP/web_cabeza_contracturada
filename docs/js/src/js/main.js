import{d as u}from"../../../assets/projects-78434c5c.js";import{d as I}from"../../../assets/exhibitions-bc59c66c.js";document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".js-menu");document.querySelector(".js-menuOpen").addEventListener("click",()=>{i.classList.toggle("collapsed"),console.log("abre menu")})});document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".js-carousel"),a=document.querySelectorAll(".js-carousel_img"),d=document.querySelector(".js-button_scroll_left"),l=document.querySelector(".js-button_scroll_right");let e=0;const c=a.length;function n(){i&&a.length>0&&(i.style.transform=`translateX(-${e*50}%)`,a.forEach(s=>s.classList.remove("active")),a[e].classList.add("active"))}l&&l.addEventListener("click",()=>{e=(e+1)%c,n()}),d&&d.addEventListener("click",()=>{e=(e-1+c)%c,n()}),n()});document.addEventListener("DOMContentLoaded",()=>{console.log(u);const i=document.querySelector(".js-gallery"),a=document.getElementById("optionSelect");function d(n){if(i.innerHTML="",!n||n.length===0){i.innerHTML="<p>No hay proyectos para mostrar.</p>";return}[...n].sort((o,f)=>f.id-o.id).forEach(o=>{const f=o.imageDescriptions&&o.imageDescriptions[0]?o.imageDescriptions[0]:"Descripción no disponible",g=o.images&&o.images[0]?o.images[0]:"";let p="";g.includes("youtube.com")||g.includes("vimeo.com")?p=`
                <iframe class="project_img"
                    src="${g}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>`:/\.(mp4|webm|ogg)$/i.test(g)?p=`
                <video class="project_img" controls>
                    <source src="${g}" type="video/${g.split(".").pop()}">
                </video>`:p=`<img class="project_img js-images" src="${g}" alt="${f}" data-id="${o.id}"/>`,i.innerHTML+=`
            <a href="./template-each-project.html?id=${o.id}" class="project-link">
                ${p}
                <p>${o.title}</p>
            </a>`}),l()}function l(){const n=document.querySelectorAll(".js-images");for(const s of n)s.addEventListener("click",e)}function e(n){const o=n.target.dataset.id;o&&(window.location.href=`./template-each-project.html?id=${o}`)}function c(){const n=a.value,s=n===""?u:u.filter(o=>o.type===n);d(s),console.log(s)}a.addEventListener("change",c),d(u)});document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".js-container"),a=new URLSearchParams(window.location.search);let d=parseInt(a.get("id")),l="",e=0;console.log("Project ID desde la URL:",d);function c(t){return console.log(typeof u),u.find(m=>m.id===t)}function n(){const t=c(d);if(!t){i.innerHTML="<p>No se encontró el proyecto.</p>";return}l="";for(let m=0;m<t.images.length;m++){const r=t.images[m],v=t.imageDescriptions[m];r.includes("youtube.com")||r.includes("vimeo.com")?l+=`<iframe class="js-gallery_media" 
                          src="${r}" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen></iframe>`:r.match(/\.(mp4|webm|ogg)$/)?l+=`<video class="video js-gallery_media" controls>
                       <source src="${r}" type="video/${r.split(".").pop()}">
                     </video>`:l+=`<img class="gallery_img js-gallery_img" src="${r}" alt="${v}" data-index="${m}"/>`}i.innerHTML=` 
      <div class="content_gallery">${l}</div>
      <div class="content_text">
        <div>
          <h2 class="content_h2">${t.title}</h2>
          <p class="content_p">${t.desc}</p>
          <p class="content_p">${t.date}</p>
        </div>
        <div class="category">
          <h4>CATEGORÍA</h4>
          <p>${t.category||"Proyectos"}</p>
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
      </div>`,g()}const s=document.querySelector(".js-btn_scroll_left"),o=document.querySelector(".js-btn_scroll_right");function f(t){const r=(u.findIndex(_=>_.id===d)+t+u.length)%u.length,v=u[r];window.location.search=`?id=${v.id}`}o.addEventListener("click",()=>f(1)),s.addEventListener("click",()=>f(-1)),n();function g(){const t=document.querySelectorAll(".js-gallery_img"),m=document.querySelector(".js-mymodal"),r=document.querySelector(".js-imgModal"),v=document.querySelector(".js-close"),_=document.querySelector(".js-scroll_left"),$=document.querySelector(".js-scroll_right"),L=document.querySelector(".js-caption");if(!m||!r||!v||!_||!$||!L){console.warn("Elementos del modal no encontrados.");return}let E=t.length;t.forEach((y,h)=>{y.dataset.index=h,y.addEventListener("click",function(){m.style.display="block",r.src=y.src,r.alt=y.alt,e=h,k(e,E,L)})}),_.addEventListener("click",()=>S(-1,E,L)),$.addEventListener("click",()=>S(1,E,L));function S(y,h,b){e+=y,e<0?e=t.length-1:e>=t.length&&(e=0),r.src=t[e].src,r.alt=t[e].alt,k(e,h,b)}function k(y,h,b){b.textContent=`${y+1}/${h}`}v.addEventListener("click",function(){m.style.display="none"})}const p=document.querySelector(".share-container"),j=document.querySelector(".share-button");j&&p&&(j.addEventListener("click",()=>{p.classList.toggle("active")}),document.addEventListener("click",t=>{!p.contains(t.target)&&t.target!==j&&p.classList.remove("active")}))});document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".js-container_exh");function a(){const d=[...I].sort((e,c)=>c.id-e.id);let l="";for(const e of d){const c=e.images[0]||"",n=e.imageDescriptions[0]||"Descripción no disponible";let s="";c.includes("youtube.com")||c.includes("vimeo.com")?s=`<iframe class="section_video"
                          src="${c}" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen></iframe>`:/\.(mp4|webm|ogg)$/i.test(c)?s=`<video class="section_video" controls>
                        <source src="${c}" type="video/${c.split(".").pop()}">
                      </video>`:s=`<img class="section_img" src="${c}" alt="${n}"/>`;let o="";if(e.logo&&e.logo.length>0)for(const f of e.logo)o+=`<img class="article_img" src="${f}" alt="Logo de la exposición: ${e.title}">`;l+=`
      <section class="section">
      <div class="div_media">
        
        ${s}
        
      </div>
      <article class="article">
        <a href="${e.url}" target="_blank">
        ${o}</a>         
        <div>
          <h3 class="article_h3">${e.title}</h3>
          <p>${e.desc}</p>
          <p class="article_date">${e.date}</p>            
        </div>
        </article>
      </section>`}i.innerHTML=l}a()});document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".js-about_img"),a=document.getElementById("myoverlay"),d=document.getElementById("imgoverlay"),l=document.getElementById("caption"),e=document.querySelector(".js-close");let c=document.querySelector(".js-img_special");const n="/images/me/me_17.jpg";i.forEach(s=>{l.style.fontStyle="italic",s.addEventListener("click",function(){a.style.display="block",d.src=this.src})}),e.addEventListener("click",function(){a.style.display="none"}),c.addEventListener("click",function(){a.style.display="block",d.src=n})});
//# sourceMappingURL=main.js.map
