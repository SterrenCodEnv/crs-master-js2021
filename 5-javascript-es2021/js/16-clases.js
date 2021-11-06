// Clases
class Coche {

    // Propiedad privada con # (se puede acceder desde la clase y desde los objetos de la clase)
    #nPuertas = 5;

    // Propiedad protegida con _ (se puede acceder desde la clase y desde los objetos de la clase)
    _nAirbags = 2;

    // Método constructor (primero en inicializarse)
    constructor(marca = 'No definida', modelo = 'No definido', color = 'No definido', velocidad = 0, anio = 2021) {
        //Propiedades o Atributos
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
        this.anio = anio;
    }

    // Métodos
    subirVelocidad() {
        this.velocidad += 25;
    }

    bajasVelocidad() {
        this.velocidad -= 5;
    }

    // Métodos setters y getters
    // Al utilizar set y get delante de la funcion esta pasa a ser interpretada como propiedad de la clase
    set guardarMarca(marca) {
        this.marca = marca;
    }
    set guardarModelo(modelo) {
        this.modelo = modelo;
    }
    set guardarColor(color) {
        this.color = color;
    }
    get obtenerMarca() {
        return this.marca;
    }
    get obtenerModelo() {
        return this.modelo;
    }
    get obtenerColor() {
        return this.color;
    }

    get numeroPuertas() {
        return this.#nPuertas;
    }

    get numeroAirbags() {
        return this._nAirbags;
    }

    // Métodos estáticos. No se pueden instanciar, deben ser aplicados a la clase y no a los objetos de la misma.
    static obtenerInforme(coche) {
        return `
        Marca: ${coche.obtenerMarca}
        Modelo: ${coche.obtenerModelo}
        Color: ${coche.obtenerColor}
        Velocidad: ${coche.velocidad}
        Año: ${coche.anio}
        `
    }
}

// Crear instancia de clase (objeto)
let primerCoche = new Coche('Renault', 'Megane', 'Rojo', undefined, '2015');
primerCoche.guardarMarca = 'Ford';
primerCoche.guardarColor = 'Focus';
for (let i = 0; i < 5; i++) {
    primerCoche.subirVelocidad();
}
primerCoche.bajasVelocidad();
primerCoche.bajasVelocidad();
console.log(Coche.obtenerInforme(primerCoche));
console.log(primerCoche.numeroPuertas);
console.log(primerCoche.numeroAirbags);

//* Herencia 
class Camioneta extends Coche {
    constructor(marca, modelo, color, velocidad, anio, transmision = 'simple') {
        super(marca, modelo, color, velocidad, anio);
        this.transmision = transmision;
    }
    set guardarTransmision(tran) {
        this.transmision = tran;
    }
    get obtenerTransmision() {
        return this.transmision;
    }
}

let segundoCoche = new Camioneta('Ford', 'Ranger', 'Blanco', undefined, 2016, undefined);
segundoCoche.guardarColor = 'Gris'
segundoCoche.guardarTransmision = 'Doble';
console.log(Coche.obtenerInforme(segundoCoche));