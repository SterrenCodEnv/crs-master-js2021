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
function proyectando(metadatos) {
    return function (constructor) {
        constructor.prototype.mensaje = function (titulo, estado) {
            if (estado) {
                console.log("La pelicula estreno \"" + titulo + "\"\" se esta proyectando");
            }
            else {
                console.log("La pelicula \"" + titulo + "\" no es un estreno y no se estar\u00E1 proyectando...");
            }
        };
        constructor.prototype.peliculasSeleccion = function () {
            var peliculas = metadatos.titulos;
            peliculas.push(this.titulo);
            return peliculas;
        };
    };
}
var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, director, anio, genero, duracion, actores, estreno) {
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.genero = genero;
        this.duracion = duracion;
        this.actores = actores;
        this.estreno = estreno;
    }
    Pelicula = __decorate([
        proyectando({
            titulos: [
                "Star Wars",
                "Oblivion"
            ],
            estado: true,
        }),
        __metadata("design:paramtypes", [String, String, Number, String, Number, Array, Boolean])
    ], Pelicula);
    return Pelicula;
}());
var pelicula1 = new Pelicula("El señor de los anillos", "Peter Jackson", 2001, "Fantasia", 178, ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"], true);
pelicula1.mensaje(pelicula1.titulo, pelicula1.estreno);
console.log(pelicula1.peliculasSeleccion());
