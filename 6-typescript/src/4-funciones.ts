// Funcion con retorno declarado
const saludo = (nombre: string): string => {
    return `Hola ${nombre}, nos alegramos de tenerte aquí`;
};
//console.log(saludo('Juan'));

// Funcion sin retorno
const fechaActual = ():void => {
    const hoy = new Date();
    console.log(hoy.toDateString()); 
};
//fechaActual();

// Never / Fin de la aplicacion
const error = (mensaje: string): never => {
    throw new Error(mensaje);
};

//error('Ocurrió un error');

// Parametro con funciones
const mostrarPais = (pais: string = 'Argentina', continente?: string): string  => `${pais} es un pais de ${continente ?? 'el mundo'}`;
console.log(mostrarPais());
console.log(mostrarPais(undefined, 'America'));
console.log(mostrarPais('Chile', 'America'));
console.log(mostrarPais('Chile'));

// Definicio de función
let grupos: (datos:string[]) => string;

grupos = (datos:string[]):string => {
    return `Mis bandas favoritas son: ${datos.toString()}`;
};

console.log(grupos(['La vela puerca', 'Callejeros', 'The Bunkers']));

// Tipo literal.
// atuendo: 'default' | 1 | 2 | 3 | 4

// Tipo alias. 
type atuendo = 'default' | 1 | 2 | 3 | 4;

const tekken = (personaje: string, atuendo: atuendo): string => {
    return `${personaje} esta usando el atuendo ${atuendo}`;
};
console.log(tekken('Ryu', 3));
console.log(tekken('Ken', 'default'));