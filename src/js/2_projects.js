import dataProject from "../data/projects.json";
document.addEventListener('DOMContentLoaded', () => {
console.log(dataProject);
const gallery = document.querySelector('.js-gallery');
const optionSelect = document.getElementById('optionSelect');

function renderGallery(projects) {
    gallery.innerHTML = "";

    if (!projects || projects.length === 0) {
        gallery.innerHTML = "<p>No hay proyectos para mostrar.</p>";
        return;
    }
    const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
    sortedProjects.forEach(item => {
        const imageDescription = item.imageDescriptions && item.imageDescriptions[0] ? item.imageDescriptions[0] : "Descripción no disponible";
        const mediaSrc = item.images && item.images[0] ? item.images[0] : "";

        let mediaElement = "";
        if (mediaSrc.includes("youtube.com") || mediaSrc.includes("vimeo.com")) {
            mediaElement = `
                <iframe class="project_img"
                    src="${mediaSrc}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>`;
        } else if (/\.(mp4|webm|ogg)$/i.test(mediaSrc)) {
            mediaElement = `
                <video class="project_img" controls>
                    <source src="${mediaSrc}" type="video/${mediaSrc.split('.').pop()}">
                </video>`;
        } else {
            mediaElement = `<img class="project_img js-images" src="${mediaSrc}" alt="${imageDescription}" data-id="${item.id}"/>`;
        }

        gallery.innerHTML += `
            <a href="./template-each-project.html?id=${item.id}" class="project-link">
                ${mediaElement}
                <p>${item.title}</p>
            </a>`;
    });
    addImageClickEvents();
}

function addImageClickEvents() {
    const allImages = document.querySelectorAll('.js-images');
    for (const oneImage of allImages) {
        oneImage.addEventListener('click', handleClickImg);
    }
}

function handleClickImg(event) {
    const clickedImg = event.target;
    const projectId = clickedImg.dataset.id;
    if (projectId) {
        window.location.href = `./template-each-project.html?id=${projectId}`;
    }
}

function handleOptionSelect() {
    const selectedCategory = optionSelect.value;
    const filteredData = selectedCategory === '' ? dataProject : dataProject.filter(item => item.type === selectedCategory);
    renderGallery(filteredData);
    console.log(filteredData);
}

optionSelect.addEventListener('change', handleOptionSelect);
renderGallery(dataProject);
});