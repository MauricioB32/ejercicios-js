const prompt = require('prompt-sync')();

let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));
let num3 = Number(prompt("Ingresa el tercer número: "));

if (num1 <= num2 && num2 <= num3) {
    console.log("Los números SÍ están en orden numérico ascendente");
} else {
    console.log("Los números NO están en orden numérico");
}