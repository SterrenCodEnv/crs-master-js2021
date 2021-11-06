let personas = [
    {
        nombre: 'Juan',
        edad: 20
    },
    {
        nombre: 'Pedro',
        edad: 30
    },
    {
        nombre: 'Maria',
        edad: 25
    },
    {
        nombre: 'Luis',
        edad: 40
    }
];

//Buscar en un array - find
const busqueda = personas.find((p) => p.nombre === 'Luis');
console.log(busqueda);


//Buscar en un array - findIndex
const busquedaIndex = personas.findIndex((p) => p.nombre === 'Luis');
console.log(busquedaIndex + 1);

//Array from - crea un array a partir de un string
let saludo = Array.from('Hola');
console.log(saludo);

let tabla7 = Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (num) => num * 7);
console.log(tabla7);

// Includes - busca un elemento en un array
let busquedaPersona = personas.includes({nombre: 'Pedro', edad: 30});
console.log(busquedaPersona);

// Filter - crea un nuevo array filtrando un array con una condición.
let mayores = personas.filter((p) => p.edad > 20);
console.log(mayores);

