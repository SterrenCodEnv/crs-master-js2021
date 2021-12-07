// Comprobar si el navegador es compatible con localstorage
if (typeof(Storage) == "undefined") {
    alert("No es compatible");
    window.location.href = 'google.com'

}

console.log("TODO KO!");

    // Almacenar en localstorage
    localStorage.setItem("nombre", "Juan Sterren");
    
    // Recuperar de localstorage
    let nombre = localStorage.getItem("nombre");
    console.log(nombre);

    // Eliminar de localstorage
    function borrar(elem){
        console.log(elem);
        localStorage.removeItem(elem);
        document.getElementById(elem).remove();
    }

    // Eliminar todo de localstorage
    //localStorage.clear();

    // Comprobar si existe una clave en localstorage
    if (localStorage.getItem("nombre") === null) {
        console.log("No existe la clave nombre");
    } else {
        console.log("Existe la clave nombre");
    }
    
    localStorage.setItem("nombre1", "Juan Ignacio");
    localStorage.setItem("nombre2", "Jose Alberto");

    // Objetos almacenados en localstorage
    let datos = document.querySelector("#datos");
    datos.innerHTML = `<p id="nombre1">Nombre 1: ${localStorage.getItem('nombre1')} <button id='btn1'>Borrar</button></p>`;
    datos.innerHTML += `<p id="nombre2">Nombre 2: ${localStorage.getItem('nombre2')} <button id='btn2'>Borrar</button></p>`;

    document.querySelector("#btn1").addEventListener("click", () => {
        borrar("nombre1");
    });
    document.querySelector("#btn2").addEventListener("click", () => {
        borrar("nombre2");
    });

    const profesion = JSON.parse(localStorage.getItem("usuario")).profesion;
    datos.innerHTML += `<br><p id="profesion"><strong>${profesion.toUpperCase()}</strong></p>`

