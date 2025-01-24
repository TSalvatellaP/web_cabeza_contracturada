import data from "./data.json";
console.log(data);

/* 
1- En el menu de projectos al clickar en una imagen, tiene que abrir la página de ese proyecto. (un evento llama al id concreto del proyecto) click === data.id
2- Se abre la página nueva de un projecto. Ahi es donde se tiene que pintar 
Funciones: una función para pintar el objeto (article)
Otra función para recorrer los arrays y pintar todos los objetos
ejecutar al cargar la página la función que recorre el array

*/
const gallery = document.querySelector ('.js-gallery');
const articleProject = document.querySelector ('.js-project');


//función para recorrer el array y que devuelva todos lo projectos. Esta función hay que llamarla en la página projects.html para no tener que ir añadiendo projectos nuevos, que vaya creciendo la lista

function renderGallery (){
    for (const project of data){
    gallery.innerHTML += 
    `<a href="./template_project.html?id=${project.id}" class="project-link">
        <img class="project_img js-img" src="${project.images[0]}" alt="${project.title}" data-id="${project.id}">
        <p>${project.title}</p>
      </a>`;
    }  
    // Seleccionar todas las imagenes,  recorrerlas y escuchar el ev sobre cada una de las  imagenes
    imgProject.addEventListener ('click', handleClickImg);
  }
 
renderGallery ();

//Funcion manejadora, al hacer click en la imagen, se abre la página del proyecto. ESto lo he copiado, no sé si funciona.
function handleClickImg (event) {
  const clickedImg = event.target;
  const projectId = clickedImg.dataset.id; // Obtener el ID del proyecto
  if (projectId) {
    window.location.href = `./template_project.html?id=${projectId}`;
  }
}

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




