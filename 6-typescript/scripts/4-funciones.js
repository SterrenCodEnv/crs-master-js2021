"use strict";
// Funcion con retorno declarado
var saludo = function (nombre) {
    return "Hola " + nombre + ", nos alegramos de tenerte aqu\u00ED";
};
//console.log(saludo('Juan'));
// Funcion sin retorno
var fechaActual = function () {
    var hoy = new Date();
    console.log(hoy.toDateString());
};
//fechaActual();
// Never / Fin de la aplicacion
var error = function (mensaje) {
    throw new Error(mensaje);
};
//error('Ocurrió un error');
// Parametro con funciones
var mostrarPais = function (pais, continente) {
    if (pais === void 0) { pais = 'Argentina'; }
    return pais + " es un pais de " + (continente !== null && continente !== void 0 ? continente : 'el mundo');
};
console.log(mostrarPais());
console.log(mostrarPais(undefined, 'America'));
console.log(mostrarPais('Chile', 'America'));
console.log(mostrarPais('Chile'));
// Definicio de función
var grupos;
grupos = function (datos) {
    return "Mis bandas favoritas son: " + datos.toString();
};
console.log(grupos(['La vela puerca', 'Callejeros', 'The Bunkers']));
var tekken = function (personaje, atuendo) {
    return personaje + " esta usando el atuendo " + atuendo;
};
console.log(tekken('Ryu', 3));
console.log(tekken('Ken', 'default'));
