const perifericos = ['mouse', 'teclado', 'parlantes', 'webcam', 'auriculares'];

// Sin destructuración
//const mouse = perifericos[0];
//const teclado = perifericos[1];

// Con destructuración
/* const [mouse, teclado, ...resto] = perifericos;
console.log(teclado);
console.log(resto); */

// Desestructuración de objetos
/* let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 23,
    pais: 'México'
};

let { edad } = persona;
console.log(edad); */

// Desestructuración de string
/* const usuario = 'Juan Sterren 35751626 Desarrollador';
const [nombre, apellido, dni, profesion] = usuario.split(' ');
console.log(dni); */

// Definir multiples variables con mismo ambito.
/* const   curso = 'JavaScript', 
        profesor = 'Victor', 
        alumnos = ['Juan', 'Pedro', 'Ana'];
 */

//Parametros de una funcion con destructuración de objetos
/* const mostrarDatos = ({ nombre = '', apellido = '', edad = 0 }) => console.log(`${nombre} ${apellido} ${edad}`);
mostrarDatos({apellido:'Sterren'}); */