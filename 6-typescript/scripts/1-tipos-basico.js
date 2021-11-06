"use strict";
// Tipos de datos basicos
var texto = 'Hola mundo';
console.log(texto);
var numero = 123;
numero = 12.3;
console.log('Numero', numero);
var booleano = true;
booleano = false;
console.log('Booleano', booleano);
var cualquiera = 'Admite cualquiera';
cualquiera = 123;
console.log('Cualquiera', cualquiera);
// Unkown es un tipo de dato que no se sabe que va a ser hasta que se le asigne un valor. 
// Se diferencia de any porque unkown no admite null ni undefined. 
// Si se le asigna un valor que no sea un string, number, boolean, etc, se le asigna un valor de tipo unknown.
var cualquierUnkown = 'Admite cualquier cosa';
cualquierUnkown = 123;
cualquierUnkown = true;
console.log('Cualquier unknown', cualquierUnkown);
