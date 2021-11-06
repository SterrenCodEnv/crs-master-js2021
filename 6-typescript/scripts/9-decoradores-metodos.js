"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function modMen(mostrar) {
    return function info(target, propertyKey, descriptor) {
        if (mostrar) {
            console.log("target", target);
            console.log("propertyKey", propertyKey);
            console.log("descriptor", descriptor);
        }
        else {
            descriptor.value = function () {
                console.log("No se puede acceder a este método");
            };
        }
    };
}
function propiedad(target, propertyKey) {
    console.log("Esta propiedad esta en la clase: " + target.constructor.name + " y la propiedad se llama " + propertyKey);
}
var Ordenador = /** @class */ (function () {
    function Ordenador() {
        this.marca = "HP";
    }
    Ordenador.prototype.encender = function (msg) {
        console.log("El ordenado " + msg + " se esta encendiendo...");
    };
    __decorate([
        propiedad,
        __metadata("design:type", String)
    ], Ordenador.prototype, "marca", void 0);
    __decorate([
        modMen(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Ordenador.prototype, "encender", null);
    return Ordenador;
}());
var pc = new Ordenador();
pc.encender("dell");
