function toggleProfile() {
    const perfil = document.getElementById('perfil-section');
    const intereses = document.getElementById('intereses-section');
    const button = document.getElementById('btn-toggle-info');

    const showingPerfil = perfil.style.display !== 'none';

    if (showingPerfil) {
        perfil.style.display = 'none';
        intereses.style.display = 'block';
        button.innerText = 'Ver Perfil';
    } else {
        intereses.style.display = 'none';
        perfil.style.display = 'block';
        button.innerText = 'Ver Intereses';
    }
}