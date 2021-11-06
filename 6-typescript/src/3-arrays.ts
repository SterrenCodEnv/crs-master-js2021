// Arrays
let personas: string[] = ['Juan', 'Pedro', 'Maria', 'Ana', 'Luis', 'Jorge'];
personas.push('José');

let anios: number[] = [28, 29, 30, 31, 32, 33];
anios.push(34);

//console.log(personas, anios);

// Tuplas (tuples) son arrays que no pueden cambiar su tamaño. 
let pelicula: [string, number, string, boolean] = ['Avengers', 2018, 'Acción', true];
pelicula.push('Las Tipas');

//console.log(pelicula);

// Enum (enumeraciones) son una forma de crear una lista de valores que no pueden cambiar.
enum datosPersonales {
    nombre,
    apellido,
    edad,
    telefono,
    email
}

//console.log(datosPersonales);

// Typescript Cast (conversiones) son operaciones que se pueden realizar sobre un valor para convertirlo en otro tipo de dato.
let textoDesconocido: any = true;
let respuesta: string = <string> textoDesconocido;
console.log(respuesta);