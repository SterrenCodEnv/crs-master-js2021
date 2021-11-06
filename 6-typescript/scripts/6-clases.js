"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coche = /** @class */ (function () {
    // Atributos
    // Declaracion y Contruccion tradicional
    /* private color: string = '';
      private marca: string = '';
      private modelo: string = '';
      private anio: number = 2021;
      private encendido: boolean = false;
      private velocida: number = 0;
  
      constructor(color: string, marca: string, modelo: string, anio: number) {
          this.color = color;
          this.marca = marca;
          this.modelo = modelo;
          this.anio = anio;
      } */
    // TODO: Visibilidad de los atributos
    //* private: solo accesible desde dentro de la clase
    //* public: accesible desde cualquier lugar
    //* protected: accesible desde la clase y desde las clases que heredan de esta
    function Coche(marca, modelo, color, anio, encendido, velocidad) {
        if (encendido === void 0) { encendido = false; }
        if (velocidad === void 0) { velocidad = 0; }
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anio = anio;
        this.encendido = encendido;
        this.velocidad = velocidad;
    }
    // Metodos
    Coche.prototype.arrancar = function () {
        this.encendido = true;
    };
    Coche.prototype.apagar = function () {
        this.encendido = false;
    };
    Coche.prototype.acelerar = function () {
        if (this.encendido) {
            this.velocidad += 15;
        }
        else {
            this.velocidad = 0;
        }
    };
    Coche.prototype.infoCoche = function () {
        return "Marca: " + this.marca + "\n    Modelo: " + this.modelo + "\n    Color: " + this.color + "\n    A\u00F1o: " + this.anio;
    };
    Coche.prototype.estadoCoche = function () {
        return "Encendido: " + this.encendido + "\n      Velocidad: " + this.velocidad;
    };
    Coche.prototype.informeCoche = function () {
        return this.infoCoche() + "\n    " + this.estadoCoche();
    };
    Coche.getVersion = function () {
        console.log("Version: 1.0.0");
    };
    // Setters
    Coche.prototype.setEncendido = function (encendido) {
        this.encendido = encendido;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    // Getters
    Coche.prototype.getEncendido = function () {
        return this.encendido;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
/* let coche: Coche = new Coche("Azul", "Ford", "Fiesta", 2020);
coche.setEncendido(true);
for (let i = 0; i < 3; i++) {
  coche.acelerar();
}
console.log(coche.informeCoche());
coche.setEncendido(false);
coche.acelerar();
console.log(coche.informeCoche());
Coche.getVersion(); */
// Herencia
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, modelo, color, anio, carga) {
        if (carga === void 0) { carga = 0; }
        var _this = _super.call(this, marca, modelo, color, anio) || this;
        _this.marca = marca;
        _this.modelo = modelo;
        _this.color = color;
        _this.anio = anio;
        _this.carga = carga;
        return _this;
    }
    // Setters
    Camioneta.prototype.setCarga = function (carga) {
        this.carga = carga;
    };
    // Getters
    Camioneta.prototype.getCarga = function () {
        return this.carga;
    };
    return Camioneta;
}(Coche));
var camioneta = new Camioneta("Ford", "Ranger", "Blanca", 2008);
camioneta.setCarga(2000);
camioneta.arrancar();
camioneta.acelerar();
console.log(camioneta.informeCoche());
console.log(camioneta.getCarga());
