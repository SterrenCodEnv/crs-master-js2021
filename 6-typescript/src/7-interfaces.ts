interface IJugador {
  deporte: string;
  nombre: string;
  edad: number;
  puntos?: number;
  puesto: number;
  esOnline: boolean;
  mostrar: () => string;
}

//* Implementacion de la interfaz IJugador en objetos jugador1 y jugador2
let jugador1: IJugador = {
  deporte: "Footbal",
  nombre: "Messi",
  edad: 32,
  puntos: 10,
  puesto: 1,
  esOnline: true,
  mostrar: () =>
    ` ${jugador1.puesto}° - ${jugador1.nombre} (${jugador1.edad}) | ${
      jugador1.esOnline ? "Conectado" : "Desconectado"
    }`,
};
let jugador2: IJugador = {
  deporte: "Rugby",
  nombre: "Dan Carter",
  edad: 28,
  puesto: 2,
  esOnline: false,
  mostrar: () =>
    ` ${jugador2.puesto}° - ${jugador2.nombre} (${jugador2.edad}) | ${
      jugador2.esOnline ? "Conectado" : "Desconectado"
    }`,
};
console.log(jugador1.mostrar());
console.log(jugador2.mostrar());


//* Implementacion de interface IJugador en clase Futbolista.
class Futbolista implements IJugador {
  deporte: string;
  nombre: string;
  edad: number;
  puntos: number;
  puesto: number;
  esOnline: boolean;
  mostrar: () => string;

  constructor(
    deporte: string,
    nombre: string,
    edad: number,
    puntos: number,
    puesto: number,
    esOnline: boolean
  ) {
    this.deporte = deporte;
    this.nombre = nombre;
    this.edad = edad;
    this.puntos = puntos;
    this.puesto = puesto;
    this.esOnline = esOnline;
    this.mostrar = () =>
      ` ${this.puesto}° - ${this.nombre} (${this.edad}) | ${
        this.esOnline ? "Conectado" : "Desconectado"
      }`;
  }
}

const futbolista1 = new Futbolista("Futbol", "Messi", 32, 10, 1, true);
console.log(futbolista1.mostrar());