// Objetos en typescript
type empresas = {
  nombre: string;
  calle: string;
  numero: string;
  ciudad: string;
  pais: string;
  telefono: number;
  sitioWeb: string;
  productos: string[];
  mostrar: () => string;
};

let empresa: empresas = {
  nombre: "Zara",
  calle: "Calle de la paz",
  numero: "123",
  ciudad: "Madrid",
  pais: "España",
  telefono: 912_345_678,
  sitioWeb: "www.google.com",
  productos: ["camiseta", "pantalon", "zapatos"],
  mostrar: function () {
    return `${this.nombre} está en ${this.ciudad}`;
  },
};
console.log(typeof empresa.productos);
