import data from "./data.json";
console.log(data);


//Funcion para pintar el projecto en el html
function renderDataProject (){   
    const project = data.find((item) => item.id === parseInt(projectId));
  // tiene que recorrer el array de imágenes para que recorra cada una de las imagenes y pare el bucle cuando sea superir al tamaño del array
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
  
  
  
  
  