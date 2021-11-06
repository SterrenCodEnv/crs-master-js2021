// Seleccionar elementos por id

// Forma tradicional
//let contenedor = document.getElementById('contenedor');

// Forma con querySelector
let contenedor = document.querySelector('#contenedor');
contenedor.style.border = '3px solid white';
contenedor.style.height = '50px';
contenedor.innerText = 'Hola Visitante';
contenedor.style.backgroundColor = '#2172AB';
contenedor.style.color = '#fff';
contenedor.style.fontSize = '30px';
contenedor.style.textAlign = 'center';
contenedor.style.padding = '10px';


// Seleccionar elementos por clase
let footerContenedores = document.querySelectorAll('.footer-contenedor');
footerContenedores.forEach((contenedor, indice) => {
    contenedor.style.height = '50px';
    contenedor.innerText = `Caja N° ${indice + 1}`;
    
    if (footerContenedores.length === indice + 1) {
        contenedor.innerText = `Ultima Caja...`;
    }

    contenedor.style.border = '3px solid white';
        contenedor.style.backgroundColor = '#2172AB';
        contenedor.style.color = '#fff';

    if (indice % 2 == 0) {
        contenedor.style.border = '3px solid #2172AB';
        contenedor.style.backgroundColor = '#F0F8FF';
        contenedor.style.color = '#2172AB';
    }

    contenedor.style.fontSize = '30px';
    contenedor.style.textAlign = 'center';
    contenedor.style.padding = '10px';
    contenedor.style.marginTop = '25px';
});


