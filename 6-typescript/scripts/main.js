"use strict";
var usuario = {
    nombre: 'Juan',
    apellido: 'Sterren',
    edad: 20,
    email: 'jhondoe@example.net',
    informe: function () {
        return (this.nombre + " " + this.apellido + " (" + this.edad + ")");
    }
};
console.log(usuario.informe());
