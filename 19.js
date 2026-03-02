const prompt = require('prompt-sync')();

let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));
let operacion = prompt("Ingresa la operación (+, -, *, /, %): ");

if (operacion === '+') {
    console.log("Resultado: " + (num1 + num2));
} else if (operacion === '-') {
    console.log("Resultado: " + (num1 - num2));
} else if (operacion === '*') {
    console.log("Resultado: " + (num1 * num2));
} else if (operacion === '/') {
    if (num2 === 0) {
        console.log("No se puede dividir entre 0");
    } else {
        console.log("Resultado: " + (num1 / num2));
    }
} else if (operacion === '%') {
    console.log("Resultado: " + (num1 % num2));
} else {
    console.log("Operación inválida");
}