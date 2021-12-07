const tomates = document.querySelectorAll('.tomate');
const huerto = document.querySelector('#huerto');

tomates.forEach((tomate, indice) => {

    tomate.setAttribute('id', `tomate-${indice}`);

    // Dragstart - Solo se lanza una vez
    tomate.addEventListener("dragstart", (e) => {
        console.log('Has moviento el tomate N° ' + (indice + 1));

        // Tranferir informacion
        e.dataTransfer.setData("text", e.target.id);
    });

    // Drag - Se lanza cada vez que se mueve el elemento
    /* tomate.addEventListener("drag", () => {
        console.log('Estas moviento el tomate N° ' + (indice + 1));
    }); */

    // Dragend - Se lanza cada vez que se suelta el elemento
    /* tomate.addEventListener("dragend", () => {
        console.log('Has soltado el tomate N° ' + (indice + 1));
    }); */
});

// Dragenter - Se lanza cuando el elemento se pone encima de otro
/* huerto.addEventListener("dragenter", (e) => {
    e.preventDefault();
    console.log('Has entrado en el huerto');
}); */

// Dragover - Se lanza cuando el elemento se pone encima de otro
/* huerto.addEventListener("dragenter", (e) => {
    e.preventDefault();
    console.log('Has entrado en el huerto');
});  */

// Dragover - Se lanza cuando el elemento se pone encima de otro
huerto.addEventListener("dragover", (e) => {
    e.preventDefault();
    //console.log('Tomate moviendose');
});

// Drop - Se lanza cuando el elemento se suelta sobre otro
huerto.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log('Has enterrado el tomate en el huerto');

    // Recuperar informacion
    const tomate = e.dataTransfer.getData("text");
    e.target.appendChild(document.querySelector(`#${tomate}`));
});

// Dragleave - Se lanza cuando el elemento sale de la zona de interacción
/* huerto.addEventListener("dragleave", (e) => {
    e.preventDefault();
    console.log('Has quitado el tomate del huerto');
}); */