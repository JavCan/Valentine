document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const card = document.querySelector(".card");
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    let isMoved = false;  

    // Funcionalidad de la carta
    container.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-90px)";
    });

    container.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });

        // Eventos para móvil
    container.addEventListener("touchstart", function(e) {
        if (isMoved) {
            // Si ya se movió, lo devolvemos a su posición original
            card.style.transform = "translateY(0)";
        } else {
            // Si no se ha movido, lo movemos
            card.style.transform = "translateY(-90px)";
        }
    
        // Alternamos el estado
        isMoved = !isMoved;
    });

        // Eventos para móvil
    noBtn.addEventListener("touchstart", function(e) {
        e.preventDefault();
        moveButton();
    });

    noBtn.addEventListener("touchend", function(e) {
        e.preventDefault();
        moveButton();
    });

    // Función para mover el botón a una posición aleatoria
    function moveButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        // Asegurar que el botón no se salga de la pantalla
        const randomX = Math.min(Math.max(20, Math.random() * maxX), maxX - 20);
        const randomY = Math.min(Math.max(20, Math.random() * maxY), maxY - 20);
        
        noBtn.style.position = "fixed";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }

    // Eventos para desktop
    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("mouseenter", moveButton);

    // Eventos para móvil
    noBtn.addEventListener("touchstart", function(e) {
        e.preventDefault();
        moveButton();
    });

    noBtn.addEventListener("touchend", function(e) {
        e.preventDefault();
        moveButton();
    });

    // Evento click para asegurar que siempre se mueva
    noBtn.addEventListener("click", function(e) {
        e.preventDefault();
        moveButton();
    });

    // Funcionalidad del botón "Sí" - Redirección a nueva página
    yesBtn.addEventListener("click", function() {
        window.location.href = "gracias.html"; // Cambia esto por la ruta de tu página de agradecimiento
    });

    // Prevenir que el botón "No" se quede quieto si el usuario mantiene presionado
    noBtn.addEventListener("touchmove", function(e) {
        e.preventDefault();
    });
});
