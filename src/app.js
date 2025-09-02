// Versión mejorada
function saludar(mensaje = "Hola universo", repeticiones = 4) {
    for (let i = 0; i < repeticiones; i++) {
        console.log(`${i + 1}. ${mensaje}`);
    }
}

// Ejemplos de uso
saludar(); // Usa valores por defecto
saludar("Hola mundo", 3); // Mensaje personalizado
saludar("¡Bienvenidos!", 2); // Otro ejemplo
