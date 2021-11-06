class Coche {
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

  constructor(
    public marca: string,
    public modelo: string,
    public color: string,
    public anio: number,
    private encendido: boolean = false,
    private velocidad: number = 0
  ) {}

  // Metodos
  public arrancar(): void {
    this.encendido = true;
  }
  public apagar(): void {
    this.encendido = false;
  }

  public acelerar(): void {
    if (this.encendido) {
      this.velocidad += 15;
    } else {
      this.velocidad = 0;
    }
  }

  private infoCoche(): string {
    return `Marca: ${this.marca}
    Modelo: ${this.modelo}
    Color: ${this.color}
    Año: ${this.anio}`;
  }

  private estadoCoche(): string {
    return `Encendido: ${this.encendido}
      Velocidad: ${this.velocidad}`;
  }

  public informeCoche(): string {
    return `${this.infoCoche()}
    ${this.estadoCoche()}`;
  }

  static getVersion(): void {
    console.log("Version: 1.0.0");
  }

  // Setters
  setEncendido(encendido: boolean): void {
    this.encendido = encendido;
  }

  setVelocidad(velocidad: number): void {
    this.velocidad = velocidad;
  }

  // Getters
  getEncendido(): boolean {
    return this.encendido;
  }

  getVelocidad(): number {
    return this.velocidad;
  }
}

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
class Camioneta extends Coche {
  constructor(
    public marca: string,
    public modelo: string,
    public color: string,
    public anio: number,
    private carga: number = 0
  ) {
    super(marca, modelo, color, anio);
  }

  // Setters
  setCarga(carga: number): void {
    this.carga = carga;
  }

  // Getters
  getCarga(): number {
    return this.carga;
  }
}

let camioneta: Camioneta = new Camioneta("Ford", "Ranger", "Blanca", 2008);
camioneta.setCarga(2000);
camioneta.arrancar();
camioneta.acelerar();
console.log(camioneta.informeCoche());
console.log(camioneta.getCarga());
