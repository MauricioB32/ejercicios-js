const prompt = require('prompt-sync')();

let num = Number(prompt("Ingresa un número entero: "));

if (num >= 30 || num < 0) {
    console.log("El número es 30 o mayor, o es negativo");
} else if (num === 0) {
    console.log("Cero");
} else if (num === 1) {
    console.log("Unidad");
} else {
    // Verificar si es primo
    let esPrimo = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    // Verificar si es potencia de 2
    let esPotenciaDe2 = (num & (num - 1)) === 0;

    if (esPrimo) {
        console.log("El número es PRIMO");
    } else if (esPotenciaDe2) {
        console.log("El número es POTENCIA DE 2");
    } else {
        console.log("El número es COMPUESTO");
    }
}