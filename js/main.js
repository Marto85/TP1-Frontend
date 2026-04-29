document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-interaccion');
    
    btn.addEventListener('click', () => {
        // Scroll suave hacia los integrantes
        document.getElementById('integrantes').scrollIntoView({ behavior: 'smooth' });
        
        // Un pequeño efecto visual
        btn.innerHTML = "Explorando...";
        setTimeout(() => { btn.innerHTML = "Descubrir Equipo"; }, 2000);
    });
});