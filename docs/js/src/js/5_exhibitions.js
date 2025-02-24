import{d}from"../../../assets/exhibitions-bc59c66c.js";document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".js-container_exh");function a(){const l=[...d].sort((e,o)=>o.id-e.id);let i="";for(const e of l){const o=e.images[0]||"",n=e.imageDescriptions[0]||"Descripción no disponible";let t="";o.includes("youtube.com")||o.includes("vimeo.com")?t=`<iframe class="section_video"
                          src="${o}" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen></iframe>`:/\.(mp4|webm|ogg)$/i.test(o)?t=`<video class="section_video" controls>
                        <source src="${o}" type="video/${o.split(".").pop()}">
                      </video>`:t=`<img class="section_img" src="${o}" alt="${n}"/>`;let s="";if(e.logo&&e.logo.length>0)for(const r of e.logo)s+=`<img class="article_img" src="${r}" alt="Logo de la exposición: ${e.title}">`;i+=`
      <section class="section">
      <div class="div_media">
        
        ${t}
        
      </div>
      <article class="article">
        <a href="${e.url}" target="_blank">
        ${s}</a>         
        <div>
          <h3 class="article_h3">${e.title}</h3>
          <p>${e.desc}</p>
          <p class="article_date">${e.date}</p>            
        </div>
        </article>
      </section>`}c.innerHTML=i}a()});
//# sourceMappingURL=5_exhibitions.js.map
