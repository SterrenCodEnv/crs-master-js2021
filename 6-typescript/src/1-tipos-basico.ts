// Tipos de datos basicos

let texto: string = 'Hola mundo';
console.log(texto);

let numero: number = 123;
numero = 12.3;
console.log('Numero', numero);

let booleano: boolean = true;
booleano = false;
console.log('Booleano', booleano);

let cualquiera: any = 'Admite cualquiera';
cualquiera = 123;
console.log('Cualquiera', cualquiera);

// Unkown es un tipo de dato que no se sabe que va a ser hasta que se le asigne un valor. 
// Se diferencia de any porque unkown no admite null ni undefined. 
// Si se le asigna un valor que no sea un string, number, boolean, etc, se le asigna un valor de tipo unknown.
let cualquierUnkown: unknown = 'Admite cualquier cosa';
cualquierUnkown = 123;
cualquierUnkown = true;
console.log('Cualquier unknown', cualquierUnkown);