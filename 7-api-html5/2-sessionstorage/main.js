// Comprobar compatibilidad de navegador
if(typeof(Storage) == 'undefined'){
    window.location.href = 'google.com'
}

// Almacenar datos de sesión en navegador
sessionStorage.setItem("nombre", "José");
sessionStorage.setItem("apellido", "Hernandez");
sessionStorage.setItem("edad", "45");
sessionStorage.setItem("profesion", "Abogado");

// Sacar datos (saludo)
const nombre = sessionStorage.getItem("nombre");
alert(`Hola ${nombre} un gusto verte`);