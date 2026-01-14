
# Proyecto Web: Maestro Jacob

Este repositorio contiene la versión estática y optimizada del sitio web "Maestro Jacob", convertido desde una plantilla de Blogger a un proyecto moderno basado en HTML5, CSS3 y JavaScript.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

*   **`index.html`**: Página principal del sitio.
*   **`src/`**: Código fuente de estilos y scripts.
    *   **`css/style.css`**: Hoja de estilos principal (extraída y procesada).
    *   **`js/script.js`**: Lógica JavaScript del sitio.
*   **`public/`**: Archivos estáticos públicos.
    *   **`images/`**: Todas las imágenes descargadas y optimizadas localmente.
*   **`original-template/`**: Contiene el archivo XML original de Blogger para referencia.

## Tecnologías

*   **Vite**: Utilizado como entorno de desarrollo y empaquetador para producción.
*   **HTML5 / CSS3 / JavaScript**: Stack principal.
*   **Vercel**: Configurado para despliegue automático (`vercel.json`).

## Instalación y Uso

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:5173/`.

3.  **Construir para producción:**
    ```bash
    npm run build
    ```
    Esto generará los archivos estáticos en la carpeta `dist/`.

## Despliegue

Este proyecto está listo para ser desplegado en Vercel. Simplemente conecta tu repositorio de GitHub a Vercel y el despliegue se realizará automáticamente utilizando la configuración detectada de Vite.
