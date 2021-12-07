const lista = document.querySelectorAll("#lista li")
lista.forEach(elem => {
    let continente = elem.dataset.continente;
    elem.innerHTML += ` (${capitalizar(continente)})`;
});

function capitalizar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}