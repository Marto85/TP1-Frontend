function toggleProfile() {
    const infoContent = document.getElementById('info-content');
    const button = document.getElementById('btn-toggle-info');
    const card = document.getElementById('user-card');

    // Cambiamos el color de fondo de la tarjeta y el contenido
    if (card.style.borderTop === "5px solid rgb(0, 123, 255)") {
        card.style.borderTop = "5px solid #2ecc71";
        button.innerText = "Ver Perfil Profesional";
        // Aquí podrías cambiar el texto a algo más personal
    } else {
        card.style.borderTop = "5px solid #007bff";
        button.innerText = "Ver Mis Intereses";
    }
}