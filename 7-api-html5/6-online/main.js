window.addEventListener('online', () => {
    alert("Estas conectado");
});

window.addEventListener('offline', () => {
    alert("Estas desconectado");
});

if(navigator.onLine){
    const infoConexion = document.querySelector("#estado");
    infoConexion.innerHTML = `<p style="color: green">¡Estas conectado a la red!</p>`
}
