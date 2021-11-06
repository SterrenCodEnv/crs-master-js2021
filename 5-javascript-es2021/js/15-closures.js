//Closure permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.

const coche = (
    function () {
        let _marca, _velocidad = 0, _dominio = '';

        function setMarca(marca) {
            _marca = marca;
        }

        function getMarca() {
            return _marca;
        }

        function setDominio(puertas) {
            _dominio = puertas;
        }

        function getDominio() {
            return _dominio;
        }

        function acelerar() {
            _velocidad += 30;
        }

        function frenar() {
            _velocidad -= 10;
        }

        function getVelocidad() {
            return _velocidad;
        }

        return {
            setMarca,
            getMarca,
            setDominio,
            getDominio,
            acelerar,
            frenar,
            getVelocidad
        }
    }
);

let auto = coche();
auto.setMarca('Ford');
auto.setDominio('ABC123');
auto.acelerar();
auto.acelerar();
auto.acelerar();
auto.acelerar();
auto.acelerar();
auto.frenar();
console.log(`El vehiculo ${auto.getMarca()} con dominio: ${auto.getDominio()} circulaba a ${auto.getVelocidad()}km/h`);
