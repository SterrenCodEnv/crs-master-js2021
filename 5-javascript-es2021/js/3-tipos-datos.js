// String
let nombre = 'Juan Sterren'

// Number
let edad = 23;
let peso = 73.4;

// Boolean
let mayorEdad = true;
let menorEdad = Boolean(0); 

// Array
let paises = ['España', 'Francia', 'Italia'];

// Null (no tiene valor)
let vacio = null;

// Undefined (no se ha definido)
let indefinido;

/* console.log(
    typeof nombre,
    typeof edad,
    typeof peso,
    typeof mayorEdad,
    typeof menorEdad,
    typeof paises,
    typeof(paises[1]),
    typeof vacio,
    typeof indefinido
); */

// JSON (JavaScript Object Notation) objeto literal.
let pelicula = {
    titulo: 'Batman vs Superman',
    genero: 'Fantasia',
    pais: 'Estados Unidos',
    anio: 2016,
    mostrar: function() {
        return `Pelicula: ${this.titulo} \nAño: ${this.anio}`;
    }
}

pelicula.director = 'Zack Snyder'
//console.log(pelicula);

for(let p in pelicula) {
    if(typeof pelicula[p] !== 'function') {
        //console.log(`${pelicula[p]}`);
    }
}

// Symbol nuevo tipo de dato, no se puede clonar (valores o identificados unicos).
let periferico = Symbol('Mouse');
let periferico2 = Symbol('Mouse');
if(periferico === periferico2) {
    //console.log('Son iguales');
} else {
    //console.log('No son iguales');
};

// Tambien se puede usar para ocultar el valor de una variable.
let user = { id: 1, name: 'Juan', lastname: 'Sterren', age: 30, web: 'codenv.com.ar' };
const clave = Symbol('id');
user[clave] = 10;
// La variable clave es renombrada como Symbol(id).
//console.log(user);

// Encadenamiento opcional
const adventurer = { 
    name: 'Jack', 
    weapon: {
        name: 'Sword',
        damage: 10
    }, 
    shield:{
        name: 'Shield',
        defense: 10
    },
    age: 30
};

const swordName = adventurer.weapon?.enchanment;
console.log(swordName);