export function imprimirArray(datos) {
    datos.forEach(elem => {
        console.log(elem);
    });
    return datos;
} 

export function saludo(nombre){
    console.log(`Hola ${nombre}`);
    return nombre;
}
