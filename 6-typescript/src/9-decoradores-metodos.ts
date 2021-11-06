function modMen(mostrar: boolean) {
  return function info(
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    if (mostrar) {
      console.log("target", target);
      console.log("propertyKey", propertyKey);
      console.log("descriptor", descriptor);
    } else {
      descriptor.value = function () {
        console.log("No se puede acceder a este método");
      };
    }
  };
}

function propiedad(target: any, propertyKey: string) {
  console.log(
    `Esta propiedad esta en la clase: ${target.constructor.name} y la propiedad se llama ${propertyKey}`
  );
}

class Ordenador {
  @propiedad marca: string = "HP";

  @modMen(false)
  encender(msg: string): void {
    console.log(`El ordenado ${msg} se esta encendiendo...`);
  }
}

let pc = new Ordenador();
pc.encender("dell");
