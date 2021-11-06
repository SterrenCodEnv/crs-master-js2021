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
    },
    {
        nombre: 'Ana',
        edad: 35
    },
    {
        nombre: 'Juan',
        edad: 35
    }
];

let paises = [{
    nombre: 'Argentina',
    continente: 'America',
    hispano: true
}, {
    nombre: 'Brasil',
    continente: 'America',
    hispano: false
}, {
    nombre: 'Chile',
    continente: 'America',
    hispano: true
}, {
    nombre: 'Uruguay',
    continente: 'America',
    hispano: true
}, {
    nombre: 'Paraguay',
    continente: 'America',
    hispano: true
}];

// Some - Devuelve true si al menos un elemento de un array cumple con la condición
const edad = 21;
if (personas.some(persona => persona.edad > edad)) {
    console.log(`Existen mayores a ${edad} años`);
} else {
    console.log(`No xisten mayores a ${edad} años`);
}

// Every -  
if (paises.every(pais => pais.continente === 'America')) {
    console.log(`Todos los paises son americanos`);
} else {
    console.log(`No todos los paises son americanos`);
}

// Map - Transformar un array en otro array
let hispanos = paises.map((pais) => pais.nombre);
console.log(hispanos);

// Reduce - Devuelve un valor unico a partir de un array 
let totalEdad = personas.reduce((total, persona) => total + persona.edad, 0);
console.log('La sumatoria de las edades es: ', totalEdad);