let titulo = 'Batman vs Superman', year = 2017, pais = 'Estados Unidos', genero = 'accion';

const pelicula = {titulo, year, pais, [genero]: true, mostrar : () => console.log(`${titulo} - ${year} - ${pais} - ${genero}`)};
//console.log(Object.values(pelicula));

Object.entries(pelicula).forEach(p => console.log(p));
