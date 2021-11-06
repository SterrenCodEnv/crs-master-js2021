// Separadores numericos - separadores de miles
let numero = 35_751_626;
console.log(numero.toLocaleString());

// Replace y ReplaceAll - Funciones de reemplazo
let frase = "Estoy viajando en auto hacia La Plata y mi amigo en su auto hacia Lujan";
console.log(frase);
console.log(frase.replace("auto", "moto"));
// Con expresion regular
console.log(frase.replace(/auto/g, "moto"));
// Con replaceAll
console.log(frase.replaceAll("auto", "camion"));

// Asignadores logicos - Operadores lógicos de asignación
let nombre = "Juan";
let id = 30;

nombre ??= 'Anonimo';
nombre &&= nombre + ' ' + id;

console.log(nombre);