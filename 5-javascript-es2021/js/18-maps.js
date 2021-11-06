const gadgetsAntiguos = {
    seis: 'Walkman',
    siete: 'Teléfono Fijo',
    ocho: 'Compact Disk',
}

const gadget = new Map(Object.entries(gadgetsAntiguos));
gadget.set(1, 'Notebook')
    .set(2, 'Smartphone')
    .set(2, 'Smartphone 2')
    .set(3, 'Tablet')
    .set('tv', 'Smart TV');

console.log(gadget.get('siete'));
console.log('Elemento con clave 4: ', gadget.has(4));

// WeakMap y WeakSet son iguales a Map y Set, pero no se pueden iterar porque no tienen un método para obtener un iterador. 
