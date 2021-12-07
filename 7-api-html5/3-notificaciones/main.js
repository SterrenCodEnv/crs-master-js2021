// Comprobar compatibilidad
if(Notification == undefined){
    window.location.href = 'google.com'
}

// Pedir permisos para habilitar notificaciones
if(Notification.permission !== "granted"){
    Notification.requestPermission();
}

const principal = "Título de Notificación"
const opciones = {
    body: "Cuerpo de la notificación, con su correspondiente explicación.",
    icon: "https://img.icons8.com/color/48/000000/puzzle.png"
}

const notificacion = new Notification(principal, opciones);

notificacion.onclick = () => {
    event.preventDefault();
    window.location.href = "https://www.google.com";
}

// Expiración
setTimeout(() => {
    notificacion.close
}, 5000);

