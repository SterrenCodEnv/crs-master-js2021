"use strict";
// Arrays
var personas = ['Juan', 'Pedro', 'Maria', 'Ana', 'Luis', 'Jorge'];
personas.push('José');
var anios = [28, 29, 30, 31, 32, 33];
anios.push(34);
//console.log(personas, anios);
// Tuplas (tuples) son arrays que no pueden cambiar su tamaño. 
var pelicula = ['Avengers', 2018, 'Acción', true];
pelicula.push('Las Tipas');
//console.log(pelicula);
// Enum (enumeraciones) son una forma de crear una lista de valores que no pueden cambiar.
var datosPersonales;
(function (datosPersonales) {
    datosPersonales[datosPersonales["nombre"] = 0] = "nombre";
    datosPersonales[datosPersonales["apellido"] = 1] = "apellido";
    datosPersonales[datosPersonales["edad"] = 2] = "edad";
    datosPersonales[datosPersonales["telefono"] = 3] = "telefono";
    datosPersonales[datosPersonales["email"] = 4] = "email";
})(datosPersonales || (datosPersonales = {}));
//console.log(datosPersonales);
// Typescript Cast (conversiones) son operaciones que se pueden realizar sobre un valor para convertirlo en otro tipo de dato.
var textoDesconocido = true;
var respuesta = textoDesconocido;
console.log(respuesta);
