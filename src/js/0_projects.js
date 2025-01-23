"use strict";
import data from "./data.json";
console.log(data);

/* 
1- En el menu de projectos al clickar en una imagen, tiene que abrir la página de ese proyecto. (un evento llama al id concreto del proyecto) click === data.id
2- Se abre la página nueva de un projecto. Ahi es donde se tiene que pintar 
Funciones: una función para pintar el objeto (article)
Otra función para recorrer los arrays y pintar todos los objetos
ejecutar al cargar la página la función que recorre el array

*/
//Me traigo el article donde voy a pintar el project
const articleProject = document.querySelector ('.js-project');

//Funcion para pintar el projecto en el html
function renderProject (data){   
    return `
    <img class="art_img" src="${data.image}" alt="${data.title}">
          <img class="art_img" src="${data.image}" alt="${data.title}">
          <img class="art_img" src="${data.image}" alt="${data.title}">
          <div class="content_text">
            <div>
              <h2 class="content_h2" >${data.title}</h2>
              <p class="content_p">${data.desc}.</p>
            </div>
            <div class="category">
              <h4>CATEGORÍA</h4>
                     <p>Proyectos</p>
                     <h6>Comparte</h6>
            </div>
          </div>`;
}
renderProject (data);

//función para recorrer el array y que devuelva todos
function listProject(){
  for (const oneProject of data){
    articleProject.innerHTML += renderProject (oneProject);
  }
}

listProject();

// tiene que recorrer el array de imágenes para que recorra cada una de las imagenes y pare el bucle cuando sea superir al tamaño del array
for (let i = 0; i < images.length; i++){
  console.log (images [i]);
}