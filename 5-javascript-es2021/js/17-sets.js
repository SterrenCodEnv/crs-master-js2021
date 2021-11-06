// Creacion Set
let gadgets = new Set(['móvil', 'tablet', 'laptop', 'teclado', 'mouse', 'monitor', 'impresora']);

// Tamaño de set
console.log('Cantida inicial de elementos: ', gadgets.size);

// Agregar elementos al set
gadgets.add('cámara');
gadgets.add('speaks');
gadgets.add('speaks');
gadgets.add('speaks');

// Eliminar elementos de set
gadgets.delete('cámara');

// Comprobar existencia de elementos en set
console.log('Existe cámara: ', gadgets.has('cámara'));
console.log('Existe laptop: ', gadgets.has('laptop'));

// Tamaño de set
console.log('Cantida final de elementos: ', gadgets.size);

// Recorrer Set
gadgets.forEach( g => console.log(g));

// Limpiar set  
gadgets.clear();
console.log('Cantida final de elementos: ', gadgets.size);
gadgets.forEach( g => console.log(g));

