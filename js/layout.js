document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.querySelector('#navbar-container');

    if (headerElement) {
        headerElement.innerHTML = `
            <nav class="navbar">
                <a href="index.html" class="nav-logo"> Dev<span>Team</span> </a>
                <ul class="nav-links">
                    <li><a href="index.html" id="link-inicio">Inicio</a></li>
                    <li><a href="bitacora.html" id="link-bitacora">Bitácora</a></li>
                </ul>
            </nav>
        `;

        // Marcar link activo según la página actual
        const path = window.location.pathname;
        if (path.includes("index.html") || path === "/") {
            document.getElementById('link-inicio').classList.add('active');
        } else if (path.includes("bitacora.html")) {
            document.getElementById('link-bitacora').classList.add('active');
        }
    }
});