# TP1 Frontend Grupal

## Descripción del proyecto

Este es un trabajo práctico de la materia de Front End que presenta un sitio web estático de equipo.
La página muestra un landing page con un equipo de desarrolladores, tarjetas de integrantes y perfiles individuales.
La propuesta busca combinar diseño moderno, interacción simple y un estilo visual oscuro con acentos en azul.

## Estructura del proyecto

- `index.html`: página principal con la introducción del equipo y acceso a los perfiles.
- `integrante1.html`, `integrante2.html`, `integrante3.html`, `integrante4.html`: páginas de perfil individuales.
- `css/styles.css`: estilos generales, diseño de tarjetas, responsive y temas de color.
- `js/main.js`: interacción de botón para scroll suave y efecto de estado.
- `js/layout.js`: carga dinámica del menú de navegación en todas las páginas.
- `img/`: carpeta con avatares e imágenes del proyecto.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Fuentes de Google Fonts (`Lexend`)

## Funciones implementadas (qué hacen y dónde están)

### 1) `toggleProfile()`

- **Archivo:** `js/cards.js`
- **Qué hace:** alterna entre la vista de **Perfil** (habilidades) y la vista de **Intereses** en cada tarjeta de integrante.
- **Cómo funciona:**
  - Oculta o muestra `#perfil-section` y `#intereses-section`.
  - Cambia el texto del botón entre **"Ver Intereses"** y **"Ver Perfil"**.
- **Dónde se usa:** páginas de integrantes (`integrante1.html`, `integrante2.html`, `integrante3.html`, `integrante4.html`), en la sección de perfil dentro de `.info-section` mediante el botón `#btn-toggle-info`.

### 2) Inicialización de navegación (`DOMContentLoaded` en `layout.js`)

- **Archivo:** `js/layout.js`
- **Qué hace:** construye dinámicamente la barra de navegación común del sitio.
- **Cómo funciona:**
  - Inserta el HTML del menú dentro de `#navbar-container`.
  - Crea enlaces a **Inicio** y **Bitácora**.
  - Detecta la ruta actual y marca el link activo (`.active`).
- **Dónde se usa:** en todas las páginas que incluyen `<header id="navbar-container"></header>`.

### 3) Interacción del botón principal (`DOMContentLoaded` en `main.js`)

- **Archivo:** `js/main.js`
- **Qué hace:** gestiona la interacción del botón de la hero en la landing.
- **Cómo funciona:**
  - Escucha click sobre `#btn-interaccion`.
  - Hace scroll suave hacia `#integrantes`.
  - Cambia temporalmente el texto del botón a **"Explorando..."** y luego vuelve a **"Descubrir Equipo"**.
- **Dónde se usa:** `index.html`, sección hero (botón principal) y sección de integrantes.

### 4) Botón flotante "Subir" (`main.js`)

- **Archivo:** `js/main.js`
- **Qué hace:** agrega un botón flotante para volver al inicio de la página.
- **Cómo funciona:**
  - Crea dinámicamente el botón `#btn-scroll-top` y lo agrega al `body`.
  - Muestra u oculta el botón según el desplazamiento vertical (scrollY > 220).
  - Al hacer click, ejecuta `window.scrollTo({ top: 0, behavior: 'smooth' })`.
- **Dónde se usa:** en todas las páginas que cargan `js/main.js` (actualmente `index.html` y `bitacora.html`).

## Uso de inteligencia artificial en el proyecto

### Herramientas y modelos

- **ChatGPT**: utilizado como asistente para escribir contenido, mejorar la redacción, dar forma al README y revisar la lógica general del sitio.
- **Gemini**: utilizado para generar los avatares basados en imágenes reales de los integrantes y para apoyar la creación de prompts visuales.
- **CLI Copilot**: empleado como ayuda de autocompletado de código durante el desarrollo del HTML y JavaScript.
- **Gemini Code Assist**: consultado para corregir y mejorar estilos CSS, encontrar mejores prácticas en diseño responsivo y ajustar variables de color.

### Uso en contenido y código

- ChatGPT ayudó a traducir las ideas del grupo en un texto profesional y natural, respetando el tono de un trabajo práctico para la materia.
- Copilot CLI contribuyó a acelerar la escritura de funciones simples y estructuras HTML, evitando errores comunes de sintaxis.
- Gemini Code Assist sirvió para optimizar selectores CSS, mejorar el comportamiento responsive y validar pequeños ajustes visuales.

### Imágenes y avatares

- Los avatares fueron generados con **Gemini** a partir de referencias de imágenes reales de los integrantes.
- Prompt utilizado para las ilustraciones: "Generar un avatar digital profesional y amigable, inspirado en una foto real, para un portfolio de equipo frontend." 


## Estado actual y notas

- El proyecto está funcional como interface de presentación del equipo.
- El desarrollo se realizó con foco en mantener la autoría del grupo, usando IA como asistente técnico y creativo.

## Cómo ejecutar

1. Abrir `index.html` en el navegador con liveServer.
2. Navegar por las tarjetas de integrantes para ver cada perfil.
3. El botón "Descubrir Equipo" realiza scroll suave hacia la sección de miembros.

---

Este README fue preparado para explicar el proyecto y el rol que tuvo la IA en el proceso de desarrollo, manteniendo un lenguaje claro, profesional y orientado a la presentación académica.