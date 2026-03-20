// carrusel.js - Bucle infinito real con clonación

document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('carruselTrack');
    
    if (!track) return;
    
    function inicializarCarrusel() {
        // Guardar los elementos originales
        const serviciosOriginales = Array.from(track.children);
        const totalOriginal = serviciosOriginales.length;
        
        // Limpiar clones anteriores
        while (track.children.length > totalOriginal) {
            track.removeChild(track.lastChild);
        }
        
        // Clonar los servicios para crear el bucle infinito
        serviciosOriginales.forEach(servicio => {
            const clon = servicio.cloneNode(true);
            track.appendChild(clon);
        });
        
        // Calcular el ancho total de los originales para la animación
        calcularAnchoAnimacion(serviciosOriginales);
    }
    
    function calcularAnchoAnimacion(servicios) {
        let anchoTotal = 0;
        const gap = parseInt(window.getComputedStyle(track).gap) || 25;
        
        servicios.forEach(servicio => {
            anchoTotal += servicio.offsetWidth + gap;
        });
        
        // Actualizar el keyframe de la animación
        actualizarKeyframe(anchoTotal);
    }
    
    function actualizarKeyframe(ancho) {
        let styleTag = document.getElementById('carrusel-keyframes');
        
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'carrusel-keyframes';
            document.head.appendChild(styleTag);
        }
        
        styleTag.textContent = `
            @keyframes scrollBucle {
                0% { transform: translateX(0); }
                100% { transform: translateX(-${ancho}px); }
            }
        `;
    }
    
    // Inicializar después de cargar
    window.addEventListener('load', function() {
        inicializarCarrusel();
    });
    
    // Recalcular en resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(inicializarCarrusel, 150);
    });
});