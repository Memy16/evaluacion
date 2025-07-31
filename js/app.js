document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    
    const nombre = document.getElementById("name").value.trim();
    const cantEntradas = document.getElementById("cantentradas").value.trim();
    const tipoEntrada = document.getElementById("tipoent").value.trim();
    const codDescuento = document.getElementById("cod").value.trim();
    const estadoReserva = document.getElementById("estadoreserva");
    const mensajeFinal = document.getElementById("mensajefinal");
    const mensaje = document.getElementById("mensajeError");
    
    mensaje.textContent = "";
    estadoReserva.textContent = "";
    mensajeFinal.textContent = "";
    
    
    if (nombre.length < 3) {
        mensaje.textContent = "❌ El nombre debe tener al menos 3 caracteres.";
        return;
    }
    
    if (cantEntradas.length = "" || isNaN(cantEntradas) || parseInt(cantEntradas) <= 0) {
        mensaje.textContent = "❌ Ingrese una cantidad válida";
        return;
    }
    
    if (tipoEntrada === "") {
        mensaje.textContent = "❌ Seleccione un tipo de entrada.";
        return;
    }
    
    let precioEntrada = 0;
    if (tipoEntrada.toLowerCase() === "general") {
        precioEntrada = 1000;
    } else if (tipoEntrada.toLowerCase() === "vip") {
        precioEntrada = 2000;
    } else {
        mensaje.textContent = "❌ Seleccione un tipo de entrada, 'general' o 'vip'.";
        return;
    }
    
    const cantidad = parseInt(cantEntradas);
    let valorTotal = precioEntrada * cantidad;
    let precioFinalEntrada = precioEntrada; 
    
    if (codDescuento === "ROCK10") {
        valorTotal = valorTotal * 0.9; 
        precioFinalEntrada = precioEntrada * 0.9; 
    }
    
    estadoReserva.textContent = "✅ Reserva confirmada"
    
    mensajeFinal.textContent = "Hola " + nombre + ", pagarás $" +  valorTotal + "." + " Precio por entrada: $" + precioFinalEntrada;
    
});