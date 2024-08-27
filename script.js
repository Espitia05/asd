function actualizarFechaHora() {
    const now = new Date();
    const fechaHora = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById('fecha-hora').innerText = fechaHora;
}

setInterval(actualizarFechaHora, 1000);
