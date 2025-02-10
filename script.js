document.getElementById("boton-inicio").addEventListener("click", function() {
    // Ocultar el mensaje inicial y el botón de inicio
    document.getElementById("mensaje-inicial").classList.add("oculto");
    this.classList.add("oculto");

    // Mostrar la primera pregunta
    document.getElementById("pregunta-1").classList.remove("oculto");

    // Generar pétalos de rosa animados al hacer clic en el botón
    for (let i = 0; i < 15; i++) {
        crearPetalo();
    }

    // Seguir generando pétalos cada 0.5 segundos
    setInterval(crearPetalo, 500);
});

// Función para mostrar respuesta según la pregunta y la opción seleccionada
function mostrarRespuesta(pregunta, respuesta) {
    const respuestaElement = document.getElementById("respuesta-final");

    // Respuesta para la primera pregunta
    if (pregunta === 1) {
        if (respuesta === "gay") {
            document.getElementById("pregunta-1").classList.add("oculto");
            document.getElementById("pregunta-2").classList.remove("oculto");
        } else if (respuesta === "si") {
            document.getElementById("pregunta-1").classList.add("oculto");
            document.getElementById("pregunta-2").classList.remove("oculto");
        }
    }

    // Respuesta para la segunda pregunta
    if (pregunta === 2) {
        if (respuesta === "no") {
            respuestaElement.querySelector("h2").textContent = "¡Vaya, qué pena! 😞";
            respuestaElement.querySelector("p").textContent = "No pasa nada, ¡quizás en otra ocasión! ;-; 💘";
        } else if (respuesta === "si") {
            respuestaElement.querySelector("h2").textContent = "¡Genial! Estoy emocionadouwu 💕";
            respuestaElement.querySelector("p").textContent = "¡Nos lo pasaremos bien ñiñiñiñiññi 💖";
        }

        // Mostrar la respuesta final y ocultar la segunda pregunta
        document.getElementById("pregunta-2").classList.add("oculto");
        respuestaElement.classList.remove("oculto");
    }
}

// Función para crear un pétalo animado
function crearPetalo() {
    let petalo = document.createElement("div");
    petalo.classList.add("petalos");
    document.body.appendChild(petalo);
    
    let startPosX = Math.random() * window.innerWidth; // Posición horizontal aleatoria
    let startPosY = -50; // Iniciar arriba de la pantalla
    let startDelay = Math.random() * 5; // Retraso aleatorio antes de caer
    let duration = Math.random() * 3 + 3; // Duración aleatoria entre 3 y 6 segundos
    
    petalo.style.left = startPosX + "px"; // Aparecer en una posición horizontal aleatoria
    petalo.style.top = startPosY + "px"; // Aparecer en la parte superior
    petalo.style.animationDuration = duration + "s"; // Duración aleatoria
    petalo.style.animationDelay = startDelay + "s"; // Retraso aleatorio

    setTimeout(() => {
        petalo.remove(); // Eliminar el pétalo después de que termine la animación
    }, (duration + startDelay) * 1000); // Tiempo total de la animación
}
