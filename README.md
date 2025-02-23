# WEB_CABEZA_CONTRACTURADA

Este proyecto es una aplicación web que muestra un portafolio o un sitio web creativo, utilizando JavaScript modular, SCSS para estilos y datos JSON.

## Funcionalidades Principales

* **Página de Proyectos**:
    * Filtrado dinámico de proyectos por categoría.
    * Galería de proyectos con imágenes, videos y enlaces a páginas individuales.
* **Página Individual de Proyecto**:
    * Visualización detallada de cada proyecto con imágenes, videos, descripción y fecha.
    * Navegación entre proyectos.
    * Modal para compartir en redes sociales.
* **Página de Exposiciones**:
    * Renderizado dinámico de exposiciones con imágenes, videos, descripción y logos.
* **Página de Inicio**:
    * Carrusel de imágenes.
* **Menú de Navegación**:
    * Menú desplegable para navegación en dispositivos móviles.

## Estructura del Proyecto
├── docs/
├── node_modules/
├── public/
├── src/
│   ├── js/
│   │   ├── 0_projects.js
│   │   ├── 1_menu.js
│   │   ├── 2_template-each-project.js
│   │   ├── 3_landing.js
│   │   ├── 4_about.js
│   │   ├── 5_exhibitions.js
│   │   ├── exhibitions.json
│   │   ├── main.js
│   │   └── projects.json
│   ├── partials/
│   │   ├── footer.html
│   │   ├── header.html
│   │   └── landing.html
│   ├── scss/
│   │   ├── core/
│   │   ├── layout/
│   │   │   ├── _about.scss
│   │   │   ├── _exhibitions.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   ├── _landing.scss
│   │   │   ├── _mind.scss
│   │   │   ├── _projects.scss
│   │   │   ├── _template-each-project.scss
│   │   │   ├── _workshops.scss
│   │   │   └── main.scss
│   ├── about.html
│   ├── exhibitions.html
│   ├── index.html
│   ├── mind.html
│   ├── projects.html
│   ├── template-each-project.html
│   └── workshops.html
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── package-lock.json
└── package.json

## Descripción de las Carpetas y Archivos

* **`docs/`**: Documentación del proyecto.
* **`node_modules/`**: Dependencias del proyecto gestionadas por npm.
* **`public/`**: Archivos estáticos servidos directamente al navegador.
* **`src/`**: Código fuente principal.
    * **`js/`**: Archivos JavaScript modulares.
        * `0_projects.js`, `1_menu.js`, `2_template-each-project.js`, `3_landing.js`, `4_about.js`, `5_exhibitions.js`: Módulos para diferentes secciones del sitio.
        * `main.js`: Punto de entrada principal para JavaScript.
        * `exhibitions.json`, `projects.json`: Datos JSON para exposiciones y proyectos.
    * **`partials/`**: Fragmentos HTML reutilizables.
        * `footer.html`, `header.html`, `landing.html`: Partes de la interfaz de usuario.
    * **`scss/`**: Archivos SCSS para estilos.
        * `core/`: Estilos base, variables y mixins.
        * `layout/`: Estilos de diseño general y específicos para cada sección.
        * `main.scss`: Archivo SCSS principal que compila todos los estilos.
    * Archivos HTML: Páginas principales del sitio.
* **.eslintrc.json**: Configuración de ESLint.
* **.gitignore**: Archivos ignorados por Git.
* **LICENSE**: Licencia del proyecto.
* **package-lock.json**, **package.json**: Gestión de dependencias npm.

## Tecnologías Utilizadas

* JavaScript (ES6+)
* SCSS
* HTML
* JSON
* npm

## Configuración

1.  Clona el repositorio.
2.  Instala las dependencias: `npm install`.
3.  Compila SCSS a CSS (si es necesario).
4.  Abre `index.html` en tu navegador.

