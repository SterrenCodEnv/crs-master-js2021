"use strict";
//* Implementacion de la interfaz IJugador en objetos jugador1 y jugador2
var jugador1 = {
    deporte: "Footbal",
    nombre: "Messi",
    edad: 32,
    puntos: 10,
    puesto: 1,
    esOnline: true,
    mostrar: function () {
        return " " + jugador1.puesto + "\u00B0 - " + jugador1.nombre + " (" + jugador1.edad + ") | " + (jugador1.esOnline ? "Conectado" : "Desconectado");
    },
};
var jugador2 = {
    deporte: "Rugby",
    nombre: "Dan Carter",
    edad: 28,
    puesto: 2,
    esOnline: false,
    mostrar: function () {
        return " " + jugador2.puesto + "\u00B0 - " + jugador2.nombre + " (" + jugador2.edad + ") | " + (jugador2.esOnline ? "Conectado" : "Desconectado");
    },
};
console.log(jugador1.mostrar());
console.log(jugador2.mostrar());
//* Implementacion de interface IJugador en clase Futbolista.
var Futbolista = /** @class */ (function () {
    function Futbolista(deporte, nombre, edad, puntos, puesto, esOnline) {
        var _this = this;
        this.deporte = deporte;
        this.nombre = nombre;
        this.edad = edad;
        this.puntos = puntos;
        this.puesto = puesto;
        this.esOnline = esOnline;
        this.mostrar = function () {
            return " " + _this.puesto + "\u00B0 - " + _this.nombre + " (" + _this.edad + ") | " + (_this.esOnline ? "Conectado" : "Desconectado");
        };
    }
    return Futbolista;
}());
var futbolista1 = new Futbolista("Futbol", "Messi", 32, 10, 1, true);
console.log(futbolista1.mostrar());
