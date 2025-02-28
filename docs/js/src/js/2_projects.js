import{d as n}from"../../../assets/projects-cc1ae57a.js";document.addEventListener("DOMContentLoaded",()=>{console.log(n);const a=document.querySelector(".js-gallery"),s=document.getElementById("optionSelect");function l(t){if(a.innerHTML="",!t||t.length===0){a.innerHTML="<p>No hay proyectos para mostrar.</p>";return}[...t].sort((e,r)=>r.id-e.id).forEach(e=>{const r=e.imageDescriptions&&e.imageDescriptions[0]?e.imageDescriptions[0]:"Descripción no disponible",o=e.images&&e.images[0]?e.images[0]:"";let i="";o.includes("youtube.com")||o.includes("vimeo.com")?i=`
                <iframe class="project_img"
                    src="${o}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>`:/\.(mp4|webm|ogg)$/i.test(o)?i=`
                <video class="project_img" controls>
                    <source src="${o}" type="video/${o.split(".").pop()}">
                </video>`:i=`<img class="project_img js-images" src="${o}" alt="${r}" data-id="${e.id}"/>`,a.innerHTML+=`
            <a href="./template-each-project.html?id=${e.id}" class="project-link">
                ${i}
                <p>${e.title}</p>
            </a>`}),d()}function d(){const t=document.querySelectorAll(".js-images");for(const c of t)c.addEventListener("click",m)}function m(t){const e=t.target.dataset.id;e&&(window.location.href=`./template-each-project.html?id=${e}`)}function p(){const t=s.value,c=t===""?n:n.filter(e=>e.type===t);l(c),console.log(c)}s.addEventListener("change",p),l(n)});
//# sourceMappingURL=2_projects.js.map
