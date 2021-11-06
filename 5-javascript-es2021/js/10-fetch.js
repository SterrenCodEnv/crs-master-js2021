window.addEventListener("DOMContentLoaded", event => {
    let contenedor = document.querySelector('#contenedor');
    contenedor.innerHTML = '<h1>Cargando...</h1>';

    // https://jsonplaceholder.typicode.com/
    // Peticion Ajax moderna
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            contenedor.innerHTML = '';
            mostrar(contenedor, data);
        })
        .catch(error => console.log('La peticion AJAX ha fallador... ', error));

    // DOM
    const mostrar = (cont, elem) => {
        elem.forEach(e => {
            let muestra = `
        <br>
        <article>
        <h2>${e.id} - ${e.title}</h2>
        <p>${e.body}</p>
        </article>
        <hr>
        `;
            cont.innerHTML += muestra;
        });

        return elem;
    }
});

