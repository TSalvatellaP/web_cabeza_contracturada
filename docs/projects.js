import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                    */import"./js/main.js";import{d as n}from"./assets/projects-ebedcfb4.js";const a=document.querySelector(".js-gallery"),l=document.getElementById("optionSelect");function s(t){if(a.innerHTML="",!t||t.length===0){a.innerHTML="<p>No hay proyectos para mostrar.</p>";return}[...t].sort((e,r)=>r.id-e.id).forEach(e=>{const r=e.imageDescriptions[0]||"Descripción no disponible",o=e.images&&e.images[0]?e.images[0]:"";let i="";o.includes("youtube.com")||o.includes("vimeo.com")?i=`
        <iframe class="project_img"
          src="${o}" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>`:/\.(mp4|webm|ogg)$/i.test(o)?i=`
        <video class="project_img controls>
          <source src="${o}" type="video/${o.split(".").pop()}">
        </video>`:i=`<img class="project_img js-images" src="${o}" alt="${r}" data-id="${e.id}"/>`,a.innerHTML+=`
       <a href="./template-each-project.html?id=${e.id}" class="project-link">
       ${i}
       <p>${e.title}</p>
      </a>`}),d()}function d(){const t=document.querySelectorAll(".js-images");for(const c of t)c.addEventListener("click",m)}function m(t){const e=t.target.dataset.id;e&&(window.location.href=`./template-each-project.html?id=${e}`)}function p(){const t=l.value,c=t===""?n:n.filter(e=>e.type===t);s(c),console.log(c)}l.addEventListener("change",p);s(n);
//# sourceMappingURL=projects.js.map
