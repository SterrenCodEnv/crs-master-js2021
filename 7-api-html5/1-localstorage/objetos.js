let usuario = {
    nombre: "Juan",
    apellido: "Sterren",
    edad: 30,
    profesion: "Programador"
}

let usuario_string = JSON.stringify(usuario);
localStorage.setItem("usuario", usuario_string);