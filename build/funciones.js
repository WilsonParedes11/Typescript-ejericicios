"use strict";
//Crear Funcione en TypeScript
function displayAlert(message) {
    alert('Ther message is' + message);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
