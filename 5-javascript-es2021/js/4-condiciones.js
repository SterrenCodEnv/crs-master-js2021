// Operadores ternario
const personas = ["Jose", 50]

// Condicion tradicional.
if (personas[1] >= 18) {
    //console.log("Es mayor de edad");
}else{
    //console.log("Es menor de edad");
};

// Condicion ternaria.
personas[1] >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");
const existe = personas ? 'Existe' : 'No existe';
//console.log(existe);

// Diferencia entre "==" y "===" (== es igual que === es identico) NO evalua el tipo de dato.
// Diferencias entre "!=" y "!==" (!= es diferente que !== es diferente) SI evalua el tipo de dato.

let edad1 = 20;
let edad2 = "20";

if(edad1 == edad2){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

if(edad1 === edad2){
    console.log("Son identicos");
}else{
    console.log("No son identicos");
}