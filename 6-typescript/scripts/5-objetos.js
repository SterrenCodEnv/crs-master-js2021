"use strict";
var empresa = {
    nombre: "Zara",
    calle: "Calle de la paz",
    numero: "123",
    ciudad: "Madrid",
    pais: "España",
    telefono: 912345678,
    sitioWeb: "www.google.com",
    productos: ["camiseta", "pantalon", "zapatos"],
    mostrar: function () {
        return this.nombre + " est\u00E1 en " + this.ciudad;
    },
};
console.log(typeof empresa.productos);
