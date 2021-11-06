// Funciones Anidadas
let nombre = 'Juan';
function mostrarNombre() {
    let apellido = 'Perez';
    function mostrarApellido(){
        let profesion = 'Desarrollador web';
        function mostrarProfesion(){
            return `${nombre} ${apellido} (${profesion})`;
        }
        return mostrarProfesion();
    }
    return mostrarApellido();
}
console.log(mostrarNombre());
