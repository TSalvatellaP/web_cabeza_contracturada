import data from "./data.json";
/* 
1- En el menu de projectos al clickar en una imagen, tiene que abrir la página de ese proyecto. (un evento llama al id concreto del proyecto) click === data.id
2- Se abre la página nueva de un projecto. Ahi es donde se tiene que pintar 
Funciones: una función para pintar el objeto (article)
Otra función para recorrer los arrays y pintar todos los objetos
ejecutar al cargar la página la función que recorre el array

*/
const gallery = document.querySelector ('.js-gallery');

//función para recorrer el array y que devuelva todos lo projectos. Esta función hay que llamarla en la página projects.html para no tener que ir añadiendo projectos nuevos, que vaya creciendo la lista

function renderGallery (){
  const sortedData = [...data].sort((a, b) => b.id - a.id);
  let allMedia = ""; 
    for (const project of sortedData){
      
    gallery.innerHTML += 
    `<a href="./template_project.html?id=${project.id}" class="project-link js-images ">
        <img class="project_img js-img" src="${project.images[0]}" alt="${project.title}" data-id="${project.id}">
        <p>${project.title}</p>
      </a>`;
    }
    // Seleccionar todas las imagenes,  recorrerlas y escuchar el ev sobre cada una de las  imagenes
    const allImages = document.querySelectorAll  ('.js-images');  
    for (const oneImage of allImages){
      oneImage.addEventListener ('click', handleClickImg);

    }
  
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

