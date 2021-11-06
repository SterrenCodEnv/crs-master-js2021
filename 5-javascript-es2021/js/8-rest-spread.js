// Spread operator, expande valores.
let heroes = ['Flash', 'Arrow', 'Superman', 'Batman'];
let villanos = ['Lex Luthor', 'Joker', 'Riddler'];

// heroes sin spread
//console.log(heroes[0], heroes[1], heroes[2], heroes[3]);

// villados con spread
//console.log(...villanos);

let superHeroes = ['Linterna Verde', ...heroes, 'Spiderman'];
//console.log(superHeroes);


// Rest operator, recibe una cantidad de parametros y los guarda en un array
function peliculas(nombre, ...rest) {
    console.log(nombre);
    console.log(rest);
}

peliculas('Avengers', 'Ironman', 'Hulk', 'Thor');