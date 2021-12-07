// Comprobar disponibilidad
if (navigator.geolocation !== true) {
    alert("Acuerdate de activar los permisos de geolocalización")
}

// Obtener posición
navigator.geolocation.getCurrentPosition((position) => {
    const latitud = position.coords.latitude
    const longitud = position.coords.longitude;

    let infoBody = document.querySelector("#info");
    infoBody.innerHTML = `<p>Latitud: ${latitud}</p>`
    infoBody.innerHTML += `<p>Longitud: ${longitud}</p>`
},
error => {
    console.log(error);
});