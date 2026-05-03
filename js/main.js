document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-interaccion');

    if (btn) {
        btn.addEventListener('click', () => {
            const integrantes = document.getElementById('integrantes');

            if (integrantes) {
                // Scroll suave hacia los integrantes
                integrantes.scrollIntoView({ behavior: 'smooth' });
            }

            // Un pequeño efecto visual
            btn.innerHTML = 'Explorando...';
            setTimeout(() => { btn.innerHTML = 'Descubrir Equipo'; }, 2000);
        });
    }

    const btnTop = document.createElement('button');
    btnTop.id = 'btn-scroll-top';
    btnTop.type = 'button';
    btnTop.textContent = 'Subir';

    Object.assign(btnTop.style, {
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: '1000',
        padding: '10px 14px',
        border: 'none',
        borderRadius: '999px',
        background: 'var(--accent)',
        color: 'var(--bg-dark)',
        fontWeight: '600',
        cursor: 'pointer',
        opacity: '0',
        visibility: 'hidden',
        transform: 'translateY(10px)',
        transition: 'all 0.25s ease'
    });

    document.body.appendChild(btnTop);

    const toggleScrollTopButton = () => {
        const shouldShow = window.scrollY > 220;

        if (shouldShow) {
            btnTop.style.opacity = '1';
            btnTop.style.visibility = 'visible';
            btnTop.style.transform = 'translateY(0)';
        } else {
            btnTop.style.opacity = '0';
            btnTop.style.visibility = 'hidden';
            btnTop.style.transform = 'translateY(10px)';
        }
    };

    window.addEventListener('scroll', toggleScrollTopButton);
    toggleScrollTopButton();

    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});