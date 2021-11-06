let productos = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Laptop', precio: 1500 },
    { nombre: 'Cámara', precio: 700 },
];

//! Devuelve undefined
/* const conseguirProductoSincrono = () => {
    setTimeout(() => {
        return productos;
    }, 500);
}
console.log(conseguirProductoSincrono()); */


//* Devuelve una promesa
//! Rehacer ejercicio... ENTENDER!
const conseguirProductoAsincrono = () => {
    return new Promise((resolve, reject) => {
        console.log('Cargando...');
        setTimeout(() => {
            resolve(productos);
            reject(new Error('¡Error en la petición!'));
        }, 2500);
    });
}

const productoAdquirido = (nombre, precio) => {
    return new Promise((resolve, reject) => {
        console.log('Comprando...')
        setTimeout(() => {
            resolve({
                nombre: nombre,
                precio: precio,
                cliente: 'Jose Nicola'
            });
            reject(new Error('¡Error en la compra!'));
        }, 1500);
    });
}

const procesarVentas = (venta) => {
    console.log(venta);
    productos = productos.filter(producto => producto.nombre != venta.nombre);
    return productos;
}

conseguirProductoAsincrono()
    .then(producto => {
        console.log(producto);
        return productoAdquirido('Televisión', 100);
    })
    .then(venta => {
        procesarVentas(venta);
        return productoAdquirido('Celular', 700);
    })
    .then(venta => {
        procesarVentas(venta);
    })

    .catch(error => console.log(error))
    .finally(() => console.log(productos));

    // Encadena promesas
/*     Promise.all([
        conseguirProductoAsincrono(),
        productoAdquirido('Teclado', 400),
        productoAdquirido('Cámara', 700),
        productoAdquirido('Laptop', 1500)
    ]); */