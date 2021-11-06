function proyectando(metadatos: any) {
  return (constructor: Function) => {
    constructor.prototype.mensaje = function (
      titulo: string,
      estado: boolean
    ): void {
      if (estado) {
        console.log(`La pelicula estreno "${titulo}"" se esta proyectando`);
      } else {
        console.log(
          `La pelicula "${titulo}" no es un estreno y no se estará proyectando...`
        );
      }
    };

    constructor.prototype.peliculasSeleccion = function (): string[] {
      let peliculas = metadatos.titulos;
      peliculas.push(this.titulo);
      return peliculas;
    };
  };
}

@proyectando({
  titulos: [
    "Star Wars",
    "Oblivion"
  ],
  estado: true,
})
class Pelicula {
  constructor(
    public titulo: string,
    public director: string,
    public anio: number,
    public genero: string,
    public duracion: number,
    public actores: string[],
    public estreno: boolean
  ) {}
}

let pelicula1: any = new Pelicula(
  "El señor de los anillos",
  "Peter Jackson",
  2001,
  "Fantasia",
  178,
  ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
  true
);

pelicula1.mensaje(pelicula1.titulo, pelicula1.estreno);
console.log(pelicula1.peliculasSeleccion());
