document.addEventListener('DOMContentLoaded', () => {
    // Configuración de ScrollReveal
    const sr = ScrollReveal({
        duration: 800,
        distance: '60px',
        reset: false, // Mejor dejarlo en false para que no maree al usuario
        viewFactor: 0.1
    });

    // Animaciones de entrada
    sr.reveal('.hero-text', { origin: 'left', delay: 200 });
    sr.reveal('.hero-img', { origin: 'right', delay: 400, scale: 0.8 });
    
    // Cascada para tarjetas
    sr.reveal('.servicio, .card, .member, .mission-box, .razon', { 
        interval: 100, 
        origin: 'bottom',
        rotate: { x: 20, y: 0, z: 0 }, 
        opacity: 0 
    });
});