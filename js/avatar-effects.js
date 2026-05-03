// js/avatar-effects.js

// Seleccionamos por clase, tal como figura en tu integrante1.html
const avatar = document.querySelector('.profile-img');

if (avatar) {
    // Agregamos perspectiva al contenedor padre para que el efecto 3D se note
    avatar.parentElement.style.perspective = "1000px";
    avatar.style.transition = "transform 0.1s ease-out";

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        
        // Obtenemos la posición del centro del avatar
        const rect = avatar.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculamos la distancia del mouse respecto al centro
        // Usamos una división para suavizar la rotación
        const rotateY = (clientX - centerX) / 15;
        const rotateX = (centerY - clientY) / 15;

        // Aplicamos la rotación dinámica
        avatar.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    // Resetear la posición cuando el mouse sale de la pantalla
    document.addEventListener('mouseleave', () => {
        avatar.style.transition = "transform 0.5s ease-in-out";
        avatar.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
}