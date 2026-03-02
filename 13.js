const prompt = require('prompt-sync')();

let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));
let codigo = Number(prompt("Ingresa código (1=suma, 2=multiplicación, 3=división): "));

if (codigo === 1) {
    console.log("Suma: " + (num1 + num2));
} else if (codigo === 2) {
    console.log("Multiplicación: " + (num1 * num2));
} else if (codigo === 3) {
    if (num2 === 0) {
        console.log("No se puede dividir entre 0");
    } else {
        console.log("División: " + (num1 / num2));
    }
} else {
    console.log("Código inválido");
}