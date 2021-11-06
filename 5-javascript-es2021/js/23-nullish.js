// Nullish Coalescing Operator
let multiplicar = (n1, n2) => {

    //! Condicion ternaria
    //n1 = (n1 == null ? 1 : n1);
    //n2 = (n2 == null ? 1 : n2);
    //* Operador de coalescencia
    n1 = n1 ?? 1;
    n2 = n2 ?? 1;

    return n1 * n2;
}
let resultado = multiplicar(6, null);
console.log(resultado);

let login = (id, nombre) => {
    const user = `(${(id ?? 0)})${nombre ?? 'Anonimo'}`;
    return `Bienvenido ${user}`;
}
console.log(login(null, 'Juan'));