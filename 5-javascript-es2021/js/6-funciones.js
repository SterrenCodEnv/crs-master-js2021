// Funcion tradicional
/* function saludo(persona = 'Anonimo') {
    return "Hola " + persona;
}
console.log(saludo("Juan"));
console.log(saludo("María"));
console.log(saludo()); */

// Funciones flecha - Arrow functions
/* const saludo = (persona = 'Anonimo', ciudad = 'esta ciudad') => `Hola ${persona}, bienvenido a ${ciudad}!`;
console.log(saludo("Juan", "San Guillermo"));
console.log(saludo("Juan"));
console.log(saludo( undefined, "San Guillermo"));
console.log(saludo()); */

//! Arrow functions en JSON - Arrow functions no admite el operador this
const tienda = {
    nombre: "Tienda JS",
    direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Madrid',
        pais: 'España'
    },
    articulos: ['Camiseta', 'Gorra', 'Taza'],
    mostrarNombre: function() {
        console.log(this.nombre);
    },
    mostrarNombreFlecha: () => console.log(tienda.nombre),
    mostrarDireccion: () => console.log(`${tienda.direccion.calle} (${tienda.direccion.ciudad} - ${tienda.direccion.pais})`),
    mostrarArticulos: (nombre) => tienda.articulos.forEach(articulo => (articulo === nombre) ? console.log(articulo) : console.log(`No hay ${nombre}`))

}

tienda.mostrarNombre();
tienda.mostrarNombreFlecha();
tienda.mostrarDireccion();
tienda.mostrarArticulos('Camisetas');