// Encadenamiento opcional - una sola expresión.
let persona = {
    nombre: 'Juan',
    apellido: 'Rodriguez',
    edad: 23,
    domicilio: {
        calle: 'Saint Ginov 213',
        //ciudad: 'Andorra La Vieja',
        pais: 'Andorra'
    }
}

let comprobarPais = (persona?.domicilio?.ciudad) ?? 'No tiene ciudad';
console.log(comprobarPais);

