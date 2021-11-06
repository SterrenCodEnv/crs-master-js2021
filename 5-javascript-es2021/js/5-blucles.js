/* let nombres = [
    "Juan",
    "Pedro",
    "Maria",
    "Ana",
    "Luis",
    "Jorge"
]; */

// For - bucle tradicional
/* for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}; */

// For of (Accedemos al valor de un elemento del array)
/* for (const nombre of nombres) {
    console.log(nombre);
} */

// For in (Accedemos al indice un elemento del array)
/* for (const indice in nombres) {
    console.log(indice);
    console.log(nombres[indice]);
} */

// Foreach (Accedemos al valor y al indice un elemento del array)
/* nombres.forEach(function(nombre, indice, arreglo) {
    console.log(nombre, indice, arreglo);
}); */

// Con arrowfunctions
/* nombres.forEach((nombre, indice, arreglo) => console.log(nombre, indice, arreglo)); */

//* Iterables (Arrays, Strings, Maps, Sets, TypedArrays)
// Transforma un array en un iterable
//const iterable = nombres[Symbol.iterator]();
//console.log(typeof iterable);
/* console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
 */

//Json 
let motocicleta = {
    marca: "Honda",
    modelo: "CBR",
    color: "Negro"
}

//! Error: motocicleta no es un iterable
/* for (const propiedad of motocicleta) {
    console.log(propiedad);
} */

// Json a iterable
motocicleta[Symbol.iterator] = function(){
    let indice = 0;
    let valores = Object.values(this);

    return{
        next(){
            if(indice >= valores.length){
                return{
                    value: undefined,
                    done: true
                };
            }
            return {
                done: false,
                value: valores[indice],
                indice: indice++
            }
        }
    }
}

for (const propiedad in motocicleta) {
    console.log(`${propiedad.toLocaleUpperCase()}: ${motocicleta[propiedad]}`);
}
