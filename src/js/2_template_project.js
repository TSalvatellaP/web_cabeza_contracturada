import data from "./data.json";
const articleProject = document.querySelector ('.js-project');
//Funcion para pintar el projecto en el html
function renderDataProject (){   
 //el id del proyecto proviene de la URL 
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));
//utilizo esa variable para buscar el proyecto qie se tiene que pintar:
const project = data.find((item) => item.id === projectId);
  let allImages = "";
  for (const images of project.images){
    allImages += `<img class="art_img" src="${images}" alt="${project.title}"/>`;
  }
      // for (const project of data){ Recorro project.images para pintar todas del proyecto
      articleProject.innerHTML +=`
        ${allImages}
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
   
  renderDataProject ();
  
  
  
  
  