//EcmaScript 2021 / ES12 / ES.NEXT

//* VAR: Se usa para declarar variables globales o funcionales.
/* var nombre = 'Juan';

function mostrarNombre() {
    var nombre = 'Pedro';
    var apellido = 'Perez';
    console.log('Dentro:', nombre);
    console.log('Dentro:', apellido);
}

mostrarNombre();
console.log('Fuera:', nombre);
console.log('Fuera:', apellido); */

//* LET: Se usa para declarar variables locales (ambito de bloque).
/* let pais = 'Argentina';

function mostrarPais() {
    console.log('Local:', pais);
}

mostrarPais();
console.log('Global:', pais);

if(pais == 'Argentina'){
    let continente = 'America';
    console.log('Local:', continente);
} */

// No se puede acceder a la variable continente fuera del bloque.
// console.log('Global:', continente);

// Variable var i accesible fuera del bloque.
/* for(var i = 0; i <= 5; i++){
    console.log('Var Local:', i);
}
console.log('Var Global:', i);

for(let j = 0; j <= 5; j++){
    console.log('Let Local:', j);
}
console.log('Let Global:', j); */

//* CONST: Se usa para declarar variables constantes (no es modificable).

//! Modificable con let.
/* let edad = 30;
console.log('Edad original:', edad);
edad = 35;
console.log('Edad modificada:', edad); */

//! No modificable con const.
const edad = 30;
console.log('Edad original:', edad);
edad = 35;
console.log('Edad modificada:', edad);