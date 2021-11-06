let nombre = 'Juan';
let apellido = 'Sterren';
let profesion = 'Desarrollador Web';
let nya = `Sin formato: 
${nombre} ${apellido} 
${profesion}`;
console.log(nya);

function cards(nombre, apellido, profesion) {
    let fichaTecnica = `
<div class="card">
<h2>${nombre} ${apellido}</h2>
<h4>${profesion}</h4>
</div>
`;

return fichaTecnica;
}

let boxFichaTecnica = document.createElement("section");
boxFichaTecnica.innerHTML = cards('Carmine', 'Toy', 'Investor Integration Technician');
boxFichaTecnica.innerHTML += cards('Eladio', 'Doyle', 'Dynamic Integration Specialist');
boxFichaTecnica.innerHTML += cards('Shayne', 'Rosenbaum', 'Investor Brand Coordinator');

document.addEventListener("DOMContentLoaded", function () {
    //document.body.appendChild(boxFichaTecnica);
    document.querySelector("#contenedor").appendChild(boxFichaTecnica);
}, false);
