"use strict";
// Funciones genericas, se pueden pasar cualquier tipo de dato y devuelve el mismo tipo de dato
// Se utiliza <T> para indicar que es un tipo generico.
function mostrarMensaje(parametro) {
    return parametro;
}
console.log(mostrarMensaje('Hola, buenos dias!').replace('buenos dias', 'buenas tardes'));
console.log(mostrarMensaje(1).toFixed(2));
console.log(mostrarMensaje(true));
console.log(mostrarMensaje({ nombre: 'Juan' })['nombre']);
