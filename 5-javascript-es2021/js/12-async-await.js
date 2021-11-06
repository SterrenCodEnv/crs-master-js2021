let productos = [
    {
        nombre: 'Monitor 27"',
        marca: 'LG',
        precio: 300
    },
    {
        nombre: 'Teclado',
        marca: 'Logitech',
        precio: 40
    },
    {
        nombre: 'Mouse',
        marca: 'Razer',
        precio: 10
    },
    {
        nombre: 'Auriculares',
        marca: 'Sony',
        precio: 150
    }
];

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        //console.log('Obteniendo productos');
        setTimeout(() => {
            resolve(productos);
            reject('Error');
        }, 2000);
    });
};

const obtenerNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Juan Ignacio Sterren");
            reject('Error');
        }, 2000);
    });
};

// Promesa clasica
/* obtenerProductos().then(productos => {
    console.log(productos);
}).catch(error => {
    console.log(error);
}); */

// Promesa async y await
let obtenerMisProductos = async () => {
    try {
        console.log('Cargando información...');
        /* //! Se suman ambos sets de tiempo...
        let productos = await obtenerProductos();
        let nombre = await obtenerNombre(); */
        //* Forma de encadenar ambas promesas
        let informacion = await Promise.all([
            obtenerProductos(),
            obtenerNombre()
        ]);
        console.log(informacion);
        alert(`Carga finalizada`);
    } catch (error) {
        console.log(error);
    }
};
obtenerMisProductos();